---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.692Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "CREATE ASSIGNMENT OPTIONS clause support"
feature_slug: "create-assignment-options-clause-support"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "create reservation assignment"
  - "CREATE ASSIGNMENT statement"
  - "ASSIGNMENT OPTIONS clause"
  - "CREATE ASSIGNMENT OPTIONS"
  - "BigQuery CREATE ASSIGNMENT"
  - "ASSIGNMENT OPTIONS"
  - "CREATE ASSIGNMENT"
---

# CREATE ASSIGNMENT OPTIONS clause support

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

BigQuery now supports the OPTIONS clause on CREATE ASSIGNMENT statements.

## Extended Definition

BigQuery’s `CREATE ASSIGNMENT` DDL statement includes an `OPTIONS` clause, written as `CREATE ASSIGNMENT ... OPTIONS (assignment option list)`, for creating assignment resources in GoogleSQL. This clause is used to define assignment properties such as `assignee` and `job type` when assigning a project/folder/organization to a reservation.

## Evidence Summary

The BigQuery SQL DDL reference explicitly shows `CREATE ASSIGNMENT` examples and syntax using an `OPTIONS` clause with assignment options, directly confirming this feature.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 36
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.
- Example The following example creates a reservation of 100 slots in the project admin project : CREATE RESERVATION admin project.region-us.prod OPTIONS ( slot capacity = 100 ); CREATE ASSIGNMENT statement Assigns a project, folder, or organization to a reservation.
- Syntax CREATE ASSIGNMENT project id.location id.reservation id.assignment id OPTIONS ( assignment option list ) Arguments project id : The project ID of the administration project where the reservation was created. location : The location of the reservation. reservation id : The reservation ID. assignment id : The ID of the assignment.

