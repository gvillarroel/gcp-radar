---
title: "REST Resource: groups \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups
  title: "REST Resource: groups \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: groups | Cloud Identity | Google Cloud Documentation
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
get Security Settings
list
lookup
patch
search
update Security Settings
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
Resource: Group
DynamicGroupMetadata
DynamicGroupQuery
ResourceType
DynamicGroupStatus
Status
PosixGroup
Methods create
delete
get
getSecuritySettings
list
lookup
patch
search
updateSecuritySettings
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: groups
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: Group
DynamicGroupMetadata
DynamicGroupQuery
ResourceType
DynamicGroupStatus
Status
PosixGroup
Methods create
delete
get
getSecuritySettings
list
lookup
patch
search
updateSecuritySettings
Resource: Group
A group within the Cloud Identity Groups API.
A Group is a collection of entities, where each entity is either a user, another group, or a service account.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"groupKey" : {
object ( EntityKey )
} ,
"additionalGroupKeys" : [
{
object ( EntityKey )
}
] ,
"parent" : string ,
"displayName" : string ,
"description" : string ,
"createTime" : string ,
"updateTime" : string ,
"labels" : {
string : string ,
...
} ,
"dynamicGroupMetadata" : {
object ( DynamicGroupMetadata )
} ,
"posixGroups" : [
{
object ( PosixGroup )
}
]
}
Fields
name
string
Output only. The resource name of the Group .
Shall be of the form groups/{groupId} .
group Key
object ( EntityKey )
Required. The EntityKey of the Group .
additional Group Keys[]
object ( EntityKey )
Output only. Additional group keys associated with the Group.
parent
string
Required. Immutable. The resource name of the entity under which this Group resides in the Cloud Identity resource hierarchy.
Must be of the form identitysources/{identity_source} for external identity-mapped groups or customers/{customerId} for Google Groups. The customerId must begin with "C" (for example, 'C046psxkn'). Find your customer ID.
displayName
string
The display name of the Group .
description
string
An extended description to help users determine the purpose of a Group .
Must not be longer than 4,096 characters.
createTime
string ( Timestamp format)
Output only. The time when the Group was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
updateTime
string ( Timestamp format)
Output only. The time when the Group was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
labels
map (key: string, value: string)
Required. One or more label entries that apply to the Group. Labels contain a key with an empty value.
Google Groups are the default type of group and have a label with a key of cloudidentity.googleapis.com/groups.discussion_forum and an empty value.
Existing Google Groups can have an additional label with a key of cloudidentity.googleapis.com/groups.security and an empty value added to them. This is an immutable change and the security label cannot be removed once added.
Dynamic groups have a label with a key of cloudidentity.googleapis.com/groups.dynamic .
Identity-mapped groups for Cloud Search have a label with a key of system/groups/external and an empty value.
Google Groups can be locked . To lock a group, add a label with a key of cloudidentity.googleapis.com/groups.locked and an empty value. Doing so locks the group. To unlock the group, remove this label.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
dynamicGroupMetadata
object ( DynamicGroupMetadata )
Optional. Dynamic group metadata like queries and status.
posixGroups[]
object ( PosixGroup )
Optional. The POSIX groups associated with the Group .
DynamicGroupMetadata
Dynamic group metadata like queries and status.
JSON representation
{
"queries" : [
{
object ( DynamicGroupQuery )
}
] ,
"status" : {
object ( DynamicGroupStatus )
}
}
Fields
queries[]
object ( DynamicGroupQuery )
Memberships will be the union of all queries. Only one entry with USER resource is currently supported. Customers can create up to 500 dynamic groups.
status
object ( DynamicGroupStatus )
Output only. Status of the dynamic group.
DynamicGroupQuery
Defines a query on a resource.
JSON representation
{
"resourceType" : enum ( ResourceType ) ,
"query" : string
}
Fields
resourceType
enum ( ResourceType )
query
string
Query that determines the memberships of the dynamic group.
Examples: All users with at least one organizations.department of engineering.
user.organizations.exists(org, org.department=='engineering')
All users with at least one location that has area of foo and building_id of bar .
user.locations.exists(loc, loc.area=='foo' && loc.building_id=='bar')
All users with any variation of the name John Doe (case-insensitive queries add equalsIgnoreCase() to the value being queried).
user.name.value.equalsIgnoreCase('jOhn DoE')
ResourceType
Resources supported for dynamic groups.
Enums
RESOURCE_TYPE_UNSPECIFIED
Default value (not valid)
USER
For queries on User
DynamicGroupStatus
The current status of a dynamic group along with timestamp.
JSON representation
{
"status" : enum ( Status ) ,
"statusTime" : string
}
Fields
status
enum ( Status )
Status of the dynamic group.
statusTime
string ( Timestamp format)
The latest time at which the dynamic group is guaranteed to be in the given status. If status is UP_TO_DATE , the latest time at which the dynamic group was confirmed to be up-to-date. If status is UPDATING_MEMBERSHIPS , the time at which dynamic group was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Status
All possible statuses of a dynamic group.
Enums
STATUS_UNSPECIFIED
Default.
UP_TO_DATE
The dynamic group is up-to-date.
UPDATING_MEMBERSHIPS
The dynamic group has just been created and memberships are being updated.
INVALID_QUERY
Group is in an unrecoverable state and its memberships can't be updated.
PosixGroup
POSIX Group definition to represent a group in a POSIX compliant system. Caution: POSIX groups are deprecated. As of September 26, 2024, you can no longer create new POSIX groups. For more information, see https://cloud.google.com/identity/docs/deprecations/posix-groups
JSON representation
{
"name" : string ,
"gid" : string ,
"systemId" : string
}
Fields
name
string
Name of the POSIX group.
gid
string
GID of the POSIX group.
systemId
string
System identifier for which group name and gid apply to. If not specified it will default to empty value.
Methods
create
Creates a Group .
delete
Deletes a Group .
get
Retrieves a Group .
getSecuritySettings
Get Security Settings
list
Lists the Group resources under a customer or namespace.
lookup
Looks up the resource name of a Group by its EntityKey .
patch
Updates a Group .
search
Searches for Group resources matching a specified query.
updateSecuritySettings
Update Security Settings
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
