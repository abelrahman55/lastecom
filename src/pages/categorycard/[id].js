import { Category } from 'components/Category/Category';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  // {
  //   label: 'التصنيفات',
  //   path: '/categories',
  // },
];
const CategoriesPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='التصنيفات'>
      <Category />
    </PublicLayout>
  );
};

export default CategoriesPage;
