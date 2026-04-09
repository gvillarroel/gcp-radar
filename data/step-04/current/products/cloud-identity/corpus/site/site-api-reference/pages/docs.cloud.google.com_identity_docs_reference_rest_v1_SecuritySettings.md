---
title: "SecuritySettings \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/SecuritySettings
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1/SecuritySettings
  title: "SecuritySettings \_|\_ Cloud Identity \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

SecuritySettings | Cloud Identity | Google Cloud Documentation
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
MemberRestriction
RestrictionEvaluation
State
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
Security Settings
Stay organized with collections
Save and categorize content based on your preferences.
On this page
MemberRestriction
RestrictionEvaluation
State
The definition of security settings.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"memberRestriction" : {
object ( MemberRestriction )
}
}
Fields
name
string
Output only. The resource name of the security settings.
Shall be of the form groups/{groupId}/securitySettings .
member Restriction
object ( MemberRestriction )
The Member Restriction value
Member Restriction
The definition of MemberRestriction
JSON representation
{
"query" : string ,
"evaluation" : {
object ( RestrictionEvaluation )
}
}
Fields
query
string
Member Restriction as defined by CEL expression. Supported restrictions are: member.customer_id and member.type .
Valid values for member.type are 1 , 2 and 3 . They correspond to USER, SERVICE_ACCOUNT, and GROUP respectively.
The value for member.customer_id only supports groupCustomerId() currently which means the customer id of the group will be used for restriction.
Supported operators are && , || and == , corresponding to AND, OR, and EQUAL.
Examples: Allow only service accounts of given customer to be members.
member.type == 2 && member.customer_id == groupCustomerId()
Allow only users or groups to be members.
member.type == 1 || member.type == 3
evaluation
object ( RestrictionEvaluation )
The evaluated state of this restriction on a group.
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
EVALUATING
The restriction state is currently being evaluated.
COMPLIANT
All transitive memberships are adhering to restriction.
FORWARD_COMPLIANT
Some transitive memberships violate the restriction. No new violating memberships can be added.
NON_COMPLIANT
Some transitive memberships violate the restriction. New violating direct memberships will be denied while indirect memberships may be added.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-08-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-08-06 UTC."],[],[]]
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
