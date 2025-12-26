import { useEffect, useState } from "react";
import { ProductListPreview } from "../../components/ProductListPreview/ProductListPreview";
import { errorHandler } from "../../utils/errorHandler";
import { API } from "../../api/apiService";
import { Paginator } from "../../components/Paginator/Paginator";
import { Loading } from "../../components/Loading/Loading";

// Fetch Products
export const Products = () => {
  // Loading State
  const [loading, setLoading] = useState(true);

  // Local Products
  const [products, setProducts] = useState([]);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [noPages, setNoPages] = useState(0);
  const [skip, setSkip] = useState(0);
  const limit = 20;

  // Handle Current Page
  function handleCurrentPage(page) {
    // Update Current Page OnPress
    setCurrentPage(page);
    // Update Skip: New Products
    setSkip((page - 1) * limit);
  }

  useEffect(
    function () {
      async function fetchAllProducts() {
        try {
          // Enable Loading
          setLoading(true);

          // Hit Endpoint
          const response = await API.get(
            `/products?skip=${skip}&limit=${limit}`
          );
          // Extract Data: limit [no-products], skip [no-products-igonre]
          const { products, total } = response.data;

          // Update
          setProducts(products);

          // Calc Pages
          setNoPages(Math.ceil(total / limit));
        } catch (error) {
          errorHandler(error);
        } finally {
          // Disabled Loading
          setLoading(false);
        }
      }

      fetchAllProducts();
    },
    [skip]
  );

  if (loading) return <Loading />;

  return (
    <div>
      <p className="display-6 mb-0">Latest Products</p>
      <ProductListPreview products={products} />

      {/* [TODO]: Pagiation */}
      <Paginator
        noPages={noPages}
        onPress={handleCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
