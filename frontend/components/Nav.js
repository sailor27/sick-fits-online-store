import Link from 'next/link';

const Nav = () => (
  <div>
    <div className="nav">
      <Link href="/sell">
        <a>Sell</a>
      </Link>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  </div>
);

export default Nav;