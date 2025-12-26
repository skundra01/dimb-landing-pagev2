import {
  Box,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  IconButtonProps,
  LinkProps,
  Stack,
  Text,
  useBreakpointValue,
  useUpdateEffect,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import useRouteChanged from 'hooks/use-route-changed'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu } from 'react-icons/ai'
import { RemoveScroll } from 'react-remove-scroll'

import * as React from 'react'

import { Logo } from '#components/layout/logo'
import siteConfig from '#data/config'

interface NavLinkProps extends LinkProps {
  label: string
  href?: string
  isActive?: boolean
}

function NavLink({ href, children, isActive, ...rest }: NavLinkProps) {
  const pathname = usePathname()
  const bgActiveHoverColor = 'gray.100'

  const [, group] = href?.split('/') || []
  isActive = isActive ?? pathname?.includes(group)

  return (
    <Link
      href={href}
      display="inline-flex"
      flex="1"
      minH="40px"
      px="8"
      py="3"
      transition="0.2s all"
      fontWeight={isActive ? 'bold' : 'semibold'}
      fontSize="xl"
      borderColor={isActive ? '#1e3c72' : undefined}
      borderBottomWidth="1px"
      color={isActive ? '#1e3c72' : '#1c1e21'}
      _hover={{
        bg: isActive ? '#1e3c72' : bgActiveHoverColor,
        color: isActive ? 'white' : '#1e3c72',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => {} } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const bgColor = 'whiteAlpha.900'

  useRouteChanged(onClose)
  /**
   * Scenario: Menu is open on mobile, and user resizes to desktop/tablet viewport.
   * Result: We'll close the menu
   */
  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })

  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <RemoveScroll forwardProps>
          <Flex
            direction="column"
            w="100%"
            bg={bgColor}
            h="100vh"
            overflow="auto"
            pos="absolute"
            inset="0"
            zIndex="modal"
            pb="8"
            backdropFilter="blur(5px)"
          >
            <Box>
              <Flex justify="space-between" px="8" pt="4" pb="4">
                <Text fontSize="2xl" fontWeight="bold">
                  DimB
                </Text>
                <HStack spacing="5">
                  <CloseButton ref={closeBtnRef} onClick={onClose} />
                </HStack>
              </Flex>
              <Stack alignItems="stretch" spacing="0">
                {siteConfig.header.links.map(
                  ({ href, id, label, ...props }, i) => {
                    return (
                      <NavLink
                        href={href || `/#${id}`}
                        key={i}
                        {...(props as any)}
                      >
                        {label}
                      </NavLink>
                    )
                  },
                )}
              </Stack>
            </Box>
          </Flex>
        </RemoveScroll>
      )}
    </>
  )
}

export const MobileNavButton = React.forwardRef(
  (props: IconButtonProps, ref: React.Ref<any>) => {
    return (
      <IconButton
        ref={ref}
        display={{ base: 'flex', md: 'none' }}
        fontSize="20px"
        color="gray.800"
        variant="ghost"
        icon={<AiOutlineMenu />}
        {...props}
        aria-label="Open menu"
      />
    )
  },
)

MobileNavButton.displayName = 'MobileNavButton'
