import React from 'react'

const SocialMediaAds: React.FC = () => {
  const promotions = [
    {
      badge: "PDX B",
      title: "Portland Brewery Tours",
      heading: "Explore Portland's Craft Beer Scene",
      description: "Join our guided tour of Portland's best microbreweries. Sample award-winning beers and meet the brewers behind them. Use code PDX10 for 10% off.",
      buttonText: "Book a Tour"
    },
    {
      badge: "HIKE",
      title: "Columbia Gorge Adventures",
      heading: "Spring Waterfall Hiking Tours",
      description: "Experience the Columbia River Gorge at its peak waterfall season. Small group guided hikes with transportation from downtown Portland included.",
      buttonText: "See Available Dates"
    },
    {
      badge: "PINE",
      title: "Pine State Biscuits",
      heading: "Introducing Online Ordering",
      description: "Skip the line at all four of our Portland locations. Order ahead with our new mobile app and earn rewards with every purchase.",
      buttonText: "Download App"
    }
  ]
  
  return (
    <section className="my-9">
      <h3 className="text-center text-evergreen font-display text-xl mb-2">
        Featured Promotions
      </h3>
      <div className="flex justify-center mb-6">
        <div className="w-24 h-1 bg-salmon"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {promotions.map((promo, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full">
            {/* Reduced height of image area to match proportions in screenshot */}
            <div className="h-40 bg-fog flex items-center justify-center text-rain">
              400 × 200
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 bg-fog rounded-full flex items-center justify-center text-slate font-bold mr-3 text-sm">
                  {promo.badge}
                </div>
                <span className="font-bold text-slate">{promo.title}</span>
              </div>
              
              <h4 className="text-slate font-bold text-lg mb-2">{promo.heading}</h4>
              
              <p className="text-rain text-sm mb-auto">
                {promo.description}
              </p>
              
              {/* Added mt-4 to create consistent spacing from content above */}
              <button className="w-full py-2 bg-moss text-white font-bold rounded mt-4">
                {promo.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SocialMediaAds
