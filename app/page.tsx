import { Hero } from '@/components'
import React from 'react'
import Skills from './skills/page'
import WorkExperience from '@/components/Work'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const page = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default page
