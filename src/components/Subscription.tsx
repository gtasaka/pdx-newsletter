import React from 'react'

const Subscription: React.FC = () => {
  return (
    <section className="my-10 text-center p-8 bg-evergreen text-white rounded-md bg-gradient-to-br from-evergreen to-moss">
      <svg className="mx-auto w-10 h-10 mb-2.5 opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <polygon points="50,10 60,30 40,30" fill="white" opacity="0.9"/>
        <polygon points="30,35 70,35 60,85 40,85" fill="white" opacity="0.8"/>
      </svg>
      
      <h3 className="font-serif text-2xl mb-4">
        Get a local perspective on what matters in Portland
      </h3>
      
      <p className="mb-5 text-base">
        Join 32,507 Portland residents who start their day with PDXDaily
      </p>
      
      <a 
        href="#" 
        className="inline-block bg-salmon text-white py-3 px-6 font-bold rounded font-display transition-colors duration-200 hover:bg-[#d15a3c] shadow-md"
      >
        Subscribe to our daily newsletter by email, free
      </a>
    </section>
  )
}

export default Subscription
