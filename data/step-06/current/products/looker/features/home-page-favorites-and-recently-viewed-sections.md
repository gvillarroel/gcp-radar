---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.505Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Home page Favorites and Recently Viewed sections"
feature_slug: "home-page-favorites-and-recently-viewed-sections"
latest_feature_date: "2024-10-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage"
  - "https://docs.cloud.google.com/looker/docs/access-levels"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts"
keywords:
  - "home"
  - "page"
  - "favorites"
  - "recently"
  - "viewed"
  - "sections"
  - "now"
  - "shows"
---

# Home page Favorites and Recently Viewed sections

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Home page now shows updated Favorites and Recently Viewed sections.

## Extended Definition

The Home page now shows updated Favorites and Recently Viewed sections.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage](https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage)
- [https://docs.cloud.google.com/looker/docs/access-levels](https://docs.cloud.google.com/looker/docs/access-levels)
- [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)

## Supporting Pages

### Admin settings - Homepage \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage](https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage)
- Source ID: `site-docs-reference-required-4`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are using Looker (Google Cloud core), the pre-built homepage also displays the following sections in addition to the Recently Viewed and Favorites tabs: A Sample Dashboards section, which displays the sample dashboards from the sample LookML project, unless the sample LookML project has been removed .
- The homepage options for your instance are available on the Homepage page under Set a default homepage for your organization : Looker's pre-built homepage : The pre-built Looker homepage displays tabs for recently viewed content and favorited content.
- By default, the homepage for your instance is the pre-built Looker homepage , which displays a user's favorite content, that user's recently viewed content, and the recently viewed content at the organization.
- A URL within Looker : You can set the default homepage to a specific page within Looker (such as the Favorites page), a board , a folder , or a Markdown file (such as a README or document file in a project) by specifying a relative URL such as /browse/boards/2 .

### "Designing and configuring a system of access levels \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/access-levels](https://docs.cloud.google.com/looker/docs/access-levels)
- Source ID: `site-docs-reference`
- Final score: 92
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The Homepage: Recently Viewed Content is an example of a place in Looker where that user will only see other Company C members and their content.
- Enable the Closed System option in the Admin panel It's best to enable the Closed System option before setting up any access controls on folders, since enabling the Closed System option makes changes to your system (see the introduction to Configuring a closed system on this page).
- Home Documentation Data analytics Looker Guides Send feedback Designing and configuring a system of access levels Stay organized with collections Save and categorize content based on your preferences.
- Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### "Admin settings - Persistent Derived Tables \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts](https://docs.cloud.google.com/looker/docs/admin-panel-database-pdts)
- Source ID: `site-docs-reference-required-4`
- Final score: 91
- Re-rank relevance: N/A

Evidence snippets:
- These are the persisted tables that have been deployed to production on your instance; these persisted tables provide the data for your users' Explore queries. (If you are in Production Mode or if you don't have develop permissions, the Persistent Derived Tables page will not display any tabs, and the page will show information for production persisted tables only.) The Development tab shows the development persisted tables .
- The Persistent Derived Tables page shows only the connections that are enabled for PDTs and only the persisted tables that meet the following criteria: The persisted table is defined in a view file that is in production, unless you are in Development Mode , in which case you can use the Development tab to see the development version of persisted tables.
- The Looker Persistent Derived Tables admin page shows the status of the Looker instance's persisted tables (which include both persistent derived tables and aggregate tables .
- A visualization that shows all the create events that have occurred recently, grouped by a summary of the types of actions that caused the events.

