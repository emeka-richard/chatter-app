import React from "react";
import style from "./analytics.module.css";
import { useParams } from "react-router-dom";
import { writerProps, WriterProps } from '../Feeds-UIs/Feeds-WriterProps';
import ArticleUI from "../Feeds-UIs/Article-UI";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}


const AnalyticsArticleUI: React.FC = function () {
  const { id } = useParams<RouteParams>();

  const writerPropsArray = writerProps

// Find the writerProps that matches the id parameter
const exactWriterProp = writerPropsArray.find(
    (writerProp: WriterProps) => writerProp.id === Number(id)
  ) as WriterProps | undefined;
  
  return (
    <>
      {exactWriterProp && (
        <section className={style.analytics_each_article_wrapper}>
          <div className={style.analytics_each_article_header_container}>
            <div className={style.analytics_each_article_header_1_container}>
              <h1 className={style.analytics_each_article_header_1_h1}>
                Post Analytics
              </h1>
              <h2 className={style.analytics_each_article_header_1_h2}>
                {exactWriterProp.publicationTime}
              </h2>
            </div>
            <div className={style.analytics_each_article_header_2_container}>
              <h3 className={style.analytics_each_article_header_2_h3}>
                Post highlights
              </h3>
              <p className={style.analytics_each_article_header_2_p}>
                Top posts{" "}
                <span className={style.analytics_each_article_header_2_span}>
                  earned {exactWriterProp.publicationViews ?? 0} impression
                </span>
              </p>
            </div>
          </div>
          <ArticleUI article={exactWriterProp} />
          <section className={style.analytics_each_article_buttom_container}>
            <div className={style.analytics_each_article_buttom_1_container}>
              <h1 className={style.analytics_each_article_buttom_1_h1}>
                Post summary
              </h1>
              <p className={style.analytics_each_article_buttom_1_p}>
                {exactWriterProp.publicationTime ?? 'Unknown time'}
              </p>
            </div>
            <div className={style.analytics_each_article_buttom_2_container}>
              <div className={style.analytics_each_article_buttom_2_post_container}>
                <h2 className={style.analytics_each_article_buttom_2_post_h2}>
                  Posts
                </h2>
                <p className={style.analytics_each_article_buttom_2_post_p}>
                  {exactWriterProp.postList?.length ?? 0}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_impression_container}>
                <h2 className={style.analytics_each_article_buttom_2_impression_h2}>
                  Posts Impression
                </h2>
                <p className={style.analytics_each_article_buttom_2_impression_p}>
                  {exactWriterProp.publicationViews ?? 0}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_visits_container}>
                <h2 className={style.analytics_each_article_buttom_2_visit_h2}>
                  Profile Visits
                </h2>
                <p className={style.analytics_each_article_buttom_2_visit_p}>
                  {exactWriterProp.profileVisit ?? 0}
                </p>
              </div>
              <div className={style.analytics_each_article_buttom_2_followers_container}>
                <h2 className={style.analytics_each_article_buttom_2_followers_h2}>
                  Followers
                </h2>
                <p className={style.analytics_each_article_buttom_2_followers_p}>
                  {exactWriterProp.writterFollowers?.length ?? 0}
                </p>
              </div>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default AnalyticsArticleUI;
