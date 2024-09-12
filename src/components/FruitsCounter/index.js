import {Component} from 'react'

import './index.css'

class FruitCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  increaseMangoCount = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  IncreaseBananaCount = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {bananaCount, mangoCount} = this.state

    return (
      <div className="app-container">
        <div className="fruit-card-container">
          <h1 className="fruit-heading">
            Bob ate <span className="mango-count">{mangoCount}</span> mangoes
            <span className="banana-count"> {bananaCount}</span> bananas
          </h1>
          <div className="fruit-card">
            <div className="mango-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <button
                type="button"
                className="fruit-button"
                onClick={this.increaseMangoCount}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                type="button"
                className="fruit-button"
                onClick={this.IncreaseBananaCount}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitCounter
