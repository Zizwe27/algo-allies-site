import React from 'react'

const ResumeDrop = () => {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-md max-w-md">
        <h1 className='font-bold mb-4 sm:text-m'>
            Submit Your Resume For Review
        </h1>

        <p className="text-gray-600 text-sm mt-2">
            Get personalized feedback on your resume from our experienced career coaches. We'll help you refine it for maximum impact.
        </p>

        <form className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
                </label>
                <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
                </label>
                <input 
                type="email" 
                placeholder="john.doe@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume
                </label>
                <input 
                type="file" 
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Notes (Optional)
                </label>
                <textarea 
                placeholder="Any specific areas you'd like us to focus on?"
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
            </div>

            <button 
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition"
            >
                Submit Resume
            </button>
        </form>
    </div>
  )
}

export default ResumeDrop