---
title: "ApigeeOrganization \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeorganization
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeorganization
  title: "ApigeeOrganization \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ApigeeOrganization
Property
Value
Google Cloud Service Name
Apigee
Google Cloud Service Documentation
/apigee/docs/
Google Cloud REST Resource Name
organizations
Google Cloud REST Resource Documentation
/apigee/docs/reference/apis/apigee/rest/v1/organizations
Config Connector Resource Short Names
gcpapigeeorganization gcpapigeeorganizations apigeeorganization
Config Connector Service Name
apigee.googleapis.com
Config Connector Resource Fully Qualified Name
apigeeorganizations.apigee.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
addonsConfig :
advancedApiOpsConfig :
enabled : boolean
monetizationConfig :
enabled : boolean
analyticsRegion : string
authorizedNetworkRef :
external : string
name : string
namespace : string
description : string
displayName : string
projectRef :
external : string
kind : string
name : string
namespace : string
properties :
string : string
resourceID : string
runtimeDatabaseEncryptionKeyRef :
external : string
name : string
namespace : string
runtimeType : string
Fields
addonsConfig
Optional
object
Addon configurations of the Apigee organization.
addonsConfig.advancedApiOpsConfig
Optional
object
Configuration for the Advanced API Ops add-on.
addonsConfig.advancedApiOpsConfig.enabled
Optional
boolean
Flag that specifies whether the Advanced API Ops add-on is enabled.
addonsConfig.monetizationConfig
Optional
object
Configuration for the Monetization add-on.
addonsConfig.monetizationConfig.enabled
Optional
boolean
Flag that specifies whether the Monetization add-on is enabled.
analyticsRegion
Required
string
Required. DEPRECATED: This field will eventually be deprecated and replaced with a differently-named field. Primary Google Cloud region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).
authorizedNetworkRef
Optional
object
Compute Engine network used for Service Networking to be peered with Apigee runtime instances. See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started). Valid only when [RuntimeType](#RuntimeType) is set to `CLOUD`. The value must be set before the creation of a runtime instance and can be updated only when there are no runtime instances. For example: `default`. Apigee also supports shared VPC (that is, the host network project is not the same as the one that is peering with Apigee). See [Shared VPC overview](https://cloud.google.com/vpc/docs/shared-vpc). To use a shared VPC network, use the following format: `projects/{host-project-id}/{region}/networks/{network-name}`. For example: `projects/my-sharedvpc-host/global/networks/mynetwork` **Note:** Not supported for Apigee hybrid.
authorizedNetworkRef.external
Optional
string
The value of an externally managed ComputeNetwork resource. Should be in the format "https://www.googleapis.com/compute/{{version}}/projects/{{projectId}}/global/networks/{{networkId}}" or "projects/{{projectId}}/global/networks/{{networkId}}"
authorizedNetworkRef.name
Optional
string
The name of a ComputeNetwork resource.
authorizedNetworkRef.namespace
Optional
string
The namespace of a ComputeNetwork resource.
description
Optional
string
Description of the Apigee organization.
displayName
Optional
string
Display name for the Apigee organization. Unused, but reserved for future use.
projectRef
Required
object
Required. Name of the GCP project in which to associate the Apigee organization.
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
properties
Optional
map (key: string, value: string)
Properties defined in the Apigee organization profile.
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
runtimeDatabaseEncryptionKeyRef
Optional
object
Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. Update is not allowed after the organization is created. If not specified or [RuntimeType](#RuntimeType) is `TRIAL`, a Google-Managed encryption key will be used. For example: "projects/foo/locations/us/keyRings/bar/cryptoKeys/baz". **Note:** Not supported for Apigee hybrid.
runtimeDatabaseEncryptionKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
runtimeDatabaseEncryptionKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
runtimeDatabaseEncryptionKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
runtimeType
Required
string
Required. Runtime type of the Apigee organization based on the Apigee subscription purchased.
Status
Schema
billingType : string
caCertificate : string
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createdAt : integer
environments :
- string
expiresAt : integer
externalRef : string
lastModifiedAt : integer
observedGeneration : integer
observedState : {}
projectId : string
state : string
subscriptionType : string
Fields
billingType
string
Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).
caCertificate
string
Output only. Base64-encoded public certificate for the root CA of the Apigee organization. Valid only when [RuntimeType](#RuntimeType) is `CLOUD`.
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
createdAt
integer
Output only. Time that the Apigee organization was created in milliseconds since epoch.
environments
list (string)
Output only. List of environments in the Apigee organization.
environments[]
string
expiresAt
integer
Output only. Time that the Apigee organization is scheduled for deletion.
externalRef
string
A unique specifier for the ApigeeOrganization resource in GCP.
lastModifiedAt
integer
Output only. Time that the Apigee organization was last modified in milliseconds since epoch.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
projectId
string
Output only. Project ID associated with the Apigee organization.
state
string
Output only. State of the organization. Values other than ACTIVE means the resource is not ready to use.
subscriptionType
string
Output only. DEPRECATED: This will eventually be replaced by BillingType. Subscription type of the Apigee organization. Valid values include trial (free, limited, and for evaluation purposes only) or paid (full subscription has been purchased). See [Apigee pricing](https://cloud.google.com/apigee/pricing/).
Sample YAML(s)
Typical Use Case
# Copyright 2022 Google LLC
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
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeOrganization
metadata :
name : apigeeorganization-sample
spec :
projectRef :
# Replace ${PROJECT_ID?} with your project ID
external : "projects/${PROJECT_ID?}"
displayName : "basic-organization"
description : "A sample organization"
properties :
features.mart.connect.enabled : "false"
features.hybrid.enabled : "true"
analyticsRegion : "us-west1"
authorizedNetworkRef :
name : "apigeeorganization-dep"
runtimeType : "CLOUD"
addonsConfig :
advancedApiOpsConfig :
enabled : true
monetizationConfig :
enabled : false
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : "apigeeorganization-dep"
spec :
autoCreateSubnetworks : false
description : A sample authorized network for an apigee organization
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
