import TagsList from "./TagsButtons";
import { languages } from "../data/languages";

export default function Main() {
  const tags = languages.map((language) => language.title);

  return (
    <div className="container">
      <div>
        <TagsList tags={tags} />
      </div>
      <div>
        <div className="card">
          <h2>Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            nesciunt facere assumenda tempore ducimus blanditiis, doloremque
            quas eum. Eaque dolorem obcaecati impedit esse repellat inventore
            perspiciatis error fuga maiores quae!
          </p>
        </div>
      </div>
    </div>
  );
}
