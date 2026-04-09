---
title: "REST Resource: groups.memberships \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups.memberships
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups.memberships
  title: "REST Resource: groups.memberships \_|\_ Cloud Identity \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: groups.memberships | Cloud Identity | Google Cloud Documentation
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
check Transitive Membership
create
delete
get
get Membership Graph
list
lookup
modify Membership Roles
search Direct Groups
search Transitive Groups
search Transitive Memberships
inbound Oidc Sso Profiles
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
orgUnits.memberships
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
EntityKey
RelationType
SecuritySettings
TransitiveMembershipRole
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
Resource: Membership
MembershipRole
ExpiryDetail
RestrictionEvaluations
RestrictionEvaluation
State
Type
DeliverySetting
Methods checkTransitiveMembership
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
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: groups. memberships
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Membership
MembershipRole
ExpiryDetail
RestrictionEvaluations
RestrictionEvaluation
State
Type
DeliverySetting
Methods checkTransitiveMembership
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
Resource: Membership
A membership within the Cloud Identity Groups API.
A Membership defines a relationship between a Group and an entity belonging to that Group , referred to as a "member".
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"memberKey" : {
object ( EntityKey )
} ,
"createTime" : string ,
"updateTime" : string ,
"roles" : [
{
object ( MembershipRole )
}
] ,
"preferredMemberKey" : {
object ( EntityKey )
} ,
"type" : enum ( Type ) ,
"deliverySetting" : enum ( DeliverySetting )
}
Fields
name
string
Output only. The resource name of the Membership .
Shall be of the form groups/{groupId}/memberships/{membership_id} .
member Key
object ( EntityKey )
Immutable. The EntityKey of the member.
Either memberKey or preferredMemberKey must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
create Time
string ( Timestamp format)
Output only. The time when the Membership was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
update Time
string ( Timestamp format)
Output only. The time when the Membership was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
roles[]
object ( MembershipRole )
The MembershipRole s that apply to the Membership .
If unspecified, defaults to a single MembershipRole with name MEMBER .
Must not contain duplicate MembershipRole s with the same name .
preferredMemberKey
object ( EntityKey )
Required. Immutable. The EntityKey of the member.
Either memberKey or preferredMemberKey must be set when calling MembershipsService.CreateMembership but not both; both shall be set when returned.
type
enum ( Type )
Output only. The type of the membership.
deliverySetting
enum ( DeliverySetting )
Output only. Delivery setting associated with the membership.
MembershipRole
A membership role within the Cloud Identity Groups API.
A MembershipRole defines the privileges granted to a Membership .
JSON representation
{
"name" : string ,
"expiryDetail" : {
object ( ExpiryDetail )
} ,
"restrictionEvaluations" : {
object ( RestrictionEvaluations )
}
}
Fields
name
string
The name of the MembershipRole .
Must be one of OWNER , MANAGER , MEMBER .
expiryDetail
object ( ExpiryDetail )
The expiry details of the MembershipRole .
Expiry details are only supported for MEMBER MembershipRoles .
May be set if name is MEMBER . Must not be set if name is any other value.
restrictionEvaluations
object ( RestrictionEvaluations )
Evaluations of restrictions applied to parent group on this membership.
ExpiryDetail
The MembershipRole expiry details.
JSON representation
{
"expireTime" : string
}
Fields
expireTime
string ( Timestamp format)
The time at which the MembershipRole will expire.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
RestrictionEvaluations
Evaluations of restrictions applied to parent group on this membership.
JSON representation
{
"memberRestrictionEvaluation" : {
object ( RestrictionEvaluation )
}
}
Fields
memberRestrictionEvaluation
object ( RestrictionEvaluation )
Evaluation of the member restriction applied to this membership.
Empty if the user lacks permission to view the restriction evaluation.
RestrictionEvaluation
The evaluated state of this restriction.
JSON representation
{
"state" : enum ( State )
}
Fields
state
enum ( State )
Output only. The current state of the restriction
State
All possible states of a restriction.
Enums
STATE_UNSPECIFIED
Default. Should not be used.
COMPLIANT
The member adheres to the parent group's restriction.
FORWARD_COMPLIANT
The group-group membership might be currently violating some parent group's restriction but in future, it will never allow any new member in the child group which can violate parent group's restriction.
NON_COMPLIANT
The member violates the parent group's restriction.
EVALUATING
The state of the membership is under evaluation.
Type
Enums
TYPE_UNSPECIFIED
Default. Should not be used.
USER
Represents user type.
SERVICE_ACCOUNT
Represents service account type.
GROUP
Represents group type.
SHARED_DRIVE
Represents Shared drive.
CBCM_BROWSER
Represents a CBCM-managed Chrome Browser type.
OTHER
Represents other type.
DeliverySetting
Delivery setting associated with the membership.
Enums
DELIVERY_SETTING_UNSPECIFIED
Default. Should not be used.
ALL_MAIL
Represents each mail should be delivered
DIGEST
Represents 1 email for every 25 messages.
DAILY
Represents daily summary of messages.
NONE
Represents no delivery.
DISABLED
Represents disabled state.
Methods
checkTransitiveMembership
Check a potential member for membership in a group.
create
Creates a Membership .
delete
Deletes a Membership .
get
Retrieves a Membership .
getMembershipGraph
Get a membership graph of just a member or both a member and a group.
list
Lists the Membership s within a Group .
lookup
Looks up the resource name of a Membership by its EntityKey .
modifyMembershipRoles
Modifies the MembershipRole s of a Membership .
searchDirectGroups
Searches direct groups of a member.
searchTransitiveGroups
Search transitive groups of a member.
searchTransitiveMemberships
Search transitive memberships of a group.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-26 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-26 UTC."],[],[]]
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
