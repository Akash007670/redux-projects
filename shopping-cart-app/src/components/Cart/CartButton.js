import { useDispatch } from "react-redux";
import { toggleAction } from "../../store/toggle-cart";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleHandler = () => {
    dispatch(toggleAction.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
