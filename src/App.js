import { useState, useRef } from "react";
import SearchBar from "./components/SearchBox";
import ImagesBox from "./components/ImagesBox";
import LoadMore from "./components/LoadMore";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "ws9D_zlOs4PHV9wVje4nv00gszOwUp3m3IZ_L26PwuA",
});

function App() {
  const [images, setImages] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const searchQuery = useRef();

  return (
    <div className="boxContainer">
      <SearchBar
        unsplash={unsplash}
        searchQuery={searchQuery}
        setImages={setImages}
        setShowMore={setShowMore}
      />
      <ImagesBox images={images} />
      <LoadMore
        showMore={showMore}
        unsplash={unsplash}
        searchQuery={searchQuery}
        setShowMore={setShowMore}
        setImages={setImages}
      />
    </div>
  );
}

export default App;
