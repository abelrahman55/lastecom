import { MostViewed } from "components/shared/MostViewed/MostViewed";
import { ProductDetails } from "components/Product/ProductDetails/ProductDetails";
// import { useRouter } from "next/router";
import { Header } from "components/shared/Header/Header";
import { Footer } from "components/shared/Footer/Footer";
import { Breadcrumb } from "components/shared/Breadcrumb/Breadcrumb";

// const { PublicLayout } = require("layout/PublicLayout");

const breadcrumbsData = [
  {
    label: "الرئيسية",
    path: "/",
  },
  {
    label: "تسوق",
    path: "/shop",
  },
  {
    label: "Product",
    path: "/product",
  },
];
const ProductPage = () => {
  return (
    <>
      <header className="header">
        <Header />
      </header>
      <main className="content">
        <Breadcrumb
          breadcrumb={breadcrumbsData}
          title={"تسوق"}
          // description={description}
        />
        <ProductDetails />
        <MostViewed additionalClass="product-viewed" />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
    // <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='تسوق'>
    //   <ProductDetails />
    //   <MostViewed />
    // </PublicLayout>
  );
};

export default ProductPage;
