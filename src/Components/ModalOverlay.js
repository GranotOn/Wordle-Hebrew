export default function ModalOverlay({ isModal, children }) {
  if (isModal)
    return (
      <>
        <div className="z-10 bg-gray-600 dark:bg-black bg-opacity-95 dark:bg-opacity-95 h-screen w-screen fixed pointer-events-none"></div>
        <div className="z-0">{children}</div>
      </>
    );

  return children;
}
