'use client'

import { useState } from 'react'
import { Check, X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

interface MultiSelectTagsProps {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder?: string
  maxDisplay?: number
  className?: string
}

export default function MultiSelectTags({
  options,
  selected,
  onChange,
  placeholder = 'Select tags...',
  maxDisplay = 3,
  className
}: MultiSelectTagsProps) {
  const [open, setOpen] = useState(false)

  const handleSelect = (value: string) => {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value))
    } else {
      onChange([...selected, value])
    }
  }

  const handleRemove = (value: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(selected.filter((item) => item !== value))
  }

  const displayTags = selected.slice(0, maxDisplay)
  const remainingCount = selected.length - maxDisplay

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            'w-full min-h-14 h-14 shadow-none justify-between px-3 py-2 bg-white border border-brand-neutral-5 focus:border-[1.5px] focus:border-brand-accent-4 hover:text-brand-secondary-5 hover:border-brand-neutral-6 hover:bg-white',
            selected.length === 0 && 'text-brand-secondary-5',
            className
          )}
        >
          <div className="flex items-center gap-2 flex-1">
            {selected.length === 0 ? (
              <span className="text-sm font-normal">{placeholder}</span>
            ) : (
              <>
                {displayTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="px-2 py-1 rounded text-sm h-9.25 bg-brand-primary-1 text-brand-primary-3"
                  >
                    {tag}
                  </Badge>
                ))}
                {remainingCount > 0 && (
                  <Badge
                    variant="secondary"
                    className="px-2 py-1 text-xs bg-neutral-2 border-brand-neutral-7 border-brand-neutral-3"
                  >
                    +{remainingCount}
                  </Badge>
                )}
              </>
            )}
          </div>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search tags..." className="h-9 text-xs text-brand-secondary-8" />
          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandGroup className="max-h-64 overflow-auto">
            {options.map((option) => {
              const isSelected = selected.includes(option)
              return (
                <CommandItem
                  key={option}
                  onSelect={() => handleSelect(option)}
                  className="cursor-pointer group hover:bg-brand-accent-4! text-xs"
                >
                  <div
                    className={cn(
                      'mr-2 flex size-4.5 items-center justify-center rounded border border-brand-accent-6 group-hover:border-brand-neutral-9',
                      isSelected
                        ? 'bg-brand-accent-5 text-white'
                        : 'opacity-50 [&_svg]:invisible'
                    )}
                  >
                    <Check className={cn('size-3 text-white')} />
                  </div>
                  <span>{option}</span>
                </CommandItem>
              )
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}