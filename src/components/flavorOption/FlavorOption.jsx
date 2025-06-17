const FlavorOption = ({
  id,
  name,
  image,
  isBestSeller,
  selected,
  onChange,
  namePrefix = "flavor",
}) => {
  return (
    <div className={`bg-[#F9F9F9] w-full p-1 rounded-md relative`}>
      {isBestSeller && (
        <div className="bg-[#554835] absolute text-[8px] rounded-tl-sm rounded-br-sm px-2 right-0.5 -top-1.5 uppercase text-white font-semibold">
          best-seller
        </div>
      )}
      <label
        htmlFor={`${namePrefix}-${id}`}
        className="flex items-center gap-3 px-2"
      >
        <input
          type="radio"
          id={`${namePrefix}-${id}`}
          name={namePrefix}
          value={id}
          checked={selected}
          onChange={onChange}
          className="custom-radio h-3 w-3"
        />
        {name}
      </label>
      <img
        src={image}
        alt={name}
        className="w-14 justify-self-center mx-auto"
      />
    </div>
  );
};
export default FlavorOption;
