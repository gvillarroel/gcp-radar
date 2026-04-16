---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.536Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "AI-assisted troubleshooting"
feature_slug: "ai-assisted-troubleshooting"
latest_feature_date: "2025-05-05"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
keywords:
  - "ai"
  - "assisted"
  - "troubleshooting"
  - "provides"
  - "guided"
  - "diagnosis"
  - "complex"
  - "database"
---

# AI-assisted troubleshooting

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

AI-assisted troubleshooting provides guided diagnosis of complex database performance issues such as slow queries and high load.

## Extended Definition

AI-assisted troubleshooting provides guided diagnosis of complex database performance issues such as slow queries and high load.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)
- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)

## Supporting Pages

### "Choose a Cloud SQL edition \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition](https://docs.cloud.google.com/sql/docs/sqlserver/choose-edition)
- Source ID: `site-docs-reference-required-4`
- Final score: 88
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud SQL key features The following table provides an overview of key feature enhancements available in Cloud SQL Enterprise Plus edition compared to Cloud SQL Enterprise edition: Cloud SQL Enterprise Plus edition Cloud SQL Enterprise edition Database versions SQL Server 2025 Enterprise SQL Server 2022 Enterprise SQL Server 2019 Enterprise SQL Server 2025 (Standard, Enterprise, and Express) SQL Server 2022 (Standard, Enterprise, Express, and Web) SQL Server 2019 (Standard, Enterprise, Express, and Web) SQL Server 2017 (Standard, Enterprise, Express, and Web) Availability SLA 99.99% (includes maintenance) 99.95% (excludes maintenance) Performance Machine series N2 Memory-optimized-N2 General purpose dedicated core N4 Machine configuration limits N2 machine series Up to 128 vCPU Up to 864 GB RAM 1:8 core:memory ratio Memory-optimized-N machine series Up to 16 vCPU Up to 512 GB RAM 1:32 core:memory ratio General purpose dedicated core Up to 96 vCPU Up to 624 GB RAM 1:6.5 core:memory ratio N4 machine series Up to 80 vCPU Up to 624 GB RAM 1:8 core:memory ratio Data cache Yes No Point-in-time log retention Up to 35 days Up to 7 days Availability Maintenance downtime Planned operations downtime Sub-second downtime Few minutes Advanced disaster recovery (DR) Yes No Write endpoint for advanced disaster recovery (DR) Yes No Write endpoint connectivity Yes No Observability AI-assisted troubleshooting Yes No Query insights 30 day metric retention 1 MB query length 200 query plan sample maximum Wait event analysis Index advisor recommendations 7 day metric retention 4500 bytes query length 20 query plan sample maximum Enhanced recommenders Yes No What's next Plan and prepare to create a new instance.
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Choose a Cloud SQL edition Stay organized with collections Save and categorize content based on your preferences.
- Cloud SQL Enterprise edition : provides all core capabilities of Cloud SQL and is suitable for applications with less stringent availability and performance requirements.
- Cloud SQL offers the following editions: Cloud SQL Enterprise Plus edition : provides enhanced performance, availability, and observability to run applications.

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-docs-reference-required-4`
- Final score: 70
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- Checks performed by the AD Diagnosis tool Check Description Notes and recommendation Available domain controllers Issues a ping to the IP address of each domain controller on the on-premises domain to ensure they are reachable.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- How to use the AD Diagnosis tool To use the AD Diagnosis tool, perform the following steps: Log on to any one of the on-premises domain controllers or a VM joined to the on-premises domain.

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 69
- Re-rank relevance: N/A

Evidence snippets:
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } To see how the underlying REST API request is constructed for this task, see the APIs Explorer on the instances:insert page .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": " DATABASE VERSION ", "settings": { "authorizedGaeApplications": [], "tier": " MACHINE TYPE ", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": " ZONE ", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "19:00", "kind": "sql#backupConfiguration", "enabled": true }, "settingsVersion": "1", "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", " ipAddress ": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " PROJECT ID ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": " BACKEND TYPE ", "selfLink": "https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances/ INSTANCE ID ", "connectionName": " PROJECT ID:REGION:INSTANCE ID ", "name": " INSTANCE ID ", "region": " REGION ", "gceZone": " ZONE " } REST v1beta4 1.
- HTTP method and URL: POST https://sqladmin.googleapis.com/sql/v1beta4/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- HTTP method and URL: POST https://sqladmin.googleapis.com/v1/projects/ PROJECT ID /instances Request JSON body: { "name": " INSTANCE ID ", "region": " REGION ", "databaseVersion": " DATABASE VERSION ", "rootPassword": " PASSWORD ", "settings": { "tier": " MACHINE TYPE ", "edition": " EDITION TYPE ", "backupConfiguration": { "enabled": true }, "dataCacheConfig": { "dataCacheEnabled": DATA CACHE ENABLED }, "ipConfiguration": { "privateNetwork": " PRIVATE NETWORK ", "authorizedNetworks": [ AUTHORIZED NETWORKS ], "ipv4Enabled": false, "serverCaMode": " CA MODE ", "serverCertificateRotationMode": " SERVER CERTIFICATE ROTATION MODE ", "customSubjectAlternativeNames": " DNS NAMES " } }, "sqlNetworkArchitecture": "NEW NETWORK ARCHITECTURE" } To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .

