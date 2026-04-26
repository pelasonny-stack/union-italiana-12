import { z } from "zod";
import { LOCALES } from "../i18n";

const trimmed = (min: number, max: number) =>
  z.string().trim().min(min).max(max);

const longText = (min: number, max = 5000) =>
  z.string().trim().min(min).max(max);

const ageOver18 = (iso: string) => {
  const dob = new Date(iso);
  if (Number.isNaN(dob.getTime())) return false;
  const today = new Date();
  const age =
    today.getFullYear() -
    dob.getFullYear() -
    (today < new Date(today.getFullYear(), dob.getMonth(), dob.getDate())
      ? 1
      : 0);
  return age >= 18 && age < 120;
};

export const PetitionSchema = z.object({
  // Identidad (1-7)
  firstName: trimmed(2, 60),
  lastName: trimmed(2, 60),
  dateOfBirth: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato YYYY-MM-DD")
    .refine(ageOver18, "Edad mínima 18 años"),
  nationality: trimmed(2, 120),
  documentType: z.enum(["DNI", "Passport", "CarnetIT", "Other"]),
  documentNumber: trimmed(3, 40),
  address: trimmed(5, 200),
  city: trimmed(2, 80),
  province: trimmed(2, 80),
  country: trimmed(2, 80),
  phone: trimmed(6, 30),
  email: z.string().email().max(120),

  // Contexto (8-10)
  maritalStatus: z
    .enum(["soltero", "casado", "union", "divorciado", "viudo", "otro"])
    .optional(),
  occupation: trimmed(3, 200),
  education: z.string().trim().max(200).optional(),

  // Reflexión (11-14)
  religiousPosition: longText(200, 2000),
  howKnownMasonry: longText(300, 3000),
  whyPetition: longText(800, 5000),
  whyThisLodge: longText(300, 3000),

  // Referencias (15-17)
  knownBrothers: z.string().trim().max(500).optional(),
  reference1Name: trimmed(2, 80),
  reference1Contact: trimmed(5, 120),
  reference2Name: trimmed(2, 80),
  reference2Contact: trimmed(5, 120),
  otherInitiaticOrders: z.string().trim().max(500).optional(),

  // Antecedentes (18-20)
  criminalRecord: z.enum(["no", "yes"]),
  criminalRecordDetail: z.string().trim().max(2000).optional(),
  availability: z.array(z.string()).min(1).max(7),
  contributionRange: z.enum(["minimo", "medio", "amplio", "prefiero-no-decir"]),

  // Cierre (21-23)
  freeComment: z.string().trim().max(3000).optional(),
  declarationTruth: z.literal(true),
  dataConsent: z.literal(true),

  // Anti-bot
  turnstileToken: z.string().min(10),
  honeypot: z.string().max(0),
  formStartedAt: z.number().int().positive(),

  // i18n
  preferredLanguage: z.enum(LOCALES),
});

export type PetitionInput = z.infer<typeof PetitionSchema>;

export const PETITION_FIELD_GROUPS = {
  identity: [
    "firstName",
    "lastName",
    "dateOfBirth",
    "nationality",
    "documentType",
    "documentNumber",
    "address",
    "city",
    "province",
    "country",
    "phone",
    "email",
  ],
  context: ["maritalStatus", "occupation", "education"],
  reflection: [
    "religiousPosition",
    "howKnownMasonry",
    "whyPetition",
    "whyThisLodge",
  ],
  references: [
    "knownBrothers",
    "reference1Name",
    "reference1Contact",
    "reference2Name",
    "reference2Contact",
    "otherInitiaticOrders",
  ],
  background: [
    "criminalRecord",
    "criminalRecordDetail",
    "availability",
    "contributionRange",
  ],
  closing: ["freeComment", "declarationTruth", "dataConsent"],
} as const;
