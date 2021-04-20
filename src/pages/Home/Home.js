import React, { useState } from "react";
import { Button, Text, Slider } from "../../components";
import { COLORS } from "../../theme/mainTheme";
import { images } from "../../constants";
import { Coupons } from "./components";

const Home = () => {
  const brandCircles = [
    "https://asset22.ckassets.com/resources/image/staticpage_images/TheManCo-Desktop-03-19-21-1616135069.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/03-16-Shyaway-Desktop-1615874022.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Plum-Desktop-03-19-21-1616135164.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/Ajio-Desktop-03-18-21-1616046570.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/myntra_desktop_19mar-1616134589.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/LOWEST-PRICES-EVER-Desktop-1616044788.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/03-19-Makemytrip-Desktop-1616134694.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/tatacliq_desktop_16mar-1615896714.jpg",
    "https://asset22.ckassets.com/resources/image/staticpage_images/medlife_desktop_19mar-1616134876.jpg",
  ];

  return (
    <div className="mt-2">
      <Slider
        pagination={true}
        loop={true}
        delay={4000}
        width="100%"
        spv2={3}
        images={brandCircles}
      />

      <div>
        <Coupons />
      </div>
    </div>
  );
};

export default Home;
