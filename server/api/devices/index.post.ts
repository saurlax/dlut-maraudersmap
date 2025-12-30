export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await db.insert(devices).values(body).returning();
});
