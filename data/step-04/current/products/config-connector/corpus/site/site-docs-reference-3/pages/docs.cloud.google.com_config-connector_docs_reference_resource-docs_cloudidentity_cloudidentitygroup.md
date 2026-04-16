---
title: "CloudIdentityGroup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudidentity/cloudidentitygroup
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudidentity/cloudidentitygroup
  title: "CloudIdentityGroup \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
CloudIdentityGroup
Property
Value
Google Cloud Service Name
Cloud Identity
Google Cloud Service Documentation
/identity/docs/
Google Cloud REST Resource Name
v1.groups
Google Cloud REST Resource Documentation
/identity/docs/reference/rest/v1/groups
Config Connector Resource Short Names
gcpcloudidentitygroup gcpcloudidentitygroups cloudidentitygroup
Config Connector Service Name
cloudidentity.googleapis.com
Config Connector Resource Fully Qualified Name
cloudidentitygroups.cloudidentity.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
description : string
displayName : string
groupKey :
id : string
namespace : string
initialGroupConfig : string
labels :
string : string
parent : string
resourceID : string
Fields
description
Optional
string
An extended description to help users determine the purpose of a `Group`. Must not be longer than 4,096 characters.
displayName
Optional
string
The display name of the `Group`.
groupKey
Required
object
Immutable. EntityKey of the Group.
groupKey.id
Required
string
Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
groupKey.namespace
Optional
string
Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
initialGroupConfig
Optional
string
Immutable. The initial configuration options for creating a Group. See the [API reference](https://cloud.google.com/identity/docs/reference/rest/v1beta1/groups/create#initialgroupconfig) for possible values. Default value: "EMPTY" Possible values: ["INITIAL_GROUP_CONFIG_UNSPECIFIED", "WITH_INITIAL_OWNER", "EMPTY"].
labels
Required
map (key: string, value: string)
One or more label entries that apply to the Group. Currently supported labels contain a key with an empty value. Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value. Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added. Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic. Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
parent
Required
string
Immutable. The resource name of the entity under which this `Group` resides in the Cloud Identity resource hierarchy. Must be of the form `identitysources/{identity_source}` for external [identity-mapped groups](https://support.google.com/a/answer/9039510) or `customers/{customer_id}` for Google Groups. The `customer_id` must begin with "C" (for example, 'C046psxkn'). [Find your customer ID.] (https://support.google.com/cloudidentity/answer/10070793)
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Format: groups/{groupID} or {groupID}. Used for acquisition only. Leave unset to create a new resource.
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
externalRef : string
name : string
observedGeneration : integer
observedState :
additionalGroupKeys :
- id : string
namespace : string
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
The time when the `Group` was created.
externalRef
string
A unique Config Connector specifier for the resource in GCP.
name
string
The [resource name](https://cloud.google.com/apis/design/resource_names) of the `Group`. Shall be of the form `groups/{group_id}`.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
observedState
object
ObservedState is the state of the resource as most recently observed in GCP.
observedState.additionalGroupKeys
list (object)
Additional group keys associated with the Group.
observedState.additionalGroupKeys[]
object
observedState.additionalGroupKeys[].id
string
Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
observedState.additionalGroupKeys[].namespace
string
Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
updateTime
string
The time when the `Group` was last updated.
Sample YAML(s)
Typical Use Case
# Copyright 2021 Google LLC
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
apiVersion : cloudidentity.cnrm.cloud.google.com/v1beta1
kind : CloudIdentityGroup
metadata :
name : cloudidentitygroup-sample
spec :
displayName : Cloud Identity Group Name
description : This is a test CloudIdentityGroup. It should be modified before use as a sample.
groupKey :
id : example.com
parent : customers/C00qzcxfe
labels :
cloudidentity.googleapis.com/groups.discussion_forum : ""
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
