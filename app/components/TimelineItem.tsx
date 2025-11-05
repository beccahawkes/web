"use client"

import { useState } from 'react'

export default function TimelineItem({ 
  title, 
  company, 
  technologies, 
  startDate, 
  endDate,
  bulletPoints = []
}: { 
  title: string
  company: string
  technologies: string[]
  startDate: string
  endDate: string
  bulletPoints?: string[]
}) {    
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="flex justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-300">{company}</p>    
        <span className="mt-2 sm:mt-0 text-sm text-gray-600 dark:text-gray-300">{startDate} – {endDate}</span>
      </div>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        <span className="font-semibold">Key Technologies:</span> {technologies.join(', ')}
      </p>
      
      {bulletPoints.length > 0 && (
        <div className="mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${title.replace(/\s+/g, '-')}`}
          >
            <span>{isOpen ? 'Hide' : 'Show'} details</span>
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isOpen && (
            <div
              id={`accordion-content-${title.replace(/\s+/g, '-')}`}
              className="mt-3 pl-4 space-y-2"
            >
              <ul className="list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}