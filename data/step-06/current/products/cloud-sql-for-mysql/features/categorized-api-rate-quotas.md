---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.873Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Categorized API rate quotas"
feature_slug: "categorized-api-rate-quotas"
latest_feature_date: "2023-08-03"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
  - "https://docs.cloud.google.com/sql/docs/mysql/quotas"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
keywords:
  - "categorized"
  - "api"
  - "rate"
  - "quotas"
  - "sql"
  - "supports"
  - "multiple"
  - "categories"
---

# Categorized API rate quotas

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Extended Definition

Cloud SQL supports multiple categories of API rate quotas enforced per minute, project, region, and user.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)

## Supporting Pages

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- August 03, 2023 Feature Cloud SQL now supports multiple categories of API rate quotas.
- December 17, 2019 Feature Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration.
- February 28, 2023 Feature Cloud SQL now supports the ability to get details for a Cloud SQL user for a database instance using the API or gcloud.
- October 11, 2022 Feature Cloud SQL supports the preview version of the following recommenders that help you optimize your instance's performance: High number of open tables recommender : Optimize the performance of your instance by increasing the size of table open cache for the Cloud SQL instances that have the number of open tables equal to the table open cache and keep opening too many tables concurrently High number of tables recommender : Optimize the performance of your instance by reducing the number of tables for the Cloud SQL instances whose table count is too high and close to the SLA limit.

### Quotas and limits \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/quotas](https://docs.cloud.google.com/sql/docs/mysql/quotas)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Rate quotas Cloud SQL supports rate quotas, which are also known as rate limits or API quotas.
- When you use the gcloud CLI or the Google Cloud console, you're making requests to the Cloud SQL Admin API and these requests count toward your rate quotas.
- Rate quotas reset after a time interval that's specific to Cloud SQL (for example, the number of API requests per minute).
- Rate quotas define how many requests you can make to the Cloud SQL Admin API .

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 162
- Re-rank relevance: N/A

Evidence snippets:
- August 03, 2023 Cloud SQL for MySQL Feature Cloud SQL now supports multiple categories of API rate quotas.
- Cloud SQL for PostgreSQL Feature Cloud SQL now supports multiple categories of API rate quotas.
- Cloud SQL for SQL Server Feature Cloud SQL now supports multiple categories of API rate quotas.
- Cloud SQL for PostgreSQL Feature Cloud SQL Enterprise Plus edition now supports the following regions: europe-west8 (Milan) europe-west12 (Turin) us-west4 (Las Vegas) December 14, 2023 Cloud SQL for MySQL Feature You can now use Database Migration Service to migrate data to an existing Cloud SQL instance that was created using Terraform or other Infrastructure-As-Code (IaC) Tools.

