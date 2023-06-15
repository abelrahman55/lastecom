import { Faq } from "components/Faq/Faq";
import { Subscribe } from "components/shared/Subscribe/Subscribe";
import { PublicLayout } from "layout/PublicLayout";

const breadcrumbsData = [
  {
    label: "الرئيسية",
    path: "/",
  },
  {
    label: "السياسات",
    path: "/faq",
  },
];
const CartPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="السياسات">
      <Faq />
      <Subscribe />
    </PublicLayout>
  );
};

export default CartPage;
