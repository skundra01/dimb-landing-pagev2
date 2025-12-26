import { Box } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const gradientColor = '#1e3c72'

  let fallbackBackground = `radial-gradient(at top left, ${gradientColor} 100%, transparent 100%), radial-gradient(at bottom, ${gradientColor} 0%, transparent 60%), radial-gradient(at bottom left, ${gradientColor} 0%, transparent 50%),
        radial-gradient(at top right, ${gradientColor}, transparent), radial-gradient(at bottom right, ${gradientColor} 0%, transparent 50%);`

  let gradientOverlay =
    'linear-gradient(0deg, var(--chakra-colors-white) 60%, rgba(0, 0, 0, 0) 100%);'

  return (
    <Box
      backgroundImage={fallbackBackground}
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity="0.4"
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      <Box
        backgroundImage={!hideOverlay ? gradientOverlay : undefined}
        position="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
        zIndex="1"
      ></Box>
    </Box>
  )
}
