import { z } from 'zod';

export const announcementSchema = z.object({
  title: z.string(),
  linkTo: z.string().url().nullable(),
});

export type Announcement = z.infer<typeof announcementSchema>;
