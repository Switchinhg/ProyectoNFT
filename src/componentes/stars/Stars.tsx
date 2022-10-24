import React from 'react'
import { GiBeveledStar }from 'react-icons/gi'
import { motion } from 'framer-motion'
import GetWindowSize from '../hooks/GetWindowSize';

export default function Stars() {

    const getRandomNumberY = () =>{
        return Math.floor(Math.random() *  GetWindowSize().innerHeight)
    }
    const randomDuration = () =>{
        return Math.floor(Math.random() *  (20 - 5)+ 5)
    }
    const randomDelay = (num: number) =>{
        console.log(Math.floor(Math.random() *  (5 - 2)+ num))
        return Math.floor(Math.random() *  (5 - 2)+ num)
    }


  return (
    <div className="starsWrapper">

        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(4)}}
            initial={{x:-50 , y :getRandomNumberY()}}
            animate={{x:GetWindowSize().innerWidth , y:getRandomNumberY() , rotate:360} }
            className="star star1">
            <GiBeveledStar/>
        </motion.span>
        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(8)}}
            initial={{x:-50 , y :getRandomNumberY()}}
            animate={{x:GetWindowSize().innerWidth , y:getRandomNumberY() , rotate:360} }
            className="star star2">
            <GiBeveledStar/>
        </motion.span>
        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(12)}}
            initial={{x:GetWindowSize().innerWidth , y :getRandomNumberY()}}
            animate={{x:-50 , y:getRandomNumberY() , rotate:360} }
            className="star star3">
            <GiBeveledStar/>
        </motion.span> 
        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(16)}}
            initial={{x:GetWindowSize().innerWidth , y :getRandomNumberY()}}
            animate={{x:-50 , y:getRandomNumberY() , rotate:360} }
            className="star star4">
            <GiBeveledStar/>
        </motion.span>
        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(20)}}
            initial={{x:GetWindowSize().innerWidth , y :getRandomNumberY()}}
            animate={{x:-50 , y:getRandomNumberY() , rotate:360} }
            className="star star5">
            <GiBeveledStar/>
        </motion.span>
        <motion.span 
            transition={{duration:randomDuration(),delay:randomDelay(24)}}
            initial={{x:-50 , y :getRandomNumberY()}}
            animate={{x:GetWindowSize().innerWidth , y:getRandomNumberY() , rotate:360} }
            className="star star6">
            <GiBeveledStar/>
        </motion.span>
    </div>
  )
}
