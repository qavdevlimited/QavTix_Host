'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface CollaboratorRoleEditSelectProps {
  value: string
  onValueChange: (value: string) => void
  options: { id: string; title: string }[]
}

export default function CollaboratorRoleEditSelect({ value, onValueChange, options }: CollaboratorRoleEditSelectProps) {
    return (
        <Select value={value} onValueChange={onValueChange}>
            <SelectTrigger
                className={cn(
                "flex items-center text-brand-neutral-8 gap-2 transition-colors outline-none",
                "px-2 justify-between text-xs h-9 min-w-24 font-medium",
                "bg-transparent border-none shadow-none",
                " hover:text-brand-primary-6",
                "data-[state=open]:border-brand-primary data-[state=open]:ring-0"
                )}
            >
                <SelectValue placeholder="Role" />
            </SelectTrigger>

            <SelectContent className="rounded-xl border-neutral-5 shadow-lg">
                {options.map((role) => (
                    <SelectItem 
                        key={role.id} 
                        value={role.id}
                        className="text-xs py-2 cursor-pointer focus:bg-brand-primary-1 focus:text-brand-primary-9"
                    >
                        {role.title}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    )
}