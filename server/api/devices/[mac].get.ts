export default defineEventHandler(async (event) => {
  const { mac } = getRouterParams(event);
  return prisma.device.findUnique({
    where: { mac },
    include: { reportedBy: true, reports: true },
  });
});
