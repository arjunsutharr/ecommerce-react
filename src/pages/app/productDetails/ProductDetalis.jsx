import {
  Box,
  Button,
  Container,
  Flex,
  Inset,
  Strong,
  Text,
} from "@radix-ui/themes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getOneProduct,
  productActions,
  productSelector,
} from "../../../redux/reducers/productReducer";
import { BounceLoader } from "react-spinners";
import Page404 from "../../misc/page404/Page404";
import { addToCart } from "../../../redux/reducers/cartReducer";

function ProductDetails() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { singleProduct, error, loading } = useSelector(productSelector);

  useEffect(() => {
    dispatch(productActions.setLoading(true));
    dispatch(getOneProduct(productId));
  }, []);

  return (
    <Container
      size={{
        initial: "2",
        md: "4",
      }}
      className="z-0 mt-20"
    >
      {loading && <BounceLoader className="top-1/2 left-1/2 mt-52" />}
      {error && <Page404 />}
      {singleProduct && (
        <Flex gap={"9"} wrap={"wrap"} p={"5"}>
          <Box className="w-full md:w-1/3 md:max-w-1/2 bg-gray-200">
            <Inset clip="padding-box" p="current" className=" w-100">
              <Flex justify={"center"}>
                <img
                  src={singleProduct.img}
                  style={{
                    display: "block",
                    objectFit: "contain",
                  }}
                />
              </Flex>
            </Inset>
          </Box>
          <Box className="w-full md:w-1/2">
            <Text mt={"5"} as="p">
              <Strong>{singleProduct.title}</Strong>
            </Text>
            <Text mt={"5"} as="p">
              {singleProduct.description}
            </Text>
            <Text mt={"5"} as="p">
              Price: {singleProduct.price}
            </Text>
            <Text mt={"5"} as="p">
              Rating: {singleProduct.rating} ⭐
            </Text>
            <Button
              onClick={() => dispatch(addToCart(singleProduct))}
              className="cursor-pointer"
              mt={"5"}
            >
              Add To Cart
            </Button>
          </Box>
        </Flex>
      )}
    </Container>
  );
}

export default ProductDetails;
