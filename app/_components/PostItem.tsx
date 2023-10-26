import Link from "next/link";
import formatTimeAgo from "@/utils/timeAgo";
import highlight from "@/utils/highlight";
import PostIcon from "./PostIcon";

interface PostFormProps {
    href: string;
    post: any;
}

const PostItem = ({ href, post }: PostFormProps) => {
    return (
        <div
            className={
                "lex flex-col overflow-hidden rounded-lg shadow-lg my-10"
            }
        >
            <div className="flex flex-1 flex-col justify-between p-6 pb-3">
                <Link href={href}>
                    <div className="mt-2 items-center">
                        <div className="ml-4 flex-1">
                            <div className="text-right">
                                <p className="text-sm text-gray-300">
                                    {formatTimeAgo(post.createdAt)}
                                </p>
                            </div>
                            <div className="flex-1 mt-1">
                                <p className="text-xl font-semibold text-gray-100">
                                    {post.title.substring(0, 50)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <pre className="mt-4 mx-5 max-h-52 overflow-hidden border-b border-gray-700 whitespace-pre-wrap break-words">
                        {post.language ? (
                            <code
                                className={`language-${post.language}`}
                                dangerouslySetInnerHTML={{
                                    __html: highlight(post.code, post.language),
                                }}
                            ></code>
                        ) : (
                            <code>{post.code}</code>
                        )}
                    </pre>
                </Link>
            </div>
            <div className="flex flex-col items-center pb-3">
                <PostIcon
                    liked={post.liked}
                    totalComments={post.totalComments}
                    totalLikes={post.totalLikes}
                />
            </div>
        </div>
    );
};

export default PostItem;
