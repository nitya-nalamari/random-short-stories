import React from "react";

import NewStories from "./new-stories";
import FeaturedStories from "./featured-stories";
import RandomStories from "./random-stories";

export default function Stories(): JSX.Element {
    return (<>
        <NewStories />
        <FeaturedStories />
        <RandomStories />
    </>);
}