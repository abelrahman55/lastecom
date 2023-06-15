import { SocialLogin } from "components/shared/SocialLogin/SocialLogin";
import { signup_fn } from "configs/APIs";
import { USER_ID } from "configs/AppConfig";
import router from "next/router";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const Registration = () => {
  const [user_email, setEmail] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const signupMutation = useMutation({
    mutationFn: (body) => signup_fn(body),
    onSuccess: (res) => {
      //console.log(res.data);
      router.push("/login");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  useEffect(()=>{
    let userData=localStorage.getItem(USER_ID)
    if(userData){
      return router.push("/")
    }
  },[])
  const doSignup = (event) => {
    event.preventDefault();
    if(user_email==""){
      toast.warn("ادخل البريد الالكترونى");
      return;
    }
    if(first_name==""){
      toast.warn("ادخل اسمك الاول");
      return;
    }
    if(last_name==""){
      toast.warn("ادخل اسمك الاخير");
      return;
    }
    if(phone==""){
      toast.warn("ادخل رقم الهاتف");
      return;
    }
    if(password==""){
      toast.warn("ادخل كلمه السر");
      return;
    }
    if (password === password_confirmation) {
      signupMutation.mutate({
        user_email,
        user_name:`${first_name} ${" "} ${last_name}`,
        phone,
        password,
      });
    } else {
      toast.warn("كلمة السر غير متطابقة");
    }
  };
  return (
    <>
      {/* <!-- BEGIN REGISTRATION --> */}
      <div className="login registration">
        <div className="wrapper">
          <div
            className="login-form js-img"
            style={{
              backgroundImage: `url('/assets/img/registration-form__bg.png')`,
            }}
          >
            <form onSubmit={doSignup}>
              <h3>انشئ حساب الان</h3>
              {/* <SocialLogin /> */}

              <div style={{direction:'rtl'}} className="box-field__row">
                <div className="box-field">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="أدخل أسمك"
                    onChange={(event) => {
                      event.preventDefault();
                      setFirst_name(event.target.value);
                    }}
                  />
                </div>
                <div style={{direction:'rtl'}} className="box-field">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="ادخل الاسم الثاني"
                    onChange={(event) => {
                      event.preventDefault();
                      setLast_name(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div  className="box-field__row">
                <div className="box-field">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="ادخل رقم الهاتف"
                    onChange={(event) => {
                      event.preventDefault();
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div className="box-field">
                  <input
                    type="user_email"
                    className="form-control"
                    placeholder="أدخل بريدك الإلكتروني"
                    onChange={(event) => {
                      event.preventDefault();
                      setEmail(event.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="box-field__row">
                <span style={{textAlign:'right'}}>كلمة السر</span>
                <div className="box-field">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="ادخل رقمك السري"
                    onChange={(event) => {
                      event.preventDefault();
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="box-field">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="تأكيد الرقم السري"
                    onChange={(event) => {
                      event.preventDefault();
                      setPassword_confirmation(event.target.value);
                    }}
                  />
                </div>
              </div>
              <label
                className="checkbox-box checkbox-box__sm"
                style={{ paddingLeft: "80%" }}
              >
                <input type="checkbox" />
                <span className="checkmark"></span>
                تذكرني
              </label>
              <button className="btn" type="submit">
                انشاء حساب
              </button>
              <div className="login-form__bottom">
                <span>
                  لديك حساب بالفعل ؟{" "}
                  <a onClick={() => router.push("/login")}>تسجيل دخول</a>
                </span>
              </div>
            </form>
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.jpg"
          alt=""
        />
      </div>
      <ToastContainer/>
      {/* <!-- REGISTRATION EOF   -->  */}
    </>
  );
};
