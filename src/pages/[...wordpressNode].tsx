import { getWordPressProps, WordPressTemplate } from "@faustwp/core";
import { GetStaticPathsContext } from "next";

export default function Page(props) {
  return <WordPressTemplate {...props} />;
}

export function getStaticProps(ctx: GetStaticPathsContext) {
  return getWordPressProps({ ctx });
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
