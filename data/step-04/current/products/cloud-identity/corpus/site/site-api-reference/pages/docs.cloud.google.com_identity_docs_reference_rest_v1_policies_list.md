---
title: "Method: policies.list \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/policies/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/policies/list
  title: "Method: policies.list \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: policies.list | Cloud Identity | Google Cloud Documentation
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
Query parameters
Request body
Response body
Authorization scopes
Try it!
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Method: policies. list
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Query parameters
Request body
Response body
Authorization scopes
Try it
List policies.
HTTP request
GET https://cloudidentity.googleapis.com/v1/policies
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
page Size
integer
Optional. The maximum number of results to return. The service can return fewer than this number. If omitted or set to 0, the default is 50 results per page. The maximum allowed value is 100. pageSize values greater than 100 default to 100.
page Token
string
Optional. The pagination token received from a prior call to PoliciesService.ListPolicies to retrieve the next page of results. When paginating, all other parameters provided to ListPoliciesRequest must match the call that provided the page token.
filter
string
Optional. A CEL expression for filtering the results.
Policies can be filtered by application with this expression: setting.type.matches('^settings/gmail\..*$') Policies can be filtered by setting type with this expression: setting.type.matches('^.*\.service_status$') A maximum of one of the above setting.type clauses can be used.
Policies can be filtered by customer with this expression: customer == "customers/{customer}" Where customer is the id from the Admin SDK Customer resource . You may use customers/my_customer to specify your own organization. When no customer is mentioned it will be default to customers/my_customer. A maximum of one customer clause can be used.
The above clauses can only be combined together in a single filter expression with the && operator.
Request body
The request body must be empty.
Response body
The response message for PoliciesService.ListPolicies .
If successful, the response body contains data with the following structure:
JSON representation
{
"policies" : [
{
object ( Policy )
}
] ,
"nextPageToken" : string
}
Fields
policies[]
object ( Policy )
The results
nextPageToken
string
The pagination token to retrieve the next page of results. If this field is empty, there are no subsequent pages.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-identity.policies.readonly
https://www.googleapis.com/auth/cloud-identity.policies
For more information, see the Authorization guide .
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
