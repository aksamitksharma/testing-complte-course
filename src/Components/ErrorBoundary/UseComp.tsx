import { useEffect } from "react";
import useErrorHandler from "./CustomError";

const UseComp = () => {
  const [error, handleError] = useErrorHandler(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("https://jsonplaceholders.typicode.com/users")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch(() => new Error("Unknown error occurred"));
        // Assuming result is being handled properly here
        // Handle the result
      } catch (error) {
        if (error instanceof Error) {
          handleError(error);
        } else {
          handleError(new Error("Unknown error occurred"));
        }
      }
    };

    fetchData();
  }, [handleError]);

  if (error) return <div>Error occurred: {error.message}</div>;

  return <div>Data will be loaded here</div>;
};

export default UseComp;
