export const ContactFrom = () => {
  return (
    <>
      {/* <!-- BEGIN DISCOUNT --> */}
      <div
        className='discount discount-contacts js-img'
        style={{ backgroundImage: `url('/assets/img/discount-bg3.jpg')` }}
      >
        <div className='wrapper'>
          <div className='discount-info'>
            <span className='saint-text' style={{textAlign:"end"}}>اكتب لنا</span>
            <span className='main-text' style={{textAlign:"end"}}>اترك رسالة</span>
            <p  style={{textAlign:"end"}}>
              اكتب إلينا إذا كانت لديك أي أسئلة ، وسنتواصل معك بالتأكيد
              أنت وتجد حلاً.
            </p>
            <form>
              <div className='box-field'>
                <input
                  type='text'
                  className='form-control'
                  placeholder='أدخل أسمك'
                />
              </div>
              <div className='box-field'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='أدخل بريدك الإلكتروني'
                />
              </div>
              <div className='box-field box-field__textarea'>
                <textarea
                  className='form-control'
                  placeholder='أدخل رسالتك'
                ></textarea>
              </div>
              <button disabled={true} className='btn' >
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <!-- DISCOUNT EOF   --> */}
    </>
  );
};
