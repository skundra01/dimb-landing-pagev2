'use client'

import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'

import {
  HeroSection,
  BehavioralHooksSection,
  BeforeAfterSection,
  ProblemSection,
  SolutionSection,
  HowItWorksSection,
  FeaturesSection,
  EarlyAccessSection,
  FaqSection,
  FinalCTA,
} from '#components/sections'

const Home: NextPage = () => {
  return (
    <Box bg="white">
      <HeroSection />

      <BehavioralHooksSection />

      <BeforeAfterSection />

      <ProblemSection />

      <SolutionSection />

      <HowItWorksSection />

      <FeaturesSection />

      <EarlyAccessSection />

      <FaqSection />

      <FinalCTA />
    </Box>
  )
}

export default Home
