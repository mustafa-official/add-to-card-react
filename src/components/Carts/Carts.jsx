import PropTypes from "prop-types";
import { useState } from "react";

const Carts = ({ carts, handleBtn }) => {
  const { image, title, description, price } = carts;
  const [isClick, setIsClick] = useState(false);
  const clickHandle = () => {
    setIsClick(!isClick);
    
  };
  console.log(isClick);
  const handleMainBtn = ()=>{
    handleBtn(carts);
    clickHandle();
  }
  return (
    <div className={`space-y-4 shadow-2xl p-5 rounded-md ${isClick? 'bg-red-500':''}`}>
      <img className="w-[200px] mx-auto" src={image} alt="" />
      <h2>{title.slice(0, 10)}</h2>
      <h2>{description.slice(0, 100)}</h2>
      <div className="flex items-center gap-3">
        <p>Price: {price}</p>
        <button onClick={()=> handleMainBtn()}
          className="px-3 py-1 bg-lime-500 text-white rounded-md"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

Carts.propTypes = {
  carts: PropTypes.object,
  handleBtn: PropTypes.func,
};

export default Carts;
