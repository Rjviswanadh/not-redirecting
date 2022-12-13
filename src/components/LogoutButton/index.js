import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const clickToLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button type="button" onClick={clickToLogout}>
        Logout
      </button>
    </>
  )
}
export default withRouter(LogoutButton)
