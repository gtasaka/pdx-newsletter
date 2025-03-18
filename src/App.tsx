import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Breadcrumb from './components/Breadcrumb'
import FeaturedNews from './components/FeaturedNews'
import Classifieds from './components/Classifieds'
import NewsItems from './components/NewsItems'
import SponsoredSection from './components/SponsoredSection'
import LocalData from './components/LocalData'
import SocialMediaAds from './components/SocialMediaAds'
import Events from './components/Events'
import Jobs from './components/Jobs'
import Supporters from './components/Supporters'
import Subscription from './components/Subscription'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-cream text-slate font-sans">
      <div className="max-w-3xl mx-auto px-5 py-5">
        <Header />
        <Navigation />
        <Breadcrumb />
        
        <main>
          <FeaturedNews />
          <Classifieds />
          <NewsItems />
          <SponsoredSection />
          <LocalData />
          <SocialMediaAds />
          <Events />
          <Jobs />
          <Supporters />
          <Subscription />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default App
