import { prisma } from "@/server/db/client";
import Head from "next/head";
import Post from "@/app/_components/Post";

interface PageProps {
    params: { id: string };
}

const Code = async ({ params }: PageProps) => {
    const post = await prisma.post.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    return (
        <>
            <Head>
                <title>{post?.title}</title>
            </Head>
            <Post post={post} />
        </>
    );
};

export default Code;
