---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.050Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "AlloyDBCluster continuous backup"
feature_slug: "alloydbcluster-continuous-backup"
latest_feature_date: "2023-09-06"
deprecation_date: ""
coverage_status: "LOW"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources"
keywords:
  - "continuous"
  - "alloydbcluster"
  - "configuration"
  - "backup"
  - "supports"
  - "status"
---

# AlloyDBCluster continuous backup

Product: Config Connector
Coverage: LOW

## Step 02 Summary

Config Connector supports continuous backup configuration and status reporting on AlloyDBCluster resources.

## Extended Definition

Config Connector supports continuous backup configuration and status reporting on AlloyDBCluster resources.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)

## Supporting Pages

### AlloyDBCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- Source ID: `site-docs-root`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- AlloyDBCluster Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpalloydbcluster gcpalloydbclusters alloydbcluster Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbclusters.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema automatedBackupPolicy : backupWindow : string enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string labels : string : string location : string quantityBasedRetention : count : integer timeBasedRetention : retentionPeriod : string weeklySchedule : daysOfWeek : - string startTimes : - hours : integer minutes : integer nanos : integer seconds : integer clusterType : string continuousBackupConfig : enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string recoveryWindowDays : integer databaseVersion : string deletionPolicy : string displayName : string encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string initialUser : password : value : string valueFrom : secretKeyRef : key : string name : string user : string location : string maintenanceUpdatePolicy : maintenanceWindows : - day : string startTime : hours : integer minutes : integer nanos : integer seconds : integer networkConfig : allocatedIpRange : string networkRef : external : string name : string namespace : string networkRef : external : string name : string namespace : string projectRef : external : string kind : string name : string namespace : string resourceID : string restoreBackupSource : backupNameRef : external : string name : string namespace : string restoreContinuousBackupSource : clusterRef : external : string name : string namespace : string pointInTime : string secondaryConfig : primaryClusterNameRef : external : string name : string namespace : string Fields automatedBackupPolicy Optional object The automated backup policy for this cluster.
- Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}". restoreContinuousBackupSource.clusterRef.name Optional string The name of a AlloyDBCluster resource. restoreContinuousBackupSource.clusterRef.namespace Optional string The namespace of a AlloyDBCluster resource. restoreContinuousBackupSource.pointInTime Required string Immutable.
- Conflicts with 'restoreBackupSource', both can't be set together. restoreContinuousBackupSource.clusterRef Required object (Required) The name of the source cluster that this cluster is restored from. restoreContinuousBackupSource.clusterRef.external Optional string A reference to an externally managed AlloyDBCluster resource.
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbcluster-sample-regular spec : location : asia-south2 networkConfig : networkRef : name : alloydbcluster-dep-regular projectRef : external : ${PROJECT ID?} automatedBackupPolicy : backupWindow : 3600s encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep-regular enabled : true labels : source : kcc location : asia-south2 timeBasedRetention : retentionPeriod : 43200s weeklySchedule : daysOfWeek : [ MONDAY ] startTimes : - hours : 4 minutes : 0 seconds : 0 nanos : 0 encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep-regular maintenanceUpdatePolicy : maintenanceWindows : - day : WEDNESDAY startTime : hours : 12 minutes : 0 seconds : 0 nanos : 0 initialUser : user : "postgres" password : value : "Postgres123" --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbcluster-dep-regular spec : location : global addressType : INTERNAL networkRef : name : alloydbcluster-dep-regular prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbcluster-dep-regular --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : alloydbcluster-dep-regular spec : resourceRef : apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey name : alloydbcluster-dep-regular bindings : - role : roles/cloudkms.cryptoKeyEncrypterDecrypter members : - memberFrom : serviceIdentityRef : name : alloydbcluster-dep-regular --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey metadata : labels : source : kcc-alloydbcluster-sample name : alloydbcluster-dep-regular spec : keyRingRef : name : alloydbcluster-dep-regular --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : alloydbcluster-dep-regular spec : location : asia-south2 --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbcluster-dep-regular spec : networkRef : name : alloydbcluster-dep-regular reservedPeeringRanges : - external : alloydbcluster-dep-regular service : servicenetworking.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : ServiceIdentity metadata : name : alloydbcluster-dep-regular spec : projectRef : external : ${PROJECT ID?} resourceID : alloydb.googleapis.com Restored From Backup Cluster Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

### AlloyDBCluster | Config Connector | Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- Source ID: `feature-recovery-http`
- Final score: 35
- Re-rank relevance: N/A

Evidence snippets:
- Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}". secondaryConfig.primaryClusterNameRef.name Optional string The name of a AlloyDBCluster resource. secondaryConfig.primaryClusterNameRef.namespace Optional string The namespace of a AlloyDBCluster resource. * Field is required when parent field is specified Status Schema backupSource : - backupName : string conditions : - lastTransitionTime : string message : string reason : string status : string type : string continuousBackupInfo : - earliestRestorableTime : string enabledTime : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string schedule : - string databaseVersion : string encryptionInfo : - encryptionType : string kmsKeyVersions : - string externalRef : string migrationSource : - hostPort : string referenceId : string sourceType : string name : string observedGeneration : integer observedState : clusterType : string databaseVersion : string uid : string Fields backupSource list (object) Output only.
- AlloyDBCluster Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpalloydbcluster gcpalloydbclusters alloydbcluster Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbclusters.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema automatedBackupPolicy : backupWindow : string enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string labels : string : string location : string quantityBasedRetention : count : integer timeBasedRetention : retentionPeriod : string weeklySchedule : daysOfWeek : - string startTimes : - hours : integer minutes : integer nanos : integer seconds : integer clusterType : string continuousBackupConfig : enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string recoveryWindowDays : integer databaseVersion : string deletionPolicy : string displayName : string encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string initialUser : password : value : string valueFrom : secretKeyRef : key : string name : string user : string location : string maintenanceUpdatePolicy : maintenanceWindows : - day : string startTime : hours : integer minutes : integer nanos : integer seconds : integer networkConfig : allocatedIpRange : string networkRef : external : string name : string namespace : string networkRef : external : string name : string namespace : string projectRef : external : string kind : string name : string namespace : string resourceID : string restoreBackupSource : backupNameRef : external : string name : string namespace : string restoreContinuousBackupSource : clusterRef : external : string name : string namespace : string pointInTime : string secondaryConfig : primaryClusterNameRef : external : string name : string namespace : string Fields automatedBackupPolicy Optional object The automated backup policy for this cluster.
- Should be in the format "projects/{{projectID}}/locations/{{location}}/clusters/{{clusterID}}". restoreContinuousBackupSource.clusterRef.name Optional string The name of a AlloyDBCluster resource. restoreContinuousBackupSource.clusterRef.namespace Optional string The namespace of a AlloyDBCluster resource. restoreContinuousBackupSource.pointInTime Required* string Immutable.
- Conflicts with 'restoreBackupSource', both can't be set together. restoreContinuousBackupSource.clusterRef Required* object (Required) The name of the source cluster that this cluster is restored from. restoreContinuousBackupSource.clusterRef.external Optional string A reference to an externally managed AlloyDBCluster resource.

### "Securing access to resources with IAM \_|\_ Config Connector \_|\_ Google\

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources](https://docs.cloud.google.com/config-connector/docs/how-to/securing-access-to-resources)
- Source ID: `site-docs-reference`
- Final score: 34
- Re-rank relevance: N/A

