import { select_products_fn } from "configs/APIs";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";

export const Card = ({ category }) => {
  //console.log(category)

  // const [categories, setcategories] = useState([]);
  // const loginMutation = useMutation({
  //   mutationFn: (body) => select_products_fn(body),
  //   onSuccess: (res) => {
  //     //console.log(res.data)
  //     alert(res.data);
  //     setcategories(res.data.message);

  //   },
  //   onError: (err) => {
  //     alert(err);
  //   },
  // });

  // const getcategorydata = () => {

  //   loginMutation.mutate({
  //     // user_id:1,
  //     // category_id:category.categoryId
  //   });
  // };
  // useEffect(()=>{
  //   // getcategorydata()
  // },[])


  const { name, image } = category;
  return (
    <Link href={`/categoryitems/${category.categoryId}`}>
      <a className="top-categories__item top-categories__item2">
        <img src={image} className="js-img" alt="" />
        <div className="top-categories__item-hover">
          <h5 style={{maxWidth:'100%',fontSize:'20px'}}>{name}</h5>
          <span>تصفح المنتجات -</span>
          <i className="icon-arrow-lg"></i>
        </div>
      </a>
    </Link>
  );
};
