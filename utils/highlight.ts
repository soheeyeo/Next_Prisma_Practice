import hljs from "highlight.js";

import markdown from "highlight.js/lib/languages/markdown";

hljs.registerLanguage("markdown", markdown);

const highlight = (code: string, language: string) => {
    const languageObject = language && { language };
    if (language === "markdown") {
        let highlighted = hljs.highlight(code, languageObject).value;

        const blocks: string[] = [];
        const replacer = (p2: string, p3: string) => {
            blocks.push(
                "```" +
                    p2 +
                    "" +
                    hljs.highlight(p3, { language: p2 }).value +
                    "```"
            );
            return "";
        };
        const regex = /(```(.+?)(?=[\n\r\s])([.\n\r\s\S]*?)(?=`)```)/g;
        code.replace(regex, replacer);
        highlighted = highlighted.replace(regex, () => blocks.shift() || "");
        return highlighted;
    }

    return hljs.highlight(code, languageObject).value;
};

export default highlight;
