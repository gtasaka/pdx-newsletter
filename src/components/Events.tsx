import React from 'react'

const Events: React.FC = () => {
  const events = [
    {
      title: "Portland Dining Month",
      date: "All month · 150+ restaurants citywide",
      description: "Three-course meals for $39 at participating restaurants"
    },
    {
      title: "Wooden Shoe Tulip Festival Opening Weekend",
      date: "Friday March 21 to Sunday March 23 · Woodburn",
      description: "Paid admission · Oregon's largest tulip celebration returns"
    },
    {
      title: "[Webinar] How to Start a Food Business in Portland",
      date: "Wednesday March 19 10:00am to 12:00pm PDT",
      description: "Online · Free event · Presented by Mercy Corps Northwest",
      tag: "Virtual"
    },
    {
      title: "Portland Indie Wine Festival",
      date: "Saturday March 22 12:00pm to 6:00pm PDT",
      description: "The Redd on Salmon Street · Paid tickets · 45+ small producers"
    }
  ]
  
  return (
    <section className="my-9">
      <h3 className="flex items-center text-evergreen font-display mb-4 border-b-2 border-fog pb-2">
        <span className="mr-2 text-salmon">△</span>
        March 2025 Events
      </h3>
      
      {events.map((event, index) => (
        <div 
          key={index} 
          className={`relative pl-6 mb-4.5 ${index !== events.length - 1 ? 'border-b border-dashed border-fog pb-4' : ''}`}
        >
          <span className="absolute left-0 text-salmon font-bold">→</span>
          <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
            {event.title}
          </a>
          <p className="my-1 text-sm text-rain">{event.date}</p>
          <p className="my-1 text-sm text-rain">
            {event.description}
            {event.tag && (
              <span className="inline-block bg-fog text-xs py-0.5 px-1.5 rounded ml-1 text-evergreen">
                {event.tag}
              </span>
            )}
          </p>
        </div>
      ))}
      
      <div className="text-center mt-4 text-sm">
        <a href="#" className="text-salmon font-bold">See all events or add yours, free</a>
      </div>
    </section>
  )
}

export default Events
