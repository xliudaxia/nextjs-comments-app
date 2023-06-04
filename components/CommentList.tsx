import styles from "./CommentList.module.css";

function CommentList(props: {
  isLoading: boolean;
  items: {
    _id: string;
    text: string;
    name: string;
  }[];
}) {
  const { items, isLoading } = props;

  if (isLoading) {
    return <div className="loading" />;
  }

  return (
    <ul className={styles.comments}>
      {items.map((item) => (
        <li key={item._id}>
          <p>{item.text}</p>
          <div>
            By <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
