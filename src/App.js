import { useRef } from "react";
import SearchBar from "./components/SearchBox";
import ImagesBox from "./components/ImagesBox";
import LoadMore from "./components/LoadMore";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: "ws9D_zlOs4PHV9wVje4nv00gszOwUp3m3IZ_L26PwuA",
});

function App() {
  const searchQuery = useRef();

  return (
    <div className="boxContainer">
      <SearchBar unsplash={unsplash} searchQuery={searchQuery} />
      <ImagesBox />
      <LoadMore unsplash={unsplash} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
