import {Link} from 'react-router-dom'
// import LogoutButton from '../LogoutButton'

const Header = () => (
  <>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </>
)
export default Header
