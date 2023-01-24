import styled, { css } from "styled-components";

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const DropdownPlaceholder = styled.p`
  color: ${(props) => props.theme.quartiaryText};
  font-size: 0.8rem;
  font-weight: 400;
`;

export const DropdownOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DropdownDisplayOptions = styled.div`
  position: absolute;
  z-index: 10;
  top: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(37px * 4 + 18px);
  overflow-y: auto;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.secondary};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: ${(props) => props.theme.beige};
  }
`;

export const DropdownOption = styled.button`
  border: none;
  text-align: start;
  color: ${(props) => props.theme.secondaryText};
  background: ${(props) => props.theme.secondary};
  padding: 0.625rem 1.25rem;
  transition: 200ms;

  cursor: pointer;

  &:hover {
    background-color: #353c43;
  }
`;

export const DropdownSelectedOption = styled(DropdownOption)<{
  hasSelectedValue: boolean;
  isDropdownOpen: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  transition: all 200ms;

  &:hover {
    background: ${(props) => props.theme.secondary};
  }

  & > svg {
    transition: all 200ms;
    transform: rotate(0deg);
  }

  ${(props) => props.hasSelectedValue && `color: ${props.theme.primaryText};`}
  ${(props) =>
    props.isDropdownOpen &&
    css`
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;

      & > svg {
        transform: rotate(180deg);
      }
    `}
`;
