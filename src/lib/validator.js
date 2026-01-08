import { z } from "zod";

export const achievementSchema = z.object({
  student_id: z.number(),
  title: z.string().min(3),
  description: z.string().min(5),
});
