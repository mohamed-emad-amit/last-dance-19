import { Button, Card } from "react-bootstrap";
import { AddToCardButton } from "../AddToCardButton/AddToCardButton";
import { Link } from "react-router-dom";

// Take Props -> Product
// Take Props -> withFooter

export const ProductCard = ({ product, withFooter = false }) => {
  // Extract Info
  const { thumbnail, title, description, price, id } = product;
  return (
    <Card>
      <Card.Img className="card-img-top" src={thumbnail} alt={title} />

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>Price: ${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      {withFooter && (
        <Card.Footer className="d-flex justify-content-between gap-3 align-items-center">
          <AddToCardButton />

          {/* Link Navigate - Product Details */}
          <Button as={Link} to={`product-details/${id}`} variant="dark">
            Show More
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};
