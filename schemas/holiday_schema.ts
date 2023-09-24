import { z } from 'zod';

export const holidaySchema = z.object({
  date: z.coerce.date(),
  name: z.string(),
});

export type Holiday = z.infer<typeof holidaySchema>;
