import React from 'react'

const SponsoredSection: React.FC = () => {
  const sponsors = [
    {
      logo: "TRAVEL PDX",
      title: "Travel Portland congratulates the 2025 Hospitality Award winners",
      content: "Recognizing excellence in Portland's visitor industry. Join us in celebrating these outstanding businesses on March 25 at Revolution Hall.",
      link: "Get tickets now"
    },
    {
      logo: "PORTLAND MADE",
      title: "Portland Made presents: The Maker's Market",
      content: "A showcase of Portland's finest artisans and manufacturers with over 75 local businesses. March 22-23 at The Leftbank Annex.",
      link: "Learn more"
    }
  ]
  
  return (
    <section className="my-9 bg-salmon bg-opacity-5 p-5 rounded-md">
      <h3 className="mt-0 text-evergreen font-display text-lg border-b border-fog pb-2.5">
        Local Business Spotlight - with Travel Portland
      </h3>
      
      {sponsors.map((sponsor, index) => (
        <div key={index} className="flex items-center mb-5 p-2.5 bg-white rounded shadow-sm">
          <div className="w-20 h-15 bg-fog mr-4 flex items-center justify-center font-bold text-evergreen rounded text-xs">
            {sponsor.logo}
          </div>
          <div>
            <h4 className="m-0 mb-1 text-evergreen font-display">{sponsor.title}</h4>
            <p className="m-0">
              {sponsor.content} <a href="#" className="text-salmon font-bold">{sponsor.link}</a>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default SponsoredSection
