import Link from 'next/link';

export const AsideItem = ({ aside }) => {
  const { id, image, name, price, star,oldPrice } = aside;
  return (
    <>
      {/* <!-- BEING SHOP ASIDE CARD  --> */}
      <Link href={`/product/${id}`}>
        <a
          style={{
            direction:'rtl'
          }}
        className='shop-aside__item-product'>
          <div className='shop-aside__item-product-img'>
            <img src={image} className='js-img' alt='' />
          </div>
          <div className='shop-aside__item-product-info'>
            <span style={{direction:'rtl',textAlign:'start'}} className='shop-aside__item-product-title'>{name}</span>
              <div style={{
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-start',
                marginTop:'4px',
                direction:'rtl'
              }}>
              <span className='' style={{  padding:'0px 8px'}}><del><span style={{
                fontSize:'12px',

              }}>{oldPrice}</span><span>ر.س</span></del></span>
              <span>
                <span>{price}</span>
                <span>ر.س</span>
              </span>
              </div>
            <ul className='star-rating'>
              {[...Array(star)].map((star, index) => {
                <li key={index}>
                  <i className='icon-star'></i>
                </li>;
              })}
            </ul>
          </div>
        </a>
      </Link>
      {/* <!-- SHOP ASIDE CARD EOF  --> */}
    </>
  );
};
