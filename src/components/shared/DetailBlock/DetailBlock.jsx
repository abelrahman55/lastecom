export const DetailBlock = ({ detailBlocks,phone }) => {
  console.log(phone)
  return (
    <>
      {/* <!-- BEGIN DETAIL MAIN BLOCK --> */}
      <div className='wrapper'>
        <div className='detail-block__items'>
          {detailBlocks.map((block, index) => (
            <div key={index} className={`detail-block__item`}>
              <div className='detail-block__item-icon'>
                <img
                  src='/assets/img/main-text-decor.svg'
                  className='js-img'
                  alt=''
                />
                <i className={block.icon}></i>
              </div>
              <div className='detail-block__item-info'>
                <h6>{block.step}</h6>
                {
                  block.step!=="تواصل مباشر"?(
                    <>
                      {block.title}
                    </>
                  ):(
                    <>
                      {phone}
                    </>
                  )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- DETAIL MAIN BLOCK EOF --> */}
    </>
  );
};
