import Link from 'next/link';
import productData from 'data/product/product';
import { useMutation } from 'react-query';
import { getsubscribers, getwatchedproducts } from 'configs/APIs';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { USER_ID } from 'configs/AppConfig';
import 'react-toastify/dist/ReactToastify.css';
export const ProfileAside = () => {
  const recentlyViewed = [...productData].slice(0, 3);

  const [email,setemail]=useState("");

  const [watched, setwatched] = useState([]);
  const [mostvisited, setmostvisited] = useState([]);
  const watchmutation = useMutation({
    mutationFn: (body) => getwatchedproducts(body),
    onSuccess: (res) => {
      console.log(res.data.message.user_last_visit_products)
      //alert(res.data);
      setwatched(res.data.message.user_last_visit_products);
      setmostvisited(res.data.message.most_visit_products);

    },
    onError: (err) => {
      console.log(err);
    },
  });

  const getwatched = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    watchmutation.mutate({
      user_id:userData?.user_id||0,
    });
  };
  useEffect(()=>{
    getwatched()
  },[])


  const submutation = useMutation({
    mutationFn: (body) => getsubscribers(body),
    onSuccess: (res) => {
      console.log(res.data);
      toast.success(res.data.message)
    },
    onError: (err) => {
      console.log(err);
      toast.success(res.data.message)

    },
  });

  const  handleconnect= () => {

    submutation.mutate({
      email,
    });
  };


  return (
    <>
      <div className='profile-aside'>
        <div className='profile-aside__subscribe'>
          <h3>ابق على تواصل</h3>
          <div className='box-field'>
            <input
              onChange={(e)=>{
                setemail(e.target.value)
              }}
              type='email'
              className='form-control'
              placeholder='أدخل بريدك الإلكتروني'
            />
          </div>
          <button
            onClick={(e)=>{
              e.preventDefault();
              handleconnect();
            }}
          type='submit' className='btn'>
            اشترك
          </button>
          <img
            src='/assets/img/subscribe-img-decor-sm.png'
            className='js-img'
            alt=''
          />
        </div>
        <div className='profile-aside__viewed'>
          <h5 style={{textAlign:"end"}}>شاهدت ايضا</h5>
          {watched.map((product) => (
            <div key={product.id} className='profile-aside__viewed-item'>
              <Link href={`/product/${product.id}`}>
                <a className='profile-aside__viewed-item-img'>
                  <img src={product.image} className='js-img' alt='' />
                </a>
              </Link>
              <div className='profile-aside__viewed-item-info'>
                <Link href={`/product/${product.id}`}>
                  <a className='profile-aside__viewed-item-title'>
                    {product.name}
                  </a>
                </Link>
                <div style={{
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'space-around'
                }}>
                <div style={{
                  display:'flex',
                  alignItems:'center',
                }}>
                <span>ر.س</span>
                <span className='profile-aside__viewed-item-price'>
                  ${product.price}
                </span>
                </div>
                <div style={{
                  display:'flex',
                  alignItems:'center',
                }}>
                <span style={{
                  fontSize:'14px'
                }} >ر.س</span>
                <span style={{
                  fontSize:'14px'
                }} className='profile-aside__viewed-item-price'>
                  <del>${product.oldPrice}</del>
                </span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className='profile-aside__discount js-img'
          style={{ backgroundImage: `url('/assets/img/discount-bg-sm.jpg')` }}
        >
          <div className='profile-aside__discount-title'>
            Get Your
            <br />
            <span>50%</span> Off
          </div>
          <Link href='/shop'>
            <a className='btn'>
              get now!
            </a>
          </Link>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};
