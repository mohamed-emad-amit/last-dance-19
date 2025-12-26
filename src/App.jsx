import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { GlobalNavbar } from "./components/GlobalNavbar/GlobalNavbar";
import { Footer } from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div>
      {/* Global Components */}
      <GlobalNavbar />

      {/* Global Toast */}
      <Toaster position="bottom-right" />

      {/* Main Routes */}
      <Container>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Container>

      {/* Global Components */}
      <Footer />
    </div>
  );
}
