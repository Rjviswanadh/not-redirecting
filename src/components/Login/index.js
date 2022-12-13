import Cookies from 'js-cookie'

const Login = props => {
  const submitForm = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const clickToLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)
    if (response.ok === true) {
      submitForm(data.jwt_token)
    }
  }

  return (
    <>
      <h1>Please Login</h1>
      <button type="button" onClick={clickToLogin}>
        Login with sample creds
      </button>
    </>
  )
}
export default Login
