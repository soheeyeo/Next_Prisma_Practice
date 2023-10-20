"use client";

import Head from "next/head";
import PostForm from "../_components/PostForm";

interface contentsProps {
    language: string;
    code: string;
}

const handleSubmit = ({ language, code }: contentsProps) => {
    console.log(language, code);
};

export default function AddPost() {
    return (
        <>
            <Head>
                <title>Add Post</title>
            </Head>
            <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 max-w-5xl mx-auto px-6 my-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl mb-6">
                    Add Post
                </h1>

                <div className="mt-6">
                    <PostForm onSubmit={handleSubmit} />
                </div>
            </div>
        </>
    );
}
