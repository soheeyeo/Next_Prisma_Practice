import { prisma } from "@/server/db/client";
import { PostType } from "@/types/post";
import styles from "./page.module.css";
import { NextPage } from "next";
import PostItem from "./_components/PostItem";

interface Props {
    posts: PostType[];
}

async function getData() {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return posts;
}

const Home: NextPage<Props> = async () => {
    const posts = await getData();

    return (
        <>
            <div className="pt-8 pb-10 lg:pt-12 lg:pb-14 mx-auto max-w-7xl px-2">
                <div className="max-w-2xl mx-auto">
                    <ul className="mt-8">
                        {posts.map((post) => (
                            <li key={post.id}>
                                <PostItem
                                    post={post}
                                    href={`/code/${post.id}`}
                                    onLike={() =>
                                        console.log("like post", post.id)
                                    }
                                    onComment={() =>
                                        console.log("comment post", post.id)
                                    }
                                    onShare={() =>
                                        console.log("share post", post.id)
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Home;
