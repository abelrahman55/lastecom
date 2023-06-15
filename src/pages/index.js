import { Advantage } from "components/shared/Advantage/Advantage";
import { Banner } from "components/landing/Banner/Banner";
import { BrandLogo } from "components/shared/BrandLogo/BrandLogo";
import { Discount } from "components/landing/Discount/Discount";
import { Info } from "components/landing/Info/Info";
import { LatestNews } from "components/landing/LatestNews/LatestNews";
import { NewArrivals } from "components/landing/NewArrivals/NewArrivals";
import { TopCategories } from "components/landing/TopCategories/TopCategories";
import { Trending } from "components/landing/Trending/Trending";
import { Subscribe } from "components/shared/Subscribe/Subscribe";
import { Layout } from "layout/Layout";
import { useEffect, useState } from "react";
import { IS_LOGGED_IN, USER_ID } from "configs/AppConfig";
import router from "next/router";
import { select_home_fn } from "configs/APIs";
import { useMutation, useQuery } from "react-query";
// import { useFetch } from "Hoooks/useFetch";
import { useLoading, Audio } from "@agney/react-loading";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  const [homedata, setHomedata] = useState({});
  const [loading, setLoading] = useState(false);
  const HomeMutation = useMutation({
    mutationFn: (body) => select_home_fn(body),
    onSuccess: (res) => {
      // alert(JSON.stringify(res.data));
      if (res.data?.message) {
        setHomedata(res.data.message);
      }
      setLoading(false);
    },
    onError: (err) => {
      // alert(err);
      setLoading(false);
      toast(err.message, { type: "error" });
    }
  });
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />
  });

  const gethomedata = () => {
    setLoading(true);
    let userData = JSON.parse(localStorage.getItem(USER_ID));
    HomeMutation.mutate({
      user_id: userData?.user_id || 0
    });
  };

  useEffect(() => {
    gethomedata();
  }, []);
  return (
    <Layout>
      <Banner />
      {loading ? (
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
      ) : (
        <>
          <Trending productsdata={homedata?.trending_products} />
          <BrandLogo />
          <Discount />
          <Advantage />
          <TopCategories categories={homedata?.category} />
          <NewArrivals productsdata={homedata?.new_items} />
          <Info aboutdata={homedata?.about_us} />
          {/* <Subscribe /> */}
        </>
      )}
      <ToastContainer style={{ zIndex: 1000000 }} />
    </Layout>
  );
}
