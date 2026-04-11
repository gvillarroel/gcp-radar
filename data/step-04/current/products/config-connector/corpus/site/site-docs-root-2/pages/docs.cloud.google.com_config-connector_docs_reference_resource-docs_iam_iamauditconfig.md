---
title: "IAMAuditConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iamauditconfig
  title: "IAMAuditConfig \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
IAMAuditConfig
IAMAuditConfig lets you manage the IAM policy
audit configs (that is, Data Access audit logging) for a given
Google Cloud resource. Read more about Data Access audit logs at Configuring Data Access audit
logs .
IAMAuditConfig represents an audit config for a single
Google Cloud service. It adds an audit config for the given
Google Cloud service to the associated Google Cloud
resource's IAM policy.
If you want to manage multiple audit configs, use
IAMPolicy .
Warning: IAMAuditConfig should not be used in conjunction with
IAMPolicy for the same resource. Note: Updating spec.service and spec.resourceRef is
not allowed.
Property
Value
Google Cloud Service Name
IAM
Google Cloud Service Documentation
/iam/docs/
Google Cloud REST Resource Name
v1.iamPolicies
Google Cloud REST Resource Documentation
/iam/reference/rest/v1/iamPolicies
Config Connector Resource Short Names
gcpiamauditconfig gcpiamauditconfigs iamauditconfig
Config Connector Service Name
iam.googleapis.com
Config Connector Resource Fully Qualified Name
iamauditconfigs.iam.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Supported Resources
You can use IAMAuditConfig to configure Data Access audit logging for
the following resources.
Kind
External Reference Formats
Folder
folders/{{folder_id}}
Organization
{{org_id}}
Project
projects/{{project_id}}
Custom Resource Definition Properties
Spec
Schema
auditLogConfigs :
- exemptedMembers :
- string
logType : string
resourceRef :
apiVersion : string
external : string
kind : string
name : string
namespace : string
service : string
Fields
auditLogConfigs
Required*
list (object)
Required. The configuration for logging of each type of permission.
auditLogConfigs[]
Required*
object
auditLogConfigs[].exemptedMembers
Optional
list (string)
Identities that do not cause logging for this type of permission. The format is the same as that for 'members' in IAMPolicy/IAMPolicyMember.
auditLogConfigs[].exemptedMembers[]
Optional
string
auditLogConfigs[].logType
Required*
string
Permission type for which logging is to be configured. Must be one of 'DATA_READ', 'DATA_WRITE', or 'ADMIN_READ'.
resourceRef
Required*
object
Immutable. Required. The GCP resource to set the IAMAuditConfig on (e.g. project).
resourceRef.apiVersion
Optional
string
APIVersion of the referenced resource
resourceRef.external
Optional
string
The external name of the referenced resource
resourceRef.kind
Required*
string
Kind of the referenced resource
resourceRef.name
Optional
string
resourceRef.namespace
Optional
string
service
Required*
string
Immutable. Required. The service for which to enable Data Access audit logs. The special value 'allServices' covers all services. Note that if there are audit configs covering both 'allServices' and a specific service, then the union of the two audit configs is used for that service: the 'logTypes' specified in each 'auditLogConfig' are enabled, and the 'exemptedMembers' in each 'auditLogConfig' are exempted.
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
observedGeneration : integer
Fields
conditions
list (object)
Conditions represent the latest available observations of the IAMAuditConfig's current state.
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
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
External Organization Level Audit Config
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
# Replace ${PROJECT_ID?} and ${ORG_ID?} below with your desired project and
# organization IDs respectively.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMAuditConfig
metadata :
name : iamauditconfig-sample-orglevel
spec :
service : allServices
auditLogConfigs :
- logType : DATA_WRITE
- logType : DATA_READ
exemptedMembers :
- serviceAccount:iamauditconfig-dep-orglevel@${PROJECT_ID?}.iam.gserviceaccount.com
resourceRef :
kind : Organization
external : "${ORG_ID?}"
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : iamauditconfig-dep-orglevel
Project Level Audit Config
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
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMAuditConfig
metadata :
name : iamauditconfig-sample-projlevel
spec :
service : allServices
auditLogConfigs :
- logType : DATA_WRITE
- logType : DATA_READ
exemptedMembers :
- serviceAccount:iamauditconfig-dep-projlevel@${PROJECT_ID?}.iam.gserviceaccount.com
resourceRef :
kind : Project
external : projects/${PROJECT_ID?}
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : iamauditconfig-dep-projlevel
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
