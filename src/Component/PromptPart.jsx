import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {  faImage } from '@fortawesome/free-regular-svg-icons'



const PromptPart = () => {
  return (
      <>
          <footer className=' flex justify-center mt-[180px] mb-[10px] '>
            <div className=' h-[70px] bg-zinc-800 w-[60%] flex justify-center items-center rounded-[35px] relative'>
                  <input type="text" placeholder='Enter a prompt here' className='w-full h-full pl-8  bg-zinc-800 outline-none focus:bg-zinc-700 text-white  rounded-full' />

                  <button className=' hover:bg-zinc-500 bg-white-900 absolute right-16 bottom-4 h-11 w-11 rounded-full'><FontAwesomeIcon icon={faImage} className='text-white text-2xl  ' /> </button>
                  
              <button className='  hover:bg-zinc-500 h-11 w-11 rounded-full absolute right-4 bottom-4'><FontAwesomeIcon icon={faMicrophone} className='text-white text-xl a'/></button>
            </div>
          </footer>
          <h6 className='text-white flex justify-center text-[12px] '>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</h6>
    </>
  )
}

export default PromptPart