import { z } from 'zod';

export const priceScheduleSchema = z.object({
  startDate: z.coerce.date(),
  endDate: z.coerce.date(),
  priceClass: z.string(),
});

export type PriceSchedule = z.infer<typeof priceScheduleSchema>;
