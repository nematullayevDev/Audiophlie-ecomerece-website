import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="bg-[#0E0E0E] ">
      <div className="flex items-center justify-between max-container pt-6 pb-6 text-white  border-b border-white">
        <Link className="text-3xl font-bold tracking-widest  font-mono" to="/">
          <h2>audiophile</h2>
        </Link>
        <ul className="flex gap-7 font-mono">
          <li>
            <Link to="/">
              <p>HOME</p>
            </Link>
          </li>
          <li>
            <Link to="/headphones">
              <p>HEADPHONES</p>
            </Link>
          </li>
          <li>
            <Link to="/speakers">
              <p>SPEAKERS</p>
            </Link>
          </li>
          <li>
            <Link to="/earphones">
              <p>EARPHONES</p>
            </Link>
          </li>
        </ul>
        <div className="text-xl">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
