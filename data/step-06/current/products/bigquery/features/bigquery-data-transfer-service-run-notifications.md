---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.859Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Data Transfer Service run notifications"
feature_slug: "bigquery-data-transfer-service-run-notifications"
latest_feature_date: "2018-02-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers"
  - "https://docs.cloud.google.com/bigquery/docs/google-ads-transfer"
  - "https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer"
keywords:
  - "bigquery"
  - "transfer"
  - "run"
  - "notifications"
  - "can"
  - "send"
  - "runs"
---

# BigQuery Data Transfer Service run notifications

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Data Transfer Service can send notifications for transfer runs.

## Extended Definition

BigQuery Data Transfer Service can send notifications for transfer runs.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)

## Supporting Pages

### "Schedule a Comparison Shopping Service Center Transfer \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers](https://docs.cloud.google.com/bigquery/docs/css-center-transfer-schedule-transfers)
- Source ID: `site-api-reference`
- Final score: 185
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For more information, see BigQuery Data Transfer Service Run Notifications .
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to create a BigQuery Data Transfer Service data transfer: BigQuery Data Transfer Service permissions: bigquery.transfers.update bigquery.transfers.get BigQuery permissions: bigquery.datasets.get bigquery.datasets.getIamPolicy bigquery.datasets.update bigquery.datasets.setIamPolicy bigquery.jobs.create You might also be able to get these permissions with custom roles or other predefined roles .
- Required BigQuery roles To get the permissions that you need to create a BigQuery Data Transfer Service data transfer, ask your administrator to grant you the BigQuery Admin ( roles/bigquery.admin ) IAM role on your project.
- Note: To get support or provide feedback for Comparison Shopping Service (CSS) Center transfers with BigQuery Data Transfer Service, contact gmc-transfer-preview@google.com .

### Load Facebook Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer](https://docs.cloud.google.com/bigquery/docs/facebook-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- In this example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new BigQuery destination table partition with a copy of your source table data from the current day, then automatically triggers backfill runs to update the BigQuery destination table partitions with your source table data from the past two days.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- When this data transfer runs, the BigQuery Data Transfer Service automatically populates the following tables.
- For more information, see BigQuery Data Transfer Service run notifications .

### Load Google Ads data into BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/google-ads-transfer](https://docs.cloud.google.com/bigquery/docs/google-ads-transfer)
- Source ID: `site-api-reference`
- Final score: 179
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Transfer configuration for Customer ID 1234567890 A transfer configuration for the root manager account (Customer ID 1234567890) would generate data transfer runs that include the following Customer IDs: 1111 (via sub-manager account 1234) 2222 (via sub-manager account 1234) 3333 (via sub-manager account 1234) 4444 (via sub-manager account 1234) 5555 (via sub-manager account 567 and sub-manager account 1234) 6666 (via sub-manager account 567 and sub-manager account 1234) 7777 (via sub-manager account 567 and sub-manager account 1234) 8888 (via sub-manager account 89) 9999 (via sub-manager account 89) 0000 (individual Customer ID) Transfer configuration for Customer ID 1234 A transfer configuration for sub-manager account 123 (Customer ID 1234) would generate data transfer runs that include the following Customer IDs: 1111 2222 3333 4444 5555 (via sub-manager account 567) 6666 (via sub-manager account 567) 7777 (via sub-manager account 567) Transfer configuration for Customer ID 567 A transfer configuration for sub-manager account 567 (Customer ID 567) would generate data transfer runs that include the following Customer IDs: 5555 6666 7777 Transfer configuration for Customer ID 89 A transfer configuration for sub-manager account 89 (Customer ID 89) would generate data transfer runs that include the following Customer IDs: 8888 9999 Transfer configuration for Customer ID 0000 A transfer configuration for Customer ID 0000 would generate data transfer runs that include only the individual Customer ID: 0000 Migrate Google Ads data to MCCs To migrate your existing Google Ads data in BigQuery Data Transfer Service to the MCC structure, you can set up a backfill to add your existing data to the tables created by the transfer configuration linked to the manager account.
- In this example, when a daily transfer occurs, the BigQuery Data Transfer Service creates a new BigQuery destination table partition with a copy of your source table data from the current day, then automatically triggers backfill runs to update the BigQuery destination table partitions with your source table data from the past two days.
- The automatically triggered backfill runs will either overwrite or incrementally update your BigQuery destination table, depending on whether or not incremental updates are supported in the BigQuery Data Transfer Service connector.
- For more information, see BigQuery Data Transfer Service run notifications .

