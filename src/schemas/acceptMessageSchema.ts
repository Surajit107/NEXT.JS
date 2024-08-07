import { z } from "zod";

export const accpetMessagesSchema = z.object({
    accpetMessages: z.boolean(),
});