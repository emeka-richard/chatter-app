import React from "react";
import style from "./feeds-UI.module.css";
import { writerProps } from "./Feeds-WriterProps"; // Assuming writerProps is imported from another file
import ArticleUI from "./Article-UI";

const FeedsForYouContentUI: React.FC = function () {
  return (
    <>
      {writerProps.length ? (
        // If there are articles in writerProps, map through them and render ArticleUI component for each
        writerProps.map((article) => (
          <section key={article.id} className={style._wrapper}>
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        // If there are no articles, display a message
        <section className={style._no_article_wrapper}>
          <p className={style._no_article_p}>
            There's no publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsForYouContentUI;
