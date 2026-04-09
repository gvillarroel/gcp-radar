---
title: "REST Resource: policies \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/policies
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/policies
  title: "REST Resource: policies \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: policies | Cloud Identity | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Cloud Identity
Start free
Overview
Guides
Reference
Resources
More
Technology areas
More
Overview
Guides
Reference
Resources
Cross-product tools
More
Console
Cloud Identity
All APIs & references
REST reference
Overview
v1
REST Resources
customers.userinvitations
Overview
cancel
get
isInvitableUser
list
send
devices
Overview
cancelWipe
create
delete
get
list
wipe
devices.deviceUsers
Overview
approve
block
cancelWipe
delete
get
list
lookup
wipe
devices.deviceUsers.clientStates
Overview
get
list
patch
groups
Overview
create
delete
get
getSecuritySettings
list
lookup
patch
search
updateSecuritySettings
groups.memberships
Overview
checkTransitiveMembership
create
delete
get
getMembershipGraph
list
lookup
modifyMembershipRoles
searchDirectGroups
searchTransitiveGroups
searchTransitiveMemberships
inboundOidcSsoProfiles
Overview
create
delete
get
list
patch
inboundSamlSsoProfiles
Overview
create
delete
get
list
patch
inboundSamlSsoProfiles.idpCredentials
Overview
add
delete
get
list
inboundSsoAssignments
Overview
create
delete
get
list
patch
policies
Overview
get
list
Types
EntityKey
RelationType
SecuritySettings
TransitiveMembershipRole
View
v1beta1
REST Resources
customers. userinvitations
Overview
cancel
get
isInvitableUser
list
send
devices
Overview
cancelWipe
create
delete
get
list
wipe
devices. device Users
Overview
approve
block
cancelWipe
delete
get
list
lookup
wipe
devices. device Users. client States
Overview
get
patch
groups
Overview
create
delete
get
getSecuritySettings
list
lookup
patch
search
updateSecuritySettings
groups. memberships
Overview
checkTransitiveMembership
create
delete
get
getMembershipGraph
list
lookup
modifyMembershipRoles
searchDirectGroups
searchTransitiveGroups
searchTransitiveMemberships
inbound Oidc Sso Profiles
Overview
create
delete
get
list
patch
inbound Saml Sso Profiles
Overview
create
delete
get
list
patch
inbound Saml Sso Profiles. idp Credentials
Overview
add
delete
get
list
inbound Sso Assignments
Overview
create
delete
get
list
patch
org Units. memberships
Overview
list
move
policies
Overview
create
delete
get
list
patch
Types
Entity Key
Relation Type
Security Settings
Transitive Membership Role
Shared types
Types
Operation
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Resource: Policy
PolicyQuery
Setting
PolicyType
Methods create
delete
get
list
patch
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Policy
PolicyQuery
Setting
PolicyType
Methods create
delete
get
list
patch
Resource: Policy
A Policy resource binds an instance of a single Setting with the scope of a PolicyQuery. The Setting instance will be applied to all entities that satisfy the query.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"customer" : string ,
"policyQuery" : {
object ( PolicyQuery )
} ,
"setting" : {
object ( Setting )
} ,
"type" : enum ( PolicyType )
}
Fields
name
string
Output only. Identifier. The resource name of the Policy. Format: policies/{policy}.
customer
string
Immutable. Customer that the Policy belongs to. The value is in the format 'customers/{customerId}'. The customerId must begin with "C" To find your customer ID in Admin Console see https://support.google.com/a/answer/10070793 .
policy Query
object ( PolicyQuery )
Required. The PolicyQuery the Setting applies to.
setting
object ( Setting )
Required. The Setting configured by this Policy.
type
enum ( PolicyType )
Output only. The type of the policy.
Policy Query
PolicyQuery
JSON representation
{
"query" : string ,
"orgUnit" : string ,
"group" : string ,
"sortOrder" : number
}
Fields
query
string
Immutable. The CEL query that defines which entities the Policy applies to (ex. a User entity).
For details about CEL see https://opensource.google.com/projects/cel .
The OrgUnits the Policy applies to are represented by a clause like so: entity.org_units.exists(orgUnit, orgUnit.org_unit_id == orgUnitId('{orgUnitId}'))
The Group the Policy applies to are represented by a clause like so: entity.groups.exists(group, group.group_id == groupId('{groupId}'))
The Licenses the Policy applies to are represented by a clause like so: entity.licenses.exists(license, license in ['/product/{productId}/sku/{skuId}'])
The above clauses can be present in any combination, and used in conjunction with the &&, || and ! operators.
The orgUnit and group fields below are helper fields that contain the corresponding value(s) as the query to make the query easier to use.
orgUnit
string
Required. Immutable. Non-empty default. The OrgUnit the query applies to. This field is only set if there is a single value for orgUnit that satisfies all clauses of the query.
group
string
Immutable. The group that the query applies to. This field is only set if there is a single value for group that satisfies all clauses of the query. If no group applies, this will be the empty string.
sortOrder
number
Output only. The decimal sort order of this PolicyQuery. The value is relative to all other policies with the same setting type for the customer. (There are no duplicates within this set).
Setting
Setting
JSON representation
{
"type" : string ,
"value" : {
object
}
}
Fields
type
string
Required. Immutable. The type of the Setting. .
value
object ( Struct format)
Required. The value of the Setting.
PolicyType
The type of the policy. This denotes whether the policy is system-configured or admin-configurable.
Enums
POLICY_TYPE_UNSPECIFIED
Unspecified policy type.
SYSTEM
Policy type denoting the system-configured policies.
ADMIN
Policy type denoting the admin-configurable policies.
Methods
create
Create a policy.
delete
Delete a policy.
get
Get a policy.
list
List policies.
patch
Update a policy.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-16 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-16 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
