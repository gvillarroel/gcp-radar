---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.281Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Regional Spanner instances in Doha"
feature_slug: "regional-spanner-instances-in-doha"
latest_feature_date: "2023-03-30"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "qatar"
  - "doha"
  - "instances"
  - "creating"
  - "regional"
  - "supports"
---

# Regional Spanner instances in Doha

Product: Spanner
Coverage: LOW

## Step 02 Summary

Spanner supports creating regional instances in the Doha, Qatar (me-central1) region.

## Extended Definition

Spanner supports creating regional instances in the Doha, Qatar (me-central1) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### "Create and query a database in the Google Cloud console \_|\_ Spanner \_\

- URL: [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)
- Source ID: `site-docs-reference`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- If not, enable it manually: Enable Spanner API To get the permissions that you need to create instances and databases, ask your administrator to grant you the Cloud Spanner Admin (roles/spanner.admin) IAM role on your project.
- Create a schema for your database Note: Spanner Studio (formerly labeled Query in the Google Cloud console) supports SQL, DML, and DDL operations in a single editor.
- Go to Spanner instances Click the name of the instance that has the database that you want to delete, for example, Test Instance .
- In the Configure your instance page, retain the default option Regional and select a configuration from the drop-down menu.

### Autoscaler tool overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- The preprocessing done by the Poller also simplifies the process of evaluating thresholds for regional, dual-region, and multi-regional Spanner instances.
- Multi-regional, dual-region, and regional instances all have different utilization thresholds that are used when scaling.
- Custom thresholds The Autoscaler tool determines the number of nodes or processing units to be added or subtracted to an instance using the recommended Spanner thresholds for the following load metrics: High priority CPU 24-hour rolling average CPU Storage utilization We recommend that you use the default thresholds as described in Creating alerts for Spanner metrics .
- To help you to balance cost control with performance needs, the Autoscaler tool monitors your instances and automatically adds or removes nodes or processing units to help ensure that they stay within the following parameters: The recommended maximums for CPU utilization .

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 28
- Re-rank relevance: N/A

Evidence snippets:
- If you are creating and deleting instances for testing purposes, you can delete the new instance within 24 hours to avoid manually deleting its backups.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- For regional instances , the backup is stored in each of the three read-write zones.
- Each backup resource is organized under the same instance as its source database in the resource hierarchy and has a resource path that uses the following format: projects/ PROJECT ID /instances/ INSTANCE ID /backups/ BACKUP NAME Replace the following: PROJECT ID : the project ID.

