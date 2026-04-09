---
title: "Method: groups.search \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups/search
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/groups/search
  title: "Method: groups.search \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: groups.search | Cloud Identity | Google Cloud Documentation
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
Query parameters
Request body
Response body
Authorization scopes
GroupView
Try it!
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Method: groups. search
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Query parameters
Request body
Response body
Authorization scopes
GroupView
Try it
Searches for Group resources matching a specified query.
HTTP request
GET https://cloudidentity.googleapis.com/v1beta1/groups:search
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
query
string
Required. The search query.
Must be specified in Common Expression Language .
Must contain equality operators on the parent, e.g. parent ==
'customers/{customer_id}' . The customer_id must begin with "C" (for example, 'C046psxkn'). Find your customer ID.
Can contain optional inclusion operators on labels such as 'cloudidentity.googleapis.com/groups.discussion_forum' in labels ).
Can contain an optional equality operator on domain_name . e.g. domain_name == 'examplepetstore.com'
Can contain optional startsWith/contains/equality operators on group_key , e.g. group_key.startsWith('dev') , group_key.contains('dev'), group_key == 'dev@examplepetstore.com'
Can contain optional startsWith/contains/equality operators on display_name , such as display_name.startsWith('dev') , display_name.contains('dev') , display_name == 'dev'
view
enum ( GroupView )
The level of detail to be returned.
If unspecified, defaults to View.BASIC .
page Size
integer
The maximum number of results to return.
Note that the number of results returned may be less than this value even if there are more available results. To fetch all results, clients must continue calling this method repeatedly until the response no longer contains a next_page_token .
If unspecified, defaults to 200 for GroupView.BASIC and to 50 for GroupView.FULL .
Must not be greater than 1000 for GroupView.BASIC or 500 for GroupView.FULL .
page Token
string
The next_page_token value returned from a previous search request, if any.
order By
string
The ordering of groups for the display name or email in the search groups response. The syntax for this field can be found at https://cloud.google.com/apis/design/design_patterns#sorting_order . Example: Sort by the ascending name: order_by="display_name" Sort by the descending group key email: order_by="group_key desc"
Request body
The request body must be empty.
Response body
The response message for GroupsService.SearchGroups .
If successful, the response body contains data with the following structure:
JSON representation
{
"groups" : [
{
object ( Group )
}
] ,
"nextPageToken" : string
}
Fields
groups[]
object ( Group )
The Group resources that match the search query.
nextPageToken
string
A continuation token to retrieve the next page of results, or empty if there are no more results available.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-identity.groups.readonly
https://www.googleapis.com/auth/cloud-identity.groups
https://www.googleapis.com/auth/cloud-identity
https://www.googleapis.com/auth/cloud-platform
For more information, see the Authorization guide .
GroupView
The view options for the GroupsService.SearchGroups method.
Enums
BASIC
Default. Only basic resource information is returned.
FULL
All resource information is returned.
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
