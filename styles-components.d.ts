import { defaultTheme } from "@/config/theme";
import "styled-components";

type Theme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
