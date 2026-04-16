---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.555Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Hide dashboard filters"
feature_slug: "hide-dashboard-filters"
latest_feature_date: "2023-01-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores"
  - "https://docs.cloud.google.com/looker/docs/access-control-and-permission-management"
keywords:
  - "hide"
  - "dashboard"
  - "filters"
  - "embedded"
  - "dashboards"
  - "can"
  - "through"
  - "url"
---

# Hide dashboard filters

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

Embedded dashboards can hide dashboard filters through the URL by using the hide_filters parameter.

## Extended Definition

Embedded dashboards can hide dashboard filters through the URL by using the hide_filters parameter.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)

## Supporting Pages

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- What's next Creating user-defined dashboards Editing user-defined dashboards Adding and editing user-defined dashboard filters Filtering and limiting data Sharing data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Create the new dashboard from an Explore This section guides you through querying data and creating a visualization for the Top Weekly Spenders tile, which will show the top 15 customers by sales in the last 4 weeks.

### AND/OR Filters in Explores \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores](https://docs.cloud.google.com/looker/docs/and-or-filters-in-explores)
- Source ID: `site-docs-reference`
- Final score: 122
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- AND/OR filters on dashboards AND/OR filters are created in the Explore Filters section and are translated into Looker expressions before the query is run.
- Things to know The following sections include things to know about AND/OR filters and required filters , and AND/OR filters on dashboards .
- As a result, AND/OR filters behave differently from basic filters on dashboards.
- If a query that uses both AND and OR filters is added to a dashboard, the filters will not appear in the dashboard filters section.

### "Access control and permission management \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/access-control-and-permission-management](https://docs.cloud.google.com/looker/docs/access-control-and-permission-management)
- Source ID: `site-docs-reference-required-4`
- Final score: 113
- Re-rank relevance: N/A

Evidence snippets:
- Folders let you set access levels that determine which users may edit folder contents (such as Looks and dashboards), view the contents in a folder, and change settings: A user needs to have at least the View access level to a folder to see that the folder exists, to view the Looks and dashboards inside it, and to copy the Looks and dashboards in the folder.
- A user who can manage a folder can manipulate the contents of a folder (copying, moving, deleting, and renaming dashboards and Looks), organize the folder itself (renaming, moving, or deleting the folder), and give other users and groups access to the folder.
- A user needs to have the Manage Access, Edit access level for a folder to manage access to the folder and to edit the folder and its content (including renaming folders, moving content, and deleting Looks and dashboards).
- Although content access is managed separately from feature access, the role that is assigned to a user can affect whether they can see Looks and dashboards listed in a folder, view a Look or dashboard, or manage a folder.

