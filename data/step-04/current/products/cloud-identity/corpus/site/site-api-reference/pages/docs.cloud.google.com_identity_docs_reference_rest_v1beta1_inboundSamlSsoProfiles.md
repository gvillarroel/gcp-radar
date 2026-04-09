---
title: "REST Resource: inboundSamlSsoProfiles \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundSamlSsoProfiles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundSamlSsoProfiles
  title: "REST Resource: inboundSamlSsoProfiles \_|\_ Cloud Identity \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: inboundSamlSsoProfiles | Cloud Identity | Google Cloud Documentation
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
Relation Type
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
Resource: InboundSamlSsoProfile
SamlIdpConfig
SamlSpConfig
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
REST Resource: inbound Saml Sso Profiles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: InboundSamlSsoProfile
SamlIdpConfig
SamlSpConfig
Methods create
delete
get
list
patch
Resource: Inbound Saml Sso Profile
A SAML 2.0 federation between a Google enterprise customer and a SAML identity provider.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"customer" : string ,
"displayName" : string ,
"idpConfig" : {
object ( SamlIdpConfig )
} ,
"spConfig" : {
object ( SamlSpConfig )
}
}
Fields
name
string
Output only. Resource name of the SAML SSO profile.
customer
string
Immutable. The customer.
For example: customers/C0123abc .
display Name
string
Human-readable name of the SAML SSO profile.
idp Config
object ( SamlIdpConfig )
SAML identity provider configuration.
sp Config
object ( SamlSpConfig )
SAML service provider configuration for this SAML SSO profile. These are the service provider details provided by Google that should be configured on the corresponding identity provider.
Saml Idp Config
SAML IDP (identity provider) configuration.
JSON representation
{
"entityId" : string ,
"singleSignOnServiceUri" : string ,
"logoutRedirectUri" : string ,
"changePasswordUri" : string
}
Fields
entityId
string
Required. The SAML Entity ID of the identity provider.
singleSignOnServiceUri
string
Required. The SingleSignOnService endpoint location (sign-in page URL) of the identity provider. This is the URL where the AuthnRequest will be sent. Must use HTTPS . Assumed to accept the HTTP-Redirect binding.
logoutRedirectUri
string
The Logout Redirect URL (sign-out page URL) of the identity provider. When a user clicks the sign-out link on a Google page, they will be redirected to this URL. This is a pure redirect with no attached SAML LogoutRequest i.e. SAML single logout is not supported. Must use HTTPS .
changePasswordUri
string
The Change Password URL of the identity provider. Users will be sent to this URL when changing their passwords at myaccount.google.com . This takes precedence over the change password URL configured at customer-level. Must use HTTPS .
SamlSpConfig
SAML SP (service provider) configuration.
JSON representation
{
"entityId" : string ,
"assertionConsumerServiceUri" : string
}
Fields
entityId
string
Output only. The SAML Entity ID for this service provider.
assertionConsumerServiceUri
string
Output only. The SAML Assertion Consumer Service (ACS) URL to be used for the IDP-initiated login. Assumed to accept response messages via the HTTP-POST binding.
Methods
create
Creates an InboundSamlSsoProfile for a customer.
delete
Deletes an InboundSamlSsoProfile .
get
Gets an InboundSamlSsoProfile .
list
Lists InboundSamlSsoProfile s for a customer.
patch
Updates an InboundSamlSsoProfile .
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
