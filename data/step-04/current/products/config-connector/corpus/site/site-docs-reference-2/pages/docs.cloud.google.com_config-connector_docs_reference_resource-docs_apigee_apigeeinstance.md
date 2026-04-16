---
title: "ApigeeInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeinstance
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeinstance
  title: "ApigeeInstance \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ApigeeInstance
Property
Value
Google Cloud Service Name
Apigee
Google Cloud Service Documentation
/apigee/docs/
Google Cloud REST Resource Name
organizations.instances
Google Cloud REST Resource Documentation
/apigee/docs/reference/apis/apigee/rest/v1/organizations.instances
Config Connector Resource Short Names
gcpapigeeinstance gcpapigeeinstances apigeeinstance
Config Connector Service Name
apigee.googleapis.com
Config Connector Resource Fully Qualified Name
apigeeinstances.apigee.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
accessLoggingConfig :
enabled : boolean
filter : string
consumerAcceptList :
- string
description : string
diskEncryptionKMSCryptoKeyRef :
external : string
name : string
namespace : string
displayName : string
ipRange : string
location : string
organizationRef :
external : string
name : string
namespace : string
peeringCIDRRange : string
resourceID : string
Fields
accessLoggingConfig
Optional
object
Optional. Access logging configuration enables the access logging feature at the instance. Apigee customers can enable access logging to ship the access logs to their own project's cloud logging.
accessLoggingConfig.enabled
Optional
boolean
Optional. Boolean flag that specifies whether the customer access log feature is enabled.
accessLoggingConfig.filter
Optional
string
Optional. Ship the access log entries that match the status_code defined in the filter. The status_code is the only expected/supported filter field. (Ex: status_code) The filter will parse it to the Common Expression Language semantics for expression evaluation to build the filter condition. (Ex: "filter": status_code >= 200 && status_code
consumerAcceptList
Optional
list (string)
Optional. Customer accept list represents the list of projects (id/number) on customer side that can privately connect to the service attachment. It is an optional field which the customers can provide during the instance creation. By default, the customer project associated with the Apigee organization will be included to the list.
consumerAcceptList[]
Optional
string
description
Optional
string
Optional. Description of the instance.
diskEncryptionKMSCryptoKeyRef
Optional
object
Customer Managed Encryption Key (CMEK) used for disk and volume encryption. If not specified, a Google-Managed encryption key will be used.
diskEncryptionKMSCryptoKeyRef.external
Optional
string
A reference to an externally managed KMSCryptoKey. Should be in the format `projects/[kms_project_id]/locations/[region]/keyRings/[key_ring_id]/cryptoKeys/[key]`.
diskEncryptionKMSCryptoKeyRef.name
Optional
string
The `name` of a `KMSCryptoKey` resource.
diskEncryptionKMSCryptoKeyRef.namespace
Optional
string
The `namespace` of a `KMSCryptoKey` resource.
displayName
Optional
string
Optional. Display name for the instance.
ipRange
Optional
string
Optional. Comma-separated list of CIDR blocks of length 22 and/or 28 used to create the Apigee instance. Providing CIDR ranges is optional. You can provide just /22 or /28 or both (or neither). Ranges you provide should be freely available as part of a larger named range you have allocated to the Service Networking peering. If this parameter is not provided, Apigee automatically requests an available /22 and /28 CIDR block from Service Networking. Use the /22 CIDR block for configuring your firewall needs to allow traffic from Apigee. Input formats: `a.b.c.d/22` or `e.f.g.h/28` or `a.b.c.d/22,e.f.g.h/28`
location
Required
string
Required. Compute Engine location where the instance resides.
organizationRef
Required
object
Reference to parent Apigee Organization.
organizationRef.external
Optional
string
A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}".
organizationRef.name
Optional
string
The name of a ApigeeOrganization resource.
organizationRef.namespace
Optional
string
The namespace of a ApigeeOrganization resource.
peeringCIDRRange
Optional
string
Optional. Size of the CIDR block range that will be reserved by the instance. PAID organizations support `SLASH_16` to `SLASH_20` and defaults to `SLASH_16`. Evaluation organizations support only `SLASH_23`.
resourceID
Optional
string
The ApigeeInstance name. If not given, the metadata.name will be used.
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
createdAt : integer
host : string
lastModifiedAt : integer
port : string
runtimeVersion : string
serviceAttachment : string
state : string
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
A unique specifier for the ApigeeInstance resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createdAt
integer
Output only. Time the instance was created in milliseconds since epoch.
observedState.host
string
Output only. Internal hostname or IP address of the Apigee endpoint used by clients to connect to the service.
observedState.lastModifiedAt
integer
Output only. Time the instance was last modified in milliseconds since epoch.
observedState.port
string
Output only. Port number of the exposed Apigee endpoint.
observedState.runtimeVersion
string
Output only. Version of the runtime system running in the instance. The runtime system is the set of components that serve the API Proxy traffic in your Environments.
observedState.serviceAttachment
string
Output only. Resource name of the service attachment created for the instance in the format: `projects/{{project-id}}/regions/{{region-id}}/serviceAttachments/{{service-attachment-id}}` Apigee customers can privately forward traffic to this service attachment using the PSC endpoints.
observedState.state
string
Output only. State of the instance. Values other than `ACTIVE` means the resource is not ready to use.
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
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeInstance
metadata :
name : apigeeinstance-sample
spec :
organizationRef :
external : organizations/${PROJECT_ID?}
resourceID : apigeeinstance-sample
description : "A sample instance"
location : us-central1
accessLoggingConfig :
enabled : true
filter : "status_code > = 200 && status_code < 300"
consumerAcceptList :
- "${PROJECT_NUMBER1}"
- "${PROJECT_NUMBER2}"
displayName : "My Apigee Instance"
peeringCIDRRange : "SLASH_22"
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
