---
title: "Method: groups.memberships.searchTransitiveGroups \_|\_ Cloud Identity \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/searchTransitiveGroups
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/searchTransitiveGroups
  title: "Method: groups.memberships.searchTransitiveGroups \_|\_ Cloud Identity \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: groups.memberships.searchTransitiveGroups | Cloud Identity | Google Cloud Documentation
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
devices. device Users. client States
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
policies
Overview
get
list
Types
Entity Key
Relation Type
Security Settings
Transitive Membership Role
View
v1beta1
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
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
GroupRelation
Try it!
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Method: groups. memberships. search Transitive Groups
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
GroupRelation
Try it
Search transitive groups of a member.
Note: This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned.
A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
HTTP request
GET https://cloudidentity.googleapis.com/v1/{parent=groups/*}/memberships:searchTransitiveGroups
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Resource name of the group to search transitive memberships in.
Format: groups/{group} , where group is always '-' as this API will search across all groups for a given member.
Query parameters
Parameters
query
string
Required. A CEL expression that MUST include member specification AND label(s). This is a required field.
Users can search on label attributes of groups. CONTAINS match ('in') is supported on labels. Identity-mapped groups are uniquely identified by both a member_key_id and a member_key_namespace , which requires an additional query input: member_key_namespace .
Example query: member_key_id == 'member_key_id_value' && <label_value> in
labels
Query may optionally contain equality operators on the parent of the group restricting the search within a particular customer, e.g. parent ==
'customers/{customer_id}' . The customer_id must begin with "C" (for example, 'C046psxkn'). This filtering is only supported for Admins with groups read permissions on the input customer.
Example query: member_key_id == 'member_key_id_value'
&& <label_value> in labels && parent == 'customers/C046psxkn'
page Size
integer
The default page size is 200 (max 1000).
page Token
string
The nextPageToken value returned from a previous list request, if any.
Request body
The request body must be empty.
Response body
The response message for MembershipsService.SearchTransitiveGroups .
If successful, the response body contains data with the following structure:
JSON representation
{
"memberships" : [
{
object ( GroupRelation )
}
] ,
"nextPageToken" : string
}
Fields
memberships[]
object ( GroupRelation )
List of transitive groups satisfying the query.
nextPageToken
string
Token to retrieve the next page of results, or empty if there are no more results available for listing.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-identity.groups.readonly
https://www.googleapis.com/auth/cloud-identity.groups
https://www.googleapis.com/auth/cloud-identity
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
GroupRelation
Message representing a transitive group of a user or a group.
JSON representation
{
"groupKey" : {
object ( EntityKey )
} ,
"group" : string ,
"displayName" : string ,
"roles" : [
{
object ( TransitiveMembershipRole )
}
] ,
"relationType" : enum ( RelationType ) ,
"labels" : {
string : string ,
...
}
}
Fields
groupKey
object ( EntityKey )
Entity key has an id and a namespace. In case of discussion forums, the id will be an email address without a namespace.
group
string
Resource name for this group.
displayName
string
Display name for this group.
roles[]
object ( TransitiveMembershipRole )
Membership roles of the member for the group.
relationType
enum ( RelationType )
The relation between the member and the transitive group.
labels
map (key: string, value: string)
Labels for Group resource.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
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
