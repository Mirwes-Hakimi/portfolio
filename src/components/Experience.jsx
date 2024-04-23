import React from 'react';
import HTML from '../Assets/HTML.png';
import CSS from '../Assets/CSS.png';
import Tailwind from '../Assets/Tailwind.png';
import JS from '../Assets/JS.jpg';
import ReactJS from '../Assets/ReactJs.png';
import Redux from '../Assets/Redux.jpg';
import Node from '../Assets/Node.png';
import GitHub from '../Assets/GitHub.png';
import Git from '../Assets/Git.png';




const Experience = () => {

    const techs = [
        {
            id: 1,
            src: HTML,
            title: "HTML",
            style: 'shadow-orange-500'

        },
        {
            id: 2,
            src: CSS,
            title: "CSS",
            style: 'shadow-blue-500'

        },
        {
            id: 3,
            src: Tailwind,
            title: "Tailwind",
            style: 'shadow-blue-100'

        },
        {
            id: 4,
            src: JS,
            title: "JS",
            style: 'shadow-yellow-500'

        },
        {
            id: 5,
            src: ReactJS,
            title: "ReactJS",
            style: 'shadow-blue-300'

        },
        {
            id: 6,
            src: Redux,
            title: "Redux",
            style: 'shadow-purple-500'

        },
        {
            id: 7,
            src: Node,
            title: "Node",
            style: 'shadow-green-500'

        },
        {
            id: 8,
            src: GitHub,
            title: "GitHub",
            style: 'shadow-blue-700'

        },
        {
            id: 9,
            src: Git,
            title: "Git",
            style: 'shadow-orange-500'

        },
    ]
  return (
    <div name="experience"
    className='bg-gradient-to-b from-gray-500 to-gray-700
    w-full h-max overflow-fixed'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <p className='text-4xl font-bold inline border-b-3 border-gray-300
          md:p-9 md:m-12 '>Experience</p>
        <p className='text-2xl p-2 mt-2'>These are the technologis I've worked with</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-3
      gap-8 text-center md:py-8 md:px-12 sm:px-0 '>

          {techs.map(({id, src, title, style }) => (

            <div className={`shadow-md hover:scale-105 duration-500
             py-2 rounded-lg ${style}`}>
            <img key={id} src={ src } alt='html' className='w-20 mx-auto' />
            <p className='mt-9'>{title}</p>
          </div>
          ))
        }
       
      </div>
    </div>
  )
}

export default Experience
