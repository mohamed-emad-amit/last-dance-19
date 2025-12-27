import React from "react";
import { Button } from "react-bootstrap";
import { clearUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

export const LogoutButton = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Handler
  function handleLogout() {
    // Clear Global Redux
    dispatch(clearUser());

    // Clear LocalStorage
    localStorage.removeItem("userData");
  }

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
};
