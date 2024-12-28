
import React from 'react'
import {  faGlobe,  faJetFighter, faRotate } from '@fortawesome/free-solid-svg-icons'
import { faOctopusDeploy } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons/faMessage'
import LeftComponentData from './Component/leftComponent'
import RightNav from './Component/RightNav'
import RightMiddleDataBox from './Component/RightMiddleDataBox'
import PromptPart from './Component/PromptPart'






const App = () => {



  let leftPartRecentData = [
    {
      title: "Why should we use tailwind",
      iconBox:faMessage
    },
    {
      title: "Why should we use tailwind",
      iconBox:faMessage
    },
    {
      title: "Why should we use tailwind",
      iconBox:faMessage
    },
    {
      title: "Why should we use tailwind",
      iconBox:faMessage
    },


  ]
  
  let rightPartBoxData = [
    {
      title: "Summarize factual topics in a concise manner.",
      iconBox: faRotate
    },
    {
      title: "Generate creative text formats like stories or poems.",
      iconBox:faJetFighter
    },
    {
      title: "Translate text between different languages.",
      iconBox:faOctopusDeploy
    },
    {
      title: "Answer your questions comprehensively.",
      iconBox: faGlobe
    }
  ]

  return (
    <>
      <section className=' h-[100vh] flex'>
        
      <LeftComponentData leftPartRecentData = {leftPartRecentData} />
         
        
        <article className=' flex-1 bg-zinc-900'>
          <RightNav/>
          

          <main className='text-6xl font-semibold flex justify-center  mt-[20px]  '> 
            <div className=''>
              <h1 className="bg-gradient-to-r from-blue-600 via-red-500 to-purple-400 text-transparent bg-clip-text">Hello, Batman</h1>
              <h1 className='text-zinc-700'>How can I help you today?</h1>
            </div>
          </main>

          
          <RightMiddleDataBox rightPartBoxData={ rightPartBoxData} />
          
          <PromptPart />

        </article>

      </section>
    </>
  )
}
export default App
