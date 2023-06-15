import { getsubscribers } from "configs/APIs";
import { useState } from "react";
import { useMutation } from "react-query";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const Subscribe = () => {
  const [email,setemail]=useState("");
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
      {/* <!-- BEGIN SUBSCRIBE --> */}
      <div className="subscribe">
        <div className="wrapper">
          <div className="subscribe-form">
            <div className="subscribe-form__img">
              <img
                src="/assets/img/subscribe-img.png"
                className="js-img"
                alt=""
              />
            </div>
            <form
              onSubmit={(e)=>{
                e.preventDefault();
                handleconnect();
              }}
            >
              <h3 style={{ textAlign: "end" }}>ابق على تواصل</h3>
              <p style={{ textAlign: "end" }}>
                غذي بشرتك بمنتجات التجميل الخالية من السموم
              </p>
              <div className="box-field__row">
                <div className="box-field">
                  <input
                    onChange={(e)=>{
                      setemail(e.target.value)
                    }}
                    type="email"
                    className="form-control"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
                <button type="submit" className="btn">
                  إشترك
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- SUBSCRIBE EOF   --> */}
      <ToastContainer/>
    </>
  );
};
