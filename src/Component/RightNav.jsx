import React from 'react'
import { faAngleDown, faBars, faBraille, faCaretDown, faGear, faGlobe, faHistory, faJetFighter, faMicrophone, faPlus, faRotate } from '@fortawesome/free-solid-svg-icons'
import { faDotCircle, faGem, faImage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faOctopusDeploy, faStackExchange } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const RightNav = () => {
  return (
    <nav className='text-white p-[20px] flex justify-between	'>
        <button className='text-xl'>Gemini <FontAwesomeIcon icon={faCaretDown} /></button>

        <div className=' w-[300px] flex justify-between'>
            <button className='bg-zinc-700 py-[4px] px-[8px] rounded-lg  hover:bg-zinc-600'> <FontAwesomeIcon icon={faStackExchange} className='text-red-500' /> Try Gemini Advance</button>
            <button className='hover:bg-zinc-600  h-9 w-9 rounded-full'><FontAwesomeIcon icon={faBraille}/></button>
            <button className='hover:bg-zinc-600  h-9 w-9 rounded-full'><FontAwesomeIcon icon={faUser}/></button>
            
        </div>
    </nav>
    )
    
}

export default RightNav