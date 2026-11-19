"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import DeleteResourceButton from "@/ui/DeleteResourceButton";
import { PencilIcon } from "@heroicons/react/24/outline";
import Modal from "@/ui/Modal";
import { useState } from "react";
import CommentStatusForm from "./CommentStatusForm";
import useDeleteComment from "../useDeleteComment";

export function DeleteComment({ id, slug }) {
  const { isDeleting, deleteComment } = useDeleteComment();
  return (
    <DeleteResourceButton
      title="نظر"
      resourceName="این نظر"
      isDeleting={isDeleting}
      onDelete={(options) => deleteComment({ id, slug }, options)}
    />
  );
}

export function UpdateStatusBtn({ comment }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonIcon
        variant="primary"
        className="p-1"
        onClick={() => setOpen(true)}
      >
        <PencilIcon />
      </ButtonIcon>

      <Modal title="ویرایش نظر" open={open} onClose={() => setOpen(false)}>
        <CommentStatusForm comment={comment} onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
