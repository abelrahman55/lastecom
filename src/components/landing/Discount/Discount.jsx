import Link from 'next/link';

export const Discount = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg4.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text' style={{textAlign:"end"}}>خصم</span>
            <span className='main-text'>
               <span>50%</span>
            </span>
            <p>
            أحدث عطور Roma Shop
            </p>

            <Link href='/shop'>
              <a className='btn'>احصل عليها الان</a>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
