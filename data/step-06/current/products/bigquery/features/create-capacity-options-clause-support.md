---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.693Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE CAPACITY OPTIONS clause support"
feature_slug: "create-capacity-options-clause-support"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "create capacity with options"
  - "CREATE CAPACITY statement"
  - "CAPACITY OPTIONS clause"
  - "CREATE CAPACITY OPTIONS"
  - "BigQuery CREATE CAPACITY"
  - "CAPACITY OPTIONS"
  - "CREATE CAPACITY"
---

# CREATE CAPACITY OPTIONS clause support

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the OPTIONS clause on CREATE CAPACITY statements.

## Extended Definition

In BigQuery GoogleSQL, the `CREATE CAPACITY` statement creates a new capacity commitment by purchasing slots. It supports an `OPTIONS` clause that accepts a capacity commitment option list, including fields like `slot_count` and `plan` (for example, `slot_count = 100, plan = 'ANNUAL'`) at creation time.

## Evidence Summary

The cited BigQuery DDL reference defines `CREATE CAPACITY`, shows its `OPTIONS ( capacity commitment option list )` syntax, and includes an example using `slot_count` and `plan` options in the clause.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- CREATE CAPACITY statement Purchases slots by creating a new capacity commitment.
- Example The following example creates a capacity commitment of 100 annual slots that are located in the region-us region and managed by a project admin project : CREATE CAPACITY admin project.region-us.my-commitment OPTIONS ( slot count = 100 , plan = 'ANNUAL' ); CREATE RESERVATION statement Creates a reservation.
- Syntax CREATE CAPACITY project id.location id.commitment id OPTIONS ( capacity commitment option list ); Arguments project id : The project ID of the administration project that will maintain ownership of this commitment. location id : The location of the commitment. commitment id : The ID of the commitment.
- Syntax ALTER BI CAPACITY project id.location id.default SET OPTIONS ( bi capacity options list ) Arguments project id : Optional project ID of the project that will benefit from BI Engine acceleration.

