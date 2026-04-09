---
title: "Method: devices.deviceUsers.lookup \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers/lookup
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers/lookup
  title: "Method: devices.deviceUsers.lookup \_|\_ Cloud Identity \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Method: devices.deviceUsers.lookup | Cloud Identity | Google Cloud Documentation
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
cancel Wipe
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
Try it!
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Method: devices. device Users. lookup
Stay organized with collections
Save and categorize content based on your preferences.
On this page
HTTP request
Path parameters
Query parameters
Request body
Response body
Authorization scopes
Try it
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request.
This method must be called with end-user credentials with the scope: https://www.googleapis.com/auth/cloud-identity.devices.lookup
If multiple properties are provided, only DeviceUsers having all of these properties are considered as matches - i.e. the query behaves like an AND.
Different platforms require different amounts of information from the caller to ensure that the DeviceUser is uniquely identified.
iOS: If either the partner or iosDeviceId field is provided, then both fields are required.
Android: Specifying the androidId field is required.
Desktop: Specifying the rawResourceId field is required.
HTTP request
GET https://cloudidentity.googleapis.com/v1beta1/{parent=devices/*/deviceUsers}:lookup
The URL uses gRPC Transcoding syntax.
Path parameters
Parameters
parent
string
Must be set to "devices/-/deviceUsers" to search across all DeviceUser belonging to the user.
Query parameters
Parameters
page Size
integer
The maximum number of DeviceUsers to return. If unspecified, at most 20 DeviceUsers will be returned. The maximum value is 20; values above 20 will be coerced to 20.
page Token
string
A page token, received from a previous LookupDeviceUsers call. Provide this to retrieve the subsequent page.
When paginating, all other parameters provided to LookupDeviceUsers must match the call that provided the page token.
android Id
string
Android Id returned by Settings.Secure#ANDROID_ID .
raw Resource Id
string
Raw Resource Id used by Google Endpoint Verification.
If the user is enrolled into Google Endpoint Verification, this id will be saved as the 'device_resource_id' field in the following platform dependent files.
Mac: ~/.secureConnect/context_aware_config.json Windows: C:\Users\%USERPROFILE%.secureConnect\context_aware_config.json Linux: ~/.secureConnect/context_aware_config.json
userId
string
The user whose DeviceUser's resource name will be fetched. Must be set to 'me' to fetch the DeviceUser's resource name for the calling user.
partner
string
Optional. The partner ID of the calling iOS app. This string must match the value of the partner key within the app configuration dictionary provided to Google Workspace apps.
iosDeviceId
string
Optional. The partner-specified device identifier assigned to the iOS device that initiated the Lookup API call. This string must match the value of the iosDeviceId key in the app config dictionary provided to Google Workspace apps.
Request body
The request body must be empty.
Response body
Response containing resource names of the DeviceUsers associated with the caller's credentials.
If successful, the response body contains data with the following structure:
JSON representation
{
"names" : [
string
] ,
"customer" : string ,
"nextPageToken" : string
}
Fields
names[]
string
Resource names of the DeviceUsers in the format: devices/{deviceId}/deviceUsers/{user_resource_id} , where deviceId is the unique ID assigned to a Device and user_resource_id is the unique user ID
customer
string
The customer Id that may be passed back to other Devices API methods such as List, Get, etc.
nextPageToken
string
Token to retrieve the next page of results. Empty if there are no more results.
Authorization scopes
Requires the following OAuth scope:
https://www.googleapis.com/auth/cloud-identity.devices.lookup
For more information, see the Authorization guide .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-01-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-01-14 UTC."],[],[]]
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
