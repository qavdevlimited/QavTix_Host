import EmailTemplateEditor from "@/components/custom-utils/email-template-editor/EmailTemplateEditor"
import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { useState } from "react"

interface AddPromoCodeProps {
    onComposeMail?: () => void
    className?: string
}

export default function ComposeMailBtn({
    className,
    onComposeMail
}: AddPromoCodeProps) {

    const [showMailModal, setShowMailModal] =  useState(false)

    return (
        <>
            <button
                onClick={() => setShowMailModal(true)}
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
                <span>Compose Mail</span>
            </button>

            <EmailTemplateEditor open={showMailModal} setOpen={setShowMailModal} />
        </>
    )
}