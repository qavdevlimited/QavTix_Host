'use client'

import { useForm, useFieldArray, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step4Schema } from '@/schemas/create-event.schema'
import { Switch } from "@/components/ui/switch"
import CustomPercentageInput from '../custom-utils/inputs/CustomPercentageInput'
import CustomDatePicker from '../custom-utils/inputs/CustomDatePicker'
import { MoreHorizontal, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'
import { Icon } from '@iconify/react'
import CustomAvatar from '../custom-utils/avatars/CustomAvatar'
import MultiStepFormButtonDuo from '../custom-utils/buttons/MultiStepFormButtonDuo'
import { useState } from 'react'
import AddCollaboratorForm from './AddCollaboratorForm'
import { COLLABORATOR_ROLES, ROLE_IDS } from '@/lib/features/create-event/resources/constants'
import CollaboratorRoleEditSelect from './CollaboratorRoleEditSelect'
import CollaboratorActionMenu from './CollaboratorActionMenu'
import CustomInput2 from '../custom-utils/inputs/CustomInput2'




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
    const { fields: collaborators, append, remove, update } = useFieldArray({ control, name: "permissions.collaborators" })

    const isAffiliateEnabled = watch('affiliateProgram.enabled')
    const isAgeRestricted = watch('checkInSettings.ageRestriction')
    const [openAddCollaboratorForm, setOpenAddCollaboratorForm] = useState(false)



    return (
        <FormProvider {...methods}>
            <form className="grid grid-cols-1 mt-6 md:grid-cols-2 gap-14 lg:gap-20 items-start md:pb-16">
                
                {/*SETTINGS */}
                <div className="space-y-10 md:pr-10 lg:pr-14 md:border-r-[1.5px] md:border-dashed md:border-brand-secondary-3/50">
                    {/* Check-In Settings */}
                    <section className="space-y-6">
                        <h3 className="text-brand-secondary-8 font-bold">Check-In Settings</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm text-brand-secondary-9">QR code enabled</label>
                                <Controller
                                    name="checkInSettings.qrCodeEnabled"
                                    control={control}
                                    render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <label className="text-sm text-brand-secondary-9">Age Restriction</label>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <button
                                                type="button"
                                                aria-label="Share with group info"
                                                className="text-brand-neutral-6 hover:text-neutral-8 transition-colors"
                                            >
                                                <Icon icon="carbon:information" className="size-4 text-accent-6" />
                                            </button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Apply an age restriction to block users who do not meet the required age.</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <Controller
                                    name="checkInSettings.ageRestriction"
                                    control={control}
                                    render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} />}
                                />
                            </div>
                            {
                                isAgeRestricted &&
                                <div className='mt-5 animate-in fade-in slide-in-from-top-2 duration-400'>
                                    <CustomInput2
                                        label="Enter Minimum Age Required" 
                                        type="number" 
                                        placeholder="18" 
                                        className='max-w-max'
                                        error={errors.checkInSettings?.minimumAge?.message}
                                        {...register("checkInSettings.minimumAge")} 
                                    />
                                </div>
                            }
                        </div>
                    </section>

                    {/* Email Notifications */}
                    <section className="space-y-6">
                        <div className="space-y-1">
                            <h3 className="text-brand-secondary-8 font-bold">Email Notifications</h3>
                            <p className="text-sm text-brand-secondary-9">Choose the type of emails that will apply to this event</p>
                        </div>
                        <div className="space-y-4">
                            {['orderConfirmation', 'ticketDelivery', 'reminders', 'postEventEmails', 'customizeSenderName'].map((item) => (
                                <div key={item} className="flex items-center justify-between">
                                    <label className="text-sm text-brand-secondary-9 capitalize">
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
                            <h3 className="text-brand-secondary-8 font-bold">Affiliate Program</h3>
                            <p className="text-sm text-brand-secondary-9">When this is turned on, users can generate links, help sell tickets and get commission</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <label className="text-sm text-brand-secondary-9">Turn On Affiliate</label>
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
                                    inputContainerStyles='max-w-30'
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


                {/* PERMISSION / COLLABORATORS */}
                <div className="space-y-8">
                    <div className="space-y-1">
                        <h3 className="text-brand-secondary-8 font-bold">Permission</h3>
                        <p className="text-sm text-brand-secondary-9">Control who can access and manage only the sections of the event assigned to them</p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-sm font-medium text-brand-secondary-9">Who has access</h4>
                        
                        <div className="space-y-6">
                            {collaborators.map((collab,index) => (
                                <div key={collab.id} className="group border-b border-b-brand-neutral-5 last-of-type:border-b-0 pb-3 md:pb-0 md:border-b-0">
                                    <div className='flex justify-between items-center mb-2'>
                                        <span className='text-[10px] capitalize font-medium text-brand-secondary-9'>{collab.role === "host" ? "Host" : "Collaborator"}</span>
                                        <span className={cn(
                                            "text-[10px] font-medium flex items-center gap-1.5",
                                            collab.status === 'active' ? "text-[#359160]" : 
                                            collab.status === 'disabled' ? "text-red-500" : "text-brand-secondary-4"
                                        )}>
                                            <span className="size-1.5 rounded-full bg-current" />
                                            {collab.status.charAt(0).toUpperCase() + collab.status.slice(1)}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between gap-5 gap-y-2">
                                        <div className='flex gap-3'>
                                            <CustomAvatar name="QavTix Limited" id="9" profileImg="" size='size-11' />
                                            <div className='text-brand-secondary-9'>
                                                <p className="text-xs md:text-sm">{collab.name}</p>
                                                <p className="font-bold text-xs md:text-sm truncate max-w-30">{collab.email}</p>
                                            </div>
                                        </div>

                                        {collab.role !== "host" && (
                                            <div className="flex flex-wrap justify-end gap-y-0 items-center gap-x-2">
                                                <Controller
                                                    name={`permissions.collaborators.${index}.role`}
                                                    control={control}
                                                    render={({ field }) => (
                                                        <CollaboratorRoleEditSelect 
                                                            value={field.value} 
                                                            onValueChange={field.onChange}
                                                            options={COLLABORATOR_ROLES.map(v => v)}
                                                        />
                                                    )}
                                                />
                                                <CollaboratorActionMenu 
                                                    status={collab.status}
                                                    onRemove={() => remove(index)}
                                                    onReactivate={() => update(index, { ...collab, status: 'active' })}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button 
                            type="button" 
                            onClick={() => setOpenAddCollaboratorForm(true)}
                            className="w-full mt-5 text-sm h-14 rounded-[6px] border-[1.4px] border-dashed border-brand-secondary-5 bg-transparent hover:bg-brand-primary-1 hover:border-brand-primary-7 text-brand-secondary-5 transition-all"
                            >
                            + Add Collaborator
                        </button>
                    </div>
                </div>

                <div className="md:pe-4">
                    <MultiStepFormButtonDuo />
                </div>
            </form>



            <AddCollaboratorForm 
                open={openAddCollaboratorForm} 
                setOpen={setOpenAddCollaboratorForm} 
                setCollaborator={(v) => {
                    append({ 
                        email: v.email, 
                        role: v.role as any, 
                        permissions: [v.role], 
                        name: v.email.split('@')[0], 
                        status: "pending",
                        id: crypto.randomUUID() 
                    })
                }}
            />
        </FormProvider>
    )
}