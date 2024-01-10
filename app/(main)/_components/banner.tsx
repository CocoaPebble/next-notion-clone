"use client";

import { Id } from "@/convex/_generated/dataModel";
import { useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { Toaster, toast } from "sonner";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "@/components/modal/confirm-modal";

interface BannerProps {
  documentId: Id<"documents">;
}

export const Banner = ({ documentId }: BannerProps) => {
  const router = useRouter();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);

  const onRemove = () => {
    const promise = remove({ id: documentId });
    toast.promise(promise, {
      loading: "Deleting...",
      success: "Document deleted!",
      error: "Error deleting document",
    });
    router.push("/documents");
  };

  const onRestore = () => {
    const promise = restore({ id: documentId });
    toast.promise(promise, {
      loading: "Restoring...",
      success: "Document restored!",
      error: "Error restoring document",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This page is in the Trash.</p>
      {/* <button onClick={onRestore} className="py-1 px-2 border rounded border-white">
        Restore Page
      </button> */}
      <Button
        onClick={onRestore}
        size="sm"
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5"
      >
        Restore Page
      </Button>
      {/* <button onClick={onRemove} className="py-1 px-2 border rounded border-white">
        Delete Permanently
      </button> */}
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5"
        >
          Delete Permanently
        </Button>
      </ConfirmModal>
    </div>
  );
};
