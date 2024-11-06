import { useState, useEffect } from "react";
import { accountData } from "@/types/account";

export default function useCreateAccount({
  accountNumber,
  name,
  password,
  balance,
}: accountData) {
  const [accounts, setAccounts] = useState<accountData[] | null>([]);
  const data = { accountNumber, name, password, balance };

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");

    if (storedAccounts) {
      setAccounts(JSON.parse(storedAccounts));
    } else {
      setAccounts([]);
    }
  }, []);

  const createAccount = () => {
    if (accounts?.some((item) => item.accountNumber === accountNumber)) {
      return { message: "Account already existed", success: false };
    }
    const newAccount = data;

    if (accounts) {
      localStorage.setItem(
        "accounts",
        JSON.stringify([...accounts, newAccount])
      );
    }
  };

  return { data, createAccount };
}
