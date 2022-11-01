import { useRange } from "react-instantsearch-hooks-web";

export default function MyComponent() {
  const { range } = useRange({ attribute: "followers" });
  console.log(range);
  return <>{JSON.stringify(range)}</>;
}
