import React from "react";
import { Link } from "react-router-dom";
import Herobottom from "../components/Products";
import FooterBoy from "../components/FooterBoy";
import { useState, useEffect } from "react";

function Earphones() {
  const [earphones, setEarPhons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/yx1-earphones")
      .then((res) => res.json())
      .then((datad) => setEarPhons(datad));
  }, []);

  console.log(earphones);
  return (
    <div>
      <div className="bg-black  ">
        <div className="header  max-container flex items-center justify-center ">
          <h1 className="py-[98px] text-white font-bold text-2xl leading-4">
            EARPHONES
          </h1>
        </div>
      </div>

      <div className="mt-[160px]">
        <div className="ZX9 min-container  flex  items-center mb-[160px]">
          <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center mr-[125px]">
            <img src="Group 5.svg" alt="" />
          </div>
          <div className="text-black ">
            <h4 className="font-400 text-2xl   mb-[24px] text-[#D87D4A]">
              N E W P R O D U C T
            </h4>
            <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
              {earphones?.name}
            </h2>
            <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
              {earphones?.description}
            </p>

            <Link
              to="/headphones"
              className="bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[260px]">
        <Herobottom></Herobottom>
      </div>
      <FooterBoy></FooterBoy>
    </div>
  );
}

export default Earphones;
