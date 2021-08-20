import { useRef } from "react";
import SearchBar from "./components/SearchBox";
import ImagesBox from "./components/ImagesBox";
import LoadMore from "./components/LoadMore";
import { createApi } from "unsplash-js";

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
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
