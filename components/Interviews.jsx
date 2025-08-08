import React from 'react'
import { Code, ChevronRight, Link, Newspaper, Calendar } from 'lucide-react'

const interviewCards = [
    {
        icon: Code,
        title: 'Leetcode Practice',
        description: 'Sharpen your algorithmic skills with a curated list of LeetCode problems relevant to top tech companies.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    },

    {
        icon: Link,
        title: 'Neetcode Roadmap',
        description: 'Follow a structured roadmap of essential data structures and algorithms, organized by topic and difficulty.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    },

    {
        icon: Link,
        title: 'System Design Basics',
        description: 'Understand the fundamentals of scalable system design, common patterns, and architectural trade-offs.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    },

    {
        icon: Newspaper,
        title: 'Behavioral Interview Prep',
        description: 'Prepare for common behavioral questions with strategies for articulating your experiences and strengths effectively.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    },

    {
        icon: Code,
        title: 'Dynamic Programming Guide',
        description: 'Conquer complex problems with our in-depth guide to dynamic programming concepts and problem-solving techniques.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    },

    {
        icon: Calendar,
        title: 'Mock Interview Simulations',
        description: 'Practice under realistic conditions with timed coding challenges and live feedback sessions from our experts.',
        linkTo: 'Visit resource',
        linkToIcon: ChevronRight
    }

]

const InterviewCard = ({ icon: Icon, title, description, linkTo, linkToIcon: LinkIcon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <Icon className="text-green-600 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-3">{description}</p>
            <a href="#" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium">
              {linkTo}
              <LinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Interviews = () => {
  return (
    <section id="interviews" className="px-8 py-16 bg-gray-50">

        <h1 className="font-bold text-center text-2xl md:text-3xl text-black leading-tight mb-6">
            Ace Your Technical Interviews
        </h1>

        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {interviewCards.map((card, index) => (
                    <InterviewCard 
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        linkTo={card.linkTo}
                        linkToIcon={card.linkToIcon}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Interviews