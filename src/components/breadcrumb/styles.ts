import styled, { css } from "styled-components";

export const BreadcrumbItem = styled.p<{
  active?: boolean;
}>`
  display: flex;
  font-size: 1.25rem;
  color: ${(props) => props.theme.primary};
  font-weight: ${(props) => (props.active ? 600 : 400)};

  ${(props) =>
    !props.active &&
    css`
      &::after {
        content: ">";
        color: white;
        margin: 0px 10px;
        transform: translateY(1px);
      }
    `}
`;
