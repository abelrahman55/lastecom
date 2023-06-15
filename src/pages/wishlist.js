import { MostViewed } from 'components/shared/MostViewed/MostViewed';
import { Wishlist } from 'components/Wishlist/Wishlist';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'المفضلة',
    path: '/wishlist',
  },
];
const WishlistPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='المفضلة'>
      <Wishlist />
      <MostViewed />
    </PublicLayout>
  );
};

export default WishlistPage;
