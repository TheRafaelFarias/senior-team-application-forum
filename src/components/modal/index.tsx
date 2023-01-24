import React, {
  createContext,
  MouseEventHandler,
  PropsWithChildren,
  useState,
} from "react";
import CreateNewAccountModal from "../modals/createNewAccount";
import CreateNewThreadModal from "../modals/createNewThread";
import { ModalWithBackgroundWrapper } from "./styles";

const MODALS = {
  createNewThread: CreateNewThreadModal,
  createNewAccount: CreateNewAccountModal
};

interface ModalContextProps {
  changeCurrentModal: (modal: keyof typeof MODALS) => void;
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
    setCurrentModal(modal);
  };

  return (
    <ModalContext.Provider
      value={{
        changeCurrentModal,
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
              setCurrentModal(undefined);
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
