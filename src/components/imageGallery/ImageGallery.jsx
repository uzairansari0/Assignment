const ImageGallery = ({ images, currentIndex, setCurrentIndex }) => {
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="bg-[#F9F9F9] p-4 pb-2 rounded-md flex justify-center flex-col">
        <div className="flex justify-center">
          <img
            src={images[currentIndex]}
            alt=""
            className="w-full max-h-96 object-contain"
          />
        </div>

        <div className="flex items-center justify-between py-2">
          <button
            onClick={goToPrevious}
            className="hover:bg-black/10 rounded-md p-1"
          >
            <img
              src="back-arrow.png"
              alt="previous"
              className="w-5 object-contain"
            />
          </button>
          <div className="flex gap-2 mx-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-300"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={goToNext}
            className="hover:bg-black/10 rounded-md p-1"
          >
            <img
              src="back-arrow.png"
              alt="next"
              className="w-5 object-contain rotate-180"
            />
          </button>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 justify-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-[#F9F9F9] w-max px-8 py-1 rounded-md cursor-pointer ${
              currentIndex === index ? "ring ring-zinc-200 shadow-sm" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={image}
              alt={`thumbnail ${index}`}
              className="w-8 object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
};
export default ImageGallery;
