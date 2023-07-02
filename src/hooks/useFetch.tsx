import { useEffect, useState } from "react";
import { SanityClient } from "@sanity/client";

interface FetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export const useFetch = <T,>(
  client: SanityClient,
  query: string
): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: T = await client.fetch(query);
        setData(response);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data from Sanity");
        setLoading(false);
      }
    };

    fetchData();
  }, [client, query]);

  return { data, isLoading, error };
};
