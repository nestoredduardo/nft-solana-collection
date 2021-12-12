import { Box, Spinner } from '@chakra-ui/react'
import { connect } from 'react-redux'

const Gallery = ({ mintedPunks, isminting }) => {
  return (
    <Box className="gif-container">
      <p className="sub-text">Minted Items ✨</p>
      <div className="gif-grid">
        {isminting && (
          <Spinner
            color="#ff8867"
            emptyColor="gray.200"
            thickness="4px"
            size="xl"
          />
        )}
        {mintedPunks.map((mint) => (
          <div className="gif-item" key={mint}>
            <img src={mint} alt={`Minted NFT ${mint}`} />
          </div>
        ))}
      </div>
    </Box>
  )
}

const mapStateToProps = ({ mintedPunks, loadingPunks }) => {
  return { mintedPunks, loadingPunks }
}

export default connect(mapStateToProps, null)(Gallery)
