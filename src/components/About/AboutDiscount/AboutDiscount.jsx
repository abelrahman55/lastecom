import Link from 'next/link';

export const AboutDiscount = ({aboutdata}) => {
  console.log(aboutdata)
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-about js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg2.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text'>قصة نجاح</span>
            <h2>تقوم RomaShop بتطوير علاماتها التجارية الخاصة</h2>
            <p>
            يجري تطوير شبكة RomaShop وتحسينها ، مع مراعاة جميع المستهلكين
            </p>
            <p className='discount-info__sm'>
              {aboutdata.about_us}
              {/* Forming the range of stores, we, above all, strive not only to
              meet the format of "home shop", offering each customer the most
              basic household goods, but also to create a unique space of beauty
              and care. RomaShop stores offer their customers the widest and
              highest quality selection of products from world-renowned
              manufacturers. */}
            </p>
            <Link href='/shop'>
              <a className='btn'>تسوق الآن</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
