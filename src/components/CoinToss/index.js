import {Component} from 'react'
import './index.css'

const coinImages = {
  headsImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  tailsImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
}
class CoinToss extends Component {
  state = {
    showedImage: coinImages.headsImg,
    totalCount: 0,
    headCount: 0,
    tailCount: 0,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        showedImage: coinImages.headsImg,
        totalCount: prevState.totalCount + 1,
        headCount: prevState.headCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        showedImage: coinImages.tailsImg,
        totalCount: prevState.totalCount + 1,
        tailCount: prevState.tailCount + 1,
      }))
    }
  }

  render() {
    const {totalCount, headCount, tailCount, showedImage} = this.state

    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <div className="toss-image-container">
            <img className="toss-image" alt="toss result" src={showedImage} />
          </div>
          <button type="button" onClick={this.tossCoin} className="button">
            Toss Coin
          </button>
          <ul className="toss-result-count-container">
            <li className="list-item">
              <p>Total: {totalCount}</p>
            </li>
            <li className="list-item">
              <p>Heads: {headCount}</p>
            </li>
            <li className="list-item">
              <p>Tails: {tailCount}</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default CoinToss
