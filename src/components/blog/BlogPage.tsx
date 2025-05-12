import { createSignal, createEffect } from "solid-js";
import BlogList from "@/components/blog/BlogList";
import { FilterTagList } from "@/components/blog/FilterTagList";
import type { CollectionEntry } from "astro:content";

interface BlogPageProps {
  posts: CollectionEntry<"blog">[];
  categories: string[];
}

export default function BlogPage(props: BlogPageProps) {
  const sortedPosts = props.posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );

  const [selectedCategories, setSelectedCategories] = createSignal<string[]>(
    [],
  );
  const [filteredPosts, setFilteredPosts] = createSignal(sortedPosts);

  const isAllSelected = () =>
    selectedCategories().length === props.categories.length;

  const handleTagToggle = (tag: string) => {
    if (tag === "all") {
      if (isAllSelected()) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories([...props.categories]);
      }
    } else {
      setSelectedCategories((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
      );
    }
  };

  createEffect(() => {
    const categories = selectedCategories();
    if (categories.length === 0 || isAllSelected()) {
      setFilteredPosts(sortedPosts);
    } else {
      setFilteredPosts(
        sortedPosts.filter((post) =>
          categories.some((category) => post.data.category.includes(category)),
        ),
      );
    }
  });

  return (
    <div class="flex flex-col md:flex-row gap-6">
      <aside class="hidden md:block w-64 shrink-0">
        <FilterTagList
          tags={props.categories}
          selectedTagsSignal={selectedCategories}
          isAllSelectedSignal={isAllSelected}
          onTagToggle={handleTagToggle}
        />
      </aside>
      <main class="flex-1">
        <BlogList
          initialPosts={filteredPosts()}
          allTags={props.categories}
          selectedTagsSignal={selectedCategories}
          isAllSelectedSignal={isAllSelected}
          onTagToggle={handleTagToggle}
        />
      </main>
    </div>
  );
}
