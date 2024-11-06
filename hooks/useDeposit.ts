import { accountData } from "@/types/account";
import { useState } from "react";

export default function useDeposit(accountNum: string, amount: number) {
  const [account, setAccount] = useState({});
  const storedAccounts = JSON.parse(localStorage.getItem("accounts") || "[]");
  if (amount < 0) {
    return { error: "Invalid input amount" };
  }

  const depositAmount = () => {
    const accountObj = storedAccounts.find(
      (account: accountData) => account.accountNumber === accountNum
    );
    const newBalance = parseFloat(accountObj.balance) + amount;

    const newAccountObj = {
      ...accountObj,
      balance: newBalance,
    };
    const accountsArray = storedAccounts.filter(
      (account: accountData) => account.accountNumber !== accountNum
    );
    const newAccounts = [...accountsArray, newAccountObj];
    localStorage.setItem("accounts", JSON.stringify(newAccounts));
    return { account: newAccountObj };
  };
  return { account, depositAmount };
}
