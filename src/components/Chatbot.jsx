import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Loader from "./Loader.jsx";
import { tr } from "framer-motion/client";

const questions = [
  "Where would you like to go?",
  "How many days do you plan to stay?",
  "What’s your budget?",
  "What kind of activities do you enjoy?",
  "Are you traveling solo or with others?",
  "Any hotel or transport preferences?",
  "Thank you for your input! Let's plan your trip. Wait for a moment. We will redirect you to the next page.",
];

const questionOptions = {
  2: ["1-2 days", "3-4 days", "5-7 days", "7+ days"],
  3: ["3,000-5,000", "5,000-10,000", "10,000 15,000", "15,000-20,000"],
  4: ["Adventure", "Relaxation", "Cultural", "Nightlife"],
  5: ["Solo", "Couple", "Family", "Friends"],
};

const ChatBot = () => {
  const inputref = useRef(null);
  const messagesEndRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(1);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hello! I am your travel assistant.", from: "bot" },
    { text: questions[0], from: "bot" },
  ]);



  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    if (messages.length > 12) {
      console.log("Reached message limit");
      console.log("Current Question Index:", currentQuestionIndex);
      console.log("Messages:", messages);
      inputref.current.disabled = true;
      setTimeout(() => {
        setLoading(true);
      }, 2000);
    }
  }, [messages]);

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

  const handleSend = (e) => {
    e.preventDefault();

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

    gsap.fromTo(
      ".user",
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
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-gray-50">
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
                    ? "bg-blue-600 text-white"
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
