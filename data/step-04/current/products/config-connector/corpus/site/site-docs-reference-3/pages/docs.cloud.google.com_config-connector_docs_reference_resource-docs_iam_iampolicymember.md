---
title: "IAMPolicyMember \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/iam/iampolicymember
  title: "IAMPolicyMember \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
IAMPolicyMember
IAMPolicyMember lets you manage the IAM policy
bindings for a given Google Cloud resource.
IAMPolicyMember represents a binding for a single
IAM member. It adds a binding for the given
IAM member and role to the associated
Google Cloud resource's IAM policy.
If you want to manage multiple bindings, use
IAMPartialPolicy .
If you want authoritative control over bindings, use
IAMPolicy .
Warning: IAMPolicyMember should not be used in conjunction with
IAMPolicy for the same resource. Note: When you delete an IAMPolicyMember , only the binding for the given
IAM member and role is deleted from the associated
Google Cloud resource's IAM policy. Note: Updating spec is not allowed.
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
gcpiampolicymember gcpiampolicymembers iampolicymember
Config Connector Service Name
iam.googleapis.com
Config Connector Resource Fully Qualified Name
iampolicymembers.iam.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Supported Resources
You can use IAMPolicyMember to configure IAM for
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
CloudFunctionsFunction
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
Folder
Y
IAMServiceAccount
Y
IAMWorkforcePool
KMSCryptoKey
Y
KMSKeyRing
Y
NetworkSecurityAuthorizationPolicy
NetworkSecurityClientTLSPolicy
NetworkSecurityServerTLSPolicy
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
condition :
description : string
expression : string
title : string
member : string
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
resourceRef :
apiVersion : string
external : string
kind : string
name : string
namespace : string
role : string
Fields
condition
Optional
object
Immutable. Optional. The condition under which the binding applies.
condition.description
Optional
string
condition.expression
Required*
string
condition.title
Required*
string
member
Optional
string
Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used.
memberFrom
Optional
object
Immutable. The IAM identity to be bound to the role. Exactly one of 'member' or 'memberFrom' must be used, and only one subfield within 'memberFrom' can be used.
memberFrom.bigQueryConnectionConnectionRef
Optional
object
BigQueryConnectionConnection whose service account is to be bound to the role. Use the Type field to specify the connection type. For "spark" connetion, the service account is in `status.observedState.spark.serviceAccountID`. For "cloudSQL" connection, the service account is in `status.observedState.cloudSQL.serviceAccountID`. For "cloudResource" connection, the service account is in `status.observedState.cloudResource.serviceAccountID`.
memberFrom.bigQueryConnectionConnectionRef.name
Required*
string
memberFrom.bigQueryConnectionConnectionRef.namespace
Optional
string
memberFrom.bigQueryConnectionConnectionRef.type
Required*
string
Type field specifies the connection type of the BigQueryConnectionConnection resource, whose service account is to be bound to the role.
memberFrom.logSinkRef
Optional
object
The LoggingLogSink whose writer identity (i.e. its 'status.writerIdentity') is to be bound to the role.
memberFrom.logSinkRef.name
Required*
string
memberFrom.logSinkRef.namespace
Optional
string
memberFrom.serviceAccountRef
Optional
object
The IAMServiceAccount to be bound to the role.
memberFrom.serviceAccountRef.name
Required*
string
memberFrom.serviceAccountRef.namespace
Optional
string
memberFrom.serviceIdentityRef
Optional
object
The ServiceIdentity whose service account (i.e., its 'status.email') is to be bound to the role.
memberFrom.serviceIdentityRef.name
Required*
string
memberFrom.serviceIdentityRef.namespace
Optional
string
memberFrom.sqlInstanceRef
Optional
object
The SQLInstance whose service account (i.e. its 'status.serviceAccountEmailAddress') is to be bound to the role.
memberFrom.sqlInstanceRef.name
Required*
string
memberFrom.sqlInstanceRef.namespace
Optional
string
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
role
Required*
string
Immutable. Required. The role for which the Member will be bound.
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
External Organization Level Policy Member
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-orglevel
spec :
member : serviceAccount:iampolicymember-dep-orglevel@${PROJECT_ID?}.iam.gserviceaccount.com
role : roles/storage.admin
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
name : iampolicymember-dep-orglevel
External Project Level Policy Member
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-projlevel
spec :
member : serviceAccount:iampolicymember-dep-projlevel@${PROJECT_ID?}.iam.gserviceaccount.com
role : roles/storage.admin
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
name : iampolicymember-dep-projlevel
KMS Policy Member With Condition
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-condition
spec :
member : serviceAccount:iampolicymember-dep-condition@${PROJECT_ID?}.iam.gserviceaccount.com
role : roles/cloudkms.admin
condition :
title : expires_after_2019_12_31
description : Expires at midnight of 2019-12-31
expression : request.time < timestamp("2020-01-01T00:00:00Z")
resourceRef :
kind : KMSKeyRing
name : iampolicymember-dep-condition
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : iampolicymember-dep-condition
---
apiVersion : kms.cnrm.cloud.google.com/v1beta1
kind : KMSKeyRing
metadata :
name : iampolicymember-dep-condition
spec :
location : us-central1
Org Level IAM Custom Role Policy Member
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-orgrole
spec :
member : serviceAccount:iampolicymember-dep-orgrole@${PROJECT_ID?}.iam.gserviceaccount.com
role : organizations/${ORG_ID?}/roles/iampolicymemberdeporgrole
resourceRef :
kind : Project
external : projects/${PROJECT_ID?}
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMCustomRole
metadata :
annotations :
# Replace "${ORG_ID?}" with your organization ID
cnrm.cloud.google.com/organization-id : "${ORG_ID?}"
name : iampolicymemberdeporgrole
spec :
title : Example Organization-Level Custom Role
description : This role only contains two permissions - publish and update
permissions :
- pubsub.topics.publish
- pubsub.topics.update
stage : GA
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : iampolicymember-dep-orgrole
Policy Member With BigQueryConnectionConnection Reference
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
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-bqccref
spec :
memberFrom :
bigQueryConnectionConnectionRef :
type : cloudSQL
name : iampolicymember-dep-bqccref
role : roles/editor
resourceRef :
kind : Project
# Replace ${PROJECT_ID?} with your project ID
external : projects/${PROJECT_ID?}
---
apiVersion : bigqueryconnection.cnrm.cloud.google.com/v1beta1
kind : BigQueryConnectionConnection
metadata :
name : iampolicymember-dep-bqccref
spec :
location : us-central1
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : ${PROJECT_ID?}
cloudSQL :
instanceRef :
name : iampolicymember-dep-bqccref
databaseRef :
name : iampolicymember-dep-bqccref
type : "MYSQL"
credential :
secretRef :
name : iampolicymember-dep-bqccref
---
apiVersion : v1
kind : Secret
metadata :
name : iampolicymember-dep-bqccref
type : kubernetes.io/basic-auth
stringData :
username : iampolicymember-dep-bqccref
password : cGFzc3dvcmQ=
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLDatabase
metadata :
name : iampolicymember-dep-bqccref
spec :
charset : utf8
instanceRef :
name : iampolicymember-dep-bqccref
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLInstance
metadata :
name : iampolicymember-dep-bqccref
spec :
databaseVersion : MYSQL_5_7
region : us-central1
settings :
locationPreference :
zone : us-central1-a
tier : db-custom-1-3840
---
apiVersion : sql.cnrm.cloud.google.com/v1beta1
kind : SQLUser
metadata :
name : iampolicymember-dep-bqccref
spec :
instanceRef :
name : iampolicymember-dep-bqccref
host : foo
password :
valueFrom :
secretKeyRef :
name : iampolicymember-dep-bqccref
key : password
Policy Member With Member Reference
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-memberref
spec :
memberFrom :
serviceAccountRef :
name : iampolicymember-dep-memberref
role : roles/editor
resourceRef :
kind : PubSubTopic
name : iampolicymember-dep-memberref
---
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
name : iampolicymember-dep-memberref
---
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : iampolicymember-dep-memberref
PubSub Admin Policy Member
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
kind : IAMPolicyMember
metadata :
name : iampolicymember-sample-pubsubadmin
spec :
member : serviceAccount:iampolicymember-dep-pubsub@${PROJECT_ID?}.iam.gserviceaccount.com
role : roles/editor
resourceRef :
kind : PubSubTopic
name : iampolicymember-dep-pubsubadmin
---
# Replace ${PROJECT_ID?} below with your desired project ID.
apiVersion : iam.cnrm.cloud.google.com/v1beta1
kind : IAMServiceAccount
metadata :
annotations :
cnrm.cloud.google.com/project-id : ${PROJECT_ID?}
name : iampolicymember-dep-pubsub
---
apiVersion : pubsub.cnrm.cloud.google.com/v1beta1
kind : PubSubTopic
metadata :
name : iampolicymember-dep-pubsubadmin
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
