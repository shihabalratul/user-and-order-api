import { z } from 'zod';

const NameValidationSchema = z.object({
    firstName: z
        .string()
        .trim()
        .regex(/^[a-zA-Z ]+$/, {
            message: 'Firstname should only contain Alphabetical characters',
        })
        .transform((val) => {
            return val[0].toUpperCase() + val.slice(1).toLowerCase();
        }), // Check if data contains only alphabets then converts first charercter to uppercase and everything elso to lowercase
    lastName: z
        .string()
        .trim()
        .regex(/^[a-zA-Z ]+$/, {
            message: 'Lastname should only contain Alphabetical characters',
        })
        .transform((val) => {
            return val[0].toUpperCase() + val.slice(1).toLowerCase();
        }), // Check if data contains only alphabets then converts first charercter to uppercase and everything elso to lowercase
});

const AddressValidationSchema = z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
});

export const OrderValidationSchema = z.object({
    productName: z.string(),
    price: z.number().positive({ message: 'Price must be a positive number.' }),
    quantity: z
        .number()
        .positive({ message: 'Quantity must be a positive number.' }),
});

const UserValidationSchema = z.object({
    userId: z.number(),
    username: z.string().trim().toLowerCase(),
    password: z.string(),
    fullName: NameValidationSchema,
    age: z.number().positive({ message: 'Age must be a positive number.' }),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email({ message: 'Invalid email address.' }), // remove excess spaces and converts everything to lowercase before validating email
    isActive: z.boolean().default(true),
    hobbies: z.array(z.string()),
    address: AddressValidationSchema,
    orders: z.array(OrderValidationSchema).optional(),
});

export default UserValidationSchema;
