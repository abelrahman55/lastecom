import { PromoVideo } from 'components/shared/PromoVideo/PromoVideo';
import { SectionTitle } from 'components/shared/SectionTitle/SectionTitle';
import { useState } from 'react';
import PromoNumberData from 'data/promoNumber/promoNumber';

export const AboutPromo = ({aboutdata}) => {
  console.log(aboutdata)
  const [play, setPlay] = useState(false);

  const promoNumber = [...PromoNumberData];
  const url = play
    ? aboutdata?.promotion_video /* 'https://www.youtube.com/embed/K1yp7Q1hH1c' */
    : '';
  return (
    <>
      {/* <!-- BEGIN PROMO VIDEO --> */}
      <section className='promo-video'>
        <div className='wrapper'>
          <SectionTitle
            title='RomaShop مرحبا بك فى'
            subTitle='فيديو ترويجي'
            body={`اليوم يمكننا أن نقدم لعملائنا منتجات حصرية من 108 علامة تجارية تحمل علامة "فقط في متجر روما"`}
          />

          <div className='promo-video__block'>
            <PromoVideo
              videoUrl={url}
              play={play}
              onVideoPlay={() => setPlay(true)}
              image='/assets/img/promo-video-img.jpg'
            />
          </div>

          <div className='promo-video__nums'>
            <div className='promo-video__num'>
              <span>{aboutdata.products_count}</span>
              <h5>products</h5>
            </div>
            <div className='promo-video__num'>
              <span>{aboutdata.brands_count}</span>
              <h5>brands</h5>
            </div>
            <div className='promo-video__num'>
              <span>{aboutdata.partners_count}</span>
              <h5>parteners</h5>
            </div>
            <div className='promo-video__num'>
              <span>{aboutdata.customer_count}</span>
              <h5>customers</h5>
            </div>

            {/* {promoNumber.map((promo, index) => (
              <div key={index} className='promo-video__num'>
                <span>{promo.number}</span>
                <h5>{promo.name}</h5>
              </div>
            ))} */}
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </section>
      {/* <!-- PROMO VIDEO EOF   --> */}
    </>
  );
};
