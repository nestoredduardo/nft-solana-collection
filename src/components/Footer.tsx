import { Center, HStack, Link } from '@chakra-ui/layout'
import Icon from '@chakra-ui/icon'

import { BsTwitter } from 'react-icons/bs'

const TWITTER_HANDLE = '_buildspace'
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`
const ARTISAN_HANDLE = 'nestoredduardo'
const ARTISAN_LINK = `https://twitter.com/${ARTISAN_HANDLE}`

const Footer: React.FC = () => {
  return (
    <Center
      flexDirection={{ base: 'column', md: 'row' }}
      fontWeight="bold"
      borderTop="2px"
      borderColor="gray.200"
      p="4"
    >
      <HStack>
        <Icon as={BsTwitter} color="blue.500" />
        <Link
          variant="link"
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
          color="pink.400"
        >{`built on @${TWITTER_HANDLE}`}</Link>
      </HStack>
      <Link
        variant="link"
        href={ARTISAN_LINK}
        target="_blank"
        rel="noreferrer"
        ml="1"
        bgGradient="linear(to-l, #8D4FF6, #00E1C9)"
        bgClip="text"
      >{`by @${ARTISAN_HANDLE}`}</Link>
    </Center>
  )
}

export default Footer
