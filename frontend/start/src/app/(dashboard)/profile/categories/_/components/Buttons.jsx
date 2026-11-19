"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import DeleteResourceButton from "@/ui/DeleteResourceButton";
import { PencilIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import CreateCategoryForm from "../../create/_/components/CreateCategoryForm";
import Modal from "@/ui/Modal";
import useDeleteCategory from "../useDeleteCategory";

export function DeleteCategory({ category: { _id: id, title } }) {
  const { isDeleting, deleteCategory } = useDeleteCategory();
  return (
    <DeleteResourceButton
      title={title}
      isDeleting={isDeleting}
      onDelete={(options) => deleteCategory({ id }, options)}
    />
  );
}
export function CreateCategory() {
  return (
    <Link
      href="/profile/categories/create"
      className="justify-self-end  flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
      transition-colors hover:bg-primary-700"
    >
      <span className="hidden md:block">ایجاد دسته بندی</span>{" "}
      <PlusIcon className="w-5" aria-hidden="true"/>
    </Link>
  );
}
export function UpdateCategory({ category }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ButtonIcon
        variant="primary"
        className="p-1"
        onClick={() => setOpen(true)}
        aria-label={`ویرایش ${category.title}`}
      >
        <PencilIcon />
      </ButtonIcon>
      <Modal
        title={`ویرایش ${category.title}`}
        open={open}
        onClose={() => setOpen(false)}
      >
        <CreateCategoryForm
          categortToEdit={category}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}
