import server from "./AxiosInterceptors";

export const select_home_fn = async (body) => {
  return server.post("roma_store/user/home/select_home.php", body);
};

export const selectcards = async (body) => {
  return server.post("roma_store/user/home/select_product_cards.php", body);
};

export const select_products_fn = async (body) => {
  return server.post("roma_store/user/home/select_products.php", body);
};

export const get_categories_fn = async () => {
  return server.get("roma_store/user/home/select_categories.php");
};

export const login_fn = async (body) => {
  return server.post("roma_store/user/auth/user_login.php", body);
};

export const signup_fn = async (body) => {
  return server.post("roma_store/user/auth/user_sign_up.php", body);
};
export const addfavourite_fn = async (body) => {
  console.log(body);
  return server.post("roma_store/user/home/add_remove_favorite.php", body);
};

export const addTocart = async (body) => {
  console.log(body);
  return server.post(
    "https://camp-coding.online/roma_store/user/order/add_cart_item.php",
    body
  );
};

export const get_favourits = async (body) => {
  return server.post("roma_store/user/home/select_favorite.php", body);
};
export const get_wishlist = async (body) => {
  return server.post("roma_store/user/home/select_favorite.php", body);
};
export const get_product_details = async (body) => {
  console.log("cccccccccccccc", body);
  return server.post("roma_store/user/home/select_product_details.php", body);
};

export const get_faq = async () => {
  return server.get("roma_store/user/home/select_q_answers.php");
};
export const getwatchedproducts = async (body) => {
  return server.post(
    "roma_store/user/home/select_last_and_most_visit.php",
    body
  );
};
// export const addreview=async(body)=>{
//   console.log(body)
//   return server.post("roma_store/user/home/add_review.php",body);
// }

export const addnewreview = async (body) => {
  return server.post("roma_store/user/home/add_review.php", body);
};
export const getuserorders = async (body) => {
  return server.post("roma_store/user/order/select_my_orders.php", body);
};
export const getsubscribers = async (body) => {
  console.log(body)
  return server.post("roma_store/user/home/subscribe.php", body);
};

// export const addfavourite_fn=async(body)=>{
//   return server.post("https://camp-coding.online/roma_store/user/home/add_remove_favorite.php",body);
// }
