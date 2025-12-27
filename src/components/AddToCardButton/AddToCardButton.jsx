import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";

// [TODO]: Add Product Cart
export const AddToCardButton = ({ product }) => {
  const isDisabled = product.stock == 0;
  // Dispatch
  const dispatch = useDispatch();

  // Handler
  function handleAddToCart() {
    dispatch(addToCart(product));
  }
  return (
    <Button
      onClick={handleAddToCart}
      disabled={isDisabled}
      style={{
        cursor: isDisabled ? "not-allowed" : "pointer",
        pointerEvents: "unset",
      }}
    >
      Add To Cart
    </Button>
  );
};
