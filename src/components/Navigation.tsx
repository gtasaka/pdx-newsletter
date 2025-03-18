import React from 'react'

const Navigation: React.FC = () => {
  const navItems = [
    'News', 'Events', 'Jobs', 'Food', 'Arts', 'Directory', 'Advertise', 'About'
  ]
  
  return (
    <nav className="border-b-2 border-t-2 border-fog py-3 mb-6 bg-evergreen bg-opacity-5 flex flex-wrap">
      {navItems.map((item, index) => (
        <a 
          key={index} 
          href="#" 
          className="text-evergreen font-semibold mr-5 mb-2 transition-colors duration-200 hover:text-salmon text-[15px]"
        >
          {item}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
