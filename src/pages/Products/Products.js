import React, { useEffect, useState } from "react";
import qs from "query-string";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { ProductCard } from "../../components";

const Products = () => {
  const [couponsData, setCouponsData] = React.useState([]);
  const queryparams = qs.parse(window.location.search);

  useEffect(() => {
    window.scrollTo(0, 0);
    getCoupons();
  }, []);
  const getCoupons = async () => {
    try {
      const result = await axios.get(
        "/api/v1/products?company=" + queryparams.company
      );
      setCouponsData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleProductClick = (productId) => {
    console.log(productId);
    history.push("/product/" + productId);
  };

  const history = useHistory();
  return (
    <div className="p-4">
      <ProductCard coupons={couponsData} getProductId={handleProductClick} />
    </div>
  );
};

export default Products;
