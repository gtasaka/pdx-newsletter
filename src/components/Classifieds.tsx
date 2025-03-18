import React from 'react'

const Classifieds: React.FC = () => {
  const ads = [
    {
      title: "Portland Saturday Market Spring Showcase — Vendor Applications Open",
      content: "Calling all local artisans and makers! Applications are now open for our special Spring Showcase running April 5-6. Priority given to new vendors. Apply today at portlandsaturdaymarket.com"
    },
    {
      title: "Commercial Kitchen Space Available in SE Portland",
      content: "Fully equipped commercial kitchen available for hourly rental. Perfect for food startups, caterers, and small food producers. Flexible scheduling, competitive rates. Contact chef@pdxkitchenspace.com"
    },
    {
      title: "Free Small Business Workshop at Central Library",
      content: "Join the Portland Small Business Development Center for a free workshop on accessing capital and managing cash flow. Wednesday, March 19, 6-8pm. Register at multnomah.lib.or.us/business"
    }
  ]
  
  return (
    <div className="flex justify-center my-9">
      <section className="bg-moss bg-opacity-10 p-5 rounded-md border-t-3 border-moss w-[85%] shadow-md">
        <h3 className="mt-0 border-b border-fog pb-2.5 text-evergreen font-display text-center">
          Classifieds - <a href="#" className="text-salmon font-bold">your business or event here</a>
        </h3>
        
        {ads.map((ad, index) => (
          <div 
            key={index} 
            className={`mb-4.5 pb-4 ${index !== ads.length - 1 ? 'border-b border-dashed border-fog' : ''}`}
          >
            <h4 className="m-0 mb-2 text-salmon font-display">{ad.title}</h4>
            <p className="m-0">{ad.content}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Classifieds
