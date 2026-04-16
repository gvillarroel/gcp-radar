---
title: "AccessContextManagerAccessPolicy \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/reference/overview
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesspolicy
  title: "AccessContextManagerAccessPolicy \_|\_ Config Connector \_|\_ Google Cloud\
    \ Documentation"
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
AccessContextManagerAccessPolicy
Property
Value
Google Cloud Service Name
AccessContextManager
Google Cloud Service Documentation
/access-context-manager/docs/
Google Cloud REST Resource Name
accesscontextmanager/v1/accessPolicies
Google Cloud REST Resource Documentation
/access-context-manager/docs/reference/rest/v1/accessPolicies
Config Connector Resource Short Names
gcpaccesscontextmanageraccesspolicy gcpaccesscontextmanageraccesspolicies accesscontextmanageraccesspolicy
Config Connector Service Name
accesscontextmanager.googleapis.com
Config Connector Resource Fully Qualified Name
accesscontextmanageraccesspolicies.accesscontextmanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
Yes
Supports IAM Conditions
No
Supports IAM Audit Configs
No
IAM External Reference Format
{{name}}
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Annotations
Fields
cnrm.cloud.google.com/organization-id
Spec
Schema
resourceID : string
title : string
Fields
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Used for acquisition only. Leave unset to create a new resource.
title
Required
string
Required. Human readable title. Does not affect behavior.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
name : string
observedGeneration : integer
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
createTime
string
Output only. Time the AccessPolicy was created in UTC.
name
string
Resource name of the AccessPolicy. Format: {policy_id}.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
updateTime
string
Output only. Time the AccessPolicy was updated in UTC.
Sample YAML(s)
Typical Use Case
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
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerAccessPolicy
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : accesspolicysample
spec :
title : Config Connector Sample
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
