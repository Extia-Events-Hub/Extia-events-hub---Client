import { useState, useEffect } from "react";

const useFetchService = (serviceFunction, ...args) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await serviceFunction(...args);
        setResponse(res.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [serviceFunction, args]);

  return { response, loading, error };
};

export default useFetchService;
