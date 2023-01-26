import React, {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import CreateNewAccountModal from "../modals/createNewAccount";
import CreateNewThreadModal from "../modals/createNewThread";
import LoginModal from "../modals/login";
import { ModalWithBackgroundWrapper } from "./styles";

const MODALS = {
  createNewThread: CreateNewThreadModal,
  createNewAccount: CreateNewAccountModal,
  login: LoginModal,
};

interface ModalContextProps {
  changeCurrentModal: (modal: keyof typeof MODALS) => void;
  closeModal: () => void;
}

export interface ModalProps {
  defaultOnClick: MouseEventHandler<HTMLDivElement>;
}

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<
    keyof typeof MODALS | undefined
  >(undefined);

  const CURRENT_MODAL = currentModal ? MODALS[currentModal] : undefined;

  const changeCurrentModal: ModalContextProps["changeCurrentModal"] = (
    modal
  ) => {
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
    window.scrollTo({
      top: 0
    })
    setCurrentModal(modal);
  };

  const closeModal = () => {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
    setCurrentModal(undefined);
  };

  return (
    <ModalContext.Provider
      value={{
        changeCurrentModal,
        closeModal,
      }}
    >
      <>
        {children}
        {CURRENT_MODAL && (
          <ModalWithBackgroundWrapper
            onClick={(event) => {
              event.stopPropagation();
              event.nativeEvent.stopImmediatePropagation();
              event.preventDefault();
              closeModal();
            }}
          >
            {
              <CURRENT_MODAL
                defaultOnClick={(event) => {
                  event.stopPropagation();
                }}
              />
            }
          </ModalWithBackgroundWrapper>
        )}
      </>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
