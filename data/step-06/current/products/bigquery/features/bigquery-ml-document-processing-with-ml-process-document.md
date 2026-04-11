---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.603Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery ML document processing with ML.PROCESS_DOCUMENT"
feature_slug: "bigquery-ml-document-processing-with-ml-process-document"
latest_feature_date: "2023-11-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://cloud.google.com/bigquery/docs/ai-application-overview"
keywords:
  - "ML.PROCESS_DOCUMENT function"
  - "BigQuery ML document processing"
  - "ML.PROCESS_DOCUMENT"
  - "document processing function"
  - "PROCESS_DOCUMENT"
  - "Document AI remote model"
  - "object table documents"
---

# BigQuery ML document processing with ML.PROCESS_DOCUMENT

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery ML can process documents from object tables using a Document AI remote model via the ML.PROCESS_DOCUMENT function.

## Extended Definition

BigQuery ML supports document processing through the `ML.PROCESS_DOCUMENT` function, used to run document-specific ML workloads. The feature is documented as a task-specific BigQuery ML solution and is designed to operate on documents stored in BigQuery object tables.

## Evidence Summary

The referenced BigQuery documentation page states that `ML.PROCESS DOCUMENT` is used for processing documents and that it works on documents in object tables.

## Source Links

- [https://cloud.google.com/bigquery/docs/ai-application-overview](https://cloud.google.com/bigquery/docs/ai-application-overview)

## Supporting Pages

### Task-specific solutions overview \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/ai-application-overview](https://docs.cloud.google.com/bigquery/docs/ai-application-overview)
- Source ID: `site-docs-root-2`
- Final score: 64
- Re-rank relevance: STRONG
- Re-rank rationale: Document processing is explicitly included in the supported BigQuery ML task list with the same remote-model integration pattern described for task-specific inference.

Evidence snippets:
- To learn more, try processing documents with the ML.PROCESS DOCUMENT function .
- You can then use the ML.PROCESS DOCUMENT function to process documents.
- ML.PROCESS DOCUMENT works on documents in object tables .

