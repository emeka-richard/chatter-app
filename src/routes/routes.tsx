import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from "react-router-dom";
import Spinner from "../middlewares/Spinner-component";
import HeroPageLayout from "../layouts/HeroPageLayout";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
// import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
import ProtectedRouteAuth from "../middlewares/Protected-Route-Auth";
import ErrorPage from "../UI/Error-Page";
import LazyComponents from "./lazy-routesList";
// import { ArticleContext } from "../layouts/PublishArticleLayout";

const RouteComponent = () => {
  return (
    <Router>
      <Routes>
        <Route
          element={<HeroPageLayout />}
          errorElement={<ErrorPage />}
        >
          <Route path="/" element={<HeroPageUI />} />
        </Route>
        <Route
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyComponents.AuthLayout />
            </React.Suspense>
          }
          errorElement={<ErrorPage />}
        >
          <Route
            path="/auth"
            // path="/auth/sign"
            element={
              <React.Suspense fallback={<Spinner />}>
                <LazyComponents.AuthFrame />
              </React.Suspense>
            }
          >
            <Route
              path="/auth/sign"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.AuthRegLogFrame />
                </React.Suspense>
              }
            >
              {/* <Route index element={<Navigate to="/auth/sign/register" />} /> */}
              <Route
                path="/auth/sign/login"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyComponents.LoginUI />
                  </React.Suspense>
                }
              />
              <Route
                path="/auth/sign/register"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyComponents.RegisterUI />
                  </React.Suspense>
                }
              />
            </Route>
            <Route element={<ProtectedRouteAuth />}>
              <Route
                path="/auth/account-verification"
                element={
                  <React.Suspense fallback={<Spinner />}>
                    <LazyComponents.AuthAccountVerification />
                  </React.Suspense>
                }
              />
            </Route>
          </Route>
        </Route>
        <Route
          // path="/feeds"
          element={<ProtectedRouteAuth />}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/feeds"
            element={
              <React.Suspense fallback={<Spinner />}>
                <LazyComponents.AppLayout />
              </React.Suspense>
            }
          >
            {/* <Route index element={<Navigate to="/feeds/all" />} /> */}
            <Route
              index
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.FeedsForYouContentUI />
                </React.Suspense>
              }
            />
            <Route
              path="/feeds/featured"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.FeedsFeaturedContentUI />
                </React.Suspense>
              }
            />
            <Route
              path="/feeds/recent"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.FeedsRecentContentUI />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          // path="/article"
          element={<ProtectedRouteAuth />}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/article"
            element={
              <React.Suspense fallback={<Spinner />}>
                <LazyComponents.PublishArticleLayout />
              </React.Suspense>
            }
          >
            <Route
              path="/article/publish"
              element={
                <React.Suspense fallback={<Spinner />}>
                  {/* <ArticleContext.Provider> */}
                  <LazyComponents.CreatePostUI />
                  {/* </ArticleContext.Provider> */}
                </React.Suspense>
              }
            />
            <Route
              path="/article/preview"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.ArticlePreview />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
        <Route
          // path="/analytics"
          element={<ProtectedRouteAuth />}
          errorElement={<ErrorPage />}
        >
          <Route
            path="/analytics"
            element={
              <React.Suspense fallback={<Spinner />}>
                <LazyComponents.AnalyticsUI />
              </React.Suspense>
            }
          >
            <Route
              index
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.AnalyticsAllArticleUI />
                </React.Suspense>
              }
            />
            <Route
              path="/analytics/:id"
              element={
                <React.Suspense fallback={<Spinner />}>
                  <LazyComponents.AnalyticsEachArticleUI />
                </React.Suspense>
              }
            />
          </Route>
        </Route>
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default RouteComponent;
