import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  Autoplay,
  Zoom,
  Virtual,
} from 'swiper';
import swiper from 'swiper/swiper-bundle.css';
import 'swiper/swiper.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import './style.css';
// import pics from './pics.js';

SwiperCore.use([
  Navigation,
  Pagination,
  EffectCube,
  EffectFade,
  EffectCoverflow,
  Autoplay,
  Zoom,
  Virtual,
]);

// export default function Slider() {
//   // Create array with 6 slides
//   const pics = Array.from({ length: 6 }).map(
//     (pic, index) => `Slide ${index + 1}`
//   );

//   return (
//     <Swiper spaceBetween={50} slidesPerView={3} virtual>
//       {pics.map((pic, index) => {
//         <SwiperSlide
//           key={pic.content}
//           virtualIndex={index}
//           srcPics={pic.src}
//         />;
//       })}
//     </Swiper>
//   );
// }

export default function Slider() {
  const slides = [];

  for (let i = 0; i < 5; i += 1) {
    slides.push(
      <SwiperSlide key={`slider-${i}`} tag="li">
        <img
          // src={`https://picsum.photos/id/${i + 1}/1400/750`}
          src={`https://res.cloudinary.com/dev-webmig/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1608725182/e-commerce/Teaser/maxi-dress-bleu.jpg`}
          alt={`Slide ${i}`}
          style={{
            listStyle: 'none',
            width: '100%',
            height: '750px',
            // objectFit: 'cover',
            backgroundSize: 'cover',
          }}
        />
      </SwiperSlide>
    );
  }
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        style={{ backgroundColor: 'black' }}
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        zoom={true}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log('Swiper initialized', swiper)}
        onSlideChange={(swiper) =>
          console.log('Slide index Swiper on change :', swiper.activeIndex)
        }>
        {slides}
      </Swiper>
    </>
  );
}
