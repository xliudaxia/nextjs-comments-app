"use client";
import { useEffect, useState } from "react";

import CommentList from "./CommentList";
import NewComment from "./NewComment";

import styles from "./Comments.module.css";

function Comments() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLatestContent();
  }, []);

  const fetchLatestContent = () => {
    fetch("/api/comments/")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setComments(data.comments);
      });
  };

  function addCommentHandler(commentData: {
    email: string;
    name: string;
    text: string;
    articleId: string;
  }) {
    setIsLoading(true);
    fetch("/api/comments/", {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        fetchLatestContent();
        console.log(data);
      });
  }
 

  return (
    <section className={styles.comments}>
      <NewComment onAddComment={addCommentHandler} />
      <CommentList isLoading={isLoading} items={comments} />
    </section>
  );
}

export default Comments;
