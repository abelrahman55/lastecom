import Link from "next/link";

export const Banner = () => {
  return (
    <>
      {/* <!-- BEGIN MAIN BLOCK --> */}
      <div className="main-block load-bg">
        <div className="wrapper">
          <div className="main-block__content">
            {/* <span className='saint-text'>احترافي</span> */}
            {/* <h1 className='main-text'>العناية &amp; بالجمال</h1> */}
            <p
              style={{ textAlign: "end", fontSize: "1.5rem", color: "#020202" }}
            >
              تسوق منتجات العطور و مستحضرات التجميل بخصم
            </p>
            <h1
              className="main-text"
              style={{ textAlign: "end", color: "#a00" }}
            >
              80%
            </h1>
            <Link href="/shop">
              <a className="btn">تسوق الآن</a>
            </Link>
          </div>
        </div>
        <img
          className="main-block__decor"
          src="/assets/img/main-block-decor.png"
          alt=""
        />
      </div>
      {/* <!-- MAIN BLOCK EOF --> */}
    </>
  );
};
