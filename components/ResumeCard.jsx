import React from 'react'

const ResumeCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md max-w-md">
        <div className="flex items-center gap-2 mb-4">
          <Icon />
          <h1 className='font-bold sm:text-m'>{title}</h1>
        </div>
        <p className='text-gray-600 text-md mt-2'>
            {description}
        </p>
    </div>
  )
}

export default ResumeCard
