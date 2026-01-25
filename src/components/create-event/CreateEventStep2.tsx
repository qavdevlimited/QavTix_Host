import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput2 from "../custom-utils/inputs/CustomInput2";
import { Label } from "../ui/label";
import { Step2FormData, step2Schema } from "@/schemas/create-event.schema";
import AdditionalImagesUpload from "../custom-utils/inputs/FileUpload2";
import { FeaturedImageUpload } from "../custom-utils/inputs/FileUpload1";
import { Button } from "../ui/button";
import { Plus, Trash2 } from "lucide-react";
import CustomTextArea from "../custom-utils/inputs/CustomTextarea";
import { VideoUpload } from "../custom-utils/inputs/VideoUpload";
import PhoneNumberInput from "../custom-utils/inputs/CustomPhoneInput";
import MultiStepFormButtonDuo from "../custom-utils/buttons/MultiStepFormButtonDuo";


export default function CreateEventStep2() {
    const { control, register, watch, formState: { errors } } = useForm<Step2FormData>({
        resolver: zodResolver(step2Schema),
        defaultValues: {
            shortDescription: "",
            fullDescription: "",
            organizerDisplayName: "",
            publicEmail: "",
            additionalImages: [],
            socialMediaLinks: []
        }
    })


    const { fields, append, remove } = useFieldArray({
        control,
        name: "socialMediaLinks"
    })

    return (
        <form className="relative flex flex-col min-h-full pb-32">
            {/* The Responsive Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-14 lg:gap-20">
                {/* Left Column: Descriptions and Media */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-brand-secondary-8 font-bold text-lg">Event Description</h3>
                        <CustomInput2
                            label="Short Description"
                            placeholder="Enter Short Description"
                            {...register("shortDescription")}
                            helperText={`${watch("shortDescription")?.length || 0}/160 characters max`}
                            required
                            error={errors.shortDescription?.message}
                        />

                        <CustomTextArea 
                            label="Full Description"
                            placeholder="Includes agenda, performers, dress code..."
                            {...register("fullDescription")}
                            helperText={`${watch("fullDescription")?.length || 0}/5000 characters max`}
                            required
                            error={errors.fullDescription?.message}
                        />
                    </div>

                    <div className="space-y-8">
                        {/* Media Uploads Grouped */}
                        <div className="space-y-2.5">
                            <Label className="text-brand-secondary-9">Featured Image</Label>
                            <Controller
                                control={control}
                                name="featuredImage"
                                render={({ field }) => (
                                    <FeaturedImageUpload 
                                        value={field.value} 
                                        onChange={field.onChange} 
                                        error={errors.featuredImage?.message as string}
                                    />
                                )}
                            />
                        </div>

                        <div className="space-y-2.5">
                            <Label className="text-brand-secondary-9">Additional Images</Label>
                            <Controller
                                control={control}
                                name="additionalImages"
                                render={({ field }) => (
                                    <AdditionalImagesUpload 
                                        value={field.value} 
                                        onChange={field.onChange} 
                                        maxImages={10}
                                        error={errors.additionalImages?.message}
                                    />
                                )}
                            />
                        </div>

                        <div className="space-y-2.5">
                            <Label className="text-brand-secondary-9">Event Video (Optional)</Label>
                            <Controller
                                control={control}
                                name="eventVideo"
                                render={({ field }) => (
                                    <VideoUpload 
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.eventVideo?.message}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </section>

                <div className="flex items-center justify-center">
                    <div className="w-full lg:w-[1.5px] h-[1.5px] lg:h-full border-t-[1.5px] lg:border-t-0 lg:border-l-[1.5px] border-dashed border-brand-secondary-3 opacity-50" />
                </div>

                {/* Right Column: Organizer Information */}
                <section className="space-y-12">
                    <div className="space-y-6">
                        <h3 className="text-brand-secondary-8 font-bold text-lg">Organizer Information</h3>
                        
                        <CustomInput2 
                            label="Display Name"
                            placeholder="Dominic Evans"
                            {...register("organizerDisplayName")}
                            error={errors.organizerDisplayName?.message}
                        />

                        <CustomTextArea 
                            label="Organizer Description (Optional)"
                            placeholder="Enter Description"
                            {...register("organizerDescription")}
                            helperText="0/5000 characters max"
                            error={errors.organizerDescription?.message}
                        />

                        <CustomInput2 
                            label="Public Email"
                            placeholder="Enter email address"
                            {...register("publicEmail")}
                            error={errors.publicEmail?.message}
                        />

                        <Controller
                            name="phoneNumber"
                            control={control}
                            render={({ field }) => (
                                <PhoneNumberInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={errors.phoneNumber?.message}
                                    defaultCountry="NG"
                                />
                            )}
                        />
                    </div>

                    <div className="space-y-6">
                        <Label className="text-brand-secondary-9">Social Media Links (Optional)</Label>
                        
                        <div className="space-y-4">
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex gap-3 items-center animate-in fade-in slide-in-from-top-2">
                                    <div className="flex-1">
                                        <CustomInput2
                                            label="" 
                                            placeholder="https://instagram.com/..."
                                            {...register(`socialMediaLinks.${index}.url`)}
                                            error={errors.socialMediaLinks?.[index]?.url?.message}
                                        />
                                    </div>
                                    <Button 
                                        variant="ghost" 
                                        size="icon" 
                                        onClick={() => remove(index)}
                                        className="text-red-500 hover:bg-red-50 mt-1"
                                    >
                                        <Trash2 className="size-4" />
                                    </Button>
                                </div>
                            ))}

                            <button
                                type="button"
                                onClick={() => append({ id: crypto.randomUUID(), platform: "custom", url: "" })}
                                className="w-full h-14 rounded-lg border-2 border-dashed border-brand-secondary-3 text-brand-secondary-5 flex items-center justify-center gap-2 hover:bg-neutral-50 hover:border-brand-secondary-4 transition-all text-sm font-medium"
                            >
                                <Plus className="size-4" />
                                Add more Links
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-20">
                <div />
                <div />
                <div className="">
                    <MultiStepFormButtonDuo />
                </div>
            </div>
        </form>
    )
}