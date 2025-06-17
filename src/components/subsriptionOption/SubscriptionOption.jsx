const SubscriptionOption = ({
  type,
  title,
  price,
  originalPrice,
  selected,
  onSelect,
  children,
  recommended
}) => {
  return (
    <div className={`mt-2 border rounded-sm ${selected ? "border-black/20" : ""}`}>
      {recommended && (
        <div className="bg-[#A2845E] text-center py-1 font-semibold text-white rounded-tl-sm rounded-tr-sm">
          Recommended
        </div>
      )}
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              className="custom-radio"
              checked={selected}
              onChange={() => onSelect(type)}
            />
            <label className="font-light text-lg">{title}</label>
          </div>
          <h6 className="font-bold">
            ${price}
            <span className="font-light ml-2 line-through text-[#bbb9b9]">
              ${originalPrice}
            </span>
          </h6>
        </div>
        {selected && children}
      </div>
    </div>
  );
};
export default SubscriptionOption;
