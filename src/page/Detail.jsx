import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FooterBoy from "../components/FooterBoy";
import Herobottom from "../components/Products";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../features/product/productsSlice";
function Detail() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/xx99-mark-two-headphones")
      .then((res) => res.json())
      .then((datad) => setData(datad));
  }, []);
  console.log(data?.amount);
  return (
    <div>
      <div className="xx99 min-container  flex  items-center mb-[160px] mt-[160px]">
        <div className="bg-[#F1F1F1] w-[540px] h-[560px] flex items-center justify-center mr-[125px]">
          <img src="image-removebg-preview(47).png" alt="" />
        </div>
        <div className="text-black ">
          <h4 className="font-400 text-2xl   mb-[24px] text-[#D87D4A]">
            N E W P R O D U C T
          </h4>
          <h2 className="w-[396px] text-[56px] font-bold leading-[56px] mb-[24px]">
            {data?.name}
          </h2>
          <p className="w-[445px] text-[15px] font-medium opacity-50 mb-[40px]">
            {data?.description}
          </p>
          <p className="">$ {data?.price / 100}</p>

          <div className="mt-[47px] w-[400px] flex gap-6">
            <div className="counter bg-[#F1F1F1] w-[150px] flex justify-center gap-6 p-[15px]">
              <button onClick={() => dispatch(decrement(data?.amount))}>
                -
              </button>
              <span>{data?.amount}</span>
              <button onClick={() => dispatch(increment(data?.amount))}>
                +
              </button>
            </div>
            <Link
              to="/detail#name"
              className="bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
            >
              ADD TO CART
            </Link>
          </div>
        </div>
      </div>
      <div className="min-container  flex  mb-[160px] mt-[160px] gap-[130px] ">
        <div className="features">
          <h2 className="text-[#000000] font-bold text-[32px]">FEATURES</h2>
          <p className="features-p w-[636px] font-normal text-[15px] mt-[32px]">
            {data.features}
          </p>
        </div>

        <div className="inthebox">
          <h2 className="text-black font-bold text-[32px]">IN THE BOX</h2>
          <div className="">
            <div className="mt-[32px] ">
              <span className="text-[#D87D4A] font-bold mr-[24px]">1X</span>
              <span className="">Headphone Unit</span>
            </div>
            <div className="gap-[8px]">
              <span className="text-[#D87D4A] font-bold mr-[24px]">2X</span>{" "}
              <span>Replacement Earcupst</span>
            </div>
            <div>
              <span className="text-[#D87D4A] font-bold mr-[24px]">1X</span>
              <span>User Manual</span>
            </div>
            <div>
              <span className="text-[#D87D4A] font-bold mr-[24px]">1X</span>
              <span>3.5mm 5m Audio Cable</span>
            </div>
            <div>
              <span className="text-[#D87D4A] font-bold mr-[24px]">1X</span>
              <span>Travel Bag</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" min-container  flex  items-center gap-[30px] mb-[160px]">
        <div className="two-photo">
          <img
            className="mb-[32px] rounded-lg"
            width={445}
            src="image-gallery-1.jpg"
            alt=""
          />
          <img width={445} src="image-gallery-3.jpg" alt="" />
        </div>
        <div className="w-[636px]">
          <img src="image-gallery-2.jpg" alt="" />
        </div>
      </div>

      <div className="products2  min-container  flex  items-center mt-6">
        <div className=" w-[1280px] flex justify-center gap-6">
          <div className="felx justify-center flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#f1f1f1] w-[350px] h-[318px] rounded-lg flex items-center justify-center ">
                <img width={148} src="image-removebg-preview(41).png" alt="" />
              </div>

              <div className="flex justify-center mt-[40px] mb-[40px]">
                <h4 className="text-black font-bold text-[24px]">
                  XX99 MARK I
                </h4>
              </div>
              <Link
                to="/detail#name"
                className="w-[180px] bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="felx justify-center flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#f1f1f1] w-[350px] h-[318px] rounded-lg flex items-center justify-center ">
                <img width={148} src="image-removebg-preview(48).png" alt="" />
              </div>

              <div className="flex justify-center mt-[40px] mb-[40px]">
                <h4 className="text-black font-bold text-[24px]">XX59</h4>
              </div>
              <Link
                to="/detail#name"
                className="w-[180px] bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="felx justify-center flex-col">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-[#f1f1f1] w-[350px] h-[318px] rounded-lg flex items-center justify-center ">
                <img width={148} src="image-removebg-preview(38).png" alt="" />
              </div>

              <div className="flex justify-center mt-[40px] mb-[40px]">
                <h4 className="text-black font-bold text-[24px]">
                  ZX9 SPEAKER
                </h4>
              </div>
              <Link
                to="/detail#name"
                className="w-[180px] bg-[#D87D4A] py-[15px] px-[30px] text-white hover:bg-[#FBAF85] transition duration-100 font-bold"
              >
                SEE PRODUCT
              </Link>
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

export default Detail;
