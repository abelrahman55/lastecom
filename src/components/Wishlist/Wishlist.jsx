import productData from 'data/product/product';
import { Card } from './Card/Card';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { get_wishlist } from 'configs/APIs';
import { USER_ID } from 'configs/AppConfig';

export const Wishlist = () => {
  const wishItems = [...productData].slice(0, 2);
  wishItems[1].isStocked = false;
  const [whishs,setwhitshes]=useState([]);
    const loginMutation = useMutation({
    mutationFn: (body) => get_wishlist(body),
    onSuccess: (res) => {
      //alert(res.data);
      setwhitshes(res.data.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const whishlist = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    loginMutation.mutate({
      user_id:userData?.user_id,

    });
  };
  useEffect(()=>{
    whishlist();
  },[])
  return (
    <>
      {/* <!-- BEGIN WISHLIST --> */}
      <div className='wishlist'>
        <div className='wrapper'>
          <div className='cart-table'>
            <div className='cart-table__box'>
              <div className='cart-table__row cart-table__row-head'>
                <div className='cart-table__col' style={{textAlign:"end"}}>اضف إلي السلة</div>
                <div className='cart-table__col' style={{textAlign:"end"}}>السعر</div>
                <div className='cart-table__col' style={{textAlign:"end"}}>الحالة</div>
                <div className='cart-table__col' style={{textAlign:"end"}}>المنتج</div>

              </div>

              {whishs.map((wish) => (
                <Card key={wish.id} wish={wish} />
              ))}
            </div>
          </div>
          <div className='wishlist-buttons' style={{ display: "flex", justifyContent: "flex-end" }}>
            <a href='' className='btn btn-grey'>
              امسح المفضلة
            </a>
            <Link href='/shop'>
              <a className='btn'>إذهب الي التسوق</a>
            </Link>
          </div>
        </div>
        <img
          className='promo-video__decor js-img'
          data-src='/assets/img/promo-video__decor.jpg'
          alt=''
        />
      </div>
      {/* <!-- WISHLIST EOF   --> */}
    </>
  );
};
