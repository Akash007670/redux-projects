import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { toggleAction } from "./store/toggle-cart";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.toggle.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.toggle.showNotification);
  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        toggleAction.showNotification({
          status: "pending",
          title: "sending...",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://redux-cart-app-c037b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed");
      }

      dispatch(
        toggleAction.showNotification({
          status: "success",
          title: "Success",
          message: "cart data sent successfully ",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(
        toggleAction.showNotification({
          status: "error",
          title: "error",
          message: "sending cart data failed! ",
        })
      );
    });
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
