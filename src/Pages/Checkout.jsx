import React from "react";
import { useLocation, useNavigate } from "react-router";

const Checkout = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state || {};

  const subTotal = data
    .map((i) => i.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const discount =
    data
      .map((i) => i.orignalPrice)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0) -
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
    <div className="h-full w-full flex flex-col items-center px-10 py-10 font-Inter">
      <div className="w-6xl mt-3">
        <div
          className="flex items-center justify-between mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="bg-zinc-200 rounded-md p-0.5">
            <img src="back-arrow.png" alt="" className="size-6 " />
          </div>
          <h3 className="text-2xl font-bold">Cart</h3>
          <div></div>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-6">
          <div className="col-span-2 col-start-1">
            {data?.map((item) => (
              <div key={`${item.id}-${item.name}`}>
                <div className="bg-gray-200 flex-1 rounded-md px-8 py-3 flex gap-10 mb-4">
                  <img
                    src={item.image}
                    className="w-15 object-contain"
                    alt=""
                  />
                  <div className="flex-1 flex items-center justify-between">
                    <div className="w-1/2">
                      <h3 className="text-lg font-bold">{item.name} Drink</h3>
                      <p className="text-xs">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Morbi eu felis
                      </p>
                    </div>
                    <h6 className="font-bold">
                      ${item.price.toFixed(2)}
                      <span className="font-medium ml-2 line-through text-[#818181]">
                        ${item.orignalPrice.toFixed(2)}
                      </span>
                    </h6>
                  </div>
                </div>

                <div className="px-10 mb-4">
                  <h3 className="text-lg font-bold">Gifts with this product</h3>
                  <div className="flex items-center gap-4">
                    {randomTwo.map((ran) => (
                      <div className="mt-3 w-1/4 border rounded-sm flex flex-col items-center py-2">
                        <img src={ran.image} className="object-contain w-18 " />
                        <span className="text-md font-semibold capitalize">
                          {ran.name} drink
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-start-3 ">
            <div className="bg-gray-300 rounded-md p-4">
              <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-3 font-semibold">
                <div className="col-span-3 col-start-1">Subtotal:</div>
                <div className="col-start-4">${subTotal.toFixed(2)}</div>
              </div>

              <div className="grid grid-cols-4 grid-rows-1 gap-4 mb-3 font-semibold">
                <div className="col-span-3 col-start-1">Discount:</div>
                <div className="col-start-4">${discount.toFixed(2)}</div>
              </div>

              <div className="grid grid-cols-4 grid-rows-1 gap-4 font-semibold">
                <div className="col-span-3 col-start-1">Total:</div>
                <div className="col-start-4">
                  ${(subTotal + discount).toFixed(2)}
                </div>
              </div>

              <div className="mt-10">
                <h6 className="font-semibold">Estimated Delivery:</h6>
                <div className="flex items-center gap-3 mt-2">
                  <input
                    type="number"
                    className="bg-white/40 px-3 py-2 rounded text-sm number-hidden"
                    placeholder="Enter Pincode"
                  />
                  <button className="bg-black flex-1 h-max py-1.5 text-white rounded cursor-pointer">
                    Check
                  </button>
                </div>

                <h6 className="text-sm mt-8 pl-2 font-medium">
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
