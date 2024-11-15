/*
  Warnings:

  - Added the required column `transaction_id` to the `TransactionItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `transactionitems` ADD COLUMN `transaction_id` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `TransactionItems` ADD CONSTRAINT `TransactionItems_transaction_id_fkey` FOREIGN KEY (`transaction_id`) REFERENCES `Transactions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
