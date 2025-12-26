'use client'

import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Section } from '#components/section'

export const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Connect your catalog',
      description: 'Import your product data from your ERP, PIM, or spreadsheets. DimB works with messy, real-world data — you don\'t need a clean taxonomy to start.',
    },
    {
      number: '02',
      title: 'Map the relationships',
      description: 'Your product experts capture what they already know: replacements, compatibility, accessories. DimB can suggest relationships based on data patterns, but your experts always stay in control.',
    },
    {
      number: '03',
      title: 'Give your team answers',
      description: 'Your team sees relevant cross-references, alternatives, and add-ons right where they work — in your quoting tool or ERP. Knowledge that used to require a phone call now takes seconds.',
    },
  ]

  return (
    <Section id="how-it-works" py={[10, 12, 14]} bg="white" innerWidth="container.xl">
      <VStack spacing={10}>
        <VStack spacing={4} textAlign="center" maxW="800px">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="brand.500"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            How It Works
          </Text>
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            fontWeight="bold"
            color="#1c1e21"
          >
            From scattered knowledge to structured intelligence
          </Heading>
        </VStack>

        <SimpleGrid columns={[1, null, 3]} spacing={8} width="100%">
          {steps.map((step) => (
            <Box
              key={step.number}
              p={8}
              position="relative"
            >
              <Text
                fontSize="10xl"
                fontWeight="bold"
                color="gray.100"
                position="absolute"
                top={-4}
                left={4}
                zIndex={0}
                userSelect="none"
              >
                {step.number}
              </Text>
              <VStack align="start" spacing={4} pt={16} position="relative" zIndex={1}>
                <Text fontWeight="bold" fontSize="xl" color="#1c1e21">
                  {step.title}
                </Text>
                <Text color="gray.600" lineHeight="tall">
                  {step.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Section>
  )
}

