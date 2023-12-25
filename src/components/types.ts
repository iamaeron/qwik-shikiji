import {
  BundledLanguage,
  StringLiteralUnion,
  SpecialLanguage,
  BundledTheme,
  ThemeRegistration,
  ThemeRegistrationRaw,
} from "shikiji";

export type Theme =
  | ThemeRegistration
  | ThemeRegistrationRaw
  | StringLiteralUnion<BundledTheme, string>;

export interface QwikShikijiProps {
  code: string;
  lang: StringLiteralUnion<BundledLanguage | SpecialLanguage, string>;
  options?: {
    prepareThemes?: StringLiteralUnion<BundledTheme, string>[] | undefined;
    showLineNumbers?: boolean;
    theme?: Theme;
  };
  styles?: {
    maxWidth?: string;
    maxHeight?: string;
    fontFamily?: string;
    fontSize?: string;
  };
}
