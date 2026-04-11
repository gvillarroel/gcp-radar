---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.640Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query queues"
feature_slug: "bigquery-query-queues"
latest_feature_date: "2023-07-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "queue timeout"
  - "BQ query queue"
  - "query queueing"
  - "query queues"
  - "query concurrency target"
  - "automatic query concurrency"
  - "flat-rate reservations"
  - "concurrency limit"
---

# BigQuery query queues

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery introduced generally available query queues that automatically manage query concurrency and support optional timeout and concurrency target configuration; BigQuery query queues manage concurrency automatically, with optional custom concurrency targets for flat-rate reservations and queuing beyond that limit.

## Extended Definition

BigQuery supports managing query queue behavior through DDL `ALTER ... SET OPTIONS` statements at organization and project scope, allowing configuration of region-specific defaults such as `interactive query queue timeout ms` and `batch query queue timeout ms` (along with related job/query timeout options). These values define how long interactive or batch queries may remain queued, and defaults can be removed by setting the option to `NULL`. The provided excerpt does not supply evidence for automatic query concurrency management or concurrency targets.

## Evidence Summary

The page provides syntax and examples for BigQuery DDL `SET OPTIONS` statements that expose default query queue timeout settings (interactive and batch) and show how to set or clear them at org/project level.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 46
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Sets the default query job timeout time to 30 minutes for all jobs in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.
- Sets the default query job timeout time to 30 minutes for jobs run in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.

