import { GET_POST_BY_SLUG } from "@/graphql/blog";
import { client } from "@/lib/apollo-client";
import ParseContent from "@/lib/parse-content";
import Image from "next/image";
import "@/styles/globals.css";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });
  console.log(data.posts.nodes[0].title);
  return (
    <main id="post-detail" className="m-20">
      <h1 className="text-4xl font-bold my-10">{data.posts.nodes[0].title}</h1>
      <Image
        src={data.posts.nodes[0].featuredImage.node.mediaItemUrl}
        width={1600}
        height={450}
        alt="Imagem do post"
      />
      <div className="mt-10">{ParseContent(data.posts.nodes[0].content)}</div>
    </main>
  );
}
