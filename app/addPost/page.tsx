"use client";

import Head from "next/head";
import PostForm from "../_components/PostForm";
import axios from "axios";

interface contentsProps {
    language: string;
    code: string;
}

const handleSubmit = async ({ language, code }: contentsProps) => {
    const { data } = await axios.post("/api/posts", {
        language,
        code,
    });
    console.log(data);
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
