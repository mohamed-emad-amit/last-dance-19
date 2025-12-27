import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { GlobalNavbar } from "./components/GlobalNavbar/GlobalNavbar";
import { Footer } from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { NotFound } from "./pages/NotFound/NotFound";
import { Products } from "./pages/Products/Products";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTokenFromLocalStroage } from "./utils/tokenHandler";
import { errorHandler } from "./utils/errorHandler";
import { API } from "./api/apiService";
import { setUser } from "./store/slices/userSlice";
import { Loading } from "./components/Loading/Loading";

export default function App() {
  // Loading
  const [loading, setLoading] = useState(false);

  // Select isLoggedIn
  const { isLoggedIn } = useSelector((state) => state.user);

  // Dispatch
  const dispatch = useDispatch();

  // Check isLoggedIn - Send Token
  useEffect(function () {
    async function verifyMe() {
      // Get Token
      const token = getTokenFromLocalStroage();

      // Check Token Exist Or Not
      if (!token) return;

      // Send Token
      try {
        // Enable Loading
        setLoading(true);

        // Hit Endpoint
        const response = await API.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // User Information
        const userData = response.data;

        // Global Redux
        dispatch(setUser(userData));
      } catch (error) {
        errorHandler(error);

        // Clear LocalStorage
        localStorage.removeItem("userData");
      } finally {
        // Disable Loading
        setLoading(false);
      }
    }

    verifyMe();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      {/* Global Components */}
      <GlobalNavbar />

      {/* Global Toast */}
      <Toaster position="bottom-right" />

      {/* Main Routes */}
      <Container className="my-3 min-vh-100">
        <Routes>
          <Route path="/" Component={Home} />

          {isLoggedIn ? (
            <>{/* Profile Routes */}</>
          ) : (
            <>
              {/* Auth Routes */}
              <Route path="/login" Component={Login} />
            </>
          )}

          {/* Products Routes */}
          <Route path="/products" Component={Products} />
          <Route path="/product-details/:id" Component={ProductDetails} />

          {/* Handle Not Found */}
          <Route path="*" Component={NotFound} />
        </Routes>
      </Container>

      {/* Global Components */}
      <Footer />
    </div>
  );
}
