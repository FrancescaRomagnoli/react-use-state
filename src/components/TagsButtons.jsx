export default function TagsButtons({ tags }) {
  return (
    <ul className="tags-row">
      {tags.map((tag) => {
        return (
          <li className={`tag-btn`} key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
