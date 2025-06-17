const ProductDetails = ({ details }) => {
  return (
    <div className="mt-3">
      {details.map((item, index) => (
        <p
          key={index}
          className={`mb-1 ${
            index === 1 || index === 2 ? "font-medium" : "font-light"
          }`}
        >
          ✓ {item}
        </p>
      ))}
    </div>
  );
};

export default ProductDetails;
