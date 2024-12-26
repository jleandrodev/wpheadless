import parse from "html-react-parser";

export default function ParseContent(htmlContent: string) {
  const content = htmlContent;

  // Converte o HTML para elementos React
  const parsedContent = parse(content);

  return parsedContent;
}
