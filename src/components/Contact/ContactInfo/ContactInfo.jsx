import socialData from 'data/social';

export const ContactInfo = () => {
  const footerSocial = [...socialData];
  return (
    <>
      {/* <!-- BEGIN CONTACTS INFO --> */}
      <div className='contacts-info'>
        <div className='wrapper'>
          <div className='contacts-info__content'>
          <div className='contacts-info__social'>
              <span style={{textAlign:"end"}}>:تجدنا هنا</span>
              <ul>
                {footerSocial.map((social, index) => (
                  <li key={index}>
                    <a href={social.path}>
                      <i className={social.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='contacts-info__text'>
              <h4 style={{textAlign:"end"}}>نحن نعتني بك</h4>
              <p>
              راسلنا عبر البريد الإلكتروني إذا كانت لديك أي أسئلة ، سنحرص على الاتصال بنا
                أنت وتجد حلاً. أيضًا ، سيساعدك مديرونا في الاختيار
                المنتج الذي يناسبك بأفضل سعر. من عام إلى
                في العام ، تتطور شبكة روما وتتحسن ، مع الأخذ في الاعتبار
                حساب جميع احتياجات المستهلكين واتجاهات السوق. لكن بالنسبة لنا ، فإن
                يبقى القلق أنه عند القدوم إلى متجر روما ، فإن العملاء
                ليس لديك أسئلة حول الراحة والراحة
                التسوق وجودة المنتج ومستوى الاحتراف
                مستشاري المبيعات.
              </p>
            </div>
           
          </div>
        </div>
      </div>
      {/* <!-- CONTACTS INFO EOF   -->  */}
    </>
  );
};
