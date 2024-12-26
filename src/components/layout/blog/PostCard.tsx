import Link from "next/link";
import Image from "next/image";
import ParseContent from "@/lib/parse-content";
import React from "react";

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  postImage: string;
}

const PostCard: React.FC<PostProps> = (post: PostProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group" prefetch={false}>
      <div className="overflow-hidden rounded-lg w-full h-[160px]">
        <Image
          src={post.postImage}
          width={400}
          height={520}
          alt="Hero"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold transition-colors group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {ParseContent(post.excerpt)}
        </p>
      </div>
    </Link>
  );
};

export default PostCard;
