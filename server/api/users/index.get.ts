export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  return await prisma.user.findMany({
    omit: { password: true },
  });
});
