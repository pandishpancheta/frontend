import { z } from 'zod';

const signupSchema = z
  .object({
    email: z.string().email({
      message: 'email',
    }),
    username: z
      .string()
      .min(3, {
        message: 'username.min_length',
      })
      .max(16, {
        message: 'username.max_length',
      })
      .regex(/^[a-z0-9._]+$/, {
        message: 'username.invalid_characters', // Custom error message
      })
      .refine((val) => val === val.toLowerCase(), {
        message: 'username.invalid_characters',
      })
      .refine((val) => val.trim() === val, {
        message: 'username.invalid_characters',
      }),
    password: z
      .string()
      .min(8, {
        message: 'password',
      })
      .refine((val) => val.trim() === val, {
        message: 'password',
      }),
    confirmPassword: z.string().min(8, {
      message: 'password',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'confirmPassword',
    path: ['confirmPassword'],
  });

export { signupSchema };
