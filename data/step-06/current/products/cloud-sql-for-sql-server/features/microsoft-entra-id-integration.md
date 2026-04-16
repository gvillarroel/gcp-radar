---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.529Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Microsoft Entra ID integration"
feature_slug: "microsoft-entra-id-integration"
latest_feature_date: "2025-12-11"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "microsoft"
  - "entra"
  - "id"
  - "integration"
  - "provides"
  - "centralized"
  - "identity"
  - "access"
---

# Microsoft Entra ID integration

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Microsoft Entra ID integration provides centralized identity and access management for databases using an existing Entra ID tenant.

## Extended Definition

Microsoft Entra ID integration provides centralized identity and access management for databases using an existing Entra ID tenant.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Overview of Managed Microsoft AD in Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad](https://docs.cloud.google.com/sql/docs/sqlserver/ad)
- Source ID: `site-docs-reference-required-4`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- If your Managed Microsoft AD is in a different project, AD PROJECT ID should be the one containing the Managed Service for Microsoft Active Directory instance, while the service account's SQL PROJECT NUMBER should be the one containing the SQL Server instance: gcloud projects add-iam-policy-binding AD PROJECT ID \ --member = serviceAccount:service- SQL PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com \ --role = roles/managedidentities.sqlintegrator Also see gcloud beta services identity create .
- To create a service account with gcloud , run the following command: gcloud beta services identity create --service = sqladmin.googleapis.com \ --project = PROJECT NUMBER That command returns a service account name in the following format: service- PROJECT NUMBER @gcp-sa-cloud-sql.iam.gserviceaccount.com Here is an example of a service account name: service-333445@gcp-sa-cloud-sql.iam.gserviceaccount.com Granting the necessary permission for integration requires existing permissions.
- Best practices for integrating with Managed Microsoft AD When you plan an integration, review the following: Prerequisites for integration Integrating with a managed AD domain in a different project Managed Microsoft AD documentation Deploy domain controllers in additional regions Use the AD diagnosis tool to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud console.
- For example, joining an instance to a Managed Microsoft AD domain lets you to sign in using Windows Authentication with an AD-based identity.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 133
- Re-rank relevance: N/A

Evidence snippets:
- Console Note: If you plan to integrate with Managed Service for Microsoft Active Directory, review the prerequisites for integration .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- Save the request body in a file named request.json , and execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method POST -Headers $headers -ContentType: "application/json; charset=utf-8" -InFile request.json -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances" Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#operation", "targetLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "status": "PENDING", "user": "user@example.com", "insertTime": "2020-01-01T19:13:21.834Z", "operationType": "CREATE", "name": " OPERATION ID ", "targetId": " INSTANCE ID ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /operations/ OPERATION ID ", "targetProject": " PROJECT ID " } After the instance is created, you can further configure the default user account .

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 131
- Re-rank relevance: N/A

Evidence snippets:
- Network connectivity issues with private IP instances You might experience some of the following issues during integration setup: Slow operations to create Microsoft Entra ID logins Unable to create Microsoft Entra ID logins Unable to connect to the instance using Microsoft Entra ID authentication For more information on how to help address these issues, see Troubleshooting Microsoft Entra ID integration .
- Access to the remote server is denied because no login-mapping exists. (Microsoft SQL Server, Error: 7416) If you have this issue while establishing an encrypted connection, you need to try another way to provide the user ID when you access the linked server.
- Error message: Login failed for user "" You might encounter this login error during Microsoft Entra ID authentication .
- To resolve this issue, make sure that a SQL Server login exists for this Microsoft Entra ID user.

