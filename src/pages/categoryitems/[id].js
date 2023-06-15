import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Shop } from 'components/Shop/Shop';
import { select_products_fn } from 'configs/APIs';
import { PublicLayout } from 'layout/PublicLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { Shop2 } from 'components/Shop2/index';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  // {
  //   label: 'تسوق',
  //   path: '/categoryitems',
  // },
];
const ShopPage = () => {
  // const [categoryproducts,setcategoryproducts]=useState([]);
  const router = useRouter();
  //console.log(router)
  const {id}=router.query
  // console.log(id)


  // const loginMutation = useMutation({
  //   mutationFn: (body) => select_products_fn(body),
  //   onSuccess: (res) => {
  //     //console.log(res.data)
  //     //alert(res.data);
  //     setcategoryproducts(res.data.message);
  //   },
  //   onError: (err) => {
  //     alert(err);
  //   },
  // });

  // const gethomedata = () => {

  //   loginMutation.mutate({
  //     category_id:id,
  //     user_id: 3,
  //     start: 0,
  //   });
  // };
  // useEffect(()=>{
  //   gethomedata()
  // },[])

  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='تسوق'>
      <Shop2 /* categorproducts={categoryproducts} */ id={id}/>
      <Subscribe />
    </PublicLayout>
  );
};

export default ShopPage;
