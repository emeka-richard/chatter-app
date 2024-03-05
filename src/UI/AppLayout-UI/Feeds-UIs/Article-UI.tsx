import React from "react";
import style from "./feeds-UI.module.css";
import DOMPurify from 'dompurify';

import { WriterProps } from "./Feeds-WriterProps"; // Assuming WriterProps interface is defined in a separate file
import OpenBookIcon from "../../../assets/svg/openbook.svg";
import CommentIcon from "../../../assets/svg/commentIcon.svg";
import LikeIcon from "../../../assets/svg/heartLoveIcon.svg";
import DarkChart from "../../../assets/svg/darkClearChartIcon.svg";

interface ArticleUIProps {
  article: WriterProps;
}

const ArticleUI: React.FC<ArticleUIProps> = function ({ article }) {
    const sanitizedOpenBookIconSVG = DOMPurify.sanitize(OpenBookIcon);
    const sanitizedCommentIconSVG = DOMPurify.sanitize(CommentIcon);
    const sanitizedLikeIconSVG = DOMPurify.sanitize(LikeIcon);
    const sanitizedDarkChartSVG = DOMPurify.sanitize(DarkChart);


  return (
    <>
      <div className={style._inner_wrapper}>
        <header className={style._header_container}>
          {/* Writer information */}
          <div className={style._writer_infos_container}>
            <img
              src={article.writerAVI}
              alt={`${article.name}'s avatar`}
              className={style._writer_img}
            />
            <div className={style._writerTxt_infos}>
              <h3 className={style._writerTxt_h3}>{article.name}</h3>
              <p className={style._writerTxt_p}>
                {article.occupation} .{article.publicationTime}
              </p>
            </div>
          </div>
          {/* Article title and read time */}
          <h1 className={style._article_title}>
            {article.publicatonArticleTitle}
          </h1>
          <div className={style._article_readTime_container}>
            {/* <OpenBookIcon /> */}
            <svg dangerouslySetInnerHTML={{ __html: sanitizedOpenBookIconSVG }} aria-hidden="true"/>

            <small className={style._article_readTime}>
              {article.readingTime} mins read
            </small>
          </div>
        </header>
        {/* Article content and properties */}
        <article className={style._article_container}>
          <p className={style._article_main}>{article.publicationArticle}</p>
          <div
            className={style._article_img_div}
            style={{ backgroundImage: `url(${article.publicationIMG})` }}
            role="img" // Indicate that the div contains an image for screen readers
            aria-label="Article image" // Provide a label for the image
          ></div>
          <div className={style._article_props_wrapper}>
            {/* Comments count */}
            <div className={style._article_comment_prop_container}>
              {/* <CommentIcon /> */}
              <svg dangerouslySetInnerHTML={{ __html: sanitizedCommentIconSVG }} aria-hidden="true"/>

              <p className={style._article_comment_prop}>
                {article.publicationComments}
              </p>
            </div>
            {/* Likes count */}
            <div className={style._article_likes_prop_container}>
              {/* <LikeIcon /> */}
              <svg dangerouslySetInnerHTML={{ __html: sanitizedLikeIconSVG }} aria-hidden="true"/>

              <p className={style._article_likes_prop}>
                {article.publicationLikes}
              </p>
            </div>
            {/* Views count */}
            <div
              title="View post analytics"
              className={style._article_views_prop_container}
            >
              {/* <DarkChart /> */}
              <svg dangerouslySetInnerHTML={{ __html: sanitizedDarkChartSVG }} aria-hidden="true"/>

              <p className={style._article_views_prop}>
                {article.publicationViews}
              </p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default ArticleUI;
