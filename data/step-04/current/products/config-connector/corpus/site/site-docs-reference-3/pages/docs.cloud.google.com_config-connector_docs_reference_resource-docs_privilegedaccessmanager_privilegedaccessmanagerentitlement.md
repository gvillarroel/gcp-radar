---
title: "PrivilegedAccessManagerEntitlement \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/privilegedaccessmanager/privilegedaccessmanagerentitlement
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/privilegedaccessmanager/privilegedaccessmanagerentitlement
  title: "PrivilegedAccessManagerEntitlement \_|\_ Config Connector \_|\_ Google Cloud\
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
PrivilegedAccessManagerEntitlement
Property
Value
Google Cloud Service Name
PrivilegedAccessManager
Google Cloud Service Documentation
/iam/docs/pam-overview
Google Cloud REST Resource Name
v1.folders.locations.entitlements
v1.organizations.locations.entitlements
v1.projects.locations.entitlements
Google Cloud REST Resource Documentation
/logging/docs/reference/v2/rest/v2/folders.exclusions
/logging/docs/reference/v2/rest/v2/organizations.exclusions
/logging/docs/reference/v2/rest/v2/projects.exclusions
Config Connector Resource Short Names
gcpprivilegedaccessmanagerentitlement gcpprivilegedaccessmanagerentitlements privilegedaccessmanagerentitlement
Config Connector Service Name
privilegedaccessmanager.googleapis.com
Config Connector Resource Fully Qualified Name
privilegedaccessmanagerentitlements.privilegedaccessmanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
additionalNotificationTargets :
adminEmailRecipients :
- string
requesterEmailRecipients :
- string
approvalWorkflow :
manualApprovals :
requireApproverJustification : boolean
steps :
- approvalsNeeded : integer
approverEmailRecipients :
- string
approvers :
- principals :
- string
eligibleUsers :
- principals :
- string
folderRef :
external : string
name : string
namespace : string
location : string
maxRequestDuration : string
organizationRef :
external : string
privilegedAccess :
gcpIAMAccess :
roleBindings :
- conditionExpression : string
role : string
projectRef :
external : string
kind : string
name : string
namespace : string
requesterJustificationConfig :
notMandatory : {}
unstructured : {}
resourceID : string
Fields
additionalNotificationTargets
Optional
object
Optional. Additional email addresses to be notified based on actions taken.
additionalNotificationTargets.adminEmailRecipients
Optional
list (string)
Optional. Additional email addresses to be notified when a principal (requester) is granted access.
additionalNotificationTargets.adminEmailRecipients[]
Optional
string
additionalNotificationTargets.requesterEmailRecipients
Optional
list (string)
Optional. Additional email address to be notified about an eligible entitlement.
additionalNotificationTargets.requesterEmailRecipients[]
Optional
string
approvalWorkflow
Optional
object
Optional. The approvals needed before access are granted to a requester. No approvals are needed if this field is null.
approvalWorkflow.manualApprovals
Required*
object
An approval workflow where users designated as approvers review and act on the grants.
approvalWorkflow.manualApprovals.requireApproverJustification
Optional
boolean
Optional. Whether the approvers need to provide a justification for their actions.
approvalWorkflow.manualApprovals.steps
Optional
list (object)
Optional. List of approval steps in this workflow. These steps are followed in the specified order sequentially. Only 1 step is supported.
approvalWorkflow.manualApprovals.steps[]
Optional
object
Step represents a logical step in a manual approval workflow.
approvalWorkflow.manualApprovals.steps[].approvalsNeeded
Required*
integer
Required. How many users from the above list need to approve. If there aren't enough distinct users in the list, then the workflow indefinitely blocks. Should always be greater than 0. 1 is the only supported value.
approvalWorkflow.manualApprovals.steps[].approverEmailRecipients
Optional
list (string)
Optional. Additional email addresses to be notified when a grant is pending approval.
approvalWorkflow.manualApprovals.steps[].approverEmailRecipients[]
Optional
string
approvalWorkflow.manualApprovals.steps[].approvers
Optional
list (object)
Optional. The potential set of approvers in this step. This list must contain at most one entry.
approvalWorkflow.manualApprovals.steps[].approvers[]
Optional
object
AccessControlEntry is used to control who can do some operation.
approvalWorkflow.manualApprovals.steps[].approvers[].principals
Required*
list (string)
Optional. Users who are allowed for the operation. Each entry should be a valid v1 IAM principal identifier. The format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1
approvalWorkflow.manualApprovals.steps[].approvers[].principals[]
Required*
string
eligibleUsers
Required*
list (object)
Who can create grants using this entitlement. This list should contain at most one entry.
eligibleUsers[]
Required*
object
AccessControlEntry is used to control who can do some operation.
eligibleUsers[].principals
Required*
list (string)
Optional. Users who are allowed for the operation. Each entry should be a valid v1 IAM principal identifier. The format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1
eligibleUsers[].principals[]
Required*
string
folderRef
Optional
object
Immutable. The Folder that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set.
folderRef.external
Optional
string
The 'name' field of a folder, when not managed by Config Connector. This field must be set when 'name' field is not set.
folderRef.name
Optional
string
The 'name' field of a 'Folder' resource. This field must be set when 'external' field is not set.
folderRef.namespace
Optional
string
The 'namespace' field of a 'Folder' resource. If unset, the namespace is defaulted to the namespace of the referencer resource.
location
Required*
string
Immutable. Location of the resource.
maxRequestDuration
Required*
string
Required. The maximum amount of time that access is granted for a request. A requester can ask for a duration less than this, but never more.
organizationRef
Optional
object
Immutable. The Organization that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set.
organizationRef.external
Required*
string
The 'name' field of an organization, when not managed by Config Connector.
privilegedAccess
Required*
object
The access granted to a requester on successful approval.
privilegedAccess.gcpIAMAccess
Required*
object
Access to a Google Cloud resource through IAM.
privilegedAccess.gcpIAMAccess.roleBindings
Required*
list (object)
Required. Role bindings that are created on successful grant.
privilegedAccess.gcpIAMAccess.roleBindings[]
Required*
object
RoleBinding represents IAM role bindings that are created after a successful grant.
privilegedAccess.gcpIAMAccess.roleBindings[].conditionExpression
Optional
string
Optional. The expression field of the IAM condition to be associated
with the role. If specified, a user with an active grant for this
entitlement is able to access the resource only if this condition
evaluates to true for their request.
This field uses the same CEL format as IAM and supports all attributes
that IAM supports, except tags. More details can be found at
https://cloud.google.com/iam/docs/conditions-overview#attributes.
privilegedAccess.gcpIAMAccess.roleBindings[].role
Required*
string
Required. IAM role to be granted. More details can be found at https://cloud.google.com/iam/docs/roles-overview.
projectRef
Optional
object
Immutable. The Project that this resource belongs to. One and only one of 'projectRef', 'folderRef', or 'organizationRef' must be set.
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
requesterJustificationConfig
Required*
object
Required. The manner in which the requester should provide a justification for requesting access.
requesterJustificationConfig.notMandatory
Optional
object
NotMandatory justification type means the justification isn't required and can be provided in any of the supported formats. The user must explicitly opt out using this field if a justification from the requester isn't mandatory. The only accepted value is `{}` (empty struct). Either 'notMandatory' or 'unstructured' field must be set.
requesterJustificationConfig.unstructured
Optional
object
Unstructured justification type means the justification is in the format of a string. If this is set, the server allows the requester to provide a justification but doesn't validate it. The only accepted value is `{}` (empty struct). Either 'notMandatory' or 'unstructured' field must be set.
resourceID
Optional
string
Immutable. The PrivilegedAccessManagerEntitlement name. If not given, the 'metadata.name' will be used.
* Field is required when parent field is specified
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
etag : string
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
A unique specifier for the PrivilegedAccessManagerEntitlement resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to 'metadata.generation', then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createTime
string
Output only. Create time stamp.
observedState.etag
string
An 'etag' is used for optimistic concurrency control as a way to prevent simultaneous updates to the same entitlement. An 'etag' is returned in the response to 'GetEntitlement' and the caller should put the 'etag' in the request to 'UpdateEntitlement' so that their change is applied on the same version. If this field is omitted or if there is a mismatch while updating an entitlement, then the server rejects the request.
observedState.state
string
Output only. Current state of this entitlement.
observedState.updateTime
string
Output only. Update time stamp.
Sample YAML(s)
Folder Level Entitlement
# Copyright 2024 Google LLC
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
apiVersion : privilegedaccessmanager.cnrm.cloud.google.com/v1beta1
kind : PrivilegedAccessManagerEntitlement
metadata :
name : privilegedaccessmanagerentitlement-sample-folder
spec :
folderRef :
# Replace ${FOLDER_ID?} with your folder ID.
external : folders/${FOLDER_ID?}
location : global
maxRequestDuration : 1800s
privilegedAccess :
gcpIAMAccess :
roleBindings :
- role : roles/pubsub.viewer
conditionExpression : "request.time > timestamp(\"2019-12-31T12:00:00.000Z\")"
requesterJustificationConfig :
notMandatory : {}
eligibleUsers :
- principals :
# Replace ${PROJECT_ID?} with your project ID.
- serviceAccount:pame-dep1-folder@${PROJECT_ID?}.iam.gserviceaccount.com
additionalNotificationTargets :
adminEmailRecipients :
# Replace ${PROJECT_ID?} with your project ID.
- pame-dep1-folder@${PROJECT_ID?}.iam.gserviceaccount.com
requesterEmailRecipients :
# Replace ${PROJECT_ID?} with your project ID.
- pame-dep1-folder@${PROJECT_ID?}.iam.gserviceaccount.com
- pame-dep2-folder@${PROJECT_ID?}.iam.gserviceaccount.com
approvalWorkflow :
manualApprovals :
requireApproverJustification : true
steps :
- approvalsNeeded : 1
approverEmailRecipients :
# Replace ${PROJECT_ID?} with your project ID.
- pame-dep2-folder@${PROJECT_ID?}.iam.gserviceaccount.com
approvers :
- principals :
# Replace ${GROUP_EMAIL?} with your group email.
- "group:${GROUP_EMAIL?}"
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : pame-dep1-folder
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : pame-dep2-folder
Org Level Entitlement
# Copyright 2024 Google LLC
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
apiVersion : privilegedaccessmanager.cnrm.cloud.google.com/v1beta1
kind : PrivilegedAccessManagerEntitlement
metadata :
name : privilegedaccessmanagerentitlement-sample-org
spec :
organizationRef :
# Replace ${ORG_ID?} with your organization ID.
external : organizations/${ORG_ID?}
location : global
maxRequestDuration : 1800s
privilegedAccess :
gcpIAMAccess :
roleBindings :
- role : roles/pubsub.viewer
conditionExpression : "request.time > timestamp(\"2019-12-31T12:00:00.000Z\")"
requesterJustificationConfig :
unstructured : {}
eligibleUsers :
- principals :
# Replace ${PROJECT_ID?} with your project ID.
- serviceAccount:pame-dep-org@${PROJECT_ID?}.iam.gserviceaccount.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : pame-dep-org
Project Level Entitlement
# Copyright 2024 Google LLC
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
apiVersion : privilegedaccessmanager.cnrm.cloud.google.com/v1beta1
kind : PrivilegedAccessManagerEntitlement
metadata :
name : privilegedaccessmanagerentitlement-sample-project
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : "projects/${PROJECT_ID?}"
location : global
maxRequestDuration : 1800s
privilegedAccess :
gcpIAMAccess :
roleBindings :
- role : roles/pubsub.admin
requesterJustificationConfig :
notMandatory : {}
eligibleUsers :
- principals :
# Replace ${PROJECT_ID?} with your project ID
- serviceAccount:pame-dep-project@${PROJECT_ID?}.iam.gserviceaccount.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
# Replace ${PROJECT_ID?} with your project ID.
cnrm.cloud.google.com/project-id : "${PROJECT_ID?}"
name : pame-dep-project
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
