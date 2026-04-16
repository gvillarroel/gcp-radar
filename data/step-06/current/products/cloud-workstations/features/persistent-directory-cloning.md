---
schema_version: "step-06-extended-feature-definitions-v1"
generated_at: "2026-04-12T12:12:51.970Z"
product_name: "Cloud Workstations"
product_slug: "cloud-workstations"
feature_name: "Persistent directory cloning"
feature_slug: "persistent-directory-cloning"
latest_feature_date: "2025-01-09"
deprecation_date: ""
coverage_status: "MEDIUM"
source_links:
  - "https://docs.cloud.google.com/workstations/docs/customize-development-environment"
  - "https://docs.cloud.google.com/workstations/docs/clone-workstation"
  - "https://docs.cloud.google.com/workstations/docs/write-code-gemini"
  - "https://docs.cloud.google.com/workstations/docs/architecture"
keywords:
  - "persistent"
  - "directory"
  - "cloning"
  - "workstations"
  - "supports"
  - "directories"
  - "from"
  - "source"
---

# Persistent directory cloning

Product: Cloud Workstations
Coverage: MEDIUM

## Step 02 Summary

Cloud Workstations supports cloning persistent directories from a source workstation; Cloud Workstations supports cloning persistent directories when a source workstation is specified during workstation creation.

## Extended Definition

Cloud Workstations supports cloning persistent directories from a source workstation; Cloud Workstations supports cloning persistent directories when a source workstation is specified during workstation creation.

## Evidence Summary

Fast-mode lexical matching selected 4 supporting page(s) from the Step 04 corpus.

## Source Links

- [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation)
- [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
- [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)

## Supporting Pages

### "Customize your development environment \_|\_ Cloud Workstations \_|\_ Google\

- URL: [https://docs.cloud.google.com/workstations/docs/customize-development-environment](https://docs.cloud.google.com/workstations/docs/customize-development-environment)
- Source ID: `site-docs-root-2`
- Final score: 202
- Re-rank relevance: N/A

Evidence snippets:
- JSON representation { "name" : string , "displayName" : string , "uid" : string , "reconciling" : boolean , "annotations" : { string : string , ... } , "labels" : { string : string , ... } , "createTime" : string , "updateTime" : string , "deleteTime" : string , "etag" : string , "idleTimeout" : string , "runningTimeout" : string , "maxUsableWorkstations" : integer , "host" : { object ( Host ) } , "persistentDirectories" : [ { object ( PersistentDirectory ) } ] , "ephemeralDirectories" : [ { object ( EphemeralDirectory ) } ] , "container" : { object ( Container ) } , "encryptionKey" : { object ( CustomerEncryptionKey ) } , "readinessChecks" : [ { object ( ReadinessCheck ) } ] , "replicaZones" : [ string ] , "degraded" : boolean , "conditions" : [ { object ( Status ) } ] , "enableAuditAgent" : boolean , "disableTcpConnections" : boolean , "allowedPorts" : [ { object ( PortRange ) } ] , "grantWorkstationAdminRoleOnCreate" : boolean } Fields name string Identifier.
- REST Resource: projects.locations.workstationClusters.workstationConfigs Resource: WorkstationConfig JSON representation Host JSON representation GceInstance JSON representation GceShieldedInstanceConfig JSON representation GceConfidentialInstanceConfig JSON representation Accelerator JSON representation BoostConfig JSON representation PersistentDirectory JSON representation GceRegionalPersistentDisk JSON representation ReclaimPolicy GceHyperdiskBalancedHighAvailability JSON representation ReclaimPolicy EphemeralDirectory JSON representation GcePersistentDisk JSON representation Container JSON representation CustomerEncryptionKey JSON representation ReadinessCheck JSON representation PortRange JSON representation Methods Resource: WorkstationConfig A workstation configuration resource in the Cloud Workstations API.
- If this field is empty, workstations created with this configuration do not have a persistent home directory.
- Runtime host for the workstation. persistentDirectories[] object ( PersistentDirectory ) Optional.

### Clone a workstation \_|\_ Cloud Workstations \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/clone-workstation](https://docs.cloud.google.com/workstations/docs/clone-workstation)
- Source ID: `site-docs-root-2`
- Final score: 175
- Re-rank relevance: N/A

Evidence snippets:
- Clone a workstation To clone a workstation, create a new workstation and specify the source workstation to copy files from: gcloud workstations create WORKSTATION \ --project= PROJECT \ --region= REGION \ --cluster= CLUSTER NAME \ --config= CONFIG NAME \ --source-workstation= SOURCE WORKSTATION Replace the following: WORKSTATION : the ID or fully qualified identifier for the new workstation PROJECT : the project that will contain the new workstation REGION : the region where the new workstation will reside—for example, us-central1 CLUSTER NAME : the name of the workstation cluster that will contain the new workstation CONFIG NAME : the name of the workstation configuration that will contain the new workstation SOURCE WORKSTATION : the fully qualified identifier of the source workstation from which the new workstation's persistent directories will be copied Your source workstation's identifier might be similar to the following: projects/ SOURCE PROJECT /locations/ SOURCE REGION /workstationClusters/ SOURCE CLUSTER /workstationConfigs/ SOURCE CONFIG /workstations/ SOURCE WORKSTATION Replace the following: SOURCE PROJECT : the project containing the source workstation SOURCE REGION : the location where the source workstation resides SOURCE CLUSTER : the name of the workstation cluster that contains the source workstation SOURCE CONFIG : the name of the workstation configuration that contains the source workstation SOURCE WORKSTATION : the ID of the source workstation For more information, see gcloud workstations create .
- If cloning from a different project, the Cloud Workstations Service Agent must also have the compute.disks.get permission on the project containing the source workstation.
- In another terminal on the destination workstation, run scp and specify the port where the TCP tunnel is listening to copy the files from the source workstation. scp -rP LOCAL PORT \ user@localhost: /SOURCE DIRECTORY \ /DESTINATION DIRECTORY Replace the following: SOURCE DIRECTORY : the path to the directory to copy from the source workstation DESTINATION DIRECTORY : the path to the destination directory on the new workstation Send feedback Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License .
- From the terminal on the destination workstation, create a TCP tunnel to the source workstation using gcloud workstations start-tcp-tunnel . gcloud workstations start-tcp-tunnel \ --project = SOURCE PROJECT \ --region = SOURCE REGION \ --cluster = SOURCE CLUSTER \ --config = SOURCE CONFIG \ SOURCE WORKSTATION \ WORKSTATION PORT \ --local-host-port = : LOCAL PORT Replace the following: WORKSTATION PORT : the port on the source workstation to which traffic should be sent (default: 22 ).

### "Code with Gemini Code Assist \_|\_ Cloud Workstations \_|\_ Google Cloud\

- URL: [https://docs.cloud.google.com/workstations/docs/write-code-gemini](https://docs.cloud.google.com/workstations/docs/write-code-gemini)
- Source ID: `site-docs-root`
- Final score: 174
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- The path should be relative to the workspace root directory. my/sensitive/dir/ Disable code suggestions that match cited sources Gemini provides citation information when it directly quotes at length from another source, such as publicly available source code.
- Examples The following examples demonstrate how you can configure an .aiexclude file: Block all files named apikeys.txt at or below the workspace directory: apikeys.txt Block all files with the .key file extension at or below the workspace directory: .key Block only the apikeys.txtfile at the same directory as the .aiexclude file, but not any subdirectories: /apikeys.txt Block all files in the directory my/sensitive/dir and all subdirectories.
- To prevent code that matches cited sources from being suggested, you can modify the geminicodeassist.recitation.maxCitedLength setting to 0 in a settings.json file: "geminicodeassist.recitation.maxCitedLength" : 0 Use smart actions To help you be more productive while minimizing context switching, Gemini Code Assist provides AI-powered smart actions directly in your source code editor.
- To view the diff of refactored code from the inline text box, perform the following steps: In a source file, select a function and open the inline text box by pressing Control+I (for Windows and Linux) or Command+I (for macOS).

### Cloud Workstations architecture \_|\_ Google Cloud Documentation

- URL: [https://docs.cloud.google.com/workstations/docs/architecture](https://docs.cloud.google.com/workstations/docs/architecture)
- Source ID: `site-docs-root`
- Final score: 170
- Re-rank relevance: MODERATE
- Re-rank rationale: Fast mode kept the lexical match without page-level LLM reranking.

Evidence snippets:
- Cloud Workstations manages Google Cloud resources, such as Compute Engine VMs and persistent disks (PDs), to give you more visibility and control over your projects' resources.
- Resource lifecycle Cloud Workstations manages VMs, container images and persistent disks for use as the runtime environment for each workstation.
- Cloud Workstations then provisions the following resources in your project: Private Service Connect : establishes a connection between the Cloud Workstations controller and your VPC, enabling the creation of resources inside your project.
- Image streaming in Cloud Workstations typically reduces container image pull time from minutes to seconds, and workstation containers usually start running without waiting for the entire image to download.

