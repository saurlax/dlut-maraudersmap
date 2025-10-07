export default defineEventHandler(async (event) => {
  await requireUserSession(event);
  const { id } = getRouterParams(event);
  const { password } = await readBody(event);
  return await prisma.user.update({
    where: { id: Number(id) },
    data: { password: await hashPassword(password) },
  });
});
