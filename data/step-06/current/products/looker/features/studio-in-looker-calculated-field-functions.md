---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T13:43:38.485Z"
product_name: "Looker"
product_slug: "looker"
feature_name: "Studio in Looker calculated field functions"
feature_slug: "studio-in-looker-calculated-field-functions"
latest_feature_date: "2025-03-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/looker/docs/admin-panel-users-roles"
  - "https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery"
  - "https://docs.cloud.google.com/looker/docs/bar-options"
keywords:
  - "studio"
  - "looker"
  - "calculated"
  - "field"
  - "functions"
  - "connector"
  - "supports"
  - "some"
---

# Studio in Looker calculated field functions

Product: Looker
Coverage: MEDIUM

## Step 02 Summary

The Looker connector supports some calculated field functions.

## Extended Definition

The Looker connector supports some calculated field functions.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)

## Supporting Pages

### Admin settings - Roles \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/admin-panel-users-roles](https://docs.cloud.google.com/looker/docs/admin-panel-users-roles)
- Source ID: `site-docs-reference`
- Final score: 127
- Re-rank relevance: N/A

Evidence snippets:
- They can also view and edit that data source's configuration in Looker Studio. create table calculations explore Instance Wide NN Users can view, edit, or add table calculations create custom fields explore Instance Wide NN Users can view, edit, or add custom fields ; users who have only the explore permission can only view custom fields. can create forecast explore Instance Wide NN Users can create and edit forecasts in visualizations; users who don't have this permission can only view existing forecasts in the content to which they have access. can override vis config explore Instance Wide NN Users can access the Chart Config Editor , which lets them modify the Highchart API JSON values of a visualization and customize the visualization appearance and format. save content see looks Instance Wide NN This permission is a parent permission of save dashboards , save looks , and create public looks .
- Users must have download with limit and/or download without limit permissions to download the content. create public looks save looks Model Specific Users can mark a saved Look as public , which will then generate URLs that grant access to that Look without authentication. download with limit see looks Model Specific This permission applies to Looks and dashboards in Looker and to reports in Looker Studio that use the Looker connector.
- Users can email content deliveries or alert notifications to email addresses with any domain, regardless of whether the Email domain allowlist on the Settings page of the Admin panel contains any email domains. create alerts see looks Instance Wide NN This permission applies to dashboards in Looker and to charts in Looker Studio that use the Looker connector.
- Looker Studio Pro users with this permission can schedule deliveries of Looker Studio reports that use the Looker connector. schedule external look emails schedule look emails Model Specific Users can deliver any Looks, dashboards, and queries with visualizations to which they have data access to email.

### Connect to Google BigQuery \_|\_ Data Studio \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery](https://docs.cloud.google.com/looker/docs/studio/connect-to-google-bigquery)
- Source ID: `site-docs-reference-required-5`
- Final score: 112
- Re-rank relevance: N/A

Evidence snippets:
- SELECT FROM ( SELECT Criteria ID, Parent ID, Name FROM 'table 1' ) As table 1 LEFT JOIN ( SELECT Criteria ID, Parent ID, Name FROM 'table 2' ) As table 2 ON table 1.Criteria ID = table 2.Criteria ID This query includes the following duplicate column names: Criteria ID Parent ID Name To avoid the Field is ambiguous error, you can explicitly rename the duplicated fields using the AS keyword: SELECT FROM ( SELECT Criteria ID AS Criteria ID 1, Parent ID AS Parent ID 1, Name AS NAME 1 FROM 'table 1' ) AS table 1 LEFT JOIN ( SELECT Criteria ID AS Criteria ID 2, Parent ID AS Parent ID 2, Name AS NAME 2 FROM 'table 2' ) AS table 2 ON table 1.Criteria ID 1 = table 2.Criteria ID 2; If you need to rename only a few fields, you can select everything except the ones that you want to rename, for example: SELECT EXCEPT (city), city AS city 1 FROM 'table 1' Query timeout Custom queries in Data Studio might time out after three to five minutes.
- Because of this, custom queries in Data Studio are subject to the following restrictions: Custom SQL queries may only have a single statement For example, the following won't work because it has multiple SQL statements: DECLARE cost per tb in dollar FLOAT64 DEFAULT 4.2; SELECT total bytes billed / (1024 1024) cost per tb in dollar)/(1024 1024))) FROM billing-table; Use unambiguous field names in joins Custom join queries can't handle duplicate column names.
- To enable the BigQuery Storage Read API, grant the following permissions to your BigQuery user who is connected to Data Studio: bigquery.readsessions.create bigquery.readsessions.getData Quotas and general limits The maximum number of rows that can be returned using the BigQuery Connector is 2 million rows.
- When you connect to a table that is partitioned on a DATE , DATETIME , or TIMESTAMP field, Data Studio can use that field as the date range dimension for charts that are based on this data source.

### Bar chart options \_|\_ Looker \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/looker/docs/bar-options](https://docs.cloud.google.com/looker/docs/bar-options)
- Source ID: `site-docs-reference`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- You can also use the following calculations, embedded in double curly brackets {{ }}, in the Label field: median mean max min deviation (for population standard deviation) variance (for population variance) For example, enter "Average: \{{mean}}" to show something like Average: 123.4 .
- For Looker developers: The formatting used in the Value Format field is the same as formatting that is used with the value format LookML parameter , except that the value format parameter requires the formatting string to be enclosed in double quotes.
- Some of the most common formatting options are shown on the Adding custom formatting to numeric fields documentation page.
- For information about Looker Studio visualizations, see Types of charts in Looker Studio .

