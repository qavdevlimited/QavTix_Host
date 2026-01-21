"use client"

import PasswordInput from "@/components/custom-utils/inputs/PasswordInput"
import PasswordStrengthIndicator from "@/components/custom-utils/security/PasswordStrengthIndicator"
import { space_grotesk } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { passwordSchema, PasswordSchema } from "@/schemas/security.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Icon } from "@iconify/react"
import { SubmitHandler, useForm } from "react-hook-form"

export default function SecurityPage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<PasswordSchema>({
        resolver: zodResolver(passwordSchema),
    })

    const onSubmit : SubmitHandler<PasswordSchema> = (data) => {
        console.log("hello")
    }

    const newPassword = watch("newPassword")

    return (
        <main className="pb-16">
            <h2 className={cn(space_grotesk.className, "text-secondary-8 text-lg font-bold mt-4 mb-10")}>Password</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md">
                <PasswordInput
                    label="Current Password"
                    placeholder="........."
                    required
                    {...register('currentPassword')}
                    error={errors.currentPassword?.message}
                />
                <PasswordInput
                    label="New Password"
                    placeholder=".........."
                    required
                    {...register('newPassword')}
                    error={errors.newPassword?.message}
                />
                <PasswordInput
                    label="Confirm Password"
                    placeholder="............."
                    required
                    {...register('confirmPassword')}
                    error={errors.confirmPassword?.message}
                />

                <PasswordStrengthIndicator password={newPassword} />

                <button
                    type="submit"
                    disabled={!!isSubmitting}
                    className="px-6 py-4 w-full rounded-md bg-primary hover:bg-primary-7 active:bg-primary-8 hover:shadow-md active:scale-[0.98] disabled:bg-neutral-5 disabled:cursor-not-allowed disabled:opacity-60 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-150 flex items-center justify-center gap-2"
                >
                    
                    <span>Update Password</span>
                    <Icon icon="lets-icons:arrow-right" width="24" height="24" />
                </button>
            </form>
        </main>
    )
}