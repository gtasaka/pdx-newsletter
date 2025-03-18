import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="text-center mb-5">
      <div className="text-3xl font-bold font-display text-evergreen">
        PDX<span className="text-moss">Daily</span>
      </div>
      <p className="text-rain font-serif italic mt-1">
        Portland's essential local news briefing
      </p>
    </header>
  )
}

export default Header
