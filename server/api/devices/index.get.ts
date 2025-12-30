export default defineEventHandler(async (event) => {
  return await prisma.device.findMany();
});
