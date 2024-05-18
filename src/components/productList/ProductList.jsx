import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Flex, Section, Select, Text } from "@radix-ui/themes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../productCard/productCard";
import {
  getAllProducts,
  productActions,
  productSelector,
} from "../../redux/reducers/productReducer";
import { BounceLoader } from "react-spinners";
import SortProducts from "../sortProducts/SortProduct";

function ProductList() {
  const { products, loading, sortedProducts, error } =
    useSelector(productSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.setLoading(true));
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Section
      size={{
        initial: "1",
      }}
      className="z-0 p-3 "
    >
      {error && <Text>Something went wrong. Try later</Text>}
      {loading ? (
        <BounceLoader className="top-1/2 left-1/2 mt-52" />
      ) : (
        <div>
          <ToastContainer autoClose={5000} position="top-center" />

          <SortProducts />

          <Flex wrap={"wrap"} gap={"3"}>
            {sortedProducts.length > 0
              ? sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              : products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </Flex>
        </div>
      )}
    </Section>
  );
}

export default ProductList;
