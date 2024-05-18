import { Button, Section, Text } from "@radix-ui/themes";
import { ErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

export function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  return (
    <Section height="100vh" className="bg-white dark:bg-gray-500">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Text
            as="p"
            color="bronze"
            className="dark:text-primary-500 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl"
          >
            500
          </Text>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Internal Server Error.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Sorry something went wrong.
          </p>
          <Button
            onClick={() => {
              resetErrorBoundary();
              navigate("/");
            }}
          >
            Take Me To Home
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ErrorBoundaryWall({ children }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}

export default ErrorBoundaryWall;
