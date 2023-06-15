import {
  SlickArrowPrev,
  SlickArrowNext,
} from 'components/utils/SlickArrows/SlickArrows';
import { CartContext } from 'pages/_app';
import { useContext, useState } from 'react';
import Slider from 'react-slick';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { useMutation } from 'react-query';
import { addfavourite_fn } from 'configs/APIs';
import { USER_ID } from 'configs/AppConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ProductsCarousel = ({ productsdata }) => {
  console.log(productsdata)
  const { cart, setCart,alldata } = useContext(CartContext);
  const [myproductid,setmyproductid]=useState("");
  const handleAddToCart = (id) => {
    const newProduct = productsdata?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };

  // const handleaddtofav=(id)=>{

  // }

  const AddMutation = useMutation({
    mutationFn: (body) => addfavourite_fn(body),
    onSuccess: (res) => {
      console.log("productid",myproductid*1);
      //alert(res.data);
      if (res.data?.status=="success") {

        productsdata.map((item,index)=>{
          if(item.id*1==myproductid*1){
            return {...item,favorite:!favorite}
          }
          else return {...item}
        })
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

  const handleaddtofav = (id) => {
    console.log("favfuncid",id)
    //console.log(productsdata)
    setmyproductid(id);
    if(alldata!==null){
      let myproduct=productsdata.filter(item=>item.id==id)[0];
    //console.log(myproduct)
    productsdata.map((item,index)=>{
      if(item.id==myproduct.id){
        return {...item,favorite:true};
      }
      else return {...item};
    })
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    AddMutation.mutate({
      user_id:userData?.user_id||0,
      item_id:id,
      toggle:!myproduct.favorite?'add':'delete'
    });
    }
    else{
      toast.warn("سجل اولا")
    }

  };


  const settings = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const addcartmutation = useMutation({
    mutationFn: (body) => addfavourite_fn(body),
    onSuccess: (res) => {
      //alert(res.data);
      if (res.data?.status=="success") {
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


  const handleaddtocart = (id) => {
    //console.log(products)
    if(alldata!==null){
      let myproduct=productsdata.filter(item=>item.id==id)[0];
    //console.log(myproduct)
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    addcartmutation.mutate({
      user_id:userData?.user_id||0,
      item_id:id,
      toggle:!myproduct.favorite?'add':'delete'
    });
    }
    else{
      toast.warn("سجل اولا")
    }

  };


  return (
    <>
      <Slider {...settings}>
        {productsdata?.map((product) => (
          <SingleProduct
            addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
            key={product.id}
            product={product}
            onAddToWish={(id) =>

              (id)}
            onAddToCart={handleAddToCart}

            // onPress={(psData) => {
            //   handleaddtofav(psData);
            // }}
            onAddToFav={(id)=>{
              console.log(id)
              setmyproductid(id)
              handleaddtofav(id)
            }}
          onaddTocart={handleaddtocart}

          />
        ))}
      </Slider>
      <ToastContainer/>
    </>
  );
};
