import { useContext } from "react";
import { ModalContext } from "..";

export const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw Error("useModal must be used inside a ModalProvider");
  }

  return context;
};
