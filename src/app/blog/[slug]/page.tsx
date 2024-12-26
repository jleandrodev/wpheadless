import { GET_POST_BY_SLUG } from "@/graphql/blog";
import { client } from "@/lib/apollo-client";
import ParseContent from "@/lib/parse-content";
import Image from "next/image";
import "@/styles/globals.css";

export async function generateStaticParams() {
  // Substitua por uma lógica para buscar os slugs necessários
  const slugs = [
    {
      slug: "headless-cms-o-que-e-como-funciona-e-seus-beneficios-para-desenvolvimento-web",
    },
    { slug: "como-criar-sites-otimizados-para-seo" },
    {
      slug: "carregamento-e-velocidade-do-site-como-otimizar-e-sua-importancia-para-o-seo",
    },
    { slug: "design-responsivo-por-que-ter-um-e-otimizar-ele-para-seo" },
    {
      slug: "desenvolvimento-web-e-otimizacao-saiba-como-impactar-nas-suas-conversoes",
    },
    {
      slug: "como-a-hospedagem-de-sites-impacta-o-seo-e-a-performance-do-seu-site",
    },
    {
      slug: "guia-definitivo-de-migracao-de-sites-como-realizar-sem-perder-ranqueamento",
    },
    {
      slug: "tempo-de-carregamento-do-site-qual-o-impacto-na-taxa-de-conversao-de-um-e-commerce",
    },
  ];

  return slugs.map((slug) => ({
    slug: slug.slug,
  }));
}

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
