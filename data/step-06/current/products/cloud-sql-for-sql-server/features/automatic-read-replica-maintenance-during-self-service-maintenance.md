---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-15T11:57:14.556Z"
product_name: "Cloud SQL for SQL Server"
product_slug: "cloud-sql-for-sql-server"
feature_name: "Automatic read replica maintenance during self-service maintenance"
feature_slug: "automatic-read-replica-maintenance-during-self-service-maintenance"
latest_feature_date: "2024-02-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/sql/docs/sqlserver/create-instance"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools"
  - "https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting"
keywords:
  - "automatic"
  - "read"
  - "replica"
  - "maintenance"
  - "during"
  - "self"
  - "sql"
  - "automatically"
---

# Automatic read replica maintenance during self-service maintenance

Product: Cloud SQL for SQL Server
Coverage: MEDIUM

## Step 02 Summary

Cloud SQL automatically updates read replicas when self-service maintenance is performed on the primary instance.

## Extended Definition

Cloud SQL automatically updates read replicas when self-service maintenance is performed on the primary instance.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)

## Supporting Pages

### Create instances \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/create-instance](https://docs.cloud.google.com/sql/docs/sqlserver/create-instance)
- Source ID: `site-docs-root`
- Final score: 191
- Re-rank relevance: N/A

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- Note: Cloud SQL generates a write endpoint automatically for your Cloud SQL Enterprise Plus edition instance if you do the following: If you haven't already enabled the Cloud DNS API, enable the Cloud DNS API for your Google Cloud project.
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .

### About read pools \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools](https://docs.cloud.google.com/sql/docs/sqlserver/about-read-pools)
- Source ID: `site-docs-reference-required-4`
- Final score: 184
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The TDE certificates will be automatically replicated to all read replicas in the read pool, no matter the type of replica.
- Like read replicas, read pools receive maintenance during the primary instance's maintenance window.
- When you modify read pool node settings such as storage, connectivity, or database configuration flags, the changes are automatically applied uniformly across each read pool node in the read pool.
- Cloud SQL automatically repairs read pool nodes in the following conditions: When the instance is down.

### Troubleshoot \_|\_ Cloud SQL for SQL Server \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting](https://docs.cloud.google.com/sql/docs/sqlserver/troubleshooting)
- Source ID: `site-docs-root`
- Final score: 152
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Check the endpoint's status. gcloud To check the status, use the gcloud compute forwarding-rules describe command. gcloud compute forwarding-rules describe ENDPOINT NAME \ --project = PROJECT ID \ --region = REGION NAME \ grep pscConnectionStatus Make the following replacements: ENDPOINT NAME : the name of the endpoint PROJECT ID : the ID or project number of the Google Cloud project that contains the endpoint REGION NAME : the region name for the endpoint REST Before using any of the request data, make the following replacements: PROJECT ID : the ID or project number of the Google Cloud project that contains the Private Service Connect endpoint REGION NAME : the name of the region ENDPOINT NAME : the name of the endpoint HTTP method and URL: GET https://compute.googleapis.com/compute/v1/projects/ PROJECT ID /regions/ REGION NAME /forwardingRules/ ENDPOINT NAME To send your request, expand one of these options: curl (Linux, macOS, or Cloud Shell) Note: The following command assumes that you have logged in to the gcloud CLI with your user account by running gcloud init or gcloud auth login , or by using Cloud Shell , which automatically logs you into the gcloud CLI .
- To download the logs as JSON: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" \ downloaded-log.json To download the logs as TEXT: gcloud logging read \ "resource.type=cloudsql database \ AND logName=projects/ PROJECT ID \ /logs/cloudsql.googleapis.com%2F LOG NAME " \ --format json \ --project = PROJECT ID \ --freshness = "1d" jq -rnc --stream 'fromstream(1 truncate stream(inputs)) \ .textPayload' \ --order = asc downloaded-log.txt Manage instances Issue Troubleshooting Temporary storage increased automatic storage.
- MySQL PostgreSQL SQL Server Check if your question or problem has already been addressed on one of the following pages: FAQ Known issues Error messages Diagnose issues Debug connection issues Issues updating storage capacity Topics in this page include: Backup and recovery Cloning Connectivity Creating instances Flags High availability Import and export Linked servers Logging Managing instances Private Service Connect Replication Backup and recovery Issue Troubleshooting You can't see the current operation's status.
- Network attachments need to be configured to either accept all connections automatically, or configured manually with a list of accepted connections.

