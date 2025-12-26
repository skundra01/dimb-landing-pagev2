'use client'

import { Box, Container, Text } from '@chakra-ui/react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import faq from '#data/faq'

export const FaqSection = () => {
  return (
    <Box bg="#f8f7f4" pb={12}>
      <Faq {...faq} />

      <Container maxW="container.xl">
        <Box
          p={8}
          bg="white"
          borderRadius="2xl"
          textAlign="center"
          maxW="700px"
          mx="auto"
          boxShadow="sm"
        >
          <Text fontSize="lg" fontWeight="semibold" color="#1c1e21" mb={4}>
            Have other questions?
          </Text>
          <ButtonLink
            variant="outline"
            borderColor="brand.500"
            color="brand.500"
            size="md"
            href="mailto:suchin@dimb.app?subject=Question about DimB"
            _hover={{ bg: 'brand.50' }}
            borderRadius="full"
          >
            Get in touch
          </ButtonLink>
        </Box>
      </Container>
    </Box>
  )
}

