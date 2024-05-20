/*
  Warnings:

  - Added the required column `description` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "description" TEXT NOT NULL;
