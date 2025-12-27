import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IMAGES } from "../../constants/images";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { Button, Pagination, Table } from "react-bootstrap";
import {
  decreaseQty,
  increateQty,
  removeFromCart,
} from "../../store/slices/cartSlice";

// Products : Add To Cart
export const Cart = () => {
  // Select IsLoggedIn
  const { isLoggedIn } = useSelector((state) => state.user);
  // Select CartItems
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const totalItems = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  // Dispatch
  const dispatch = useDispatch();

  // Navigator
  const navigate = useNavigate();

  // Handler
  function handleCheckout() {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
  }
  return (
    <div>
      {/* Handle Empty Cart */}
      {cartItems.length == 0 && (
        <div className="d-flex flex-column flex-md-row gap-5 align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h2>Your Shoping Cart Lookings Empty</h2>
            <h6>What Are You Looking For?</h6>

            <Button
              variant="dark"
              className="fw-bold py-3 px-4"
              as={Link}
              to="/products"
            >
              Start Shoping
            </Button>
          </div>
          <div>
            <TfiShoppingCartFull
              style={{ fontSize: "200px" }}
              className="text-primary"
            />
          </div>
        </div>
      )}

      <p className="display-4">
        <span>Cart</span> <span className="fs-1">({totalItems} items) </span>
      </p>

      {/* Show Products */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td className="text-center">
                <img src={product.thumbnail} alt={product.title} width={100} />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Pagination>
                  {/* Decrease Qty */}
                  <Pagination.First
                    disabled={product.quantity == 1}
                    onClick={() => {
                      dispatch(decreaseQty(product.id));
                    }}
                  />
                  <Pagination.Item active>{product.quantity}</Pagination.Item>
                  {/* Increase Qty */}
                  <Pagination.Last
                    disabled={product.stock == product.quantity}
                    onClick={() => {
                      dispatch(increateQty(product.id));
                    }}
                  />
                </Pagination>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromCart(product.id));
                  }}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* Total */}

      <div>
        <div className="d-flex justify-content-between gap-2 align-items-center">
          <h2>Total</h2>
          <h2>EGP {Number(totalAmount).toFixed(2)}</h2>
        </div>
      </div>

      {/* Checkout */}
      <Button
        variant="dark"
        className="fw-bold py-3 px-4 w-100"
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  );
};
