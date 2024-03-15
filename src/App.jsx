import { useEffect } from "react";
import { useState } from "react";
import Carts from "./components/Carts/Carts";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [carts, setCarts] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  useEffect(() => {
    fetch("./cartInfo.json")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);
  const handleBtn = (data) => {
    const existCart = bookmark.find((b) => b.id == data.id);
    if (!existCart) {
      setBookmark([...bookmark, data]);
      toast.success("Added Successfully");
    } else {
      toast.warn("Already Selected!");
    }
  };

  const handleDelete = (info) => {
    const deleteItem = bookmark.filter((b) => b.id !== info.id);
    setBookmark(deleteItem);
    toast.success(`Deleted ${info.title.slice(0, 10)}`);
    console.log(deleteItem);
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:w-[80%] w-full">
          {carts.map((allCart) => (
            <Carts
              key={allCart.id}
              handleBtn={handleBtn}
              carts={allCart}
            ></Carts>
          ))}
        </div>
        <div className="lg:w-[20%] w-full">
          <div className="flex gap-12 p-5">
            <h2>Name</h2>
            <h2>Price</h2>
          </div>
          {bookmark.map((data, index) => (
            <Bookmarks
              bookmark={data}
              key={data.id}
              index={index}
              handleDelete={handleDelete}
            ></Bookmarks>
          ))}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
