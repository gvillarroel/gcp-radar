---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.603Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Combined private services access and Private Service Connect"
feature_slug: "combined-private-services-access-and-private-service-connect"
latest_feature_date: "2025-05-22"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions"
keywords:
  - "combined"
  - "private"
  - "services"
  - "access"
  - "and"
  - "connect"
  - "lets"
  - "an"
---

# Combined private services access and Private Service Connect

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Combined private services access and Private Service Connect lets an instance use both connectivity models at the same time; Combined private services access and Private Service Connect lets an instance be created or updated to use both connectivity models.

## Extended Definition

Combined private services access and Private Service Connect lets an instance use both connectivity models at the same time; Combined private services access and Private Service Connect lets an instance be created or updated to use both connectivity models.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)

## Supporting Pages

### "Private Service Connect overview \_|\_ Cloud SQL for SQL Server \_|\_ Google\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect](https://docs.cloud.google.com/sql/docs/sqlserver/about-private-service-connect)
- Source ID: `site-iam-reference`
- Final score: 176
- Re-rank relevance: N/A

Evidence snippets:
- To use Private Service Connect backends, you must setup the following resources for each serving port on which you want to access a given Cloud SQL instance: Private Service Connect Network Endpoint Group (NEG) , which must reference the service attachment and a serving port of the Cloud SQL instance.
- By adding a single common services VPC network to the NCC hub, all Private Service Connect endpoints in the VPC network become accessible transitively to other spoke VPC networks through the hub.
- If your instance is configured for both private service access and Private Service Connect , then you can't enable Private Service Connect outbound connectivity for your instance.
- You can use Private Service Connect for the following purposes: Connect to a Cloud SQL instance from multiple VPC networks that belong to different groups, teams, projects, or organizations Connect to either a primary instance or any of its read replicas Private Service Connect endpoint You can use Private Service Connect endpoints to access Cloud SQL instances privately from your consumer VPC networks.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- The following sections show the vCPU and memory configuration for each database version and machine type: SQL Server 2017 Express, SQL Server 2019 Express, SQL Server 2022 Express, and SQL Server 2025 Express Machine type vCPU/Memory Not applicable 1 vCPU, 3.75 GB 2 vCPUs, 8 GB 4 vCPUs, 16 GB 8 vCPUs, 32 GB Custom 1 to 8 vCPUs, 3.75 GB to 52 GB SQL Server 2017 Web, SQL Server 2019 Web, and SQL Server 2022 Web Important : SQL Server Web edition software can only be used to support public and internet-accessible pages, websites, and web services.
- See allocated range size To resolve this issue, you can either expand the existing allocated IP range or allocate an additional IP range to the private service connection.

### "Roles and permissions \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions](https://docs.cloud.google.com/sql/docs/postgres/roles-and-permissions)
- Source ID: `site-iam-reference`
- Final score: 166
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Permission to access private Cloud SQL instances When another Google Cloud service, such as BigQuery, needs to communicate with your Cloud SQL instance to access data and make queries against this data over a private connection, the service uses an internal path instead of the private IP addresses inside of the Virtual Private Cloud (VPC).
- Control and revoke the permission When another Google Cloud service, such as BigQuery, tries to access your private Cloud SQL instance, it must provide a legitimate identity with the cloudsql.instances.connect IAM permission.
- Cloud SQL roles and permissions for Dataplex Universal Catalog integration To provide access to Cloud SQL metadata on Dataplex Universal Catalog, you can grant a user the roles/cloudsql.schemaViewer role or add the cloudsql.schemas.view permission to a custom role.
- Cloud SQL roles and permissions with Cloud SQL Auth Proxy If you are connecting to a Cloud SQL instance from a Compute Engine instance using Cloud SQL Auth Proxy , you can use the default Compute Engine service account associated with the Compute Engine instance.

