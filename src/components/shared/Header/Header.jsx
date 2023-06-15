import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import useWindowSize from "components/utils/windowSize/windowSize";
import { header, navItem } from "data/data.header";
import Link from 'next/link';
import { CartContext } from "pages/_app";
import { useContext, useEffect, useState } from "react";
import { Nav } from "./Nav/Nav";
import {SlLogout} from 'react-icons/si'
export const Header = () => {
  const { cart,alldata,logout } = useContext(CartContext);
  // const {  } = useContext(CartContext);
  const [promo, setPromo] = useState(true);
  const [fixedNav, setFixedNav] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [height, width] = useWindowSize();
  const logoutimg="/assets/img/exit.png"
  const login="/assets/img/enter.png"


  // For Fixed nav
  useEffect(() => {

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setFixedNav(true);
    } else {
      setFixedNav(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      if (height < 767) {
        disableBodyScroll(document);
      } else {
        enableBodyScroll(document);
      }
    } else {
      enableBodyScroll(document);
    }
  }, [openMenu, height]);




  // console.log(mydata);
  console.log(alldata);

  return (
    <>
      {/* <!-- BEGIN HEADER --> */}
      <header className="header">
        {/* {promo && (
          <div className="header-top">
            <span>30% OFF ON ALL PRODUCTS ENTER CODE: RomaShop2020</span>
            <i
              onClick={() => setPromo(false)}
              className="header-top-close js-header-top-close icon-close"
            ></i>
          </div>
        )} */}
        <div className={`header-content ${fixedNav ? "fixed" : ""}`}>
          <div style={{ right: openMenu ? 0 : -360 }} className="header-box">
            {/* header options */}
            <ul className="header-options">
              {
                alldata?(
                  <>
                  <li
                    onClick={()=>{
                      logout()
                    }}
                  >
                    <img style={{
                      width:'20px',
                      cursor:'pointer'
                    }} src={logoutimg} alt="logout"/>
                  </li>
                    <li>
                <Link href="/cart">
                  <a>
                    <i className="icon-cart"></i>
                    <span>{cart.length ?? "0"}</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile">
                  <a>
                    <i className="icon-user"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/wishlist">
                  <a>
                    <i className="icon-heart"></i>
                  </a>
                </Link>
              </li>

                  </>
                ):(
                  <div style={{
                    display:'flex',
                    alignItems:'center',
                    gap:'6px'
                  }}>
                    <Link href={"/registration"}>
                    <img style={{
                      width:'30px',
                      cursor:'pointer'
                    }} src={login} alt="" />
                    </Link>
                    {/* <Link href={"/login"}>Log In</Link>
                    <Link href={"/registration"}>Sign Up</Link> */}
                  </div>
                )
              }
              <li>
                <Link href="/faq">
                  <a>
                    <i className="icon-search"></i>
                  </a>
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <Nav navItem={navItem} />
          </div>

          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={
              openMenu ? "btn-menu js-btn-menu active" : "btn-menu js-btn-menu"
            }
          >
            {[1, 2, 3].map((i) => (
              <span key={i}>&nbsp;</span>
            ))}
          </div>
          <div className="header-logo">
            <Link href="/">
              <a>
                <img src={header.logo} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </header>

      {/* <!-- HEADER EOF   --> */}
    </>
  );
};
