import Cookies from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {details} = props
    details.replace('/login')
  }

  return (
    <button type="button" onClick={onClickLogout}>
      logout
    </button>
  )
}
export default LogoutButton
