import { ProductsCarousel } from "components/Product/Products/ProductsCarousel";
import { SectionTitle } from "components/shared/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import productData from "data/product/product";
import { useMutation } from "react-query";
import { select_products_fn } from "configs/APIs";
import server from "configs/AxiosInterceptors";

export const Trending = ({productsdata}) => {
  //console.log(productsdata)
  // console.log(productsdata)
  // const [products, setProducts] = useState([]);

  // const selectProducts = useMutation({
  //   mutationFn: (body) => select_products_fn(body),
  //   onSuccess: (res) => {
  //     setProducts(res.data?.message);
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });
  // useEffect(() => {
  //   selectProducts.mutate({
  //     user_id: 1,
  //     start: 0,
  //     category_id: "all",
  //   });
  // }, []);



  // const trendingProducts = [
  //   {
  //     id: "1",
  //     name: "عطر برنس اس - Prince S افخم عطر باتشولي وعود , 50 مل",
  //     oldPrice: "169",
  //     isSale: true,
  //     image:
  //       "https://cdn.salla.sa/NKGmX/T2mxcDjDRFtxXcnST8RFRPXj817jDWozYB7mUD9l.jpg",
  //     category: "عطور حريمي",
  //     imageGallery: [
  //       "https://cdn.salla.sa/NKGmX/T2mxcDjDRFtxXcnST8RFRPXj817jDWozYB7mUD9l.jpg",
  //     ],
  //     filterItems: ["makeup", "spa", "perfume", "hair"],

  //     category_id: "1",
  //     cart_count: 0,
  //     favorite: false,
  //     description: null,
  //   },
  //   {
  //     id: "2",
  //     name: "فواحة اعواد خشب بيربل مون - Purple Moon رائحة فاخرة، 200 مل",
  //     oldPrice: "56.07",
  //     isSale: true,
  //     image:
  //       "https://cdn.salla.sa/NKGmX/u660b09j4U92hiEVulrI7OPdVRkIzjVjeSEX1NIG.png",
  //     category: "عطور حريمي",
  //     imageGallery: [
  //       "https://cdn.salla.sa/NKGmX/u660b09j4U92hiEVulrI7OPdVRkIzjVjeSEX1NIG.png",
  //     ],
  //     filterItems: ["makeup", "perfume", "hair"],

  //     category_id: "1",
  //     cart_count: 0,
  //     favorite: false,
  //     description: null,
  //   },
  // ];
  // const [filterItem, setFilterItem] = useState("makeup");

  // useEffect(() => {
  //   const newItems = trendingProducts.filter((pd) =>
  //     pd.filterItems.includes(filterItem)
  //   );
  //   setProducts(newItems);
  // }, [filterItem]);

  // const filterList = [
  //   {
  //     name: "Make Up",
  //     value: "makeup",
  //   },
  //   {
  //     name: "SPA",
  //     value: "spa",
  //   },
  //   {
  //     name: "Perfume",
  //     value: "perfume",
  //   },
  //   {
  //     name: "Nails",
  //     value: "nail",
  //   },
  //   {
  //     name: "Skin care",
  //     value: "skin",
  //   },
  //   {
  //     name: "Hair care",
  //     value: "hair",
  //   },
  // ];
  return (
    <>
      {/* <!-- BEGIN TRENDING --> */}
      <section className="trending">
        <div className="trending-content">
          <SectionTitle
            // subTitle="مستحضرات التجميل"
            title="المنتجات الرائجة"
            body="باقة من اجود انواع العطور التي توفر لك اطلاله فريده من نوعها"
          />
          <div className="tab-wrap trending-tabs">
            {/* <ul className="nav-tab-list tabs">
              {filterList.map((item) => (
                <li
                  key={item.value}
                  onClick={() => setFilterItem(item.value)}
                  className={item.value === filterItem ? "active" : ""}
                >
                  {item.name}
                </li>
              ))}
            </ul> */}
            <div className="products-items">
              <ProductsCarousel productsdata={productsdata} />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- TRENDING EOF   --> */}
    </>
  );
};
