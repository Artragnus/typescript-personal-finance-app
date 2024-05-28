/*
  Warnings:

  - You are about to drop the column `categorieId` on the `Expenses` table. All the data in the column will be lost.
  - You are about to alter the column `value` on the `Expenses` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `value` on the `Income` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `categoryId` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `categoryId` on the `Income` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "categorieId",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ALTER COLUMN "value" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "value" SET DATA TYPE INTEGER,
DROP COLUMN "categoryId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expenses" ADD CONSTRAINT "Expenses_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
