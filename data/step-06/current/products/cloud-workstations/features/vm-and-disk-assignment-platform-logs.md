---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.983Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "VM and disk assignment platform logs"
feature_slug: "vm-and-disk-assignment-platform-logs"
latest_feature_date: "2023-03-20"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/architecture"
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/overview"
  - "https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient"
keywords:
  - "vm"
  - "and"
  - "disk"
  - "assignment"
  - "platform"
  - "logs"
  - "workstations"
  - "writes"
---

# VM and disk assignment platform logs

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations writes vm_assignments and disk_assignments platform logs to Cloud Logging for newly created clusters.

## Extended Definition

Cloud Workstations writes vm_assignments and disk_assignments platform logs to Cloud Logging for newly created clusters.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/overview](https://docs.cloud.google.com/workstations/docs/overview)
- [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)

## Supporting Pages

### Cloud Workstations architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 181
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Resource pooling Administrators and platform teams can optionally pool VMs and persistent disks for faster workstation startup using the pool size workstation configuration option.
- Cloud Workstations manages Google Cloud resources, such as Compute Engine VMs and persistent disks (PDs), to give you more visibility and control over your projects' resources.
- When specified, the service pools the specified number of persistent disks and VMs and pre-pulls the container image onto the VM before workstation assignment.
- When the session ends, Cloud Workstations deletes the VM but detaches and retains the persistent disk so that it can be used in future workstation sessions.

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 171
- Re-rank relevance: N/A

Evidence snippets:
- This page describes the workstation configuration parameters that allow you to customize the Cloud Workstations environment, including the VM type , home disk size, base container image, and more.
- If not set, VMs run with a service account provided by the Cloud Workstations service, and the image must be publicly accessible. serviceAccountScopes[] string Optional.
- It creates a persistent disk that mounts to the workstation VM at /home when the session starts and detaches when the session ends.
- Specifies the zones used to replicate the VM and disk resources within the region.

### Cloud Workstations overview \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/overview](https://docs.cloud.google.com/workstations/docs/overview)
- Source ID: `site-docs-root`
- Final score: 158
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Workstations can be started or stopped on demand, and run on Compute Engine VMs in your project, with a persistent disk attached to store data between sessions.
- Additionally, administrators and platform teams can configure an idle timeout or running timeout in the workstation configuration to help make sure that workstations shut down when they are no longer used, which reduces costs.
- Administrators and platform teams can configure an idle timeout or running timeout in the workstation configuration to help make sure that workstations synchronize with configuration updates within a bounded period of time.
- Cloud Workstations Concepts Workstation lifecycle Workstations run on ephemeral Compute Engine VMs, and can be started or stopped on demand to improve cost savings.

### "Class WorkstationsAsyncClient (0.8.0) \_|\_ Python client libraries \_|\_\

- URL: [https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient](https://docs.cloud.google.com/python/docs/reference/workstations/latest/google.cloud.workstations_v1.services.workstations.WorkstationsAsyncClient)
- Source ID: `site-python-reference`
- Final score: 155
- Re-rank relevance: N/A

Evidence snippets:
- Administrators and platform teams can also use Identity and Access Management (IAM) rules to grant access to teams or to individual developers. workstation cluster path workstation cluster path ( project : str , location : str , workstation cluster : str ) - > str Returns a fully-qualified workstation cluster string. workstation config path workstation config path ( project : str , location : str , workstation cluster : str , workstation config : str ) - > str Returns a fully-qualified workstation config string. workstation path workstation path ( project : str , location : str , workstation cluster : str , workstation config : str , workstation : str , ) - > str Returns a fully-qualified workstation string.
- CreateWorkstationClusterRequest ( parent="parent value", workstation cluster id="workstation cluster id value", ) Make the request operation = client. create workstation cluster (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationClusterRequest , dict]] The request object.
- CreateWorkstationConfigRequest ( parent="parent value", workstation config id="workstation config id value", ) Make the request operation = client. create workstation config (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationConfigRequest , dict]] The request object.
- CreateWorkstationRequest ( parent="parent value", workstation id="workstation id value", ) Make the request operation = client. create workstation (request=request) print("Waiting for operation to complete...") response = (await operation).result() Handle the response print(response) Parameters Name Description request Optional[Union[ google.cloud.workstations v1.types.CreateWorkstationRequest , dict]] The request object.

