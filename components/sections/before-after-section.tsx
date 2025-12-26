'use client'

import {
  Box,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FiCheckCircle, FiXCircle } from 'react-icons/fi'

import { ButtonLink } from '#components/button-link/button-link'
import { Section } from '#components/section'

export const BeforeAfterSection = () => {
  const comparisons = [
    {
      title: 'Out-of-stock substitute',
      before: "Sorry, that's out of stock. We should have more in next week.",
      after: "It's out of stock, but [SKU-B] is a drop-in replacement we have 50 of in the warehouse.",
    },
    {
      title: 'Compatible accessory',
      before: "I've added the filter to your order. Will that be all?",
      after: "I've added the filter. Do you also need the compatible gaskets? They're usually replaced at the same time.",
    },
    {
      title: 'Private label alternative',
      before: "Here's the quote for the name-brand part you requested.",
      after: "Here's the name-brand price, but we also have a private-label version that's 15% cheaper and available today.",
    },
  ]

  return (
    <Section id="before-after" py={[14, 16, 20]} bg="white" innerWidth="container.xl">
      <VStack spacing={12}>
        <VStack spacing={4} textAlign="center" maxW="800px">
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="brand.500"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Before & After
          </Text>
          <Heading
            as="h2"
            fontSize={['2xl', '3xl', '4xl']}
            fontWeight="bold"
            color="#1c1e21"
          >
            What changes when your team has the answers
          </Heading>
        </VStack>

        <SimpleGrid columns={[1, null, 3]} spacing={8} width="100%">
          {comparisons.map((item, index) => (
            <Box 
              key={index} 
              bg="white" 
              borderRadius="xl" 
              p={8}
              border="2px solid"
              borderColor="gray.200"
              boxShadow="sm"
              _hover={{ borderColor: 'gray.300', boxShadow: 'md' }}
              transition="all 0.2s ease"
            >
              <Heading as="h3" fontSize="lg" mb={6} color="#1c1e21" fontWeight="semibold">
                {item.title}
              </Heading>
              
              <VStack align="stretch" spacing={6}>
                <Box>
                  <HStack mb={2}>
                    <Icon as={FiXCircle} color="red.400" boxSize={4} />
                    <Text fontSize="xs" fontWeight="bold" color="red.400" textTransform="uppercase" letterSpacing="wide">Before</Text>
                  </HStack>
                  <Text fontSize="md" color="gray.500" fontStyle="italic">
                    &ldquo;{item.before}&rdquo;
                  </Text>
                </Box>
                
                <Box borderTop="1px solid" borderColor="gray.100" pt={6}>
                  <HStack mb={2}>
                    <Icon as={FiCheckCircle} color="green.500" boxSize={4} />
                    <Text fontSize="xs" fontWeight="bold" color="green.500" textTransform="uppercase" letterSpacing="wide">After</Text>
                  </HStack>
                  <Text fontSize="md" color="gray.800" fontWeight="medium">
                    &ldquo;{item.after}&rdquo;
                  </Text>
                </Box>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        <Box pt={4}>
          <ButtonLink
            bg="brand.500"
            color="white"
            size="lg"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZPSP0Hrfia2UxPBPJdfpV7qmC1jGHrTVM9c7nrQYnKTASv7jMbiyqhay3JJqxxK9Vg3K8k9Vm"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ bg: 'brand.600' }}
            px={8}
            borderRadius="full"
          >
            Book a call
          </ButtonLink>
        </Box>
      </VStack>
    </Section>
  )
}

