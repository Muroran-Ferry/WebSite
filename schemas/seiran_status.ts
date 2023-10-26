import { z } from 'zod';

export const seiranStatus = z.object({
  route: z.string(),
  status: z.string(),
  statusText: z.string(),
  updatedAt: z.string().datetime(),
});

export type SeiranStatus = z.infer<typeof seiranStatus>;
