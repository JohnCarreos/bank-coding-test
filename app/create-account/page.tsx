"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useCreateAccount from "@/hooks/useCreateAccount";

export default function createAccount() {
  const [accountNumberInput, setAccountNumberInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [balanceInput, setBalanceInput] = useState(0);
  const [passwordInput, setPasswordInput] = useState("");
  const router = useRouter();

  const { data, createAccount } = useCreateAccount({
    accountNumber: accountNumberInput,
    name: nameInput,
    password: passwordInput,
    balance: balanceInput,
  });

  const isValidInput =
    accountNumberInput.length > 0 &&
    nameInput.length > 0 &&
    passwordInput.length > 0;

  const handleCreateAccount = (event: any) => {
    event.preventDefault();
    createAccount();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 pb-11">
        <h1 className="m-2 mt-8 text-slate-800 text-xl font-semibold">
          CREATE ACCOUNT
        </h1>
        <form onSubmit={handleCreateAccount} className="flex flex-col">
          <div className="flex flex-col mb-2">
            <label className="text-black">Account Number:</label>
            <input
              className="text-black border-2 border-neutral-900 rounded-md"
              type="text"
              value={accountNumberInput}
              onChange={(e) => setAccountNumberInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black">Name:</label>
            <input
              className="text-black border-2 border-neutral-900 rounded-md"
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black">Initial Balance:</label>
            <input
              className="text-black border-2 border-neutral-900 rounded-md"
              type="number"
              value={balanceInput}
              onChange={(e) => setBalanceInput(parseFloat(e.target.value))}
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="text-black">Password:</label>
            <input
              className="text-black border-2 border-neutral-900 rounded-md"
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className={
              isValidInput
                ? "py-2 px-3 bg-lime-700 hover:bg-lime-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
                : "cursor-no-drop py-2 px-3 bg-lime-700 hover:bg-lime-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none"
            }
            disabled={!isValidInput}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
