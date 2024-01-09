import { json } from "@sveltejs/kit";
import type { Post } from "$lib/types";

async function getPosts() {
  let posts: Post[] = [];

  const paths = import.meta.glob("/src/posts/*.md", { eager: true });

  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;
      const post = { ...metadata, slug } satisfies Post;
      post.published && posts.push(post);
    }
  }
  //Sort by date
  //posts = posts.sort((first, second) =>
  //  new Date(second.date).getTime() - new Date(first.date).getTime()
  //)

  // Sort the posts alphabetically based on the title
  posts = posts.sort((first, second) => {
    const titleA = first.title.toUpperCase(); // ignore case
    const titleB = second.title.toUpperCase(); // ignore case
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0; // titles are equal
  });

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
