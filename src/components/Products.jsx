import React from "react";
import { Link } from "react-router-dom";

function Herobottom() {
  return (
    <div className="max-containerr ">
      <ul className="flex gap-[40px] font-mono">
        <li className="w-[360px] h-[204px] bg-[#F1F1F1] flex items-center justify-center flex-col rounded-lg">
          <img
            className="mt-[-80px] mb-[56px]"
            src="/image-removebg-preview(41).png"
            alt=""
          />
          <p className="text-bold font-[700] text-black">HEADPHONES</p>
          <Link to="/headphones" className="text-sm font-bold">
            SHOP <span className="text-[#D87D4A] text-lg">></span>
          </Link>
        </li>
        <li className="w-[360px] h-[204px] bg-[#F1F1F1] flex items-center justify-center flex-col rounded-lg">
          <img
            className="mt-[-80px] mb-[56px]"
            src="/image-removebg-preview(38).png"
            alt=""
          />
          <p className="text-bold font-[700] text-black">SPEAKERS</p>
          <Link to="/headphones" className="text-sm font-bold">
            SHOP <span className="text-[#D87D4A] text-lg">></span>
          </Link>
        </li>
        <li className="w-[360px] h-[204px] bg-[#F1F1F1] flex items-center justify-center flex-col rounded-lg">
          <img className="mt-[-80px] mb-[56px]" src="Group 5.png" alt="" />
          <p className="text-bold font-[700] text-black">EARPHONES</p>
          <Link to="/headphones" className="text-sm font-bold">
            SHOP <span className="text-[#D87D4A] text-lg">></span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Herobottom;
