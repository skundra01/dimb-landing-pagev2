'use client'

import {
  Box,
  Flex,
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
  <Box position="relative" borderRadius="lg" overflow="hidden" minH="125px">
    {/* Problem state */}
    <motion.div style={{ opacity: problemOpacity }}>
      <Box bg={problemBg} borderRadius="lg" p={5} minH="125px">
        <HStack spacing={2} mb={2}>
          <Icon as={problemIcon} color={problemColor} boxSize={5} />
          <Text fontWeight="semibold" color="#1c1e21" fontSize="md">
            {label}
          </Text>
        </HStack>
        <Text color="gray.600" fontSize="sm" lineHeight="tall">{problemText}</Text>
      </Box>
    </motion.div>
    
    {/* Resolved state */}
    <motion.div style={{ opacity: resolvedOpacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <Box bg="brand.50" borderRadius="lg" p={5} minH="125px">
        <HStack spacing={2} mb={2}>
          <Icon as={FiCheckCircle} color="brand.500" boxSize={5} />
          <Text fontWeight="semibold" color="#1c1e21" fontSize="md">
            {label}
          </Text>
        </HStack>
        <Text color="gray.600" fontSize="sm" lineHeight="tall">Expert answer</Text>
      </Box>
    </motion.div>
  </Box>
)

export const ValuePropSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 40%'],
  })

  // Fade the "problem" outcomes out (starts a bit sooner)
  const problemOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0])

  // Fade the "resolved" outcomes in (starts a bit sooner)
  const resolvedOpacity = useTransform(scrollYProgress, [0.45, 0.7], [0, 1])

  return (
    <Section id="value-prop" py={[10, 12]} bg="white" innerWidth="container.xl">
      <Box ref={ref}>
        <VStack align="center" spacing={4} maxW="container.xl" mx="auto" px={{ base: 4, md: 0 }}>
          {/* Swapping header */}
          <Box position="relative" h="1.5em" mb={2}>
            <motion.div style={{ opacity: problemOpacity }}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.500"
              >
                Why this breaks today
              </Text>
            </motion.div>
            <motion.div style={{ opacity: resolvedOpacity, position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
              <Text
                fontSize="xs"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
                color="brand.500"
              >
                with DimB
              </Text>
            </motion.div>
          </Box>

          {/* Horizontal flow: Question → Arrow → Outcomes */}
          <Flex 
            w="100%" 
            direction={{ base: 'column', lg: 'row' }} 
            align={{ base: 'stretch', lg: 'center' }}
            gap={4}
          >
            {/* Left: Question */}
            <Box 
              bg="#f8f7f4" 
              borderRadius="xl" 
              p={5} 
              minW={{ base: '100%', lg: '280px' }}
              minH="125px"
              flexShrink={0}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <Text fontSize="md" fontWeight="semibold" color="#1c1e21">
                &ldquo;What can I use instead?&rdquo;
              </Text>
              <Text color="gray.500" fontSize="sm" mt={1}>
                Out of stock • compatibility matters
              </Text>
            </Box>

            {/* Arrow connector */}
            <Flex 
              align="center" 
              justify="center" 
              display={{ base: 'none', lg: 'flex' }}
              px={2}
            >
              <Box w="40px" h="2px" bg="gray.200" />
              <Box 
                w={0} 
                h={0} 
                borderTop="6px solid transparent"
                borderBottom="6px solid transparent"
                borderLeft="8px solid"
                borderLeftColor="gray.200"
              />
            </Flex>

            {/* Escalation path with scroll animation */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={3} flex="1">
              <ScrollStep
                label="Website"
                problemText="No recommendation"
                problemColor="red.500"
                problemBg="red.50"
                problemIcon={FiXCircle}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
              <ScrollStep
                label="New rep"
                problemText="Best guess, or escalates"
                problemColor="orange.500"
                problemBg="orange.50"
                problemIcon={FiTrendingUp}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
              <ScrollStep
                label="Expert rep"
                problemText="Correct substitute + add-ons"
                problemColor="green.600"
                problemBg="green.50"
                problemIcon={FiCheckCircle}
                problemOpacity={problemOpacity}
                resolvedOpacity={resolvedOpacity}
              />
            </SimpleGrid>
          </Flex>

          {/* Bottom takeaway */}
          <Box w="100%" pt={6} textAlign="center">
            <Text 
              color="#1c1e21" 
              fontSize={['lg', 'xl']} 
              fontWeight="medium"
              maxW="640px"
              mx="auto"
              lineHeight="tall"
            >
              DimB makes the expert answer available everywhere.
            </Text>
          </Box>
        </VStack>
      </Box>
    </Section>
  )
}

