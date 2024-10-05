/*
  Warnings:

  - You are about to drop the `mechinestatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `mechinestatus`;

-- CreateTable
CREATE TABLE `MechineCategories` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `MechineCategories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
