---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T13:51:57.818Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Database auditing with pgAudit"
feature_slug: "database-auditing-with-pgaudit"
latest_feature_date: "2021-01-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/mysql/project-access-control"
  - "https://docs.cloud.google.com/sql/docs/postgres/troubleshooting"
  - "https://docs.cloud.google.com/sql/docs/postgres/authorize-networks"
keywords:
  - "auditing"
  - "pgaudit"
  - "through"
  - "extension"
  - "database"
  - "supports"
---

# Database auditing with pgAudit

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations; Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations.

## Extended Definition

Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations; Cloud SQL for PostgreSQL supports database auditing through the pgAudit extension to log selected SQL operations.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)

## Supporting Pages

### "Authorize with authorized networks \_|\_ Cloud SQL for PostgreSQL \_|\_\

- URL: [https://docs.cloud.google.com/sql/docs/postgres/authorize-networks](https://docs.cloud.google.com/sql/docs/postgres/authorize-networks)
- Source ID: `site-iam-reference`
- Final score: 32
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Terraform To configure authorized networks, use a Terraform resource . resource "google sql database instance" "default" { name = "postgres-instance-with-authorized-network" region = "us-central1" database version = "POSTGRES 14" settings { tier = "db-custom-2-7680" ip configuration { authorized networks { name = "Network Name" value = "192.0.2.0/24" expiration time = "3021-11-15T16:19:00.094Z" } } } } Apply the changes To apply your Terraform configuration in a Google Cloud project, complete the steps in the following sections.
- Home Documentation Databases Cloud SQL PostgreSQL Guides Send feedback Authorize with authorized networks Stay organized with collections Save and categorize content based on your preferences.
- The filename must have the .tf extension—for example main.tf .

### IAM authentication \_|\_ Cloud SQL for MySQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/mysql/project-access-control](https://docs.cloud.google.com/sql/docs/mysql/project-access-control)
- Source ID: `site-iam-reference`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- Feature Built-in database authentication IAM database authentication (individual) IAM group authentication Authentication method Password Temporary authentication token Temporary authentication token Network traffic encryption SSL not required SSL required SSL required User management Manual Centralized through IAM Centralized through IAM and Cloud Identity groups IAM group authentication IAM group authentication lets you manage Cloud SQL users at a group level.
- Administrators who have users log in through IAM database authentication can use IAM authentication to centrally manage access control to their instances using IAM policies.
- For auditing purposes, you get the benefit of viewing which account performed which action in your database.
- Context-aware access and IAM database authentication If you're using context-aware access in your IAM configuration, then you can't use a Cloud SQL connector such as the Cloud SQL Auth Proxy or one of the Cloud SQL Language Connectors with IAM database authentication.

### Troubleshoot \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/troubleshooting](https://docs.cloud.google.com/sql/docs/postgres/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 29
- Re-rank relevance: N/A

Evidence snippets:
- From a terminal, connect to your database: gcloud sql connect INSTANCE NAME Run this command to create the extension: CREATE EXTENSION pgaudit ; Exit the database, and from a terminal run the following command: gcloud sql instances patch INSTANCE NAME \ --database-flags = cloudsql.enable pgaudit = on,pgaudit.log = all Manage instances Issue Troubleshooting You want to find out what queries are running now.
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Query logs are not found in PostgreSQL logs.
- Connect to the database and run the following query: SELECT datname, username, application name as appname, client addr, state, now() - backend start as conn age, now() - xact start as xact age, now() - query start as query age, now() - state change as last activity age, wait event type, wait event, query FROM pg stat activity WHERE state <> 'idle' ORDER BY 8 DESC LIMIT 20; You want to find out what units are being used for a specific field.
- Log into the database and run this command: SELECT datname, usename, application name as appname, client addr, state, now () - backend start as conn age, now () - state change as last activity age FROM pg stat activity WHERE backend type = 'client backend' ORDER BY 6 DESC LIMIT 20 Hostname/IP does not match certificate's altnames: Host: localhost. is not in the cert's altnames .

