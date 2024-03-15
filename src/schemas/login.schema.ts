import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({
    message: 'email',
  }),
  password: z
    .string()
    .min(8, {
      message: 'password',
    })
    .refine((val) => val.trim() === val, {
      message: 'password',
    }),
});

export { loginSchema };
