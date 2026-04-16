---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T12:48:36.402Z"
product_name: "BigQuery"
product_slug: "bigquery"
feature_name: "Airflow DAG management in BigQuery"
feature_slug: "airflow-dag-management-in-bigquery"
latest_feature_date: "2024-10-21"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners"
  - "https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles"
  - "https://docs.cloud.google.com/bigquery/docs/authorized-views"
keywords:
  - "airflow"
  - "dag"
  - "management"
  - "bigquery"
  - "lets"
  - "users"
  - "view"
  - "trigger"
---

# Airflow DAG management in BigQuery

Product: BigQuery
Coverage: MEDIUM

## Step 02 Summary

BigQuery lets users view, trigger, and pause Airflow DAGs directly in the product.

## Extended Definition

BigQuery lets users view, trigger, and pause Airflow DAGs directly in the product.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)

## Supporting Pages

### Google Cloud Ready - BigQuery Partners \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners](https://docs.cloud.google.com/bigquery/docs/bigquery-ready-partners)
- Source ID: `site-docs-reference-5`
- Final score: 145
- Re-rank relevance: N/A

Evidence snippets:
- Partner references Connect Google BigQuery to Privacera Privacera Enhances Data Access Governance Add Google BigQuery (GBQ) data source on Privacera Platform Partner Advantage page Direct link Reltio Solution Reltio Connected Data Platform Category Data Governance, Security, & MDM Description The Reltio Connected Data Platform is a cloud-based data management platform that lets organizations create a unified, trusted real-time source for their core data.
- Partner references Import BigQuery Data into Amplitude Export data to BigQuery AskYourDatabase Solution AskYourDatabase Category BI, ML, & Advanced Analytics Description AskYourDatabase is an AI-powered tool that lets users ask questions in plain English and get instant answers from their database.
- It lets users create, explore, and share interactive dashboards directly from cloud data warehouses like Google BigQuery, leveraging live data without extracts and offering embedded analytics capabilities.
- It lets users ingest, join, and analyze streaming data with the same ease as a traditional database, offering seamless integration to sink processed data into BigQuery for long-term storage and analysis.

### Configure BigQuery sharing roles \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles](https://docs.cloud.google.com/bigquery/docs/analytics-hub-grant-roles)
- Source ID: `site-docs-reference-2`
- Final score: 103
- Re-rank relevance: N/A

Evidence snippets:
- Analytics Hub Subscriber and Viewer roles To view and subscribe to listings and data exchanges , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Subscriber role ( roles/analyticshub.subscriber ), which lets users view and subscribe to listings.
- Analytics Hub Viewer role ( roles/analyticshub.viewer ), which lets users view listings and data exchange permissions.
- Analytics Hub Publisher and Listing Admin roles To manage listings , Sharing provides the following predefined roles that you can grant for a project, a data exchange, or a listing: Analytics Hub Publisher role ( roles/analyticshub.publisher ), which lets users do the following: Create, update, and delete listings.
- In the Select a role menu, select Analytics Hub , and then select one of the following Identity and Access Management (IAM) roles: Analytics Hub Admin Analytics Hub Listing Admin Analytics Hub Publisher Analytics Hub Subscriber Analytics Hub Subscription Owner Analytics Hub Viewer Click Save .

### Authorized views \_|\_ BigQuery \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/bigquery/docs/authorized-views](https://docs.cloud.google.com/bigquery/docs/authorized-views)
- Source ID: `site-docs-reference-5`
- Final score: 99
- Re-rank relevance: N/A

Evidence snippets:
- These users should already have the roles/bigqueryUser role at the project level. data "google iam policy" "principals policy" { binding { role = "roles/bigquery.dataViewer" members = [ "group:example-group@example.com", ] } } Set the IAM policy on the authorized view. resource "google bigquery table iam policy" "authorized view policy" { project = google bigquery table.movie view.project dataset id = google bigquery table.movie view.dataset id table id = google bigquery table.movie view.table id policy data = data.google iam policy.principals policy.policy data } To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- User permissions on the project and dataset for the view To share an authorized view with users or groups, you must grant the users or groups the following IAM permissions: The roles/bigquery.jobUser IAM role to the project that contains the authorized view.
- The principal does not need Identity and Access Management permissions on the source data projects, but the ingress rule must permit access to BigQuery in the data source project in addition to the project containing the view.
- Use BigQuery sharing with authorized views BigQuery sharing (formerly Analytics Hub) is a data exchange platform with the following capabilities: Lets you share data and insights at scale across organizational boundaries.

