---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.803Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Persistent SQL UDFs"
feature_slug: "persistent-sql-udfs"
latest_feature_date: "2019-11-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/user-defined-functions"
  - "https://docs.cloud.google.com/bigquery/docs/display-video-transformation"
keywords:
  - "persistent"
  - "sql"
  - "udfs"
  - "bigquery"
  - "supports"
  - "standard"
  - "user"
  - "defined"
---

# Persistent SQL UDFs

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery supports persistent standard SQL user-defined functions stored for reuse; BigQuery supports persistent standard SQL user-defined functions stored for reuse.

## Extended Definition

BigQuery supports persistent standard SQL user-defined functions stored for reuse; BigQuery supports persistent standard SQL user-defined functions stored for reuse.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- You can use DDL commands to create, alter, and delete resources, such as the following: Datasets Tables Table schemas Table clones Table snapshots Views Connections User-defined functions (UDFs) Indexes Capacity commitments and reservations Row-level access policies Default configuration settings Required permissions To create a job that runs a DDL statement, you must have the bigquery.jobs.create permission for the project where you are running the job.
- IAM roles The predefined IAM roles bigquery.user , bigquery.jobUser , and bigquery.admin include the required bigquery.jobs.create permission.
- DROP FUNCTION statement Deletes a persistent user-defined function (UDF) or user-defined aggregate function (UDAF).
- BigQuery supports UDFs written in SQL, JavaScript, or Python.

### User-defined functions \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/user-defined-functions](https://docs.cloud.google.com/bigquery/docs/user-defined-functions)
- Source ID: `site-docs-reference`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- For example: SELECT id , my utils . my function ( value ) FROM sales ; Limitations The following limitations apply to temporary and persistent user-defined functions: The DOM objects Window , Document , and Node , and functions that require them, are not supported.
- You can see all the community UDFs in the Google Cloud console by starring the bigquery-public-data project in the Explorer pane, and then expanding the nested persistent udfs dataset within that project.
- Community-contributed functions Community contributed UDFs are available in the bigquery-public-data.persistent udfs public dataset and the open source bigquery-utils GitHub repository .
- The following limitations apply to persistent user-defined functions: Each dataset can only contain one persistent UDF with the same name.

### "Display & Video 360 data transformation \_|\_ BigQuery \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/bigquery/docs/display-video-transformation](https://docs.cloud.google.com/bigquery/docs/display-video-transformation)
- Source ID: `site-api-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Display & Video 360 resource BigQuery table BigQuery view Data Transfer files Impression p Impression displayvideo id Impression displayvideo id Click p Click displayvideo id Click displayvideo id Activity p Activity displayvideo id Activity displayvideo id DV360 API Resource (v3) Partner p Partner displayvideo id Partner displayvideo id Advertiser p Advertiser displayvideo id Advertiser displayvideo id LineItem p LineItem displayvideo id LineItem displayvideo id LineItemTargeting p LineItemTargeting displayvideo id LineItemTargeting displayvideo id Campaign p Campaign displayvideo id Campaign displayvideo id CampaignTargeting p CampaignTargeting displayvideo id CampaignTargeting displayvideo id InsertionOrder p InsertionOrder displayvideo id InsertionOrder displayvideo id InsertionOrderTargeting p InsertionOrderTargeting displayvideo id InsertionOrderTargeting displayvideo id AdGroup p AdGroup displayvideo id AdGroup displayvideo id AdGroupTargeting p AdGroupTargeting displayvideo id AdGroupTargeting displayvideo id AdGroupAd p AdGroupAd displayvideo id AdGroupAd displayvideo id Creative p Creative displayvideo id Creative displayvideo id Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Display & Video 360 data transformation When your Display & Video 360 data are transferred to BigQuery, they are transformed into the following BigQuery tables and views.
- Home Documentation Data analytics BigQuery Reference Send feedback Stay organized with collections Save and categorize content based on your preferences.
- When you view the tables and views in BigQuery, the value for displayvideo id is your Display & Video 360 partner or advertiser ID.

