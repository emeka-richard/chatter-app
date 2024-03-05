import React from "react";
import style from "./feeds-UI.module.css";
import ArticleUI from "./Article-UI";
import { WriterProps } from "./Feeds-WriterProps";

const FeedsFeaturedContentUI: React.FC = function () {
  // Message to display when there are no featured articles
  const noItemMsg: string = "featured";

  // Mock writer properties for the featured articles
  const writerProps: WriterProps[] = [];

  return (
    <>
      {writerProps.length ? (
        writerProps.map((article) => (
          <section key={article.id} className={style._wrapper}>
            {/* Render the ArticleUI component for each featured article */}
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        <section className={style._no_article_wrapper}>
          {/* Display a message when there are no featured articles */}
          <p className={style._no_article_p}>
            There's no {noItemMsg} publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsFeaturedContentUI;
