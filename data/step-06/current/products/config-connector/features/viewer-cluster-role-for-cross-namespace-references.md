---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-13T14:23:05.236Z"
product_name: "Config Connector"
product_slug: "config-connector"
feature_name: "Viewer cluster role for cross-namespace references"
feature_slug: "viewer-cluster-role-for-cross-namespace-references"
latest_feature_date: "2021-04-08"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references"
  - "https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster"
  - "https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions"
keywords:
  - "cross"
  - "viewer"
  - "role"
  - "namespace"
  - "references"
  - "cluster"
---

# Viewer cluster role for cross-namespace references

Product: Config Connector
Coverage: MEDIUM

## Step 02 Summary

Config Connector provides a viewer cluster role that allows cross-namespace references in namespaced mode.

## Extended Definition

Config Connector provides a viewer cluster role that allows cross-namespace references in namespaced mode.

## Evidence Summary

Fast-mode lexical matching selected 3 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)

## Supporting Pages

### Creating resource references \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references](https://docs.cloud.google.com/config-connector/docs/how-to/creating-resource-references)
- Source ID: `site-docs-reference`
- Final score: 165
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- For example, if you want to create resources in NAMESPACE A that reference resources in NAMESPACE B , you need create the following RoleBinding : apiVersion : rbac.authorization.k8s.io/v1 kind : RoleBinding metadata : namespace : NAMESPACE B name : allow-references-from- NAMESPACE A roleRef : apiGroup : rbac.authorization.k8s.io kind : ClusterRole name : cnrm-viewer subjects : - kind : ServiceAccount name : cnrm-controller-manager- NAMESPACE A namespace : cnrm-system What's next Review the Resource reference to learn about the resources Config Connector supports.
- However, if Config Connector is installed in namespaced-mode , you need to grant Config Connector additional permissions to allow for cross-namespace references.
- Cross-namespace references Config Connector allows resources to reference resources in other namespaces.
- For example, the IAMPolicyMember below references a Project with the project ID test-project . apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : test-iampolicymember spec : member : serviceAccount:test-serviceaccount@test-project. iam.gserviceaccount.com role : roles/storage.admin resourceRef : kind : Project external : projects/test-project Note: You must set values for kind when using external references with IAMPolicy , IAMPartialPolicy and IAMPolicyMember .

### AlloyDBCluster \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster](https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/alloydb/alloydbcluster)
- Source ID: `site-docs-root`
- Final score: 140
- Re-rank relevance: N/A

Evidence snippets:
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbcluster-dep-secondary spec : location : australia-southeast1 networkConfig : networkRef : name : alloydbcluster-dep-secondary projectRef : external : ${PROJECT ID?} encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep1-secondary initialUser : user : "postgres" password : value : "postgres" --- apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbcluster-sample-secondary spec : location : australia-southeast2 networkConfig : networkRef : name : alloydbcluster-dep-secondary projectRef : external : ${PROJECT ID?} encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep2-secondary clusterType : "SECONDARY" secondaryConfig : primaryClusterNameRef : name : alloydbcluster-dep-secondary deletionPolicy : "FORCE" --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbcluster-dep-secondary spec : location : global addressType : INTERNAL networkRef : name : alloydbcluster-dep-secondary prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbcluster-dep-secondary --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : alloydbcluster-dep1-secondary spec : resourceRef : apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey name : alloydbcluster-dep1-secondary bindings : - role : roles/cloudkms.cryptoKeyEncrypterDecrypter members : - memberFrom : serviceIdentityRef : name : alloydbcluster-dep1-secondary --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : alloydbcluster-dep2-secondary spec : resourceRef : apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey name : alloydbcluster-dep2-secondary bindings : - role : roles/cloudkms.cryptoKeyEncrypterDecrypter members : - memberFrom : serviceIdentityRef : name : alloydbcluster-dep2-secondary --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey metadata : name : alloydbcluster-dep1-secondary spec : keyRingRef : name : alloydbcluster-dep1-secondary --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey metadata : name : alloydbcluster-dep2-secondary spec : keyRingRef : name : alloydbcluster-dep2-secondary --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : alloydbcluster-dep1-secondary spec : location : australia-southeast1 --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : alloydbcluster-dep2-secondary spec : location : australia-southeast2 --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbcluster-dep-secondary spec : networkRef : name : alloydbcluster-dep-secondary reservedPeeringRanges : - external : alloydbcluster-dep-secondary service : servicenetworking.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : ServiceIdentity metadata : name : alloydbcluster-dep1-secondary spec : projectRef : external : ${PROJECT ID?} resourceID : alloydb.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : ServiceIdentity metadata : name : alloydbcluster-dep2-secondary spec : projectRef : external : ${PROJECT ID?} resourceID : alloydb.googleapis.com Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
- See the License for the specific language governing permissions and limitations under the License. apiVersion : alloydb.cnrm.cloud.google.com/v1beta1 kind : AlloyDBCluster metadata : name : alloydbcluster-sample-regular spec : location : asia-south2 networkConfig : networkRef : name : alloydbcluster-dep-regular projectRef : external : ${PROJECT ID?} automatedBackupPolicy : backupWindow : 3600s encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep-regular enabled : true labels : source : kcc location : asia-south2 timeBasedRetention : retentionPeriod : 43200s weeklySchedule : daysOfWeek : [ MONDAY ] startTimes : - hours : 4 minutes : 0 seconds : 0 nanos : 0 encryptionConfig : kmsKeyNameRef : name : alloydbcluster-dep-regular maintenanceUpdatePolicy : maintenanceWindows : - day : WEDNESDAY startTime : hours : 12 minutes : 0 seconds : 0 nanos : 0 initialUser : user : "postgres" password : value : "Postgres123" --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeAddress metadata : name : alloydbcluster-dep-regular spec : location : global addressType : INTERNAL networkRef : name : alloydbcluster-dep-regular prefixLength : 16 purpose : VPC PEERING --- apiVersion : compute.cnrm.cloud.google.com/v1beta1 kind : ComputeNetwork metadata : name : alloydbcluster-dep-regular --- apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPartialPolicy metadata : name : alloydbcluster-dep-regular spec : resourceRef : apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey name : alloydbcluster-dep-regular bindings : - role : roles/cloudkms.cryptoKeyEncrypterDecrypter members : - memberFrom : serviceIdentityRef : name : alloydbcluster-dep-regular --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSCryptoKey metadata : labels : source : kcc-alloydbcluster-sample name : alloydbcluster-dep-regular spec : keyRingRef : name : alloydbcluster-dep-regular --- apiVersion : kms.cnrm.cloud.google.com/v1beta1 kind : KMSKeyRing metadata : name : alloydbcluster-dep-regular spec : location : asia-south2 --- apiVersion : servicenetworking.cnrm.cloud.google.com/v1beta1 kind : ServiceNetworkingConnection metadata : name : alloydbcluster-dep-regular spec : networkRef : name : alloydbcluster-dep-regular reservedPeeringRanges : - external : alloydbcluster-dep-regular service : servicenetworking.googleapis.com --- apiVersion : serviceusage.cnrm.cloud.google.com/v1beta1 kind : ServiceIdentity metadata : name : alloydbcluster-dep-regular spec : projectRef : external : ${PROJECT ID?} resourceID : alloydb.googleapis.com Restored From Backup Cluster Copyright 2023 Google LLC Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
- AlloyDBCluster Property Value Google Cloud Service Name AlloyDB for PostgreSQL Google Cloud Service Documentation /alloydb/docs/ Google Cloud REST Resource Name v1.projects.locations.clusters Google Cloud REST Resource Documentation /alloydb/docs/reference/rest/v1/projects.locations.clusters Config Connector Resource Short Names gcpalloydbcluster gcpalloydbclusters alloydbcluster Config Connector Service Name alloydb.googleapis.com Config Connector Resource Fully Qualified Name alloydbclusters.alloydb.cnrm.cloud.google.com Can Be Referenced by IAMPolicy/IAMPolicyMember No Config Connector Default Average Reconcile Interval In Seconds 600 Custom Resource Definition Properties Spec Schema automatedBackupPolicy : backupWindow : string enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string labels : string : string location : string quantityBasedRetention : count : integer timeBasedRetention : retentionPeriod : string weeklySchedule : daysOfWeek : - string startTimes : - hours : integer minutes : integer nanos : integer seconds : integer clusterType : string continuousBackupConfig : enabled : boolean encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string recoveryWindowDays : integer databaseVersion : string deletionPolicy : string displayName : string encryptionConfig : kmsKeyNameRef : external : string name : string namespace : string initialUser : password : value : string valueFrom : secretKeyRef : key : string name : string user : string location : string maintenanceUpdatePolicy : maintenanceWindows : - day : string startTime : hours : integer minutes : integer nanos : integer seconds : integer networkConfig : allocatedIpRange : string networkRef : external : string name : string namespace : string networkRef : external : string name : string namespace : string projectRef : external : string kind : string name : string namespace : string resourceID : string restoreBackupSource : backupNameRef : external : string name : string namespace : string restoreContinuousBackupSource : clusterRef : external : string name : string namespace : string pointInTime : string secondaryConfig : primaryClusterNameRef : external : string name : string namespace : string Fields automatedBackupPolicy Optional object The automated backup policy for this cluster.
- Should be in the format "https://www.googleapis.com/compute/{{version}}/projects/{{projectId}}/global/networks/{{networkId}}" or "projects/{{projectId}}/global/networks/{{networkId}}" networkRef.name Optional string The name of a ComputeNetwork resource. networkRef.namespace Optional string The namespace of a ComputeNetwork resource. projectRef Required object The project that this resource belongs to. projectRef.external Optional string The projectID field of a project, when not managed by Config Connector. projectRef.kind Optional string The kind of the Project resource; optional but must be Project if provided. projectRef.name Optional string The name field of a Project resource. projectRef.namespace Optional string The namespace field of a Project resource. resourceID Optional string The AlloyDBCluster name.

### Access control with IAM \_|\_ Config Connector \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions](https://docs.cloud.google.com/config-connector/docs/how-to/configure-iam-permissions)
- Source ID: `site-docs-reference`
- Final score: 120
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Organization owner permission To expand Config Connector's permissions so it can manage all projects and folders for a given organization, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Organization external : ORGANIZATION ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role ORGANIZATION ID with your organization ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- Folder owner permission To expand Config Connector's permissions so it can manage all projects and folders in a given folder, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Folder external : folders/ FOLDER ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role FOLDER ID with your folder ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- Project owner permissions To allow Config Connector to manage a specific project's resources, complete the following steps: Create the following YAML manifest: apiVersion : iam.cnrm.cloud.google.com/v1beta1 kind : IAMPolicyMember metadata : name : iampolicymember-orglevel-permission namespace : NAMESPACE spec : member : serviceAccount: SERVICE ACCOUNT NAME @ HOST PROJECT ID . iam.gserviceaccount.com role : roles/owner resourceRef : kind : Project external : projects/ PROJECT ID Replace the following: NAMESPACE with the name of your namespace SERVICE ACCOUNT NAME with your service account name HOST PROJECT ID with the host project ID of your service account roles/owner with the appropriate role PROJECT ID with your target project ID Apply the YAML manifest to your cluster using kubectl or any config management tools of your choice.
- This service account must be configured to bind to the Config Connector installation through either cluster mode or namespaced mode.

