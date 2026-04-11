---
title: "IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicy
  title: "IAMPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
IAMPolicy
IAMPolicy lets you manage the IAM policy for
a given Google Cloud resource.
IAMPolicy represents the full desired state for the associated
Google Cloud resource's IAM policy. It
replaces any existing IAM policy already attached.
If you want finer-grained control over bindings, use
IAMPartialPolicy
or IAMPolicyMember .
If you want finer-grained control over audit configs, use
IAMAuditConfig .
Warning: Any existing bindings and audit configs are overwritten if not specified in the
IAMPolicy resource. You can lock yourself out of your own
Google Cloud project by omitting the default bindings which grant
you access. You can also cause some Google Cloud services to stop
working properly by omitting the default bindings created for default service
accounts (for example, default
Compute Engine service accounts ). Warning: When you delete an IAMPolicy , all the bindings and audit
configs in the associated Google Cloud resource's
IAM policy are deleted. Warning: IAMPolicy should not
be used in conjunction with IAMPolicyMember ,
IAMAuditConfig , and IAMPartialPolicy for the same resource. Note: Updating spec.resourceRef is not allowed.
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
gcpiampolicy gcpiampolicies iampolicy
Config Connector Service Name
iam.googleapis.com
Config Connector Resource Fully Qualified Name
iampolicies.iam.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Supported Resources
You can use IAMPolicy to configure IAM for
the following resources.
Note: Resource-level IAM permissions for BigQueryDataset must be set through
the resource's spec.access field. You cannot reference BigQueryDataset
resources using IAMPolicy , IAMPartialPolicy , and IAMPolicyMember since
BigQueryDataset does not support IAM.
Kind
Supports Conditions
Supports Audit Configs
AccessContextManagerAccessPolicy
ApigeeEnvironment
ArtifactRegistryRepository
BigQueryTable
Y
BigtableInstance
Y
BigtableTable
Y
BillingAccount
Y
BinaryAuthorizationPolicy
Y
CloudFunctionsFunction
Y
ComputeBackendBucket
ComputeDisk
ComputeImage
Y
ComputeInstance
Y
ComputeSnapshot
ComputeSubnetwork
Y
DNSManagedZone
DataprocCluster
Y
Folder
Y
Y
IAMServiceAccount
Y
IAMWorkforcePool
Y
KMSCryptoKey
Y
KMSKeyRing
Y
NetworkSecurityAuthorizationPolicy
Y
NetworkSecurityClientTLSPolicy
Y
NetworkSecurityServerTLSPolicy
Y
Organization
Y
Y
Project
Y
Y
PubSubSubscription
PubSubTopic
RunJob
RunService
SecretManagerSecret
ServiceDirectoryNamespace
ServiceDirectoryService
SourceRepoRepository
SpannerDatabase
Y
SpannerInstance
StorageBucket
Y
Kind
External Reference Formats
AccessContextManagerAccessPolicy
{{name}}
ApigeeEnvironment
organizations/{{apigee_organization}}/environments/{{name}}
ArtifactRegistryRepository
projects/{{project}}/locations/{{location}}/repositories/{{repository_id}}
BigQueryTable
projects/{{project}}/datasets/{{dataset_id}}/tables/{{table_id}}
BigtableInstance
projects/{{project}}/instances/{{name}}
BigtableTable
projects/{{project}}/instances/{{instance_name}}/tables/{{name}}
BillingAccount
{{billing_account_id}}
BinaryAuthorizationPolicy
projects/{{project}}/policy
CloudFunctionsFunction
projects/{{project}}/locations/{{region}}/functions/{{name}}
ComputeBackendBucket
projects/{{project}}/global/backendBuckets/{{name}}
ComputeDisk
projects/{{project}}/regions/{{region}}/disks/{{name}}
projects/{{project}}/zones/{{zone}}/disks/{{name}}
ComputeImage
projects/{{project}}/global/images/{{name}}
ComputeInstance
projects/{{project}}/zones/{{zone}}/instances/{{name}}
ComputeSnapshot
projects/{{project}}/global/snapshots/{{name}}
ComputeSubnetwork
projects/{{project}}/regions/{{region}}/subnetworks/{{name}}
DNSManagedZone
projects/{{project}}/managedZones/{{name}}
DataprocCluster
projects/{{project}}/regions/{{location}}/clusters/{{name}}
Folder
folders/{{folder_id}}
IAMServiceAccount
projects/{{project}}/serviceAccounts/{{account_id}}@{{project}}.iam.gserviceaccount.com
IAMWorkforcePool
locations/{{location}}/workforcePools/{{name}}
KMSCryptoKey
projects/{{project}}/locations/{{location}}/keyRings/{{key_ring_id}}/cryptoKeys/{{name}}
KMSKeyRing
projects/{{project}}/locations/{{location}}/keyRings/{{name}}
NetworkSecurityAuthorizationPolicy
projects/{{project}}/locations/{{location}}/authorizationPolicies/{{name}}
NetworkSecurityClientTLSPolicy
projects/{{project}}/locations/{{location}}/clientTlsPolicies/{{name}}
NetworkSecurityServerTLSPolicy
projects/{{project}}/locations/{{location}}/serverTlsPolicies/{{name}}
Organization
{{org_id}}
Project
projects/{{project_id}}
PubSubSubscription
projects/{{project}}/subscriptions/{{name}}
PubSubTopic
projects/{{project}}/topics/{{name}}
RunJob
projects/{{project}}/locations/{{location}}/jobs/{{name}}
RunService
projects/{{project}}/locations/{{location}}/services/{{name}}
SecretManagerSecret
projects/{{project}}/secrets/{{secret_id}}
ServiceDirectoryNamespace
projects/{{project}}/locations/{{location}}/namespaces/{{namespace_id}}
ServiceDirectoryService
{{namespace}}/services/{{service_id}}
SourceRepoRepository
projects/{{project}}/repos/{{name}}
SpannerDatabase
projects/{{project}}/instances/{{instance}}/databases/{{name}}
SpannerInstance
projects/{{project}}/instances/{{name}}
StorageBucket
{{name}}
Custom Resource Definition Properties
Spec
Schema
auditConfigs :
- auditLogConfigs :
- exemptedMembers :
- string
logType : string
service : string
bindings :
- condition :
description : string
expression : string
title : string
members :
- string
role : string
resourceRef :
apiVersion : string
external : string
kind : string
name : string
namespace : string
Fields
auditConfigs
Optional
list (object)
Optional. The list of IAM audit configs.
auditConfigs[]
Optional
object
Specifies the Cloud Audit Logs configuration for the IAM policy.
auditConfigs[].auditLogConfigs
Required*
list (object)
Required. The configuration for logging of each type of permission.
auditConfigs[].auditLogConfigs[]
Required*
object
auditConfigs[].auditLogConfigs[].exemptedMembers
Optional
list (string)
Identities that do not cause logging for this type of permission. The format is the same as that for 'members' in IAMPolicy/IAMPolicyMember.
auditConfigs[].auditLogConfigs[].exemptedMembers[]
Optional
string
auditConfigs[].auditLogConfigs[].logType
Required*
string
Permission type for which logging is to be configured. Must be one of 'DATA_READ', 'DATA_WRITE', or 'ADMIN_READ'.
auditConfigs[].service
Required*
string
Required. The service for which to enable Data Access audit logs. The special value 'allServices' covers all services. Note that if there are audit configs covering both 'allServices' and a specific service, then the union of the two audit configs is used for that service: the 'logTypes' specified in each 'auditLogConfig' are enabled, and the 'exemptedMembers' in each 'auditLogConfig' are exempted.
bindings
Optional
list (object)
Optional. The list of IAM bindings.
bindings[]
Optional
object
Specifies the members to bind to an IAM role.
bindings[].condition
Optional
object
Optional. The condition under which the binding applies.
bindings[].condition.description
Optional
string
bindings[].condition.expression
Required*
string
bindings[].condition.title
Required*
string
bindings[].members
Optional
list (string)
Optional. The list of IAM users to be bound to the role.
bindings[].members[]
Optional
string
bindings[].role
Required*
string
Required. The role to bind the users to.
resourceRef
Required*
object
Immutable. Required. The GCP resource to set the IAM policy on (e.g. organization, project...)
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
Conditions represent the latest available observations of the IAM policy's current state.
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
External Project Level Policy
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
# **WARNING**: The policy here represents the full declarative intent for the
# referenced project. It will fully overwrite the existing policy on the
# project.
#
# If you want finer-grained control over a project's IAM bindings, use
# IAMPolicyMember. If you want finer-grained control over audit configs, use
# IAMAuditConfig.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicy
metadata :
name : iampolicy-sample-external-project
spec :
resourceRef :
kind : Project
external : projects/iampolicy-dep-external-project
bindings :
- members :
# Replace ${GSA_EMAIL?} with the Config Connector service account's
# email address. This ensures that the Config Connector service account
# can continue to manage the referenced project.
- "serviceAccount:${GSA_EMAIL?}"
role : roles/owner
- members :
- serviceAccount:iampolicy-dep-external-project@iampolicy-dep-external-project.iam.gserviceaccount.com
role : roles/storage.admin
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : iampolicy-dep-external-project
name : iampolicy-dep-external-project
---
# Creates a Project resource to demonstrate how an IAMPolicy can reference a
# Project using `external`.
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
annotations :
cnrm.cloud.google.com/auto-create-network : "false"
name : iampolicy-dep-external-project
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
KMS Policy With Condition
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
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicy
metadata :
labels :
label-one : value-one
name : iampolicy-sample-condition
spec :
resourceRef :
kind : KMSKeyRing
name : iampolicy-dep-condition
bindings :
- role : roles/cloudkms.admin
condition :
title : expires_after_2019_12_31
description : Expires at midnight of 2019-12-31
expression : request.time < timestamp("2020-01-01T00:00:00Z")
members :
# replace ${PROJECT_ID?} with your project name
- serviceAccount:iampolicy-dep-condition@${PROJECT_ID?}.iam.gserviceaccount.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
name : iampolicy-dep-condition
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : iampolicy-dep-condition
spec :
location : us-central1
Project Level Policy
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
# **WARNING**: The policy here represents the full declarative intent for the
# referenced project. It will fully overwrite the existing policy on the
# project.
#
# If you want finer-grained control over a project's IAM bindings, use
# IAMPolicyMember. If you want finer-grained control over audit configs, use
# IAMAuditConfig.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicy
metadata :
name : iampolicy-sample-project
spec :
resourceRef :
kind : Project
name : iampolicy-dep-project
bindings :
- members :
# Replace ${GSA_EMAIL?} with the Config Connector service account's
# email address. This ensures that the Config Connector service account
# can continue to manage the referenced project.
- "serviceAccount:${GSA_EMAIL?}"
role : roles/owner
- members :
- serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com
role : roles/storage.admin
auditConfigs :
- service : allServices
auditLogConfigs :
- logType : DATA_WRITE
- logType : DATA_READ
exemptedMembers :
- serviceAccount:iampolicy-dep-project@iampolicy-dep-project.iam.gserviceaccount.com
- service : compute.googleapis.com
auditLogConfigs :
- logType : ADMIN_READ
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : iampolicy-dep-project
name : iampolicy-dep-project
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
annotations :
cnrm.cloud.google.com/auto-create-network : "false"
name : iampolicy-dep-project
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
PubSub Admin Policy
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
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicy
metadata :
labels :
label-one : value-one
name : iampolicy-sample-pubsubadmin
spec :
resourceRef :
kind : PubSubTopic
name : iampolicy-dep-pubsubadmin
bindings :
- role : roles/editor
members :
# replace ${PROJECT_ID?} with your project name
- serviceAccount:iampolicy-dep-pubsubadmin@${PROJECT_ID?}.iam.gserviceaccount.com
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
name : iampolicy-dep-pubsubadmin
---
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : iampolicy-dep-pubsubadmin
Workload Identity Policy
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
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicy
metadata :
name : iampolicy-sample-workloadidentity
spec :
resourceRef :
kind : IAMServiceAccount
name : iampolicy-dep-workloadidentity
bindings :
- role : roles/iam.workloadIdentityUser
members :
# replace ${PROJECT_ID} with your project name
- serviceAccount:${PROJECT_ID?}.svc.id.goog[default/iampolicy-dep-workloadidentity]
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
name : iampolicy-dep-workloadidentity
spec :
displayName : Example Service Account
---
apiVersion : v1
kind : ServiceAccount
metadata :
name : iampolicy-dep-workloadidentity
annotations :
# replace ${PROJECT_ID?} with your project name
iam.gke.io/gcp-service-account : iampolicy-dep-workloadidentity@${PROJECT_ID?}.iam.gserviceaccount.com
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
