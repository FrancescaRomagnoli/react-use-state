export default function TagsButtons({ tags, onTagClick }) {
  return (
    <ul className="tags-row">
      {tags.map((tag) => {
        return (
          <li
            key={tag}
            onClick={() => {
              onTagClick(tag);
            }}
            className={`tag-btn`}
          >
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
