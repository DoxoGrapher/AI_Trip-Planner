import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import { useState , useEffect , useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tr } from "framer-motion/client";
import ShowCaseImages from "./ShowCaseImages.jsx";


gsap.registerPlugin(ScrollTrigger);

function AIPage() {

  useEffect(() => {

    const isMobile = window.innerWidth <= 768;

    gsap.fromTo(
      '.theMost',
      {
        xPercent: -200,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.theMost',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    gsap.fromTo(
      '.Craft',
      {
        scale : 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.Craft',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    gsap.fromTo(
      '.rightImage',
      {
        xPercent: 200,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.rightImage',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    gsap.fromTo(
      '.getInspired',
      {
        xPercent: 200,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.getInspired',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    gsap.fromTo(
      '.Extract',
      {
        scale : 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.Extract',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    gsap.fromTo(
      '.leftImage',
      {
        xPercent: -200,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.rightImage',
          start: 'top 75%',  // when top of the element hits 80% of the viewport
          toggleActions: 'play none play none',
        },
      }
    );

    const tlBox = gsap.timeline({scrollTrigger:{
      trigger: ".box",
      start: "top 80%",
      
    } , defaults : {ease: "power1.in()"}});

    tlBox.fromTo('.box1' , {
      xPercent: 108,
    },{
      xPercent: 0,
      duration: 1 
    })

    tlBox.fromTo('.box3' , {
      xPercent: -108,
    },{
      xPercent: 0,
      duration: 1 
    },"<")

    tlBox.fromTo('.box2' , {
      yPercent: -25,
      opacity: 0,
      },{
      yPercent: 0,
      opacity: 1,
    },"-=0.5")


  }, []);
  


  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="w-full md:h-screen h-fit mt-10 relative">
    
      <div className="w-3/4 m-auto items-center">
        <h1 className="text-center md:text-5xl md:font-extrabold text-xl font-bold">
          Your <span className=" text-[#c8a0ff]">AI-Powered</span> Trip
        </h1>
        <div className="mt-10 space-y-15">
          <div className="md:flex md:flex-row">
            <div className="md:w-1/2 md:space-y-7 w-full">
              <h1 className="theMost md:text-3xl text-xl md:font-bold font-semibold bg-[#dcffa0b3] w-fit text-center">
                The most optimal
              </h1>
              <p className="Craft text-[#616161] md:w-4/5 w-full m-0 mt-3 text-sm md:text-lg">
                Craft your perfect itinerary with Travl AI. Our advanced
                algorithms take into account your selected explore-sights,
                dining, and lodging preferences to create the optimal travel
                plan tailored just for you.
              </p>
            </div>
            <div className="md:w-1/2 md:mt-0 w-3/4 m-auto">
              <img
                src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fdestinations2.webp&w=256&q=75"
                className="rightImage md:w-64 md:m-auto w-0 "
              />
            </div>
          </div>

          <div className="md:flex md:flex-row">
            <div className="w-1/2 mt-0">
              <img
                src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fmap.webp&w=640&q=75"
                className="leftImage md:w-64 md:m-auto w-0"
              />
            </div>
            <div className="md:w-1/2 space-y-7 w-full">
              <h1 className="getInspired md:text-3xl text-xl md:font-bold font-semibold bg-[#dcffa0b3] w-fit">
                Get Inspired
              </h1>
              <p className="Extract text-[#616161] md:w-4/5 w-full m-0 mt-3 text-sm md:text-lg">
                Extract valuable travel insights from Instagram reels and
                TikToks, explore the mentioned explore-sights, and effortlessly
                include them in your own adventure with Travl AI.
              </p>
            </div>
          </div>
        </div>

        <div className=" space-y-3 md:space-y-7 md:mt-16 mt-12">
          <p className="text-[#c8a0ff] text-center">Travl AI</p>
          <h1 className="text-center md:text-5xl md:font-bold text-2xl font-semibold">
            The only tool youll ever need!
          </h1>
          <p className="text-[#9e9e9e] md:w-3/5 w-full m-auto text-center md:text-xl text-sm">
            Say goodbye to the stress of planning and hello to personalized
            recommendations, efficient itineraries, and seamless dining
            experiences.
          </p>
        </div>
      </div>

      <div className="md:flex md:flex-row justify-evenly md:w-[90%] m-auto md:mt-36 mt-5">
        <div className=" md:w-1/4 md:space-y-3 w-[90%] rounded-md md:m-0 m-auto border md:border-none px-4 py-2 md:p-0 md:mb-0 mb-3">
          <div className="flex flex-row space-x-4">
            <img
              src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fmap.webp&w=384&q=75"
              className="md:w-20 w-12"
            />
            <h1 className="text-lg md:text-2xl md:font-bold">Optimal Route Planning</h1>
          </div>
          <p className=" text-[#9e9e9e] md:text-[18px] text-sm">
            Our AI algorithms analyze your preferences to craft the most
            efficient route, saving you time and effort.
          </p>
        </div>

        <div className=" md:w-1/4 md:space-y-3 w-[90%] rounded-md md:m-0 m-auto border md:border-none px-4 py-2 md:p-0 md:mb-0 mb-3">
          <div className="flex flex-row space-x-4">
            <img
              src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Fstory.webp&w=384&q=75"
              className="md:w-20 w-12"
            />
            <h1 className=" text-lg md:text-2xl md:font-bold">Personalize Your Adventure</h1>
          </div>
          <p className=" text-[#9e9e9e] md:text-[18px] text-sm">
            Shape your journey by freely adding, editing, or deleting activities
            from your itinerary.
          </p>
        </div>

        <div className=" md:w-1/4 md:space-y-3 w-[90%] rounded-md md:m-0 m-auto border md:border-none px-4 py-2 md:p-0 md:mb-0 mb-3">
          <div className="flex flex-row space-x-4">
            <img
              src="https://tripplanner.ai/_next/image?url=%2Fillustrations%2Ffood.webp&w=384&q=75"
              className="md:w-20 w-12"
            />
            <h1 className="text-lg md:text-2xl md:font-bold">
              Local Cuisine Recommendations
            </h1>
          </div>
          <p className=" text-[#9e9e9e] text-[18px]">
            Discover local cuisines and hidden gems recommended by our AI,
            tailored to your taste buds.
          </p>
        </div>
      </div>

      <div className="md:mt-36 mt-20">
        <h2 className="md:text-5xl text-2xl font-bold text-center mb-5">
          Dont take our word for it
        </h2>
        <p className="md:w-[58%] text-[#9e9e9e] md:text-2xl text-lg text-center m-auto w-full">
          See what our users have to say about revolutionizing their travel
          experiences with Travl AI.
        </p>

        <div className="box md:flex md:flex-row w-[90%] m-auto justify-evenly mt-14">
          <div className="box1 bg-white border-2 rounded-lg md:w-[30%] w-full p-6 h-64 md:mt-0">
            <div className="flex flex-row mb-5">
              <img
                src="https://tripplanner.ai/_next/image?url=%2Flanding%2Fimages%2Freviews%2Fdavid_jordan.webp&w=128&q=75"
                className=" w-12 rounded-full"
              />
              <div className=" ml-3">
                <h2 className=" text-lg">David Jordan</h2>
                <p className=" text-xs text-[#9e9e9e]">Digital nomad</p>
              </div>
            </div>
            <div className=" space-y-2">
              <img className="w-[30%]" src="/star.jpg" />
              <p className=" text-[18px] font-medium">
                Travl AI saves time and stress by aiding travel planning,
                relieving indecision or uncertainty.
              </p>
            </div>
          </div>

          <div className="box2 bg-white border rounded-lg md:w-[30%] w-full p-6 md:mt-16 h-64 mt-6">
            <div className="flex flex-row mb-5">
              <img
                src="https://tripplanner.ai/_next/image?url=%2Flanding%2Fimages%2Freviews%2Ftushar.webp&w=128&q=75"
                className=" w-12 rounded-full"
              />
              <div className=" ml-3">
                <h2 className=" text-lg">Tushar</h2>
                <p className=" text-xs text-[#9e9e9e]">Student</p>
              </div>
            </div>
            <div className=" space-y-2">
              <img className="w-[30%]" src="/star.jpg" />
              <p className=" text-[18px] font-medium">
                Travl AI offers diverse planning options in a
                user-friendly interface. Simplifies travel planning for
                enthusiasts.
              </p>
            </div>
          </div>

          <div className="box3 bg-white border-2 rounded-lg md:w-[30%] w-full p-6 h-64 md:mt-0 mt-6">
            <div className="flex flex-row mb-5">
              <img
                src="https://tripplanner.ai/_next/image?url=%2Flanding%2Fimages%2Freviews%2Fsteve_j.webp&w=128&q=75"
                className=" w-12 rounded-full"
              />
              <div className=" ml-3">
                <h2 className=" text-lg">Steve J</h2>
                <p className=" text-xs text-[#9e9e9e]">Student</p>
              </div>
            </div>
            <div className=" space-y-2">
              <img className="w-[30%]" src="/star.jpg" />
              <p className=" text-[18px] font-medium">
                I love traveling but hate planning. This app quickly organizes
                trip agendas, reducing decision fatigue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ShowCaseImages/>

      <footer className="bg-white border-t-2 md:mt-36 mt-10">
        <div className="md:mx-auto md:w-full md:max-w-screen-xl md:p-4 md:py-6 ">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a
                className="flex items-center space-x-3 rtl:space-x-reverse md:w-full w-40 md:m-0 m-auto md:mt-0 mt-5"
              >
                <img
                  src="/logo1.png"
                  className="h-16"
                  alt="Flowbite Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
                  Travl.AI
                </span>
              </a>
              <p className="md:w-80 w-72 m-auto md:m-0 text-[#9e9e9e] md:text-left text-center">Turn your next trip into a hassle-free experience with Travl AI.</p>
            </div>
            <div className="flex flex-row md:justify-end justify-around space-x-16">
              <div className="">
                <h2 className="md:mb-6 text-sm text-center font-bold text-black">
                  Legal
                </h2>
                <ul className="text-black font-medium">
                  <li className="md:mb-4">
                    <a className="text-center hover:underline">
                    Terms and Conditions
                    </a>
                  </li>
                  <li className="text-center">
                    <a  className="text-center hover:underline">
                    Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="md:mb-6 text-sm text-center font-bold text-black ">
                    Support
                </h2>
                <ul className="text-black font-medium">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                     Contact Us
                    </a>
                  </li>
                </ul>
              </div>

            </div>



          </div>
          <hr className="my-6 border-gray-200 mx-auto" />
          <div className="flex items-center justify-between md:px-0 px-2 md:py-0 py-2 mb-4">
            <span className="text-sm text-gray-500 text-center">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Travl™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
    </>
  );
}

export default AIPage;
