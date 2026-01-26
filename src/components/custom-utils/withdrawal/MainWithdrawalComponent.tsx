"use client";

import { ChangeEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { quickAmounts } from "./resources/quickAmounts";
import { space_grotesk } from "@/lib/fonts";
import AddAccountBtn from "@/lib/features/finance/AddAccountBtn";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";

interface BankAccount {
    id: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
}


const mockBankAccounts: BankAccount[] = [
    { id: "1", bankName: "GTBank", accountNumber: "0123456789", accountName: "John Doe" },
    { id: "2", bankName: "Access Bank", accountNumber: "9876543210", accountName: "John Doe" },
    { id: "3", bankName: "Zenith Bank", accountNumber: "1122334455", accountName: "John Doe" }
]

export default function MainWithdrawalComponent() {


    const [amount, setAmount] = useState<string>("")
    const [selectedAccount, setSelectedAccount] = useState<string>("")
    
    const availableBalance = 1234500;

    const handleQuickAmount = (value: number) => {
        setAmount(value.toString())
    }

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, "")
        setAmount(value)
    }

    const handleContinue = () => {
        if (!amount || !selectedAccount) {
            alert("Please enter amount and select bank account")
            return;
        }
        console.log("Withdrawal:", { amount, selectedAccount })
    }

    const selectedBankAccount = mockBankAccounts.find(acc => acc.id === selectedAccount)

    return (
        <div className="w-full h-fit">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className={cn(space_grotesk.className, "text-lg font-bold text-brand-secondary-8")}>Withdrawal</h1>
                <AddAccountBtn />
            </div>

            {/* Balance Card */}
            <div className="relative overflow-hidden bg-linear-to-br from-[#5b20dbc9] via-[#9664FF] to-purple-600 rounded-3xl p-8 mb-10">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
                    <div className="absolute -top-28 -right-24 w-48 h-48 border-2 border-white rounded-full"></div>
                    <div className="absolute -top-24 -right-20 w-48 h-48 border-2 border-white rounded-full"></div>
                </div>
                
                <div className="relative z-10 space-y-6">
                    <p className="text-white text-sm font-medium opacity-90">Available Balance</p>
                    <h2 className={cn(space_grotesk.className, "text-white text-3xl font-bold")}>
                        ₦{availableBalance.toLocaleString()}
                    </h2>
                </div>
            </div>

            {/* Amount Input */}
            <div className="mb-6 flex gap-2 border-b border-b-neutral-5">
                <div className="border-e pe-3 pb-2 border-e-neutral-5">
                    <Icon icon="mdi:currency-ngn" className="text-brand-secondary-8 text-xl" />
                </div>
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Enter Amount to Withdraw"
                    className="flex-1 text-base pb-2 ps-5 text-gray-700 placeholder:text-brand-secondary-3 outline-none bg-transparent"
                />
            </div>

            {/* Quick Amount Buttons */}
            <div className="flex flex-wrap gap-3 mb-8">
                {quickAmounts.map((quickAmount) => (
                    <button
                        key={quickAmount}
                        onClick={() => handleQuickAmount(quickAmount)}
                        className={cn(
                            "px-4 py-3 rounded-sm text-xs transition-all",
                            amount === quickAmount.toString()
                                ? "bg-brand-primary-6 text-white shadow-md"
                                : "bg-brand-neutral-4 text-brand-secondary-4 hover:bg-brand-neutral-5"
                        )}
                    >
                        ₦{quickAmount.toLocaleString()}
                    </button>
                ))}
            </div>

            {/* Bank Account Selection */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-brand-secondary-9 mb-3">
                    Choose withdrawal account
                </label>
                <Select 
                    value={selectedAccount}
                    onValueChange={(value) => setSelectedAccount(value)}
                >
                    <SelectTrigger className="w-full border-brand-neutral-3 p-3 h-12! bg-brand-neutral-4">
                        <SelectValue className="text-xs" placeholder="Select Bank Account" />
                    </SelectTrigger>
                    <SelectContent>
                        {mockBankAccounts.map((acct) => (
                            <SelectItem 
                                key={acct.accountNumber} 
                                value={acct.id}
                                className="text-xs hover:bg-brand-neutral-3! w-full block"
                            >
                                <div className="flex items-center justify-between gap-3 py-1 w-full">
                                    <div className="w-5 h-5 rounded-full border-2 border-brand-primary-6 flex items-center justify-center">
                                        <div className={cn(acct.id === selectedAccount ? "block" : "hidden" ,"w-2.5 h-2.5 rounded-full bg-brand-primary-6")} />
                                    </div>

                                    <div className="flex gap-1 items-center flex-1 min-w-0">
                                        {/* Bank Logo */}
                                        <Image
                                            src="/images/demo-images/bank-logo.png"
                                            alt={acct.bankName}
                                            width={50}
                                            height={50}
                                            className="object-contain p-1 rounded-lg size-10"
                                        />

                                        {/* Account Details */}
                                        <div className="min-w-0">
                                            <p className="font-semibold text-xs text-brand-secondary-9 truncate">
                                                {acct.accountName}
                                            </p>
                                            <p className="text-[11px] text-brand-secondary-8">
                                                {acct.bankName}
                                            </p>
                                        </div>

                                    </div>

                                    <button
                                        type="button"
                                        className={cn(selectedAccount === acct.id ? "hidden" : "inline-block", "p-2 w-fit hover:bg-red-50 rounded-lg transition-colors group shrink-0")}
                                    >
                                        <Icon 
                                            icon="hugeicons:delete-02" 
                                            className="size-5 text-red-500 group-hover:text-red-600" 
                                        />
                                    </button>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <button
                onClick={handleContinue}
                disabled={!amount || !selectedAccount}
                className="w-full py-3 bg-brand-primary-6 hover:bg-brand-primary-7 hover:shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors"
            >
                Continue
            </button>
        </div>
    )
}