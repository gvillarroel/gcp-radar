---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T22:42:27.266Z"
product_name: "Spanner"
product_slug: "spanner"
feature_name: "Cloud Spanner regional instances in me-central2"
feature_slug: "cloud-spanner-regional-instances-in-me-central2"
latest_feature_date: "2023-09-19"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/spanner/docs/backup"
  - "https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview"
  - "https://docs.cloud.google.com/spanner/docs/create-query-database-console"
keywords:
  - "dammam"
  - "central2"
  - "instances"
  - "creating"
  - "regional"
  - "supports"
---

# Cloud Spanner regional instances in me-central2

Product: Spanner
Coverage: LOW

## Step 02 Summary

Cloud Spanner supports creating regional instances in the me-central2 (Dammam, Saudi Arabia) region.

## Extended Definition

Cloud Spanner supports creating regional instances in the me-central2 (Dammam, Saudi Arabia) region.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- [https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview](https://docs.cloud.google.com/spanner/docs/autoscaler-tool-overview)
- [https://docs.cloud.google.com/spanner/docs/create-query-database-console](https://docs.cloud.google.com/spanner/docs/create-query-database-console)

## Supporting Pages

### Backups overview \_|\_ Spanner \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/spanner/docs/backup](https://docs.cloud.google.com/spanner/docs/backup)
- Source ID: `site-docs-root`
- Final score: 33
- Re-rank relevance: N/A

Evidence snippets:
- If you are creating and deleting instances for testing purposes, you can delete the new instance within 24 hours to avoid manually deleting its backups.
- For dual-region and multi-regional instances , the backup is stored in all zones that contain either a read-write or read-only replica.
- For regional instances , the backup is stored in each of the three read-write zones.
- For example, if you copy your database from the source multi-region instance configuration nam7 to the destination multi-region instance configuration nam-eur-asia3 , the following charges apply: No charge for overlapping us-central1 region No charge for witness us-central2 region Inter-continental data transfer charge apply twice: once for each new continent (Europe and Asia) Data transfer between regions within the same continent charge apply once for us-east1 Data transfer between regions within the same continent charge apply once in Europe Spanner optimizes the copying process to minimize the number of cross-region transfers.

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

