import Link from "next/link";
import Image from "next/image";
import { GET_POSTS } from "@/graphql/blog";
import { client } from "@/lib/apollo-client";
import PostCard from "@/components/layout/blog/PostCard";
import BGBlogHero from "@/assets/blog/bghero.jpg";
import Heroblog from "@/assets/blog/heroblog.png";
import RecentPostCard from "@/components/layout/blog/RecentPostCard";

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  featuredImage: {
    node: {
      mediaItemUrl: string;
    };
  };
}

export default async function Page() {
  const { data } = await client.query({ query: GET_POSTS });

  return (
    <div className="flex flex-col">
      <section
        className="bg-cover bg-center px-4 md:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${BGBlogHero.src})`,
        }}
      >
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-4xl font-bold text-primary-foreground sm:text-5xl lg:text-6xl">
                Discover the Latest Trends in Tech
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80 sm:text-xl">
                Stay ahead of the curve with our in-depth articles and expert
                insights.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <Image src={Heroblog} width={600} height={300} alt="Hero" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto ">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Featured Posts</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.posts.nodes.map((post: PostProps) => {
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  postImage={post.featuredImage.node.mediaItemUrl}
                  date={post.date}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto ">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Recent Articles</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.posts.nodes.slice(0, 6).map((post: PostProps) => {
              return (
                <RecentPostCard
                  key={post.id}
                  id={post.id}
                  postImage={post.featuredImage.node.mediaItemUrl}
                  title={post.title}
                  slug={post.slug}
                  date={post.date}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
