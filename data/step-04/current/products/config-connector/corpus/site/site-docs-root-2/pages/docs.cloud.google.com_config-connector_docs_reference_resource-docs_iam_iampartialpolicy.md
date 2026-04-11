---
title: "IAMPartialPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampartialpolicy
  title: "IAMPartialPolicy \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
IAMPartialPolicy
IAMPartialPolicy lets you manage the IAM policy
bindings for a given Google Cloud resource.
IAMPartialPolicy represents a non-authoritative intent for the
associated Google Cloud resource's IAM policy
bindings. Config Connector merges the bindings in the
IAMPartialPolicy spec with the bindings and audit configs
that already exist in the underlying IAM policy, and then
sets the merged result as the IAM policy for the
associated Google Cloud resource. If there are invalid roles or
members, the entire operation fails with errors.
To delete any existing bindings, first acquire the existing bindings by
applying an IAMPartialPolicy that includes said bindings, then remove
said bindings from the IAMPartialPolicy configuration and re-apply the
configuration.
If you want authoritative control over bindings, use
IAMPolicy .
If you want to manage the binding for only a single IAM member, use
IAMPolicyMember .
Warning: IAMPartialPolicy should not be used in conjunction with
IAMPolicy for the same resource. Note: When you delete an IAMPartialPolicy , only the bindings specified in
spec are deleted from the associated Google Cloud
resource's IAM policy. Note: Updating spec.resourceRef is not allowed.
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
gcpiampartialpolicy gcpiampartialpolicies iampartialpolicy
Config Connector Service Name
iam.googleapis.com
Config Connector Resource Fully Qualified Name
iampartialpolicies.iam.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Supported Resources
You can use IAMPartialPolicy to configure IAM for
the following resources.
Note: Resource-level IAM permissions for BigQueryDataset must be set through
the resource's spec.access field. You cannot reference BigQueryDataset
resources using IAMPolicy , IAMPartialPolicy , and IAMPolicyMember since
BigQueryDataset does not support IAM.
Kind
Supports Conditions
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
Project
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
bindings :
- condition :
description : string
expression : string
title : string
members :
- member : string
memberFrom :
bigQueryConnectionConnectionRef :
name : string
namespace : string
type : string
logSinkRef :
name : string
namespace : string
serviceAccountRef :
name : string
namespace : string
serviceIdentityRef :
name : string
namespace : string
sqlInstanceRef :
name : string
namespace : string
role : string
resourceRef :
apiVersion : string
external : string
kind : string
name : string
namespace : string
Fields
bindings
Optional
list (object)
Optional. The list of IAM bindings managed by Config Connector.
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
list (object)
Optional. The list of IAM users to be bound to the role.
bindings[].members[]
Optional
object
bindings[].members[].member
Optional
string
The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
bindings[].members[].memberFrom
Optional
object
The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
bindings[].members[].memberFrom.bigQueryConnectionConnectionRef
Optional
object
BigQueryConnectionConnection whose service account is to be bound to the role. Use the Type field to specify the connection type. For "spark" connection, the service account is in `status.observedState.spark.serviceAccountID`. For "cloudSQL" connection, the service account is in `status.observedState.cloudSQL.serviceAccountID`. For "cloudResource" connection, the service account is in `status.observedState.cloudResource.serviceAccountID`.
bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.name
Required*
string
bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.namespace
Optional
string
bindings[].members[].memberFrom.bigQueryConnectionConnectionRef.type
Required*
string
Type field specifies the connection type of the BigQueryConnectionConnection resource, whose service account is to be bound to the role.
bindings[].members[].memberFrom.logSinkRef
Optional
object
The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
bindings[].members[].memberFrom.logSinkRef.name
Required*
string
bindings[].members[].memberFrom.logSinkRef.namespace
Optional
string
bindings[].members[].memberFrom.serviceAccountRef
Optional
object
The IAMServiceAccount to be bound to the role.
bindings[].members[].memberFrom.serviceAccountRef.name
Required*
string
bindings[].members[].memberFrom.serviceAccountRef.namespace
Optional
string
bindings[].members[].memberFrom.serviceIdentityRef
Optional
object
The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
bindings[].members[].memberFrom.serviceIdentityRef.name
Required*
string
bindings[].members[].memberFrom.serviceIdentityRef.namespace
Optional
string
bindings[].members[].memberFrom.sqlInstanceRef
Optional
object
The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
bindings[].members[].memberFrom.sqlInstanceRef.name
Required*
string
bindings[].members[].memberFrom.sqlInstanceRef.namespace
Optional
string
bindings[].role
Required*
string
Required. The role to bind the users to.
resourceRef
Required*
object
Immutable. Required. The Google Cloud resource to set the IAM policy on for example organization or project, etc.
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
allBindings :
- condition :
description : string
expression : string
title : string
members :
- string
role : string
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
lastAppliedBindings :
- condition :
description : string
expression : string
title : string
members :
- string
role : string
observedGeneration : integer
Fields
allBindings
list (object)
AllBindings surfaces all IAM bindings for the referenced resource.
allBindings[]
object
Specifies the members to bind to an IAM role.
allBindings[].condition
object
Optional. The condition under which the binding applies.
allBindings[].condition.description
string
allBindings[].condition.expression
string
allBindings[].condition.title
string
allBindings[].members
list (string)
Optional. The list of IAM users to be bound to the role.
allBindings[].members[]
string
allBindings[].role
string
Required. The role to bind the users to.
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
lastAppliedBindings
list (object)
LastAppliedBindings is the list of IAM bindings that were most recently applied by Config Connector.
lastAppliedBindings[]
object
Specifies the members to bind to an IAM role.
lastAppliedBindings[].condition
object
Optional. The condition under which the binding applies.
lastAppliedBindings[].condition.description
string
lastAppliedBindings[].condition.expression
string
lastAppliedBindings[].condition.title
string
lastAppliedBindings[].members
list (string)
Optional. The list of IAM users to be bound to the role.
lastAppliedBindings[].members[]
string
lastAppliedBindings[].role
string
Required. The role to bind the users to.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
Sample YAML(s)
Project Level IAMPartialPolicy
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
# **NOTE**: The policy here represents a non-authoritative declarative intent for the
# referenced project. It will merge with the existing bindings on the project.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPartialPolicy
metadata :
name : iampartialpolicy-sample-project
spec :
resourceRef :
kind : Project
name : iampartialpolicy-dep-project
bindings :
- role : roles/storage.admin
members :
- member : serviceAccount:iampartialpolicy-dep-project@iampartialpolicy-dep-project.iam.gserviceaccount.com
- role : roles/editor
members :
- memberFrom :
serviceAccountRef :
name : iampartialpolicy-dep-project
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : iampartialpolicy-dep-project
name : iampartialpolicy-dep-project
---
apiVersion : resourcemanager.cnrm.cloud.google.com/v1beta1
kind : Project
metadata :
annotations :
cnrm.cloud.google.com/auto-create-network : "false"
name : iampartialpolicy-dep-project
spec :
name : Config Connector Sample
organizationRef :
# Replace "${ORG_ID?}" with the numeric ID for your organization
external : "${ORG_ID?}"
PubSub Admin IAMPartialPolicy
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
kind : IAMPartialPolicy
metadata :
name : iampartialpolicy-sample-pubsubadmin
spec :
resourceRef :
kind : PubSubTopic
name : iampartialpolicy-dep-pubsubadmin
bindings :
- role : roles/editor
members :
- member : serviceAccount:partialpolicy-dep-pubsubadmin@${PROJECT_ID?}.iam.gserviceaccount.com
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : partialpolicy-dep-pubsubadmin
---
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : iampartialpolicy-dep-pubsubadmin
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
