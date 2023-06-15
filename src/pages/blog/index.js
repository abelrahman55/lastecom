import { Blog } from 'components/Blog/Blog';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'المدونة',
    path: '/blog',
  },
];
const BlogPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='المدونة'>
      <Blog />
      <Subscribe />
    </PublicLayout>
  );
};

export default BlogPage;
