import { useEffect, useState } from "react";
import { getCookie, setCookies } from "cookies-next"

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Create use state
  const [value, setValue] = useState<T>(() => {
    // Grab cookies
    const jsonValue = getCookie(key) // localStorage.getItem(key);
    // Parse cookies
    if (jsonValue != null && typeof jsonValue !== 'boolean') {
      return JSON.parse(jsonValue);
    }

    // Return init value
    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  })

  // Every time the key or value is changed
  useEffect(() => {
    // Update the cookies
    setCookies(key, JSON.stringify(value), {sameSite: true})
    // Log the cookies
    console.log(value)
  }, [key, value])

  // Return the value as a use state
  return [value, setValue] as [typeof value, typeof setValue]
}