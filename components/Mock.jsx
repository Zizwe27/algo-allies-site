import React from 'react'
import corporateImage from '../src/assets/corporate.png'

// Then use:


const Mock = () => {
  return (
                  <section id="contact" className='py-16 px-8 bg-cover bg-center bg-no-repeat relative' 
                style={{backgroundImage: `url(${corporateImage})`}}>
                     {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
          <div className="relative z-10 max-w-4xl mx-auto">
                <h1 className='text-2xl md:text-3xl text-center font-bold text-black leading-tight mb-6'>
                    Ready to Conquer Your Next Interview?
                </h1>

                <p className='leading-relaxed text-black mb-6 max-w-4xl mx-auto text-lg text-center'>
                Don't leave your success to chance. Book a personalized mock interview session with our experts today and get the confidence you need to shine.
                </p>
        
                      </div>

            <div className="flex justify-center mt-8">
                <button className="px-4 py-1.5 bg-blue-600 text-white items-center rounded-sm text-sm font-semibold hover:bg-blue-700 transition">
                    Book Your Mock Interview
                </button>
            </div>
        </section>
  )
}

export default Mock