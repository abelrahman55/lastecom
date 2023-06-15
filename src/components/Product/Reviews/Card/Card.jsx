export const Card = ({ review }) => {
  const { author, reviewDate, rating, content } = review;
  const getcolor=()=>{
    const colorarr=["red","#068C45","blue","black","#062e8c","#8c066b"];
    return colorarr[Math.floor(Math.random() * colorarr.length)]
  }
  return (
    <>
      {/* Being Product Review */}
      <div style={{
            direction:'rtl'
          }} className='review-item'>
        <div style={{
            direction:'rtl'
          }} className='review-item__head'>
          <div  className='review-item__author'>
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
            {/* <img src={author.image} className='js-img' alt='' /> */}
            <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
            }}>
            <div style={{
              display:'flex',
              alignItems:'center',
              gap:'5px'
            }}>
            <span style={{order:'55'}} className='review-item__name'>{author.name}</span>
            <span style={{order:'66'}} className='review-item__date'>{reviewDate}</span>
            </div>
            <div style={{

}} className='review-item__rating'>
  <ul className='star-rating'>
    {[...Array(rating*1)].map((star, index) => {
      return (
        <li key={index}>
          <i className='icon-star'></i>
        </li>
      );
    })}
  </ul>
</div>
          </div>

            </div>
        </div>
        <div className='review-item__content' style={{
          direction:'rtl',
          textAlign:'start'
        }}>{content}</div>
      </div>
    </>
  );
};
