import { Button, ButtonProps } from '@chakra-ui/react'
import NextLink, { LinkProps } from 'next/link'

export type ButtonLinkProps = LinkProps &
  ButtonProps & {
    target?: string
    rel?: string
  }

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  children,
  target,
  rel,
  ...props
}) => {
  const isExternal =
    href.toString().startsWith('http') || href.toString().startsWith('mailto:')

  if (isExternal) {
    return (
      <Button
        as="a"
        href={href.toString()}
        target={target}
        rel={rel}
        {...props}
      >
        {children}
      </Button>
    )
  }

  return (
    <NextLink href={href} passHref>
      <Button {...props}>{children}</Button>
    </NextLink>
  )
}
