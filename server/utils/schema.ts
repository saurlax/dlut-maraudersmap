import {
  pgTable,
  pgEnum,
  serial,
  text,
  integer,
  macaddr,
  timestamp,
} from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";

export const deviceTypeEnum = pgEnum("device_type", ["sta", "ap", "probe"]);

export const devicesTable = pgTable("devices", {
  mac: macaddr("mac").primaryKey(),
  type: deviceTypeEnum("type").notNull(),
  info: text("info"),
});

export const framesTable = pgTable("frames", {
  id: serial("id").primaryKey(),
  probe: macaddr("probe").notNull(),
  from: macaddr("from").notNull(),
  to: macaddr("to").notNull(),
  timestamp: timestamp().defaultNow().notNull(),
  rssi: integer("rssi").notNull(),
  csi: text("csi"),
});

export const db = drizzle(process.env.DATABASE_URL);
