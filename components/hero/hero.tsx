import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  titleAlign?: 'left' | 'center' | 'right'
}

export const Hero = ({
  title,
  description,
  children,
  titleAlign = 'left',
  ...rest
}: HeroProps) => {
  const isCenter = titleAlign === 'center'

  return (
    <Flex py={[10, 12, 16]} alignItems="center" {...rest}>
      <Container>
        <VStack
          spacing={[4, null, 6]}
          alignItems={isCenter ? 'center' : 'flex-start'}
          width="100%"
        >
          <Text as="h1" textStyle="h1" textAlign={titleAlign} width="100%">
            {title}
          </Text>
                <Text
                  as="div"
                  textStyle="subtitle"
                  align={isCenter ? 'center' : 'left'}
                  color="#1c1e21"
                  width="100%"
                >
            {description}
          </Text>
        </VStack>
        {children}
      </Container>
    </Flex>
  )
}
