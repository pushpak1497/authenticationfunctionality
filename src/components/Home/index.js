import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = props => {
  const {history} = props
  console.log(history)
  return (
    <>
      <Header />
      <div className="Home-container">
        <h1>Home Route</h1>
        <LogoutButton details={history} />
      </div>
    </>
  )
}
export default Home
