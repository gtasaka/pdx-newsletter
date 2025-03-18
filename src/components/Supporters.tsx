import React from 'react'

const Supporters: React.FC = () => {
  const goldSupporters = [
    "Travel Portland", "Powell's Books", "Willamette Week", 
    "Portland Timbers", "OHSU", "New Seasons"
  ]
  
  const silverSupporters = [
    "Tillamook", "Stumptown", "Portland Gear", 
    "Salt & Straw", "Franz Bakery", "Widmer Bros"
  ]
  
  return (
    <section className="my-10 text-center bg-white p-5 rounded-md shadow-md">
      <h3 className="mb-5 text-evergreen font-display">Local Supporters</h3>
      
      <h4 className="text-moss my-4 font-display">Gold supporters</h4>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {goldSupporters.map((supporter, index) => (
          <div 
            key={index} 
            className="w-[85px] h-[65px] bg-fog flex items-center justify-center font-bold text-evergreen text-xs rounded border-b-3 border-moss transition-transform duration-200 hover:scale-105"
          >
            {supporter}
          </div>
        ))}
      </div>
      
      <h4 className="text-moss my-4 font-display">Silver supporters</h4>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {silverSupporters.map((supporter, index) => (
          <div 
            key={index} 
            className="w-[85px] h-[65px] bg-fog flex items-center justify-center font-bold text-evergreen text-xs rounded border-b-3 border-salmon transition-transform duration-200 hover:scale-105"
          >
            {supporter}
          </div>
        ))}
      </div>
      
      <p>
        Our supporters help keep PDXDaily free for everyone. 
        <a href="#" className="text-moss ml-1">Join them today</a>.
      </p>
    </section>
  )
}

export default Supporters
