import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .input(z.object({ configId: z.string().optional() }))
    .middleware(async ({ input }) => {
      console.log("Input of the middelware : ", input);
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("File log in core.ts : ", file);
      const { configId } = metadata.input;
      return { configId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
