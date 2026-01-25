'use client'

import { useForm, useFieldArray, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step4Schema } from '@/schemas/create-event.schema'
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import CustomPercentageInput from '../custom-utils/inputs/CustomPercentageInput'
import CustomDatePicker from '../custom-utils/inputs/CustomDatePicker'
import { Info, MoreHorizontal, ChevronDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from '@/lib/utils'

export default function CreateEventStep4() {
    const methods = useForm({
        resolver: zodResolver(step4Schema),
        defaultValues: {
            checkInSettings: { qrCodeEnabled: true, ageRestriction: false },
            emailNotifications: {
                orderConfirmation: true,
                ticketDelivery: true,
                reminders: true,
                postEventEmails: true,
                customizeSenderName: false
            },
            affiliateProgram: { enabled: false, percentageCommission: 10 },
            permissions: {
                collaborators: [
                    { id: '1', name: 'QavTix Limited', email: 'info@qavtixlimited.com', role: 'host', status: 'active', permissions: ['all'] }
                ]
            }
        }
    })

    const { control, watch, register, formState: { errors } } = methods
    const { fields: collaborators } = useFieldArray({ control, name: "permissions.collaborators" })

    const isAffiliateEnabled = watch('affiliateProgram.enabled')
    const isAgeRestricted = watch('checkInSettings.ageRestriction')

    return (
        <FormProvider {...methods}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-14 lg:gap-20 items-start">
                
                {/* LEFT SIDE: SETTINGS */}
                <div className="space-y-10">
                    {/* Check-In Settings */}
                    <section className="space-y-6">
                        <h3 className="text-brand-secondary-8 font-bold text-lg">Check-In Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-brand-secondary-8">QR code enabled</label>
                                <Controller
                                    name="checkInSettings.qrCodeEnabled"
                                    control={control}
                                    render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm font-medium text-brand-secondary-8">Age Restriction</label>
                                    <Info className="size-4 text-brand-accent-4 opacity-70" />
                                </div>
                                <Controller
                                    name="checkInSettings.ageRestriction"
                                    control={control}
                                    render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Email Notifications */}
                    <section className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-brand-secondary-8 font-bold text-lg">Email Notifications</h3>
                            <p className="text-xs text-brand-secondary-5">Choose the type of emails that will apply to this event</p>
                        </div>
                        <div className="space-y-4">
                            {['orderConfirmation', 'ticketDelivery', 'reminders', 'postEventEmails', 'customizeSenderName'].map((item) => (
                                <div key={item} className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-brand-secondary-8 capitalize">
                                        {item.replace(/([A-Z])/g, ' $1').trim()}
                                    </label>
                                    <Controller
                                        name={`emailNotifications.${item}` as any}
                                        control={control}
                                        render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Affiliate Program */}
                    <section className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-brand-secondary-8 font-bold text-lg">Affiliate Program</h3>
                            <p className="text-xs text-brand-secondary-5">When this is turned on, users can generate links, help sell tickets and get commission</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm font-medium text-brand-secondary-8">Turn On Affiliate</label>
                            <Controller
                                name="affiliateProgram.enabled"
                                control={control}
                                render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                            />
                        </div>

                        {isAffiliateEnabled && (
                            <div className="space-y-5 animate-in fade-in slide-in-from-top-2">
                                <CustomPercentageInput 
                                    label="Percentage Commission"
                                    value={watch('affiliateProgram.percentageCommission') as number}
                                    onChange={(val) => methods.setValue('affiliateProgram.percentageCommission', parseInt(val))}
                                    error={errors.affiliateProgram?.percentageCommission?.message}
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <Controller
                                        name="affiliateProgram.startDate"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomDatePicker 
                                                label="Affiliate Program Starts"
                                                icon={ChevronDown}
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="affiliateProgram.endDate"
                                        control={control}
                                        render={({ field }) => (
                                            <CustomDatePicker 
                                                label="Affiliate Program Ends"
                                                icon={ChevronDown}
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        )}
                                    />
                                </div>
                            </div>
                        )}
                    </section>
                </div>

                {/* MIDDLE: SEPARATOR */}
                <Separator orientation="vertical" className="hidden md:block h-full min-h-[600px] bg-brand-secondary-2" />

                {/* RIGHT SIDE: PERMISSION / COLLABORATORS */}
                <div className="space-y-8">
                    <div className="space-y-1">
                        <h3 className="text-brand-secondary-8 font-bold text-lg">Permission</h3>
                        <p className="text-xs text-brand-secondary-5">Control who can access and manage only the sections of the event assigned to them</p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-brand-secondary-8">Who has access</h4>
                        
                        <div className="space-y-6">
                            {collaborators.map((collab, index) => (
                                <div key={collab.id} className="flex items-center justify-between group">
                                    <div className="flex items-center gap-3">
                                        <Avatar className="size-10 border border-brand-secondary-2">
                                            <AvatarImage src={collab.avatar} />
                                            <AvatarFallback className="bg-brand-accent-1 text-brand-accent-4 text-xs font-bold">
                                                {collab.name.substring(0, 2).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="text-sm font-bold text-brand-secondary-8">{collab.name}</p>
                                            <p className="text-xs text-brand-secondary-5">{collab.email}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-end gap-1">
                                            <span className={cn(
                                                "text-[10px] font-bold flex items-center gap-1.5",
                                                collab.status === 'active' ? "text-green-600" : 
                                                collab.status === 'disabled' ? "text-red-500" : "text-brand-secondary-4"
                                            )}>
                                                <span className="size-1.5 rounded-full bg-current" />
                                                {collab.status.charAt(0).toUpperCase() + collab.status.slice(1)}
                                            </span>
                                            {collab.role !== 'host' && (
                                                <div className="flex items-center gap-1 text-xs text-brand-secondary-6 cursor-pointer hover:text-brand-accent-4 transition-colors">
                                                    Customers <ChevronDown className="size-3" />
                                                </div>
                                            )}
                                        </div>
                                        <button className="p-1 hover:bg-brand-neutral-1 rounded transition-colors text-brand-secondary-4">
                                            <MoreHorizontal className="size-5" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button type="button" className="w-full h-14 rounded-lg border-2 border-dashed border-brand-secondary-3 flex items-center justify-center gap-2 text-brand-secondary-4 hover:bg-brand-neutral-1 transition-all text-sm mt-4">
                            + Add Collaborator
                        </button>
                    </div>
                </div>
            </div>
        </FormProvider>
    )
}