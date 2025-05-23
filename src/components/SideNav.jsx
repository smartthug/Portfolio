import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const SideNav = () => {
  return (
    <div >
      <nav className='w-15 h-full fixed left-0 bg-gray-900 z-30 flex sm:hidden lg:block md:hidden '>
        <ul className='flex flex-col gap-8 justify-evenly  items-center p-5 text-2xl   '>  
            <li><a href="#home" className='hover:text-blue-300'  style={{writingMode:'vertical-rl'}}>Home</a></li>
            <li><a href="#about"  className='hover:text-blue-300'style={{writingMode:'vertical-rl'}}>About</a></li>
            <li><a href="#exper" className='hover:text-blue-300' style={{writingMode:'vertical-rl'}}>Experience</a></li>
            <li><a href="#projects" className='hover:text-blue-300' style={{writingMode:'vertical-rl'}}>Project</a></li>
            <li><a href="#contact"  className='hover:text-blue-300' style={{writingMode:'vertical-rl'}}>Contact</a></li>
        </ul>
      </nav>
      <nav className=' w-20 h-20 fixed bottom-30 right-13 rounded-full bg-gray-900 z-30 flex  lg:hidden xl:hidden 2xl:hidden'>
        <ul className='  text-6xl text-center p-3 '>  
            <li><a href="#home" className=' hover:text-blue-300'  ><MdKeyboardDoubleArrowUp/>
            </a></li>
           
        </ul>
      </nav>
    </div>
  )
}

export default SideNav
