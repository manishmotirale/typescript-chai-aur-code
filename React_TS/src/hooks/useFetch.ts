import { useEffect, useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {
  const [state, setstate] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  // useEffect To make Fetch request
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: T = await response.json();
        setstate({ data, loading: false, error: null });
      } catch (error: any) {
        setstate({ data: null, loading: false, error: error.message });
      }
    };
    fetchData();
  }, [url]);

  return state;
}
