import useWindowSize from 'components/utils/windowSize/windowSize';
import { USER_ID } from 'configs/AppConfig';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CartContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';

export const Nav = ({ navItem }) => {
  const router = useRouter();
  const [sub, setSub] = useState(false);
  const [height, width] = useWindowSize();
  //const [alldata,setalldata]=useState({});
  let mydata;
  useEffect(() => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))
    mydata=JSON.parse(localStorage.getItem(USER_ID));
    //setalldata(JSON.parse(localStorage.getItem(USER_ID)))
  }, []);
  const { alldata } = useContext(CartContext);

  // console.log(mydata);
  // console.log(alldata);
  useEffect(() => {

    if (height > 768) {
      setSub(false);
    }
  }, [height]);
  return (
    <ul className='header-nav'>
      {navItem.map((nav) => (
        <li
          key={nav.path}
          onClick={() => {
            nav.subNav ? setSub(!sub) : '';
          }}
        >
          <Link href={nav.path}>
            <a className={nav.path === router.pathname ? 'active' : ''}>
              {nav.name}
            </a>
          </Link>
          {nav.subNav && (
            <ul className={sub ? 'active' : ''}>
              {nav.subNav.map((sub) => (
                <li key={sub.path}>
                  <Link href={sub.path}>
                    <a>{sub.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};
