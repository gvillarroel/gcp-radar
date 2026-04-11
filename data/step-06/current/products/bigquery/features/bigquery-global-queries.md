---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.341Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery global queries"
feature_slug: "bigquery-global-queries"
latest_feature_date: "2026-02-17"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "query data in more than one region"
  - "single query multiple regions"
  - "cross-region data query"
  - "multi-region querying"
  - "global query mode"
  - "multi-region query"
  - "global queries"
---

# BigQuery global queries

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

Global queries now allow a single query to reference data stored in more than one region.

## Extended Definition

BigQuery global queries are controlled by a region-scoped setting that can be enabled (for example, `region-us.enable global queries data access = true`) to allow data access across regions in a query workflow. In this configuration, the feature permits copying/querying data from the configured region in a global query scenario; when set to `FALSE` (the default), global queries cannot copy data from that region regardless of the project where jobs run.

## Evidence Summary

The referenced BigQuery DDL documentation excerpt defines a `global queries data access` region-level option, gives its default as `FALSE`, and states that disabling it prevents global query data copy operations from that region.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 30
- Re-rank relevance: N/A

Evidence snippets:
- Example: region-us.enable global queries data access = true . default location STRING The location that's used to run jobs when it can't be inferred from the request.
- Example: region-us.enable global queries data access = true . default location STRING The location that's used to run jobs when it can't be inferred from the request.
- The default value is FALSE , which means that global queries can't copy data from this region regardless of the project in which they run.
- The default value is FALSE , which means that global queries can't copy data from this region regardless of the project in which they run.

