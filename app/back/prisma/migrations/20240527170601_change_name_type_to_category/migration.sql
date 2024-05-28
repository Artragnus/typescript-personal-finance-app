/*
  Warnings:

  - You are about to drop the column `type` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Income` table. All the data in the column will be lost.
  - Added the required column `category` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "type",
ADD COLUMN     "category" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "type",
ADD COLUMN     "category" TEXT NOT NULL;
