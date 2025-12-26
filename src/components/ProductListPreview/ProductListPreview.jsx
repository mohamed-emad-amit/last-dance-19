// Take Props -> Products

import { Col, Row } from "react-bootstrap";
import { ProductCard } from "../ProductCard/ProductCard";

// Return -> Row Cols Cards
export const ProductListPreview = ({ products = [] }) => {
  return (
    <>
      {/* Preview Data */}
      <Row className="g-3 my-3">
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={product.id}>
            <ProductCard product={product} withFooter={true} />
          </Col>
        ))}
      </Row>

      {/* Handle Emtpy Products */}
      {products.length == 0 && (
        <p className="text-center text-secondary display-6">
          Products Not Found
        </p>
      )}
    </>
  );
};
