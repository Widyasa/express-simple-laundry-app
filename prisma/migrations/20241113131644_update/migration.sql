-- AlterTable
ALTER TABLE `transactions` MODIFY `status` ENUM('on_progress', 'pending', 'finished', 'canceled') NOT NULL DEFAULT 'on_progress';
