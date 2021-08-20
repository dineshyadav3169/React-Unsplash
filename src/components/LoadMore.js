import { useSelector, useDispatch } from "react-redux";

function LoadMore(props) {
  const images = useSelector((state) => state.images);
  const showMore = useSelector((state) => state.showMore);
  const currentPage = useSelector((state) => state.currentPage);
  const dispatch = useDispatch();

  const loadMoreHandler = () => {
    const pageToLoad = currentPage + 1;
    if (props.searchQuery.current.value === "") {
      props.unsplash.photos
        .list({
          page: pageToLoad,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            dispatch({
              type: "setImages",
              images: [...images, ...result.response.results],
            });
            dispatch({
              type: "setShowMore",
              showMore: result.response.total - 8 > 0,
            });
            dispatch({ type: "setCurrentPage", currentPage: currentPage + 1 });
          }
        });
    } else {
      props.unsplash.search
        .getPhotos({
          query: props.searchQuery.current.value,
          page: pageToLoad,
          perPage: 8,
        })
        .then((result) => {
          if (result.errors) {
            console.log("error occurred: ", result.errors[0]);
          } else {
            dispatch({
              type: "setImages",
              images: [...images, ...result.response.results],
            });
            dispatch({
              type: "setShowMore",
              showMore: result.response.total - 8 > 0,
            });
            dispatch({ type: "setCurrentPage", currentPage: currentPage + 1 });
          }
        });
    }
  };

  return (
    <>
      {showMore && (
        <div className="text-center">
          <button
            onClick={loadMoreHandler}
            className="loadMore bg-black p-2 px-4 text-white font-weight-bold rounded border-0"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}

export default LoadMore;
