export default defineEventHandler(async (event) => {
  return await db.select().from(devices);
});
