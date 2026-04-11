---
title: "APIGatewayAPI \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/apigateway/apigatewayapi
  title: "APIGatewayAPI \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
APIGatewayAPI
The APIGatewayAPI resource allows you to manage an API within API Gateway. An API is a logical grouping of resources that provides a name for a set of functionality that is exposed through an API Gateway.
Property
Value
Google Cloud Service Name
API Gateway
Google Cloud Service Documentation
/api-gateway/docs/
Google Cloud REST Resource Name
apigateway/v1/projects.locations.apis
Google Cloud REST Resource Documentation
/api-gateway/docs/reference/rest/v1/projects.locations.apis
Config Connector Resource Short Names
gcpapigatewayapi gcpapigatewayapis apigatewayapi
Config Connector Service Name
apigateway.googleapis.com
Config Connector Resource Fully Qualified Name
apigatewayapis.apigateway.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
displayName : string
labels :
string : string
managedService : string
projectRef :
external : string
kind : string
name : string
namespace : string
resourceID : string
Fields
displayName
Optional
string
Optional. Display name.
labels
Optional
map (key: string, value: string)
Optional. Resource labels to represent user-provided metadata. For more information, see the {{compute_name_short}} documentation: https://cloud.google.com/compute/docs/labeling-resources
managedService
Optional
string
Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API.
projectRef
Optional
object
Optional. The project that this resource belongs to.
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
The APIGatewayAPI name. If not given, the metadata.name will be used.
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
name : string
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
A unique specifier for the APIGatewayAPI resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.createTime
string
Created time.
observedState.name
string
Resource name of the API. Format: projects/{project}/locations/global/apis/{api}
observedState.state
string
State of the API.
observedState.updateTime
string
Updated time.
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
apiVersion : apigateway.cnrm.cloud.google.com/v1beta1
kind : APIGatewayAPI
metadata :
name : apigatewayapi-sample
spec :
projectRef :
external : projects/${PROJECT_ID?}
labels :
name : "wrench"
displayName : "Initial displayName"
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
