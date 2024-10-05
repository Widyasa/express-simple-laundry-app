-- AlterTable
ALTER TABLE `mechinecategories` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `mechinemaintances` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `mechines` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `servicecategories` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `services` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `transactionitems` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `transactions` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `users` ALTER COLUMN `updated_at` DROP DEFAULT;
