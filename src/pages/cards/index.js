import { Cards } from "components/Cards/Cards";
import { Subscribe } from "components/shared/Subscribe/Subscribe";
import { PublicLayout } from "layout/PublicLayout";

const breadcrumbsData = [
  {
    label: "الرئيسية",
    path: "/",
  },
  {
    label: "البطاقات",
    path: "/cards",
  },
];
const ShopPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle="البطاقات">
      <Cards />
      <Subscribe />
    </PublicLayout>
  );
};

export default ShopPage;
