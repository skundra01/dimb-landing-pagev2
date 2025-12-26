import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'

import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props
  return (
    <Box
      bg="white"
      borderTop="2px solid"
      borderColor="gray.200"
      {...rest}
    >
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={[1, null, columns]} spacing={8}>
          <Stack
            spacing="8"
            alignItems={['center', null, 'flex-start']}
            textAlign={['center', null, 'left']}
          >
            <Stack alignItems={['center', null, 'flex-start']}>
              <Flex>
                <Text fontSize="2xl" fontWeight="bold">
                  DimB
                </Text>
              </Flex>
              <Text fontSize="md" color="#1c1e21" maxW="400px">
                {siteConfig.seo.description}
              </Text>
            </Stack>
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Stack>
          <Stack
            direction={['column', 'row']}
            justify={['center', null, 'flex-end']}
            spacing="4"
            alignSelf={['center', null, 'flex-end']}
            alignItems="center"
          >
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="#1c1e21" fontSize="sm">
      {content || children}
    </Text>
  )
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="#1c1e21"
      fontSize={['md', 'sm']}
      textDecoration="none"
      _hover={{
        color: 'brand.500',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
