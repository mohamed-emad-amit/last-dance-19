import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export const Footer = () => {
  const { theme } = useSelector((state) => state.app);
  

  return (
    <Container fluid className="py-3 text-center" data-bs-theme={theme}>
      Copy Right Reserved ❤️
    </Container>
  );
};
