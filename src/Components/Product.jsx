const Product = (props) => {
  const { value } = props;
  const { title, description, image } = value;
  return (
    <li className="product">
      <div className="desc">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </li>
  );
};

export default Product;
