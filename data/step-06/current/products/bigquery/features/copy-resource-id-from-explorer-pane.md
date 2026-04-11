---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.723Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Copy resource ID from Explorer pane"
feature_slug: "copy-resource-id-from-explorer-pane"
latest_feature_date: "2022-08-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini"
  - "https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial"
  - "https://docs.cloud.google.com/bigquery/docs/release-notes"
keywords:
  - "resource ID action"
  - "resource identifier"
  - "Console resource menu"
  - "View actions"
  - "copy resource ID"
  - "copy resource id"
  - "Explorer resource ID"
  - "Explorer pane"
---

# Copy resource ID from Explorer pane

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery console users can copy a resource ID from the Explorer pane via View actions.

## Extended Definition

The excerpts show that BigQuery users work with resources in the BigQuery Explorer pane and can open a "View actions" menu from that UI area (for example, to create a dataset). However, the provided evidence does not explicitly state that one of these actions is "Copy resource ID." Therefore, the specific feature of copying a resource ID from the Explorer pane is only weakly supported by these excerpts.

## Evidence Summary

The cited pages document BigQuery Explorer pane interactions and mention a View actions menu, but they do not explicitly confirm a "copy resource ID" action.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)

## Supporting Pages

### "Generate text by using a Gemini model and the AI.GENERATE_TEXT function\

- URL: [https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini](https://docs.cloud.google.com/bigquery/docs/generate-text-tutorial-gemini)
- Source ID: `site-docs-root-2`
- Final score: 26
- Re-rank relevance: N/A

Evidence snippets:
- Click more vert View actions > Create dataset On the Create dataset page, do the following: For Dataset ID , enter bqml tutorial .
- In the Explorer pane, expand your project and click Datasets In the Datasets list, click the dataset.
- In the Explorer pane, expand your project name, and then click Connections .
- Go to the BigQuery page In the Explorer pane, click your project name.

### "Create recommendations based on explicit feedback with a matrix factorization\

- URL: [https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial](https://docs.cloud.google.com/bigquery/docs/bigqueryml-mf-explicit-tutorial)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Go to BigQuery In the query editor, paste in the following query and click Run : CREATE OR REPLACE MODEL bqml tutorial.mf explicit OPTIONS ( MODEL TYPE = 'matrix factorization' , FEEDBACK TYPE = 'explicit' , USER COL = 'user id' , ITEM COL = 'item id' , L2 REG = 9.83 , NUM FACTORS = 34 ) AS SELECT user id , item id , rating FROM bqml tutorial.ratings ; The query takes about 10 minutes to complete, after which the mf explicit model appears in the Explorer pane.
- MatrixFactorization ( num factors = 34 , feedback type = "explicit" , user col = "user id" , item col = "item id" , rating col = "rating" , l2 reg = 9.83 , ) model . fit ( bq df ) model . to gbq ( your model id , replace = True # For example: "bqml tutorial.mf explicit" ) The code takes about 10 minutes to complete, after which the mf explicit model appears in the Explorer pane.
- Click more vert View actions > Create dataset On the Create dataset page, do the following: For Dataset ID , enter bqml tutorial .
- In the Explorer pane, expand your project, click Datasets , and then click the bqml tutorial dataset.

### BigQuery release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/release-notes](https://docs.cloud.google.com/bigquery/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- September 15, 2025 Libraries Java 2.55.0 (2025-09-12) Features bigquery: Add custom ExceptionHandler to BigQueryOptions ( #3937 ) ( de0914d ) Dependencies Update dependency com.google.cloud:google-cloud-bigquerystorage-bom to v3.17.0 ( #3954 ) ( e73deed ) Update dependency com.google.cloud:sdk-platform-java-config to v3.52.1 ( #3952 ) ( 79b7557 ) Libraries Python 3.37.0 (2025-09-08) Features Updates to fastpath query execution ( #2268 ) ( ef2740a ) Bug Fixes Remove deepcopy while setting properties for QueryResults ( #2280 ) ( 33ea296 ) Documentation Clarify that the presence of XyzJob.errors doesn't necessarily mean that the job has not completed or was unsuccessful ( #2278 ) ( 6e88d7d ) Clarify the api method arg for client.query() ( #2277 ) ( 8a13c12 ) Feature In the BigQuery Studio, in the Explorer pane, you can now open saved queries in Connected Sheets .
- Feature The following features are now generally available (GA) in BigQuery Studio: To streamline resource discovery and access, the left Explorer pane has been reorganized into three sections: Explorer, Classic Explorer, and Git repository.
- December 01, 2025 Feature Search results in the Explorer pane in BigQuery Studio now show results in the current organization.
- October 16, 2025 Feature You can now access repositories by clicking Repositories in the Explorer pane.

