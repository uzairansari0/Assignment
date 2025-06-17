import ImageGallery from "../components/imageGallery/ImageGallery";
import SubscriptionOption from "../components/subsriptionOption/SubscriptionOption";
import FlavorOption from "../components/flavorOption/FlavorOption";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import { useState } from "react";
import { useNavigate } from "react-router";
const Product = () => {
  const navigate = useNavigate();

  const [drinkType, setDrinkType] = useState("single");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFlavor, setSelectedFlavor] = useState({
    id: "chocolate",
    name: "Chocolate",
    image: "2.png",
    bestSeller: true,
    price: 6,
    orignalPrice: 10,
  });

  const [selectedFlavor1, setSelectedFlavor1] = useState({
    id: "chocolate",
    name: "Chocolate",
    image: "2.png",
    bestSeller: true,
    price: 6,
    orignalPrice: 10,
  });
  const [selectedFlavor2, setSelectedFlavor2] = useState({
    id: "chocolate",
    name: "Chocolate",
    image: "2.png",
    bestSeller: true,
    price: 6,
    orignalPrice: 10,
  });

  const [tryOnceType, setTryOnceType] = useState("single");

  const images = [
    "1.png",
    "2.png",
    "3.png",
    "1.png",
    "2.png",
    "3.png",
    "1.png",
    "2.png",
  ];

  const flavors = [
    {
      id: "chocolate",
      name: "Chocolate",
      image: "2.png",
      bestSeller: true,
      price: 6,
      orignalPrice: 10,
    },
    {
      id: "vanilla",
      name: "Vanilla",
      image: "1.png",
      bestSeller: false,
      price: 6,
      orignalPrice: 10,
    },
    {
      id: "orange",
      name: "Orange",
      image: "3.png",
      bestSeller: false,
      price: 6,
      orignalPrice: 10,
    },
  ];

  const productDetails = Array(5).fill(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );

  const onCartPage = () => {
    let data;
    if (drinkType == "single") {
      data = [selectedFlavor];
    } else if (drinkType == "double") {
      data = [selectedFlavor1, selectedFlavor2];
    } else {
      if (tryOnceType == "single") {
        data = [selectedFlavor];
      } else {
        data = [selectedFlavor1, selectedFlavor2];
      }
    }

    navigate("/checkout", {
      state: { data: data },
    });
  };

  return (
    <div className="h-full w-full flex justify-center px-10 py-12 font-Inter">
      <div className="w-6xl">
        <div className="grid grid-cols-2 grid-rows-1 gap-15">
          <div className="col-start-1">
            <ImageGallery
              images={images}
              currentIndex={currentImageIndex}
              setCurrentIndex={setCurrentImageIndex}
            />
          </div>

          <div className="col-start-2">
            <h3 className="text-2xl font-bold">Lorem ipsum</h3>
            <p className="text-xs my-1">⭐⭐⭐⭐ 4.6 (2,000+ reviews)</p>
            <p className="text-md my-1 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              felis vel ex aliquam interdum id nec orci. Fusce eu neque non elit
              efficitur dapibus quis in erat.
            </p>

            <SubscriptionOption
              type="single"
              title="Single Drink Subscription"
              price="6.00"
              originalPrice="10"
              selected={drinkType === "single"}
              onSelect={setDrinkType}
              recommended
            >
              <div className="ml-5 p-2 pl-0 border-t-2 mt-2">
                <h6 className="font-medium">Choose Flavor</h6>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {flavors.map((flavor) => (
                    <FlavorOption
                      key={flavor.id}
                      id={flavor.id}
                      name={flavor.name}
                      image={flavor.image}
                      isBestSeller={flavor.bestSeller}
                      selected={selectedFlavor.id === flavor.id}
                      onChange={() => setSelectedFlavor(flavor)}
                    />
                  ))}
                </div>

                <div className="mt-2">
                  <h6 className="font-medium">What's Included:</h6>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="border-[#919798] border rounded-sm w-1/3 p-2">
                      <span className="text-md font-light text-[#6F7577]">
                        Every 30 Days
                      </span>
                      <img
                        src="1.png"
                        alt="thumbnail"
                        className="w-14 object-contain justify-self-center mt-2"
                      />
                    </div>
                    <div className="border-[#919798] border rounded-sm w-3/4 p-2">
                      <span className="text-md font-light text-[#6F7577]">
                        One Time{" "}
                        <span className="text-[#D0AF80] font-medium">
                          (Free)
                        </span>
                      </span>
                      <div className="flex items-center justify-evenly">
                        {images.slice(0, 3).map((item, index) => (
                          <img
                            key={index}
                            src={item}
                            alt="thumbnail"
                            className="w-14 object-contain justify-self-center mt-2"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <ProductDetails details={productDetails} />
              </div>
            </SubscriptionOption>

            <SubscriptionOption
              type="double"
              title="Double Drink Subscription"
              price="12.00"
              originalPrice="20"
              selected={drinkType === "double"}
              onSelect={setDrinkType}
            >
              <div className="ml-5 p-2 pl-0 border-t-2 mt-2">
                <h6 className="font-medium">Choose Flavor 1</h6>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {flavors.map((flavor) => (
                    <FlavorOption
                      key={`flavor1-${flavor.id}`}
                      id={`flavor1-${flavor.id}`}
                      name={flavor.name}
                      image={flavor.image}
                      isBestSeller={flavor.bestSeller}
                      selected={selectedFlavor1.id === flavor.id}
                      onChange={() => setSelectedFlavor1(flavor)}
                      namePrefix="flavor1"
                    />
                  ))}
                </div>

                <h6 className="font-medium mt-4">Choose Flavor 2</h6>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {flavors.map((flavor) => (
                    <FlavorOption
                      key={`flavor2-${flavor.id}`}
                      id={`flavor2-${flavor.id}`}
                      name={flavor.name}
                      image={flavor.image}
                      isBestSeller={flavor.bestSeller}
                      selected={selectedFlavor2.id === flavor.id}
                      onChange={() => setSelectedFlavor2(flavor)}
                      namePrefix="flavor2"
                    />
                  ))}
                </div>

                <div className="mt-2">
                  <h6 className="font-medium">What's Included:</h6>
                  <div className="mt-3 flex items-center gap-4">
                    <div className="border-[#919798] border rounded-sm w-1/3 p-2">
                      <span className="text-md font-light text-[#6F7577]">
                        Every 30 Days
                      </span>
                      <img
                        src="1.png"
                        alt="thumbnail"
                        className="w-14 object-contain justify-self-center mt-2"
                      />
                    </div>
                    <div className="border-[#919798] border rounded-sm w-3/4 p-2">
                      <span className="text-md font-light text-[#6F7577]">
                        One Time{" "}
                        <span className="text-[#D0AF80] font-medium">
                          (Free)
                        </span>
                      </span>
                      <div className="flex items-center justify-evenly">
                        {images.slice(0, 3).map((item, index) => (
                          <img
                            key={index}
                            src={item}
                            alt="thumbnail"
                            className="w-14 object-contain justify-self-center mt-2"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <ProductDetails details={productDetails} />
              </div>
            </SubscriptionOption>

            <SubscriptionOption
              type="once"
              title="Try Once"
              price="8.00"
              originalPrice="10"
              selected={drinkType === "once"}
              onSelect={setDrinkType}
            >
              <div className="ml-5 p-2 pl-0 border-t-2 mt-2">
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      className="custom-radio h-4 w-4"
                      checked={tryOnceType === "single"}
                      onChange={() => setTryOnceType("single")}
                    />
                    <label className="font-light text-lg">Single Drink</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      className="custom-radio h-4 w-4"
                      checked={tryOnceType === "double"}
                      onChange={() => setTryOnceType("double")}
                    />
                    <label className="font-light text-lg">Double Drink</label>
                  </div>
                </div>
                <h6 className="font-medium">
                  Choose Flavor {tryOnceType === "double" && "1"}
                </h6>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  {flavors.map((flavor) => (
                    <FlavorOption
                      key={flavor.id}
                      id={flavor.id}
                      name={flavor.name}
                      image={flavor.image}
                      isBestSeller={flavor.bestSeller}
                      selected={
                        tryOnceType === "single"
                          ? selectedFlavor.id === flavor.id
                          : selectedFlavor1.id === flavor.id
                      }
                      onChange={() => {
                        tryOnceType === "single"
                          ? setSelectedFlavor(flavor)
                          : setSelectedFlavor1(flavor);
                      }}
                      namePrefix="flavor1"
                    />
                  ))}
                </div>
                {tryOnceType === "double" && (
                  <>
                    <h6 className="font-medium">Choose Flavor 2</h6>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      {flavors.map((flavor) => (
                        <FlavorOption
                          key={flavor.id}
                          id={flavor.id}
                          name={flavor.name}
                          image={flavor.image}
                          isBestSeller={flavor.bestSeller}
                          selected={selectedFlavor2.id === flavor.id}
                          onChange={() => setSelectedFlavor2(flavor)}
                          namePrefix="flavor2"
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </SubscriptionOption>

            <button
              onClick={onCartPage}
              className="mt-5 bg-black w-full text-white py-2 rounded-full font-semibold hover:bg-black/70 slow-transition cursor-pointer"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
