import { useEffect, useState } from "react";
import Product from "./Product";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let result = await fetch("https://fakestoreapi.com/products");
      let data = await result.json();
      setData(data);
    };
    getData();
  }, []);

  const sortProducts = async (value) => {
    let result = await fetch(`https://fakestoreapi.com/products?sort=${value}`);
    let data = await result.json();
    setData(data);
  };

  const categoryProducts = async (category) => {
    let params = category ? `/category/${category}` : "";
    let result = await fetch(`https://fakestoreapi.com/products${params}`);
    let data = await result.json();
    setData(data);
  };

  return (
    <div className="content">
      <div className="filters">
        <select
          name="sorting"
          id=""
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>

        <select
          name="categories"
          id=""
          onChange={(e) => categoryProducts(e.target.value)}
        >
          <option value="">Select</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>

      <ul>
        {data.map((obj) => {
          return <Product value={obj} />;
        })}
      </ul>
    </div>
  );
};

export default Content;
