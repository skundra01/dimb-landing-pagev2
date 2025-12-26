'use client'

import { Button, ButtonProps, forwardRef } from '@chakra-ui/react'
import Link from 'next/link'

export interface NavLinkProps extends ButtonProps {
  isActive?: boolean
  href?: string
  id?: string
  variant?: string
}

export const NavLink = forwardRef<NavLinkProps, 'a'>((props, ref) => {
  const { href, type, isActive, variant, ...rest } = props

  // Primary variant for CTA buttons in nav
  if (variant === 'primary') {
    return (
      <Button
        as={Link}
        href={href}
        ref={ref}
        bg="#1e3c72"
        color="white"
        lineHeight="2rem"
        fontWeight="semibold"
        fontSize="md"
        px={6}
        _hover={{ bg: '#15274f' }}
        {...rest}
      />
    )
  }

  return (
    <Button
      as={Link}
      href={href}
      ref={ref}
      variant="nav-link"
      lineHeight="2rem"
      isActive={isActive}
      fontWeight="semibold"
      fontSize="md"
      color="#1c1e21"
      {...rest}
    />
  )
})

NavLink.displayName = 'NavLink'
