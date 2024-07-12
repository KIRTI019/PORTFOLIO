import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import { motion } from "framer-motion"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <motion.div
    initial={{ x: -500, opacity: 0, scale: 0.5 }}
    animate={{ x:0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.5 }}
    className='motion'>
        <a href='https://linkdin.com' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com' target="_blank"><FaGithub/></a>
        <a href='https://dribbble.com' target="_blank"><FiDribbble/></a>
        </motion.div>
    </div>
  )
}

export default HeaderSocials