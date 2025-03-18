import React from 'react'

const LocalData: React.FC = () => {
  const dataCategories = [
    {
      title: "Bridge Lifts Today",
      items: ["Hawthorne: 2 | Broadway: 1 | Steel: 0 | Burnside: 0"]
    },
    {
      title: "Traffic Hotspots (4:30 PM)",
      items: [
        "I-5 Northbound: 26 min (Terwilliger to Interstate Bridge)",
        "I-205: 18 min (Airport Way to Oregon City)",
        "US-26 Eastbound: 24 min (Zoo to I-405)"
      ]
    },
    {
      title: "Most-Visited Parks (Weekend)",
      items: [
        "1. Forest Park (Lower Macleay entrance)",
        "2. Waterfront Park",
        "3. Mt. Tabor Park"
      ]
    }
  ]
  
  return (
    <section className="my-9 bg-white p-5 rounded-md shadow-md">
      <h3 className="mt-0 text-evergreen font-display text-xl">
        Portland data for Mar 17
      </h3>
      
      {dataCategories.map((category, index) => (
        <div key={index} className="mb-5">
          <h4 className="m-0 mb-2.5 text-moss border-b border-fog pb-1 font-display">
            {category.title}
          </h4>
          {category.items.map((item, i) => (
            <p key={i} className="my-1 text-[15px]">{item}</p>
          ))}
        </div>
      ))}
    </section>
  )
}

export default LocalData
