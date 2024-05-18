import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { Box, Flex, Select } from "@radix-ui/themes";
import { useDispatch } from "react-redux";
import { productActions } from "../../redux/reducers/productReducer";

function SortProducts(params) {
  const dispatch = useDispatch();
  return (
    <Box mb={"3"}>
      <Select.Root
        onValueChange={(value) => dispatch(productActions.sortProducts(value))}
      >
        <Select.Trigger placeholder="Sort Products" />
        <Select.Content>
          <Select.Group>
            <Select.Item value="priceAccending">
              <Flex gap={"2"} align={"center"}>
                Sort By Price
                <ArrowUpIcon />
              </Flex>
            </Select.Item>
            <Select.Item value="priceDecending">
              <Flex gap={"2"} align={"center"}>
                Sort By Price
                <ArrowDownIcon />
              </Flex>
            </Select.Item>
            <Select.Item value="reset">Reset</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Box>
  );
}

export default SortProducts;
