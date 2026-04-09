---
title: "Method: devices.list \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices/list
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices/list
  title: "Method: devices.list \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: devices.list | Cloud Identity | Google Cloud Documentation
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
cancel Wipe
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
View
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Method: devices. list
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Query parameters
Request body
Response body
Authorization scopes
View
Lists/Searches devices.
HTTP request
GET https://cloudidentity.googleapis.com/v1beta1/devices
The URL uses gRPC Transcoding syntax.
Query parameters
Parameters
customer
string
Optional. Resource name of the customer.
filter
string
Optional. Additional restrictions when fetching list of devices. For a list of search fields, refer to Mobile device search fields . Multiple search fields are separated by the space character.
page Size
integer
Optional. The maximum number of Devices to return. If unspecified, at most 20 Devices will be returned. The maximum value is 100; values above 100 will be coerced to 100.
page Token
string
Optional. A page token, received from a previous devices.list call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to devices.list must match the call that provided the page token.
order By
string
Optional. Order specification for devices in the response. Only one of the following field names may be used to specify the order: createTime , lastSyncTime , model , osVersion , deviceType and serialNumber . desc may be specified optionally to specify results to be sorted in descending order. Default order is ascending.
view
enum ( View )
Optional. The view to use for the List request.
Request body
The request body must be empty.
Response body
Response message that is returned from the devices.list method.
If successful, the response body contains data with the following structure:
JSON representation
{
"devices" : [
{
object ( Device )
}
] ,
"nextPageToken" : string
}
Fields
devices[]
object ( Device )
Devices meeting the list restrictions.
nextPageToken
string
Token to retrieve the next page of results. Empty if there are no more results.
Authorization scopes
Requires one of the following OAuth scopes:
https://www.googleapis.com/auth/cloud-identity.devices.readonly
https://www.googleapis.com/auth/cloud-identity.devices
https://www.googleapis.com/auth/cloud-identity
For more information, see the Authorization guide .
View
The view determines which devices and device info are present in the response.
Enums
VIEW_UNSPECIFIED
Default value. The value is unused.
COMPANY_INVENTORY
This view contains all devices imported by the company admin. Each device in the response contains all information specified by the company admin when importing the device (i.e. asset tags).
USER_ASSIGNED_DEVICES
This view contains all devices with at least one user registered on the device. Each device in the response contains all device information, except for asset tags.
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
