---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.691Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER CAPACITY SET OPTIONS statement"
feature_slug: "alter-capacity-set-options-statement"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "BigQuery reservations capacity statement"
  - "ALTER CAPACITY SET OPTIONS"
  - "capacity statement syntax"
  - "ALTER CAPACITY statement"
  - "CAPACITY options clause"
  - "SET OPTIONS capacity"
  - "CAPACITY SET OPTIONS"
  - "ALTER CAPACITY"
---

# ALTER CAPACITY SET OPTIONS statement

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

The ALTER CAPACITY SET OPTIONS statement is now generally available in BigQuery.

## Extended Definition

`ALTER CAPACITY ... SET OPTIONS` in BigQuery is a GoogleSQL DDL statement used to alter an existing capacity commitment by setting one or more commitment options. The documented syntax requires targeting a specific commitment via `project id`, `location id`, and `commitment id`, and the example shows changing the commitment `plan` value. The provided excerpt does not explicitly state GA/deprecation status.

## Evidence Summary

The referenced BigQuery DDL documentation defines the statement syntax and arguments for `ALTER CAPACITY SET OPTIONS` and includes an example that updates a capacity commitment setting.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Required permissions This statement requires the following IAM permissions : Permission Resource bigquery.bireservations.update BI Engine reservation Examples Allocating BI Engine capacity without preferred tables ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 ) Deallocating BI capacity ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 0 ) Removing a set of preferred tables from reservation ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( preferred tables = NULL ) Allocating BI Capacity with preferred tables list ALTER BI CAPACITY my-project.region-us.default SET OPTIONS ( size gb = 250 , preferred tables = [ "data project1.dataset1.table1" , "data project2.dataset2.table2" ] ) Overwriting list of preferred tables without changing the size ALTER BI CAPACITY region-us.default SET OPTIONS ( preferred tables = [ "dataset1.table1" , "data project2.dataset2.table2" ] ) ALTER CAPACITY SET OPTIONS statement Alters an existing capacity commitment.
- ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = "America/New York" , region-us.default job query timeout ms = 1800000 ); The following example sets the default time zone, the default query job timeout, the default Cloud KMS key to NULL , and the default interactive and batch queue timeouts and default sql dialect, clearing the project level default settings: ALTER PROJECT project id SET OPTIONS ( region-us.default time zone = NULL , region-us.default kms key name = NULL , region-us.default query job timeout ms = NULL , region-us.default interactive query queue timeout ms = NULL , region-us.default batch query queue timeout ms = NULL , region-us.default sql dialect option = NULL ); ALTER BI CAPACITY SET OPTIONS statement Sets the options on BigQuery BI Engine capacity.
- Example The following example changes a capacity commitment to a three-year plan that is located in the region-us region and managed by a project admin project : ALTER CAPACITY admin project.region-us.my-commitment SET OPTIONS ( plan = 'THREE YEAR' ); ALTER RESERVATION SET OPTIONS statement Alters an existing reservation.
- Syntax ALTER CAPACITY project id.location id.commitment id SET OPTIONS ( alter capacity commitment option list ); Arguments project id : The project ID of the administration project that maintains ownership of this commitment. location id : The location of the commitment. commitment id : The ID of the commitment.

