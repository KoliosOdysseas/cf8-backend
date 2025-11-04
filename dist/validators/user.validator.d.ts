import { z } from 'zod';
export declare const phoneSchema: z.ZodObject<{
    type: z.ZodString;
    number: z.ZodString;
}, z.core.$strip>;
export declare const addressSchema: z.ZodObject<{
    area: z.ZodOptional<z.ZodString>;
    street: z.ZodOptional<z.ZodString>;
    number: z.ZodOptional<z.ZodString>;
    po: z.ZodOptional<z.ZodString>;
    municipality: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const createUserSchema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    firstname: z.ZodOptional<z.ZodString>;
    lastname: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodObject<{
        area: z.ZodOptional<z.ZodString>;
        street: z.ZodOptional<z.ZodString>;
        number: z.ZodOptional<z.ZodString>;
        po: z.ZodOptional<z.ZodString>;
        municipality: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>;
    phone: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        number: z.ZodString;
    }, z.core.$strip>>>;
    roles: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const updateUserSchema: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    firstname: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    lastname: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    address: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        area: z.ZodOptional<z.ZodString>;
        street: z.ZodOptional<z.ZodString>;
        number: z.ZodOptional<z.ZodString>;
        po: z.ZodOptional<z.ZodString>;
        municipality: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>>>;
    phone: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        number: z.ZodString;
    }, z.core.$strip>>>>;
    roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString>>>;
}, z.core.$strip>;
//# sourceMappingURL=user.validator.d.ts.map