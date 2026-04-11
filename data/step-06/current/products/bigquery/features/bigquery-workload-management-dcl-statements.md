---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.776Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery workload management DCL statements"
feature_slug: "bigquery-workload-management-dcl-statements"
latest_feature_date: "2021-07-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "workload management DCL"
  - "DROP ASSIGNMENT"
  - "CREATE ASSIGNMENT"
  - "reservation DCL"
  - "capacity DCL"
  - "DROP RESERVATION"
  - "CREATE RESERVATION"
  - "DROP CAPACITY"
---

# BigQuery workload management DCL statements

Product: BigQuery
Coverage: LOW

## Step 02 Summary

BigQuery added workload management DCL statements including CREATE/DROP CAPACITY, CREATE/DROP RESERVATION, and CREATE/DROP ASSIGNMENT.

## Extended Definition

BigQuery added workload management DCL statements including CREATE/DROP CAPACITY, CREATE/DROP RESERVATION, and CREATE/DROP ASSIGNMENT.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 70
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example creates a reservation of 100 slots in the project admin project : CREATE RESERVATION admin project.region-us.prod OPTIONS ( slot capacity = 100 ); CREATE ASSIGNMENT statement Assigns a project, folder, or organization to a reservation.
- Example The following example deletes the reservation prod : DROP RESERVATION admin project.region-us.prod DROP ASSIGNMENT statement Deletes a reservation assignment.
- Example The following example deletes the capacity commitment: DROP CAPACITY admin project.region-us.1234 DROP RESERVATION statement Deletes a reservation.
- Example The following example assigns the project my project to the prod reservation for query jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'projects/my project' , job type = 'QUERY' ); The following example assigns an organization to the prod reservation for pipeline jobs, such as load and extract jobs: CREATE ASSIGNMENT admin project.region-us.prod.my assignment OPTIONS ( assignee = 'organizations/1234' , job type = 'PIPELINE' ); CREATE SEARCH INDEX statement Creates a new search index on one or more columns of a table.

