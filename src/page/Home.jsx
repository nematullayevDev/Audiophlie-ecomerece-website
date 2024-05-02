import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Herobottom from "../components/Products";
import { Link } from "react-router-dom";
import FooterBoy from "../components/FooterBoy";

function Home() {
  const [headphones, setData] = useState([]);
  const [speaker, setSpeaker] = useState([]);
  const [speakerx7, setSpeakerx7] = useState([]);
  const [earPhone, setearPhone] = useState([]);
  // headphones
  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((res) => res.json())
      .then((datad) => setData(datad));
  }, []);
  // console.log(headphones);
  // ZX7 SPEAKERS
  useEffect(() => {
    fetch("http://localhost:3000/zx9-speaker")
      .then((res) => res.json())
      .then((datad) => setSpeaker(datad));
  }, []);
  //

  useEffect(() => {
    fetch("http://localhost:3000/zx7-speaker")
      .then((res) => res.json())
      .then((datad) => setSpeakerx7(datad));
  }, []);

  //

  useEffect(() => {
    fetch("http://localhost:3000/yx1-earphones")
      .then((res) => res.json())
      .then((datad) => setearPhone(datad));
  }, []);
  console.log(earPhone);
  return (
    <div className="">
      <div className="bg-[#131313] w-full">
        <div className="w-ful flex items-center justify-between max-container pt-6 pb-6">
          <div className="w-fuul hadphons_mark bg-[url('/assets/ear.jpg')]  flex justify-between items-center">
            <div className="text-white">
              <h4 className="font-400 text-2xl  opacity-50 mb-[24px]">
                N E W P R O D U C T
              </h4>
              <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
                {headphones?.name}
              </h2>
              <p className="w-[349px] text-[15px] font-medium opacity-50 mb-[40px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>

              <Link
                to="/headphones"
                className="bg-[#D87D4A] py-[15px] px-[30px] hover:bg-[#FBAF85] transition duration-100 font-bold"
              >
                SEE PRODUCT
              </Link>
            </div>
            <div>
              <img src="ear.jpg" alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[220px] mb-[168px] ">
        <Herobottom></Herobottom>
      </div>

      <div className="ZX9 rounded-lg  max-container bg-[#D87D4A] mb-[48px]">
        <div className=" flex items-center gap-40 pt-10">
          <img
            className=""
            width={410}
            height={493}
            src="image-removebg-preview(38).svg"
            alt=""
          />

          <div className="mb-[80px]">
            <h2 className="w-[260px] text-[56px] font-bold leading-[56px] mb-[24px] text-white">
              {speaker?.name}
            </h2>
            <p className="w-[349px] font-[400] text-white mb-[40px] ">
              {speaker?.description}
            </p>

            <Link
              className="font-[700] text-white bg-black py-[15px] px-[30px] hover:bg-[#343333]"
              to="/speakers"
            >
              SEE PRODUCTS
            </Link>
          </div>
        </div>
      </div>

      <div className="ZX7 rounded-lg   h-[320px] flex items-center  mb-[48px]  bg-[url('/public/Zx7.svg')] bg-no-repeat ">
        <div className="">
          <div className="mb-[32px] ">
            <h2 className="font-[700] text-2xl text-black ">
              {speakerx7?.name}
            </h2>
          </div>
          <Link
            to="/speakers"
            className=" border-2 text-black border-[#151515b2] transition duration-300 py-[15px] px-[30px] hover:bg-black hover:text-white"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>

      <div className="YX1  h-[320px] flex items-center   ">
        <div className="flex items-">
          <div className="w-[540px] h-[320px]">
            <img className=" rounded-xl" src="image-gallery-3.jpg" alt="" />
          </div>
          <div className="bg-[#F1F1F1] w-[540px] h-[280px] rounded-xl flex items-center justify-center flex-col">
            <h2 className="pb-[32-px]">{earPhone?.name}</h2>
            <Link
              to="/earphones"
              className=" border-2 text-black border-[#151515b2] transition duration-300 py-[15px] px-[30px] hover:bg-black hover:text-white"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
      <FooterBoy></FooterBoy>
    </div>
  );
}

export default Home;
