import { Products } from "components/Product/Products/Products";
import { PagingList } from "components/shared/PagingList/PagingList";
import { usePagination } from "components/utils/Pagination/Pagination";
import productData from "data/product/product";
import Slider from "rc-slider";
import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import { AsideItem } from "../shared/AsideItem/AsideItem";
import { useMutation, useQuery } from "react-query";
import { get_categories_fn, getwatchedproducts, select_products_fn } from "configs/APIs";
import lodash from 'lodash/lodash';
import { USER_ID } from "configs/AppConfig";
import { useLoading, Audio } from "@agney/react-loading";
// React Range
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const options = [
  { value: "highToMin", label: "من باهظ الثمن إلى رخيص" },
  { value: "minToHigh", label: "من الرخيص إلى باهظ الثمن" },
];
export const Shop2 = ({categorproducts,id}) => {
  //console.log(id)

  const [loading,setloading]=useState(true);
  const [categoryproducts,setcategoryproducts]=useState([]);
  const [categoryproductsorigin,setcategoryproductsorigin]=useState([]);
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />
  });
  const loginMutation = useMutation({
    mutationFn: (body) => select_products_fn(body),
    onSuccess: (res) => {
      console.log(res)
      //console.log(res.data)
      //alert(res.data);
      setcategoryproducts(res.data.message);
      setcategoryproductsorigin(res.data.message);
      setloading(false)
    },
    onError: (err) => {
      console.log(err);
      setloading(false)
    },
  });

  const gethomedata = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    loginMutation.mutate({
      category_id:id,
      user_id: userData?.user_id||0,
      start: 0,
    });
  };
  useEffect(()=>{
    gethomedata()
  },[])

  // const allProducts = [...productData];
  const allProducts = [];
  const [searchTxt, setSearchTxt] = useState('');

  const [productOrder, setProductOrder] = useState(
    categoryproducts.sort((a, b) => (a.price < b.price ? 1 : -1))
  );

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({ isNew: false, isSale: true });

  useEffect(() => {
    setProducts(productOrder);
  }, [productOrder]);

  useEffect(() => {
    if (filter.isNew && filter.isSale) {
      const newPro = productOrder.filter(
        (pd) => pd.isNew === true && pd.isSale === true
      );
      setProducts(newPro);
    } else if (filter.isNew && !filter.isSale) {
      const newPro = productOrder.filter((pd) => pd.isNew === true);
      setProducts(newPro);
    } else if (filter.isSale && !filter.isNew) {
      const newPro = productOrder.filter((pd) => pd.isSale === true);
      setProducts(newPro);
    } else {
      setProducts([...productOrder]);
    }
  }, [filter, productOrder]);
  const recentlyViewed = [...productData].slice(0, 3);
  const todaysTop = [...productData].slice(3, 6);
  const paginate = usePagination(categoryproducts, 6);

  const handleSort = (value) => {
    if (value === "highToMin") {
      const newOrder = allProducts.sort((a, b) => (a.price < b.price ? 1 : -1));
      setProductOrder(newOrder);
    }
    if (value === "minToHigh") {
      const newOrder = allProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
      setProductOrder(newOrder);
    }
  };

  const { data: categories } = useQuery({
    queryFn: () => get_categories_fn(),
    onSuccess: (res) => {
      //console.log(res.data);
      // setCategories(res.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  // const [products, setProducts] = useState([]);

  const selectProducts = useMutation({
    mutationFn: (body) => select_products_fn(body),
    onSuccess: (res) => {
      setProducts(res.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(() => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    selectProducts.mutate({
      user_id:userData?.user_id||0,
      start: 0,
      category_id: "all",
    });
  }, []);

  const [watched, setwatched] = useState([]);
  const [mostvisited, setmostvisited] = useState([]);
  const watchmutation = useMutation({
    mutationFn: (body) => getwatchedproducts(body),
    onSuccess: (res) => {
      console.log(res.data.message.user_last_visit_products)
      //alert(res.data);
      setwatched(res.data.message.user_last_visit_products);
      setmostvisited(res.data.message.most_visit_products);

    },
    onError: (err) => {
      console.log(err);
    },
  });

  const getwatched = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    watchmutation.mutate({
      user_id:userData?.user_id||0,
    });
  };
  useEffect(()=>{
    getwatched()
  },[])


  function searchType(e) {
    setSearchTxt(e);
    const formattedQuery = e.toLowerCase();
    const filteredData = lodash.filter(categoryproductsorigin, item => {
      return contains(item, formattedQuery);
    });
    setcategoryproducts(filteredData);
  }
  const contains = (items, query) => {
    const { name,category} = items;
    if (
      name?.toLowerCase().includes(query)||
      category?.toLowerCase().includes(query)
    ) {
      return true;
    }

    return false;
  };


  return (
    <div>
      {/* <!-- BEGIN SHOP --> */}
      <div className="shop">
        <div className="wrapper">
          <div className="shop-content">
            {/* <!-- Shop Main --> */}
            <div className="shop-main">
              <div className="shop-main__filter">
                <div className="shop-main__checkboxes">
                  {/* <label className="checkbox-box">
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
                  </label> */}
                </div>
                {/* <div className="shop-main__select">
                  <Dropdown
                    options={options}
                    className="react-dropdown"
                    onChange={(option) => handleSort(option.value)}
                    value={options[0]}
                  />
                </div> */}
              </div>
              {
                loading?(<section
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
                </section>):(<div className="shop-main__items">
                {

                  categoryproducts?.length>0?(<Products products={paginate?.currentData()} />):(
                    <h1>لا يوجد منتجات لهذا التصنيف</h1>
                  )
                }
              </div>
)
              }
              {/* <!-- PAGINATE LIST --> */}
              {
                categoryproducts?.length>0?(<PagingList paginate={paginate} />):(
                  null
                )
              }
            </div>
            {/* <!-- Shop Aside --> */}
            <div className="shop-aside">
              <div className="box-field box-field__search">
                <input
                  type="search"
                  className="form-control"
                  placeholder="البحث"
                  onChange={e => {
                    searchType(e.target.value);
                  }}
                />
                <i className="icon-search"></i>
              </div>
              {/* <div className="shop-aside__item">
                <span
                  className="shop-aside__item-title"
                  style={{ textAlign: "end" }}
                >
                  التصنيفات
                </span>
                <ul>
                  {categories?.data?.message.map((item, idex) => (
                    <li>
                      <a href="#">
                        {item.name} <span>(37)</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
              {/* <div className="shop-aside__item">
                <span
                  className="shop-aside__item-title"
                  style={{ textAlign: "end" }}
                >
                  السعر
                </span>
                <div className="range-slider">
                  <Range
                    min={0}
                    max={20}
                    defaultValue={[0, 20]}
                    tipFormatter={(value) => `${value}$`}
                    allowCross={false}
                    tipProps={{
                      placement: "bottom",
                      prefixCls: "rc-slider-tooltip",
                    }}
                  />
                </div>
              </div> */}
              {
                watched?.length>0?(
                  <div className="shop-aside__item">
                <span
                  className="shop-aside__item-title"
                  style={{ textAlign: "end" }}
                >
                  لقد شاهدت
                </span>
                {watched.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
                ):(null)
              }
              {
                mostvisited?.length>0?(
                  <div className="shop-aside__item">
                <span
                  className="shop-aside__item-title"
                  style={{ textAlign: "end" }}
                >
                  أعلى 3 لهذا اليوم
                </span>
                {mostvisited.map((data) => (
                  <AsideItem key={data.id} aside={data} />
                ))}
              </div>
                ):(null)
              }
            </div>
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
