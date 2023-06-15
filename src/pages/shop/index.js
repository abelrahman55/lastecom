import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Shop } from 'components/Shop/Shop';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'تسوق',
    path: '/shop',
  },
];
const ShopPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='تسوق'>
      <Shop />
      <Subscribe />
    </PublicLayout>
  );
};

export default ShopPage;
