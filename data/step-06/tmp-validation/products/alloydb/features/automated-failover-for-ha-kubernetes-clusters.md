---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-14T00:15:29.160Z"
product_name: "AlloyDB"
product_slug: "alloydb"
feature_name: "Automated failover for HA Kubernetes clusters"
feature_slug: "automated-failover-for-ha-kubernetes-clusters"
latest_feature_date: "2024-02-29"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters"
  - "https://docs.cloud.google.com/alloydb/docs/overview"
  - "https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes"
keywords:
  - "automated"
  - "failover"
  - "kubernetes"
  - "clusters"
  - "supports"
  - "omni"
---

# Automated failover for HA Kubernetes clusters

Product: AlloyDB
Coverage: MEDIUM

## Step 02 Summary

AlloyDB Omni supports automated failover for highly available Kubernetes-based clusters.

## Extended Definition

AlloyDB Omni supports automated failover for highly available Kubernetes-based clusters.

## Evidence Summary

Fallback definition because synthesis failed; coverage was derived from supporting-page quality.

## Source Links

- [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)

## Supporting Pages

### "REST Resource: projects.locations.clusters \_|\_ AlloyDB for PostgreSQL\

- URL: [https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters](https://docs.cloud.google.com/alloydb/docs/reference/rest/v1/projects.locations.clusters)
- Source ID: `site-iam-reference`
- Final score: 116
- Re-rank relevance: N/A

Evidence snippets:
- If used in clusters.restore this is ignored. automatedBackupPolicy object ( AutomatedBackupPolicy ) The automated backup policy for this cluster.
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "createTime" : string , "updateTime" : string , "deleteTime" : string , "labels" : { string : string , ... } , "state" : enum ( State ) , "clusterType" : enum ( ClusterType ) , "databaseVersion" : enum ( DatabaseVersion ) , "networkConfig" : { object ( NetworkConfig ) } , "network" : string , "etag" : string , "annotations" : { string : string , ... } , "reconciling" : boolean , "initialUser" : { object ( UserPassword ) } , "automatedBackupPolicy" : { object ( AutomatedBackupPolicy ) } , "sslConfig" : { object ( SslConfig ) } , "encryptionConfig" : { object ( EncryptionConfig ) } , "encryptionInfo" : { object ( EncryptionInfo ) } , "continuousBackupConfig" : { object ( ContinuousBackupConfig ) } , "continuousBackupInfo" : { object ( ContinuousBackupInfo ) } , "secondaryConfig" : { object ( SecondaryConfig ) } , "primaryConfig" : { object ( PrimaryConfig ) } , "satisfiesPzs" : boolean , "pscConfig" : { object ( PscConfig ) } , "maintenanceUpdatePolicy" : { object ( MaintenanceUpdatePolicy ) } , "maintenanceSchedule" : { object ( MaintenanceSchedule ) } , "subscriptionType" : enum ( SubscriptionType ) , "trialMetadata" : { object ( TrialMetadata ) } , "tags" : { string : string , ... } , "backupdrInfo" : { object ( BackupDrInfo ) } , "dataplexConfig" : { object ( DataplexConfig ) } , // Union field source can be only one of the following: "backupSource" : { object ( BackupSource ) } , "migrationSource" : { object ( MigrationSource ) } , "cloudsqlBackupRunSource" : { object ( CloudSQLBackupRunSource ) } , "backupdrBackupSource" : { object ( BackupDrBackupSource ) } // End of list of possible types for union field source . // Union field maintenance version can be only one of the following: "maintenanceVersionSelectionPolicy" : enum ( MaintenanceVersionSelectionPolicy ) // End of list of possible types for union field maintenance version . } Fields name string Output only.
- Methods create Creates a new Cluster in a given project and location. createsecondary Creates a cluster of type SECONDARY in the given location using the primary cluster as the source. delete Deletes a single Cluster. export Exports data from the cluster. get Gets details of a single Cluster. import Imports data to the cluster. list Lists Clusters in a given project and location. patch Updates the parameters of a single Cluster. promote Promotes a SECONDARY cluster. restore Creates a new Cluster in a given project and location, with a volume restored from the provided source, either a backup ID or a point-in-time and a source cluster. restoreFromCloudSQL Restores an AlloyDB cluster from a CloudSQL resource. switchover Switches the roles of PRIMARY and SECONDARY clusters without any data loss. upgrade Upgrades a single Cluster.
- Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" . continuousBackupPreviousRecoveryWindowDays integer The retention set for the continuous backup that was previously enabled prior to enabling BackupDR protection for this cluster. automatedBackupPreviouslyEnabled boolean Whether automated backup was previously enabled prior to enabling BackupDR protection for this cluster. logRetentionPeriod string ( Duration format) The retention period for logs generated by BackupDR for this cluster.

### AlloyDB overview \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/alloydb/docs/overview](https://docs.cloud.google.com/alloydb/docs/overview)
- Source ID: `site-api-reference`
- Final score: 102
- Re-rank relevance: N/A

Evidence snippets:
- You can focus on your data and let AlloyDB handle the following operations: Backups: protect your data with on-demand and automated scheduled backups, and a continuous recovery system that enables point-in-time recovery.
- High availability By default, an AlloyDB cluster offers availability (HA) through its primary instance's redundant nodes, located in two different zones, with automatic failover.
- Database administration AlloyDB manages the underlying infrastructure of your database, such as automated backups, security patches, and resource allocation.
- As a further method of disaster recovery, you can achieve cross-region replication by creating secondary clusters in separate Google Cloud regions.

### "Connect from Google Kubernetes Engine (GKE) to AlloyDB for PostgreSQL \_\

- URL: [https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes](https://docs.cloud.google.com/alloydb/docs/quickstart/integrate-kubernetes)
- Source ID: `site-docs-reference`
- Final score: 95
- Re-rank relevance: N/A

Evidence snippets:
- The gcloud CLI provides the primary command-line interface for Google Cloud. kubectl provides the primary command-line interface for running commands against Kubernetes clusters.
- Console In the Google Cloud console, go to the Kubernetes Clusters page.
- Go to Kubernetes Clusters Click Create .
- Create a Kubernetes service account for your sample application: kubectl apply -f service-account.yaml Grant permissions for your Kubernetes service account to impersonate the Google service account by creating an IAM policy binding between the two service accounts: gcloud iam service-accounts add-iam-policy-binding \ --role = "roles/iam.workloadIdentityUser" \ --member = "serviceAccount: PROJECT ID .svc.id.goog[default/ KSA NAME ]" \ GSA NAME @ PROJECT ID .iam.gserviceaccount.com Add the iam.gke.io/gcp-service-account= GSA NAME @ PROJECT ID annotation to the Kubernetes service account, using the email address of the Google service account: kubectl annotate serviceaccount \ KSA NAME \ iam.gke.io/gcp-service-account = GSA NAME @ PROJECT ID .iam.gserviceaccount.com Populate the Artifact Registry with an image of the sample application To build a container image of the sample application and push it to a repository, complete the following steps.

