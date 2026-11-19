"use client";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import ConfirmDelete from "./ConfirmDelete";
import Modal from "./Modal";

// Reusable delete-with-confirmation control for the dashboard's Server-Component
// tables. Owns the modal + confirm dialog, and — because the tables are RSC —
// calls router.refresh() on success so the list re-fetches. Callers pass a
// `onDelete(mutateOptions)` that runs their resource mutation.
export default function DeleteResourceButton({
  title,
  resourceName = title,
  isDeleting,
  onDelete,
}) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleConfirm = (e) => {
    e.preventDefault();
    onDelete({
      onSuccess: () => {
        setOpen(false);
        router.refresh();
      },
    });
  };

  return (
    <>
      <ButtonIcon
        variant="red"
        className="p-1"
        onClick={() => setOpen(true)}
        aria-label={`حذف ${title}`}
      >
        <TrashIcon />
      </ButtonIcon>
      <Modal title={`حذف ${title}`} open={open} onClose={() => setOpen(false)}>
        <ConfirmDelete
          resourceName={resourceName}
          onClose={() => setOpen(false)}
          onConfirm={handleConfirm}
          disabled={isDeleting}
        />
      </Modal>
    </>
  );
}
