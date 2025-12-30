import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { mac } = getRouterParams(event);
  return await db.select().from(devices).where(eq(devices.mac, mac));
});
