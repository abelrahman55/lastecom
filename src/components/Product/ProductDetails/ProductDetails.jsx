import productData from "data/product/product";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import socialData from "data/social";
import { Reviews } from "../Reviews/Reviews";
import { ReviewFrom } from "../ReviewForm/ReviewFrom";
import { useRouter } from "next/router";
import { CartContext } from "pages/_app";
import { useMutation } from "react-query";
import { addTocart, addfavourite_fn, get_product_details } from "configs/APIs";
import 'react-toastify/dist/ReactToastify.css';
import {
  SlickArrowPrev,
  SlickArrowNext,
} from "components/utils/SlickArrows/SlickArrows";
import { USER_ID } from "configs/AppConfig";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import { useLoading, Audio } from "@agney/react-loading";
export const ProductDetails = () => {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />
  });

  const settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const router = useRouter();
  //console.log(router)
  const { id } = router.query;
  //
  console.log(id);
  const { cart, setCart,alldata } = useContext(CartContext);

  const socialLinks = [...socialData];
  const products = [...productData];
  const [product, setProduct] = useState(null);
  const [addedInCart, setAddedInCart] = useState(false);

  useEffect(() => {
    if (router.query.id) {
      const data = products.find((pd) => pd.id === router.query.id);
      setProduct(data);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (product) {
      setAddedInCart(Boolean(cart?.find((pd) => pd.id === product.id)));
    }
  }, [product, cart]);

  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(2);
  const [activeColor, setActiveColor] = useState(2);
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [loading, setloading] = useState(true);
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: quantity };
    setCart([...cart, newProduct]);
  };

  const loginMutation = useMutation({
    mutationFn: (body) => get_product_details(body),
    onSuccess: (res) => {
      //\console.log(res.data)
      //alert(res.data);
      console.log(res);
      setProduct(res.data.message);
      setloading(false);
    },
    onError: (err) => {
      console.log(err);
      setloading(false);
    },
  });

  const getproductdata = () => {
    let userData = JSON.parse(localStorage.getItem(USER_ID));
    console.log(userData?.user_id);
    loginMutation.mutate({
      user_id: userData?.user_id || 0,

      //user_id:2,
      item_id: parseInt(id),
    });
  };
  useEffect(() => {
    getproductdata();
  }, [id]);


  const AddMutation = useMutation({
    mutationFn: (body) => addfavourite_fn(body),
    onSuccess: (res) => {
      //alert(res.data);
      if (res.data?.status=="success") {
        getproductdata();
        toast.success(res.data?.message)
      }
      else if(res.data?.status=="error"){
        toast.error(res.data?.message)
      }
      else{
        toast.error("something went wrong")
      }
    },
    onError: (err) => {
      console.log(err);

    },
  });

  const handleaddtofav=()=>{
    if(alldata!==null){
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    AddMutation.mutate({
      user_id:userData?.user_id||0,
      item_id:id,
      toggle:!product.favorite?'add':'delete'
    });
    }
    else {
      toast.warn("سجل اولا")
    }
  }



  const addcartmutation = useMutation({
    mutationFn: (body) => addTocart(body),
    onSuccess: (res) => {
      console.log(res)
      //alert(res.data);
      if (res.data?.status=="success") {
        getproductdata();
        toast.success(res.data?.message)
      }
      else if(res.data?.status=="error"){
        toast.err(res.data?.message)
      }
      else{
        toast.error("something went wrong")
      }
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const handleaddtocart=()=>{
    //console.log(products)
    if(alldata!==null){

      let userData=JSON.parse(localStorage.getItem(USER_ID))

      addcartmutation.mutate({
        cart_user_id:userData?.user_id||0,
        cart_product_id:id,
        cart_product_count:quantity,
      });
    }
    else{
      toast.warn("سجل اولا")
    }
  }

  if (!product) return <></>;
  return (
    <>
      {/* <!-- BEGIN PRODUCT --> */}
      {
        loading?(
          <section
          {...containerProps}
          style={{
            display: "flex",
            width: "100vw",
            alignItems: "center",
            flexDirection: "column",
            height: "300px",
            justifyContent: "center"
          }}
        >
          {indicatorEl} {/* renders only while loading */}
        </section>
        ):(
          <div className="product">
        <div className="wrapper">
          <div className="product-content">
            <div className="product-info">
              <h3 style={{ textAlign: "end" }}>{product.name}</h3>
              {product.isStocked ? (
                <span className="product-stock" style={{ textAlign: "end" }}>
                  مخزون معد للبيع
                </span>
              ) : (
                ""
              )}

              <span className="product-num" style={{ textAlign: "end" }}>
                SKU: {product.productNumber}
              </span>
              {product.oldPrice ? (
                <span className="product-price" style={{ textAlign: "end" }}>
                  <div style={{direction:'rtl' ,textAlign:'start',gap:'0px'}}>
                  <span
                    style={{margin:'0px',textDecorationLine:'none'}}
                  >
                    {product.price}
                  </span>
                  <span style={{textDecorationLine:'none',margin:'0px'}}>ر.س</span>
                  </div>
                  <span style={{ marginRight: "10px", fontSize: "10px" }}>
                    {/* <span>ر.س</span> */}
                    <div style={{direction:'rtl',textAlign:'start',gap:'0px'}}>
                    <span style={{ fontSize: "15px",margin:'0px',textDecorationLine:'none' , }}>{product.oldPrice}</span>
                    <span style={{ fontSize: "15px",margin:'0px',textDecorationLine:'none' , }}>{"ر.س"}</span>
                    </div>

                  </span>
                </span>
              ) : (
                <span className="product-price" style={{ textAlign: "end",display:'flex',alignItems:'center' }}>
                  <span>ر.س</span>

                  <span style={{margin:'0px'}}>{product.price}</span>
                </span>
              )}
              <p style={{ textAlign: "end" }}>{product.content}</p>

              {/* <!-- Social Share Link --> */}
              <div style={{direction:'rtl'}} className="contacts-info__social">
                <span style={{direction:'rtl'}}>تجدنا هنا:</span>
                <ul>
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a href={social.path}>
                        <i className={social.icon ? social.icon : ""}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* <!-- Product Color info--> */}
              <div className="product-options">
                {/* <div className='product-info__color'>
                  <span style={{textAlign:"end"}}>: اللون</span>
                  <ul>
                    {product?.colors.map((color, index) => (
                      <li
                        onClick={() => setActiveColor(index)}
                        className={activeColor === index ? 'active' : ''}
                        key={index}
                        style={{ backgroundColor: color }}
                      ></li>
                    ))}
                  </ul>
                </div> */}

                {/* <!-- Order Item counter --> */}
                <div className="product-info__quantity">
                  <span
                    className="product-info__quantity-title"
                    style={{ textAlign: "end" }}
                  >
                    : الكمية
                  </span>
                  <div className="counter-box">
                    <span
                      onClick={() => {
                        if (quantity > 1) {
                          setQuantity(quantity - 1);
                        }
                      }}
                      className="counter-link counter-link__prev"
                    >
                      <i className="icon-arrow"></i>
                    </span>
                    <input
                      type="text"
                      className="counter-input"
                      disabled
                      value={quantity}
                    />
                    <span
                      onClick={() => setQuantity(quantity + 1)}
                      className="counter-link counter-link__next"
                    >
                      <i className="icon-arrow"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-buttons">
                <button
                  disabled={addedInCart}
                  onClick={() => {
                    handleAddToCart()
                    handleaddtocart()
                  }}
                  className="btn btn-icon"
                >
                  <i className="icon-cart"></i> السلة
                </button>
                <button
                onClick={()=>{
                  handleaddtofav()
                }}
                className="btn btn-grey btn-icon">
                  <i className="icon-heart"

                  ></i> المفضلة
                </button>
              </div>
            </div>
            {/* <!-- Product Main Slider --> */}
            <div className="product-slider">
              <div className="product-slider__main">
                <Slider
                  {...settings}
                  asNavFor={nav1}
                  lazyLoad={true}
                  ref={(slider1) => setNav1(slider1)}
                >
                  {product.imageGallery.map((img, index) => (
                    <div key={index} className="product-slider__main-item">
                      <div className="products-item__type">
                        {product.isSale && (
                          <span className="products-item__sale">
                            أُوكَازيُون
                          </span>
                        )}
                        {product.isNew && (
                          <span className="products-item__new">جديد</span>
                        )}
                      </div>
                      <img src={img} alt="product" />
                    </div>
                  ))}
                </Slider>
              </div>

              {/* <!-- Product Slide Nav --> */}
              <div className="product-slider__nav">


              </div>
            </div>
          </div>

          {/* <!-- Product Details Tab --> */}
          <div className="product-detail">
            <div className="tab-wrap product-detail-tabs">
              <ul
                className="nav-tab-list tabs pd-tab"
                style={{
                  marginLeft: "35%",
                  display: "flex",
                  alignSelf: "center",
                }}
              >
                <li
                  className={tab === 1 ? "active" : ""}
                  onClick={() => setTab(1)}
                >
                  الوصف
                </li>
                <li
                  className={tab === 2 ? "active" : ""}
                  onClick={() => setTab(2)}
                >
                  الاراء
                </li>
              </ul>
              <div className="box-tab-cont">
                {/* <!-- Product description --> */}
                {tab === 1 && (
                  <div className="tab-cont">
                    <p>{product.description}</p>
                    <p>{product.description}</p>
                  </div>
                )}

                {tab === 2 && (
                  <div className="tab-cont product-reviews">
                    {/* <!-- Product Reviews --> */}
                    {
                      product?.reviews?.length>0?(
                        <Reviews reviews={product?.reviews} />
                      ):(
                        <h1 style={{
                          display:'flex',
                          alignItem:'center',
                          justifyContent:'center',
                        }} className="product-detail__items">لا تعليق</h1>
                      )
                    }


                    {/* <!-- Product Review Form --> */}
                    <ReviewFrom />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.jpg"
          alt=""
        />
      </div>
        )
      }
      {/* <!-- PRODUCT EOF   --> */}
      <ToastContainer/>
    </>
  );
};
