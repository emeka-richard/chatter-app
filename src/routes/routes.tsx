import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Spinner from "../middlewares/Spinner-component";
import HeroPageLayout from "../layouts/HeroPageLayout";
import HeroPageUI from "../UI/HeroPage-UI/HeroPage-UI";
import ProtectedRouteAuth from "../middlewares/Protected-Route-Auth";
import ErrorPage from "../UI/Error-Page";
import AuthLayout from "../layouts/AuthLayout-layouts/AuthLayout";
import AuthFrame from "../layouts/AuthLayout-layouts/Auth-Frame";
import AuthRegLogFrame from "../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame";
import LoginUI from "../UI/AuthPage-UI/Login-UIs/Login-UI";
import RegisterUI from "../UI/AuthPage-UI/Register-UIs/Register-UI";
import AuthAccountVerification from "../layouts/AuthLayout-layouts/Auth-Account-Verify-Layout/Auth-acct-verification";

// Import lazy and Suspense for lazy loading
import LazyComponents from "./lazy-routesList";

const router = createBrowserRouter([
  {
    element: <HeroPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HeroPageUI />
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/auth",
        element: <AuthFrame />,
        children: [
          {
            path: "/auth/sign",
            element: <AuthRegLogFrame />,
            children: [
              {
                index: true,
                element: <Navigate to={"/auth/sign/register"} />,
              },
              {
                path: "/auth/sign/login",
                element: <LoginUI />,
              },
              {
                path: "/auth/sign/register",
                element: <RegisterUI />,
              },
            ],
          },
          {
            path: "/auth/account-verification",
            element: <ProtectedRouteAuth element={<AuthAccountVerification />} />,
          },
        ],
      },
    ],
  },
  {
    element: (
      <React.Suspense fallback={<Spinner />}>
        <ProtectedRouteAuth element={<LazyComponents.AppLayout />} />
      </React.Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/feeds",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <LazyComponents.FeedsUI />
          </React.Suspense>
        ),
        children: [
          {
            index: true,
            element: <Navigate to={"/feeds/all"} />,
          },
          {
            path: "/feeds/all",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.FeedsForYouContentUI />} />
              </React.Suspense>
            ),
          },
          {
            path: "/feeds/featured",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.FeedsFeaturedContentUI />} />
              </React.Suspense>
            ),
          },
          {
            path: "/feeds/recent",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.FeedsRecentContentUI />} />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "/article",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <ProtectedRouteAuth element={<LazyComponents.PublishArticleLayout />} />
          </React.Suspense>
        ),
        children: [
          {
            path: "/article/publish",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.CreatePostUI />} />
              </React.Suspense>
            ),
          },
          {
            path: "/article/preview",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.ArticlePreview />} />
              </React.Suspense>
            ),
          },
        ],
      },
      {
        path: "/analytics",
        element: (
          <React.Suspense fallback={<Spinner />}>
            <ProtectedRouteAuth element={<LazyComponents.AnalyticsUI />} />
          </React.Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <React.Suspense fallback={<Spinner />}>
                <LazyComponents.AnalyticsAllArticleUI />
              </React.Suspense>
            ),
          },
          {
            path: "/analytics/:id",
            element: (
              <React.Suspense fallback={<Spinner />}>
                <ProtectedRouteAuth element={<LazyComponents.AnalyticsEachArticleUI />} />
              </React.Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
