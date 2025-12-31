import { eq, like, or } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  if (!q || typeof q !== "string") {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Query parameter 'q' is required",
    });
  }
  return await db
    .select()
    .from(devicesTable)
    .where(or(eq(devicesTable.mac, q), like(devicesTable.info, q)));
});
