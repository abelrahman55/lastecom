import { Post } from 'components/Blog/Post/Post';
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
  {
    label: 'Post',
    path: '/post',
  },
];
const PostPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='Blog'>
      <Post />
    </PublicLayout>
  );
};

export default PostPage;
