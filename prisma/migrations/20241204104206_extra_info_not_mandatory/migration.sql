-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_userExtraInfoId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "userExtraInfoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userExtraInfoId_fkey" FOREIGN KEY ("userExtraInfoId") REFERENCES "UserExtraInfo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
