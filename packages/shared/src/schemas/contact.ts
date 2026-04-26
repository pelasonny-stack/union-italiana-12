import { z } from "zod";
import { LOCALES } from "../i18n";

export const ContactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().email().max(120),
  subject: z.enum(["general", "academia", "hermano-visitante"]),
  message: z.string().trim().min(20).max(3000),
  turnstileToken: z.string().min(10),
  honeypot: z.string().max(0),
  formStartedAt: z.number().int().positive(),
  preferredLanguage: z.enum(LOCALES),
});

export type ContactInput = z.infer<typeof ContactSchema>;
