import { toggleAction } from "./toggle-cart";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      toggleAction.showNotification({
        status: "pending",
        title: "sending...",
        message: "sending cart data",
      })
    );

    const sendRequest = async () => {
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
    };
    try {
      await sendRequest();
      dispatch(
        toggleAction.showNotification({
          status: "success",
          title: "Success",
          message: "cart data sent successfully ",
        })
      );
    } catch (err) {
      dispatch(
        toggleAction.showNotification({
          status: "error",
          title: "error",
          message: "sending cart data failed! ",
        })
      );
    }
  };
};
