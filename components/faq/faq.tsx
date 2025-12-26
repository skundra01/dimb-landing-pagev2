import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  VStack,
} from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently Asked Questions',
    description,
    items = [],
  } = props
  return (
    <Section id="faq">
      <SectionTitle title={title} description={description} />

      <VStack spacing={4} align="stretch" maxW="900px" mx="auto">
        <Accordion allowToggle>
          {items?.map(({ q, a }, i) => {
            return <FaqItem key={i} question={q} answer={a} index={i} />
          })}
        </Accordion>
      </VStack>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
  index?: number
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, index }) => {
  const handleClick = () => {
    // Track FAQ click for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'faq_click', {
        event_category: 'engagement',
        event_label: `FAQ ${index}: ${typeof question === 'string' ? question : 'Question'}`,
      })
    }
    // Also log to console for debugging
    console.log(`FAQ clicked: ${index}`, question)
  }

  return (
    <AccordionItem
      border="1px"
      borderColor="gray.200"
      borderRadius="xl"
      mb={4}
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: 'lg' }}
      transition="all 0.2s"
    >
      <h2>
        <AccordionButton
          py={6}
          px={6}
          _hover={{ bg: 'gray.50' }}
          borderRadius="xl"
          onClick={handleClick}
        >
          <Box
            flex="1"
            textAlign="left"
            fontWeight="bold"
            fontSize={['lg', 'xl']}
            color="#1c1e21"
          >
            {question}
          </Box>
          <AccordionIcon color="#1e3c72" boxSize={6} />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={6}
        px={6}
        pt={2}
        color="#1c1e21"
        fontSize={['md', 'lg']}
        lineHeight="tall"
      >
        {answer}
      </AccordionPanel>
    </AccordionItem>
  )
}
