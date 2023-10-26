import formatTimeAgo from "@/utils/timeAgo";
import highlight from "@/utils/highlight";
import PostIcon from "./PostIcon";

interface PostProps {
    post: any;
}

const Post = ({ post }: PostProps) => {
    return (
        <>
            <div className="flex items-center m-auto px-6 my-3 mt-10 max-w-2xl ">
                <div className="ml-4 flex-1">
                    <div className="items-center text-right">
                        <p className="pl-5 text-sm text-gray-300">
                            {formatTimeAgo(post.createdAt)}
                        </p>
                    </div>
                    <div className="flex-1 mt-1">
                        <p className="text-xl font-semibold text-gray-100">
                            {post.title}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center margin-auto max-w-7xl">
                <div className={"flex flex-col justify-between"}>
                    <pre className="mt-5 mx-5 whitespace-pre-wrap break-words">
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
                </div>
                <PostIcon
                    liked={post.liked}
                    totalComments={post.totalComments}
                    totalLikes={post.totalLikes}
                />
            </div>
        </>
    );
};

export default Post;
