---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.926Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "IAM Conditions"
feature_slug: "iam-conditions"
latest_feature_date: "2021-08-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/authentication"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "iam"
  - "conditions"
  - "sql"
  - "supports"
  - "for"
  - "conditional"
  - "attribute"
  - "based"
---

# IAM Conditions

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports IAM Conditions for conditional, attribute-based access control on instances.

## Extended Definition

Cloud SQL supports IAM Conditions for conditional, attribute-based access control on instances.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 212
- Re-rank relevance: N/A

Evidence snippets:
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool November 13, 2025 Feature Cloud SQL for MySQL now lets you have more control over the number of results that are returned when you perform an ANN vector search with filters.
- August 21, 2021 Feature Cloud SQL now supports IAM Conditions .
- October 11, 2022 Feature Cloud SQL supports the preview version of the following recommenders that help you optimize your instance's performance: High number of open tables recommender : Optimize the performance of your instance by increasing the size of table open cache for the Cloud SQL instances that have the number of open tables equal to the table open cache and keep opening too many tables concurrently High number of tables recommender : Optimize the performance of your instance by reducing the number of tables for the Cloud SQL instances whose table count is too high and close to the SLA limit.

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/authentication](https://docs.cloud.google.com/sql/docs/mysql/authentication)
- Source ID: `site-docs-root`
- Final score: 210
- Re-rank relevance: N/A

Evidence snippets:
- About IAM Conditions IAM Conditions lets you grant roles based on a variety of attributes.
- IAM references for Cloud SQL Required permissions for common tasks in the Google Cloud console Required permissions for gcloud sql commands Required permissions for Cloud SQL Admin API methods Predefined Cloud SQL IAM roles Permissions and their roles Custom roles IAM authentication concepts When using IAM authentication, permission to access a resource (a Cloud SQL instance) isn't granted directly to the end user.
- IAM group authentication best practices When you revoke the login permission ( cloudsql.instances.login ) for an IAM group in Cloud Identity, make sure that you also delete the group from the Cloud SQL instance.
- Cloud SQL IAM database authentication for different instance scenarios Read replicas IAM database authentication is not enabled in a read replica automatically, even when it is enabled on the primary instance.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 196
- Re-rank relevance: N/A

Evidence snippets:
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- You can use IAM Conditions to define and enforce conditional, attribute-based access control for Google Cloud resources, including Cloud SQL instances.
- This feature automates read pool scale in and scale out operations based on one or both of the following conditions: Allowed CPU usage of the read pool Allowed number of client connections to the read pool Cloud SQL for PostgreSQL Feature Cloud SQL for PostgreSQL now supports read pool autoscaling (GA) , which helps you more easily manage your application's workload needs.

