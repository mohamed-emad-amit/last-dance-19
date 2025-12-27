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
import { useSelector } from "react-redux";

export default function App() {
  // Select isLoggedIn
  const { isLoggedIn } = useSelector((state) => state.user);

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
