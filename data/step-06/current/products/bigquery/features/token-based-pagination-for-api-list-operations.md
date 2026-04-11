---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.960Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Token-Based Pagination for API List Operations"
feature_slug: "token-based-pagination-for-api-list-operations"
latest_feature_date: "2012-05-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.TableDataListOption"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetListOption"
  - "https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.JobListOption"
keywords:
  - "token-based pagination"
  - "pagination token"
  - "token pagination"
  - "paginated list requests"
  - "next page token"
  - "list API pagination"
  - "nextPageToken"
  - "pageToken"
---

# Token-Based Pagination for API List Operations

Product: BigQuery
Coverage: LOW

## Step 02 Summary

Added token-based pagination for list APIs to iterate through a consistent table snapshot.

## Extended Definition

Added token-based pagination for list APIs to iterate through a consistent table snapshot.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.TableDataListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.TableDataListOption)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetListOption)
- [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.JobListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.JobListOption)

## Supporting Pages

### "Class BigQuery.TableDataListOption (2.62.0) \_|\_ Java client libraries\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.TableDataListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.TableDataListOption)
- Source ID: `site-java-reference`
- Final score: 38
- Re-rank relevance: MODERATE
- Re-rank rationale: It provides concrete API options (`pageSize`, `pageToken`, `startIndex`) for paginated table-data listing, which is directly relevant to paginated list behavior.

Evidence snippets:
- Parameter Name Description pageSize long Returns Type Description BigQuery.TableDataListOption pageToken(String pageToken) public static BigQuery .
- Parameter Name Description pageToken String Returns Type Description BigQuery.TableDataListOption startIndex(long index) public static BigQuery .
- TableDataListOption pageToken ( String pageToken ) Returns an option to specify the page token from which to start listing table data.

### "Class BigQuery.DatasetListOption (2.62.0) \_|\_ Java client libraries \_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.DatasetListOption)
- Source ID: `site-java-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Parameter Name Description pageToken String Returns Type Description BigQuery.DatasetListOption Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Parameter Name Description pageSize long Returns Type Description BigQuery.DatasetListOption pageToken(String pageToken) public static BigQuery .
- DatasetListOption pageToken ( String pageToken ) Returns an option to specify the page token from which to start listing datasets.

### "Class BigQuery.JobListOption (2.62.0) \_|\_ Java client libraries \_|\_\

- URL: [https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.JobListOption](https://docs.cloud.google.com/java/docs/reference/google-cloud-bigquery/latest/com.google.cloud.bigquery.BigQuery.JobListOption)
- Source ID: `site-java-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- Parameter Name Description pageToken String Returns Type Description BigQuery.JobListOption parentJobId(String parentJobId) public static BigQuery .
- Parameter Name Description pageSize long Returns Type Description BigQuery.JobListOption pageToken(String pageToken) public static BigQuery .
- JobListOption pageToken ( String pageToken ) Returns an option to specify the page token from which to start listing jobs.

