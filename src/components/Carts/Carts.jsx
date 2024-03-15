import PropTypes from "prop-types";

const Carts = ({ carts, handleBtn }) => {
  const { image, title, description, price } = carts;
  return (
    <div className="space-y-4 shadow-2xl p-5 rounded-md">
      <img className="w-[200px] mx-auto" src={image} alt="" />
      <h2>{title.slice(0, 10)}</h2>
      <h2>{description.slice(0, 100)}</h2>
      <div className="flex items-center gap-3">
        <p>Price: {price}</p>
        <button
          onClick={() => handleBtn(carts)}
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
