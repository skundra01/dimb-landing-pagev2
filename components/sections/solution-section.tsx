'use client'

import React from 'react'
import {
  Box,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'

import { ButtonLink } from '#components/button-link'
import { Section } from '#components/section'

export const SolutionSection = () => {
  const handleScrollToEarlyAccess = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const element = document.getElementById('early-access')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <Section id="solution" py={[10, 12, 14]} bg="#f8f7f4" innerWidth="container.xl">
      <style>
        {`
          @keyframes mockupFlow {
            0%, 10% {}
            15% {}
            20%, 35% {}
            40%, 55% {}
            60%, 85% {}
            90%, 100% {}
          }
          
          
          @keyframes expandSection {
            0%, 10% { max-height: 0; opacity: 0; }
            18%, 82% { max-height: 300px; opacity: 1; }
            92%, 100% { max-height: 0; opacity: 0; }
          }
          
          @keyframes highlightProduct {
            0%, 25% { background: #f9fafb; transform: scale(1); }
            32%, 50% { background: #dbeafe; transform: scale(1.02); box-shadow: 0 2px 8px rgba(30, 60, 114, 0.15); }
            58%, 100% { background: #f9fafb; transform: scale(1); }
          }
          
          @keyframes showSpecs {
            0%, 40% { opacity: 0; max-height: 0; transform: translateY(-10px); }
            50%, 72% { opacity: 1; max-height: 200px; transform: translateY(0); }
            82%, 100% { opacity: 0; max-height: 0; transform: translateY(-10px); }
          }
          
          @keyframes pulseClick {
            0%, 33% { transform: scale(1); opacity: 1; }
            35% { transform: scale(0.9); opacity: 0.8; }
            37% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1); opacity: 1; }
          }
          
          .animated-mockup {
            animation: mockupFlow 8s ease-in-out infinite;
          }
          
          .expand-animation {
            animation: expandSection 8s ease-in-out infinite;
            overflow: hidden;
          }
          
          .highlight-animation {
            animation: highlightProduct 8s ease-in-out infinite;
            transition: all 0.3s ease;
          }
          
          .specs-animation {
            animation: showSpecs 8s ease-in-out infinite;
            overflow: hidden;
          }
          
          .click-animation {
            animation: pulseClick 8s ease-in-out infinite;
          }
        `}
      </style>
      
      <Grid
        templateColumns={['1fr', null, '1fr 1fr']}
        gap={[10, 12, 16]}
        alignItems="start"
      >
        {/* Left: Animated Product Card Mockup */}
        <GridItem order={[2, null, 1]} minH={{ base: "450px", md: "455px" }}>
          <Box position="relative">
            <Box
              className="animated-mockup"
              bg="white"
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
              boxShadow="0 4px 20px rgba(0,0,0,0.08)"
            >
              {/* Product Card Header */}
              <Box p={4} borderBottom="1px solid" borderColor="gray.100">
                <HStack justify="space-between" mb={3}>
                  <Text fontSize="lg" fontWeight="semibold" color="gray.800">
                    Product ID: BV-750-FP
                  </Text>
                  <Box
                    bg="green.100"
                    color="green.800"
                    fontSize="xs"
                    fontWeight="medium"
                    px={3}
                    py={1}
                    borderRadius="md"
                  >
                    Proprietary
                  </Box>
                </HStack>
                <HStack justify="space-between" fontSize="sm" color="gray.600">
                  <VStack align="start" spacing={0}>
                    <Text fontWeight="medium">Part Number</Text>
                    <Text color="gray.700">94A-105-01</Text>
                  </VStack>
                  <VStack align="end" spacing={0}>
                    <Text fontWeight="medium">Brand</Text>
                    <Text color="gray.700">Apollo</Text>
                  </VStack>
                </HStack>
              </Box>
              
              {/* Similar Products Section */}
              <Box p={4} borderBottom="1px solid" borderColor="gray.100">
                <HStack justify="space-between" mb={2}>
                  <Text fontSize="sm" fontWeight="medium" color="gray.700">
                    Similar Products (4)
                  </Text>
                  <Text color="gray.400" fontSize="xs">▼</Text>
                </HStack>
                
                {/* Animated expanding list */}
                <Box className="expand-animation">
                  <VStack align="stretch" spacing={2}>
                    {/* First product - static */}
                    <Box p={3} borderRadius="md">
                      <Text fontSize="sm" fontWeight="medium" color="gray.800">
                        Watts LF600 Series
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Cross-reference • Lead-free
                      </Text>
                    </Box>
                    
                    {/* Second product - gets highlighted and clicked */}
                    <Box 
                      className="highlight-animation click-animation"
                      p={3} 
                      bg="gray.50"
                      borderRadius="md"
                      cursor="pointer"
                    >
                      <Text fontSize="sm" fontWeight="medium" color="gray.800">
                        Nibco T-580-70
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Alternative • Higher margin
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </Box>

              {/* Specs Panel - appears on "click" */}
              <Box className="specs-animation" p={4} bg="blue.50">
                <Text fontSize="sm" fontWeight="semibold" color="#1e3c72" mb={3}>
                  Nibco T-580-70 Specs
                </Text>
                <SimpleGrid columns={2} spacing={3} fontSize="xs">
                  <Box>
                    <Text color="gray.500">Size</Text>
                    <Text fontWeight="medium" color="gray.800">3/4"</Text>
                  </Box>
                  <Box>
                    <Text color="gray.500">Material</Text>
                    <Text fontWeight="medium" color="gray.800">Lead-Free Brass</Text>
                  </Box>
                  <Box>
                    <Text color="gray.500">Pressure</Text>
                    <Text fontWeight="medium" color="gray.800">600 WOG</Text>
                  </Box>
                  <Box>
                    <Text color="gray.500">Margin</Text>
                    <Text fontWeight="medium" color="green.600">+12% vs current</Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </Box>
          </Box>
        </GridItem>

        {/* Right: Text */}
        <GridItem order={[1, null, 2]}>
          <VStack align="start" spacing={6}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="brand.500"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              The Solution
            </Text>
            <Heading
              as="h2"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="bold"
              color="#1c1e21"
              lineHeight="short"
            >
              DimB makes expert answers the default.
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
            Your experts already know what to recommend when products are out of stock, incompatible, or incomplete. DimB turns those decisions into instant answers for every rep, every time.
            </Text>
            
            <VStack align="start" spacing={4} pt={4}>
              <Box pl={4} borderLeft="2px solid" borderColor="brand.500">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Instant substitutes
                  </Text>{' '}
                  when products aren't available.
                </Text>
              </Box>
              <Box pl={4} borderLeft="2px solid" borderColor="brand.500">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Confident recommendations
                  </Text>{' '}
                  that match how your experts sell.
                </Text>
              </Box>
              <Box pl={4} borderLeft="2px solid" borderColor="brand.500">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Higher order value
                  </Text>{' '}
                  from the right add-ons at the right time.
                </Text>
              </Box>
            </VStack>

            <ButtonLink
              bg="brand.500"
              color="white"
              size="lg"
              href="#early-access"
              onClick={handleScrollToEarlyAccess}
              _hover={{ bg: 'brand.600' }}
              px={8}
              borderRadius="full"
              mt={4}
            >
              Request early access
            </ButtonLink>
          </VStack>
        </GridItem>
      </Grid>
    </Section>
  )
}

