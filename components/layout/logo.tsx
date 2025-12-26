'use client'

import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

import * as React from 'react'

import siteConfig from '#data/config'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  let logo
  if (siteConfig.logo) {
    logo = <Box as={siteConfig.logo} height="32px" mt="-4px" />
  } else {
    logo = (
      <Heading
        as="h1"
        size="xl"
        fontWeight="extrabold"
        fontSize={['2xl', '3xl']}
        color="brand.500"
        letterSpacing="-0.02em"
      >
        DimB
      </Heading>
    )
  }

  return (
    <Flex h="10" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        _hover={{ textDecoration: 'none' }}
      >
        {logo}
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
