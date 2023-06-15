import { Products } from "components/Product/Products/Products";
import { PagingList } from "components/shared/PagingList/PagingList";
import { usePagination } from "components/utils/Pagination/Pagination";
import productData from "data/product/product";
import Slider from "rc-slider";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { AsideItem } from "../shared/AsideItem/AsideItem";
import { useMutation, useQuery } from "react-query";
import { get_categories_fn, select_products_fn, selectcards } from "configs/APIs";

// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const options = [
  { value: "highToMin", label: "من باهظ الثمن إلى رخيص" },
  { value: "minToHigh", label: "من الرخيص إلى باهظ الثمن" },
];
export const Cards = () => {
  const [products, setProducts] = useState([]);

  const [cartproducts,setcartproducts]=useState([]);
  const [productOrder, setProductOrder] = useState(
    products.sort((a, b) => (a.price < b.price ? 1 : -1))
  );

  const [productsorigin, setoriginproducts] = useState([]);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });
  const [searchTxt, setSearchTxt] = useState('');
  const [categoryid,setcategoryid]=useState(null);


  // useEffect(() => {
  //   setProducts(productOrder);
  // }, [productOrder]);

  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = products.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = products.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = products.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      //setProducts([...productOrder]);
    }
  }, [filter, products]);
  const recentlyViewed = [...products].slice(0, 3);
  const todaysTop = [...products].slice(3, 6);
  const paginate = usePagination(products, 6);

  const handleSort = (value) => {
    if (value === "highToMin") {
      const newOrder = products.sort((a, b) => (a.price < b.price ? 1 : -1));
      setProductOrder(newOrder);
      setoriginproducts(newOrder);
      setProducts(newOrder)
    }
    if (value === "minToHigh") {
      const newOrder = products.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProductOrder(newOrder);
      setoriginproducts(newOrder);
      setProducts(newOrder)
    }
  };


  // const { data: categories } = useQuery({
  //   queryFn: () => get_categories_fn(),
  //   onSuccess: (res) => {
  //     console.log(res.data);
  //     // setCategories(res.data?.message);
  //   },
  //   onError: (err) => {
  //     console.log(err);
  //   },
  // });

  // const [products, setProducts] = useState([]);

  const selectProducts = useMutation({
    mutationFn: (body) => selectcards(body),
    onSuccess: (res) => {
      console.log(res.data)
      setProducts(res.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    selectProducts.mutate({
      user_id: userData?.user_id||0,
      start: 0,
    });
  }, []);

  // const loginMutation = useMutation({
  //   mutationFn: (body) => select_products_fn(body),
  //   onSuccess: (res) => {
  //     //console.log(res.data)
  //     //alert(res.data);
  //     setcartproducts(res.data.message);

  //   },
  //   onError: (err) => {
  //     alert(err);
  //   },
  // });

  // const getcarddata = () => {

  //   loginMutation.mutate({
  //     user_id:1,
  //   });
  // };
  // useEffect(()=>{
  //   getcarddata()
  // },[])


  return (
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className="shop">
        <div className="wrapper">
          <div className="shop-content">
            {/* <!-- Shop Main --> */}
            <div className="shop-main" style={{
              width:'100%'
            }}>
              <div className="shop-main__filter">
                {/* <div className="shop-main__checkboxes">
                  <label className="checkbox-box">
                    <input
                      checked={filter.isSale}
                      onChange={() =>
                        setFilter({ ...filter, isSale: !filter.isSale })
                      }
                      type="checkbox"
                    />
                    <span className="checkmark"></span>
                    أُوكَازيُون
                  </label>
                  <label className="checkbox-box">
                    <input
                      checked={filter.isNew}
                      onChange={() =>
                        setFilter({ ...filter, isNew: !filter.isNew })
                      }
                      type="checkbox"
                    />
                    <span className="checkmark"></span>
                    جديد
                  </label>
                </div> */}
                <div className="shop-main__select">
                  <Dropdown
                    options={options}
                    className="react-dropdown"
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div>
              </div>
              <div style={{
                width:'100%'
              }} className="top-categories__items">
                <Products products={ paginate?.currentData()} />
              </div>

              {/* <!-- PAGINATE LIST --> */}
              <PagingList paginate={paginate} />
            </div>
            {/* <!-- Shop Aside --> */}
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.jpg"
          alt=""
        />
        <img
          className="shop-decor js-img"
          src="/assets/img/shop-decor.jpg"
          alt=""
        />
      </div>
      {/* <!-- SHOP EOF   --> */}
    </div>
  );
};
