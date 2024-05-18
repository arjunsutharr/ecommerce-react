import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import {
  addProduct,
  productActions,
  productSelector,
} from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";

function AddProduct() {
  const dispatch = useDispatch();
  const { productDetailsForUpdate } = useSelector(productSelector);
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <p className="cursor-pointer">Add Product</p>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Add Product </Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add new product.
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Name
            </Text>
            <TextField.Root
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
              placeholder="Enter product description"
              onChange={(e) =>
                dispatch(productActions.updateDescription(e.target.value))
              }
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Price
            </Text>
            <TextField.Root
              type="number"
              placeholder="Enter product price"
              onChange={(e) =>
                dispatch(productActions.updatePrice(e.target.value))
              }
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Image Url
            </Text>
            <TextField.Root
              placeholder="Enter product image url"
              onChange={(e) =>
                dispatch(productActions.updateImageUrl(e.target.value))
              }
            />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button className="cursor-pointer" variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button
              className="cursor-pointer"
              onClick={() => dispatch(addProduct(productDetailsForUpdate))}
            >
              Add Product
            </Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default AddProduct;
