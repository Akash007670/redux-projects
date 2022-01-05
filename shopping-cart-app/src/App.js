import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-action";
// import { toggleAction } from "./store/toggle-cart";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.toggle.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggle.showNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
