---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-10T13:25:38.692Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "ALTER RESERVATION SET OPTIONS statement"
feature_slug: "alter-reservation-set-options-statement"
latest_feature_date: "2023-01-10"
deprecation_date: ""
coverage_status: "HIGH"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language"
  - "https://docs.cloud.google.com/bigquery/docs/adding-labels"
keywords:
  - "ALTER RESERVATION SET OPTIONS"
  - "BigQuery reservation management"
  - "reservation statement syntax"
  - "ALTER RESERVATION statement"
  - "RESERVATION options clause"
  - "SET OPTIONS reservation"
  - "RESERVATION SET OPTIONS"
  - "ALTER RESERVATION"
---

# ALTER RESERVATION SET OPTIONS statement

Product: BigQuery
Coverage: HIGH

## Step 02 Summary

The ALTER RESERVATION SET OPTIONS statement is now generally available in BigQuery.

## Extended Definition

`ALTER RESERVATION SET OPTIONS` is a BigQuery SQL (DDL) statement used to alter an existing reservation’s configuration by setting reservation options. The documented syntax is `ALTER RESERVATION project_id.location_id.reservation_id SET OPTIONS (...)`, where the option list specifies reservation settings, and examples show it being used to update values such as slot capacity/autoscale and reservation labels.

## Evidence Summary

The DDL reference page defines the statement’s purpose and syntax for existing reservations, and the labels page shows concrete usage of `ALTER RESERVATION SET OPTIONS` in practice.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)

## Supporting Pages

### "Data definition language (DDL) statements in GoogleSQL \_|\_ BigQuery \_\

- URL: [https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language](https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language)
- Source ID: `site-docs-reference`
- Final score: 44
- Re-rank relevance: N/A

Evidence snippets:
- Example The following example changes a capacity commitment to a three-year plan that is located in the region-us region and managed by a project admin project : ALTER CAPACITY admin project.region-us.my-commitment SET OPTIONS ( plan = 'THREE YEAR' ); ALTER RESERVATION SET OPTIONS statement Alters an existing reservation.
- These slots are located in the region-us region and managed by a project admin project : ALTER RESERVATION admin project.region-us.my-reservation SET OPTIONS ( slot capacity = 300 , autoscale max slots = 400 ); ALTER VECTOR INDEX REBUILD statement Preview This feature is subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the Service Specific Terms .
- Syntax ALTER RESERVATION project id.location id.reservation id SET OPTIONS ( alter reservation option list ); Arguments project id : The project ID of the administration project that maintains ownership of this reservation. location id : The location of the reservation. reservation id : The ID of the reservation.
- It must start and end with a lowercase letter or a number and contain only lowercase letters, numbers and dashes. alter reservation option list : The options you can set to alter the reservation. alter reservation option list The option list specifies options for the dataset.

### Add labels to resources \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/adding-labels](https://docs.cloud.google.com/bigquery/docs/adding-labels)
- Source ID: `site-docs-root-2`
- Final score: 24
- Re-rank relevance: N/A

Evidence snippets:
- SQL To add a label to a reservation, use the ALTER RESERVATION SET OPTIONS DDL statement .
- Go to BigQuery In the query editor, enter the following statement: ALTER RESERVATION myreservation SET OPTIONS ( labels = [ ( 'sensitivity' , 'high' ) ] ); Click play circle Run .

