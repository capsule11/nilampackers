import React from "react";
import ProductLayout from "../../components/product-layout";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import SEO from "../../components/SEO";

const Specs = () => {
  const params = useParams();

  const prdName = params.prdName;

  const product = products.find((item) => item.name === prdName);
  console.log(product)

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [prdName]);

  return (
    <>
      <SEO 
        title={`${product.name} | Nilam Packers`} 
        description={`Details and specifications for ${product.name} manufactured by Nilam Packers in Varanasi.`}
        keywords={`buy ${product.name.toLowerCase()} varanasi, corrugated ${product.name.toLowerCase()}, ${product.name.toLowerCase()} manufacturer`}
      />
      <ProductLayout
        productName={product.name}
      productImage={product.image}
      productDescription={product.productDescription}
      specifications={product.specifications}
      features={product.features}
      relatedProducts={product.relatedProducts}
    />
    </>
  );
};
export default Specs;
