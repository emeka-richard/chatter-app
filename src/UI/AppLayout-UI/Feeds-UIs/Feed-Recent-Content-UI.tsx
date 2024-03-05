import React from "react";
import style from "./feeds-UI.module.css";
import graceIMG from "../../../assets/images/grace-article-img.png";
import graceAVI from "../../../assets/images/user-3.png";
import ArticleUI from "./Article-UI";
import { WriterProps } from "./Feeds-WriterProps";

const FeedsRecentContentUI: React.FC = function () {
  // Message to display when there are no recent articles
  const noItemMsg: string = "recent";

  // Function to format publication date
  const getDate = (date: string) => {
    return new Date(date).toDateString().slice(4, 15);
  };

  // Mock writer properties for the recent article
  const writerProps: WriterProps[] = [
    {
      id: 1,
      name: "Grace Ikpang",
      writerAVI: graceAVI,
      occupation: "Product designer",
      publicationTime: getDate("May 25, 2023"),
      readingTime: "10",
      publicatonArticleTitle: "Starting out as a Product designer",
      publicationArticle:
        "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
      publicationIMG: graceIMG,
      publicationComments: 200,
      publicationLikes: 120,
      publicationViews: 2980,
      writterFollowers: ["Jude", "James", "Porch"],
      profileVisit: 65,
      postList: [
        "Embarking on a journey as a product designer can be an exhilarating and fulfilling experience. As a profession that bridges the realms of art, technology, and problem-solving, product design offers an opportunity to shape the way people interact with the world around them.",
      ],
    },
  ];

  return (
    <>
      {writerProps.length ? (
        writerProps.map((article) => (
          <section key={article.id} className={style._wrapper}>
            {/* Render the ArticleUI component for each article */}
            <ArticleUI article={article} />
          </section>
        ))
      ) : (
        <section className={style._no_article_wrapper}>
          {/* Display a message when there are no recent articles */}
          <p className={style._no_article_p}>
            There's no {noItemMsg} publication available at the moment. Check later 👍
          </p>
        </section>
      )}
    </>
  );
};

export default FeedsRecentContentUI;
