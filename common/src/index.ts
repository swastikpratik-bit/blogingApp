import zod from "zod";

export const signupInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
    name: zod.string().optional()
})

export const signinInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
}) 

export const createBlogInput = zod.object({
    title: zod.string(),
    content : zod.string()
})
export const updateblogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
    id : zod.string()
})

export type signinInput = zod.infer<typeof signinInput>
export type signupInput = zod.infer<typeof signupInput>
export type createBlogInput = zod.infer<typeof createBlogInput>
export type updateblogInput = zod.infer<typeof updateblogInput>
