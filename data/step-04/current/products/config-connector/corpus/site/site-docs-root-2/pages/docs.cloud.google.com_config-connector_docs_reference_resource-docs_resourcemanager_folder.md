---
title: "Folder \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/resourcemanager/folder
  title: "Folder \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
Folder
Warning: There is a known issue where you cannot delete a Folder
and its child Folder or Project resources at the
same time. That is, you must either delete the parent Folder
and wait for it to be gone from the Kubernetes API Server first or delete the
children and wait for them to be gone from the Kubernetes API Server first.
Property
Value
Google Cloud Service Name
Cloud Resource Manager
Google Cloud Service Documentation
/resource-manager/docs/
Google Cloud REST Resource Name
v2.folders
Google Cloud REST Resource Documentation
/resource-manager/reference/rest/v2/folders
Config Connector Resource Short Names
gcpfolder gcpfolders folder
Config Connector Service Name
cloudresourcemanager.googleapis.com
Config Connector Resource Fully Qualified Name
folders.resourcemanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
Yes
Supports IAM Conditions
Yes
Supports IAM Audit Configs
Yes
IAM External Reference Format
folders/{{folder_id}}
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
displayName : string
folderRef :
external : string
name : string
namespace : string
organizationRef :
external : string
name : string
namespace : string
resourceID : string
Fields
displayName
Required
string
The folder's display name. A folder's display name must be unique amongst its siblings, e.g. no two folders with the same parent can share the same display name. The display name must start and end with a letter or digit, may contain letters, digits, spaces, hyphens and underscores and can be no longer than 30 characters.
folderRef
Optional
object
The folder that this resource belongs to. Changing this forces the
resource to be migrated to the newly specified folder. Only one of
folderRef or organizationRef may be specified.
folderRef.external
Optional
string
Allowed value: The `folderId` field of a `Folder` resource.
folderRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
folderRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
organizationRef
Optional
object
The organization that this resource belongs to. Changing this
forces the resource to be migrated to the newly specified
organization. Only one of folderRef or organizationRef may be
specified.
organizationRef.external
Optional
string
Allowed value: The `name` field of an `Organization` resource.
organizationRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
organizationRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
folderId : string
lifecycleState : string
name : string
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observation of the resource's current state.
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
createTime
string
Timestamp when the Folder was created. Assigned by the server. A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
folderId
string
The folder id from the name "folders/{folder_id}".
lifecycleState
string
The lifecycle state of the folder such as ACTIVE or DELETE_REQUESTED.
name
string
The resource name of the Folder. Its format is folders/{folder_id}.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Folder In Folder
# Copyright 2020 Google LLC
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
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Folder
metadata :
labels :
label-one : "value-one"
name : folder-sample-in-folder
spec :
displayName : Config Connector Sample
folderRef :
# Replace "${FOLDER_ID?}" with the numeric ID of the parent folder
external : "${FOLDER_ID?}"
Folder In Org
# Copyright 2020 Google LLC
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
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Folder
metadata :
labels :
label-one : "value-one"
name : folder-sample-in-org
spec :
displayName : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID of the parent organization
external : "${ORG_ID?}"
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
