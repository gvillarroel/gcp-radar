---
title: "ApigeeEnvironment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeenvironment
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeenvironment
  title: "ApigeeEnvironment \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ApigeeEnvironment
Property
Value
Google Cloud Service Name
Apigee
Google Cloud Service Documentation
/apigee/docs/
Google Cloud REST Resource Name
organizations.environments
Google Cloud REST Resource Documentation
/apigee/docs/reference/apis/apigee/rest/v1/organizations.environments
Config Connector Resource Short Names
gcpapigeeenvironment gcpapigeeenvironments apigeeenvironment
Config Connector Service Name
apigee.googleapis.com
Config Connector Resource Fully Qualified Name
apigeeenvironments.apigee.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
Yes
IAMPolicy/IAMPartialPolicy Supports Conditions
No
IAMPolicyMember Supports Conditions
No
Supports IAM Audit Configs
No
IAM External Reference Format
organizations/{{apigee_organization}}/environments/{{name}}
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
apigeeOrganizationRef :
external : string
name : string
namespace : string
description : string
displayName : string
properties :
string : string
resourceID : string
Fields
apigeeOrganizationRef
Required
object
Reference to parent Apigee Organization.
apigeeOrganizationRef.external
Optional
string
A reference to an externally managed ApigeeOrganization resource. Should be in the format "organizations/{{organizationID}}".
apigeeOrganizationRef.name
Optional
string
The name of a ApigeeOrganization resource.
apigeeOrganizationRef.namespace
Optional
string
The namespace of a ApigeeOrganization resource.
description
Optional
string
Optional. Description of the environment.
displayName
Optional
string
Optional. Display name for this environment.
properties
Optional
map (key: string, value: string)
Optional. Key-value pairs that may be used for customizing the environment.
resourceID
Optional
string
The ApigeeEnvironment name. If not given, the metadata.name will be used.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createdAt : integer
externalRef : string
lastModifiedAt : integer
observedGeneration : integer
observedState : {}
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
createdAt
integer
Output only. Creation time of this environment as milliseconds since epoch.
externalRef
string
A unique specifier for the ApigeeEnvironment resource in GCP.
lastModifiedAt
integer
Output only. Last modification time of this environment as milliseconds since epoch.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
state
string
Output only. State of the environment. Values other than ACTIVE means the resource is not ready to use.
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
kind : ApigeeEnvironment
metadata :
name : apigeeenvironment-sample
spec :
apigeeOrganizationRef :
name : "apigeeenvironment-dep"
description : "A sample environment"
properties :
key : "A sample value"
displayName : "sample-environment"
---
apiVersion : apigee.cnrm.cloud.google.com/v1beta1
kind : ApigeeOrganization
metadata :
name : apigeeenvironment-dep
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
name : "apigeeenvironment-dep"
runtimeType : "CLOUD"
addonsConfig :
advancedApiOpsConfig :
enabled : true
integrationConfig :
enabled : false
monetizationConfig :
enabled : false
---
apiVersion : compute.cnrm.cloud.google.com/v1beta1
kind : ComputeNetwork
metadata :
name : "apigeeenvironment-dep"
spec :
autoCreateSubnetworks : false
description : A sample authorized network for an apigee organization
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
