export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await db.insert(devicesTable).values(body).returning();
});
