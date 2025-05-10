import React from 'react'
import { motion } from "framer-motion";
import Timeline from '../../components/Timeline';
import Team from "../../components/Team"

function About() {
  return (
    <>
      {/* #2d799e #8f7a64 brown*/}

      <section className='bg-[#2D799E] pt-12 md:pt-16 lg:pt-0'>
        <main className=' flex lg:flex-row flex-col items-center justify-center lg:gap-32  lg:h-screen relative'    >

          {/* text-sm lg:text-left md:text-[1rem] lg:text-[1rem] */}

          <div className='w-full lg:w-1/2 px-4 lg:p-2 text-white '>
            <h2 className='mb-2 lg:mb-6 text-4xl lg:text-[4rem] font-bold mt-8 md:mt-0'>Our <span className=' stroke-1'>Story</span></h2>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, quam adipisci! Labore, maxime doloremque? Commodi dolorem porro similique ex vitae quos quod corrupti.</p>
            <br />
            <p> Quas accusantium odit molestiae voluptates ut voluptatem nostrum error totam ducimus esse temporibus explicabo libero odio aspernatur debitis, incidunt suscipit praesentium quibusdam nemo adipisci consequatur dolorum deleniti! Non, qui at velit tempora rem, accusamus excepturi, dignissimos aut explicabo iste dolores obcaecati similique assumenda officiis
            </p><br />
            <p>mollitia delectus maxime. Reiciendis soluta sit quas quia quos architecto magni ex nihil, suscipit cupiditate natus voluptas perferendis impedit fugit, deleniti laboriosam magnam maiores fugiat molestias consequatur ipsa nulla facere? Libero sint repellendus expedita sit perspiciatis atque perferendis consequuntur. Aliquid, mollitia corporis, cupiditate fugiat nostrum debitis quaerat autem omnis praesentium atque, nemo est!</p>

          </div>
          <div className='relative size-96'>
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none"
                style={{
                  background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
                  clipPath: 'polygon(50% 100%, 0% 0%, 100% 20%)',
                  filter: 'blur(10px)',
                  zIndex: 2,
                }}
              />
            </div>
            <img src="Image/logo-w.png" alt="logo" className='size-52 absolute z-30 ml-24 animate-float  -mt-2' style={{ filter: 'drop-shadow(0 0 10px white)' }} />
            <img className='w-96 mt-32 drop-shadow-xl absolute ' style={{ filter: 'drop-shadow(4px 4px 15px rgba(0,0,0,0.5))' }} src="Image/box.png" alt="" />
            <img className='w-96 mt-32 drop-shadow-xl absolute z-30 ' style={{ filter: 'drop-shadow(4px 4px 15px rgba(0,0,0,0.5))' }} src="Image/box-over.png" alt="" />
          </div>
          <div className='absolute bottom-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <button
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  });
                }}
                className="text-white flex flex-col items-center"
              >
                <span className="text-sm mb-2">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                    className="w-1.5 h-1.5 bg-white rounded-full"
                  />
                </div>
              </button>
            </motion.div>
          </div>
        </main>
      </section>
      <div className='bg-[#2d799e] w-full h-[30px] lg:hidden'></div>


      <div className="flex justify-center py-12 text-[1rem]">
        <div className="relative flex flex-col items-center text-center text-white py-8 w-4/5 border rounded-3xl bg-cover bg-center bg-[url('/Image/mission.webp')] backdrop-blur-sm overflow-hidden">

          {/* Black gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/60 to-black/10
"></div>

          {/* Content on top of overlay */}
          <div className="relative z-10 flex flex-col items-center ">
            <h1 className="font-bold text-4xl pb-2">Our Mission</h1>
            <h2 className="text-2xl w-3/5">
              To provide innovative, sustainable packaging solutions that protect products,
              enhance brands, and minimize environmental impact while exceeding our customers' expectations.
            </h2>
          </div>

        </div>
      </div>




      <div>
        <div className="px-6 py-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
          <Timeline />
        </div>
      </div>


      <div>
        <Team />
      </div>

    </>
  )
}

export default About