import { useLoading,Audio } from '@agney/react-loading';
import { AboutDetailBlock } from 'components/About/AboutDetailBlock/AboutDetailBlock';
import { AboutDiscount } from 'components/About/AboutDiscount/AboutDiscount';
import { AboutPromo } from 'components/About/AboutPromo/AboutPromo';
import { Advantage } from 'components/shared/Advantage/Advantage';
import { Subscribe } from 'components/shared/Subscribe/Subscribe';
import { Testimonials } from 'components/shared/Tesimonials/Tesimonials';
import { select_home_fn } from 'configs/APIs';
import { USER_ID } from 'configs/AppConfig';
import { PublicLayout } from 'layout/PublicLayout';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const breadcrumbsData = [
  {
    label: 'الرئيسية',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
];
const AboutPage = () => {

  const [aboutdata, setaboutdata] = useState({});
  const [loading, setLoading] = useState(false);
  const [reviews,setreviews]=useState([]);
  const HomeMutation = useMutation({
    mutationFn: (body) => select_home_fn(body),
    onSuccess: (res) => {
      //console.log(res.data.message)
      // alert(JSON.stringify(res.data));
      if (res.data?.message) {
        setaboutdata(res.data.message.about_us)
        // console.log(res.data.message)
        setreviews(res.data.message.main_reviews);
        // console.log(res.data.message.main_reviews)
      }
      setLoading(false)

    },
    onError: (err) => {
      // alert(err);
      setLoading(false)
      toast(err.message, { type: "error" })
    },
  });
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Audio width="50" />,
  });

  const gethomedata = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    setLoading(true)
    HomeMutation.mutate({
      user_id: userData?.user_id||0,
    })

  };

  useEffect(() => {
    gethomedata()
  }, [])

  return (
    <PublicLayout breadcrumb={breadcrumbsData} breadcrumbTitle='About'>
      <AboutDetailBlock aboutdata={aboutdata}/>
      <AboutPromo aboutdata={aboutdata}/>
      <AboutDiscount aboutdata={aboutdata}/>
      <Advantage aboutdata={aboutdata}/>
      <Testimonials reviews={reviews}/>
      <Subscribe />
      <ToastContainer/>
    </PublicLayout>
  );
};

export default AboutPage;
