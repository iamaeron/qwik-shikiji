import { component$, useSignal, useStyles$, useTask$ } from "@builder.io/qwik";
import {
  BundledLanguage,
  StringLiteralUnion,
  SpecialLanguage,
  getHighlighter,
  BundledTheme,
  ThemeRegistration,
  ThemeRegistrationRaw,
} from "shikiji";

type Theme =
  | ThemeRegistration
  | ThemeRegistrationRaw
  | StringLiteralUnion<BundledTheme, string>;

interface QwikShikijiProps {
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

export const QwikShikiji = component$<QwikShikijiProps>((props) => {
  const codeSignal = useSignal<string>("");
  const { lang, code: rawCode, options, styles } = props;

  useStyles$(`
    .qwik-shikiji {
      position: relative
    }

    code {
      font-family: inherit;
    }

    .qwik-shikiji.with-line-numbers code {
      counter-reset: step;
      counter-increment: step 0;
    }

    .qwik-shikiji.with-line-numbers code .line::before {
      content: counter(step);
      counter-increment: step;
      width: 1rem;
      margin-right: 1.5rem;
      display: inline-block;
      text-align: right;
      color: rgba(255, 255, 255, 0.3)
    }

    .qwik-shikiji.with-line-numbers pre[class*="light"] code .line::before {
      color: rgba(0, 0, 0, 0.3)
    }
  
    .shiki {
      padding: 1.25rem;
      border-radius: 6px;
      font-size: 14px;
      font-family: var(--qwik-shikiji-font-family), ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, "Liberation Mono", "Courier New", monospace;
      overflow: auto;
      max-height: var(--qwik-shikiji-max-height);
      max-width: var(--qwik-shikiji-max-width)
    }
  `);

  const defaultTheme: Theme = "dark-plus";

  useTask$(async () => {
    const highlighter = await getHighlighter({
      themes: options?.prepareThemes
        ? options.prepareThemes
        : [options?.theme ? options?.theme : defaultTheme],
      langs: [lang],
    });

    const code = highlighter.codeToHtml(rawCode, {
      lang: lang,
      theme: options?.theme ?? defaultTheme,
    });

    codeSignal.value = code;
  });

  return (
    <div
      style={`
        --qwik-shikiji-max-height: ${styles?.maxHeight};
        --qwik-shikiji-max-width: ${styles?.maxWidth};
        --qwik-shikiji-font-family: ${styles?.fontFamily ?? "Consolas"};
      `}
      dangerouslySetInnerHTML={codeSignal.value}
      class={["qwik-shikiji", options?.showLineNumbers && "with-line-numbers"]}
    ></div>
  );
});
