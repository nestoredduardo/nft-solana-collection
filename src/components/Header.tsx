import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Button,
  Text,
} from '@chakra-ui/react'
import { Badge, Box } from '@chakra-ui/layout'
import { connect } from 'react-redux'
import { HamburgerIcon } from '@chakra-ui/icons'

import { connectWallet } from '../redux/punks/punksActions'

const Header = ({ connectWallet, walletAddress }) => {
  return (
    <Flex
      justify="center"
      alignItems="center"
      px="2"
      py="4"
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
          <MenuItem>Home</MenuItem>
          <MenuItem>Punks</MenuItem>
        </MenuList>
      </Menu>
      <Text ml="4" fontSize="1.2rem">
        🍭
      </Text>
      <Text fontSize="1.2em" fontWeight="bold" color="teal.400" mr="1">
        Candy
      </Text>
      <Text fontSize="1.2em" fontWeight="bold" color="pink.400">
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
