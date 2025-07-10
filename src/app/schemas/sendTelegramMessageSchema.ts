import { z } from "zod";

export const sendTelegramMessageSchema = z.object({
  name: z.string().min(1, "Телеграмм имя обязательно"),
  message:  z.string().optional(),
});

export type SendTelegramMessageFormType = z.infer<typeof sendTelegramMessageSchema>
