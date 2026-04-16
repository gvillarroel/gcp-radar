---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T03:53:29.535Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Continuous backup and recovery"
feature_slug: "continuous-backup-and-recovery"
latest_feature_date: "2023-06-01"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/backup/configure"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
keywords:
  - "continuous"
  - "backup"
  - "recovery"
  - "lets"
  - "you"
  - "restore"
  - "cluster"
  - "point"
---

# Continuous backup and recovery

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

Continuous backup and recovery lets you restore cluster data from any point within a configurable recovery window; Continuous backup and recovery lets you recover cluster data from any moment within a configurable window.

## Extended Definition

Continuous backup and recovery lets you restore cluster data from any point within a configurable recovery window; Continuous backup and recovery lets you recover cluster data from any moment within a configurable window.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)

## Supporting Pages

### Configure backup plans \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/backup/configure](https://docs.cloud.google.com/alloydb/docs/backup/configure)
- Source ID: `site-docs-root`
- Final score: 228
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Disable continuous backup and recovery When you disable continuous backup, point-in-time recovery becomes unavailable for your cluster.
- It also has continuous backup enabled, with a 10-day recovery window. automatedBackupPolicy : enabled : true location : us - central1 weeklySchedule : daysOfWeek : - MONDAY - THURSDAY startTimes : - hours : 1 clusterType : PRIMARY continuousBackupConfig : enabled : true recoveryWindowDays : 10 continuousBackupInfo : encryptionInfo : encryptionType : GOOGLE DEFAULT ENCRYPTION schedule : - MONDAY - TUESDAY - WEDNESDAY - THURSDAY - FRIDAY - SATURDAY - SUNDAY clusterType : PRIMARY createTime : '2023-01-23T02:42:56.953258476Z' databaseVersion : POSTGRES 14 encryptionInfo : encryptionType : GOOGLE DEFAULT ENCRYPTION name : [ ... ] reconciling : false state : READY uid : [ ... ] updateTime : '2023-02-06T19:08:57.367222025Z' Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- Click Update . gcloud To re-enable your cluster's continuous backup configuration after disabling it, follow the same procedure as reconfiguring continuous backup , adding an --enable-continuous-backup argument to the gcloud CLI command: gcloud alloydb clusters update CLUSTER ID \ --enable-continuous-backup \ --continuous-backup-recovery-window-days = WINDOW LENGTH \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : The ID of the cluster.
- To configure continuous backup and recovery on a cluster, use the gcloud alloydb clusters update command. gcloud alloydb clusters update CLUSTER ID \ --continuous-backup-recovery-window-days = WINDOW LENGTH \ --region = REGION ID \ --project = PROJECT ID Replace the following: CLUSTER ID : The ID of the cluster.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 196
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Data backup and disaster recovery AlloyDB features a continuous backup and recovery system that lets you create a new cluster based on any point in time within an adjustable retention period.
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.
- At any time, you can restore from a backup to a new AlloyDB cluster that contains all the data from the original cluster at the moment of the backup's creation.
- Automatic memory and storage management systems take advantage of the Google-built, cloud-based environment that AlloyDB runs on, continuously allocating and releasing memory and storage as needed to keep your cluster running with optimal performance and resource efficiency.

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 182
- Re-rank relevance: WEAK
- Re-rank rationale: Fallback relevance because reranking failed.

Evidence snippets:
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.
- JSON representation { "enabledTime" : string , "backupPlanAssociation" : string , "dataSource" : string , "continuousBackupPreviouslyEnabled" : boolean , "continuousBackupPreviouslyEnabledTime" : string , "continuousBackupPreviousRecoveryWindowDays" : integer , "automatedBackupPreviouslyEnabled" : boolean , "logRetentionPeriod" : string , "disabledTime" : string } Fields enabledTime string ( Timestamp format) Time when the BackupDR protection for this cluster was enabled.
- If continuous backups and recovery was recently enabled, the earliest restorable time is the creation time of the earliest eligible backup within this cluster's continuous backup recovery window.

