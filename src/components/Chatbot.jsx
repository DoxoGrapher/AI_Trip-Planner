import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Loader from "./Loader.jsx";
import { useNavigate } from "react-router-dom";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const questions = [
  "From where are you traveling?",
  "Where would you like to go?",
  "How many days do you plan to stay?",
  "What’s your budget?",
  "What kind of activities do you enjoy?",
  "Are you traveling solo or with others?",
  "Any hotel or transport preferences?",
  "Thank you for your input! Let's plan your trip. Wait for a moment. We will redirect you to the next page.",
];

const questionOptions = {
  3: ["1-2 days", "3-4 days", "5-7 days", "7+ days"],
  4: ["3,000-5,000", "5,000-10,000", "10,000 15,000", "15,000-20,000"],
  5: ["Adventure", "Relaxation", "Cultural", "Nightlife"],
  6: ["Solo", "Couple", "Family", "Friends"],
};

const ChatBot = () => {


  const inputref = useRef(null);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! I am your travel assistant.", from: "bot" },
    { text: questions[0], from: "bot" },
  ]);


  

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    

    if (messages.length > 14) {
      console.log("Reached message limit");
      console.log("Current Question Index:", currentQuestionIndex);
      console.log("Messages:", messages);
      inputref.current.disabled = true;
      setTimeout(() => {
        setLoading(true);
        fetchItinerary();
      }, 2000);
    }
  }, [messages]);


      const fetchItinerary = async () => {
        const prompt = createPromptFromMessages(messages);
  
        try {
          const res = await fetch('https://ai-trip-planner-mllnr3sqj-anshulgadia04s-projects.vercel.app/api/GenerateItinerary', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tripDetails: { prompt },
            }),
          });
  
          const data = await res.json();
  
          const itinerary =
            data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received';
  
          console.log('Response:', itinerary);
          navigate('/trip-details' , { state: {tripDetails :  itinerary } });

          // Optional: Show itinerary in UI or navigate to another page
        } catch (err) {
          console.error('Error calling Gemini API:', err);
        }
      };

  


  const handleOptionSelect = (option) => {
    setMessages((prev) => [...prev, { text: option, from: "user" }]);

    setTimeout(() => {
      const nextIndex = currentQuestionIndex;
      if (nextIndex < questions.length) {
        setMessages((prev) => [
          ...prev,
          { text: questions[nextIndex], from: "bot" },
        ]);
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    }, 1000);
  };


  const createPromptFromMessages = (messages = []) => {
    const getAnswer = (question) => {
      const index = messages.findIndex(
        (msg) =>
          msg.from === 'bot' &&
          msg.text &&
          msg.text.toLowerCase().includes(question.toLowerCase())
      );
      if (index !== -1 && messages[index + 1] && messages[index + 1].from === 'user') {
        return messages[index + 1].text;
      }
      return '';
    };
  
    const from = getAnswer('from where') || 'Udaipur';
    const to = getAnswer('where would you like to go') || 'Jaipur';
    const days = getAnswer('how many days') || '2';
    const budget = getAnswer('budget') || '5000–10000';
    const activity = getAnswer('activities') || 'relaxation';
    const people = getAnswer('solo or with others') || 'couple';
    const hotelTransport = getAnswer('hotel or transport preferences') || 'no';
  
    return `
  You are a travel planner bot.
  
  Plan a ${days}-day trip for a ${people} from ${from} to ${to} with a budget of ₹${budget}.
  They prefer ${activity} and have ${hotelTransport === 'no' ? 'no specific' : hotelTransport} hotel or transport preferences.
  
  ✅ Format your response in the following JSON structure:
  
  {
    "title": "Trip Title",
    "from": "Udaipur",
    "to": "Jaipur",
    "budget": "₹5,000–₹10,000",
    "days": [
      {
        "day": "Day 1",
        "activities": [
          {
            "time": "8:00 AM",
            "activity": "Start your day with a relaxing breakfast in a cozy atmosphere."
          },
          {
            "time": "9:30 AM",
            "activity": "Enjoy a cultural experience with live theatrical shows, perfect for relaxation."
          },
          {
            "time": "12:00 PM",
            "activity": "Indulge in a relaxing spa treatment to rejuvenate your body and mind."
          },
          {
            "time": "3:00 PM",
            "activity": "Participate in a calming yoga session to enhance relaxation."
          },
          {
            "time": "6:00 PM",
            "activity": "Savor delicious kababs in a relaxed dining setting."
          },
          {
            "time": "8:00 PM",
            "activity": "Enjoy a peaceful evening stroll in a scenic park."
          },
          {
            "time": "10:00 PM",
            "activity": "End your day by checking into a comfortable hotel."
          }
        ]
      },
      {
        "day": "Day 2",
        "activities": [
          {
            "time": "8:00 AM",
            "activity": "Enjoy a hearty breakfast to start your day."
          },
          {
            "time": "10:00 AM",
            "activity": "Relax and unwind while enjoying a round of golf."
          },
          {
            "time": "1:00 PM",
            "activity": "Enjoy a delicious and relaxing meal with family."
          },
          {
            "time": "3:00 PM",
            "activity": "Explore a vibrant area with shops and cafes."
          },
          {
            "time": "6:00 PM",
            "activity": "Enjoy a relaxed dinner with a variety of grilled dishes."
          },
          {
            "time": "8:00 PM",
            "activity": "Take a leisurely walk in a well-lit and scenic area."
          },
          {
            "time": "10:00 PM",
            "activity": "Settle down for the night in a cozy hotel."
          }
        ]
      }
    ],
    "total_per_person": {
      "min": "₹5,000",
      "max": "₹10,000"
    },
    "tips": [
      "Book in advance for lower fares",
      "Use metro to save money",
      "Check happy hour for nightlife deals"
    ]
  }
  
  📌 Make sure all content is within the specified budget and formatted properly.
  `;
  };
 

  const handleSend = (e) => {
    e.preventDefault();
    inputref.current.disabled = true;
    setTimeout(()=>{
      inputref.current.disabled = false;
    },1000)



    if (!input.trim()) {
      alert("Please enter a valid input");
      return;
    }

    setMessages((prev) => [...prev, { text: input.trim(), from: "user" }]);
    setInput("");

    setTimeout(() => {
      const nextIndex = currentQuestionIndex;
      if (nextIndex < questions.length) {
        setMessages((prev) => [
          ...prev,
          { text: questions[nextIndex], from: "bot" },
        ]);
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        console.log("All questions completed.");
      }
    }, 1000);
  };

  const currentOptions = questionOptions[currentQuestionIndex];

  useEffect(() => {
    gsap.fromTo(
      ".leftPart",
      {
        xPercent: -200,
        opacity: 0,
        ease: "power4.out",
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.75,

        ease: "power4.out",
      }
    );

    gsap.fromTo(
      ".rightPart",
      {
        xPercent: 100,
        opacity: 0,
        ease: "power4.out",
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.75,
        ease: "power4.out",
      }
    );
  }, []);

  useEffect(() => {
    if (messages.length === 0) return;

    const index = messages.length - 1;
    gsap.fromTo(
      `.msg-${index}`,
      {
        x: messages[index].from === "user" ? 100 : -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, [messages]);

  return (
    <div className="w-full h-screen flex md:flex-row flex-col items-center justify-center bg-[#A6C7D2] md:p-0 p-20 overflow-x-hidden">

      <div className="leftPart md:w-1/2 w-full max-w-xl mx-auto border rounded-2xl overflow-hidden shadow-lg flex flex-col h-[600px] overflow-x-hidden">
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-[url('/chatbotbg.jpg')] bg-cover bg-center bg-no-repeat">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`chat-message msg-${index} px-4 py-2 rounded-2xl max-w-[70%] ${
                  msg.from === "user"
                    ? "bg-[#0f55c6] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSend}
          className="p-4 border-t flex items-center gap-2 bg-gray-200"
        >
          {currentOptions ? (
            <div className="flex gap-2 flex-wrap">
              {currentOptions.map((option, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleOptionSelect(option)}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <>
              <input
                type="text"
                className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Type your answer..."
                value={input}
                ref={inputref}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
              >
                Send
              </button>
            </>
          )}
        </form>

        <div className={`absolute bg-black/25 h-full top-1/2 left-0 transform -translate-y-1/2 w-full justify-center ${loading ? "flex" : "hidden"}`}>
          <Loader/>
        </div>
      </div>


      <div className="rightPart h-screen w-1/2 hidden md:block">
        <img
          className="h-full w-full object-cover rounded-l-[50px]"
          src="/chatbotbg.jpg"
        />
      </div>
    </div>
  );
};

export default ChatBot;
