import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { MdOutlineArrowUpward } from 'react-icons/md'; 
import { IoMdDownload } from 'react-icons/io';
import { ImNewTab } from 'react-icons/im';
import { BiSolidShow } from 'react-icons/bi';
import { FaEyeSlash } from 'react-icons/fa';
const App = () => {
  const [prompt, setPrompt] = useState("");
  const [isShowCode, setIsShowCode] = useState(false);
  return (
    <>
      <Navbar />
      <div className="container">
      <h3 className='text-[30px] font-[700]'>Create beautiful websites with <span className='bg-gradient-to-br from-violet-400 to-purple-600 bg-clip-text text-transparent'>WebGenie</span></h3>
      <p className='mt-2 text-[16px] text-[#b3b3b3'>Describe your project and AI will code for you!!</p>
      <div className="inputBox">
          <textarea onChange={(e) => { setPrompt(e.target.value) }} value={prompt} placeholder='describe your website in detail.'></textarea>
          {
            prompt !== "" ?
              <>
                <i className='sendIcon text-[20px] w-[30px] h-[30px] flex items-center justify-center bg-[#9933ff] rounded-[50%] transition-all duration-300 hover:opacity-[.8]'><MdOutlineArrowUpward /></i>
              </> : ""
          }
        </div>

          <p className='text-[20px] font-[700] mt-[10vh]'>Your AI generated Website will appear here.</p>
          <div className='preview '>
            <div className="header w-full h-[70px]">
              <h3 className='font-bold text-[16px]'>Live Preview</h3>
              <div className="icons flex items-center gap-[15px]">
              <div className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">Open in New Tab <ImNewTab /></div>
              <div className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">Download<IoMdDownload /></div>
              <div onClick={() => { setIsShowCode(!isShowCode) }} className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">{isShowCode ? "Hide Code" : "Show Code"} {isShowCode ? <FaEyeSlash /> : <BiSolidShow />}</div>
            </div>
            </div>
            <iframe srcDoc="" className='w-full bg-[white]'></iframe>
          </div>
      </div>
    </>

    
    
  )
}

export default App