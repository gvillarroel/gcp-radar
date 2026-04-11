---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.693Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE RESERVATION OPTIONS clause support"
feature_slug: "create-reservation-options-clause-support"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "create reservation with options"
  - "CREATE RESERVATION statement"
  - "RESERVATION OPTIONS clause"
  - "CREATE RESERVATION OPTIONS"
  - "BigQuery CREATE RESERVATION"
  - "RESERVATION OPTIONS"
  - "CREATE RESERVATION"
---

# CREATE RESERVATION OPTIONS clause support

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the OPTIONS clause on CREATE RESERVATION statements.

## Extended Definition

BigQuery supports an OPTIONS clause on the `CREATE RESERVATION` statement, using the form `CREATE RESERVATION <project_id>.<location>.<reservation_id> OPTIONS ( <reservation_option_list> );` to define reservation options at creation time. The documented option list is used to describe reservation settings, with examples showing slot capacity can be set (for example, `slot capacity = 100`).

## Evidence Summary

The BigQuery DDL reference page explicitly defines `CREATE RESERVATION` syntax with an `OPTIONS` clause and provides examples of reservation option values such as slot capacity.

## Source Links

- [https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example creates a capacity commitment of 100 annual slots that are located in the region-us region and managed by a project admin project : CREATE CAPACITY admin project.region-us.my-commitment OPTIONS ( slot count = 100 , plan = 'ANNUAL' ); CREATE RESERVATION statement Creates a reservation.
- Syntax CREATE RESERVATION project id.location id.reservation id OPTIONS ( reservation option list ); Arguments project id : The project ID of the administration project where the capacity commitment was created. location : The location of the reservation. reservation id : The reservation ID. reservation option list : The options you can set to describe the reservation. reservation option list The option list specifies options for the dataset.
- Example The following example creates a reservation of 100 slots in the project admin project : CREATE RESERVATION admin project.region-us.prod OPTIONS ( slot capacity = 100 ); CREATE ASSIGNMENT statement Assigns a project, folder, or organization to a reservation.

