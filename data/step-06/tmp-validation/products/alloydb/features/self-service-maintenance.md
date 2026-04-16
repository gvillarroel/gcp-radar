---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.077Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Self-service maintenance"
feature_slug: "self-service-maintenance"
latest_feature_date: "2025-11-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/maintenance"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "self"
  - "apply"
  - "updates"
  - "maintenance"
  - "clusters"
  - "lets"
---

# Self-service maintenance

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Self-service maintenance lets you apply the latest AlloyDB updates to clusters on demand and set deny periods.

## Extended Definition

Self-service maintenance lets you apply the latest AlloyDB updates to clusters on demand and set deny periods.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### Maintenance overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/maintenance](https://docs.cloud.google.com/alloydb/docs/maintenance)
- Source ID: `site-docs-reference-2`
- Final score: 181
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Self-service maintenance If you need to apply maintenance and update your clusters to the latest version immediately, you can perform self-service maintenance.
- Clusters with maintenance windows typically receive updates after the changelog and release notes are updated.
- Reasons for maintenance Periodic maintenance updates can happen for the following reasons: New AlloyDB features and bug fixes: to launch new features, Google must update the AlloyDB software that runs on the nodes within your cluster.
- However, for clusters with multiple read pools, the downtime might continue past the one-hour window because the maintenance can start at any time in that window—for example, at the last minute—and then take up to an hour.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 143
- Re-rank relevance: N/A

Evidence snippets:
- Maintenance and updates Over the life of an AlloyDB cluster, two kinds of updates can occur: System updates: Google periodically performs system updates to ensure that the underlying hardware and software are reliable, secure, and performing optimally.
- Automatic and adaptive database features The fully PostgreSQL-compatible database engine that powers every AlloyDB node has several features that continuously analyze the structure and frequency of the queries that your instances handle, using this information to suggest schema improvements or automatically apply optimizations: An index advisor helps you find opportunities to optimize your database schema using new indexes based on your usage patterns.
- You can use the following tools to connect to and manage your databases: AlloyDB Studio: a web-based tool built directly into the Google Google Cloud console that lets you explore and manage your data using an interactive SQL interface.
- Key features AlloyDB distinguishes itself from a stock PostgreSQL installation in a number of ways beyond the vertical and horizontal scaling advantages inherent in the multi-node architecture described earlier.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 126
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- This can happen due to user-triggered updates or system actions like failover or maintenance. initialUser object ( UserPassword ) Input only.
- The maintenance update policy determines when to allow or deny updates. maintenanceSchedule object ( MaintenanceSchedule ) Output only.
- MaintenanceUpdatePolicy MaintenanceUpdatePolicy defines the policy for system updates.

