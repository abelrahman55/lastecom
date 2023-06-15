import { addnewreview } from 'configs/APIs';
import { USER_ID } from 'configs/AppConfig';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { Rating } from 'react-simple-star-rating';
import { ToastContainer, toast } from 'react-toastify';
// import { addreview } from 'configs/APIs';
import 'react-toastify/dist/ReactToastify.css';
export const ReviewFrom = () => {
  const router=useRouter();
  console.log(router)
  const {id}=router.query;
  console.log(id)
  const [rating, setRating] = useState(0);
  const [revdata,setrevdata]=useState({
    user_id:'1',
    content:'',
    rate:'',
    item_id:id,
  });
  const [rate,setrate]=useState("");
  const [content,setcontent]=useState("");
  // Catch Rating value
  const handleRating = (rate) => {
    console.log(rate)
    setRating(rate);
    setrate(rate);
    //setrevdata({...revdata,rate:rate});
    // other logic
  };


  const addreviewMution = useMutation({
    mutationFn: (body) => addnewreview(body),
    onSuccess: (res) => {
      console.log(res.data)
      //alert(res.data);
      setcontent("");
      toast.success(res.data.message);

    },
    onError: (err) => {
      //alert(err);
      if(res.data.status==="error"){
        toast.error(res.data.message);
      }
    },
  });

  const addreview = () => {
    let userData=JSON.parse(localStorage.getItem(USER_ID))
    if(content==""||content==" "||content==null||content==undefined){
      toast.warn("ادخل تعليق اولا")
      return;
    }
    if(userData!==null){
      addreviewMution.mutate({
        user_id:userData?.user_id||0,
        content:revdata.content,
        rate,
        content
      });
    }
    else{
      toast.warn("سجل اولا")
      return;
    }
  };

  return (
    <>
      {/* <!-- Product Review Form --> */}
      <div className='product-detail__form post-comment__form'>
        <div className='subscribe-form__img'>
          <img src='/assets/img/subscribe-img.png' />
        </div>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            addreview();
          }}
        >
          <h4 style={{textAlign:"end"}}>اترك رايك</h4>
          <p style={{textAlign:"end"}}>لن يتم نشر عنوان بريدك الإلكتروني</p>
          <div className='rating' data-id='rating_1'>
            <Rating

              onClick={handleRating}
              ratingValue={rating}
              fillColor='#cfc819'
              size='20px'
              emptyColor='#fff'
              style={{marginLeft:"100%"}}
            />
          </div>
          <div className='box-field'>
            {/* <input
            // onChange={(e)=>{
            //   e.preventDefault();
            //   setrevdata({...revdata,name})
            // }}
              type='text'
              className='form-control'
              placeholder='أدخل أسمك'
            /> */}
          </div>
          {/* <div className='box-field'>
            <input
              type='email'
              className='form-control'
              placeholder='أدخل بريدك الإلكتروني'
            />
          </div> */}
          <div className='box-field box-field__textarea'>
            <textarea
            value={content}
            onChange={(e)=>{
              e.preventDefault();
              setcontent(e.target.value)
              //setrevdata({...revdata,content:e.target.value})
            }}
              className='form-control'
              placeholder='ادخل رايك'
            ></textarea>
          </div>
          <button type='submit' className='btn'>
            إرسال
          </button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};
