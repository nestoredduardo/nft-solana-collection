import { HStack, Text, VStack, Box } from '@chakra-ui/layout'
import { Badge, Flex, Image, Button } from '@chakra-ui/react'
import { useEffect } from 'react'
import { connect } from 'react-redux'

import { checkIfWalletIsConnected } from '../redux/punks/punksActions'
import CandyMachine from '../CandyMachine'

declare global {
  interface Window {
    solana: any
  }
}

const Main = ({ checkIfWalletIsConnected, walletAddress }) => {
  useEffect(() => {
    const onLoad = async () => {
      checkIfWalletIsConnected()
    }

    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])

  return (
    <VStack mb="9">
      <Flex align="center" direction="column" mt="20">
        <Image
          boxSize="264px"
          src="https://avataaars.io/"
          objectFit="cover"
          alt="Basic Candy Punks"
        />
        {walletAddress ? (
          <Badge mt="1rem" colorScheme="green">
            Wallet Conectado 👻
          </Badge>
        ) : (
          <Badge mt="1rem" colorScheme="pink">
            Wallet Desconectado
          </Badge>
        )}
      </Flex>
      <VStack>
        <Flex direction="column" w="full" px="6" mb="4" fontSize="2xl">
          <VStack spacing="-2" align="start">
            <Text fontWeight="semibold">Dispensador de Punks NFTs</Text>
            <Text fontWeight="semibold" color="teal.400">
              que no paran de aprender
            </Text>
          </VStack>
        </Flex>
        <Text px="6" color="gray.500" lineHeight="6" pb="4">
          Candy Punks es una colección de Avatares randomizados cuya metadata es
          almacenada en la red de Solana. Poseen características únicas y sólo
          hay 21 en existencia.
        </Text>
        <HStack>
          <CandyMachine walletAddress={window.solana} />
        </HStack>
      </VStack>
    </VStack>
  )
}

const mapStateToProps = ({ walletAddress }) => {
  return {
    walletAddress,
  }
}

const mapDispatchToProps = {
  checkIfWalletIsConnected,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
