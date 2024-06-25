function Product({ product_desc }) {
  return (
    <>
      <div>{product_desc.name}</div>
      <div>{product_desc.color}</div>
      <div>{product_desc.length}</div>
    </>
  );
}

export default Product;
