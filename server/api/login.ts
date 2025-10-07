export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user || !(await verifyPassword(user.password, password))) {
    throw createError({
      statusCode: 401,
      statusMessage: "Invalid username or password",
    });
  }
  await setUserSession(event, {
    user: { id: user.id, username: user.username },
  });
  return { message: "Login successful" };
});
