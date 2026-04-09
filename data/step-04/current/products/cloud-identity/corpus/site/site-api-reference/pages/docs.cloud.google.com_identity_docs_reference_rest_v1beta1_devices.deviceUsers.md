---
title: "REST Resource: devices.deviceUsers \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers
  title: "REST Resource: devices.deviceUsers \_|\_ Cloud Identity \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: devices.deviceUsers | Cloud Identity | Google Cloud Documentation
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
Resource: DeviceUser
ManagementState
CompromisedState
PasswordState
Methods approve
block
cancelWipe
delete
get
list
lookup
wipe
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: devices. device Users
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: DeviceUser
ManagementState
CompromisedState
PasswordState
Methods approve
block
cancelWipe
delete
get
list
lookup
wipe
Resource: Device User
Represents a user's use of a Device in the Cloud Identity Devices API.
A DeviceUser is a resource representing a user's use of a Device
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"userEmail" : string ,
"managementState" : enum ( ManagementState ) ,
"firstSyncTime" : string ,
"lastSyncTime" : string ,
"userAgent" : string ,
"languageCode" : string ,
"compromisedState" : enum ( CompromisedState ) ,
"passwordState" : enum ( PasswordState ) ,
"createTime" : string
}
Fields
name
string
Output only. Resource name of the DeviceUser in format: devices/{deviceId}/deviceUsers/{device_user_id} , where device_user_id uniquely identifies a user's use of a device.
user Email
string
Email address of the user registered on the device.
management State
enum ( ManagementState )
Output only. Management state of the user on the device.
first Sync Time
string ( Timestamp format)
Output only. Most recent time when user registered with this service.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
last Sync Time
string ( Timestamp format)
Output only. Last time when user synced with policies.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
user Agent
string
Output only. User agent on the device for this specific user
language Code
string
Output only. Default locale used on device, in IETF BCP-47 format.
compromised State
enum ( CompromisedState )
Compromised State of the DeviceUser object
passwordState
enum ( PasswordState )
Password state of the DeviceUser object
createTime
string ( Timestamp format)
When the user first signed in to the device
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ManagementState
Possible management states of a user on a device.
Enums
MANAGEMENT_STATE_UNSPECIFIED
Default value. This value is unused.
WIPING
This user's data and profile is being removed from the device.
WIPED
This user's data and profile is removed from the device.
APPROVED
User is approved to access data on the device.
BLOCKED
User is blocked from accessing data on the device.
PENDING_APPROVAL
User is awaiting approval.
UNENROLLED
User is unenrolled from Advanced Windows Management, but the Windows account is still intact.
CompromisedState
Describes whether the DeviceUser object is compromised or not.
Enums
COMPROMISED_STATE_UNSPECIFIED
Compromised state of Device User account is unknown or unspecified.
COMPROMISED
Device User Account is compromised.
NOT_COMPROMISED
Device User Account is not compromised.
PasswordState
The password state of the object
Enums
PASSWORD_STATE_UNSPECIFIED
Password state not set.
PASSWORD_SET
Password set in object.
PASSWORD_NOT_SET
Password not set in object.
Methods
approve
Approves device to access user data.
block
Blocks device from accessing user data
cancelWipe
Cancels an unfinished user account wipe.
delete
Deletes the specified DeviceUser.
get
Retrieves the specified DeviceUser
list
Lists/Searches DeviceUsers.
lookup
Looks up resource names of the DeviceUsers associated with the caller's credentials, as well as the properties provided in the request.
wipe
Wipes the user's account on a device.
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
