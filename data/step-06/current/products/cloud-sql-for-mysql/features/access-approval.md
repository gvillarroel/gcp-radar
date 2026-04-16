---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:56:51.966Z"
product_name: "Cloud SQL for MySQL"
product_slug: "cloud-sql-for-mysql"
feature_name: "Access Approval"
feature_slug: "access-approval"
latest_feature_date: "2021-10-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview"
  - "https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases"
  - "https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access"
keywords:
  - "access"
  - "approval"
  - "sql"
  - "supports"
  - "so"
  - "databases"
  - "can"
  - "require"
---

# Access Approval

Product: Cloud SQL for MySQL
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL supports Access Approval so Google Support access to databases can require explicit customer approval.

## Extended Definition

Cloud SQL supports Access Approval so Google Support access to databases can require explicit customer approval.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)

## Supporting Pages

### Data residency overview \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview](https://docs.cloud.google.com/sql/docs/mysql/data-residency-overview)
- Source ID: `site-docs-root`
- Final score: 138
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Access Approval lets you require Google employees to get your explicit approval before they access your data or configurations on Google Cloud (for exclusions, see Access Approval exclusions ).
- Access Approval complements the visibility provided by Access Transparency , which generates near-real-time audit logs when Google administrators interact with your data.
- Using Access Approval, Access Transparency, and Key Access Justifications with Cloud KMS and Cloud EKM, you can deny Google the ability to decrypt your data.
- To control Google's access of support and engineering personnel, use Access Approval .

### "Create and manage databases \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases](https://docs.cloud.google.com/sql/docs/mysql/create-manage-databases)
- Source ID: `site-docs-reference-3`
- Final score: 113
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#database", "charset": "utf8", "collation": "utf8 general ci", "etag": " etag ", "name": "sys", "instance": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases/sys", "project": " project-id " } Note : The databases.list API supports only response payloads that include up to 4 MB of text.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } REST v1beta4 The following request uses the databases:insert method to create a new database on the specified instance.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id /databases" Select-Object -Expand Content You should receive a JSON response similar to the following: Response { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-21T22:43:37.981Z", "operationType": "CREATE DATABASE", "name": " operation-id ", "targetId": " instance-id ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /operations/ operation-id ", "targetProject": " project-id " } mysql Client For reference information, see CREATE DATABASE in the MySQL documentation.

### "Configure private services access \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access](https://docs.cloud.google.com/sql/docs/mysql/configure-private-services-access)
- Source ID: `site-docs-reference-3`
- Final score: 109
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to manage a private services access connection: compute.addresses.create compute.addresses.list compute.globalAddresses.create compute.globalAddresses.createInternal compute.globalAddresses.list compute.networks.list compute.networks.use servicenetworking.services.addPeering serviceusage.services.list You might also be able to get these permissions with custom roles or other predefined roles .
- Configure private services access for Cloud SQL Important: When you create a private connection between your VPC network and the Cloud SQL service, it becomes available for use by any Google service that supports private services access.
- Home Documentation Databases Cloud SQL MySQL Guides Send feedback Configure private services access Stay organized with collections Save and categorize content based on your preferences.
- Before you begin Cloud SQL requires private services access for each VPC network that's used for private IP connections.

