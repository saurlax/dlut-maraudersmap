-- CreateTable
CREATE TABLE "Device" (
    "mac" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("mac")
);

-- CreateTable
CREATE TABLE "Report" (
    "id" SERIAL NOT NULL,
    "probeMac" TEXT NOT NULL,
    "deviceMac" TEXT NOT NULL,
    "rssi" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Report_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Device_mac_idx" ON "Device"("mac");

-- CreateIndex
CREATE INDEX "Device_name_idx" ON "Device"("name");

-- CreateIndex
CREATE INDEX "Device_description_idx" ON "Device"("description");

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_probeMac_fkey" FOREIGN KEY ("probeMac") REFERENCES "Device"("mac") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_deviceMac_fkey" FOREIGN KEY ("deviceMac") REFERENCES "Device"("mac") ON DELETE RESTRICT ON UPDATE CASCADE;
