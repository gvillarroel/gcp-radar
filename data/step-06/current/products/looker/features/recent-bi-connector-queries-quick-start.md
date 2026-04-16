---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.540Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Recent BI Connector Queries Quick Start"
feature_slug: "recent-bi-connector-queries-quick-start"
latest_feature_date: "2023-08-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart"
  - "https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart"
  - "https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer"
keywords:
  - "recent"
  - "bi"
  - "connector"
  - "queries"
  - "quick"
  - "start"
  - "system"
  - "activity"
---

# Recent BI Connector Queries Quick Start

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

This System Activity Quick Start shows recent BI Connector queries to a Looker instance from the last seven days.

## Extended Definition

This System Activity Quick Start shows recent BI Connector queries to a Looker instance from the last seven days.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- [https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart)
- [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)

## Supporting Pages

### "Quickstart: Build a dashboard with sample data \_|\_ Looker \_|\_ Google\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-dashboard-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 151
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker permissions You'll need to have the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore explore (and its parent permission, see looks ): Access the Explore page and run queries in the Intermediate Ecommerce Explore. see user dashboards (and its parent permission, see looks ): View the Sales and Customer Insights dashboard. save dashboards (and its parent permission, save content ): Save and edit the Sales and Customer Insights dashboard. save looks (and its parent permission, save content ): Save the Weekly Shipping Trends (Last 8 Weeks) Look (if you complete the Build a Look with sample data quickstart). create table calculations : Create the table calculations for the Yearly Sales Goal Tracking (2024) tile.
- Yearly Sales Goal Tracking (2024) : Visualize your year-to-date sales and compare them to a set goal by using table calculations to visualize a running total and by adding a reference line. (Optional) Weekly Shipping Trends (Last 8 Weeks) : If you've completed the Build a Look with sample data quickstart, you can also add your shipping delay analysis Look to this dashboard.
- This quickstart guides you through building a dashboard with the following tiles, including an optional Look-linked tile that you can add to your dashboard if you've completed the Build a Look with sample data quickstart: Top Weekly Spenders : Identify the top spenders for the past four weeks to target them with personalized promotions.
- Add an existing Look as a tile (Optional) If you have completed the Build a Look with sample data quickstart, you can add your Weekly Shipping Trends (Last 8 Weeks) Look to your dashboard as a tile.

### Load Campaign Manager data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer](https://docs.cloud.google.com/bigquery/docs/doubleclick-campaign-transfer)
- Source ID: `site-docs-reference-required-6`
- Final score: 146
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT base . , imp . count AS imp count , imp . du AS imp du , click . count AS click count , click . du AS click du , activity . count AS activity count , activity . du AS activity du FROM ( SELECT FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) ) ) AS base LEFT JOIN ( SELECT Campaign ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .impression campaign manager id WHERE DATA DATE BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) GROUP BY Campaign ID , Date ) AS imp ON base .
- Activity Group ID WHERE DATA DATE = LATEST DATE ), ( SELECT date AS Date FROM bigquery-public-data.utility us.date greg WHERE Date BETWEEN start date AND end date ) ) AS base LEFT JOIN ( SELECT Campaign ID , Activity ID , DATA DATE AS Date , COUNT ( ) AS count , COUNT ( DISTINCT User ID ) AS du FROM dataset .activity campaign manager id WHERE DATA DATE BETWEEN DATE ADD ( CURRENT DATE (), INTERVAL - 31 DAY ) AND DATE ADD ( CURRENT DATE (), INTERVAL - 1 DAY ) GROUP BY Campaign ID , Activity ID , Date ) AS activity ON base .
- START DATE = DATE ADD(CURRENT DATE(), INTERVAL -31 DAY) END DATE = DATE ADD(CURRENT DATE(), INTERVAL -1 DAY) SELECT base . , activity . count AS activity count , activity . du AS activity du FROM ( SELECT FROM ( SELECT Campaign , Campaign ID FROM dataset .match table campaigns campaign manager id WHERE DATA DATE = LATEST DATE ), ( SELECT mt at .
- Java Before trying this sample, follow the Java setup instructions in the BigQuery quickstart using client libraries .

### "Quickstart: Build a Look with sample data \_|\_ Looker \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart](https://docs.cloud.google.com/looker/docs/looker-core-create-look-quickstart)
- Source ID: `site-docs-reference-required-4`
- Final score: 143
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Looker permissions You'll also need to have a the following Looker permissions on your Looker (Google Cloud core) instance (or a Looker role that includes these permissions): access data : Access the sample data in the Intermediate Ecommerce Explore. explore : Access the Explore page and run queries in the Intermediate Ecommerce Explore. save looks (and its parent permission, save content ): Save the visualization as a Look. see looks : View the Look that you'll create in this quickstart.
- The following table is an example of the query results that you'll use to build your Look: Created At Week 2024-07-29 2024-07-22 2024-07-15 2024-07-08 2024-07-01 2024-06-24 2024-06-17 2024-06-10 Shipped to Delivered Days of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items of Order Items 4 451 242 210 199 163 152 189 177 3 422 260 213 177 213 144 171 165 Before you begin To follow along with this quickstart, you'll need access to a Looker (Google Cloud core) instance that includes the sample LookML project .
- What's next Quickstart: Build a dashboard with sample data Creating and editing Explores Filtering and limiting data Creating user-defined dashboards Sharing data Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Note: If you plan to use this Look in a dashboard, you may also need additional permissions, such as save dashboards and see user dashboards , as described in the Build a dashboard with sample data quickstart.

