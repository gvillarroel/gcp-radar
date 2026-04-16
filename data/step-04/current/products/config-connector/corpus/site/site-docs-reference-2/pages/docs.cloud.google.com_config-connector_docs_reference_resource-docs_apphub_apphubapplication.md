---
title: "AppHubApplication \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apphub/apphubapplication
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apphub/apphubapplication
  title: "AppHubApplication \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
AppHubApplication
The AppHubApplication resource represents an application registered in App Hub. App Hub helps you discover, deploy, and manage applications and services running in Google Cloud.
Property
Value
Google Cloud Service Name
App Hub
Google Cloud Service Documentation
/app-hub/docs/
Google Cloud REST Resource Name
v1.projects.locations.applications
Google Cloud REST Resource Documentation
/app-hub/docs/reference/rest/v1/projects.locations.applications
Config Connector Resource Short Names
gcpapphubapplication gcpapphubapplications apphubapplication
Config Connector Service Name
apphub.googleapis.com
Config Connector Resource Fully Qualified Name
apphubapplications.apphub.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
attributes :
businessOwners :
- displayName : string
email : string
criticality :
type : string
developerOwners :
- displayName : string
email : string
environment :
type : string
operatorOwners :
- displayName : string
email : string
description : string
displayName : string
location : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
scope :
type : string
Fields
attributes
Optional
object
Optional. Consumer provided attributes.
attributes.businessOwners
Optional
list (object)
Optional. Business team that ensures user needs are met and value is delivered
attributes.businessOwners[]
Optional
object
attributes.businessOwners[].displayName
Optional
string
Optional. Contact's name. Can have a maximum length of 63 characters.
attributes.businessOwners[].email
Optional
string
Required. Email address of the contacts.
attributes.criticality
Optional
object
Optional. User-defined criticality information.
attributes.criticality.type
Optional
string
Required. Criticality Type.
attributes.developerOwners
Optional
list (object)
Optional. Developer team that owns development and coding.
attributes.developerOwners[]
Optional
object
attributes.developerOwners[].displayName
Optional
string
Optional. Contact's name. Can have a maximum length of 63 characters.
attributes.developerOwners[].email
Optional
string
Required. Email address of the contacts.
attributes.environment
Optional
object
Optional. User-defined environment information.
attributes.environment.type
Optional
string
Required. Environment Type.
attributes.operatorOwners
Optional
list (object)
Optional. Operator team that ensures runtime and operations.
attributes.operatorOwners[]
Optional
object
attributes.operatorOwners[].displayName
Optional
string
Optional. Contact's name. Can have a maximum length of 63 characters.
attributes.operatorOwners[].email
Optional
string
Required. Email address of the contacts.
description
Optional
string
Optional. User-defined description of an Application. Can have a maximum length of 2048 characters.
displayName
Optional
string
Optional. User-defined name for the Application. Can have a maximum length of 63 characters.
location
Optional
string
Required. The location of the application.
projectRef
Optional
object
Required. The host project of the application.
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
resourceID
Optional
string
The AppHubApplication name. If not given, the metadata.name will be used.
scope
Optional
object
Required. Immutable. Defines what data can be included into this Application. Limits which Services and Workloads can be registered.
scope.type
Optional
string
Required. Scope Type.
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
state : string
uid : string
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
A unique specifier for the AppHubApplication resource in Google Cloud .
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in {{gcp_name_short}}.
observedState.createTime
string
Output only. Create time.
observedState.state
string
Output only. Application state.
observedState.uid
string
Output only. A universally unique identifier (in UUID4 format) for the `Application`.
observedState.updateTime
string
Output only. Update time.
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
apiVersion : apphub.cnrm.cloud.google.com/v1beta1
kind : AppHubApplication
metadata :
name : apphubapplication-sample
spec :
projectRef :
external : projects/${PROJECT_ID?}
location : us-west2
description : "Initial description"
scope :
type : REGIONAL
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
