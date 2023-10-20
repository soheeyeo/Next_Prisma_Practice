"use client";

import { useState, FormEvent } from "react";
import Dropdown from "./Dropdown";
import CodeEditor from "./CodeEditor";

interface PostFormProps {
    defaultLanguage?: string;
    defaultCode?: string;
    onSubmit: (data: { code: string; language: string }) => void;
    onChange?: (value: string | undefined) => void;
}

const PostForm = ({
    defaultLanguage = "markdown",
    defaultCode = "",
    onSubmit,
    onChange,
}: PostFormProps) => {
    const [code, setCode] = useState(defaultCode);
    const [language, setLanguage] = useState(defaultLanguage);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ code, language });
    };

    const handleChange = (value: string | undefined) => {
        if (value !== undefined) {
            setCode(value);
            onChange?.(value);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            action="#"
            method="POST"
            className="max-w-5xl mt-8 space-y-6"
        >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
                <div>
                    <Dropdown language={language} onChange={setLanguage} />
                    <CodeEditor
                        language={language}
                        onChange={handleChange}
                        value={code}
                    />
                    <button
                        type="submit"
                        className="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Push
                    </button>
                </div>
            </div>
        </form>
    );
};

export default PostForm;
