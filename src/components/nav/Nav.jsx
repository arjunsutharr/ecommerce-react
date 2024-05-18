import { TabNav, Text } from "@radix-ui/themes";
import AddProduct from "../addProduct/AddProduct";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/reducers/cartReducer";

function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart } = useSelector(cartSelector);

  return (
    <div className="sticky top-0 z-10">
      <TabNav.Root size="2" className="bg-white">
        <TabNav.Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          eCommerce
        </TabNav.Link>
        <TabNav.Link
          href="/"
          active={location.pathname === "/"}
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          Products
        </TabNav.Link>
        <TabNav.Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <AddProduct />
        </TabNav.Link>
        <TabNav.Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="relative "
        >
          Cart
          {cart.length > 0 && (
            <Text className="absolute -right-0 top-0  bg-amber-900 rounded-full text-white ps-1 pe-1 text-xs">
              {cart.length}
            </Text>
          )}
        </TabNav.Link>
      </TabNav.Root>
    </div>
  );
}

export default Nav;
