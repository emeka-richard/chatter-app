import React, { createContext, useState } from "react";
import style from "./layouts.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

interface ArticleData {
    coverImgUrl: string | null;
    articleTag: string[] | null; // Assuming articleTag contains strings
    articleTitle: string | null;
    articleContent: string; // Assuming articleContent is always a string
  }

interface ArticleContextType {
  articleData: ArticleData;
  setArticleData: React.Dispatch<React.SetStateAction<ArticleData>>;
}

export const ArticleContext = createContext<ArticleContextType | undefined>(
  undefined
);

const PublishArticleLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [articleData, setArticleData] = useState<ArticleData>({
    coverImgUrl: "",
    articleTag: [],
    articleTitle: "",
    articleContent: "",
  });

  const handleActionClick = (buttonName: string) => {
    if (!articleData.articleContent) return;
    if (buttonName === "preview") {
      navigate("/article/preview");
    }
    if (buttonName === "edit") {
      navigate("/article/publish");
    }
    if (buttonName === "publish") return;
  };

  return (
    <div className={style.create_post_wrapper}>
      <section className={style.create_post_container}>
        <ArticleContext.Provider value={{ articleData, setArticleData }}>
          <div className={style.create_post_header_btns_container}>
            {location.pathname.includes("preview") && (
              <button
                onClick={() => handleActionClick("edit")}
                className={style.create_post_header_btn_edit}
              >
                Edit
              </button>
            )}
            <div className={style.create_post_header_btns_right}>
              {!location.pathname.includes("preview") && (
                <button
                  onClick={() => handleActionClick("preview")}
                  className={
                    articleData.articleContent
                      ? style.create_post_header_btn_preview
                      : style.create_post_header_btn_disabled
                  }
                >
                  Preview
                </button>
              )}
              <button
                onClick={() => handleActionClick("publish")}
                className={
                  articleData.articleContent
                    ? style.create_post_header_btn_publish
                    : style.create_post_header_btn_disabled
                }
              >
                Publish
              </button>
            </div>
          </div>
          <Outlet />
        </ArticleContext.Provider>
      </section>
    </div>
  );
};

export default PublishArticleLayout;
