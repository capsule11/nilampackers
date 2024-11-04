import React from "react";
import ProductLayout from "../../components/product-layout";
import { useParams } from "react-router-dom";
import products from "../../data/products";

const Specs = () => {
  const params = useParams();

  const prdName = params.prdName;

  const product = products.find((item) => item.name === prdName);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [prdName]);

  return (
    <ProductLayout
      productName={product.name}
      productImage="https://placehold.co/600x400"
      productDescription={product.productDescription}
      specifications={product.specifications}
      features={product.features}
      relatedProducts={product.relatedProducts}
    />
  );
};

export default Specs;
