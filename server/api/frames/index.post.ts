export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  await db
    .insert(devicesTable)
    .values([
      { mac: body.probe, type: "probe" },
      { mac: body.from, type: "sta" },
      { mac: body.to, type: "sta" },
    ])
    .onConflictDoNothing();
  return await db.insert(framesTable).values(body).returning();
});
