import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  date: string;
  postImage: string;
}

export default function RecentPostCard(post: PostProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group" prefetch={false}>
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-cover bg-center w-[80px] h-[80px]">
          <Image
            src={post.postImage}
            width={80}
            height={80}
            alt="Hero"
            style={{
              objectFit: "cover",
              height: "100%",
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {dayjs(post.date).format("DD MMMM, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}
