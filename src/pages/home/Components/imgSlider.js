import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

function ImgSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="container p-5 mb-5" style={{backgroundColor:'rgb(12, 63, 23)'}}>
        <h1 style={{fontSize:'150%' , color:'white' , marginBottom:'2rem'}}>We believe pest control begins with a deep scientific understanding.</h1>
      <Carousel responsive={responsive}>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F32QlzgMIJoCNKChlBK4mGE%2F2f3397739cfb1dda6d844e4f4bde5808%2FRed_Fire_Ant_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F1vgGBZ4QzTY4iCEGg6o4pI%2Fe05b39e78ed83a629cf40d25b6fdfa87%2FRoach_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F5LII9XvIMgHoJDLWAWUt8m%2Fafd56e100222ce080296d3ce53947f0d%2FDrywood_Termite_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F7wpHQfm6VP4MTkfGXq0R9Z%2F6c1dc9bb86597a24cb79c5fbb9f02586%2FMosquito_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F6tKXyxYfTS9mwi8HaXADYt%2F4292ea825c53fc4a30fb4658b28da93e%2FBed_Bug_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F7JjP5qKgU1hAcr0qsvyYQa%2Fb95fd2df0344f8ea1f9761ea481b91ea%2FHoney_Bee_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F5gzSKFfVPTpcuj9MD93rQa%2Fd2cf7a0b624e23b7cfcec43eef5e64a5%2FDeer_Fly_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
        <div>
          <img
            style={{ width: "10rem" }}
            src="https://www.orkin.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F7bnun0x6hsse%2F1Nxd19cpgrSQM2qcsiYVf6%2F55fb57b6a28372ef9cfb0d490aee3f48%2FNorway_Rat_White_400x400.png%3Fw%3D212&w=600&q=75"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default ImgSlider;
