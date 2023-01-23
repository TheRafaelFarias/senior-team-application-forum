import { convertHexToRGB } from "@/helpers/colors";
import { Div } from "@/styles/globals";
import styled from "styled-components";

export const CategoryContainer = styled(Div).attrs({
  flexDirection: "row",
})`
  align-items: center;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  gap: 0.625rem;
  white-space: nowrap;
`;

export const CategoryIconContainer = styled.div<{
  iconColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 3rem;
  height: 3rem;
  padding: 0.375rem;
  border-radius: 0.25rem;
  background-color: ${(props) => convertHexToRGB(props.iconColor, 0.3)};
`;
