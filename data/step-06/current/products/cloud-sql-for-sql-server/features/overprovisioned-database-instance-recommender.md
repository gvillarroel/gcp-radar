---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.888Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Overprovisioned database instance recommender"
feature_slug: "overprovisioned-database-instance-recommender"
latest_feature_date: "2022-04-28"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/release-notes"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance"
keywords:
  - "overprovisioned"
  - "database"
  - "instance"
  - "recommender"
  - "the"
  - "identifies"
  - "oversized"
  - "instances"
---

# Overprovisioned database instance recommender

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs; The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs.

## Extended Definition

The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs; The Overprovisioned database instance recommender identifies oversized instances and recommends rightsizing them to reduce costs.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)

## Supporting Pages

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.

### Cloud SQL for SQL Server release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/release-notes](https://docs.cloud.google.com/sql/docs/sqlserver/release-notes)
- Source ID: `site-docs-root`
- Final score: 144
- Re-rank relevance: N/A

Evidence snippets:
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- Overprovisioned database instance recommender : Identifies overprovisioned database instances in your project and provides recommendations about the savings that you can make by rightsizing these instances.
- April 28, 2022 Feature The following Cloud SQL recommenders that help you optimize your database costs are now generally available: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.
- September 28, 2021 Feature Cloud SQL supports the preview version of two recommenders that help you optimize your database costs: Idle database instance recommender : Identifies idle database instances in your project and provides recommendations about the savings that you can make by shutting them down.

### Clone instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance](https://docs.cloud.google.com/sql/docs/sqlserver/clone-instance)
- Source ID: `site-iam-reference`
- Final score: 128
- Re-rank relevance: N/A

Evidence snippets:
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ DESTINATION INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " DESTINATION INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you're using the preferredZone and preferredSecondaryZone parameters, then the following conditions apply: Both the primary and secondary zones must be valid zones.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ SOURCE INSTANCE NAME /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ DESTINATION INSTANCE NAME ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " OPERATION ID ", "targetId": " DESTINATION INSTANCE NAME ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } If you're using the preferredZone and preferredSecondaryZone parameters, then the following conditions apply: Both the primary and secondary zones must be valid zones.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } The user or service account that's using the instances.clone API method must have the cloudsql.instances.clone permission.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ source-instance-id /clone" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ target-instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CLONE", "name": " operation-id ", "targetId": " target-instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } The user or service account that's using the instances.clone API method must have the cloudsql.instances.clone permission.

