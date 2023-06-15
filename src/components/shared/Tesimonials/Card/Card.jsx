export const Card = ({ testimonial }) => {
  const { image, content, author } = testimonial;
  const getcolor=()=>{
    const colorarr=["red","#068C45","blue","black","#062e8c","#8c066b"];
    return colorarr[Math.floor(Math.random() * colorarr.length)]
  }
  return (
    <>
      {/* <!-- BEING TESTIMONIALS SLIDE CARD --> */}
      <div className='testimonials-slide'>
        <p style={{textAlign:'center'}}>{content}</p>
        <div className='testimonials-author'>
          {/* <img src={image} className='js-img' alt='' /> */}
          <h4 className='js-img' style={{
            width:'60px',
            height:'60px',
            borderRadius:'50%',
            backgroundColor:getcolor(),
            color:'white',
            margin:'10px auto',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>{author.image}</h4>
          <h5>{author.name}</h5>
        </div>
      </div>
      {/* <!-- TESTIMONIALS SLIDE CARD EOF --> */}
    </>
  );
};
