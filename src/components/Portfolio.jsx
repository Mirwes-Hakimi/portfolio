import React from 'react';
import HalalStore from '../Assets/HalalStore.png';
import TaxServices from '../Assets/TaxServices.png';
import WindowCompany from '../Assets/WindowCompany.png';
import ZenithFoodMart from '../Assets/ZenithFoodMart.png';
import ZenithFoodMartHome from '../Assets/ZenithFoodMartHome.png';
import IssadContact from '../Assets/IssadContact.png';
import EastBayLimousine from '../Assets/eastbaylimousine.png';

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: HalalStore,
      link:"https://afghan-halal-market.vercel.app/"
    },
    {
      id: 2,
      src: TaxServices,
      link: "https://issad-income-tax.vercel.app/"
    },
    {
      id: 3,
      src: WindowCompany,
      link: "https://www.healthyhomeca.com/"
    },
    {
      id: 4,
      src: ZenithFoodMartHome,
      link: "https://www.zenithgood.com/"
    },    
    {
      id: 4,
      src: ZenithFoodMartHome,
      link: "https://www.eastbaylimousine.com/"
    }
   
  ]
  return (
    <div name="portfolio" 
    className='bg-gradient-to-b from-gray-600 to-gray-800 w-full
     text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-100'>Portfolio</p>
        <p className='py-6 text-2xl'>Check out some of my work!</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        
      {portfolios.map(({ id, src, link }) => (
        <div key={id} className='shadow-md shadow-yellow-300 rounded-lg '>
        <img src={ src } alt=''
        className='rounded-md duration-200 hover:scale-105' />
        <div className='flex items-center justify-center'>
          <a href={link} className='w-1/2 px-4 py-3 m-4 duration-200 hover:scale-105'>Demo</a>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'></button>
        </div>
      </div>
        ))}
        
     
      </div>
      </div>
    </div>
  )
}

export default Portfolio
