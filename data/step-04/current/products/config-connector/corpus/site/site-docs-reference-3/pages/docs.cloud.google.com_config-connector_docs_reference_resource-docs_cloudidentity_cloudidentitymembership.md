---
title: "CloudIdentityMembership \_|\_ Config Connector \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudidentity/cloudidentitymembership
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/cloudidentity/cloudidentitymembership
  title: "CloudIdentityMembership \_|\_ Config Connector \_|\_ Google Cloud Documentation"
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
CloudIdentityMembership
Property
Value
Google Cloud Service Name
Cloud Identity
Google Cloud Service Documentation
/identity/docs/
Google Cloud REST Resource Name
v1beta1.groups.memberships
Google Cloud REST Resource Documentation
/identity/docs/reference/rest/v1beta1/groups.memberships
Config Connector Resource Short Names
gcpcloudidentitymembership gcpcloudidentitymemberships cloudidentitymembership
Config Connector Service Name
cloudidentity.googleapis.com
Config Connector Resource Fully Qualified Name
cloudidentitymemberships.cloudidentity.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
groupRef :
external : string
name : string
namespace : string
memberKey :
id : string
namespace : string
preferredMemberKey :
id : string
namespace : string
resourceID : string
roles :
- expiryDetail :
expireTime : string
name : string
restrictionEvaluations :
memberRestrictionEvaluation :
state : string
Fields
groupRef
Required
object
Immutable.
groupRef.external
Optional
string
A reference to an externally managed CloudIdentityGroup resource. Should be in the format "groups/{{groupID}}".
groupRef.name
Optional
string
The name of a CloudIdentityGroup resource.
groupRef.namespace
Optional
string
The namespace of a CloudIdentityGroup resource.
memberKey
Optional
object
Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned. Do not set. This is a legacy OUTPUT-ONLY field.
memberKey.id
Required*
string
Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
memberKey.namespace
Optional
string
Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
preferredMemberKey
Required
object
Required. Immutable. The `EntityKey` of the member. Either `member_key` or `preferred_member_key` must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
preferredMemberKey.id
Required
string
Immutable. The ID of the entity. For Google-managed entities, the `id` must be the email address of an existing group or user. For external-identity-mapped entities, the `id` must be a string conforming to the Identity Source's requirements. Must be unique within a `namespace`.
preferredMemberKey.namespace
Optional
string
Immutable. The namespace in which the entity exists. If not specified, the `EntityKey` represents a Google-managed entity such as a Google user or a Google Group. If specified, the `EntityKey` represents an external-identity-mapped group. The namespace must correspond to an identity source created in Admin Console and must be in the form of `identitysources/{identity_source_id}`.
resourceID
Optional
string
Immutable. Optional. The service-generated name of the resource. Format: {membershipID}. Used for acquisition only. Leave unset to create a new resource.
roles
Required
list (object)
The `MembershipRole`s that apply to the `Membership`. If unspecified, defaults to a single `MembershipRole` with `name` `MEMBER`. Must not contain duplicate `MembershipRole`s with the same `name`.
roles[]
Required
object
roles[].expiryDetail
Optional
object
The expiry details of the `MembershipRole`. Expiry details are only supported for `MEMBER` `MembershipRoles`. May be set if `name` is `MEMBER`. Must not be set if `name` is any other value.
roles[].expiryDetail.expireTime
Optional
string
The time at which the `MembershipRole` will expire.
roles[].name
Required
string
The name of the `MembershipRole`. Must be one of `OWNER`, `MANAGER`, `MEMBER`.
roles[].restrictionEvaluations
Optional
object
Evaluations of restrictions applied to parent group on this membership.
roles[].restrictionEvaluations.memberRestrictionEvaluation
Optional
object
Evaluation of the member restriction applied to this membership. Empty if the user lacks permission to view the restriction evaluation.
roles[].restrictionEvaluations.memberRestrictionEvaluation.state
Optional
string
Output only. The current state of the restriction
* Field is required when parent field is specified
Status
Schema
conditions :
- lastTransitionTime : string
message : string
reason : string
status : string
type : string
createTime : string
deliverySetting : string
displayName :
familyName : string
fullName : string
givenName : string
externalRef : string
observedGeneration : integer
type : string
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
Output only. The time when the `Membership` was created.
deliverySetting
string
Output only. Delivery setting associated with the membership. Possible values: DELIVERY_SETTING_UNSPECIFIED, ALL_MAIL, DIGEST, DAILY, NONE, DISABLED
displayName
object
Output only. The display name of this member, if available
displayName.familyName
string
Output only. Member's family name
displayName.fullName
string
Output only. Localized UTF-16 full name for the member. Localization is done based on the language in the request and the language of the stored display name.
displayName.givenName
string
Output only. Member's given name
externalRef
string
A unique Config Connector specifier for the resource in GCP.
observedGeneration
integer
ObservedGeneration is the generation of the resource that was most recently observed by the Config Connector controller. If this is equal to metadata.generation, then that means that the current reported status reflects the most recent desired state of the resource.
type
string
Output only. The type of the membership. Possible values: OWNER_TYPE_UNSPECIFIED, OWNER_TYPE_CUSTOMER, OWNER_TYPE_PARTNER
updateTime
string
Output only. The time when the `Membership` was last updated.
Sample YAML(s)
Membership With Expiration Date
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
kind : CloudIdentityMembership
metadata :
name : cloudidentitymembership-sample-expirationdate
spec :
groupRef :
name : cloudidentitymembership-dep-expirationdate
preferredMemberKey :
id : test-member@example.com
roles :
- name : MEMBER
expiryDetail :
expireTime : 2222-10-02T15:01:23Z
---
apiVersion : cloudidentity.cnrm.cloud.google.com/v1beta1
kind : CloudIdentityGroup
metadata :
name : cloudidentitymembership-dep-expirationdate
spec :
displayName : Cloud Identity Group Name
description : This is a test CloudIdentityGroup. It should be modified before use as a sample.
groupKey :
id : example.com
parent : customers/C00qzcxfe
labels :
cloudidentity.googleapis.com/groups.discussion_forum : ""
Membership With Manager Role
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
kind : CloudIdentityMembership
metadata :
name : cloudidentitymembership-sample-managerrole
spec :
groupRef :
name : cloudidentitymembership-dep-managerrole
preferredMemberKey :
id : test-member@example.com
roles :
- name : MEMBER
- name : MANAGER
---
apiVersion : cloudidentity.cnrm.cloud.google.com/v1beta1
kind : CloudIdentityGroup
metadata :
name : cloudidentitymembership-dep-managerrole
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
