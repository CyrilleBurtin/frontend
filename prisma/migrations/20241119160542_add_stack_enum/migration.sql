/*
  Warnings:

  - You are about to drop the column `Name` on the `Company` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `Role` on the `User` table. All the data in the column will be lost.
  - The `stack` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_companyId_fkey";

-- AlterTable
ALTER TABLE "Company" DROP COLUMN "Name",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "recruiters" TEXT[],
ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Job" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "Role",
ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'CANDIDATE',
DROP COLUMN "stack",
ADD COLUMN     "stack" TEXT[];
