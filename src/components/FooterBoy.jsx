import React, { Component } from "react";

export class FooterBoy extends Component {
  render() {
    return (
      <div className="w-ful  flex items-center justify-between max-container mt-[200px] mb-[200px] gap-[73px]">
        <div className="">
          <h2 className="w-[400px] font-bold text-3xl text-black">
            BRINGING YOU THE <span className="text-[#D87D4A]">BREST </span>{" "}
            AUDIO GEAR
          </h2>
          <p className="w-[445px] leading-6 font-normal mt-[32px]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <img
          className="object-cover rounded-lg  h-[588px] w-[588px]"
          src="Bitmap.png"
          alt=""
        />
      </div>
    );
  }
}

export default FooterBoy;
