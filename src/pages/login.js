import { Login } from 'components/Login/Login';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'تسجيل دخول',
    path: '/login',
  },
];
const LoginPage = () => {

  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='تسجيل دخول'>
      <Login />
      <Subscribe />
    </PublicLayout>
  );
};

export default LoginPage;
