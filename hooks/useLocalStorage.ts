import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  
  const [value, setValue] = useState<T>(() => {
    const jsonValue = getCookie(key) // localStorage.getItem(key);
    if (jsonValue != null && typeof jsonValue !== 'boolean') {
      return JSON.parse(jsonValue);
    }

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  })

  useEffect(() => {
    setCookies(key, JSON.stringify(value), {sameSite: true})
    console.log(value)
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}