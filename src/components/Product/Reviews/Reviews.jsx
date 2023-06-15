import { Card } from './Card/Card';

export const Reviews = ({ reviews }) => {
  return (
    <>
      {/* <!-- BEING REVIEWS    --> */}
      <div className='product-detail__items'>
        {reviews?.map((review, index) => (
          <Card key={index} review={review} />
        ))}
        {/* <a className='blog-item__link'>
        إقرا المزيد     <i className='icon-arrow-md' style={{marginBottom:"5px"}}></i>
        </a> */}
      </div>
      {/* <!-- Reviews EOF   --> */}
    </>
  );
};
