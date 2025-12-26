import { useEffect, useState } from "react";
import { ProductListPreview } from "../../components/ProductListPreview/ProductListPreview";
import { errorHandler } from "../../utils/errorHandler";
import { API } from "../../api/apiService";

// Fetch Products
export const Products = () => {
  // Local Products
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchAllProducts() {
      try {
        // Hit Endpoint
        const response = await API.get("/products");
        // Extract Data
        const { products } = response.data;

        // Update
        setProducts(products);
      } catch (error) {
        errorHandler(error);
      }
    }

    fetchAllProducts();
  }, []);

  return (
    <div>
      <p className="display-6 mb-0">Latest Products</p>
      <ProductListPreview products={products} />

      {/* [TODO]: Pagiation */}
    </div>
  );
};
