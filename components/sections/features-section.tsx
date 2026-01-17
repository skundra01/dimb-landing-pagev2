'use client'

import { Box, Text, VStack } from '@chakra-ui/react'
import { FiLayers, FiRefreshCw, FiUsers, FiZap } from 'react-icons/fi'

import { ButtonLink } from '#components/button-link/button-link'
import { Features } from '#components/features'

export const FeaturesSection = () => {
  return (
    <Box bg="#f8f7f4">
      <VStack spacing={4}>
        <Features
        id="features"
        py={[8, 10, 12]}
        spacing={6}
        title={
          <>
            <Text
              as="span"
              display="block"
              fontSize="xs"
              fontWeight="bold"
              color="brand.500"
              letterSpacing="widest"
              textTransform="uppercase"
              mb={2}
            >
              Capabilities
            </Text>
            Designed for real-world reliability
          </>
        }
        description=""
        align="center"
        innerWidth="container.xl"
        columns={[1, 2]}
        iconSize={6}
        features={[
          {
            title: 'Flexible relationship types',
            icon: FiLayers,
            description:
              'Cross-references, supersessions, compatibility, accessories, substitutes — model the relationships that matter to your business, not a rigid predefined schema.',
          },
          {
            title: 'Works with your existing systems',
            icon: FiRefreshCw,
            description:
              'DimB integrates with your ERP and PIM. It\'s not another system to replace — it\'s a layer that makes your existing data more useful.',
          },
          {
            title: 'Your experts stay in control',
            icon: FiUsers,
            description:
              'DimB can suggest relationships, but nothing goes live without expert approval. Your product team owns the data — not an algorithm.',
          },
          {
            title: 'Answers in seconds',
            icon: FiZap,
            description:
              'Reps find alternatives, compatible products, and substitutes without leaving their workflow. The knowledge is just there.',
          },
        ]}
      />
        <Box pb={6}>
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
            See it in action
          </ButtonLink>
        </Box>
      </VStack>
    </Box>
  )
}

