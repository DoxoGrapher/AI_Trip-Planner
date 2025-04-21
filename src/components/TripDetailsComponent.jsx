import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TripDetailsComponent = () => {
  const location = useLocation();
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    let details = location.state?.tripDetails;

    if (typeof details === 'string') {
      // Remove code block syntax (```)
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

  if (!tripDetails) return <div>No trip details found.</div>;


  
  // const tripDetails = {
  //   "title": "Solo Cultural Trip to Mathura",
  //   "from": "Delhi",
  //   "to": "Mathura",
  //   "budget": "₹5,000–₹10,000",
  //   "days": [
  //     {
  //       "day": "Day 1: Arrival in Mathura & Exploring the Ghats",
  //       "activities": [
  //         {
  //           "time": "Morning",
  //           "activity": "Arrive in Mathura from Delhi. Consider an early morning start to maximize your time. Transportation options include train or bus. Budget around ₹300-₹500 for travel."
  //         },
  //         {
  //           "time": "Afternoon",
  //           "activity": "Check-in to a budget-friendly guesthouse or ashram (if you haven't pre-booked, explore options near the Mathura Railway Station). Aim for something under ₹500-₹800 per night. Freshen up and head to the ghats along the Yamuna River."
  //         },
  //         {
  //           "time": "Afternoon",
  //           "activity": "Visit Vishram Ghat, the most important ghat where Lord Krishna is believed to have rested after defeating Kansa. Observe the evening aarti ceremony (around sunset) for a spiritual experience."
  //         },
  //         {
  //           "time": "Evening",
  //           "activity": "Explore the local markets near Vishram Ghat. Sample street food like peda (Mathura's famous sweet) and kachori. Budget ₹200-₹300 for food."
  //         },
  //         {
  //           "time": "Night",
  //           "activity": "Enjoy dinner at a local restaurant. Opt for vegetarian thalis to keep costs down. Budget ₹200-₹300. Return to your accommodation for the night."
  //         }
  //       ]
  //     },
  //     {
  //       "day": "Day 2: Temples of Mathura & Vrindavan",
  //       "activities": [
  //         {
  //           "time": "Morning",
  //           "activity": "Visit the Shri Krishna Janmabhoomi Temple, the birthplace of Lord Krishna. Be prepared for security checks and restrictions on belongings (cameras and phones might need to be deposited). Entry is usually free, but donations are welcome."
  //         },
  //         {
  //           "time": "Late Morning",
  //           "activity": "Travel to Vrindavan (approx. 15km from Mathura). Local buses or auto-rickshaws are readily available. Budget ₹50-₹100 for transport."
  //         },
  //         {
  //           "time": "Afternoon",
  //           "activity": "Visit the Banke Bihari Temple, one of the most revered temples in Vrindavan. It's known for its unique darshan where the curtains are frequently drawn and opened."
  //         },
  //         {
  //           "time": "Afternoon",
  //           "activity": "Explore the ISKCON Vrindavan temple, a beautiful modern temple dedicated to Krishna consciousness. Enjoy the peaceful atmosphere and perhaps have a vegetarian lunch at their restaurant (budget ₹200-₹300)."
  //         },
  //         {
  //           "time": "Evening",
  //           "activity": "Witness the evening aarti at Prem Mandir, a stunning white marble temple illuminated with colorful lights. It's a captivating spectacle."
  //         },
  //         {
  //           "time": "Night",
  //           "activity": "Return to Mathura or find accommodation in Vrindavan if you prefer. Have dinner and relax."
  //         }
  //       ]
  //     },
  //     {
  //       "day": "Day 3: Goverdhan Parikrama & Departure",
  //       "activities": [
  //         {
  //           "time": "Morning",
  //           "activity": "Travel to Goverdhan (approx. 26km from Mathura). Hire a shared auto or take a local bus (budget ₹50-₹100)."
  //         },
  //         {
  //           "time": "Morning",
  //           "activity": "Participate in the Goverdhan Parikrama, a sacred circumambulation of the Goverdhan Hill. You can walk the entire 21km route (takes several hours) or opt for a shorter segment depending on your fitness and time."
  //         },
  //         {
  //           "time": "Afternoon",
  //           "activity": "Visit the Dan Ghati Temple in Goverdhan. This temple is dedicated to Lord Krishna and is located on the parikrama route."
  //         },
  //         {
  //           "time": "Late Afternoon",
  //           "activity": "Have lunch in Goverdhan. Simple meals are available at reasonable prices (budget ₹200-₹300)."
  //         },
  //         {
  //           "time": "Evening",
  //           "activity": "Return to Mathura or directly to Delhi from Goverdhan depending on your travel arrangements. Allow ample time for travel."
  //         },
  //         {
  //           "time": "Night",
  //           "activity": "Depart from Mathura/Goverdhan to Delhi."
  //         }
  //       ]
  //     }
  //   ],
  //   "total_per_person": {
  //     "min": "₹3,000",
  //     "max": "₹6,000"
  //   },
  //   "tips": [
  //     "Bargain while shopping for souvenirs and hiring auto-rickshaws.",
  //     "Dress modestly when visiting temples (cover shoulders and knees).",
  //     "Stay hydrated, especially during the warmer months.",
  //     "Be aware of your surroundings and take precautions against petty theft.",
  //     "Learn a few basic Hindi phrases for better communication."
  //   ]
  // }

  return (
    <div className="mx-auto px-[15%] py-12 rounded-lg shadow-lg w-full">
      <h1 className="text-6xl font-semibold pt-10 mb-4">AI Trip Planner 🌴</h1>
      <p className='text-blue-500 text-lg tracking-wider mb-4'>Plan your dream trip with personalized itineraries. </p>
      {/* <h1 className="text-3xl font-bold text-center mb-4">{tripDetails.title}</h1> */}
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
  );
};

export default TripDetailsComponent;
