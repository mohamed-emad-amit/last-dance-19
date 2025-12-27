import React, { useEffect, useState } from "react";
import { API } from "../../api/apiService";
import { errorHandler } from "../../utils/errorHandler";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Link } from "react-router-dom";

export const CategoriesSection = () => {
  // State
  const [categories, setCategories] = useState([]);

  // Fetch Categories
  useEffect(function () {
    async function fetchCategories() {
      try {
        // Hit Endpoint
        const response = await API.get("/products/categories");

        // Update
        setCategories(response.data);
      } catch (error) {
        errorHandler(error);
      }
    }

    fetchCategories();
  }, []);

  console.log(categories);
  return (
    <div className="my-3">
      <p className="display-6">Categories Section</p>

      <Swiper spaceBetween={50} slidesPerView={5} className="border p-5">
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to={`/category/${category.slug}`}>
              <img
                style={{ width: "100%" }}
                className="rounded-circle mb-3"
                src={`https://picsum.photos/1000?${index + 1}`}
                alt={category.name}
              />
              <h2 className="text-center ">{category.name}</h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
