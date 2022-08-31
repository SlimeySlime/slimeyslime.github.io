import React, { useState, useRef } from "react";
import { AiOutlineBlock, AiOutlineBorder, AiOutlineClose, } from "react-icons/ai";

const Window = ({children, close, fullScreen, tabName}) => {

    const [fullWindow, setFullWindow] = useState(false)
    const windowRef = useRef()

    function windowSizeClick(tabName) {
        setFullWindow(!fullWindow)
        if (fullWindow) {
            // 최대화
            windowRef.current.className = 'absolute right-0 left-0 bottom-0 top-0 mt-8 ml-16 mobile:ml-12 p-0 bg-slate-50 shadow-lg rounded-t-lg'
        }else{
            // 작은 창
            windowRef.current.className = 'container mt-2 p-0 min-h-max? max-h-innerScreen bg-slate-50 shadow-lg rounded-lg'
        }
    }

    function closing(tabName) {
        setFullWindow(false)
        close(tabName)
    }

    return(
        <div className="container mt-2 p-0 max-h-innerScreen bg-slate-50 shadow-lg rounded-lg"
            ref={windowRef}>
        {/* <div className="absolute right-0 left-0 bottom-0 top-0 mt-8 ml-16 mobile:ml-12 p-0 bg-slate-50 shadow-lg" */}
            {/* 상단 */}
            <div className={`sticky top-0 flex flex-1 pr-4 p-1 bg-slate-700 justify-end items-center`}>
                {fullWindow ? 
                    <AiOutlineBorder color="white" className="w-6" onClick={() => {windowSizeClick(tabName)}}/> :
                    <AiOutlineBlock color="white" className="w-6" onClick={() => {windowSizeClick(tabName)}}/>  
                }
                <AiOutlineClose color="white" className="w-6" onClick={() => {closing(tabName)}}/>
            </div>
            <div className="flex flex-col max-h-innerPage justify-start itmes-start overflow-y-auto" id='md'>
                {children}
            </div>
        </div>
    )
}

export default Window