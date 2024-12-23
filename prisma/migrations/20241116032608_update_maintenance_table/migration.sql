/*
  Warnings:

  - You are about to drop the `mechinemaintances` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `mechinemaintances` DROP FOREIGN KEY `MechineMaintances_mechine_id_fkey`;

-- DropTable
DROP TABLE `mechinemaintances`;

-- CreateTable
CREATE TABLE `MechineMaintenances` (
    `id` VARCHAR(191) NOT NULL,
    `mechine_id` VARCHAR(191) NOT NULL,
    `maintenance_date` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MechineMaintenances` ADD CONSTRAINT `MechineMaintenances_mechine_id_fkey` FOREIGN KEY (`mechine_id`) REFERENCES `Mechines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
