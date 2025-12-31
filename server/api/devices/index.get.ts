import { like, or } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  if (q) {
    return await db
      .select()
      .from(devicesTable)
      .where(
        or(like(devicesTable.mac, `${q}%`), like(devicesTable.info, `%${q}%`))
      );
  } else {
    return await db.select().from(devicesTable);
  }
});
