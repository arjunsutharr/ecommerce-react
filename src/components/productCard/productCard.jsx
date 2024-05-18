import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  IconButton,
  Inset,
  Separator,
  Text,
} from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/reducers/productReducer";
import UpdateProduct from "../updateProduct/UpdateProduct";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../redux/reducers/cartReducer";
import { StarFilledIcon, TrashIcon } from "@radix-ui/react-icons";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Box
      width={{
        initial: "44vw",
        sm: "23vw",
      }}
    >
      <Card size="1">
        <Flex mb="2" position="relative">
          <Box
            height="40vh"
            p="1"
            className="cursor-pointer w-full"
            onClick={(e) => {
              e.preventDefault();
              navigate(`products/${product.id}`);
            }}
          >
            <Inset clip="padding-box" p="1">
              <Flex justify={"center"} align={"center"}>
                <img
                  src={product.img}
                  alt={product.title}
                  style={{
                    display: "block",
                    objectFit: "contain",
                    height: "40vh",
                  }}
                />
              </Flex>
            </Inset>
          </Box>

          <Flex
            align="center"
            justify="center"
            position="absolute"
            bottom="0"
            right="0"
            width="32px"
            height="32px"
            style={{ borderRadius: "var(--radius-3)" }}
            m="2"
          >
            <IconButton
              onClick={() => dispatch(removeProduct(product.id))}
              className="cursor-pointer"
              size="2"
              mr={"2"}
              color="gray"
              variant="ghost"
            >
              <TrashIcon />
            </IconButton>
            <IconButton size="2" color="gray" variant="ghost">
              <UpdateProduct product={product} />
            </IconButton>
          </Flex>
        </Flex>

        <Flex
          className="cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            navigate(`products/${product.id}`);
          }}
          align="end"
          justify="between"
          mb="2"
        >
          <Box>
            <Heading
              as="h5"
              size="2"
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                // maxWidth: "28vw", // Adjust maxWidth as needed
              }}
              className="w-20  sm:w-96"
            >
              {product.title}
            </Heading>
          </Box>

          <Text as="div" size="2" weight="bold">
            ₹ {product.price}
          </Text>
        </Flex>

        <Flex align={"center"}>
          Rating: {product.rating} <StarFilledIcon />
        </Flex>

        <Box>
          <Separator size="4" my="4" />
        </Box>

        <Flex gap="2" align="end">
          <Button
            onClick={() => dispatch(addToCart(product))}
            className="w-full cursor-pointer"
            size="2"
            variant="solid"
            highContrast
          >
            Add to cart
          </Button>
        </Flex>
      </Card>
    </Box>
  );
}

export default ProductCard;
