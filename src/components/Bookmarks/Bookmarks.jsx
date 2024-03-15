import PropTypes from "prop-types";

const Bookmarks = ({ bookmark, index,handleDelete }) => {
  const { title, price } = bookmark;

  return (
    <div className="p-5">
      <div className="flex justify-between items-center gap-2">
        <h2>
          {index + 1}. {title}
        </h2>
        <h2>{price}</h2>
        <button onClick={()=>handleDelete(bookmark)} className="px-3 bg-red-500 text-white rounded-sm">
          Delete
        </button>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  Bookmarks: PropTypes.func,
  bookmark: PropTypes.object,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
};

export default Bookmarks;
