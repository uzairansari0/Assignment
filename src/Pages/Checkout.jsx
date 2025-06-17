import React from "react";
import { useLocation, useNavigate } from "react-router";

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};

  const subTotal = data
    ?.map((i) => i.price)
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0) || 0;

  const discount =
    (data
      ?.map((i) => i.orignalPrice)
      ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0) || 0) -
    subTotal;

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

  const shuffled = [...flavors].sort(() => 0.5 - Math.random());
  const randomTwo = shuffled.slice(0, 2);

  return (
    <div className="min-h-screen w-full flex flex-col items-center px-4 md:px-10 py-6 md:py-10 font-Inter">
      <div className="w-full max-w-6xl mt-3">
        {/* Header with back button */}
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="bg-zinc-200 rounded-md p-0.5">
            <img src="back-arrow.png" alt="" className="size-6" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold">Cart</h3>
          <div className="w-6"></div> {/* Spacer for alignment */}
        </div>

        {/* Main content grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
          {/* Left column - Cart items */}
          <div className="lg:col-span-2">
            {data?.map((item) => (
              <div key={`${item.id}-${item.name}`} className="mb-6">
                {/* Cart item */}
                <div className="bg-gray-200 rounded-md px-4 md:px-8 py-3 flex flex-col sm:flex-row gap-4">
                  <img
                    src={item.image}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-contain self-center"
                    alt=""
                  />
                  <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="sm:w-1/2">
                      <h3 className="text-lg font-bold">{item.name} Drink</h3>
                      <p className="text-xs text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                    <div className="text-right">
                      <h6 className="font-bold">
                        ${item.price.toFixed(2)}
                        <span className="font-medium ml-2 line-through text-gray-500">
                          ${item.orignalPrice.toFixed(2)}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>

                {/* Gifts section */}
                <div className="px-2 md:px-10 mt-4">
                  <h3 className="text-lg font-bold">Gifts with this product</h3>
                  <div className="flex flex-wrap gap-4 mt-3">
                    {randomTwo.map((ran, index) => (
                      <div 
                        key={`gift-${index}`}
                        className="w-full sm:w-[calc(50%-1rem)] md:w-1/4 border rounded-sm flex flex-col items-center py-2"
                      >
                        <img 
                          src={ran.image} 
                          className="object-contain w-16 h-16" 
                          alt={ran.name} 
                        />
                        <span className="text-sm md:text-md font-semibold capitalize mt-2">
                          {ran.name} drink
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Order summary */}
          <div className="lg:col-start-3 mt-6 lg:mt-0">
            <div className="bg-gray-200 rounded-md p-4 sticky top-4">
              <div className="grid grid-cols-4 gap-4 mb-3 font-semibold">
                <div className="col-span-3">Subtotal:</div>
                <div className="text-right">${subTotal.toFixed(2)}</div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-3 font-semibold">
                <div className="col-span-3">Discount:</div>
                <div className="text-right">${discount.toFixed(2)}</div>
              </div>

              <div className="grid grid-cols-4 gap-4 font-semibold border-t pt-3">
                <div className="col-span-3">Total:</div>
                <div className="text-right">${(subTotal + discount).toFixed(2)}</div>
              </div>

              <div className="mt-6">
                <h6 className="font-semibold">Estimated Delivery:</h6>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <input
                    type="number"
                    className="bg-white px-3 py-2 rounded text-sm flex-1"
                    placeholder="Enter Pincode"
                  />
                  <button className="bg-black text-white py-2 px-4 rounded cursor-pointer sm:w-auto">
                    Check
                  </button>
                </div>

                <h6 className="text-sm mt-4 font-medium">
                  Estimated Delivery in 4 days
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
