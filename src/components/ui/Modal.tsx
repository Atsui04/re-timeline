import { useEffect, useRef, type ReactNode } from "react";
import { modalId } from "../../constants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <dialog
      aria-labelledby={modalId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onClose={onClose}
      ref={dialogRef}
      className="bg-surface text-fg backdrop:bg-main/70 border-border m-auto max-h-180 w-full max-w-160 overflow-hidden rounded-2xl border open:flex open:flex-col"
    >
      <div className="relative flex min-h-0 flex-1 flex-col">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="text-fg-muted hover:text-fg hover:bg-border focus-visible:outline-accent absolute top-3 right-3 flex size-8 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <svg
            viewBox="128 128 256 256"
            className="size-4.5"
            aria-hidden="true"
          >
            <path
              d="M368 368 144 144M368 144 144 368"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        </button>
        <div className="scrollbar-thumb-border flex min-h-0 flex-1 scrollbar-thin scrollbar-track-transparent flex-col gap-6 overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </dialog>
  );
}

export default Modal;
