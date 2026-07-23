import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export default function useSanityQuery(query) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(query)
      .then((res) => setData(res))
      .finally(() => setLoading(false));
  }, [query]);

  return { data, loading };
}
