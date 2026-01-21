"use client"

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'
import { Icon } from '@iconify/react'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function CreateMessageModal({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (open: boolean) => void
}) {
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontFamily,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class: 'prose prose-sm focus:outline-none max-w-none p-4 min-h-[350px] overflow-y-auto',
      },
    },
  })

  if (!editor) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* showClose={false} should be handled in your custom Dialog component or via CSS if using standard shadcn */}
      <DialogContent className="max-w-2xl p-0 overflow-hidden border-none gap-0">
        
        {/* 1. Header: Custom Close & Title */}
        <div className="bg-secondary-9 h-12 flex items-center justify-between px-4 text-white">
          <DialogTitle className="text-sm font-medium">New Message</DialogTitle>
          <button 
            onClick={() => setOpen(false)}
            className="hover:bg-white/10 p-1 rounded transition-colors"
          >
            <Icon icon="hugeicons:cancel-01" width="20" height="20" />
          </button>
        </div>

        <div className="flex flex-col bg-white">
          {/* 2. Recipients & Subject */}
          <div className="px-4 py-1">
            <div className="flex items-center gap-2 border-b py-2 text-sm">
              <span className="text-neutral-400 w-16">Recipients</span>
              <input type="text" className="flex-1 outline-none" />
              <Icon icon="hugeicons:plus-01" className="text-neutral-400 cursor-pointer" />
            </div>
            <div className="flex items-center gap-2 border-b py-2 text-sm">
              <span className="text-neutral-400 w-16">Subject</span>
              <input type="text" className="flex-1 outline-none" />
            </div>
          </div>

          {/* 3. Editor Content Area */}
          <div className="min-h-87.5 max-h-125 overflow-y-auto">
            <EditorContent editor={editor} />
          </div>

          {/* 4. Formatting Toolbar (Floating look) */}
          <div className="p-3 border-t space-y-3">
            <div className="flex flex-wrap items-center gap-1 p-1 bg-neutral-50 rounded-lg border w-fit">
              {/* Undo/Redo */}
              <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
                <Icon icon="hugeicons:undo-01" width="18" />
              </ToolbarButton>
              <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
                <Icon icon="hugeicons:redo-01" width="18" />
              </ToolbarButton>
              
              <div className="w-px h-4 bg-neutral-300 mx-1" />

              {/* Font Family Dropdown Emulation */}
              <select 
                className="text-xs bg-transparent outline-none cursor-pointer px-1 font-medium"
                onChange={(e) => editor.chain().focus().setFontFamily(e.target.value).run()}
              >
                <option value="Montserrat">Montserrat</option>
                <option value="Arial">Arial</option>
                <option value="Courier New">Courier</option>
              </select>

              <div className="w-px h-4 bg-neutral-300 mx-1" />

              {/* Basic Marks */}
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleBold().run()} 
                active={editor.isActive('bold')}
              >
                <Icon icon="hugeicons:bold" width="18" />
              </ToolbarButton>
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleItalic().run()} 
                active={editor.isActive('italic')}
              >
                <Icon icon="hugeicons:italic" width="18" />
              </ToolbarButton>
              <ToolbarButton 
                onClick={() => editor.chain().focus().toggleUnderline().run()} 
                active={editor.isActive('underline')}
              >
                <Icon icon="hugeicons:underline" width="18" />
              </ToolbarButton>

              <div className="w-px h-4 bg-neutral-300 mx-1" />

              {/* Alignment */}
              <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()}>
                <Icon icon="hugeicons:text-align-left" width="18" />
              </ToolbarButton>
              <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()}>
                <Icon icon="hugeicons:text-align-center" width="18" />
              </ToolbarButton>

              {/* Lists */}
              <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()}>
                <Icon icon="hugeicons:list-ul" width="18" />
              </ToolbarButton>
            </div>

            {/* 5. Footer Actions */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="bg-blue-600 text-white px-7 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-700 transition-all">
                  Send
                </button>
                <button className="border border-blue-600 text-blue-600 px-5 py-2.5 rounded-md font-semibold text-sm hover:bg-blue-50 transition-all">
                  Schedule
                </button>
                
                <div className="flex items-center gap-4 ml-4 text-neutral-500">
                  <Icon icon="hugeicons:attachment-01" className="cursor-pointer hover:text-black" width="20" />
                  <Icon icon="hugeicons:link-01" className="cursor-pointer hover:text-black" width="20" />
                  <Icon icon="hugeicons:sticker-smile-face" className="cursor-pointer hover:text-black" width="20" />
                  <Icon icon="hugeicons:image-01" className="cursor-pointer hover:text-black" width="20" />
                  <Icon icon="hugeicons:clock-01" className="cursor-pointer hover:text-black" width="20" />
                  <Icon icon="hugeicons:quill-pen-02" className="cursor-pointer hover:text-black" width="20" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <Icon icon="hugeicons:more-vertical" className="cursor-pointer" width="20" />
                <Icon icon="hugeicons:delete-02" className="cursor-pointer hover:text-red-500" width="20" />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ToolbarButton({ children, onClick, active = false }: { children: React.ReactNode, onClick: () => void, active?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "p-1.5 rounded hover:bg-neutral-200 transition-colors",
        active ? "bg-neutral-200 text-blue-600" : "text-neutral-500"
      )}
    >
      {children}
    </button>
  )
}