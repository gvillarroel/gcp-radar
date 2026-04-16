---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.967Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "C3 machine type support"
feature_slug: "c3-machine-type-support"
latest_feature_date: "2026-02-19"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/available-machine-types"
  - "https://docs.cloud.google.com/workstations/docs/available-gpus"
  - "https://docs.cloud.google.com/workstations/docs/custom-constraints"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
keywords:
  - "c3"
  - "machine"
  - "type"
  - "workstations"
  - "supports"
  - "selecting"
  - "types"
  - "in"
---

# C3 machine type support

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports selecting C3 machine types in the Google Cloud console, with Hyperdisk automatically chosen for this machine series.

## Extended Definition

Cloud Workstations supports selecting C3 machine types in the Google Cloud console, with Hyperdisk automatically chosen for this machine series.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)

## Supporting Pages

### Available machine types \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-machine-types](https://docs.cloud.google.com/workstations/docs/available-machine-types)
- Source ID: `site-docs-root-2`
- Final score: 296
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage c3-standard-4 4 16 GB c3-standard-8 8 32 GB c3-standard-22 22 88 GB c3-standard-44 44 176 GB c3-standard-88 88 352 GB c3-standard-176 176 704 GB A2 Standard machine types These machine types have a fixed number of A100 40GB GPUs .
- Workstation machine type Virtual CPUs Memory Confidential compute GPU acceleration Persistent Storage t2d-standard-60 60 240 GB C3 machine types For more information, see the Compute Engine description of the C3 machine series .
- Home Documentation Application development Cloud Workstations Guides Send feedback Available machine types Stay organized with collections Save and categorize content based on your preferences.
- This page lists available machine types for Cloud Workstations.

### Available GPUs \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/available-gpus](https://docs.cloud.google.com/workstations/docs/available-gpus)
- Source ID: `site-docs-root-2`
- Final score: 204
- Re-rank relevance: N/A

Evidence snippets:
- Using Google Cloud Hyperdisk disk types is only supported on these following machine series: A3 C3 C4 G4 M3 N4 N4D Z3 Supported GPU models Cloud Workstations supports many of the GPU models that Compute Engine makes available.
- Limitations A workstation configuration may specify GPUs, subject to the following limitations: Cloud Workstations only supports GPUs for configurations that specify machine types in the N1 machine series , the A2 machine series , or the A3 machine series .
- GPU model Machine type GPU count NVIDIA A100 40GB ( nvidia-tesla-a100 ) a2-highgpu-1g 1 GPU a2-highgpu-2g 2 GPUs a2-highgpu-4g 4 GPUs a2-highgpu-8g 8 GPUs a2-megagpu-16g 16 GPUs Cloud Workstations does not support A2 ultra machine types.
- N1 machine series The N1 general-purpose machine series supports several GPU models, and workstation configurations that specify any of the N1 machine types can also specify one of the following GPU models.

### Create custom constraints for Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/custom-constraints](https://docs.cloud.google.com/workstations/docs/custom-constraints)
- Source ID: `site-docs-root-2`
- Final score: 203
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource Field workstations.googleapis.com/Workstation resource.annotations resource.displayName resource.env resource.name resource.sourceWorkstation workstations.googleapis.com/WorkstationCluster resource.annotations resource.displayName resource.domainConfig.domain resource.name resource.network resource.privateClusterConfig.allowedProjects resource.privateClusterConfig.enablePrivateEndpoint resource.subnetwork resource.tags workstations.googleapis.com/WorkstationConfig resource.allowedPorts.first resource.allowedPorts.last resource.annotations resource.container.args resource.container.command resource.container.env resource.container.image resource.container.runAsUser resource.container.workingDir resource.disableTcpConnections resource.displayName resource.enableAuditAgent resource.encryptionKey.kmsKey resource.encryptionKey.kmsKeyServiceAccount resource.ephemeralDirectories.gcePd.diskType resource.ephemeralDirectories.gcePd.readOnly resource.ephemeralDirectories.gcePd.sourceImage resource.ephemeralDirectories.gcePd.sourceSnapshot resource.ephemeralDirectories.mountPath resource.grantWorkstationAdminRoleOnCreate resource.host.gceInstance.accelerators.count resource.host.gceInstance.accelerators.type resource.host.gceInstance.boostConfigs.accelerators.count resource.host.gceInstance.boostConfigs.accelerators.type resource.host.gceInstance.boostConfigs.bootDiskSizeGb resource.host.gceInstance.boostConfigs.enableNestedVirtualization resource.host.gceInstance.boostConfigs.machineType resource.host.gceInstance.boostConfigs.poolSize resource.host.gceInstance.bootDiskSizeGb resource.host.gceInstance.confidentialInstanceConfig.enableConfidentialCompute resource.host.gceInstance.disablePublicIpAddresses resource.host.gceInstance.disableSsh resource.host.gceInstance.enableNestedVirtualization resource.host.gceInstance.machineType resource.host.gceInstance.poolSize resource.host.gceInstance.serviceAccount resource.host.gceInstance.serviceAccountScopes resource.host.gceInstance.shieldedInstanceConfig.enableIntegrityMonitoring resource.host.gceInstance.shieldedInstanceConfig.enableSecureBoot resource.host.gceInstance.shieldedInstanceConfig.enableVtpm resource.host.gceInstance.tags resource.host.gceInstance.vmTags resource.idleTimeout resource.maxUsableWorkstations resource.name resource.persistentDirectories.gcePd.diskType resource.persistentDirectories.gcePd.fsType resource.persistentDirectories.gcePd.reclaimPolicy resource.persistentDirectories.gcePd.sizeGb resource.persistentDirectories.gcePd.sourceSnapshot resource.persistentDirectories.mountPath resource.readinessChecks.path resource.readinessChecks.port resource.replicaZones resource.runningTimeout What's next Learn more about Organization Policy Service .
- Description Constraint syntax Require Workstation clusters to enable private gateway endpoint. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : "resource.privateClusterConfig.enablePrivateEndpoint == true" actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint Require Workstation configs to disable TCP connections. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableTcpConnections resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.disableTcpConnections == true" actionType : ALLOW displayName : Require workstation configs to disable TCP connections description : All workstation configs must disable TCP connections Require Workstation configs to disable SSH access to workstation VMs. name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationConfigDisableSsh resourceTypes : - workstations.googleapis.com/WorkstationConfig methodTypes : - CREATE - UPDATE condition : "resource.host.gceInstance.disableSsh == true" actionType : ALLOW displayName : Require workstation configs to disable SSH access to workstation VMs description : All workstation configs must disable SSH access to workstation VMs Cloud Workstations supported resources The following table lists the Cloud Workstations resources that you can reference in custom constraints.
- Before you begin, you must know the following: Your organization ID A project ID Create the constraint Save the following file as constraint-ws-private-gateway.yaml : name : organizations/ ORGANIZATION ID /customConstraints/custom.workstationsPrivateGatewayClusters resourceTypes : - workstations.googleapis.com/WorkstationCluster methodTypes : - CREATE - UPDATE condition : resource.privateClusterConfig.enablePrivateEndpoint == true actionType : ALLOW displayName : Require workstation cluster to enable private gateway endpoint description : All workstation clusters must enable private gateway endpoint This defines a constraint where for every new workstation cluster, if the public gateway is enabled, the operation is denied.
- Apply the constraint: gcloud org-policies set-custom-constraint /constraint-ws-private-gateway.yaml Verify that the constraint exists: gcloud org-policies list-custom-constraints --organization = ORGANIZATION ID The output is similar to the following: CUSTOM CONSTRAINT ACTION TYPE METHOD TYPES RESOURCE TYPES DISPLAY NAME custom.workstationsPrivateGatewayClusters DENY CREATE,UPDATE workstations.googleapis.com/WorkstationCluster Require workstation cluster to enable private gateway endpoint ...

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 193
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.
- DeleteWorkstationClusterRequest ( name="name value", ) Make the request operation = client. delete workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.DeleteWorkstationClusterRequest , dict]] The request object.

