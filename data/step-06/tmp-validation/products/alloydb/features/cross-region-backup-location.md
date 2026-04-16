---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.137Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Cross-region backup location"
feature_slug: "cross-region-backup-location"
latest_feature_date: "2024-07-16"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
keywords:
  - "store"
  - "location"
  - "region"
  - "cross"
  - "backup"
  - "lets"
---

# Cross-region backup location

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB lets you store backups in a cross-region backup location.

## Extended Definition

AlloyDB lets you store backups in a cross-region backup location.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 156
- Re-rank relevance: N/A

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- The name of the backup resource with the format: projects/{project}/locations/{region}/backups/{backupId} MigrationSource Subset of the source instance configuration that is available when reading the cluster resource.
- Continuous backup properties for this cluster. secondaryConfig object ( SecondaryConfig ) Cross Region replication config specific to SECONDARY cluster. primaryConfig object ( PrimaryConfig ) Output only.
- When this field is not specified, the backup will use the cluster's encryption config. location string The location where the backup will be stored.

### "Manage enhanced backups \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups](https://docs.cloud.google.com/alloydb/docs/backup/manage-enhanced-backups)
- Source ID: `site-docs-reference-2`
- Final score: 152
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate a backup plan with your AlloyDB cluster, run the following command: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID Replace the following: BPA ID : the backup plan association ID.
- Your cluster is enabled for enhanced backups using the associated backup plan's backup and retention settings. gcloud To associate the new backup plan with your cluster, follow these steps: gcloud backup-dr backup-plan-associations create BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --resource-type = alloydb.googleapis.com/Cluster \ --resource = projects/ WORKLOAD PROJECT ID /locations/ REGION /clusters/ CLUSTER ID \ --backup-plan = projects/ VAULT PROJECT ID /locations/ REGION /backupPlans/ BP ID \ Replace the following: BPA ID : the backup plan association ID.
- To find your cluster's data-source , run the following command: gcloud backup-dr data-source-references fetch-for-resource-type alloydb.googleapis.com/Cluster \ --location = REGION \ --project = WORKLOAD PROJECT ID \ --filter = 'dataSourceGcpResourceInfo.gcp resourcename="projects/ WORKLOAD PROJECT NUMBER /locations/ REGION /clusters/ CLUSTER ID "' Replace the following: REGION : the Google Cloud REGION–for example, us-central1 .
- Your on-demand backup is created. gcloud To perform an on-demand backup for a cluster with enhanced backups enabled, run the following command: gcloud backup-dr backup-plan-associations trigger-backup BPA ID \ --project = WORKLOAD PROJECT ID \ --location = REGION \ --backup-rule-id = RULE ID Replace the following: BPA ID : the backup plan association ID.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 142
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.
- At any time, you can restore from a backup to a new AlloyDB cluster that contains all the data from the original cluster at the moment of the backup's creation.
- Database administration AlloyDB manages the underlying infrastructure of your database, such as automated backups, security patches, and resource allocation.
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.

