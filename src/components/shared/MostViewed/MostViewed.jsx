import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const MostViewed = ({ additionalClass }) => {
  const mostViewed = [...productData].slice(0, 6);

  return (
    <>
      {/* <!-- BEGIN MOST VIEWED --> */}
      <section className={`arrivals ${additionalClass ? additionalClass : ''}`}>
        <SectionTitle
          subTitle='عطور'
          title='شاهدت ايضا'
          body={"متجر برفيوم هاوس متخصص في العطورات العالمية، الراقية، الحصرية والاصلية بأسعار منافسة ليكون الوجهة الاولى في عالم العطور"}

        />

        <div className='products-items'>
          {/* hir */}
          {/* <ProductsCarousel products={mostViewed} /> */}
        </div>
      </section>
      {/* <!-- MOST VIEWED EOF --> */}
    </>
  );
};
