export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  const body = await readBody(event);
  return await prisma.device.create({
    data: body,
  });
});
