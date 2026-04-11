---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.478Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML Document AI processing"
feature_slug: "bigquery-ml-document-ai-processing"
latest_feature_date: "2024-09-24"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "BQML PROCESS_DOCUMENT"
  - "BigQuery ML PROCESS_DOCUMENT"
  - "object table document processing"
  - "PROCESS_DOCUMENT SQL"
  - "ML.PROCESS_DOCUMENT"
  - "document processing function"
  - "Document AI remote model"
  - "Document AI integration"
---

# BigQuery ML Document AI processing

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML supports document processing from object tables via Document AI remote models using the ML.PROCESS_DOCUMENT function.

## Extended Definition

BigQuery ML includes a document-processing feature via the SQL function `ML.PROCESS_DOCUMENT`. According to Google Cloud documentation, this function is used to process documents, and it specifically works on documents stored in object tables. Evidence is limited to the documented function usage and scope, so any additional behaviors should be confirmed from the full reference page before making broader claims.

## Evidence Summary

The page identifies `ML.PROCESS_DOCUMENT` as the BigQuery ML function for document processing and states it operates on documents in object tables.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 42
- Re-rank relevance: STRONG
- Re-rank rationale: Document processing is directly identified as a BigQuery ML-supported AI task, matching the feature intent.

Evidence snippets:
- To learn more, try processing documents with the ML.PROCESS DOCUMENT function .
- You can then use the ML.PROCESS DOCUMENT function to process documents.
- ML.PROCESS DOCUMENT works on documents in object tables .

