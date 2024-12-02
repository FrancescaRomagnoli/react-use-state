export default function TagsButtons({ tags }) {
  return (
    <ul>
      {tags.map((tag) => {
        return (
          <li className={`tag-label tag-${tag}`} key={tag}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}
