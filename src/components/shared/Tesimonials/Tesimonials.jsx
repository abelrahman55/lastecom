import Slider from 'react-slick';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import {
  SlickArrowPrev,
  SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { Card } from './Card/Card';
import TestimonialData from 'data/testimonial/testimonial';

export const Testimonials = ({reviews}) => {
  console.log(reviews)
  const testimonials = [...TestimonialData];

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
    lazyLoad: 'progressive',
  };

  return (
    <>
      {/* <!-- BEGIN TESTIMONIALS --> */}
      <section className='testimonials'>
        <div className='wrapper'>
          <SectionTitle subTitle='' title='الأراء' />
          <div className='testimonials-slider'>
            <Slider {...settings}>
              {reviews.map((testimonial) => (
                <Card key={testimonial.id} testimonial={testimonial} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {/* <!-- TESTIMONIALS EOF   --> */}
    </>
  );
};
