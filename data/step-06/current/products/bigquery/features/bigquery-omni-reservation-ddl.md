---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.727Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "BigQuery Omni reservation DDL"
feature_slug: "bigquery-omni-reservation-ddl"
latest_feature_date: "2022-08-15"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
keywords:
  - "BigQuery Omni reservation DDL"
  - "Reservation DDL statements"
  - "DDL for reservations"
  - "DROP RESERVATION"
  - "ALTER RESERVATION"
  - "CREATE RESERVATION"
  - "reservation DDL"
---

# BigQuery Omni reservation DDL

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery Omni now supports reservation Data Definition Language statements.

## Extended Definition

BigQuery’s GoogleSQL Data Definition Language supports reservation-specific statements: CREATE RESERVATION, ALTER RESERVATION, and DROP RESERVATION. These statements let you create a reservation, modify its settings via SET OPTIONS (such as slot capacity and autoscaling), and remove a reservation, with DROP RESERVATION supporting IF EXISTS to safely no-op when absent. The DDL syntax identifies the target reservation by administration project, location, and reservation ID.

## Evidence Summary

The linked DDL reference page provides the exact syntax and arguments for CREATE/ALTER/DROP RESERVATION statements, but does not explicitly confirm the BigQuery Omni scope in the provided excerpts.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 54
- Re-rank relevance: N/A

Evidence snippets:
- Syntax CREATE RESERVATION project id.location id.reservation id OPTIONS ( reservation option list ); Arguments project id : The project ID of the administration project where the capacity commitment was created. location : The location of the reservation. reservation id : The reservation ID. reservation option list : The options you can set to describe the reservation. reservation option list The option list specifies options for the dataset.
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax DROP RESERVATION [ IF EXISTS ] project id . location . reservation id Arguments IF EXISTS : If no reservation exists with that ID, the statement has no effect. project id : The project ID of the administration project where the reservation was created. location : The location of the reservation. reservation id : The reservation ID.
- Example The following example changes a capacity commitment to a three-year plan that is located in the region-us region and managed by a project admin project : ALTER CAPACITY admin project.region-us.my-commitment SET OPTIONS ( plan = 'THREE YEAR' ); ALTER RESERVATION SET OPTIONS statement Alters an existing reservation.

