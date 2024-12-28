import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const RightMiddleDataBox = ({rightPartBoxData}) => {
  return (
      <>
          <article className=' flex justify-center mt-[50px] gap-[5px] '>
            {rightPartBoxData.map((val,ind) => {
              console.log(val)
              let { title, iconBox } = val
              return (<>
                
                  <button key={ind}  className='text-start  h-[160px] w-[170px] rounded-[10px] bg-zinc-800 text-white  '>
                  <div  className=' p-[15px] '>{title}</div>
                  <div className='flex justify-end items-end  p-[5px] '>
                    <div  className=' h-[40px] w-[40px] rounded-[50px] hover:bg-zinc-900 bg-zinc-700 flex justify-center items-center  '><FontAwesomeIcon icon={iconBox} /></div>
                  </div>
                    
                  </button> <br />
               
              </>)
            })}
          </article>
    </>
  )
}

export default RightMiddleDataBox