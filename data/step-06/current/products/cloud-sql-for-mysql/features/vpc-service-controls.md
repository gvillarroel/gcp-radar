---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:24:12.951Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "VPC Service Controls"
feature_slug: "vpc-service-controls"
latest_feature_date: "2019-12-17"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/mysql/admin-api"
  - "https://docs.cloud.google.com/sql/docs/mysql/release-notes"
keywords:
  - "vpc"
  - "controls"
  - "sql"
  - "supports"
  - "to"
  - "protect"
  - "the"
  - "admin"
---

# VPC Service Controls

Product: Cloud SQL for MySQL
Coverage: LOW

## Step 02 Summary

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Extended Definition

Cloud SQL supports VPC Service Controls to protect the Cloud SQL Admin API and host project with a service perimeter.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/mysql/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 276
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- To add Cloud SQL and Cloud Storage APIs as restricted services: Console In the Google Cloud console navigation menu, click Security , and then click VPC Service Controls .
- Enable the API Add the Identity and Access Management (IAM) roles to the user or service account you are using to set up and administer VPC Service Controls.
- Create a service perimeter During this procedure, you select the Cloud SQL projects that you want the VPC service perimeter to protect.
- Click Save . gcloud gcloud access-context-manager perimeters update PERIMETER ID \ --policy = POLICY ID \ --add-restricted-services = sqladmin.googleapis.com,storage.googleapis.com Where: PERIMETER ID is the ID of the perimeter or the fully qualified identifier for the perimeter.

### "Use the Cloud SQL Admin API \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/admin-api](https://docs.cloud.google.com/sql/docs/mysql/admin-api)
- Source ID: `site-api-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Use VPC Service Controls with the Cloud SQL Admin API VPC Service Controls let you create a service perimeter around the Cloud SQL Admin API to help mitigate data exfiltration.
- Before adding VPC Service Controls, it is recommended that you enable private IP and disable public IP on the Cloud SQL instances that you plan to add to the service perimeter.
- Select Continue . gcloud Enter the following to display the project IDs for your Google Cloud projects: gcloud projects list Set your default project: gcloud config set project YOUR PROJECT ID Enable the Cloud SQL Admin API: gcloud services enable sqladmin.googleapis.com Authorize requests Your application needs to identify itself every time it sends a request to the Cloud SQL Admin API, by including an API key with each request.
- Enable the API To use the Cloud SQL Admin API, you need to enable it: Console Roles required to enable APIs To enable APIs, you need the Service Usage Admin IAM role ( roles/serviceusage.serviceUsageAdmin ), which contains the serviceusage.services.enable permission.

### Cloud SQL for MySQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/release-notes](https://docs.cloud.google.com/sql/docs/mysql/release-notes)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: N/A

Evidence snippets:
- December 17, 2019 Feature Cloud SQL now supports VPC Service Controls, which let you add a service perimeter around the Cloud SQL Admin API and host project for Cloud SQL instances to reduce the risk of data exfiltration.
- March 16, 2020 Feature Cloud SQL now supports read replicas in a different region than that of the primary instance, providing additional protection against regional outages and improving read performance by making replicas available closer to your application.
- October 04, 2021 Feature Cloud SQL now supports the ability for you to specify IP CIDR ranges from your VPC network for your Cloud SQL instances allowing you to manage your IP address space better.
- October 11, 2022 Feature Cloud SQL supports the preview version of the following recommenders that help you optimize your instance's performance: High number of open tables recommender : Optimize the performance of your instance by increasing the size of table open cache for the Cloud SQL instances that have the number of open tables equal to the table open cache and keep opening too many tables concurrently High number of tables recommender : Optimize the performance of your instance by reducing the number of tables for the Cloud SQL instances whose table count is too high and close to the SLA limit.

