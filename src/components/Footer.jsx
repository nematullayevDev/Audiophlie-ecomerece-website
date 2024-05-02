import Herobottom from "./Products";
import Allfooter from "./Allfooter";

function Footer() {
  return (
    <div className=" bg-[#0E0E0E] w-full h-[365px] ">
      <div className="pt-20">
        <Allfooter />
        <div className="flex items-center justify-between max-container pt-6 pb-6 ">
          <div className="paragraph">
            <p className="w-[540px] h-[100px]">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>

            <p className="">Copyright 2021. All Rights Reserved</p>
          </div>
          <div className="icons flex gap-4">
            <img className="cursor-pointer" src="icon-facebook.svg" alt="" />
            <img className="cursor-pointer" src="icon-instagram.svg" alt="" />
            <img className="cursor-pointer" src="icon-twitter.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
