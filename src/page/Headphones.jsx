import React from "react";
import FooterBoy from "../components/FooterBoy";
import Herobottom from "../components/Products";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Headphones() {
  const [headphones, setData] = useState([]);
  const [markOne, setMarkone] = useState([]);
  const [xx59, setxx59] = useState([]);
  // XX99 MARK2
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((res) => res.json())
      .then((datad) => setData(datad));
  }, []);

  // XX99 MARK1
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-one-headphones")
      .then((res) => res.json())
      .then((datad) => setMarkone(datad));
  }, []);

  // XX59
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-one-headphones")
      .then((res) => res.json())
      .then((datad) => setxx59(datad));
  }, []);
  console.log(xx59);
  return (
    <div>
      <div className="bg-black">
        <div className="header  max-container flex items-center justify-center ">
          <h1 className="py-[98px] text-white font-bold text-2xl leading-4">
            HEADPHONES
          </h1>
        </div>
      </div>
      <div className="prodicts_card mt-[160px]">
        <div className="xx99 min-container  flex  items-center mb-[160px]">
          <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center mr-[125px]">
            <img src="image-removebg-preview(47).png" alt="" />
          </div>
          <div className="text-black ">
            <h4 className="font-400 text-2xl   mb-[24px] text-[#D87D4A]">
              N E W P R O D U C T
            </h4>
            <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
              {headphones?.name}
            </h2>
            <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
              {headphones?.description}
            </p>

            <Link
              to="/headphones"
              className="bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>

        <div className="xx99 min-container  flex  items-center">
          <div className="text-black  ">
            <div className="flex">
              <div className="">
                <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
                  {markOne?.name}
                </h2>
                <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
                  {markOne?.description}
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

        <div className="xx99 min-container  flex  items-center mb-[160px]">
          <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center mr-[125px]">
            <img src="image-removebg-preview(48).png" alt="" />
          </div>
          <div className="text-black ">
            <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
              {xx59?.name}
            </h2>
            <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
              {xx59?.description}
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
      <div className="mt-[160px]">
        <Herobottom></Herobottom>
      </div>
      <FooterBoy></FooterBoy>
    </div>
  );
}

export default Headphones;
