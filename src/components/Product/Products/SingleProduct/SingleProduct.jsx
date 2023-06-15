import Link from "next/link";

export const SingleProduct = ({
  product,
  onAddToWish,
  //onAddToCart,
  addedInCart,
  onAddToFav,
  onaddTocart
}) => {
  const { name, oldPrice, price, image, isSale, isNew, id} = product;
  //console.log(product)
  //console.log(favorite)
  //console.log(product)
  //console.log(addtofav);
  return (
    <>
      {/* <!-- BEING SINGLE PRODUCT ITEM --> */}
      <div className="products-item">
        <div className="products-item__type">
          {isSale && <span className="products-item__sale">أُوكَازيُون</span>}
          {isNew && <span className="products-item__new">جديد</span>}
        </div>
        <div className="products-item__img">
          <img src={image} className="js-img" alt="" />
          <div className="products-item__hover">
            <Link href={`/product/${id}`}>
              <a href="">
                <i className="icon-search"></i>
              </a>
            </Link>
            <div className="products-item__hover-options">
              <button className="addList"
              onClick={() =>onAddToFav(id)}>
                <i className="icon-heart"

                ></i>
              </button>
              <button
                disabled={addedInCart}
                className={`addList ${addedInCart ? "added" : ""}`}
                onClick={() => onaddTocart(id)}
              >
                <i className="icon-cart"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="products-item__info">
          <Link href={`/product/${id}`}>
            <a>
              <span className="products-item__name">{name}</span>
            </a>
          </Link>
          <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <span style={{margin:'0px'}} className="products-item__cost">
          <span style={{margin:'0px'}}>ر.س</span>
            <span>{oldPrice && `${oldPrice}`}</span>
          </span>
          <span>ر.س</span>
          <span>{price}</span>
          </div>

        </div>
      </div>
      {/* <!-- SINGLE PRODUCT ITEM EOF --> */}
    </>
  );
};
