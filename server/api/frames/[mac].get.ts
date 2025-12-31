import { eq, or } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { mac } = getRouterParams(event);
  return await db
    .select()
    .from(framesTable)
    .where(
      or(
        eq(framesTable.probe, mac),
        eq(framesTable.from, mac),
        eq(framesTable.to, mac)
      )
    );
});
