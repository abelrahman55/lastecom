import { ContactDetailBlock } from 'components/Contact/ContactDetailBlock/ContactDetailBlock';
import { ContactFrom } from 'components/Contact/ContactForm/ContactForm';
import { ContactInfo } from 'components/Contact/ContactInfo/ContactInfo';
import { Map } from 'components/Contact/Map/Map';
import { BrandLogo } from 'components/shared/BrandLogo/BrandLogo';
import { PublicLayout } from 'layout/PublicLayout';

const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'اتصال',
    path: '/contact',
  },
];
const ContactPage = () => {
  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='إتصال'>
      <ContactDetailBlock />
      <ContactInfo />
      <BrandLogo />
      <ContactFrom />
      <Map />
    </PublicLayout>
  );
};

export default ContactPage;
