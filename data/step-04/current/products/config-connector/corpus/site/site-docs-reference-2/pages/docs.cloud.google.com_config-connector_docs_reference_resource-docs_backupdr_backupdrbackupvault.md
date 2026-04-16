---
title: "BackupDRBackupVault \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupvault
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupvault
  title: "BackupDRBackupVault \_|\_ Config Connector \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Config Connector
API and reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
BackupDRBackupVault
Property
Value
Google Cloud Service Name
Backup and DR
Google Cloud Service Documentation
/backup-disaster-recovery/docs/
Google Cloud REST Resource Name
v1.projects.locations.backupVaults
Google Cloud REST Resource Documentation
/backup-disaster-recovery/docs/reference/rest/v1/projects.locations.backupVaults
Config Connector Resource Short Names
gcpbackupdrbackupvault gcpbackupdrbackupvaults backupdrbackupvault
Config Connector Service Name
backupdr.googleapis.com
Config Connector Resource Fully Qualified Name
backupdrbackupvaults.backupdr.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
annotations :
string : string
backupMinimumEnforcedRetentionDuration : string
description : string
effectiveTime : string
ignoreInactiveDatasources : boolean
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
annotations
Optional
map (key: string, value: string)
Optional. User annotations. Stores small amounts of arbitrary data. See https://google.aip.dev/128#annotations.
backupMinimumEnforcedRetentionDuration
Required
string
Required. The default and minimum enforced retention for each backup within the backup vault. The enforced retention for each backup can be extended.
description
Optional
string
Optional. The description of the BackupVault instance (2048 characters or less).
effectiveTime
Optional
string
Optional. Time after which the BackupVault resource is locked.
ignoreInactiveDatasources
Optional
boolean
Optional. If set to true, allows deletion of a backup vault even when it contains inactive data sources. This overrides the default restriction that prevents deletion of backup vaults with any data sources, even if those data sources are inactive.
location
Required
string
Immutable.
projectRef
Required
object
The Project that this resource belongs to.
projectRef.external
Optional
string
The `projectID` field of a project, when not managed by Config Connector.
projectRef.kind
Optional
string
The kind of the Project resource; optional but must be `Project` if provided.
projectRef.name
Optional
string
The `name` field of a `Project` resource.
projectRef.namespace
Optional
string
The `namespace` field of a `Project` resource.
resourceID
Optional
string
The BackupDRBackupVault name. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
externalRef : string
observedGeneration : integer
observedState :
backupCount : integer
createTime : string
deletable : boolean
etag : string
serviceAccount : string
state : string
totalStoredBytes : integer
uid : string
updateTime : string
Fields
conditions
list (object)
Conditions represent the latest available observations of the object's current state.
conditions[]
object
conditions[].lastTransitionTime
string
Last time the condition transitioned from one status to another.
conditions[].message
string
Human-readable message indicating details about last transition.
conditions[].reason
string
Unique, one-word, CamelCase reason for the condition's last transition.
conditions[].status
string
Status is the status of the condition. Can be True, False, Unknown.
conditions[].type
string
Type is the type of the condition.
externalRef
string
A unique specifier for the BackupDRBackupVault resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.backupCount
integer
Output only. The number of backups in this backup vault.
observedState.createTime
string
Output only. The time when the instance was created.
observedState.deletable
boolean
Output only. Set to true when there are no backups nested under this resource.
observedState.etag
string
Output only. A tag that confirms the content of the BackupVault resource.
observedState.serviceAccount
string
Output only. To enable the service to run backups and restores, grant the required permissions to this service account in your workload project.
observedState.state
string
Output only. The BackupVault resource instance state.
observedState.totalStoredBytes
integer
Output only. Total size of the storage used by all backup resources.
observedState.uid
string
Output only. Immutable after resource creation until resource deletion.
observedState.updateTime
string
Output only. The time when the instance was updated.
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
