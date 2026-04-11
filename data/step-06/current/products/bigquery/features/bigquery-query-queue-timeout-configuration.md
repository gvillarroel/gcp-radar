---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.667Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery query queue timeout configuration"
feature_slug: "bigquery-query-queue-timeout-configuration"
latest_feature_date: "2023-05-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "interactive queue timeout"
  - "batch queue timeout"
  - "query queue timeout"
  - "default query queue configuration"
  - "queue timeout"
  - "query queue settings"
  - "interactive timeout"
  - "batch timeout"
---

# BigQuery query queue timeout configuration

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery users can set interactive and batch queue timeouts in default query queue configuration.

## Extended Definition

BigQuery lets users configure default queue timeout behavior via SQL DDL `ALTER ... SET OPTIONS` statements at the organization, project, or BI Engine capacity scope, using options such as `region-us.default interactive query queue timeout ms` and `region-us.default batch query queue timeout ms`. These options represent the default time a query is allowed to remain queued, and the configuration can be cleared by setting the option values to `NULL`.

## Evidence Summary

The page provides option names and examples for setting interactive and batch query queue timeout defaults, plus `NULL`-based reset behavior in BigQuery default options DDL statements.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 56
- Re-rank relevance: N/A

Evidence snippets:
- Examples The following example sets the default time zone to America/Chicago and the default query job timeout to one hour for an organization in the US region: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = "America/Chicago" , region-us.default job query timeout ms = 3600000 ); The following example sets the default time zone, the default query job timeout, the default interactive and batch queue timeouts, and the default Cloud KMS key, clearing the organization level default settings: ALTER ORGANIZATION SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL ); ALTER PROJECT SET OPTIONS statement Sets the options on a project.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Sets the default query job timeout time to 30 minutes for all jobs in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.
- Sets the default query job timeout time to 30 minutes for jobs run in the us region. default interactive query queue timeout ms INT64 The default amount of time that an interactive query is queued.

