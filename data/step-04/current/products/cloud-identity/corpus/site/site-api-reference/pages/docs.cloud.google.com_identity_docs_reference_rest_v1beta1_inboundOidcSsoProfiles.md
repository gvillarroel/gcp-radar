---
title: "REST Resource: inboundOidcSsoProfiles \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundOidcSsoProfiles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundOidcSsoProfiles
  title: "REST Resource: inboundOidcSsoProfiles \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: inboundOidcSsoProfiles | Cloud Identity | Google Cloud Documentation
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
Resource: InboundOidcSsoProfile
OidcIdpConfig
OidcRpConfig
Methods create
delete
get
list
patch
Home
Documentation
Access and resource management
Cloud Identity
Reference
Was this helpful?
Send feedback
REST Resource: inbound Oidc Sso Profiles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: InboundOidcSsoProfile
OidcIdpConfig
OidcRpConfig
Methods create
delete
get
list
patch
Resource: Inbound Oidc Sso Profile
An OIDC federation between a Google enterprise customer and an OIDC identity provider.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"customer" : string ,
"displayName" : string ,
"idpConfig" : {
object ( OidcIdpConfig )
} ,
"rpConfig" : {
object ( OidcRpConfig )
}
}
Fields
name
string
Output only. Resource name of the OIDC SSO profile.
customer
string
Immutable. The customer.
For example: customers/C0123abc .
display Name
string
Human-readable name of the OIDC SSO profile.
idp Config
object ( OidcIdpConfig )
OIDC identity provider configuration.
rp Config
object ( OidcRpConfig )
OIDC relying party (RP) configuration for this OIDC SSO profile. These are the RP details provided by Google that should be configured on the corresponding identity provider.
Oidc Idp Config
OIDC IDP (identity provider) configuration.
JSON representation
{
"issuerUri" : string ,
"changePasswordUri" : string
}
Fields
issuerUri
string
Required. The Issuer identifier for the IdP. Must be a URL. The discovery URL will be derived from this as described in Section 4 of the OIDC specification .
changePasswordUri
string
The Change Password URL of the identity provider. Users will be sent to this URL when changing their passwords at myaccount.google.com . This takes precedence over the change password URL configured at customer-level. Must use HTTPS .
OidcRpConfig
OIDC RP (relying party) configuration.
JSON representation
{
"clientId" : string ,
"clientSecret" : string ,
"redirectUris" : [
string
]
}
Fields
clientId
string
OAuth2 client ID for OIDC.
clientSecret
string
Input only. OAuth2 client secret for OIDC.
redirectUris[]
string
Output only. The URL(s) that this client may use in authentication requests.
Methods
create
Creates an InboundOidcSsoProfile for a customer.
delete
Deletes an InboundOidcSsoProfile .
get
Gets an InboundOidcSsoProfile .
list
Lists InboundOidcSsoProfile objects for a Google enterprise customer.
patch
Updates an InboundOidcSsoProfile .
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
