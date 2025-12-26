import React, { useEffect, useState } from "react";
import { API } from "../../api/apiService";
import { errorHandler } from "../../utils/errorHandler";
import { ProductListPreview } from "../ProductListPreview/ProductListPreview";

export const RecommendedSection = () => {
  // Get Category
  const recommendedCategory =
    localStorage.getItem("recommended-category") ?? "beauty";

  // Store Products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // 1. MOUNT
    // 2. Recommended Category UPDATE
    async function fetchProductsPerCategory() {
      try {
        // Hit Endpoint
        const response = await API.get(
          `/products/category/${recommendedCategory}`
        );
        // Update
        setProducts(response.data.products);
      } catch (error) {
        errorHandler(error);
      }
    }

    fetchProductsPerCategory();
  }, [recommendedCategory]);

  return (
    <div className="my-3">
      <p className="display-6 mb-3">Recommended for you</p>

      {/* Show Products */}
      <ProductListPreview products={products} />
    </div>
  );
};
