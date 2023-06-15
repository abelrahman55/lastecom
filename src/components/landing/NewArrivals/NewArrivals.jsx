import { ProductsCarousel } from 'components/Product/Products/ProductsCarousel';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import productData from 'data/product/product';

export const NewArrivals = ({productsdata}) => {
  const newArrival = [...productData].filter(
    (arrival) => arrival.isNew === true
  );

  return (
    <>
      {/* <!-- BEGIN NEW ARRIVALS --> */}
      <section className='arrivals'>
        <SectionTitle
          subTitle='عطور'
          title='المضاف مؤخرا'
          body={"متجر برفيوم هاوس متخصص في العطورات العالمية، الراقية، الحصرية والاصلية بأسعار منافسة ليكون الوجهة الاولى في عالم العطور"}
        />

        <div className='products-items'>
          {/* hir */}
          <ProductsCarousel productsdata={productsdata} />
        </div>
      </section>
      {/* <!-- NEW ARRIVALS EOF --> */}
    </>
  );
};
