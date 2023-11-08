// import React from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { Navigation } from 'swiper/modules';

// const Feedback = () => {
//     return (
//         <>
//             <Swiper
//                 rewind={true}
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div>
//                         <img src="" alt="" />
//                     </div>
//                 </SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>

//             </Swiper></>
//     );
// };

// export default Feedback;

// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// import './styles.css';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function App() {
//     return (
//         <>
//             <Swiper
//                 rewind={true}
//                 navigation={true}
//                 modules={[Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//         </>
//     );
// }


// import React from 'react';
// import Slider from "react-slick";

// const Feedback = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//     return (
//         <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
// };

// export default Feedback;
// import React, { Component } from "react";
// import Slider from "react-slick";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }


import React from "react"
import { BsStarHalf } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./feedback.css"

import first from './../../../../assets/Images/feedback/first.png'
import secend from './../../../../assets/Images/feedback/secend.png'
import three from './../../../../assets/Images/feedback/three.png'
import quotes from './../../../../assets/Images/feedback/quotes.png'
export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  return (
    <div className="mt-10 w-10/12 mx-auto" >
      <h1 className="text-3xl text-center text-black">What Students <span><br /></span> Think and Say About Eduman</h1>
      <div ref={sliderRef} className="keen-slider mt-5">
        <div className="keen-slider__slide number-slide1">
          <div className="flex gap-5 m-5">
            <img className="" src={first} alt="" />
            <div>
              <h1>David jonson</h1>
              <p>Student</p>
            </div>
            <div>
              <img src={quotes} alt="" />
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto justify-center">
              <h2>Great Course!</h2>
              <p>Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!</p>
              <div className="flex text-yellow-400 text-2xl mt-5">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <BsStarHalf className="text-xl"></BsStarHalf>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="flex gap-5  m-5">
            <img className="" src={secend} alt="" />
            <div>
              <h1>Brandon Tylor</h1>
              <p>Student</p>
            </div>
            <div>
              <img src={quotes} alt="" />
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto justify-center">
              <h2>Best Experience!</h2>
              <p>In every software-as-a-service solution, user billing and payments are key aspects in the sale of services rendered. Let’s learn about Stripe the metal mates.</p>
              <div className="flex text-yellow-400 text-2xl mt-5">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="flex gap-5  m-5">
            <img className="" src={three} alt="" />
            <div>
              <h1>Richard Joseph</h1>
              <p>Student</p>
            </div>
            <div>
              <img src={quotes} alt="" />
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto justify-center">
              <h2>Helpful Instructor!</h2>
              <p>There are so many websites out there that have not considered the overall usability of their visually impaired users. When it comes to designing better links.!</p>
              <div className="flex text-yellow-400 text-2xl mt-5">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <BsStarHalf className="text-xl"></BsStarHalf>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="flex gap-5  m-5">
            <img className="" src={secend} alt="" />
            <div>
              <h1>David jonson</h1>
              <p>Student</p>
            </div>
            <div>
              <img src={quotes} alt="" />
            </div>
          </div>
          <div>
            <div className="w-11/12 mx-auto justify-center">
              <h2>Great Course!</h2>
              <p>Thanks to our marketplace model, our content keeps pace with market changes. You’ll find courses on the latest technologies and business practice and more!</p>
              <div className="flex text-yellow-400 text-2xl mt-5">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
