import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Text,
} from '@chakra-ui/react'
import { Badge, Box } from '@chakra-ui/layout'
import { connect } from 'react-redux'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

import { connectWallet } from '../redux/punks/punksActions'

const Header = ({ connectWallet, walletAddress }) => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      py="4"
      px={{ base: '2', lg: '24' }}
      borderBottom="2px"
      borderColor="gray.200"
    >
      <Menu id="navbar" isLazy>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="outline"
        />
        <MenuList>
          <MenuItem>
            <Link to="/">Home</Link>{' '}
          </MenuItem>
          <MenuItem>
            <Link to="/gallery">Punks</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <Text ml="4" fontSize={{ base: '1.2rem', lg: '2rem' }}>
        🍭
      </Text>
      <Text
        fontSize={{ base: '1.2rem', lg: '2rem' }}
        fontWeight="bold"
        color="teal.400"
        mr="1"
      >
        Candy
      </Text>
      <Text
        fontSize={{ base: '1.2rem', lg: '2rem' }}
        fontWeight="bold"
        color="pink.400"
      >
        Punks
      </Text>
      {walletAddress ? (
        <Badge ml="auto" colorScheme="green">
          Conectado
        </Badge>
      ) : (
        <Box
          as="button"
          bgGradient="linear(to-l, #ff8867, #ff52ff)"
          className="connect-wallet-button"
          color="white"
          ml="auto"
          p="2"
          fontWeight="semibold"
          borderRadius="10"
          onClick={connectWallet}
          _hover={{ opacity: '0.5' }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
        >
          Conectar Wallet
        </Box>
      )}
    </Flex>
  )
}

const mapStateToProps = ({ walletAddress }) => {
  return { walletAddress }
}

const mapDispatchToProps = {
  connectWallet,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
