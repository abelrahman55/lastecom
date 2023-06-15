import { MostViewed } from "components/shared/MostViewed/MostViewed";
import { ProductDetails } from "components/Product/ProductDetails/ProductDetails";
import { Header } from "components/shared/Header/Header";
import { Breadcrumb } from "components/shared/Breadcrumb/Breadcrumb";
import { Footer } from "components/shared/Footer/Footer";

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
    label: "المنتج",
    path: "/product",
  },
];
const SingleProductPage = () => {
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
  );
};

export default SingleProductPage;
