import { createPromoCodeSchema, CreatePromoCodeSchemaType } from "@/schemas/create-promo-code.schema";
import { AnimatedDialog } from "../dialogs/AnimatedDialog";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import CustomInput1 from "../inputs/CustomInput1";
import { DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from "@/components/ui/select";
import { mockUpcomingEvents } from "@/components-data/demo-data";
import EventInfo from "../event/EventInfo";

export default function CreatePromoCodeForm({ 
    openPromoModal, 
    setOpenPromoModal 
}: { 
    openPromoModal: boolean, 
    setOpenPromoModal: Dispatch<SetStateAction<boolean>> 
}) {

    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<CreatePromoCodeSchemaType>({
        resolver: zodResolver(createPromoCodeSchema),
    })

    const onSubmit : SubmitHandler<CreatePromoCodeSchemaType> = (data) => {
        console.log(data)
    }

    return (
        <AnimatedDialog className="md:max-w-[25em]" open={openPromoModal} onOpenChange={setOpenPromoModal}>
            <div>
                <div className="flex justify-center items-center flex-col text-center">
                    <DialogTitle className="font-semibold text-brand-secondary-9">Create Promo Code</DialogTitle>
                    <p className="text-sm text-brand-secondary-6 mt-2">Fill out the form to create a new Promo Code</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-5">
                    <div className="flex justify-between gap-4">
                        {/* Promo Code */}
                        <CustomInput1
                            label="Promo Code"
                            required
                            showAshk={false}
                            error={errors.promo_code?.message}
                            {...register('promo_code')}
                            className="h-11.25! border-0! rounded-sm!"
                            placeholder="Enter promo code"
                        />

                        {/* Discount */}
                        <div className="relative h-fit w-[45%]">
                            <CustomInput1
                                label="Discount"
                                required
                                showAshk={false}
                                type="number"
                                className="pr-12 h-11.25! border-0! rounded-e-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                error={errors.discount?.message}
                                {...register('discount', { valueAsNumber: true })}
                                placeholder="10"
                            />
                            <div className="absolute -right-px bottom-0 my-auto top-[2em] h-11.25 w-10 text-brand-neutral-6 rounded-e-md flex items-center justify-center bg-brand-neutral-7 font-medium text-sm">
                                %
                            </div>
                        </div>
                    </div>

                    {/* Usage Limit */}
                    <CustomInput1
                        label="Usage Limit"
                        required
                        showAshk={false}
                        error={errors.usage_limit?.message}
                        {...register('usage_limit')}
                        className="h-11.25! border-0! rounded-sm!"
                        placeholder="Eg: First 50 People"
                    />

                    {/* Valid Until */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium text-brand-secondary-9">
                            Valid until
                        </label>
                        <Controller
                            name="valid_until"
                            control={control}
                            render={({ field }) => (
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className={cn(
                                                "w-full h-11.25 justify-between text-left font-normal bg-brand-neutral-3 border-brand-neutral-3 hover:bg-brand-neutral-3",
                                                !field.value && "text-brand-neutral-6"
                                            )}
                                        >
                                            {field.value ? format(field.value, "dd/MM/yyyy") : "DD/MM/YY"}
                                            <CalendarIcon className="h-4 w-4 text-brand-neutral-6" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                        />
                                    </PopoverContent>
                                </Popover>
                            )}
                        />
                        {errors.valid_until && (
                            <p className="text-xs text-red-500">{errors.valid_until.message}</p>
                        )}
                    </div>

                   <Controller
                        name="event_id"
                        control={control}
                        render={({ field }) => (
                            <div className="w-full">
                                <Label className="block text-sm font-medium text-brand-neutral-9 mb-2">
                                    Events Applicable
                                </Label>
                                
                                <Select value={field.value} onValueChange={field.onChange}>
                                    <SelectTrigger
                                        className={cn(
                                            "w-full px-4 py-3 text-sm rounded-lg min-h-11.25 h-11.25 outline-none bg-[#F2F2F2] text-brand-neutral-9 transition-all",
                                            errors.event_id 
                                                ? 'border border-red-400 focus:ring-red-500' 
                                                : 'border-transparent focus:border-[1.5px] focus:border-brand-neutral-6 hover:border-brand-neutral-5 border'
                                        )}
                                    >
                                        <SelectValue placeholder="Select Event" />
                                    </SelectTrigger>

                                    <SelectContent position="popper" className="bg-white z-50 max-h-60">
                                        {mockUpcomingEvents.map(option => (
                                            <SelectItem 
                                                key={option.id} 
                                                value={option.id} 
                                                className='cursor-pointer focus:bg-brand-neutral-4 my-1 py-1 focus:text-white'
                                            >
                                                <EventInfo 
                                                    variant="mobile"
                                                    category={option.category}
                                                    image={option.image}
                                                    title={option.title}
                                                />
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                {errors.event_id && (
                                    <p className="text-xs text-red-500 mt-1.5 ml-1">
                                        {errors.event_id.message}
                                    </p>
                                )}
                            </div>
                        )}
                    />
                    {/* Action Buttons */}
                    <div className="flex justify-between gap-4 pt-3">
                        <button
                            type="button"
                            onClick={() => setOpenPromoModal(false)}
                            className="flex-1 text-brand-secondary-8 bg-white hover:shadow flex items-center gap-2 justify-center px-6 py-3.5 rounded-[30px] border-2 border-brand-secondary-3 font-medium text-sm hover:bg-brand-neutral-2 hover:border-brand-secondary-5 active:bg-brand-neutral-3 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-neutral-4 focus:ring-offset-2 transition-all duration-150"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="flex-1 px-6 py-3.5 rounded-[30px] bg-brand-primary hover:bg-brand-primary-7 active:bg-brand-primary-8 hover:shadow-md active:scale-[0.98] disabled:bg-brand-neutral-5 disabled:cursor-not-allowed disabled:opacity-60 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 transition-all duration-150 flex items-center justify-center gap-2"
                        >
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </AnimatedDialog>
    )
}