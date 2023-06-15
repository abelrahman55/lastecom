import { Cart } from 'components/Cart/Cart';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'السلة',
    path: '/cart',
  },
];
const CartPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='السلة'>
      <Cart />
    </PublicLayout>
  );
};

export default CartPage;
