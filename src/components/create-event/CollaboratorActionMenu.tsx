import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icon } from "@iconify/react"
import { MoreHorizontal } from 'lucide-react'

interface CollaboratorActionMenuProps {
  status: string
  onRemove: () => void
  onReactivate: () => void
}

export default function CollaboratorActionMenu({ status, onRemove, onReactivate }: CollaboratorActionMenuProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="px-2 py-1 hover:bg-brand-neutral-2 rounded-sm transition-colors outline-none border border-brand-secondary-3">
                <MoreHorizontal className="size-4 text-brand-secondary-8" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48 rounded-md p-2">
                {status === 'disabled' && (
                <DropdownMenuItem 
                    onClick={onReactivate}
                    className="flex items-center gap-3 p-3 text-xs font-medium cursor-pointer focus:bg-brand-neutral-1 rounded-md"
                >
                    <Icon icon="fa7-solid:arrow-right-rotate" width="20" height="20" className="size-4" />
                    Re-activate
                </DropdownMenuItem>
                )}
                <DropdownMenuItem 
                    onClick={onRemove}
                    className="flex items-center gap-2 p-2 text-xs font-medium text-brand-secondary-9 cursor-pointer focus:bg-red-50 focus:text-red-600 rounded-md"
                >
                    <Icon icon="hugeicons:delete-02" width="24" height="24" className="size-4 text-brand-secondary-9" />
                    Remove Collaborator
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}