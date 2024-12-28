import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBars,  faEllipsisVertical, faGear, faHistory,  faPlus } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle, faGem, faUser } from '@fortawesome/free-regular-svg-icons'
import { faMessage } from '@fortawesome/free-regular-svg-icons/faMessage'
import { useState } from 'react'



const LeftComponentData = ({leftPartRecentData}) => {

    let [state, setState] = useState(true)
  return (
        <article className=' h-full w-fit bg-zinc-800 flex flex-col'>
          
          
            <div className='		'>
            
                <div className='hover:bg-zinc-700 mt-[15px] w-[40px] h-[40px] flex items-center rounded-[100px] pl-[11px] ml-[16px] p-[7px] '>
                <button className='text-xl text-white font-bold ' onClick={()=>{setState(!state)}}> <FontAwesomeIcon icon={faBars} /> </button>
                </div>

                <div className='text-sm m-[20px] mt-[40px] '>
                <button className='text-white font-semibold hover:bg-zinc-600  bg-zinc-700 px-[15px] py-[11px] rounded-[50px] '><FontAwesomeIcon icon={faPlus} className='text-lg'/> {state ? <>&nbsp; New chat</> :null }</button>
                </div>
            
            </div>


          <article className='flex-1 '>
                <div className='text-white pl-[20px] font-semibold text-sm  '>{state ? <>
                  <div className='font-bold pb-2'>{state ? "Recent" : null}  </div>
                    <main className='flex flex-col '>
                        <div className='py-[5px] bg-blue-500 rounded-[30px] flex justify-evenly items-center '> <button >  <FontAwesomeIcon icon={faMessage} className='pr-[5px]  ' />   Why should we use tailwind</button>
                        <button className='hover:bg-zinc-800  h-6 w-6 rounded-full flex items-center justify-center'><FontAwesomeIcon icon={faEllipsisVertical} /></button></div> 
                        <div>
                        {leftPartRecentData.map((val, ind) => {
                            console.log(val)
                            let { title, iconBox } = val
                            return (<>
                                <div key={ind} className='py-[5px] hover:bg-zinc-600 hover:rounded-[30px]  flex justify-evenly items-center '>
                                    
                                    <button className=''>  <FontAwesomeIcon icon={iconBox} className='pr-[5px]  ' />   {title}</button>
                                    <button className='hover:bg-zinc-800  h-6 w-6 rounded-full flex items-center justify-center'><FontAwesomeIcon icon={faEllipsisVertical} /></button>
                                    
                                </div>
                            
                            </>)
                            
                        })}
                      </div>
                      
                    </main>
                        <button className='py-[10px] '>Show more <FontAwesomeIcon icon={faAngleDown}/></button>
                    </> : <></>}
                

                </div>
            </article>
          

          
          <div className=' flex flex-col items-start justify-between'>
              <div className='  left-bottom '>&nbsp; &nbsp; &nbsp;
                  <FontAwesomeIcon className=' text-lg' icon={faGem} />
                  <button> {state ?  <>&nbsp; Gem Manager</>:null }</button>
                  
              </div>
              <div className='  left-bottom'>&nbsp; &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faUser} className=' text-lg' />
                  <button>  {state ?  <>&nbsp; Help</> : null} </button> 
                  
              </div>
              <div className='  left-bottom'>&nbsp; &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faHistory} className=' text-lg' />
                <button> {state ?  <>&nbsp; Activity</>:null }</button> 

                  
              </div>
              <div className='  left-bottom'> &nbsp; &nbsp; &nbsp;
                  <FontAwesomeIcon icon={faGear} className=' text-lg' />
                <button >{state ?  <>&nbsp; Setting</>  : null} </button> 

                  
              </div>
                 

                <div className='text-[10px] text-white  tracking-[2px] px-[25px] pt-[20px]  pb-[5px] flex'>           
                <div>{state ? <FontAwesomeIcon icon={faDotCircle} className='pr-[10px]' /> : null}</div>
                <div>{state ? "Delhi, India" : null}</div>
                </div>

                <div className='text-[10px] font-bold text-blue-400  tracking-[2px] pl-[46px]  pb-[15px]'>{state ? "From your IP adress * Updated location" : null} </div>
                
            </div>

        </article>
  )
}

export default LeftComponentData