---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-11T00:45:01.335Z"
product_name: "Cloud SQL for PostgreSQL"
product_slug: "cloud-sql-for-postgresql"
feature_name: "Automatic read replica updates during self-service maintenance"
feature_slug: "automatic-read-replica-updates-during-self-service-maintenance"
latest_feature_date: "2024-02-09"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/sql/docs/postgres/release-notes"
  - "https://docs.cloud.google.com/sql/docs/release-notes"
  - "https://docs.cloud.google.com/sql/docs/postgres/create-instance"
keywords:
  - "automatic"
  - "read"
  - "replica"
  - "updates"
  - "during"
  - "self"
  - "maintenance"
  - "apply"
---

# Automatic read replica updates during self-service maintenance

Product: Cloud SQL for PostgreSQL
Coverage: LOW

## Step 02 Summary

Automatic read replica updates apply self-service maintenance changes to read replicas when maintenance is performed on the primary instance.

## Extended Definition

Automatic read replica updates apply self-service maintenance changes to read replicas when maintenance is performed on the primary instance.

## Evidence Summary

Fallback definition because synthesis failed.

## Source Links

- [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)

## Supporting Pages

### Cloud SQL for PostgreSQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/release-notes](https://docs.cloud.google.com/sql/docs/postgres/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- February 09, 2024 Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- After applying the self service maintenance , you can fix any silent data corruption if it already happens using REINDEX CONCURRENTLY SQL command on the specific indexes, or reindexdb client command for your entire instance.
- If you use logical replication with your Cloud SQL for PostgreSQL instances, then we recommend that you don't update your instances to this version or any self-service maintenance version released after May 22, 2025, due to this PostgreSQL bug.
- While Cloud SQL schedules maintenance updates once every few months to ensure you have the latest maintenance version, you might want to use self-service maintenance if: You need an update sooner than your next scheduled maintenance event.

### Cloud SQL release notes \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/release-notes](https://docs.cloud.google.com/sql/docs/release-notes)
- Source ID: `site-docs-root`
- Final score: 166
- Re-rank relevance: N/A

Evidence snippets:
- February 09, 2024 Cloud SQL for MySQL Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- Cloud SQL for PostgreSQL Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- Cloud SQL for SQL Server Feature Cloud SQL now automatically updates your read replicas when you perform self-service maintenance on the primary instance.
- After applying the self service maintenance , you can fix any silent data corruption if it already happens using REINDEX CONCURRENTLY SQL command on the specific indexes, or reindexdb client command for your entire instance.

### Create instances \_|\_ Cloud SQL for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/sql/docs/postgres/create-instance](https://docs.cloud.google.com/sql/docs/postgres/create-instance)
- Source ID: `site-docs-root`
- Final score: 164
- Re-rank relevance: N/A

Evidence snippets:
- AUTOMATIC ROTATION DURING MAINTENANCE : With this option, automatic server certificate rotation is enabled during Cloud SQL scheduled maintenance or self-service maintenance updates.
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .
- SERVER CERTIFICATE ROTATION MODE : For automatic server certificate rotation for your instance, specify AUTOMATIC ROTATION DURING MAINTENANCE .
- Execute the following command: $cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest -Method GET -Headers $headers -Uri "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id " Select-Object -Expand Content You should receive a JSON response similar to the following: { "kind": "sql#instance", "state": "RUNNABLE", "databaseVersion": "MYSQL 8 0 18", "settings": { "authorizedGaeApplications": [], "tier": "db-f1-micro", "kind": "sql#settings", "pricingPlan": "PER USE", "replicationType": "SYNCHRONOUS", "activationPolicy": "ALWAYS", "ipConfiguration": { "authorizedNetworks": [], "ipv4Enabled": true }, "locationPreference": { "zone": "us-west1-a", "kind": "sql#locationPreference" }, "dataDiskType": "PD SSD", "backupConfiguration": { "startTime": "18:00", "kind": "sql#backupConfiguration", "enabled": true, "binaryLogEnabled": true }, "settingsVersion": "1", "storageAutoResizeLimit": "0", "storageAutoResize": true, "dataDiskSizeGb": "10" }, "etag": "--redacted--", "ipAddresses": [ { "type": "PRIMARY", "ipAddress": " 10.0.0.1 " } ], "serverCaCert": { ... }, "instanceType": "CLOUD SQL INSTANCE", "project": " project-id ", "serviceAccountEmailAddress": "redacted@gcp-sa-cloud-sql.iam.gserviceaccount.com", "backendType": "SECOND GEN", "selfLink": "https://sqladmin.googleapis.com/sql/v1beta4/projects/ project-id /instances/ instance-id ", "connectionName": " project-id:region:instance-id ", "name": " instance-id ", "region": "us-west1", "gceZone": "us-west1-a" } Look for the ipAddress field in the response.

