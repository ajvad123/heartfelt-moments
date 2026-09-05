import { createFileRoute } from "@tanstack/react-router";
import { BirthdayExperience } from "@/components/BirthdayExperience";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Happy Birthday, My Love — A Love Letter" },
      { name: "description", content: "A beautiful birthday love letter created for one very special person." },
      { property: "og:title", content: "Happy Birthday, My Love" },
      { property: "og:description", content: "A beautiful birthday love letter created for one very special person." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <BirthdayExperience />;
}
