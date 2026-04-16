---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.985Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Customer-managed encryption keys for persistent disks"
feature_slug: "customer-managed-encryption-keys-for-persistent-disks"
latest_feature_date: "2023-02-07"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek"
  - "https://docs.cloud.google.com/workstations/docs/custom-constraints"
  - "https://docs.cloud.google.com/workstations/docs/create-configuration"
keywords:
  - "customer"
  - "managed"
  - "encryption"
  - "keys"
  - "for"
  - "persistent"
  - "disks"
  - "workstations"
---

# Customer-managed encryption keys for persistent disks

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports protecting persistent disks with customer-managed encryption keys.

## Extended Definition

Cloud Workstations supports protecting persistent disks with customer-managed encryption keys.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- [https://docs.cloud.google.com/workstations/docs/create-configuration](https://docs.cloud.google.com/workstations/docs/create-configuration)

## Supporting Pages

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 243
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- If the customer-managed encryption key is rotated, when the workstation instance is stopped, the system attempts to recreate the persistent disk with the new version of the key.
- CustomerEncryptionKey A customer-managed encryption key (CMEK) for the Compute Engine resources of the associated workstation configuration.

### "Encrypt workstation resources using CMEK \_|\_ Cloud Workstations \_|\_\

- URL: [https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek](https://docs.cloud.google.com/workstations/docs/encrypt-workstation-resources-using-cmek)
- Source ID: `site-docs-root-2`
- Final score: 223
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Rotate customer-managed encryption keys When you granted the Cloud Workstations Service Agent Cloud KMS Viewer role ( roles/cloudkms.viewer ) on the CMEK key, the workstation service is able to detect key rotation and re-encrypt your home disk using the new primary key version.
- If you want to control your encryption keys, then you can use customer-managed encryption keys (CMEKs) in Cloud KMS with CMEK-integrated services including Cloud Workstations.
- By default, Cloud Workstations uses a Google-owned and Google-managed encryption key to encrypt workstation resources such as VMs and persistent disks when data is at rest .
- Set up a Cloud KMS Key Service Account Cloud Workstations uses a service account of your choosing to perform encryption and decryption with your customer-managed key.

### Create custom constraints for Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 195
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field workstations.googleapis.com/Workstation resource.annotations resource.displayName resource.env resource.name resource.sourceWorkstation workstations.googleapis.com/WorkstationCluster resource.annotations resource.displayName resource.domainConfig.domain resource.name resource.network resource.privateClusterConfig.allowedProjects resource.privateClusterConfig.enablePrivateEndpoint resource.subnetwork resource.tags workstations.googleapis.com/WorkstationConfig resource.allowedPorts.first resource.allowedPorts.last resource.annotations resource.container.args resource.container.command resource.container.env resource.container.image resource.container.runAsUser resource.container.workingDir resource.disableTcpConnections resource.displayName resource.enableAuditAgent resource.encryptionKey.kmsKey resource.encryptionKey.kmsKeyServiceAccount resource.ephemeralDirectories.gcePd.diskType resource.ephemeralDirectories.gcePd.readOnly resource.ephemeralDirectories.gcePd.sourceImage resource.ephemeralDirectories.gcePd.sourceSnapshot resource.ephemeralDirectories.mountPath resource.grantWorkstationAdminRoleOnCreate resource.host.gceInstance.accelerators.count resource.host.gceInstance.accelerators.type resource.host.gceInstance.boostConfigs.accelerators.count resource.host.gceInstance.boostConfigs.accelerators.type resource.host.gceInstance.boostConfigs.bootDiskSizeGb resource.host.gceInstance.boostConfigs.enableNestedVirtualization resource.host.gceInstance.boostConfigs.machineType resource.host.gceInstance.boostConfigs.poolSize resource.host.gceInstance.bootDiskSizeGb resource.host.gceInstance.confidentialInstanceConfig.enableConfidentialCompute resource.host.gceInstance.disablePublicIpAddresses resource.host.gceInstance.disableSsh resource.host.gceInstance.enableNestedVirtualization resource.host.gceInstance.machineType resource.host.gceInstance.poolSize resource.host.gceInstance.serviceAccount resource.host.gceInstance.serviceAccountScopes resource.host.gceInstance.shieldedInstanceConfig.enableIntegrityMonitoring resource.host.gceInstance.shieldedInstanceConfig.enableSecureBoot resource.host.gceInstance.shieldedInstanceConfig.enableVtpm resource.host.gceInstance.tags resource.host.gceInstance.vmTags resource.idleTimeout resource.maxUsableWorkstations resource.name resource.persistentDirectories.gcePd.diskType resource.persistentDirectories.gcePd.fsType resource.persistentDirectories.gcePd.reclaimPolicy resource.persistentDirectories.gcePd.sizeGb resource.persistentDirectories.gcePd.sourceSnapshot resource.persistentDirectories.mountPath resource.readinessChecks.path resource.readinessChecks.port resource.replicaZones resource.runningTimeout What's next Learn more about Organization Policy Service .
- Test the policy To test the policy on a workstation cluster with public gateway, create a cluster: gcloud workstations clusters create CLUSTER --region = REGION Replace the following: CLUSTER : the cluster ID—for example, public-gateway-cluster REGION : the region ID—for example, us-central1 The output will be similar to the following: Operation denied by custom org policies: ["customConstraints/custom.workstationsPrivateGatewayClusters": "All workstation clusters must enable private gateway endpoint"] To create a cluster successfully, add the --enable-private-endpoint flag to the gcloud workstations clusters create command: gcloud workstations clusters create CLUSTER --region = REGION --enable-private-endpoint Example custom organization policies for common use cases This table provides syntax examples for some common custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-ws-private-gateway.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : resource.privateClusterConfig.enablePrivateEndpoint == true actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint This defines a constraint where for every new workstation cluster, if the public gateway is enabled, the operation is denied.
- Apply the policy: gcloud org-policies set-policy /policy-ws-private-gateway.yaml Verify that the policy exists: gcloud org-policies list --project = PROJECT ID The output is similar to the following: CONSTRAINT LIST POLICY BOOLEAN POLICY ETAG custom.workstationsPrivateGatewayClusters - SET COCsm5QGENiXi2E= After you apply the policy, wait for about two minutes for Google Cloud to start enforcing the policy.

### "Create a workstation configuration \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/create-configuration](https://docs.cloud.google.com/workstations/docs/create-configuration)
- Source ID: `site-docs-root`
- Final score: 186
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Choosing Retain allows administrators to audit the content of workstation home disks after the workstations are deleted, but administrators are responsible for manually deleting the disk.
- By default, Cloud Workstations encrypts resources created with this workstation configuration using a Google-owned and Google-managed encryption key .
- To use a customer-managed encryption key instead, select Use customer-managed encryption key (CMEK) .
- This section explains the four steps of creating a workstation configuration: Configure basics Define machine settings Customize the environment Add users To follow step-by-step guidance for this task directly in the Google Cloud console, click Guide me : Guide me Before you begin Before you begin using Cloud Workstations, be sure that you have the required permissions and that you complete these required setup steps.

