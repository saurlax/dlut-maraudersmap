export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  return await prisma.device.findMany();
});
