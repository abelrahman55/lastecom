import footerNavData from "data/footer/footerNav";
import paymentMethodData from "data/footer/payment";
import socialData from "data/social";
import Link from "next/link";
import { NavCol } from "./NavCol/NavCol";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { select_home_fn } from "configs/APIs";
import { USER_ID } from "configs/AppConfig";

export const Footer = () => {
  const footerLogo = "/assets/img/header-logo.svg";

  const footerNav = [...footerNavData];
  const footerSocial = [...socialData];
  const paymentMethods = [...paymentMethodData];
  const [footerdata, setFooterData] = useState({});
  const [loading, setLoading] = useState(false);
  const HomeMutation = useMutation({
    mutationFn: (body) => select_home_fn(body),
    onSuccess: (res) => {
      // alert(JSON.stringify(res.data));
      if (res.data?.message) {
        setFooterData(res.data.message)
      }
      setLoading(false)

    },
    onError: (err) => {
      // alert(err);
      setLoading(false)
      // toast(err.message, { type: "error" })
    },
  });


  const gethomedata = () => {
    setLoading(true)
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    HomeMutation.mutate({
      user_id:userData?.user_id||0,
    })

  };

  useEffect(() => {
    gethomedata()
  }, [])


  return (
    <>
      {/* <!-- BEGIN FOOTER --> */}
      <footer className="footer">
        <div className="wrapper">
          <div className="footer-top">
            <div className="footer-top__social">
              <span>:تجدنا هنا</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li  key={index}>
                    <a href={social.icon == 'icon-facebook' ? footerdata?.about_us?.facebook_link :
                      social.icon == 'icon-twitter' ? footerdata?.about_us?.tweter_link :
                        social.icon == 'icon-in' ?
                          footerdata?.about_us?.linkedin_link : footerdata?.about_us?.instegram_link}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-top__logo">
              <Link href="/">
                <a>
                  <img src={footerLogo} className="js-img" alt="" />
                </a>
              </Link>
            </div>

            {/* Payment method */}
            <div className="footer-top__payments">
              <span>:طرق الدفع</span>
              <ul>
                {paymentMethods.map((payment, index) => (
                  <li key={index}>
                    <img src={payment.icon} className="js-img" alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-nav">
            {/* Footer Nav */}
            <div style={{textAlign:'end'}} className="footer-nav__col">
              <span style={{textAlign:'end'}} className="footer-nav__col-title">اتصال</span>
              <ul>
                <li style={{ color: "#bbbbbb" ,textAlign:'end'}}>
                  {footerdata?.about_us?.address ?? ''} <i className="icon-map-pin"></i>
                </li>
                <li>
                  <div className="footer-nav__col-phones">
                    {footerdata?.about_us?.phones?.map((phone, index) => (
                      <a href={`tel:${phone}`}>{phone}</a>

                    ))}

                  </div>
                  <i className="icon-smartphone"></i>

                </li>
                <li>
                  <a href="mailto:info@beshop.com">{footerdata?.about_us?.email_info}</a>
                  <i className="icon-mail"></i>

                </li>
              </ul>
            </div>
            {footerNav.map((nav, index) => (
              <NavCol nav={nav} key={index} />
            ))}

          </div>
          <div className="footer-copy">
            <span>&copy;Camp Coding 2023 كل الحقوق محفوظة. بواسطة </span>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER EOF   --> */}
    </>
  );
};
