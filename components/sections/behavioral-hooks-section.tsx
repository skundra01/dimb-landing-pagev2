'use client'

import { Box, Text } from '@chakra-ui/react'
import * as React from 'react'

export const BehavioralHooksSection: React.FC = () => {
  const stats = React.useMemo(
    () => [
      'Find cross-references in seconds (not minutes)',
      'Surface in-stock alternatives when items are unavailable',
      'Turn tribal knowledge into structured product data',
      'Recommend compatible add-ons at quote time',
    ],
    []
  )

  // Duplicate stats for seamless loop
  const duplicatedStats = React.useMemo(() => [...stats, ...stats], [stats])

  return (
    <Box 
      bg="white" 
      py={3} 
      overflow="hidden" 
      position="relative"
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="gray.100"
    >
      <Box
        as="style"
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes scrollTicker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ticker-scroll-animation {
              animation: scrollTicker 40s linear infinite;
            }
          `,
        }}
      />
      <Box
        display="flex"
        whiteSpace="nowrap"
        className="ticker-scroll-animation"
      >
        {duplicatedStats.map((stat, index) => (
          <React.Fragment key={`${stat}-${index}`}>
            <Text
              fontSize={['xs', 'sm', 'md']}
              fontWeight="normal"
              color="gray.400"
              px={6}
              display="inline-block"
            >
              {stat}
            </Text>
            {index < duplicatedStats.length - 1 && (
              <Text
                fontSize={['xs', 'sm', 'md']}
                color="gray.200"
                px={3}
                display="inline-block"
              >
                •
              </Text>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}

