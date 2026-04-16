---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.594Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "connection organization policies"
feature_slug: "connection-organization-policies"
latest_feature_date: "2019-12-13"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp"
keywords:
  - "connection"
  - "organization"
  - "policies"
  - "sql"
  - "lets"
  - "organizations"
  - "define"
  - "control"
---

# connection organization policies

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL lets organizations define policies that control access to and from Cloud SQL instances.

## Extended Definition

Cloud SQL lets organizations define policies that control access to and from Cloud SQL instances.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)

## Supporting Pages

### "Configure VPC Service Controls \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/configure-service-controls)
- Source ID: `site-docs-reference`
- Final score: 161
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- See Connection organization policies and Configuring the organization policy .
- To either disallow or disable public IP on Cloud SQL instances: Organization administrators can apply organization policies that disallow creating new instances with public IP.
- IP-based connections bypass VPC Service Controls.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Configure VPC Service Controls Stay organized with collections Save and categorize content based on your preferences.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 147
- Re-rank relevance: N/A

Evidence snippets:
- Note: Some organizations use an organization policy to restrict resource locations.
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 32 vCPUs, 3.75 GB to 208 GB SQL Server 2017 Standard, SQL Server 2019 Standard, SQL Server 2022 Standard, and SQL Server 2025 Standard Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 48 vCPUs, 3.75 GB to 312 GB SQL Server 2017 Enterprise, SQL Server 2019 Enterprise, SQL Server 2022 Enterprise, and SQL Server 2025 Enterprise Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 2 to 96 vCPUs, 3.75 GB to 624 GB Performance-optimized (Cloud SQL Enterprise Plus only) 2 vCPUs, 16 GB 4 vCPUs, 32 GB 8 vCPUs, 64 GB 16 vCPUs, 128 GB 32 vCPUs, 256 GB 48 vCPUs, 384 GB 64 vCPUs, 512 GB 80 vCPUs, 640 GB 96 vCPUs, 768 GB 128 vCPUs, 864 GB Memory-optimized (Cloud SQL Enterprise Plus only) 4 vCPUs, 128 GB 8 vCPUs, 256 GB 16 vCPUs, 512 GB Simultaneous multithreading Simultaneous multithreading (SMT) on Cloud SQL for SQL Server lets you run two virtual CPUs (vCPUs) as independent, separate threads on one physical core.

### "Use the Cloud SQL remote MCP server \_|\_ Cloud SQL for MySQL \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp](https://docs.cloud.google.com/sql/docs/mysql/use-cloudsql-mcp)
- Source ID: `site-docs-reference-required-4`
- Final score: 133
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Before you begin Required roles To get the permissions that you need to use the Cloud SQL remote MCP server, ask your administrator to grant you the following IAM roles on the project where you want to use the remote Cloud SQL MCP server: Make MCP tool calls in a project: MCP Tool User ( roles/mcp.toolUser ) Create an OAuth client ID: OAuth Config Editor ( roles/oauthconfig.editor ) Create, clone, or update a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Create or update a Cloud SQL user: Cloud SQL Admin ( roles/cloudsql.admin ) Execute SQL queries in Cloud SQL: Cloud SQL Admin ( roles/cloudsql.admin ) Cloud SQL Studio User ( roles/cloudsql.StudioUser ) Get a Cloud SQL instance or list all Cloud SQL instances in a project: Cloud SQL Viewer ( roles/cloudsql.viewer ) Import data into a Cloud SQL instance: Cloud SQL Admin ( roles/cloudsql.admin ) Storage Admin ( roles/storage.admin ) List Cloud SQL users: Cloud SQL Viewer ( roles/cloudsql.viewer ) For more information about granting roles, see Manage access to projects, folders, and organizations .
- Control MCP use with IAM deny policies Identity and Access Management (IAM) deny policies help you secure Google Cloud remote MCP servers.
- To see the exact permissions that are required, expand the Required permissions section: Required permissions The following permissions are required to use the Cloud SQL remote MCP server: Make MCP tool calls: mcp.tools.call Clone a Cloud SQL instance: cloudsql.instances.clone Create a Cloud SQL instance: cloudsql.instances.create Create a Cloud SQL user: cloudsql.users.create Execute SQL queries on a Cloud SQL instance: cloudsql.instances.executeSql cloudsql.instances.login Get a Cloud SQL instance: cloudsql.instances.get Get a Cloud SQL instance operation: cloudsql.instances.get Import data to a Cloud SQL instance: cloudsql.instances.import List Cloud SQL instances in a project: cloudsql.instances.list List Cloud SQL users: cloudsql.users.list Update a Cloud SQL instance: cloudsql.instances.update Update a Cloud SQL user: cloudsql.users.update You might also be able to get these permissions with custom roles or other predefined roles .
- Whether you are deploying AI in your cloud environment, or on external cloud providers, Model Armor can help you prevent malicious input, verify content safety, protect sensitive data, maintain compliance, and enforce your AI safety and security policies consistently across your diverse AI landscape.

