import { Profile } from 'components/Profile/Profile';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'الملف الشخصي',
    path: '/profile',
  },
];
const ProfilePage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='الملف الشخصي'>
      <Profile />
    </PublicLayout>
  );
};

export default ProfilePage;
