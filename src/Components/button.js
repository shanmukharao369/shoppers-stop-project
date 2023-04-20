import { useContext } from "react";
import CartContext from "./Cart-Context";
import classes from "./button.module.css";
import { Button } from "react-bootstrap";

function ButtonDetails(props) {
  const cartCtx = useContext(CartContext);
 

  return (
    <div className={classes.div}>
      <Button>BUY L  ({props.user.quantityL})</Button>
      <Button variant="success">
        BUY M ({props.user.quantityM})
      </Button>
      <Button>BUY S ({props.user.quantityS})</Button>
    </div>
  );
}

export default ButtonDetails;
