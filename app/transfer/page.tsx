import useTransfer from "../../hooks/useTransfer";

export default function Transfer() {
  const { myOutput } = useTransfer({
    sender: "Alice",
    receiver: "Bob",
    amount: 100,
  });
  return <div>{myOutput}</div>;
}
