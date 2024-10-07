/*
  Warnings:

  - Added the required column `category_id` to the `Mechines` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `mechines` ADD COLUMN `category_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Mechines` ADD CONSTRAINT `Mechines_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `MechineCategories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MechineMaintances` ADD CONSTRAINT `MechineMaintances_mechine_id_fkey` FOREIGN KEY (`mechine_id`) REFERENCES `Mechines`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
