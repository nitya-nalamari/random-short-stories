import React from "react";

import NewStories from "./new-stories";
import FeaturedStories from "./featured-stories";
import RandomStories from "./random-stories";

export default function Stories({ stories }: any): JSX.Element {
  const newStories = stories;
  const featuredStories = stories;
  const randomStories = stories;

  return (
    <>
      <NewStories newStories={newStories} />
      <FeaturedStories featuredStories={featuredStories} />
      <RandomStories randomStories={randomStories} />
    </>
  );
}
