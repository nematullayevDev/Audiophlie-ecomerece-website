import React from "react";
import { Link } from "react-router-dom";
import Herobottom from "../components/Products";
import FooterBoy from "../components/FooterBoy";
import { useEffect, useState } from "react";
function Speakers() {
  const [speaker, setSpeaker] = useState([]);
  const [speakerx7, setSpeakerx7] = useState([]);
  // XX99 MARK1
  useEffect(() => {
    fetch("http://localhost:3000/zx7-speaker")
      .then((res) => res.json())
      .then((datad) => setSpeakerx7(datad));
  }, []);

  //

  //
  useEffect(() => {
    fetch("http://localhost:3000/zx9-speaker")
      .then((res) => res.json())
      .then((datad) => setSpeaker(datad));
  }, []);
  console.log(speaker);
  return (
    <div>
      <div className="bg-black ">
        <div className="header  max-container flex items-center justify-center ">
          <h1 className="py-[98px] text-white font-bold text-2xl leading-4">
            SPEAKERS
          </h1>
        </div>
      </div>

      <div className="mt-[160px]">
        <div className="ZX9 min-container  flex  items-center mb-[160px]">
          <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center mr-[125px]">
            <img src="image-removebg-preview(38).svg" alt="" />
          </div>
          <div className="text-black ">
            <h4 className="font-400 text-2xl   mb-[24px] text-[#D87D4A]">
              N E W P R O D U C T
            </h4>
            <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
              {speaker?.name}
            </h2>
            <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>

            <Link
              to="/headphones"
              className="bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="zx7 min-container  flex  items-center">
          <div className="text-black  ">
            <div className="flex">
              <div className="">
                <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
                  {speakerx7?.name}
                </h2>
                <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
                  {speakerx7?.description}
                </p>

                <Link
                  to="/headphones"
                  className="bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
                >
                  SEE PRODUCT
                </Link>
              </div>

              <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center ml-[125px] mb-[160px]">
                <img src="image-removebg-preview(41) (1).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[160px]">
        <Herobottom></Herobottom>
      </div>
      <FooterBoy></FooterBoy>
    </div>
  );
}

export default Speakers;
