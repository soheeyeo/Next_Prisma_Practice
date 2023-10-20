import { Editor, OnChange } from "@monaco-editor/react";

interface CodeEditorProps {
    language: string;
    value: string;
    onChange: OnChange;
}

const CodeEditor = ({
    language = "markdown",
    value,
    onChange,
}: CodeEditorProps) => {
    return (
        <>
            <div className="h-96 overflow-hidden rounded-xl mt-5 z-1">
                <Editor
                    language={language}
                    value={value}
                    onChange={onChange}
                    theme="vs-dark"
                    options={{
                        autoDetectHighContrast: false,
                        contextmenu: false,
                        fontSize: 18,
                        showUnused: true,
                        scrollbar: {
                            vertical: "hidden",
                            verticalHasArrows: false,
                            verticalScrollbarSize: 0,
                            verticalSliderSize: 0,
                        },
                        fontWeight: "thin",
                        glyphMargin: false,
                        guides: {
                            highlightActiveIndentation: false,
                            indentation: false,
                        },
                        lightbulb: {
                            enabled: false,
                        },
                        lineDecorationsWidth: 5,
                        lineNumbers: "off",
                        lineNumbersMinChars: 3,
                        overviewRulerBorder: false,
                        padding: {
                            top: 10,
                            bottom: 10,
                        },
                        scrollBeyondLastLine: false,
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
            </div>
        </>
    );
};

export default CodeEditor;
