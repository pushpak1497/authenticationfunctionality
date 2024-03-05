import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const About = props => {
  const {history} = props
  return (
    <>
      <Header />
      <div className="Home-container">
        <h1>About Route</h1>
        <LogoutButton details={history} />
      </div>
    </>
  )
}
export default About
