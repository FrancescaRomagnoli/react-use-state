import TagsList from "./TagsButtons";
import { languages } from "../data/languages";

export default function Main() {
  const tags = languages.map((language) => language.title);

  return (
    <div>
      <TagsList tags={tags} />
    </div>
  );
}
