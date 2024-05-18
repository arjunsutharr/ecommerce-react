import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import {
  productActions,
  productSelector,
  updateProductDetails,
} from "../../redux/reducers/productReducer";
import { Pencil2Icon } from "@radix-ui/react-icons";

function UpdateProduct({ product }) {
  const dispatch = useDispatch();
  const { productDetailsForUpdate } = useSelector(productSelector);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Pencil2Icon
          onClick={() =>
            dispatch(productActions.setUpdatingProductDetails(product))
          }
          className="cursor-pointer"
        />
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Edit Product </Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Make changes to your product details.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
              defaultValue={product.title}
              placeholder="Enter product title"
              onChange={(e) =>
                dispatch(productActions.updateTitile(e.target.value))
              }
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description
            </Text>
            <TextArea
              defaultValue={product.description}
              placeholder="Enter product description"
              onChange={(e) =>
                dispatch(productActions.updateDescription(e.target.value))
              }
            />
          </label>
          <Flex justify={"between"}>
            <label className="w-48">
              <Text as="div" size="2" mb="1" weight="bold">
                Price
              </Text>
              <TextField.Root
                type="number"
                defaultValue={product.price}
                placeholder="Enter product price"
                onChange={(e) =>
                  dispatch(productActions.updatePrice(e.target.value))
                }
              />
            </label>
            <label className="w-48">
              <Text as="div" size="2" mb="1" weight="bold">
                Rating
              </Text>
              <TextField.Root
                type="number"
                defaultValue={product.rating}
                placeholder="Enter product price"
                onChange={(e) =>
                  dispatch(productActions.updateRating(e.target.value))
                }
              />
            </label>
          </Flex>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Image Url
            </Text>
            <TextField.Root
              defaultValue={product.img}
              placeholder="Enter product image url"
              onChange={(e) =>
                dispatch(productActions.updateImageUrl(e.target.value))
              }
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              onClick={() =>
                dispatch(updateProductDetails(productDetailsForUpdate))
              }
            >
              Save
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default UpdateProduct;
