import TagsList from "./TagsButtons";
import { languages } from "../data/languages";
import Card from "./Card";
import { useState } from "react";

export default function Main() {
  const tags = languages.map((language) => language.title);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);

  const handleTagClick = (tagTitle) => {
    const language = languages.find((language) => language.title == tagTitle);
    setCurrentLanguage(language);
  };

  return (
    <main>
      <div className="container">
        <div>
          <TagsList tags={tags} onTagClick={handleTagClick} />
        </div>
        <div>
          <Card
            title={currentLanguage.title}
            description={currentLanguage.description}
          />
        </div>
      </div>
    </main>
  );
}
