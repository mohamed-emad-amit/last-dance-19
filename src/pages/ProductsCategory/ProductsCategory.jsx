import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { errorHandler } from "../../utils/errorHandler";
import { API } from "../../api/apiService";
import { Loading } from "../../components/Loading/Loading";
import { ProductListPreview } from "../../components/ProductListPreview/ProductListPreview";

export const ProductsCategory = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Params
  const { slug } = useParams();

  useEffect(
    function () {
      // Fetch Products By Category
      async function fetchProductsByCategory() {
        try {
          // Enable Loading
          setLoading(true);

          // Hit Endpoint
          const response = await API.get(`/products/category/${slug}`);
          // Update
          setProducts(response.data.products);
        } catch (error) {
          errorHandler(error);
        } finally {
          // Disable Loading
          setLoading(false);
        }
      }
      fetchProductsByCategory();
    },

    [slug]
  );
  if (loading) return <Loading />;
  return (
    <div>
      <p className="display-3">Products {slug}</p>

      <ProductListPreview products={products} />
    </div>
  );
};
