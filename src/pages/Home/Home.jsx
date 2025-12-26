import { Carousel } from "react-bootstrap";
import { IMAGES } from "../../constants/images";
import { RecommendedSection } from "../../components/RecommendedSection/RecommendedSection";

export const Home = () => {
  return (
    <div>
      {/* Slider */}
      <Carousel>
        <Carousel.Item>
          <img src={IMAGES.HERO_IMAGE_1} alt="HERO_IMAGE_1" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={IMAGES.HERO_IMAGE_2} alt="HERO_IMAGE_2" />
        </Carousel.Item>

        <Carousel.Item>
          <img src={IMAGES.HERO_IMAGE_3} alt="HERO_IMAGE_3" />
        </Carousel.Item>
      </Carousel>

      {/* Recommended Section BasedOn User History */}
      <RecommendedSection />
    </div>
  );
};
