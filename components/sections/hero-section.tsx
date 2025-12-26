'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Text,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Heading } from '@chakra-ui/react'

const CyclingText: React.FC<{ words: string[] }> = ({ words }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    if (words.length === 0) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      px={3}
      py={1}
      borderRadius="full"
      h="1.75em"
      minW="140px"
      overflow="hidden"
      position="relative"
      verticalAlign="middle"
    >
      {words.map((word, index) => {
        const isCurrent = index === currentIndex
        const isPrev = index === (currentIndex - 1 + words.length) % words.length
        
        return (
          <Text
            key={`${word}-${index}`}
            as="span"
            position="absolute"
            top="50%"
            left="50%"
            transform={
              isCurrent
                ? 'translate(-50%, -50%)'
                : isPrev
                ? 'translate(-50%, -150%)'
                : 'translate(-50%, 100%)'
            }
            opacity={isCurrent ? 1 : 0}
            transition="transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease"
            fontWeight="medium"
            color="gray.700"
            fontSize="inherit"
            whiteSpace="nowrap"
            pointerEvents="none"
          >
            {word}
          </Text>
        )
      })}
    </Box>
  )
}

export const HeroSection: React.FC = () => {
  const cyclingWords = ['sales reps', 'CSRs', 'counter teams', 'e-commerce', 'branches']

  const handleScrollToSection = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const element = document.getElementById('how-it-works')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Box bg="white" pt={12} px={4}>
      {/* Rounded Hero Container */}
      <Box
        bg="#f8f7f4"
        borderRadius="3xl"
        overflow="hidden"
        maxW="1400px"
        mx="auto"
      >
        <Container maxW="container.xl" pt={{ base: 12, lg: 20 }} pb={{ base: 10, lg: 14 }} px={{ base: 4, md: 6 }}>
          <VStack spacing={6} textAlign="center">
            <FallInPlace>
            <Heading
              as="h1"
              fontSize={['3xl', '4xl', '5xl', '6xl', '7xl']}
              fontWeight="bold"
              color="#1c1e21"
              lineHeight="1.15"
              letterSpacing="-0.02em"
              maxW="1000px"
              mx="auto"
              px={{ base: 2, md: 0 }}
            >
              Your best reps know the catalog by heart.{` `}
              <Text
                as="span"
                display={{ base: 'block', md: 'inline' }}
                mt={{ base: 1, md: 0 }}
                ml={{ base: 0, md: 1 }}
                color="brand.500"
                fontWeight="bold"
              >
                Now anyone can.
              </Text>
            </Heading>
            </FallInPlace>

            <FallInPlace delay={0.2}>
              <VStack spacing={3}>
                <Text
                  fontSize={['lg', 'xl', '2xl']}
                  color="gray.600"
                  maxW="800px"
                  lineHeight="tall"
                  mx="auto"
                >
                  DimB makes product expertise available to anyone who needs it.
                </Text>
                <Text
                  fontSize={['lg', 'xl', '2xl']}
                  color="gray.600"
                  maxW="800px"
                  lineHeight="tall"
                  mx="auto"
                >
                  Used by <CyclingText words={cyclingWords} />
                </Text>
              </VStack>
            </FallInPlace>

            <FallInPlace delay={0.4}>
              <ButtonGroup spacing={4} pt={2}>
                <ButtonLink
                  bg="brand.500"
                  color="white"
                  size="lg"
                  href="#how-it-works"
                  onClick={handleScrollToSection}
                  _hover={{ bg: 'brand.600' }}
                  px={8}
                  borderRadius="full"
                >
                  See how it works
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>

            <FallInPlace delay={0.6}>
              <Text
                fontSize="sm"
                color="gray.500"
                pt={2}
              >
                Built for B2B  • Works with ERP / PIM / spreadsheets • Expert-approved relationships
              </Text>
            </FallInPlace>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

