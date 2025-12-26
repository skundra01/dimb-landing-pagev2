'use client'

import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ButtonLink } from '#components/button-link/button-link'

export const FinalCTA = () => {
  return (
    <Box bg="white" py={[10, 12]} px={4}>
      <Box
        bg="#f8f7f4"
        borderRadius="3xl"
        py={[8, 10]}
        maxW="1200px"
        mx="auto"
      >
        <Container maxW="container.md">
          <VStack spacing={6} textAlign="center">
            <Heading
              as="h2"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="bold"
              color="#1c1e21"
            >
              Let&apos;s see what&apos;s hiding in your catalog.
            </Heading>
            <Text color="gray.600" fontSize={['md', 'lg']} maxW="500px">
              Book a 30-minute call. We&apos;ll look at your product data together
              and show you what DimB could provide for your team.
            </Text>
            <HStack spacing={4} pt={4} flexWrap="wrap" justify="center">
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
                Book a Call
              </ButtonLink>
            </HStack>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

