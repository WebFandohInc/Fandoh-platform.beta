/*
  Warnings:

  - You are about to drop the `PostAttachments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "PostAttachments" DROP CONSTRAINT "PostAttachments_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "PostAttachments" DROP CONSTRAINT "PostAttachments_postId_fkey";

-- DropTable
DROP TABLE "PostAttachments";

-- CreateTable
CREATE TABLE "post_content_images" (
    "id" TEXT NOT NULL,
    "post_id" TEXT NOT NULL,
    "image_id" TEXT NOT NULL,

    CONSTRAINT "post_content_images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "post_content_images" ADD CONSTRAINT "post_content_images_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post_content_images" ADD CONSTRAINT "post_content_images_image_id_fkey" FOREIGN KEY ("image_id") REFERENCES "attachments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
