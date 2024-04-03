import React, { useContext } from "react";

import useHttp from "../hooks/useHttp.js";
import { currencyFormatter } from "../util/formatting.js";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

import Error from "./Error.jsx";
import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const { data, isLoading, error, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfig,
    []
  );

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function closeCheckoutHandler() {
    userProgressCtx.hideCheckout();
  }

  function finishHandler() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());

    sendRequest(
      JSON.stringify({
        order: { items: cartCtx.items, customer: customerData },
      })
    );
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={closeCheckoutHandler}
      >
        <h2>Success!</h2>
        <p>Your order was placed, we will be in contact with you shortly.</p>
        <p>Thank you for trusting in our service.</p>
        <p className="modal-actions">
          <Button onClick={finishHandler}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={closeCheckoutHandler}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full name" type="text" id="name" />
        <Input label="E-mail address" type="email" id="email" />
        <Input label="Street Address" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Failed to submit order" message={error} />}
        <p className="modal-actions">
          {!isLoading ? (
            <>
              <Button textOnly type="button" onClick={closeCheckoutHandler}>
                Close
              </Button>
              <Button>Submit Order</Button>
            </>
          ) : (
            <span>Sending order...</span>
          )}
        </p>
      </form>
    </Modal>
  );
}
