---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.517Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Sample dashboards on the Looker homepage"
feature_slug: "sample-dashboards-on-the-looker-homepage"
latest_feature_date: "2024-07-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
keywords:
  - "sample"
  - "dashboards"
  - "looker"
  - "homepage"
  - "can"
  - "show"
  - "when"
  - "instance"
---

# Sample dashboards on the Looker homepage

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker homepage can show sample dashboards when an instance does not yet have any Looks or dashboards.

## Extended Definition

The Looker homepage can show sample dashboards when an instance does not yet have any Looks or dashboards.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- [https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage](https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)

## Supporting Pages

### "Downloading or delivering dashboards in rendered formats \_|\_ Looker \_\

- URL: [https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards](https://docs.cloud.google.com/looker/docs/best-practices/rendered-format-options-downloading-delivering-dashboards)
- Source ID: `site-docs-reference`
- Final score: 153
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Important : Starting in Looker 26.4, table charts, scatterplot charts, and Google Maps charts that have increased row limits are subject to the following limitations when you download, send, or schedule dashboards in PDF format: The query results for each table chart on a dashboard will display up to 50,000 rows, to a maximum total limit of 200,000 cells per dashboard.
- Home Documentation Data analytics Looker Best Practices Send feedback Downloading or delivering dashboards in rendered formats Stay organized with collections Save and categorize content based on your preferences.
- Table charts on a dashboard PDF will display more rows than are displayed on the dashboard tile thumbnail only when the Expand tables to show all rows option is selected.
- Important : For customer-hosted Looker instances, installation of Chromium is required to output rendered formats.

### Admin settings - Homepage \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage](https://docs.cloud.google.com/looker/docs/admin-panel-general-homepage)
- Source ID: `site-docs-reference-required-4`
- Final score: 148
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Note: If you are using Looker (Google Cloud core), the pre-built homepage also displays the following sections in addition to the Recently Viewed and Favorites tabs: A Sample Dashboards section, which displays the sample dashboards from the sample LookML project, unless the sample LookML project has been removed .
- Setting a default homepage for your instance The Looker homepage appears when users log in to Looker or navigate to the homepage by clicking Home in the left navigation panel or by clicking the Looker logo.
- The homepage options for your instance are available on the Homepage page under Set a default homepage for your organization : Looker's pre-built homepage : The pre-built Looker homepage displays tabs for recently viewed content and favorited content.
- By default, the homepage for your instance is the pre-built Looker homepage , which displays a user's favorite content, that user's recently viewed content, and the recently viewed content at the organization.

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 137
- Re-rank relevance: N/A

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- Build a dashboard with sample data Learn how to create a dashboard with sample data from the Intermediate Ecommerce Explore in the sample LookML project on your Looker (Google Cloud core) instance.
- Before you begin To follow along with this quickstart, you'll need access to a Looker (Google Cloud core) instance that includes the sample LookML project .
- What's next Creating user-defined dashboards Editing user-defined dashboards Adding and editing user-defined dashboard filters Filtering and limiting data Sharing data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

