import { useState } from "react"

interface UseFetchingProps {
  callback: () => void;
}

export const useFecthing = (callback: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err: unknown) {
      if (typeof err === 'string') {
        setError(err)
      } else if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error] as const;
}