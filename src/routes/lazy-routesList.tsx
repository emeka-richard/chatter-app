import React from "react";


// Lazy load the components
const LazyComponents = {
    // AuthLayout: React.lazy(() => import("../layouts/AuthLayout-layouts/AuthLayout")),
    AppLayout: React.lazy(() => import("../layouts/AppLayout-layouts/AppLayout")),
    // ErrorPage: React.lazy(() => import("../UI/Error-Page")),
    // RegisterUI: React.lazy(() => import("../UI/AuthPage-UI/Register-UIs/Register-UI")),
    // AuthFrame: React.lazy(() => import("../layouts/AuthLayout-layouts/Auth-Frame")),
    // AuthRegLogFrame: React.lazy(() => import("../layouts/AuthLayout-layouts/Auth-Reg-Log-Layout/Auth-Reg-Log-Frame")),
    // AuthAccountVerification: React.lazy(() => import("../layouts/AuthLayout-layouts/Auth-Account-Verify-Layout/Auth-acct-verification")),
    // LoginUI: React.lazy(() => import("../UI/AuthPage-UI/Login-UIs/Login-UI")),
    FeedsUI: React.lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-UI")),
    FeedsForYouContentUI: React.lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-ForYou-Content-UI")),
    FeedsFeaturedContentUI: React.lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feeds-Featured-Content-UI")),
    FeedsRecentContentUI: React.lazy(() => import("../UI/AppLayout-UI/Feeds-UIs/Feed-Recent-Content-UI")),
    CreatePostUI: React.lazy(() => import("../UI/AppLayout-UI/Create-Article-UIs/Create-Post-UI")),
    PublishArticleLayout: React.lazy(() => import("../layouts/PublishArticleLayout")),
    ArticlePreview: React.lazy(() => import("../UI/AppLayout-UI/Create-Article-UIs/Preview-Article-UI")),
    AnalyticsUI: React.lazy(() => import("../layouts/AppLayout-layouts/AnalyticsLayout")),
    AnalyticsEachArticleUI: React.lazy(() => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-Each-Article-UI")),
    AnalyticsAllArticleUI: React.lazy(() => import("../UI/AppLayout-UI/Analytics-UIs/Analytics-All-Articles-UI")),
  };

  export default LazyComponents