import { useCallback, useEffect, useState } from "react";

async function sendHttpRequest(url, config) {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    // console.log("first");
    throw new Error(resData.message || "Something went wrong");
  } else {
    // console.log("second");
    return resData;
  }
}

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function sendRequest(url, config) {
      setIsLoading(true);
      try {
        const response = await sendHttpRequest(url, config);
        // console.log("third");
        setData(response);
      } catch (error) {
        setError(error.message);
        // console.log("fourth");
        console.log(error);
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest(url, config);
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
  };
}
