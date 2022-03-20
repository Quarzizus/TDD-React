import { useState } from "react";

const useFetchPost = (data = {}, endpoint = "") => {
  const [loading, setLoading] = useState(false);
  const submitData = async () => {
    setLoading(true);
    await fetch("/products", {
      method: "POST",
      body: data,
    });
    setLoading(false);
  };
  return { submitData, loading };
};

export { useFetchPost };
