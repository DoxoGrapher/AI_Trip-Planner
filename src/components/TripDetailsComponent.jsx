import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DownloadingLoader } from './Loader.jsx';

const TripDetailsComponent = () => {
  const location = useLocation();
  const [tripDetails, setTripDetails] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const pdfRef = useRef(); // For PDF capture

  useEffect(() => {
    let details = location.state?.tripDetails;

    if (typeof details === 'string') {
      const cleanString = details.replace(/```json|```/g, '').trim();
      try {
        const parsed = JSON.parse(cleanString);
        setTripDetails(parsed);
      } catch (err) {
        console.error('Failed to parse tripDetails JSON:', err);
      }
    } else if (typeof details === 'object') {
      setTripDetails(details);
    }
  }, [location]);

  const handleDownloadPdf = () => {
    setIsGenerating(true);
  
    const input = pdfRef.current;
    html2canvas(input, { scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png' , 0.8);
      const pdf = new jsPDF('p', 'mm', 'a4' , true);
  
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
  
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');

      heightLeft -= pdfHeight;
  
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }
  
      pdf.save('TripDetails.pdf');
      setIsGenerating(false); // Stop loading
    }).catch((error) => {
      console.error('PDF generation failed:', error);
      setIsGenerating(false); 
    });
  };
  
  

  if (!tripDetails) return <div>No trip details found.</div>;

  return (
    <div className="relative">
      <button
        onClick={handleDownloadPdf}
        className={`fixed top-4 right-4 z-50 px-4 py-2 text-blue-500 rounded-lg border border-blue-500 justify-center items-center flex ${isGenerating ? "gap-2" : "gap-0"}`}
      >
        Download {isGenerating ? <DownloadingLoader /> : <img src='/download.png' alt='Download' className='inline-block w-5 h-5 ml-2' />}
      </button>

      <div ref={pdfRef} className="mx-auto px-[15%] py-12 rounded-lg shadow-lg w-full bg-white">
        <h1 className="text-6xl font-semibold pt-10 mb-4">AI Trip Planner 🌴</h1>
        <p className='text-blue-500 text-lg tracking-wider mb-4'>Plan your dream trip with personalized itineraries. </p>

        <div className="text-lg text-gray-900 mb-10 flex flex-row gap-5">
          <p className='bg-gray-200 px-3 py-1 rounded-lg font-semibold'>{tripDetails.days.length} Days</p>
          <p className='bg-gray-200 px-3 py-1 rounded-lg font-semibold'>{tripDetails.to}</p>
          <p className='bg-gray-200 px-3 py-1 rounded-lg font-semibold tracking-wide'>{tripDetails.budget}</p>
        </div>

        <div className='border-2 border-black/10 rounded-lg shadow-md p-10 space-y-10'>
          {tripDetails.days.map((day, idx) => (
            <div key={idx} className="px-12 py-5 rounded-lg shadow-sm border-black/10 border-2 space-y-10">
              <h2 className="text-3xl font-bold text-black text-left border-gray-500">{day.day} - {tripDetails.to}</h2>
              <div className="mt-5 space-y-4">
                {day.activities.map((activity, activityIdx) => (
                  <div key={activityIdx} className="flex flex-col items-start border-2 border-gray-300 shadow-md rounded-lg p-4">
                    <p className="text-sm text-gray-500">{activity.time}</p>
                    <p className="text-lg text-gray-800">{activity.activity}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-gray-50 p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600">Total Cost</h2>
          <p className="text-lg text-gray-700">{tripDetails.total_per_person.min} - {tripDetails.total_per_person.max} per person</p>
        </div>

        <div className="mt-6 bg-gray-50 p-10 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-600">Travel Tips</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            {tripDetails.tips.map((tip, idx) => (
              <li key={idx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TripDetailsComponent;
