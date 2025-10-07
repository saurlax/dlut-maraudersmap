export default defineNitroPlugin(async () => {
  const user = await prisma.user.findFirst();
  if (!user) {
    await prisma.user.create({
      data: {
        username: "admin",
        password: await hashPassword("admin"),
      },
    });
  }
});
