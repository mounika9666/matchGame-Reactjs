import './index.css'

const Header = props => {
  const {score, timer} = props

  return (
    <navbar className="navbar">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
      />
      <ul className="score-timer-container">
        <li className="timer-container">
          <p className="heading-text">
            Score: <span className="score-time">{score}</span>
          </p>
        </li>
        <li className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="score-time">{timer} sec</p>
        </li>
      </ul>
    </navbar>
  )
}

export default Header
