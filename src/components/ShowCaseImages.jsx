import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'


const ShowCaseImages = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const tl = gsap.timeline({defaults: {duration: 0.1 , ease: "power4.out"} , 
        scrollTrigger: {
          trigger: '.images',
          start: 'top top',
          scrub: 1,
        }});
        
        tl
        .to('.one' , {
          scale: 2,
          yPercent :-50, 
          xPercent :-50, 
          opacity: 0,
        })
    
        .to('.two' , {
          scale: 1.5,
          yPercent :100, 
          xPercent :-80, 
          opacity: 0,
        },"<")
    
        .to('.three' , {
          scale: 2,
          yPercent : -100, 
          opacity: 0,
        },"<")
    
        .to('.four' , {
          scale: 2.5,
        },"<")
    
        .to('.five' , {
          scale: 1.2,
          yPercent : 100, 
          opacity: 0,
        },"<")
    
        .to('.six' , {
          scale: 3,
          yPercent : -100, 
          xPercent : 200, 
          opacity: 0,
        },"<")
    
    
        .to('.seven' , {
          scale: 3,
          yPercent : 100, 
          xPercent : 100, 
          opacity: 0,
        },"<")
      })


  return (
    <div className="starting w-full m-auto mt-32 md:space-y-10 space-y-5 overflow-hidden md:overflow-visible">
        <h1 className=" md:text-5xl text-2xl font-bold text-center">
          Journey Inspirations from Travelers
        </h1>
        <p className=" text-[#9e9e9e] md:text-xl text-lg md:w-1/2 m-auto text-center w-full md:mt-0 mt-4">
          Dive into unique trip itineraries crafted by our global travelers.
          Find your next adventure and share your own journey with fellow
          explorers.
        </p>

        <div className='images relative h-[300vh] bg-blue-50'>
            <div className='sticky h-[100vh] top-0 overflow-hidden'>
                <div className='flex flex-col md:flex-row justify-center gap-10 items-center w-full h-full'>
                    <div className='flex flex-col  justify-center items-center space-y-10'>
                            <img className='one w-[500px] md:h-[600px] object-cover rounded-3xl' src='/p.jpg'/>
                            <img className='two w-[500px] md:h-[300px] object-cover rounded-3xl' src='/taj.jpg'/>
                    </div>
                    <div className='flex flex-col  justify-center items-center space-y-10'>
                            <img className='three w-[500px] h-[300px] object-cover rounded-3xl' src='/temple.jpeg'/>
                            <img className='four w-[500px] h-[300px] z-50 object-cover rounded-3xl' src='/m.jpg'/>
                            <img className='five w-[500px] h-[300px] object-cover rounded-3xl' src='/mountain.jpg'/>
                    </div>
                    <div className='flex flex-col  justify-center items-center space-y-10'>
                            <img className='six w-[500px] md:h-[400px] object-cover rounded-3xl' src='/vertical2.jpg'/>
                            <img className='seven w-[500px] md:h-[600px] object-cover rounded-3xl' src='/vertical1.jpg'/>
                    </div>
                </div>
            </div>
        </div>
       
      </div>
  )
}

export default ShowCaseImages