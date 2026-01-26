import { useForm, useFieldArray, Controller, SubmitHandler } from "react-hook-form";
import { Plus, Info } from "lucide-react";
import CustomInput2 from "../custom-utils/inputs/CustomInput2";
import CustomSelect2 from "../custom-utils/inputs/CustomSelect2";
import { Step1FormData, step1Schema } from "@/schemas/create-event.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomDateTimeInput } from "../custom-utils/inputs/CustomDateTimeInput";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { EVENT_CATEGORIES, POPULAR_TAGS } from "@/lib/features/create-event/resources/constants";
import MultiSelectTags from "../custom-utils/inputs/MultiSelectTags";
import { cn } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { countries } from "@/components-data/location";
import ActionButton1 from "../custom-utils/buttons/ActionBtn1";
import { useEventCreation } from "@/contexts/create-event/CreateEventProvider";
import { useStepper } from "@/contexts/create-event/StepperProvider";
import { useEffect } from "react";


export default function CreateEventStep1() {
    
    const { updateStep } = useEventCreation()
    const { goToNextStep } = useStepper()
    const { control, formState: { errors }, setValue, watch, register, handleSubmit } = useForm<Step1FormData>({
        resolver: zodResolver(step1Schema),
        defaultValues: {
            eventType: 'single',
            locationType: "physical",
            startDateTime: "",
            endDateTime: "",
            dates: [{ startDateTime: "", endDateTime: "" }]
        }
    })

    const eventType = watch("eventType")
    const selectedTags = watch("additionalTags") || []

    // Dynamic fields for recurring dates
    const { fields, append, remove } = useFieldArray({
        control,
        name: "dates"
    })


    const handleStep1Submit : SubmitHandler<Step1FormData> = (data) => {
        updateStep("basicInformation", {
            ...data,
            startDateTime: data.startDateTime!,
            endDateTime: data.endDateTime!,
        })

        goToNextStep()
    }

    useEffect(() => {
        if (eventType !== "recurring"){
            setValue("dates", [])
        }
    },[eventType])


    return (
        <form className="space-y-10 md:pb-20" onSubmit={handleSubmit(handleStep1Submit)}>
            {/* Event Basics */}
            <section>
                <h3 className="text-brand-secondary-8 mb-5 font-bold text-sm md:text-base">Event Basics</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    <CustomInput2
                        label="Event Title"
                        placeholder="E.g: Burna Boy Live in Concert 2025"
                        {...register("eventTitle")}
                        required
                        error={errors.eventTitle?.message}
                    />
                    <Controller
                        name="eventCategory"
                        defaultValue=''
                        control={control}
                        render={({ field }) => (
                            <CustomSelect2
                                label="Event Category"
                                options={EVENT_CATEGORIES}
                                value={field.value}
                                onValueChange={field.onChange}
                                required
                                error={errors.eventCategory?.message}
                            />
                        )}
                    />
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-brand-secondary-9 block">
                            Additional Tags (up to 5)
                        </label>
                        <MultiSelectTags
                            options={POPULAR_TAGS}
                            selected={selectedTags}
                            onChange={(v) => setValue("additionalTags", v)}
                            placeholder="Select event tags..."
                            maxDisplay={3}
                        />
                        {errors.additionalTags && (
                            <p className="text-xs text-red-500 mt-1.5 ml-1">
                                {errors.additionalTags?.message}
                            </p>
                        )}
                    </div>
                </div>
            </section>

            {/* Date and Time Section */}
            <section className="space-y-5">
                <h3 className="text-brand-secondary-8 font-bold text-sm md:text-base">Date & Time</h3>

                {/* Radio Group */}
                <Controller
                    control={control}
                    name="eventType"
                    render={({ field }) => (
                        <RadioGroup 
                            {...field}
                            onValueChange={field.onChange}
                            className="w-fit flex gap-6"
                        >
                            <div className="flex items-center gap-3">
                            <RadioGroupItem 
                                value="single" 
                                id="eventType-r1" 
                                className={cn(
                                    "size-5 border-2 cursor-pointer transition-colors",
                                    "border-brand-secondary-3", 
                                    "data-[state=checked]:border-brand-primary-6",
                                    "focus-visible:ring-brand-primary-6"
                                )}
                                circleIconClass="size-3 text-brand-primary-6 fill-brand-primary-6" 
                            />
                                <Label htmlFor="eventType-r1" className="cursor-pointer text-sm font-medium text-brand-secondary-9">
                                    Single Event
                                </Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="recurring" 
                                    id="eventType-r2" 
                                    className={cn(
                                        "size-5 border-2 cursor-pointer transition-colors",
                                        "border-brand-secondary-3", 
                                        "data-[state=checked]:border-brand-primary-6",
                                        "focus-visible:ring-brand-primary-6"
                                    )}
                                    circleIconClass="size-3 text-brand-primary-6"
                                />
                                <Label htmlFor="eventType-r2" className="cursor-pointer font-medium text-brand-secondary-9">
                                    Recurring Event
                                </Label>
                            </div>
                        </RadioGroup>
                    )}
                />

                {
                    eventType === "recurring" &&
                    <div className="flex items-center gap-2 text-xs text-brand-secondary-8">
                        <Info className="size-4" />
                        <span>Suitable for events with multiple days</span>
                    </div>
                }

                {/* Single Event Inputs */}
                {eventType === 'single' && (
                    <div className="grid grid-cols-2 gap-5 max-w-lg">
                        <CustomDateTimeInput
                            label="Start Date & Time"
                            {...register("startDateTime")}
                            error={errors.startDateTime?.message}
                        />
                        <CustomDateTimeInput
                            label="End Date & Time"
                            {...register("endDateTime")}
                            error={errors.endDateTime?.message}
                        />
                    </div>
                )}

                {/* Recurring Event Inputs */}
                {eventType === 'recurring' && (
                    <div className="space-y-6 max-w-lg">
                        {fields.map((field, index) => (
                            <div key={field.id} className="flex flex-row items-start sm:items-end gap-4">
                                
                                {/* For Mobile Buttons */}
                                {index > 0 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => remove(index)}
                                        className={cn("text-red-400 hover:text-red-600 hover:bg-red-50 size-9 shrink-0 md:hidden")}
                                    >
                                        <Icon icon="lucide:trash-2" className="size-4" />
                                    </Button>
                                )}
                                {
                                    index === 0 &&
                                    <div className="flex flex-col md:hidden">
                                        <span className="text-sm font-medium text-brand-secondary-8">Add Date</span>
                                        <button
                                            type="button"
                                            onClick={() => append({ startDateTime: '', endDateTime: '' })}
                                            className="flex items-center gap-2 h-12 p-3 bg-brand-primary-1 w-fit rounded-md border-brand-neutral-3 text-brand-primary-4 hover:border-brand-primary-4 hover:text-brand-primary-6 transition-all group"
                                        >
                                            <Plus className="w-5 h-5 group-hover:scale-105 transition-transform" />

                                        </button>
                                    </div>
                                }
                                
                                <CustomDateTimeInput
                                    label={index === 0 ? "First Day" : `Day ${index + 1}`}
                                    {...register(`dates.${index}.startDateTime`)}
                                    error={errors.dates?.[index]?.startDateTime?.message}
                                />
                                <CustomDateTimeInput
                                    label="End Time"
                                    {...register(`dates.${index}.endDateTime`)}
                                    error={errors.dates?.[index]?.endDateTime?.message}
                                />



                                {/* Desktop Buttons */}
                                {index > 0 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => remove(index)}
                                        className={cn("text-red-400 hover:text-red-600 hover:bg-red-50 size-9 shrink-0 hidden md:block")}
                                    >
                                        <Icon icon="lucide:trash-2" className="size-4" />
                                    </Button>
                                )}
                                {
                                    index === 0 &&
                                    <div className="flex-col hidden md:flex">
                                        <span className="text-sm font-medium text-brand-secondary-8">Add Date</span>
                                        <button
                                            type="button"
                                            onClick={() => append({ startDateTime: '', endDateTime: '' })}
                                            className="flex items-center gap-2 h-12 p-3 bg-brand-primary-1 w-fit rounded-md border-brand-neutral-3 text-brand-primary-4 hover:border-brand-primary-4 hover:text-brand-primary-6 transition-all group"
                                        >
                                            <Plus className="w-5 h-5 group-hover:scale-105 transition-transform" />
                                        </button>
                                    </div>
                                }
                            </div>
                        ))}
                    </div>
                )}
            </section>



            <section className="space-y-5">
                <h3 className="text-brand-secondary-8 font-bold text-sm md:text-base">Location</h3>

                {/* Location Radio Group */}
                <Controller
                    control={control}
                    name="locationType"
                    render={({ field }) => (
                        <RadioGroup 
                            {...field}
                            onValueChange={field.onChange}
                            className="w-fit flex gap-6"
                        >
                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="physical" 
                                    id="loc-physical" 
                                    className={cn(
                                        "size-5 border-2 cursor-pointer transition-colors",
                                        "border-brand-secondary-3", 
                                        "data-[state=checked]:border-brand-primary-6",
                                        "focus-visible:ring-brand-primary-6"
                                    )} 
                                    circleIconClass="size-3 text-brand-primary-6"
                                />
                                <Label htmlFor="loc-physical" className="cursor-pointer font-medium text-brand-secondary-9 text-sm">Physical Venue</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="online" 
                                    id="loc-online" 
                                    className={cn(
                                        "size-5 border-2 cursor-pointer transition-colors",
                                        "border-brand-secondary-3", 
                                        "data-[state=checked]:border-brand-primary-6",
                                        "focus-visible:ring-brand-primary-6"
                                    )} 
                                    circleIconClass="size-3 text-brand-primary-6"
                                />
                                <Label htmlFor="loc-online" className="cursor-pointer font-medium text-brand-secondary-9 text-sm">Online Event</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem 
                                    value="tba" 
                                    id="loc-tba" 
                                    className={cn(
                                        "size-5 border-2 cursor-pointer transition-colors",
                                        "border-brand-secondary-3", 
                                        "data-[state=checked]:border-brand-primary-6",
                                        "focus-visible:ring-brand-primary-6"
                                    )} 
                                    circleIconClass="size-3 text-brand-primary-6"
                                />
                                <Label htmlFor="loc-tba" className="cursor-pointer font-medium text-brand-secondary-9 text-sm">To Be Announced</Label>
                            </div>
                        </RadioGroup>
                    )}
                />

                {/* Physical Venue Fields */}
                {watch("locationType") === 'physical' && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <CustomInput2
                                label="Venue Name"
                                placeholder="E.g: Eko Atlantic Energy City"
                                {...register("venueName")}
                                error={errors.venueName?.message}
                            />
                            <CustomInput2
                                label="Address"
                                placeholder="Enter Street Address"
                                {...register("address")}
                                error={errors.address?.message}
                            />
                            <CustomSelect2
                                label="Country"
                                options={countries}
                                {...register("country")}
                                error={errors.country?.message}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <CustomInput2
                                label="State/Region"
                                placeholder="Enter State/Region"
                                {...register("state")}
                                error={errors.state?.message}
                            />
                            <CustomInput2
                                label="City"
                                placeholder="Enter City"
                                {...register("city")}
                                error={errors.city?.message}
                            />
                            <CustomInput2
                                label="Postal Code"
                                placeholder="Enter Postal Code (Optional)"
                                {...register("postalCode")}
                                error={errors.postalCode?.message}
                            />
                        </div>

                        <button 
                            type="button" 
                            className="flex items-center gap-1 text-brand-primary-6 font-semibold text-sm hover:underline"
                        >
                            Find on Map 
                            <Icon icon="tabler:arrow-right" width="24" height="24" className="size-5" />
                        </button>
                    </div>
                )}

                {/* Online Event Fields */}
                {watch("locationType") === 'online' && (
                    <div className="max-w-md">
                        <CustomInput2
                            label="Event Link"
                            placeholder="E.g: https://zoom.us/j/123456"
                            {...register("onlineLink")}
                            error={errors.onlineLink?.message}
                        />
                    </div>
                )}


                {watch("locationType") === 'tba' && (
                    <div className="flex items-center gap-2 text-xs text-brand-secondary-8">
                        <Info className="size-4" />
                        <span>Event Location Details will be emailed to Registered Attendees</span>
                    </div>
                )}
            </section>


            <ActionButton1 
                buttonText="Continue to details"
                iconPosition="right"
                buttonType="submit"
                icon="gravity-ui:arrow-right"
                className="mt-4"
            />
        </form>
    )
}