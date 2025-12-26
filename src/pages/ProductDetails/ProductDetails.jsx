import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { errorHandler } from "../../utils/errorHandler";
import { Loading } from "../../components/Loading/Loading";
import { API } from "../../api/apiService";
import { NotFound } from "../NotFound/NotFound";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

// [TODO]: MAIN TASK REMAIN DATA IMPLMENTAION : 19*

export const ProductDetails = () => {
  // Catch ID
  const { id } = useParams();

  // Product
  const [product, setProduct] = useState(null);

  // Loading
  const [loading, setLoading] = useState(true);

  // Main Image
  const [mainImage, setMainImage] = useState("");

  useEffect(
    function () {
      // Fetch Single Product ID
      async function getProductByID() {
        try {
          // Enable Loading
          setLoading(true);

          // Hit Endpoint
          const response = await API.get(`/products/${id}`);

          const product = response.data;

          // Update
          setProduct(product);

          // Update Main Image
          setMainImage(product.images[0]);
        } catch (error) {
          // Handle Error
          errorHandler(error);
        } finally {
          // Disable Loading
          setLoading(false);
        }
      }

      // Call Inside UseEffect
      getProductByID();
    },
    [id]
  );

  // Handle Loading
  if (loading) return <Loading />;

  // Handle Not Found
  if (!product) return <NotFound />;

  // Extract Data
  const {
    images,
    category,
    title,
    price,
    discountPercentage,
    rating,
    reviews,
  } = product;

  const filledStarsNo = Math.floor(rating);

  console.log(product);

  return (
    <div className="d-flex">
      {/* Image Component */}
      <div>
        <div className="image-container">
          <img src={mainImage} alt="img-preview" style={{ width: "300px" }} />
        </div>

        {images.length > 1 && (
          <div className="slider-container">
            {images.map((item) => (
              <img
                src={item}
                alt="img"
                style={{ width: "100px", cursor: "pointer" }}
                className="border"
                onClick={() => setMainImage(item)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Text Component */}
      <div>
        <Link to={`/product/category/${category}`}>{category}</Link>

        <h3>{title}</h3>

        <div className="d-flex gap-1 align-items-center">
          <h6 className="mb-0">{rating}</h6>

          <div className="d-flex gap-1">
            {new Array(5).fill(0).map((item, index) => (
              <div key={index}>
                {filledStarsNo > index ? (
                  <FaStar className="text-warning" />
                ) : (
                  <CiStar className="text-warning" />
                )}
              </div>
            ))}
          </div>

          <a href="#reviews">{reviews.length} Ratings</a>
        </div>

        <div className="d-flex gap-2">
          <span className="fw-bold">
            ${(price - (price * discountPercentage) / 100).toFixed(2)}
          </span>
          <del>${price}</del>
          <span className="text-success fw-bold">
            {Number(discountPercentage).toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
};
