import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Products from "./components/Shop/Products.jsx";
import Notification from "./components/UI/Notification.jsx";

import { uiActions } from "./store/ui-slice.jsx";

let isInitial = true;
const firebaseEndpoint = import.meta.env.VITE_REACT_FIREBASE_URL;

export default function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    async function sendCartData() {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending card data.",
        })
      );
      const response = await fetch(firebaseEndpoint, {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed :(");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Victory!",
          message: "Sent cart data was successfull!",
        })
      );

      const responseData = await response.json();
    }

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed :(",
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
