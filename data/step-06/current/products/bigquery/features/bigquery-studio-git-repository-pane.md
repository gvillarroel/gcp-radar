---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.273Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Studio Git repository pane"
feature_slug: "bigquery-studio-git-repository-pane"
latest_feature_date: "2025-10-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui"
  - "https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing"
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
keywords:
  - "bigquery"
  - "studio"
  - "git"
  - "repository"
  - "pane"
  - "opening"
  - "workspace"
  - "now"
---

# BigQuery Studio Git repository pane

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Opening a workspace in a repository now opens it in the Git repository pane in the left pane of BigQuery Studio.

## Extended Definition

Opening a workspace in a repository now opens it in the Git repository pane in the left pane of BigQuery Studio.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)

## Supporting Pages

### Explore BigQuery in the Google Cloud console \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui](https://docs.cloud.google.com/bigquery/docs/bigquery-web-ui)
- Source ID: `site-docs-reference-5`
- Final score: 108
- Re-rank relevance: N/A

Evidence snippets:
- The Studio page has the following components: Explorer tab of the left pane : use the Explorer tab to work with tables, views, routines, and other BigQuery resources, and view your job history .
- When you click a workspace in the Git repository pane, it opens in a tab in the details pane.
- Note: To see how to use keyboard shortcuts in Studio, click keyboard BigQuery Studio shortcuts in the BigQuery Studio toolbar: To explore the Studio page, follow these steps: In the Google Cloud console, go to the BigQuery Studio page.
- Explore the Studio page The Studio page BigQuery is the central point for viewing your BigQuery resources and for performing common tasks such as creating datasets and creating and running notebooks.

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Select daily performance.sqlx , then enter the following query: config { type : "table" , schema : "reporting" , tags : [ "daily" , "google ads" ] } SELECT date , campaign id , campaign name , SUM ( clicks ) AS total clicks FROM ads Campaign CUSTOMER ID GROUP BY date , campaign id , campaign name ORDER BY date DESC Commit and push your changes After you have made your changes in your development workspace, you can commit and push these changes to your repository by following these steps: In the marketing-tutorial-workspace workspace, click Commit 1 change .
- The marketing-tutorial-workspace development workspace now appears in your marketing-tutorial-repository repository under the Development Workspaces tab, along with two example files in the definitions directory called first view.sqlx and second view.sqlx .
- Create and initialize a Dataform development workspace Create a Dataform development workspace so that you can work on the transformation code within your repository before you commit and push your changes to your repository.
- This example declares the ads Campaign table as a data source: In your development workspace, in the Files pane, click your SQLX file for data source declaration.

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 90
- Re-rank relevance: N/A

Evidence snippets:
- Partner references MicroStrategy with Google BigQuery Connecting to Google BigQuery Partner Advantage page Direct link Mixpanel Solution Mixpanel Category BI, ML, & Advanced Analytics Description Mixpanel is an event analytics service company that tracks user interactions with web and mobile applications.
- Partner references Customer Segments on BigQuery How GrowthLoop & BigQuery Works Sync Audiences to BigQuery Partner Advantage page Direct link Hex Solution Hex Data Workspace Category BI, ML, & Advanced Analytics Description Hex is a platform for collaborative analytics and data science.
- Partner references Configure BigQuery as a Destination How Lytics is built on BigQuery Partner Advantage page Direct link Lyzr.ai Solution Lyzr Agent Studio Category BI, ML, & Advanced Analytics Description Lyzr is a full-stack framework for building autonomous AI agents.
- Partner references Google BigQuery Integration View data in BigQuery Product & Behavioral Analytics on Google BigQuery Optimizely's partnership with Google Cloud Partner Advantage page Direct link Numberstation Solution Numbersstation.ai Category BI, ML, & Advanced Analytics Description Numbers Station leverages a multi-agent architecture built with specialized agents to reason through complex questions, building end-to-end analytics solutions and democratizing data by delivering insights where and when you need them.

