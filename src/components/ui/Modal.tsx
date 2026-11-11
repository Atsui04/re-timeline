import { useEffect, useRef, type ReactNode } from "react";
import { MODAL_TITLE_ID } from "../../constants";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
  meta: string;
  accent: string;
}

function Modal({ isOpen, onClose, title, meta, accent, children }: ModalProps) {
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
      aria-labelledby={MODAL_TITLE_ID}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onClose={onClose}
      ref={dialogRef}
      className="bg-surface text-fg backdrop:bg-main/70 border-border m-auto h-dvh max-h-none w-full max-w-none overflow-hidden rounded-none border-0 open:flex open:flex-col md:h-auto md:max-h-[min(45rem,90dvh)] md:max-w-160 md:rounded-2xl md:border"
    >
      <header
        className={`flex items-start justify-between gap-4 border-b p-4 md:p-8 md:pb-6 ${accent === "what-if" ? "border-what-if" : "border-border"}`}
      >
        <div className="flex min-w-0 flex-col gap-1">
          <h2
            id={MODAL_TITLE_ID}
            className="text-heading-modal-mobile md:text-heading-modal text-fg"
          >
            {title}
          </h2>
          <p className="text-small-regular text-fg-muted">{meta}</p>
        </div>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="text-fg-muted hover:text-fg hover:bg-border focus-visible:outline-accent flex size-8 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
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
      </header>

      <div className="scrollbar-thumb-border flex min-h-0 flex-1 scrollbar-thin scrollbar-track-transparent flex-col gap-6 overflow-y-auto p-4 md:p-8">
        {children}
      </div>
    </dialog>
  );
}

export default Modal;
