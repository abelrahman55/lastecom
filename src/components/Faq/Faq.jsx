import { useState } from "react";
import faqData from "data/faq/faq";
import { useQuery } from "react-query";
import { get_faq } from "configs/APIs";
import lodash from 'lodash/lodash';
export const Faq = () => {
  const faqs = [...faqData];
  const [active, setActive] = useState(-1);
  const [searchTxt, setSearchTxt] = useState('');

  const handleCollapse = (item) => {
    if (item === active) {
      setActive(-1);
    } else {
      setActive(item);
    }
  };

  const [FaqData, setFaqData] = useState([]);
  const [FaqDataorigin, setFaqDataorigin] = useState([]);
  const { data } = useQuery({
    queryFn: () => get_faq(),
    onSuccess: (res) => {
      //console.log(res.data);
      setFaqData(res.data?.message);
      setFaqDataorigin(res.data?.message);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  function searchType(e) {
    setSearchTxt(e);
    const formattedQuery = e.toLowerCase();
    const filteredData = lodash.filter(FaqDataorigin, item => {
      return contains(item, formattedQuery);
    });
    setFaqData(filteredData);
  }
  const contains = (items, query) => {
    const {quastion} = items;
    if (
      quastion?.toLowerCase().includes(query)
    ) {
      return true;
    }

    return false;
  };


  return (
    <>
      {/* <!-- BEGIN FAQ --> */}
      <div dir="rtl" className="faq">
        <div className="wrapper">
          <div className="faq-search">
            <form>
              <div className="box-field__row box-field__row-search">
                <div className="box-field">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="البحث"
                    onChange={e => {
                      searchType(e.target.value);
                    }}
                  />
                </div>
                {/* <button type="submit" className="btn btn-icon">
                  {" "}
                  <i className="icon-search"></i> ابحث
                </button> */}
              </div>
            </form>
          </div>

          <div className="faq-items">
            {FaqData.map((faq, index) => (
              <div
                dir="rtl"
                key={index}
                className={`faq-item ${active === index && "active"}`}
              >
                <div
                  onClick={() => handleCollapse(index)}
                  className="faq-item__head"
                >
                  <span className="faq-item__head-num">{index + 1}</span>
                  {faq.quastion}
                  <span className="faq-item__head-btn"></span>
                </div>
                <div
                  style={{ display: active === index && "block" }}
                  className="faq-item__content"
                >
                  <p
                    style={{
                      textAlign: ".start",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="faq-more">
            <a>
              <i className="icon-arrow-md"></i> إقرا المزيد
            </a>
          </div>
        </div>
        <img
          className="promo-video__decor js-img"
          src="/assets/img/promo-video__decor.jpg"
          alt=""
        />
      </div>
      {/* <!-- FAQ EOF   --> */}
    </>
  );
};
