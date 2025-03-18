import React from 'react'

const FeaturedNews: React.FC = () => {
  return (
    <section className="mb-9 border-l-3 border-moss pl-5">
      <h1 className="font-display text-2xl mb-3 text-evergreen leading-snug">
        Portland Rose Festival announces new attractions for 2025
      </h1>
      <div className="flex items-center text-sm text-rain mb-4">
        <span className="bg-fog px-2 py-0.5 rounded text-evergreen font-semibold mr-2.5">LISTEN</span> 
        March 17, 2025 · 3.2 minutes to read
      </div>
      
      <img 
        src="https://images.unsplash.com/photo-1588732807335-2c161a6d36a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
        alt="Rose Festival Grand Floral Parade" 
        className="w-full mb-4 rounded shadow-md"
      />
      
      <p className="mb-6">
        The Portland Rose Festival Foundation revealed plans yesterday for an expanded festival footprint in 2025, featuring new waterfront attractions and extended parade routes. Executive Director Jeff Curtis announced the changes at a City Hall press conference alongside Mayor Carmen Rubio.
      </p>
      
      <div className="relative pl-6 mb-6">
        <span className="absolute left-0 text-salmon font-bold">→</span>
        <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
          Travel Portland reports record tourism numbers for winter season
        </a>
        <p className="mt-1 text-slate">
          Downtown hotel occupancy reached 82% in February, the highest winter figure in five years. Officials credit the Portland Winter Light Festival and an increased focus on indoor attractions.
        </p>
      </div>
      
      <div className="relative pl-6 mb-6">
        <span className="absolute left-0 text-salmon font-bold">→</span>
        <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
          Exclusive: New food cart pod to open in former Pearl District parking lot
        </a>
        <p className="mt-1 text-slate">
          Developer Killian Pacific has partnered with Prost Marketplace to create a new 25-cart food destination with covered seating and a bar. Construction begins next month with a summer opening planned.
        </p>
      </div>
      
      <div className="relative pl-6 mb-6">
        <span className="absolute left-0 text-salmon font-bold">→</span>
        <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
          TriMet finalizes plans for expanded service on popular eastside routes
        </a>
        <p className="mt-1 text-slate">
          The transit agency will increase frequency on lines 4, 15, and 75 starting in June. The changes come after a community feedback campaign that gathered over 3,000 responses.
        </p>
      </div>
    </section>
  )
}

export default FeaturedNews
