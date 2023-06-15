import categoryData from "data/category/category";
import { Categories } from "./Categories/Categories";
import { useQuery } from "react-query";
import { get_categories_fn } from "configs/APIs";
import { useState } from "react";

export const Category = () => {
  // const categories = [...categoryData];
  const [categories, setCategories] = useState([]);
  const { data } = useQuery({
    queryFn: () => get_categories_fn(),
    onSuccess: (res) => {
      //console.log(res.data);
      setCategories(res.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  return (
    <>
      {/* <!-- BEGIN TOP CATEGORIES --> */}
      <section className="all-categories">
        <div dir="rtl" className="top-categories__items">
          <Categories categories={categories} />
        </div>
      </section>
      {/* <!-- TOP CATEGORIES EOF --> */}
    </>
  );
};
