"use client";

import { useState } from "react";
import { accountData } from "@/types/account";

export default function useCheckBalance(accountNum: string) {
  const [balance, setBalance] = useState(0);
  const storedAccounts = JSON.parse(localStorage.getItem("accounts") || "[]");

  const checkBalance = () => {
    const accountObj = storedAccounts.find(
      (account: accountData) => account.accountNumber === accountNum
    );

    if (accountObj) {
      setBalance(accountObj.balance);
    } else return { error: "Account not found" };
  };

  return { balance, checkBalance };
}
