import Link from 'next/link';
import NavStyles from './styles/NavStyles';
const Nav = () => (
  <NavStyles>
    <div className="nav">
      <Link href="/sell">
        <a>Sell</a>
      </Link>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  </NavStyles>
);

export default Nav;