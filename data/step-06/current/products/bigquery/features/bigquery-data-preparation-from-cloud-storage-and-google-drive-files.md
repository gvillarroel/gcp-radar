---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.332Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery data preparation from Cloud Storage and Google Drive files"
feature_slug: "bigquery-data-preparation-from-cloud-storage-and-google-drive-files"
latest_feature_date: "2026-03-23"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/gemini-overview"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "GCS and Drive ingestion"
  - "BigQuery Prep from files"
  - "data enrichment"
  - "data cleaning"
  - "data prep"
  - "data transformation"
  - "Cloud Storage file source"
  - "Google Drive source"
---

# BigQuery data preparation from Cloud Storage and Google Drive files

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery data preparations now support cleaning, transforming, and enriching data from files stored in Cloud Storage and Google Drive.

## Extended Definition

BigQuery data preparation is a Gemini-enabled BigQuery Studio capability that offers context-aware, AI-generated recommendations to transform and cleanse data for analysis. It is exposed as a managed preparation workflow in BigQuery (including scheduling and release concepts), with permissions reflected through roles such as BigQuery Studio User and Gemini for Google Cloud User plus access to the underlying data. The provided excerpts do not explicitly confirm source ingestion from Cloud Storage or Google Drive, so that specific source-coverage claim is not strongly evidenced here.

## Evidence Summary

The Gemini overview and release notes establish what BigQuery data preparation does and how it is accessed/secured, while none of the provided snippets directly document Cloud Storage or Google Drive file-sourcing for this feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Build ELT pipeline for marketing analytics data \_|\_ BigQuery \_|\_ Google\

- URL: [https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing](https://docs.cloud.google.com/bigquery/docs/elt-tutorial-marketing)
- Source ID: `site-docs-root`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- In the file, enter the following code snippet: config { type : "declaration" , database : " PROJECT ID " , schema : " DATASET " , name : "ads Campaign CUSTOMER ID " , } Define your transformation Define your data transformations by create a SQLX file in the definitions/ directory.
- Create a workflow configuration Once you have created a production release, you can then create a workflow configuration that runs your data transformations on a specified schedule in your repository.
- The following steps show you how to specify the main branch of the marketing-tutorial-repository repository to store your data transformations: In the Google Cloud console, go to the Dataform page.
- Create a production release A production release in Dataform ensures that your environment is consistently updated with the results of your data transformations.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- February 10, 2025 Libraries Go 1.66.1 (2025-02-03) Bug Fixes bigquery: Move MaxStaleness field to table level ( #10066 ) ( 164492d ) Libraries Go 1.66.2 (2025-02-04) Bug Fixes bigquery: Broken github.com/envoyproxy/go-control-plane/envoy dep ( #11556 ) ( e70d63b ), refs #11542 Feature BigQuery data preparation provides context-aware join operation recommendations from Gemini .
- BigQuery data preparation no longer requires that you have the permissions granted by the following IAM roles: BigQuery Data Editor ( roles/bigquery.dataEditor ) Service Usage Consumer ( roles/serviceusage.serviceUsageConsumer ) For more information about the required roles, see Manage data preparations .
- Change You can get the required permissions to use BigQuery data preparation through the BigQuery Studio User ( roles/bigquery.studioUser ) and Gemini for Google Cloud User ( roles/cloudaicompanion.user ) roles, and permission to access the data you're preparing.
- Feature On the Scheduling page, you can now view existing schedules, create new schedules, and perform other actions for data preparations, notebooks, BigQuery pipelines, and scheduled queries.

### Gemini in BigQuery overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/gemini-overview](https://docs.cloud.google.com/bigquery/docs/gemini-overview)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Enhanced features in Gemini in BigQuery are the following: SQL generation tool Prompt to generate SQL queries Convert comments to SQL Complete a SQL query Explain a SQL query Generate python code Python code completion Data canvas Data preparation Data insights Locations For information about where Gemini in BigQuery processes your data, see Where Gemini in BigQuery processes your data .
- Data preparation in BigQuery gives you context aware, AI-generated transformation recommendations to cleanse data for analysis.
- To prepare data for analysis, in the Create new list, select Data preparation .
- For more information, see Open the data preparation editor in BigQuery .

