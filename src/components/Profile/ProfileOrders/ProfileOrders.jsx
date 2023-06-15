import orderData from "data/orders/orders";
import { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import { getuserorders } from "configs/APIs";
import { useMutation } from "react-query";
import { USER_ID } from "configs/AppConfig";

export const ProfileOrders = () => {
  const [active, setActive] = useState(-1);
  const [profileorders,setprofileorders]=useState([]);
  const orders = [...orderData];
  const handleCollapse = (indx) => {
    if (active === indx) {
      setActive(-1);
    } else {
      setActive(indx);
    }
  };



    const profileMutation = useMutation({
    mutationFn: (body) => getuserorders(body),
    onSuccess: (res) => {
      console.log(res.data)
      // alert(JSON.stringify(res.data));
      if (res.data?.message) {
        setprofileorders(res.data.message)
      }
      // setLoading(false)

    },
    onError: (err) => {
      // alert(err);
      setLoading(false)
      toast(err.message, { type: "error" })
    },
  });


  const getprofileorder = () => {
    //setLoading(true)
    let userData=JSON.parse(localStorage.getItem(USER_ID))

    profileMutation.mutate({
      user_id:userData?.user_id||0,
    })

  };

  useEffect(() => {
    getprofileorder()
  }, [])

  return (
    <>
      <div dir="rtl" className="profile-orders">
        <div className="profile-orders__row profile-orders__row-head">
          <div className="profile-orders__col" style={{ textAlign: "end" }}>
            التاريخ
          </div>
          <div className="profile-orders__col" style={{ textAlign: "end" }}>
            عنوان التسليم
          </div>
          <div className="profile-orders__col" style={{ textAlign: "end" }}>
            الكمية
          </div>
          <div className="profile-orders__col" style={{ textAlign: "end" }}>
            الحاله
          </div>
        </div>
        {profileorders.map((order, index) => (
          <Card
            key={index}
            index={index}
            onCollapse={handleCollapse}
            order={order}
            active={active}
          />
        ))}
      </div>
    </>
  );
};
