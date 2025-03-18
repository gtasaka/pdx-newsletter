import React from 'react'

const NewsItems: React.FC = () => {
  const newsItems = [
    {
      title: "Powell's Books announces summer author series lineup",
      content: "The iconic Portland bookstore has secured appearances by bestselling authors including Portland's own Chuck Palahniuk, Cheryl Strayed, and national figures like Stephen King and Zadie Smith."
    },
    {
      title: "Local startup raises $12 million to expand sustainable packaging business",
      content: "EcoWrap, founded by PSU graduates in 2021, creates compostable packaging from agricultural waste. The funding will help scale production and open a new facility in North Portland, creating 45 jobs."
    },
    {
      title: "Portland Trail Blazers unveil community court renovation project",
      content: "The Blazers Foundation will renovate 10 community basketball courts across the city, with the first projects breaking ground in April at Peninsula Park and Montavilla Community Center."
    }
  ]
  
  return (
    <>
      {newsItems.map((item, index) => (
        <div key={index} className="relative pl-6 mb-6">
          <span className="absolute left-0 text-salmon font-bold">→</span>
          <a href="#" className="text-moss font-bold font-display no-underline hover:text-salmon">
            {item.title}
          </a>
          <p className="mt-1 text-slate">
            {item.content}
          </p>
        </div>
      ))}
    </>
  )
}

export default NewsItems
