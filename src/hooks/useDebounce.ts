import { useEffect, useState } from "react";

const useDebounce = (searchTerm: string, ms: number) => {
  const [debouncedTerm, setDebouncedTerm] = useState<string>("");

  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, ms);

    return () => clearTimeout(timeout);
  }, [searchTerm, ms]);

  return { debouncedTerm, setDebouncedTerm };
};

export default useDebounce;
