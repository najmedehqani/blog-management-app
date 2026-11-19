"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import ButtonIcon from "./ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useRouter } from "next/navigation";

function BottomSheet({ open, onClose, children, title }) {
  const [domReady, setDomReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setDomReady(true);
  }, []);
  useEffect(() => {
    if (!open) return;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);
  return domReady
    ? createPortal(
        <AnimatePresence>
          {open && (
            <>
              {/* Backdrop */}
              <motion.div
                className="backdrop-blur-sm fixed inset-0 w-full h-screen bg-secondary-800 bg-opacity-30 z-20 "
                onClick={onClose}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />

              {/* Centered sheet wrapper */}
              <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl z-30 ">
                <motion.div
                  className="bg-secondary-100 rounded-t-3xl "
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  layout
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-4 overflow-y-auto max-h-[90vh]">
                    <div className="flex items-center mb-10">
                      <h3 className="font-bold text-secondary-700 flex-1 text-center">
                        {title}
                      </h3>
                      <ButtonIcon variant="outline" onClick={onClose}>
                        <XMarkIcon />
                      </ButtonIcon>
                    </div>
                    <motion.div className="flex justify-center w-full ">
                      {children}
                    </motion.div>

                    <Button
                      className="w-full mb-4 mt-7"
                      onClick={() => {
                        onClose();
                      }}
                    >
                      اعمال تغییرات
                    </Button>
                  </div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>,
        document.body,
      )
    : null;
}

export default BottomSheet;
