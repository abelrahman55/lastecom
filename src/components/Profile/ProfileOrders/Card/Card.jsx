export const Card = ({ order, index, onCollapse, active }) => {
  const { date, deliveryAddress, amount, status, orderItems } = order;
  console.log(order)

  return (
    <>
      <div
        dir="rtl"
        className={`profile-orders__item ${active === index && "active"}`}
      >
        <div className="profile-orders__row">
          <div className="profile-orders__col">
            <span className="profile-orders__col-mob">التاريخ</span>
            <span className="profile-orders__item-date">{date}</span>
          </div>
          <div className="profile-orders__col">
            <span className="profile-orders__col-mob">عنوان التسليم</span>
            <span className="profile-orders__item-addr"
            style={{

            }}
            >{deliveryAddress}</span>
          </div>
          <div className="profile-orders__col">
            <span className="profile-orders__col-mob">الكمية</span>
            <span className="profile-orders__item-price">

            <span>{amount}</span>
            <span> ر.س </span>

            </span>
          </div>
          <div className="profile-orders__col">
            <span className="profile-orders__col-mob">الحالة</span>
            <span
              className={`profile-orders__col-${
                ""
                // status=="delivered" ? "تم التسليم" : "في الطريق"
              }`}
            style={{
              color: status=="onWay"
              ? "#F1931C"
              : status=="delivered"
              ? "#12d012"
              : status=="pending"
              ? "#5F1CF1"
              : "#f00"
            }}
            >
              {status=="onWay"
                ? "في الطريق"
                : status=="delivered"
                ? "تم التسليم"
                : status=="pending"
                ? "قيد المراجعه"
                : "تم الغاء الطلب"}
            </span>
            <span
              onClick={() => onCollapse(index)}
              className="profile-orders__col-btn"
            ></span>
          </div>
        </div>
        <div className="profile-orders__content">
          <ul>
            {orderItems.map((item, index) => (
              <li key={index}>
                <span>
                {index+1 +" - "+ item.name}
                <span style={{
                  color:"#F1931C",
                  fontWeight:'bold'
                }}> × {item.item_count}</span>
                </span>
                <span>

                <span>{item.single_price}</span>

                {/* <span> ر.س </span> */}
                 <span style={{
                  color:"#F1931C",
                  fontWeight:'bold'
                }}> × {item.item_count}</span> = <span style={{fontWeight:'bold'}}>{item.single_price*item.item_count}</span>
<span style={{
                  color:"#F1931C",
                  fontWeight:'bold'
                }}> ر.س </span>

  </span>

              </li>
            ))}
            <li>
              طريقة الدفع:
              <span>بطاقة الخصم: **** **** **** 1633</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
