import { connect } from 'react-redux'

const Gallery = ({ mintedPunks }) => {
  return (
    <div className="gif-container">
      <p className="sub-text">Minted Items ✨</p>
      <div className="gif-grid">
        {mintedPunks.map((mint) => (
          <div className="gif-item" key={mint}>
            <img src={mint} alt={`Minted NFT ${mint}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = ({ mintedPunks }) => {
  return { mintedPunks }
}

export default connect(mapStateToProps, null)(Gallery)
