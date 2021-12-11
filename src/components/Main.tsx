import { HStack, Text, VStack } from '@chakra-ui/layout'
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
    <VStack>
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
        <Text>Dispensador del Punks NFTs para que Nunca pares de aprender</Text>
        <Text>
          Candy Punks es una colección de Avatares randomizados cuya metadata es
          almacenada en la red de Solana. Poseen características únicas y sólo
          hay 100 en existencia.
        </Text>
        <Text>
          Cada Candy Punk se genera de forma secuencial basado en tu address,
          usa el previsualizador para averiguar cuál sería tu Platzi Punk si
          minteas en este momento
        </Text>
        <HStack>
          {walletAddress && <CandyMachine walletAddress={window.solana} />}
          <Button>Obtén tu Candy Punk</Button>
          <Button>Galería</Button>
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
