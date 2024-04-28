import { useState } from "react";

interface UseMutaionState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutaionStateResult = [(data: any) => void, UseMutaionState];

export default function useMutaion(url: string): UseMutaionStateResult {
  const [state, setState] = useState<UseMutaionState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }
  return [mutation, { ...state }];
}
