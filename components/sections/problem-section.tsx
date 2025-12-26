'use client'

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import * as React from 'react'
import {
  FiCheckCircle,
  FiTrendingUp,
  FiXCircle,
} from 'react-icons/fi'

import { Section } from '#components/section'

const ScrollStep = ({ 
  label, 
  problemText, 
  problemColor,
  problemBg,
  problemIcon,
  problemOpacity, 
  resolvedOpacity 
}: { 
  label: string
  problemText: string
  problemColor: string
  problemBg: string
  problemIcon: React.ElementType
  problemOpacity: MotionValue<number>
  resolvedOpacity: MotionValue<number>
}) => (
  <Box position="relative" borderRadius="lg" overflow="hidden" minH="76px">
    {/* Problem state */}
    <motion.div style={{ opacity: problemOpacity }}>
      <Box bg={problemBg} borderRadius="lg" p={4} minH="76px">
        <HStack spacing={2} mb={1}>
          <Icon as={problemIcon} color={problemColor} boxSize={4} />
          <Text fontWeight="semibold" color="#1c1e21" fontSize="sm">
            {label}
          </Text>
        </HStack>
        <Text color="gray.600" fontSize="sm" lineHeight="tall">{problemText}</Text>
      </Box>
    </motion.div>
    
    {/* Resolved state */}
    <motion.div style={{ opacity: resolvedOpacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Box bg="brand.50" borderRadius="lg" p={4} minH="76px">
        <HStack spacing={2} mb={1}>
          <Icon as={FiCheckCircle} color="brand.500" boxSize={4} />
          <Text fontWeight="semibold" color="#1c1e21" fontSize="sm">
            {label}
          </Text>
        </HStack>
        <Text color="gray.600" fontSize="sm" lineHeight="tall">The right replacement and full basket</Text>
      </Box>
    </motion.div>
  </Box>
)

export const ProblemSection = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 40%'],
  })

  // Fade the "problem" outcomes out
  const problemOpacity = useTransform(scrollYProgress, [0.55, 0.67], [1, 0])

  // Fade the "resolved" outcomes in
  const resolvedOpacity = useTransform(scrollYProgress, [0.62, 0.8], [0, 1])

  return (
    <Section id="problem" py={[10, 12, 14]} bg="#f8f7f4" innerWidth="container.xl">
      <Grid
        templateColumns={['1fr', null, '1fr 1fr']}
        gap={[10, 12, 16]}
        alignItems="center"
      >
        {/* Left: Text */}
        <GridItem>
          <VStack align="start" spacing={8}>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="brand.500"
              letterSpacing="widest"
              textTransform="uppercase"
            >
              The Problem
            </Text>
            <Heading
              as="h2"
              fontSize={['2xl', '3xl', '4xl']}
              fontWeight="bold"
              color="#1c1e21"
              lineHeight="short"
            >
              Scattered product knowledge doesn't scale.
            </Heading>
            <Text fontSize="lg" color="gray.600" lineHeight="tall">
              Your best people know which products replace which, what&apos;s compatible, and what to offer when something&apos;s out of stock. But that knowledge lives in their heads — or scattered across spreadsheets, PDFs, and tribal memory.
            </Text>
            
            <VStack align="start" spacing={5} pt={6} width="100%">
              <Box pl={4} borderLeft="2px solid" borderColor="brand.100">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Ramp-up stays slow.
                  </Text>{' '}
                  New reps can't answer product questions.
                </Text>
              </Box>
              <Box pl={4} borderLeft="2px solid" borderColor="brand.100">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Systems fall short.
                  </Text>{' '}
                  ERPs track inventory, CRMs manage customers, PIMs store data.
                </Text>
              </Box>
              <Box pl={4} borderLeft="2px solid" borderColor="brand.100">
                <Text color="gray.600">
                  <Text as="span" fontWeight="semibold" color="#1c1e21">
                    Knowledge drain.
                  </Text>{' '}
                  When people leave, knowledge leaves with them.
                </Text>
              </Box>
            </VStack>
          </VStack>
        </GridItem>

        {/* Right: Escalation Animation with scroll-based transition */}
        <GridItem ref={ref} display="flex" alignItems="center" justifyContent="center">
          <Box
            bg="white"
            borderRadius="xl"
            p={5}
            w="100%"
            boxShadow="0 4px 20px rgba(0,0,0,0.08)"
            border="1px solid"
            borderColor="gray.100"
          >
          <VStack spacing={3} align="stretch" w="100%">
            {/* Question Card */}
            <Box 
              bg="gray.50" 
              borderRadius="lg" 
              p={4}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize="xs" fontWeight="medium" color="gray.400" textTransform="uppercase" letterSpacing="wide" mb={1}>
                Customer Question
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="#1c1e21">
                &ldquo;What can I use instead?&rdquo;
              </Text>
              <Text color="gray.500" fontSize="sm" mt={1}>
                Out of stock • compatibility matters
              </Text>
            </Box>

            {/* Arrow connector */}
            <Flex align="center" justify="center">
              <Box w="2px" h="16px" bg="gray.300" />
            </Flex>

            {/* Escalation Flow with scroll animation */}
            <SimpleGrid columns={1} spacing={3}>
              <ScrollStep
                label="Website"
                problemText="No substitute guidance"
                problemColor="red.500"
                problemBg="red.50"
                problemIcon={FiXCircle}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
              <ScrollStep
                label="New rep"
                problemText="Best effort, but escalates to an expert"
                problemColor="orange.500"
                problemBg="orange.50"
                problemIcon={FiTrendingUp}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
              <ScrollStep
                label="Expert rep"
                problemText="Identifies the right replacement and full basket"
                problemColor="green.600"
                problemBg="green.50"
                problemIcon={FiCheckCircle}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
            </SimpleGrid>

            {/* DimB Layer - transitions from gray/inactive to active */}
            <Box position="relative" mt={1}>
              {/* Inactive state - gray, visible by default */}
              <motion.div style={{ opacity: problemOpacity }}>
                <Box
                  bg="gray.100"
                  borderRadius="lg"
                  p={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  border="1px dashed"
                  borderColor="gray.300"
                >
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.400"
                    borderRadius="full"
                  />
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color="gray.500"
                  >
                    Without DimB
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.400"
                  >
                    — Experts are the bottleneck.
                  </Text>
                  <Box
                    w="8px"
                    h="8px"
                    bg="gray.400"
                    borderRadius="full"
                  />
                </Box>
              </motion.div>
              
              {/* Active state - branded, appears on scroll */}
              <motion.div 
                style={{ 
                  opacity: resolvedOpacity,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <Box
                  bg="brand.500"
                  borderRadius="lg"
                  p={3}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap={2}
                  boxShadow="0 4px 12px rgba(30, 60, 114, 0.25)"
                >
                  <Box
                    w="8px"
                    h="8px"
                    bg="green.400"
                    borderRadius="full"
                    boxShadow="0 0 6px rgba(72, 187, 120, 0.6)"
                  />
                  <Text
                    fontSize="sm"
                    fontWeight="bold"
                    color="white"
                    letterSpacing="wide"
                  >
                    DimB
                  </Text>
                  <Text
                    fontSize="xs"
                    color="whiteAlpha.800"
                  >
                    — Expert answers are built into the workflow.
                  </Text>
                  <Box
                    w="8px"
                    h="8px"
                    bg="green.400"
                    borderRadius="full"
                    boxShadow="0 0 6px rgba(72, 187, 120, 0.6)"
                  />
                </Box>
              </motion.div>
            </Box>
          </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Section>
  )
}
