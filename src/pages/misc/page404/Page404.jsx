import { Box, Button, Strong, Text } from "@radix-ui/themes";
import { useLocation, useNavigate } from "react-router-dom";

function Page404() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
      <Box className="text-center">
        <Text color="bronze" className="text-base font-semibold ">
          404
        </Text>
        <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">
          Page not found
        </h1>
        <Text as="p" className="mt-6 text-gray-600">
          Sorry, we couldn’t find the page <Strong>{location.pathname}</Strong>{" "}
          you’re looking for.
        </Text>
        <Button
          onClick={() => navigate("/")}
          className="cursor-pointer  mt-10 "
        >
          Take Me Back To home
        </Button>
      </Box>
    </main>
  );
}

export default Page404;
