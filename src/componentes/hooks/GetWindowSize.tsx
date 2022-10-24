import React from 'react'

import {useEffect, useState} from 'react';

export default function GetWindowSize() {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    useEffect(()=>{
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);
        return () =>{
            window.removeEventListener('resize', handleWindowResize);
        
        }
    },[])

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    return windowSize
}
