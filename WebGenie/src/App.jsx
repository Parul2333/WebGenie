import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import { MdOutlineArrowUpward } from 'react-icons/md'; 
import { IoMdDownload } from 'react-icons/io';
import { ImNewTab } from 'react-icons/im';
import { BiSolidShow } from 'react-icons/bi';
import { FaEyeSlash } from 'react-icons/fa';
import Editor from '@monaco-editor/react';
import { RiComputerLine } from 'react-icons/ri';
import { FaTabletAlt } from 'react-icons/fa';
import { ImMobile2 } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';
const App = () => {
  const [prompt, setPrompt] = useState("");
  const [isShowCode, setIsShowCode] = useState(false);
  const [code, setCode] = useState(
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WebGenie</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-[10px]">
  <h1 class="text-[30px] font-[700]">Welcome to WebGenie</h1>
</body>
</html>
    `
  );
  const [isInNewTab, setIsInNewTab] = useState(false);
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
              <div onClick={() => { setIsInNewTab(true) }} className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">Open in new tab <ImNewTab /></div>
              <div className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">Download<IoMdDownload /></div>
              <div onClick={() => { setIsShowCode(!isShowCode) }} className="icon !w-[auto] !p-[12px] flex items-center gap-[10px]">{isShowCode ? "Hide Code" : "Show Code"} {isShowCode ? <FaEyeSlash /> : <BiSolidShow />}</div>
            </div>
            </div>


          {
            isShowCode ? <>
            <Editor height="100%" theme="vs-dark" defaultLanguage="html" value={code} />;
            </>:<>
            <iframe srcDoc={code} className='w-full bg-[white]'></iframe>
            </>
          }
    
          {
        isInNewTab ?
          <>
            <div className="modelCon">
              <div className="modelBox text-black">
                <div className="header w-full px-[50px] h-[70px] flex items-center justify-between ">
                  <h3 className='font-[700]'>Preview</h3>

                  <div className="icons flex items-center gap-[15px]">
                    <div className="icon"><RiComputerLine /></div>
                    <div className="icon"><FaTabletAlt /></div>
                    <div className="icon"><ImMobile2 /></div>
                  </div>

                  <div className="icons">
                    <div className="icon" onClick={() => { setIsInNewTab(false) }}><IoMdClose /></div>
                  </div>
                </div>
                <iframe srcDoc={code} className='w-full newTabIframe'></iframe>
              </div>
            </div>
          </> : ""
      }

        
        </div>
      </div>
    </>

    
    
  )
}

export default App