---
title: "ApigeeEnvgroup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeenvgroup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigee/apigeeenvgroup
  title: "ApigeeEnvgroup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
ApigeeEnvgroup
Property
Value
Google Cloud Service Name
Apigee
Google Cloud Service Documentation
/apigee/docs/
Google Cloud REST Resource Name
organizations.envgroups
Google Cloud REST Resource Documentation
/apigee/docs/reference/apis/apigee/rest/v1/organizations.envgroups
Config Connector Resource Short Names
gcpapigeeenvgroup gcpapigeeenvgroups apigeeenvgroup
Config Connector Service Name
apigee.googleapis.com
Config Connector Resource Fully Qualified Name
apigeeenvgroups.apigee.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
hostnames :
- string
organizationRef :
external : string
name : string
namespace : string
resourceID : string
Fields
hostnames
Optional
list (string)
Host names for this environment group.
hostnames[]
Optional
string
organizationRef
Required
object
ApigeeOrganizationRef is a reference to a ApigeeOrganization resource.
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
resourceID
Optional
string
The ApigeeEnvgroup name. If not given, the metadata.name will be used.
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
lastModifiedAt : integer
name : string
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
A unique specifier for the ApigeeEnvgroup resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createdAt
integer
Output only. The time at which the environment group was created as milliseconds since epoch.
observedState.lastModifiedAt
integer
Output only. The time at which the environment group was last updated as milliseconds since epoch.
observedState.name
string
ID of the environment group.
observedState.state
string
Output only. State of the environment group. Values other than ACTIVE means the resource is not ready to use.
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
kind : ApigeeEnvgroup
metadata :
name : apigeeenvgroup-sample
spec :
hostnames :
- sample.mytesthost.net
organizationRef :
external : organizations/${PROJECT_ID?}
resourceID : apigeeenvgroup-sample
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
