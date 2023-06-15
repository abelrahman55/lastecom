import { CartContext } from 'pages/_app';
import { useContext, useState } from 'react';
import { SingleProduct } from './SingleProduct/SingleProduct';
import { USER_ID } from 'configs/AppConfig';
import { useMutation } from 'react-query';
import { addTocart, addfavourite_fn } from 'configs/APIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Products = ({ products }) => {
  const { cart, setCart,alldata } = useContext(CartContext);
  const [myproductid,setmyproductid]=useState("");
  const AddMutation = useMutation({
    mutationFn: (body) => addfavourite_fn(body),

    onSuccess: (res) => {
      //alert(res.data);
      if (res.data?.status=="success") {
        console.log("fkfk")
        console.log(myproductid)
        products.map((item,index)=>{
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
  const handleAddToCart = (id) => {
    const newProduct = products?.find((pd) => pd.id === id);
    setCart([...cart, { ...newProduct, quantity: 1 }]);
  };
  const handleaddtofav = (id) => {
    setmyproductid(id);
    // console.log(alldata)
    if(alldata!==null){
      let myproduct=products.filter(item=>item.id==id)[0];
    //console.log(myproduct)
    // products.map((item,index)=>{
    //   if(item.id*1==myproduct.id*1){
    //     console.log(item.id,"   ",myproductid)
    //     return {...item,favorite:!favorite};
    //   }
    //   else return {...item};
    // })
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    AddMutation.mutate({
      user_id:userData?.user_id||0,
      item_id:id,
      toggle:!myproduct.favorite?'add':'delete'
    });
    }
    else {
      toast.warn("سجل اولا")
    }

  };



  const addcartmutation = useMutation({
    mutationFn: (body) => addTocart(body),
    onSuccess: (res) => {
      console.log(res)
      //alert(res.data);
      if (res.data?.status=="success") {
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


  const handleaddtocart = (id) => {
    console.log(id)
    //console.log(products)
    if(alldata!==null){
      let myproduct=products.filter(item=>item.id==id)[0];
      //console.log(myproduct)
      products.map((item,index)=>{
        if(item.id==myproduct.id){
          return {...item,favorite:true};
        }
        else return {...item};
      })
      let userData=JSON.parse(localStorage.getItem(USER_ID))

      addcartmutation.mutate({
        cart_user_id:userData?.user_id||0,
        cart_product_id:id,
        cart_product_count:1,
      });
    }
    else{
      toast.warn("سجل اولا")
    }

  };

  return (
    <>
      {products?.map((product) => (
        <SingleProduct
          addedInCart={Boolean(cart?.find((pd) => pd.id === product.id))}
          key={product.id}
          product={product}
          onAddToWish={(id) => console.log(id)}
          //onAddToCart={handleAddToCart}
          onAddToFav={handleaddtofav}
          onaddTocart={handleaddtocart}
        />
      ))}
      <ToastContainer/>
    </>
  );
};
