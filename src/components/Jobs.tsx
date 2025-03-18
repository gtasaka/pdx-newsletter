import React from 'react'

const Jobs: React.FC = () => {
  const jobs = [
    {
      title: "Sous Chef",
      company: "Toro Bravo Group",
      location: "NE Portland, OR"
    },
    {
      title: "Marketing Manager",
      company: "Columbia Sportswear",
      location: "Downtown Portland, OR"
    },
    {
      title: "Front-End Developer",
      company: "Uncorked Studios",
      location: "Pearl District, OR"
    },
    {
      title: "Sustainability Coordinator",
      company: "City of Portland",
      location: "Remote/Hybrid",
      tag: "Remote"
    },
    {
      title: "Brewery Production Assistant",
      company: "Breakside Brewery",
      location: "Milwaukie, OR"
    }
  ]
  
  return (
    <section className="my-9">
      <h3 className="flex items-center text-evergreen font-display mb-4 border-b-2 border-fog pb-2">
        <span className="mr-2 text-salmon">△</span>
        Latest Jobs
      </h3>
      
      {jobs.map((job, index) => (
        <div 
          key={index} 
          className={`relative pl-6 mb-4.5 ${index !== jobs.length - 1 ? 'border-b border-dashed border-fog pb-4' : ''}`}
        >
          <span className="absolute left-0 text-salmon font-bold">→</span>
          <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
            {job.title}
          </a> · {job.company} · {job.location}
          {job.tag && (
            <span className="inline-block bg-fog text-xs py-0.5 px-1.5 rounded ml-1 text-evergreen">
              {job.tag}
            </span>
          )}
        </div>
      ))}
      
      <div className="text-center mt-4 text-sm">
        <a href="#" className="text-salmon font-bold">See more and add your openings, free</a>
      </div>
    </section>
  )
}

export default Jobs
