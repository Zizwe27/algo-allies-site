import React from 'react'
import img1 from '../src/assets/img1.jpg'

const Carousel = () => {

  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-20 py-16 bg-white gap-12">

        <div className="max-w-xl">
            <h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6'>
                Unlock Your Career <br />
                Potential with Algo <br />
                Allies
            </h1>

            <p className="text-gray-600 text-lg mb-8">
                Your dedicated partner for mastering technical interviews and crafting a standout resume. 
                From foundational algorithms to advanced system design, we empower your success.
            </p>

            <div className='flex flex-wrap gap-4'>
                <button className="px-4 py-1.5 bg-blue-600 text-white rounded-sm text-sm font-semibold hover:bg-blue-700 transition">
                    Book A Mock Interview
                </button>

                <button className="px-4 py-1.5 border border-gray-300 rounded-md text-sm text-black hover:bg-gray-100 transition">
                    Explore Resources
                </button>
            </div>
        </div>

        <div className='w-full lg:w-1/2'>
            <img
                src={img1}
                alt="Tech Image of Connected Data Points"
                className="rounded-xl w-full h-auto object-cover"
            />
        </div>
    </section>
  );
}

export default Carousel