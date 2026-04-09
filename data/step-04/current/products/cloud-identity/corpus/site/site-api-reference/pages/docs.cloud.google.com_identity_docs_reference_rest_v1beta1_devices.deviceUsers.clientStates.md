---
title: "REST Resource: devices.deviceUsers.clientStates \_|\_ Cloud Identity \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers.clientStates
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/devices.deviceUsers.clientStates
  title: "REST Resource: devices.deviceUsers.clientStates \_|\_ Cloud Identity \_\
    |\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: devices.deviceUsers.clientStates | Cloud Identity | Google Cloud Documentation
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
Resource: ClientState
HealthScore
ManagedState
ComplianceState
CustomAttributeValue
OwnerType
Methods get
patch
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: devices. device Users. client States
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: ClientState
HealthScore
ManagedState
ComplianceState
CustomAttributeValue
OwnerType
Methods get
patch
Resource: Client State
Represents the state associated with an API client calling the Devices API.
Resource representing ClientState and supports updates from API users
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"createTime" : string ,
"lastUpdateTime" : string ,
"etag" : string ,
"customId" : string ,
"assetTags" : [
string
] ,
"healthScore" : enum ( HealthScore ) ,
"scoreReason" : string ,
"managed" : enum ( ManagedState ) ,
"complianceState" : enum ( ComplianceState ) ,
"keyValuePairs" : {
string : {
object ( CustomAttributeValue )
} ,
...
} ,
"ownerType" : enum ( OwnerType )
}
Fields
name
string
Output only. Resource name of the ClientState in format: devices/{deviceId}/deviceUsers/{device_user_id}/clientState/{partner_id} , where partner_id corresponds to the partner storing the data.
create Time
string ( Timestamp format)
Output only. The time the client state data was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
last Update Time
string ( Timestamp format)
Output only. The time the client state data was last updated.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
etag
string
The token that needs to be passed back for concurrency control in updates. Token needs to be passed back in UpdateRequest
customId
string
This field may be used to store a unique identifier for the API resource within which these CustomAttributes are a field.
assetTags[]
string
The caller can specify asset tags for this resource
healthScore
enum ( HealthScore )
The Health score of the resource
scoreReason
string
A descriptive cause of the health score.
managed
enum ( ManagedState )
The management state of the resource as specified by the API client.
complianceState
enum ( ComplianceState )
The compliance state of the resource as specified by the API client.
keyValuePairs
map (key: string, value: object ( CustomAttributeValue ))
The map of key-value attributes stored by callers specific to a device. The total serialized length of this map may not exceed 10KB. No limit is placed on the number of attributes in a map.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" } .
ownerType
enum ( OwnerType )
Output only. The owner of the ClientState
HealthScore
Enums
HEALTH_SCORE_UNSPECIFIED
Default value
VERY_POOR
The object is in very poor health as defined by the caller.
POOR
The object is in poor health as defined by the caller.
NEUTRAL
The object health is neither good nor poor, as defined by the caller.
GOOD
The object is in good health as defined by the caller.
VERY_GOOD
The object is in very good health as defined by the caller.
ManagedState
Management status of the device as provided by the Client
Enums
MANAGED_STATE_UNSPECIFIED
The management state of the resource is unknown or unspecified.
MANAGED
The resource is managed.
UNMANAGED
The resource is not managed.
ComplianceState
Whether the object is compliant with third party policies or not
Enums
COMPLIANCE_STATE_UNSPECIFIED
The compliance state of the resource is unknown or unspecified.
COMPLIANT
Device is compliant with third party policies
NON_COMPLIANT
Device is not compliant with third party policies
CustomAttributeValue
Additional custom attribute values may be one of these types
JSON representation
{
// Union field kind can be only one of the following:
"numberValue" : number ,
"stringValue" : string ,
"boolValue" : boolean
// End of list of possible types for union field kind .
}
Fields
Union field kind . The kind of value. kind can be only one of the following:
numberValue
number
Represents a double value.
stringValue
string
Represents a string value.
boolValue
boolean
Represents a boolean value.
OwnerType
Ownership type of data
Enums
OWNER_TYPE_UNSPECIFIED
Unknown owner type
OWNER_TYPE_CUSTOMER
Customer is the owner
OWNER_TYPE_PARTNER
Partner is the owner
Methods
get
Gets the client state for the device user
patch
Updates the client state for the device user
Note : This method is available only to customers who have one of the following SKUs: Enterprise Standard, Enterprise Plus, Enterprise for Education, and Cloud Identity Premium
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
