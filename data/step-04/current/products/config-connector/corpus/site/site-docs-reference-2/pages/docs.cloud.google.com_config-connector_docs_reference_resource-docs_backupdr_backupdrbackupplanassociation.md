---
title: "BackupDRBackupPlanAssociation \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupplanassociation
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/backupdr/backupdrbackupplanassociation
  title: "BackupDRBackupPlanAssociation \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
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
BackupDRBackupPlanAssociation
Property
Value
Google Cloud Service Name
Backup and DR
Google Cloud Service Documentation
/backup-disaster-recovery/docs/
Google Cloud REST Resource Name
v1.projects.locations.backupPlanAssociations
Google Cloud REST Resource Documentation
/backup-disaster-recovery/docs/reference/rest/v1/projects.locations.backupPlanAssociations
Config Connector Resource Short Names
gcpbackupdrbackupplanassociation gcpbackupdrbackupplanassociations backupdrbackupplanassociation
Config Connector Service Name
backupdr.googleapis.com
Config Connector Resource Fully Qualified Name
backupdrbackupplanassociations.backupdr.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
backupPlanRef :
external : string
name : string
namespace : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resource :
computeInstanceRef :
external : string
name : string
namespace : string
resourceID : string
resourceType : string
Fields
backupPlanRef
Required
object
Required. The backup plan which needs to be applied on workload.
backupPlanRef.external
Optional
string
A reference to an externally managed BackupDRBackupPlan resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/backupplans/{{backupplanID}}".
backupPlanRef.name
Optional
string
The name of a BackupDRBackupPlan resource.
backupPlanRef.namespace
Optional
string
The namespace of a BackupDRBackupPlan resource.
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
resource
Required
object
Required. Immutable. Resource name of workload on which backupplan is applied
resource.computeInstanceRef
Optional
object
InstanceRef defines the resource reference to ComputeInstance, which "External" field holds the Google Cloud identifier for the KRM object.
resource.computeInstanceRef.external
Optional
string
A reference to an externally managed ComputeInstance resource. Should be in the format "projects/{{projectID}}/locations/{{location}}/instances/{{instanceID}}".
resource.computeInstanceRef.name
Optional
string
The name of a ComputeInstance resource.
resource.computeInstanceRef.namespace
Optional
string
The namespace of a ComputeInstance resource.
resourceID
Optional
string
The BackupDRBackupPlanAssociation name. If not given, the metadata.name will be used.
resourceType
Required
string
Required. Immutable. Resource type of workload on which backupplan is applied
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
createTime : string
dataSource : string
rulesConfigInfo :
- lastBackupError :
code : integer
details :
- typeURL : string
value : string
message : string
lastBackupState : string
lastSuccessfulBackupConsistencyTime : string
ruleID : string
state : string
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
A unique specifier for the BackupDRBackupPlanAssociation resource in Google Cloud.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in Google Cloud.
observedState.createTime
string
Output only. The time when the instance was created.
observedState.dataSource
string
Output only. Resource name of data source which will be used as storage location for backups taken. Format : projects/{project}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource}
observedState.rulesConfigInfo
list (object)
Output only. The config info related to backup rules.
observedState.rulesConfigInfo[]
object
observedState.rulesConfigInfo[].lastBackupError
object
Output only. google.rpc.Status object to store the last backup error.
observedState.rulesConfigInfo[].lastBackupError.code
integer
The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
observedState.rulesConfigInfo[].lastBackupError.details
list (object)
A list of messages that carry the error details. There is a common set of message types for APIs to use.
observedState.rulesConfigInfo[].lastBackupError.details[]
object
observedState.rulesConfigInfo[].lastBackupError.details[].typeURL
string
A URL/resource name that uniquely identifies the type of the serialized
protocol buffer message. This string must contain at least
one "/" character. The last segment of the URL's path must represent
the fully qualified name of the type (as in
`path/google.protobuf.Duration`). The name should be in a canonical form
(e.g., leading "." is not accepted).
observedState.rulesConfigInfo[].lastBackupError.details[].value
string
Must be a valid serialized protocol buffer of the above specified type.
observedState.rulesConfigInfo[].lastBackupError.message
string
A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
observedState.rulesConfigInfo[].lastBackupState
string
Output only. The last backup state for rule.
observedState.rulesConfigInfo[].lastSuccessfulBackupConsistencyTime
string
Output only. The point in time when the last successful backup was captured from the source.
observedState.rulesConfigInfo[].ruleID
string
Output only. Backup Rule id fetched from backup plan.
observedState.state
string
Output only. The BackupPlanAssociation resource state.
observedState.updateTime
string
Output only. The time when the instance was updated.
Sample YAML(s)
Typical Use Case
# Copyright 2025 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
apiVersion : backupdr.cnrm.cloud.google.com/v1beta1
kind : BackupDRBackupPlanAssociation
metadata :
name : backupdrbackupplanassociation-sample
spec :
location : us-central1
resourceType : "compute.googleapis.com/Instance"
resource :
computeInstanceRef :
name : "backupdrbackupplanassociation-dep"
backupPlanRef :
name : "backupdrbackupplanassociation-dep"
projectRef :
external : "projects/${PROJECT_ID?}"
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeInstance
metadata :
name : backupdrbackupplanassociation-dep
spec :
machineType : n1-standard-1
zone : us-central1-a
bootDisk :
initializeParams :
sourceImageRef :
external : debian-cloud/debian-11
networkInterface :
- networkRef :
external : backupdrbackupplanassociation-dep
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeDisk
metadata :
name : computedisk-dep
spec :
location : us-west1-a
imageRef :
external : debian-cloud/debian-11
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeImage
metadata :
name : computeimage-dep
spec :
diskRef :
name : computedisk-dep
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : backupdrbackupplanassociation-dep
annotations :
cnrm.cloud.google.com/deletion-policy : "deletion"
spec :
description : network for the project
---
apiVersion : backupdr.cnrm.cloud.google.com/v1alpha1
kind : BackupDRBackupVault
metadata :
name : backupdrbackupplanassociation-dep
spec :
projectRef :
external : "projects/${PROJECT_ID?}"
location : us-central1
backupMinimumEnforcedRetentionDuration : "86400s"
---
apiVersion : backupdr.cnrm.cloud.google.com/v1alpha1
kind : BackupDRBackupPlan
metadata :
name : backupdrbackupplanassociation-dep
spec :
projectRef :
external : "projects/${PROJECT_ID?}"
location : us-central1
resourceType : "compute.googleapis.com/Instance"
backupVaultRef :
name : "backupdrbackupplanassociation-dep"
backupRules :
- ruleID : "daily-backups"
backupRetentionDays : 30
standardSchedule :
recurrenceType : "DAILY"
backupWindow :
startHourOfDay : 6
endHourOfDay : 10
timeZone : "America/New_York"
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
