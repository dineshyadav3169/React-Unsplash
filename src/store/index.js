import { createStore } from "redux";

const INITIALSTATE = {
  showMore: false,
  images: [],
  totalImages: -1,
  currentPage: 1,
};

const counterReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "setImages":
      return {
        showMore: state.showMore,
        images: action.images,
        totalImages: state.totalImages,
        currentPage: state.currentPage,
      };
    case "setShowMore":
      return {
        showMore: action.showMore,
        images: state.images,
        totalImages: state.totalImages,
        currentPage: state.currentPage,
      };
    case "setToatlImages":
      return {
        showMore: state.showMore,
        images: state.images,
        totalImages: action.totalImages,
        currentPage: state.currentPage,
      };
    case "setCurrentPage":
      return {
        showMore: state.showMore,
        images: state.images,
        totalImages: state.totalImages,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
