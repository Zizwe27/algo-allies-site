import React from 'react'
import ResumeCard from './ResumeCard.jsx'
import ResumeDrop from './ResumeDrop.jsx'
import { Newspaper, Link, Code } from 'lucide-react'

const resumeCards = [
    {
        icon: Newspaper,
        title: "ATS Optimization",
        description: "Craft your resume to pass Applicant Tracking Systems by including relevant keywords and standard formatting. Maximize visibility to hiring managers."
    },
    {
        icon: Link,
        title: "Quantifiable Achievements",
        description: "Highlight your impact with numbers and metrics. Showcase your contributions with concrete results and data-driven achievements."
    },
    {
        icon: Code,
        title: "Tailored Content",
        description: "Customize your resume for each job application. Align your skills and experience with the specific requirements of the role."
    }
]

const Resume = () => {
  return (
    <section id="resume" className="px-8 lg:px-20 py-16 bg-white">
        
        <h1 className='text-center font-bold text-2xl md:text-3xl text-black leading-tight mb-12'>
            Elevate Your Resume
        </h1>

        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/2 space-y-6">
                {resumeCards.map((card, index) => (
                    <ResumeCard 
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>

            <div className="lg:w-1/2">
                <ResumeDrop />
            </div>
        </div>

    </section>
  )
}

export default Resume