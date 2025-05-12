import { useValidatedBody, v, vh } from 'h3-valibot';

const loginSchema = v.object({
  email: vh.email,
  password: v.pipe(v.string(), v.minLength(6)),
});

export default defineEventHandler(async (event) => {
  const { email, password } = await useValidatedBody(event, loginSchema);
});
