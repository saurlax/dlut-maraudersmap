CREATE TYPE "public"."device_type" AS ENUM('sta', 'ap', 'probe');--> statement-breakpoint
CREATE TABLE "devices" (
	"mac" "macaddr" PRIMARY KEY NOT NULL,
	"type" "device_type" NOT NULL,
	"info" text
);
--> statement-breakpoint
CREATE TABLE "frames" (
	"id" serial PRIMARY KEY NOT NULL,
	"probe" "macaddr" NOT NULL,
	"from" "macaddr" NOT NULL,
	"to" "macaddr" NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"rssi" integer NOT NULL,
	"csi" text
);
