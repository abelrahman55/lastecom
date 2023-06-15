import Link from 'next/link';

export const NavCol = ({ nav }) => {
  return (
    <div className='footer-nav__col'>
      <span className='footer-nav__col-title' style={{textAlign:"start"}}>{nav.title}</span>
      <ul>
        {nav?.navLinks?.map((nav, indx) => (
          <li key={nav.name + indx}>
            <Link href={nav.path}>
              <a style={{marginLeft:"5%"}}>{nav.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
