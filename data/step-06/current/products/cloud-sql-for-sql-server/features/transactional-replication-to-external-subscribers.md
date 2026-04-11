---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:58:32.881Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Transactional replication to external subscribers"
feature_slug: "transactional-replication-to-external-subscribers"
latest_feature_date: "2022-06-21"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics"
keywords:
  - "transactional"
  - "replication"
  - "to"
  - "external"
  - "subscribers"
  - "sql"
  - "for"
  - "server"
---

# Transactional replication to external subscribers

Product: Cloud SQL for SQL Server
Coverage: LOW

## Step 02 Summary

Cloud SQL for SQL Server can publish to internal or external subscribers by using transactional replication.

## Extended Definition

Cloud SQL for SQL Server can publish to internal or external subscribers by using transactional replication.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)

## Supporting Pages

### "Active Directory Diagnosis tool for Cloud SQL \_|\_ Cloud SQL for SQL Server\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool](https://docs.cloud.google.com/sql/docs/sqlserver/ad-diagnosis-tool)
- Source ID: `site-iam-reference`
- Final score: 250
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Home Documentation Databases Cloud SQL SQL Server Guides Send feedback Active Directory Diagnosis tool for Cloud SQL Stay organized with collections Save and categorize content based on your preferences.
- The Active Directory (AD) Diagnosis tool is a utility PowerShell script that helps you to troubleshoot AD setup issues with your on-premises domain and Cloud SQL for SQL Server instances in Google Cloud.
- This check attempts to find an existing Kerberos ticket for SQL Server.
- A Cloud SQL for SQL Server instance joined to the Managed AD domain.

### "Cloud SQL Admin API error messages \_|\_ Cloud SQL for SQL Server \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api-error-messages)
- Source ID: `site-api-reference`
- Final score: 230
- Re-rank relevance: N/A

Evidence snippets:
- ERROR REPLICA CONFIGURATION MISSING USERNAME The replica configuration doesn't contain the username (to use for the replication connection) when replicating from an on-premises master.
- ERROR REPLICA CONFIGURATION MISSING PASSWORD The replica configuration doesn't contain the password (to use for the replication connection) when replicating from an on-premises master.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.
- ERROR DISALLOWED UPDATING EXTERNAL SERVER REPLICA REPLICATION STATE Updating the replication state setting of an external server replica instance isn't allowed.

### Cloud SQL metrics \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics](https://docs.cloud.google.com/sql/docs/sqlserver/admin-api/metrics)
- Source ID: `site-api-reference`
- Final score: 226
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- After sampling, data is not visible for up to 165 seconds. database/postgresql/external sync/max replica byte lag ALPHA (project) Max lag bytes GAUGE , INT64 , By cloudsql database Replication lag in bytes for Postgres External Server (ES) replicas.
- After sampling, data is not visible for up to 165 seconds. per database/conn pool/client connections GA (project) Client connections GAUGE , INT64 , 1 cloudsql instance database Number of client connections per database grouped by status. status : Status of the client connection e.g. 'active' or 'waiting'. per database/conn pool/client connections attempts count GA (project) Client connection attempts count CUMULATIVE , INT64 , 1 cloudsql instance database Number of client connection attempts received per database. per database/conn pool/client connections avg wait time GA (project) Average wait time GAUGE , INT64 , us cloudsql instance database Average wait time spent by clients waiting for a server connection per database in microseconds. per database/conn pool/client connections error count GA (project) Error count CUMULATIVE , INT64 , 1 cloudsql instance database Count of errors that cause client disconnection including auth error, client connection setup error, server connection error and timeout errors. per database/conn pool/num pools GA (project) Number of connection pools GAUGE , INT64 , 1 cloudsql instance database Number of connection pools per database. per database/conn pool/server connections GA (project) Server connections GAUGE , INT64 , 1 cloudsql instance database Number of server connections per database grouped by status. status : Status of the server connection e.g. 'active' or 'idle'. per database/postgresql/external sync/initial sync complete GA (project) External server migration phase GAUGE , BOOL , cloudsql instance database Migration phase of each database on the external server (ES) replica.
- After sampling, data is not visible for up to 165 seconds. type : Server principal type, one of [SQL LOGIN, WINDOWS LOGIN, WINDOWS GROUP, SERVER ROLE, CERTIFICATE MAPPED LOGIN, EXTERNAL LOGIN, EXTERNAL GROUP, ASYMMETRIC KEY MAPPED LOGIN]. is enabled : (BOOL) Indicates whether a server principal is enabled. database/sqlserver/sql agent/jobs GA (project) SQL Server agent jobs GAUGE , INT64 , 1 cloudsql database Current number of SQL Server agent jobs on the instance.
- After sampling, data is not visible for up to 165 seconds. backend type : Type of backend. object : Target object of the write operation. context : The context of the write operation. database/postgresql/external sync/initial sync complete ALPHA (project) Initial sync complete GAUGE , BOOL , cloudsql database Whether all databases on the Postgres External Server (ES) replica have completed the initial sync and are replicating changes from the source.

