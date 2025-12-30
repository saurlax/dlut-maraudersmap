export default defineEventHandler(async (event) => {
  const { q } = getQuery(event);
  if (!q || typeof q !== "string") {
    throw createError({
      statusCode: 400,
      statusMessage: "Bad Request",
      message: "Query parameter 'q' is required",
    });
  }
  if (
    /^(([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}|([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2})$/.test(
      q
    )
  ) {
    const mac = q.toUpperCase().replace(/-/g, ":");
    return await prisma.report.findMany({
      where: {
        deviceMac: mac,
      },
    });
  } else {
    const device = await prisma.device.findFirst({
      where: {
        OR: [{ name: q }, { description: q }],
      },
    });
    if (!device) {
      throw createError({ statusCode: 404, statusMessage: "Device not found" });
    }
    return await prisma.report.findMany({
      where: {
        deviceMac: device?.mac,
      },
    });
  }
});
