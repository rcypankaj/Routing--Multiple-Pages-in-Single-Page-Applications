import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {
  const productParams = useParams();
  return (
    <>
      <h1>Product Details Page!</h1>
      <p>{productParams.id}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetails;
