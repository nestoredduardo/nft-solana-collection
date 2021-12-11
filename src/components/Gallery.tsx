import { Box } from '@chakra-ui/react'
import { connect } from 'react-redux'

const Gallery = ({ mintedPunks, loadingPunks }) => {
  return (
    <Box className="gif-container">
      <p className="sub-text">Minted Items ✨</p>
      <div className="gif-grid">
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
