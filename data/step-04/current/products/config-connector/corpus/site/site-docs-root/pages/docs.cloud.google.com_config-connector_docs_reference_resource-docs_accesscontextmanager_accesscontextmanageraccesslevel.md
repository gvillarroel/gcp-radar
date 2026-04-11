---
title: "AccessContextManagerAccessLevel \_|\_ Config Connector \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/config-connector/docs
source_metadata:
  url: https://docs.cloud.google.com/config-connector/docs/reference/resource-docs/accesscontextmanager/accesscontextmanageraccesslevel
  title: "AccessContextManagerAccessLevel \_|\_ Config Connector \_|\_ Google Cloud\
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
AccessContextManagerAccessLevel
Property
Value
Google Cloud Service Name
AccessContextManager
Google Cloud Service Documentation
/access-context-manager/docs/
Google Cloud REST Resource Name
accesscontextmanager/v1/accessLevels
Google Cloud REST Resource Documentation
/access-context-manager/docs/reference/rest/v1/accessPolicies.accessLevels
Config Connector Resource Short Names
gcpaccesscontextmanageraccesslevel gcpaccesscontextmanageraccesslevels accesscontextmanageraccesslevel
Config Connector Service Name
accesscontextmanager.googleapis.com
Config Connector Resource Fully Qualified Name
accesscontextmanageraccesslevels.accesscontextmanager.cnrm.cloud.google.com
Can Be Referenced by IAMPolicy/IAMPolicyMember
No
Config Connector Default Average Reconcile Interval In Seconds
600
Custom Resource Definition Properties
Spec
Schema
accessPolicyRef :
external : string
name : string
namespace : string
basic :
combiningFunction : string
conditions :
- devicePolicy :
allowedDeviceManagementLevels :
- string
allowedEncryptionStatuses :
- string
osConstraints :
- minimumVersion : string
osType : string
requireVerifiedChromeOs : boolean
requireAdminApproval : boolean
requireCorpOwned : boolean
requireScreenLock : boolean
ipSubnetworks :
- string
members :
- serviceAccountRef :
external : string
name : string
namespace : string
user : string
negate : boolean
regions :
- string
requiredAccessLevels :
- external : string
name : string
namespace : string
custom :
expr :
description : string
expression : string
location : string
title : string
description : string
resourceID : string
title : string
Fields
accessPolicyRef
Required
object
The AccessContextManagerAccessPolicy this
AccessContextManagerAccessLevel lives in.
accessPolicyRef.external
Optional
string
Allowed value: string of the format `accessPolicies/{{value}}`, where {{value}} is the `name` field of an `AccessContextManagerAccessPolicy` resource.
accessPolicyRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
accessPolicyRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
basic
Optional
object
A set of predefined conditions for the access level and a combining function.
basic.combiningFunction
Optional
string
How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"].
basic.conditions
Required*
list (object)
A set of requirements for the AccessLevel to be granted.
basic.conditions[]
Required*
object
basic.conditions[].devicePolicy
Optional
object
Device specific restrictions, all restrictions must hold for
the Condition to be true. If not specified, all devices are
allowed.
basic.conditions[].devicePolicy.allowedDeviceManagementLevels
Optional
list (string)
A list of allowed device management levels.
An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"].
basic.conditions[].devicePolicy.allowedDeviceManagementLevels[]
Optional
string
basic.conditions[].devicePolicy.allowedEncryptionStatuses
Optional
list (string)
A list of allowed encryptions statuses.
An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"].
basic.conditions[].devicePolicy.allowedEncryptionStatuses[]
Optional
string
basic.conditions[].devicePolicy.osConstraints
Optional
list (object)
A list of allowed OS versions.
An empty list allows all types and all versions.
basic.conditions[].devicePolicy.osConstraints[]
Optional
object
basic.conditions[].devicePolicy.osConstraints[].minimumVersion
Optional
string
The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".
basic.conditions[].devicePolicy.osConstraints[].osType
Required*
string
The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"].
basic.conditions[].devicePolicy.osConstraints[].requireVerifiedChromeOs
Optional
boolean
If you specify DESKTOP_CHROME_OS for osType, you can optionally include requireVerifiedChromeOs to require Chrome Verified Access.
basic.conditions[].devicePolicy.requireAdminApproval
Optional
boolean
Whether the device needs to be approved by the customer admin.
basic.conditions[].devicePolicy.requireCorpOwned
Optional
boolean
Whether the device needs to be corp owned.
basic.conditions[].devicePolicy.requireScreenLock
Optional
boolean
Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
basic.conditions[].ipSubnetworks
Optional
list (string)
A list of CIDR block IP subnetwork specification. May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.
basic.conditions[].ipSubnetworks[]
Optional
string
basic.conditions[].members
Optional
list (object)
basic.conditions[].members[]
Optional
object
An allowed list of members (users, service accounts).
Using groups is not supported.
The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
basic.conditions[].members[].serviceAccountRef
Optional
object
basic.conditions[].members[].serviceAccountRef.external
Optional
string
Allowed value: string of the format `serviceAccount:{{value}}`, where {{value}} is the `email` field of an `IAMServiceAccount` resource.
basic.conditions[].members[].serviceAccountRef.name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
basic.conditions[].members[].serviceAccountRef.namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
basic.conditions[].members[].user
Optional
string
basic.conditions[].negate
Optional
boolean
Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.
basic.conditions[].regions
Optional
list (string)
The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code.
basic.conditions[].regions[]
Optional
string
basic.conditions[].requiredAccessLevels
Optional
list (object)
basic.conditions[].requiredAccessLevels[]
Optional
object
A list of other access levels defined in the same policy.
Referencing an AccessContextManagerAccessLevel which does not exist
is an error. All access levels listed must be granted for the
condition to be true.
basic.conditions[].requiredAccessLevels[].external
Optional
string
Allowed value: The `name` field of an `AccessContextManagerAccessLevel` resource.
basic.conditions[].requiredAccessLevels[].name
Optional
string
Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
basic.conditions[].requiredAccessLevels[].namespace
Optional
string
Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
custom
Optional
object
Custom access level conditions are set using the Cloud Common Expression Language to represent the necessary conditions for the level to apply to a request.
See CEL spec at: https://github.com/google/cel-spec.
custom.expr
Required*
object
Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language.
This page details the objects and attributes that are used to the build the CEL expressions for
custom access levels - https://cloud.google.com/access-context-manager/docs/custom-access-level-spec.
custom.expr.description
Optional
string
Description of the expression.
custom.expr.expression
Required*
string
Textual representation of an expression in Common Expression Language syntax.
custom.expr.location
Optional
string
String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
custom.expr.title
Optional
string
Title for the expression, i.e. a short string describing its purpose.
description
Optional
string
Description of the AccessLevel and its use. Does not affect behavior.
resourceID
Optional
string
Immutable. Optional. The name of the resource. Used for creation and acquisition. When unset, the value of `metadata.name` is used as the default.
title
Required
string
Human readable title. Must be unique within the Policy.
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
Conditions represent the latest available observation of the resource's current state.
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
kind : AccessContextManagerAccessLevel
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : accesslevelsample
spec :
accessPolicyRef :
name : accessleveldep
title : Config Connector Sample Access Level
basic :
conditions :
- devicePolicy :
requireCorpOwned : true
- devicePolicy :
osConstraints :
- osType : DESKTOP_CHROME_OS
combiningFunction : OR
---
apiVersion : accesscontextmanager.cnrm.cloud.google.com/v1beta1
kind : AccessContextManagerAccessPolicy
metadata :
annotations :
# Replace "${ORG_ID?}" with the numeric ID for your organization
cnrm.cloud.google.com/organization-id : "${ORG_ID}"
name : accessleveldep
spec :
title : Config Connector Access Level Dependency
Note: If you have any trouble with instantiating the resource, refer to Troubleshoot Config Connector .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
