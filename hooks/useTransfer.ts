interface transferInputData {
  sender: string;
  receiver: string;
  amount: number;
}

export default function useTransfer({
  sender,
  receiver,
  amount,
}: transferInputData) {
  const myOutput = `${sender} sends to ${receiver} amounting to ${amount}`;
  return { myOutput };
}
