'use client'

import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import { ButtonLink } from '#components/button-link/button-link'
import { Section } from '#components/section'

export const EarlyAccessSection = () => {
  return (
    <Section id="early-access" bg="white" innerWidth="container.xl" py={[10, 12, 14]}>
      <Box
        bg="brand.500"
        borderRadius="2xl"
        p={[8, 10, 12]}
        textAlign="center"
      >
        <VStack spacing={6}>
          <Text
            fontSize="xs"
            fontWeight="bold"
            color="whiteAlpha.800"
            letterSpacing="widest"
            textTransform="uppercase"
          >
            Learn More
          </Text>
          <Heading as="h2" size="xl" color="white">
            Built for suppliers who need reliable solutions.
          </Heading>
          <Text
            fontSize={['lg', 'xl']}
            color="whiteAlpha.900"
            lineHeight="tall"
            maxW="800px"
          >
            DimB is designed specifically for distributors with specialty products and expertise.
          </Text>
          <Box bg="whiteAlpha.100" p={6} borderRadius="xl" border="1px solid" borderColor="whiteAlpha.200">
             <Text fontWeight="medium" color="white">
              If you&apos;re a distributor with 1,000+ SKUs looking to scale your product expertise across your team, let&apos;s discuss how DimB can support you.
            </Text>
          </Box>
          <ButtonLink
            bg="white"
            color="brand.500"
            size="lg"
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2ZPSP0Hrfia2UxPBPJdfpV7qmC1jGHrTVM9c7nrQYnKTASv7jMbiyqhay3JJqxxK9Vg3K8k9Vm"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ bg: 'gray.100' }}
            px={8}
            borderRadius="full"
          >
            Book a Call
          </ButtonLink>
        </VStack>
      </Box>
    </Section>
  )
}

