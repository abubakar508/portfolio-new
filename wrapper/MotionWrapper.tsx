"use client";
import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

export const MotionWrapper = ({ children } : { children : ReactNode}) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ ease: 'easeInOut', duration: 0.75 }}
    >
        {children}
    </motion.div>
  )
}
