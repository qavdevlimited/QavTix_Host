import { z } from "zod";

export const addCollaboratorSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email address"),
    role: z.string().min(1, "Please select a role"),
})

export type AddCollaboratorFormValues = z.infer<typeof addCollaboratorSchema>;