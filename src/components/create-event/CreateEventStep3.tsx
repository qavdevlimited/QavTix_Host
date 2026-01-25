'use client'

import { useForm, useFieldArray, FormProvider, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2, ChevronDown } from 'lucide-react'
import CreateEventPricingSummary from './CreateEventPricingSummary'
import { step3Schema } from '@/schemas/create-event.schema'
import CustomSelect2 from '../custom-utils/inputs/CustomSelect2'
import { TICKET_TYPE_PRESETS } from '@/lib/features/create-event/resources/constants'
import CustomInput2 from '../custom-utils/inputs/CustomInput2'
import CustomPriceInput from '../custom-utils/inputs/CustomPriceInput'
import CustomPercentageInput from '../custom-utils/inputs/CustomPercentageInput'
import { Icon } from '@iconify/react'
import CustomDatePicker from '../custom-utils/inputs/CustomDatePicker'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'

export default function CreateEventStep3() {
    const methods = useForm({
        resolver: zodResolver(step3Schema),
        defaultValues: {
            ticketTypes: [{ id: crypto.randomUUID(), ticketType: '', price: 0, currency: 'NGN', quantity: 1 }],
            refundPolicy: 'no_refund',
        }
    })

    const { register, control, watch, setValue, formState: { errors } } = methods
    const { fields, append, remove } = useFieldArray({ control, name: "ticketTypes" })
    const refundPolicy = watch('refundPolicy')

    return (
        <FormProvider {...methods}>
            <div className="flex flex-col lg:flex-row gap-10 items-start mt-10">
                <form className="flex-1 w-full space-y-12">
                    <section className="space-y-6">
                        <h3 className="text-brand-secondary-8 font-bold text-lg">Ticket Info</h3>
                        
                        {fields.map((field, index) => (
                            <div key={field.id} className="space-y-6 relative border-b last-of-type:border-b-0 border-brand-neutral-5 pb-12 mb-12 last-of-type:pb-0 last-of-type:mb-6">
                                {fields.length > 1 && (
                                    <button title="Remove Ticket Info Section" type="button" onClick={() => remove(index)} className="absolute -top-4 right-4 text-red-400 hover:text-red-600 transition-colors">
                                        <Trash2 className="size-4 md:size-5" />
                                    </button>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Controller
                                        name={`ticketTypes.${index}.ticketType`}
                                        control={control}
                                        render={({ field: selectField }) => (
                                            <CustomSelect2 
                                                label="Ticket Type"
                                                options={TICKET_TYPE_PRESETS.map(v => ({ label: v, value: v }))}
                                                value={selectField.value}
                                                onValueChange={selectField.onChange}
                                                error={errors.ticketTypes?.[index]?.ticketType?.message}
                                            />
                                        )}
                                    />
                                    <CustomInput2 
                                        label="Ticket Description (Optional)" 
                                        placeholder="Enter Ticket description" 
                                        error={errors.ticketTypes?.[index]?.description?.message}
                                        {...register(`ticketTypes.${index}.description`)} 
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <CustomPriceInput 
                                        label="Price"
                                        value={watch(`ticketTypes.${index}.price`) as number}
                                        onChange={(val) => setValue(`ticketTypes.${index}.price`, val)}
                                        currency={watch(`ticketTypes.${index}.currency`)}
                                        onCurrencyChange={(curr) => setValue(`ticketTypes.${index}.currency`, curr)}
                                        error={errors.ticketTypes?.[index]?.price?.message}
                                    />
                                    <CustomInput2 
                                        label="Quantity" 
                                        type="number" 
                                        placeholder="Available No. of Tickets"
                                        error={errors.ticketTypes?.[index]?.quantity?.message}
                                        {...register(`ticketTypes.${index}.quantity`, { valueAsNumber: true })} 
                                    />
                                    <CustomInput2 
                                        label="Per Person Max" 
                                        type="number" 
                                        placeholder="Eg: 100"
                                        error={errors.ticketTypes?.[index]?.perPersonMax?.message}
                                        {...register(`ticketTypes.${index}.perPersonMax`, { valueAsNumber: true })} 
                                    />
                                </div>

                                {/* Promo Code Section */}
                                <div className="pt-6 border-t border-dashed border-brand-secondary-2 space-y-4">
                                    <h4 className="text-brand-secondary-8 font-bold text-sm">Promo Code</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        <CustomInput2 
                                            label="Code Word" 
                                            placeholder="Enter Promo Code" 
                                            error={errors.ticketTypes?.[index]?.promoCode?.codeWord?.message}
                                            {...register(`ticketTypes.${index}.promoCode.codeWord`)} 
                                        />
                                        <CustomPercentageInput 
                                            label="Discount Amount"
                                            value={watch(`ticketTypes.${index}.promoCode.discountAmount`) as number}
                                            onChange={(val) => setValue(`ticketTypes.${index}.promoCode.discountAmount`, val)}
                                            error={errors.ticketTypes?.[index]?.promoCode?.discountAmount?.message}
                                        />
                                        <CustomInput2 
                                            label="Maximum Users" 
                                            type="number" 
                                            placeholder="50" 
                                            error={errors.ticketTypes?.[index]?.promoCode?.maximumUsers?.message}
                                            {...register(`ticketTypes.${index}.promoCode.maximumUsers`, { valueAsNumber: true })} 
                                        />
                                        
                                        <Controller
                                            name={`ticketTypes.${index}.promoCode.validTill`}
                                            control={control}
                                            render={({ field }) => (
                                                <CustomDatePicker 
                                                    label="Valid Till"
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                    error={errors.ticketTypes?.[index]?.promoCode?.validTill?.message}
                                                />
                                            )}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button 
                            type="button" 
                            onClick={() => append({ id: crypto.randomUUID(), ticketType: '', price: 0, currency: 'NGN', quantity: 1 })}
                            className="w-59 h-14 rounded-[6px] border-[1.4px] border-dashed border-brand-secondary-5 bg-transparent hover:border-brand-neutral-5 hover:bg-brand-accent-1 text-brand-secondary-5 transition-all"
                        >
                            <span className="flex items-center text-sm justify-center gap-2">
                                <Icon icon="lucide:plus" className="w-4 h-4" />
                                Add another Ticket Type
                            </span>
                        </button>
                    </section>



                    {/* Sales Period */}
                    <section className="space-y-6 md:max-w-md">
                        <h3 className="text-brand-secondary-8 font-bold">Sales Period</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Controller
                                name="salesPeriod.startDateTime"
                                control={control}
                                render={({ field }) => (
                                    <CustomDatePicker 
                                        label="Start Date & Time"
                                        placeholder="Select"
                                        icon={ChevronDown}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.salesPeriod?.startDateTime?.message}
                                    />
                                )}
                            />
                            <Controller
                                name="salesPeriod.endDateTime"
                                control={control}
                                render={({ field }) => (
                                    <CustomDatePicker 
                                        label="End Date & Time"
                                        placeholder="Select"
                                        icon={ChevronDown}
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.salesPeriod?.endDateTime?.message}
                                    />
                                )}
                            />
                        </div>
                    </section>



                    {/* Refund Policy */}
                    <section className='space-y-6'>
                        <h3 className="text-brand-secondary-8 font-bold">Refund Policy</h3>
                        <Controller
                            control={control}
                            name="refundPolicy"
                            render={({ field }) => (
                                <RadioGroup 
                                    {...field}
                                    onValueChange={field.onChange}
                                    className="w-fit flex gap-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem 
                                            value="no_refund" 
                                            id="refundPolicy-r1" 
                                            className="size-5 border-2 cursor-pointer"
                                            circleIconClass="size-3 text-brand-primary-6" 
                                        />
                                        <Label htmlFor="refundPolicy-r1" className="cursor-pointer font-medium text-brand-secondary-9">
                                            No Refund
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem 
                                            value="partial" 
                                            id="refundPolicy-r2" 
                                            className="size-5 border-2 cursor-pointer" 
                                            circleIconClass="size-3 text-brand-primary-6"
                                        />
                                        <Label htmlFor="refundPolicy-r2" className="cursor-pointer font-medium text-brand-secondary-9">
                                            Partial
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem 
                                            value="full" 
                                            id="refundPolicy-r3" 
                                            className="size-5 border-2 cursor-pointer" 
                                            circleIconClass="size-3 text-brand-primary-6"
                                        />
                                        <Label htmlFor="refundPolicy-r3" className="cursor-pointer font-medium text-brand-secondary-9">
                                            Full
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem 
                                            value="custom" 
                                            id="refundPolicy-r4" 
                                            className="size-5 border-2 cursor-pointer" 
                                            circleIconClass="size-3 text-brand-primary-6"
                                        />
                                        <Label htmlFor="refundPolicy-r4" className="cursor-pointer font-medium text-brand-secondary-9">
                                            Custom
                                        </Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                        

                        {
                            refundPolicy === "custom" &&
                             <Controller
                                name="customRefundPercentage"
                                control={control}
                                render={({ field }) => (
                                    <CustomPercentageInput 
                                        label="Enter Refund Percentage"
                                        onChange={field.onChange}
                                        inputContainerStyles='max-w-29.25'
                                        value={field.value as number}
                                        error={errors.customRefundPercentage?.message}
                                    />
                                )}
                            />
                        }
                    </section>
                </form>

                <aside className="w-full lg:w-[320px] sticky top-6">
                    <CreateEventPricingSummary />
                </aside>
            </div>
        </FormProvider>
    )
}