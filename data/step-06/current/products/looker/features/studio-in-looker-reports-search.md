---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.492Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker reports search"
feature_slug: "studio-in-looker-reports-search"
latest_feature_date: "2025-03-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/looker/docs/studio"
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
keywords:
  - "studio"
  - "looker"
  - "reports"
  - "search"
  - "includes"
---

# Studio in Looker reports search

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker Search function includes reports.

## Extended Definition

The Looker Search function includes reports.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/looker/docs/studio](https://docs.cloud.google.com/looker/docs/studio)
- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)

## Supporting Pages

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 119
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM ( SELECT Criteria ID, Parent ID, Name FROM 'table 1' ) As table 1 LEFT JOIN ( SELECT Criteria ID, Parent ID, Name FROM 'table 2' ) As table 2 ON table 1.Criteria ID = table 2.Criteria ID This query includes the following duplicate column names: Criteria ID Parent ID Name To avoid the Field is ambiguous error, you can explicitly rename the duplicated fields using the AS keyword: SELECT FROM ( SELECT Criteria ID AS Criteria ID 1, Parent ID AS Parent ID 1, Name AS NAME 1 FROM 'table 1' ) AS table 1 LEFT JOIN ( SELECT Criteria ID AS Criteria ID 2, Parent ID AS Parent ID 2, Name AS NAME 2 FROM 'table 2' ) AS table 2 ON table 1.Criteria ID 1 = table 2.Criteria ID 2; If you need to rename only a few fields, you can select everything except the ones that you want to rename, for example: SELECT EXCEPT (city), city AS city 1 FROM 'table 1' Query timeout Custom queries in Data Studio might time out after three to five minutes.
- For more information about tracking the performance and cost of Data Studio charts and reports, see the Analyze data with Data Studio BigQuery documentation page.
- Analyze Data Studio queries with job labels All queries that are sent by Data Studio to BigQuery have the BigQuery job label requestor:looker studio .
- Looker Studio is now called Data Studio.

### Welcome to Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio](https://docs.cloud.google.com/looker/docs/studio)
- Source ID: `site-api-reference`
- Final score: 111
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Visualize your data Data Studio is a no-cost tool that turns your data into informative, easy to read, easy to share, and fully customizable dashboards and reports.
- Looker Studio is now called Data Studio.
- In just a few moments, you can connect to data sets such as the following: Databases, including BigQuery, MySQL, and PostgreSQL Google Marketing Platform products, including Google Ads, Google Analytics, Display & Video 360, Search Ads 360 Google consumer products, such as Google Sheets, YouTube, and Search Console Flat files via CSV file upload and Cloud Storage Social media platforms such as Facebook, Reddit, and Twitter Blended data from any combination of related sources Learn more about connecting to your data .
- Get started Try Data Studio now Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 107
- Re-rank relevance: N/A

Evidence snippets:
- Looker Studio users with this permission can view Looker data on Looker Studio reports that use the Looker connector. see lookml dashboards access data Model Specific Users can see the LookML Dashboards folder, which includes all LookML dashboards.
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can schedule deliveries of Looker Studio reports that use the Looker connector. schedule external look emails schedule look emails Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to email.
- Looker Studio Pro users with this permission can download Looker Studio reports that use the Looker connector. download without limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.

