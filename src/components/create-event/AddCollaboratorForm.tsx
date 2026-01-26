'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AnimatedDialog } from "../custom-utils/dialogs/AnimatedDialog";
import { Dispatch, SetStateAction } from "react";
import { DialogTitle } from "../ui/dialog";
import CustomInput2 from "../custom-utils/inputs/CustomInput2";
import { COLLABORATOR_ROLES } from "@/lib/features/create-event/resources/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddCollaboratorFormValues, addCollaboratorSchema } from "@/schemas/add-collaborator.schema";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { cn } from "@/lib/utils";



export default function AddCollaboratorForm({ open, setOpen, setCollaborator }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, setCollaborator: (v: AddCollaboratorFormValues) => void }) {
    
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddCollaboratorFormValues>({
        resolver: zodResolver(addCollaboratorSchema),
        defaultValues: { email: '', role: '' } 
    })

    const onSubmit :SubmitHandler<AddCollaboratorFormValues> = (data) => {
        setCollaborator(data)
        reset()
        setOpen(false)
    }

    return (
        <AnimatedDialog showCloseButton={false} className="md:max-w-sm p-0 overflow-hidden" open={open} onOpenChange={setOpen}>
            <div className="p-2">
                <div className="flex justify-center items-center flex-col text-center">
                    <DialogTitle className="text-sm md:text-xl font-bold text-brand-secondary-8">Add Collaborator</DialogTitle>
                    <p className="text-xs md:text-sm text-brand-secondary-6 mt-1">
                        Invite someone to access and manage only the sections assigned to them
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:mt-8 space-y-6">
                    {/* Email Input */}
                    <CustomInput2
                        error={errors.email?.message}
                        {...register('email')}
                        placeholder="Enter Email Address"
                        label="Email Address"
                        className="bg-brand-neutral-4! border-none h-12!"
                    />

                    {/* Role Selection using Shadcn Select */}
                    <div className="space-y-2">
                        <label className="text-sm block font-medium text-brand-secondary-8 mb-2">Role</label>
                        <Controller
                            name="role"
                            control={control}
                            render={({ field }) => (
                                <Select 
                                    onValueChange={field.onChange} 
                                    defaultValue={field.value}
                                    >
                                    <SelectTrigger className={cn(
                                        "h-12 min-h-12 bg-brand-neutral-4 w-full border-none rounded-md focus:ring-brand-primary",
                                        errors.role && "ring-2 ring-red-500"
                                    )}>
                                        <SelectValue placeholder="Select Role">
                                            {field.value && COLLABORATOR_ROLES.find(r => r.id === field.value)?.title}
                                        </SelectValue>
                                    </SelectTrigger>
                                    
                                    <SelectContent
                                        position="popper"
                                        sideOffset={5}
                                        align="start"
                                        side="bottom"
                                        className="rounded-xl p-2 max-w-xs overflow-y-auto"
                                     >
                                        {COLLABORATOR_ROLES.map((role) => (
                                        <SelectItem 
                                            key={role.id} 
                                            value={role.id}
                                            className="p-0 mb-2 cursor-pointer last:mb-0 focus:bg-transparent data-[state=checked]:bg-transparent [&>span]:hidden"
                                        >
                                            <div className={cn(
                                                "flex items-start shadow-[0px_5.8px_23.17px_0px_#3326AE14] gap-3 p-2 rounded-xl border-2 transition-all w-full text-left",
                                                field.value === role.id 
                                                    ? "border-brand-primary bg-white" 
                                                    : "border-transparent bg-brand-neutral-1 hover:bg-brand-neutral-2"
                                                )}
                                            >
                                            {/* Radio Icon Visual */}
                                                <div className={cn(
                                                    "mt-1 size-5 shrink-0 rounded-full border-2 flex items-center justify-center",
                                                    field.value === role.id ? "border-brand-primary" : "border-brand-secondary-4"
                                                )}>
                                                    {field.value === role.id && (
                                                        <div className="size-2.5 rounded-full bg-brand-primary" />
                                                    )}
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <span className="font-bold text-xs text-brand-secondary-9">
                                                        {role.title}
                                                    </span>
                                                    <span className="text-xs text-brand-secondary-8">
                                                        {role.description}
                                                    </span>
                                                </div>
                                            </div>
                                        </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            )}
                        />
                        {errors.role && (
                            <p className="text-xs font-medium text-red-500">{errors.role.message}</p>
                        )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between gap-4 pt-4">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="w-40 h-12 md:h-14 text-brand-secondary-8 bg-white hover:shadow flex items-center gap-2 justify-center px-6 py-3 rounded-[30px] border border-brand-secondary-6 font-medium text-xs md:text-sm hover:bg-brand-neutral-3 hover:border-brand-secondary-7 active:bg-brand-neutral-3 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-brand-neutral-4 focus:ring-offset-2 transition-all duration-150"
                        >
                        Cancel
                        </button>

                        <button
                            type="submit"
                            className="w-full px-6 py-3.5 rounded-[40px] bg-brand-primary hover:bg-brand-primary-7 text-white font-medium text-xs md:text-sm hover:shadow-md hover:shadow-brand-primary/20 transition-all active:scale-[0.98]"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
            </AnimatedDialog>
    )
}