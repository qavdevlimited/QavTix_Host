import AddBankAccountForm from "@/components/custom-utils/withdrawal/AddBankAccountForm"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ExportButtonProps {
    onAddAccount?: (format: ExportFormat) => void
    className?: string
}

export default function AddAccountBtn({
    className,
    onAddAccount
}: ExportButtonProps) {

    const [showAddAccountModal, setShowAddAccountModal] =  useState(false)

    return (
        <>
            <motion.button
                onClick={() => setShowAddAccountModal(true)}
                className={cn(
                    'flex items-center rounded justify-between text-xs md:text-sm font-bold gap-2 bg-primary-1 p-1.5 transition-opacity',
                    'text-primary-6 hover:text-primary-7 hover:bg-primary-2 transition-colors ease-in-out duration-200'
                )}
            >
                <span className={cn(
                    'w-6 aspect-square rounded flex justify-center items-center text-white',
                    'bg-primary-3'
                )}>
                    <Icon icon="pajamas:export" width="16" height="16" />
                </span>
                <span>Add Account Bank</span>
            </motion.button>

            <AddBankAccountForm openAddAccountModal={showAddAccountModal} setOpenAddAccountModal={setShowAddAccountModal} />
        </>
    )
}