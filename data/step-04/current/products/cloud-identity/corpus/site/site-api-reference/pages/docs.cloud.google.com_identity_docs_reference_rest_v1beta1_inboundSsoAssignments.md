---
title: "REST Resource: inboundSsoAssignments \_|\_ Cloud Identity \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundSsoAssignments
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/identity/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/identity/docs/reference/rest/v1beta1/inboundSsoAssignments
  title: "REST Resource: inboundSsoAssignments \_|\_ Cloud Identity \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: inboundSsoAssignments | Cloud Identity | Google Cloud Documentation
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
Security Settings
Transitive Membership Role
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
Resource: InboundSsoAssignment
SsoMode
SamlSsoInfo
OidcSsoInfo
SignInBehavior
RedirectCondition
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
REST Resource: inbound Sso Assignments
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: InboundSsoAssignment
SsoMode
SamlSsoInfo
OidcSsoInfo
SignInBehavior
RedirectCondition
Methods create
delete
get
list
patch
Resource: Inbound Sso Assignment
Targets with "set" SSO assignments and their respective assignments.
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"customer" : string ,
"rank" : integer ,
"ssoMode" : enum ( SsoMode ) ,
"samlSsoInfo" : {
object ( SamlSsoInfo )
} ,
"oidcSsoInfo" : {
object ( OidcSsoInfo )
} ,
"signInBehavior" : {
object ( SignInBehavior )
} ,
// Union field target can be only one of the following:
"targetGroup" : string ,
"targetOrgUnit" : string
// End of list of possible types for union field target .
}
Fields
name
string
Output only. Resource name of the Inbound SSO Assignment.
customer
string
Immutable. The customer.
For example: customers/C0123abc .
rank
integer
Must be zero (which is the default value so it can be omitted) for assignments with targetOrgUnit set and must be greater-than-or-equal-to one for assignments with targetGroup set.
sso Mode
enum ( SsoMode )
Inbound SSO behavior.
saml Sso Info
object ( SamlSsoInfo )
SAML SSO details. Must be set if and only if ssoMode is set to SAML_SSO .
oidc Sso Info
object ( OidcSsoInfo )
OpenID Connect SSO details. Must be set if and only if ssoMode is set to OIDC_SSO .
sign In Behavior
object ( SignInBehavior )
Assertions about users assigned to an IdP will always be accepted from that IdP. This controls whether/when Google should redirect a user to the IdP. Unset (defaults) is the recommended configuration.
Union field target . Target of the assignment.
When multiple assignments apply to a given user, precedence is as follows:
1) The applicable group-targeting assignment with the numerically-lowest rank takes precedence.
2) If no group-targeting assignments apply, the applicable orgUnit-targeting assignment on the innermost-enclosing Organizational Unit takes precedence.
target can be only one of the following:
targetGroup
string
Immutable. Must be of the form groups/{group} .
targetOrgUnit
string
Immutable. Must be of the form orgUnits/{orgUnit} .
SsoMode
Inbound SSO behaviors.
Enums
SSO_MODE_UNSPECIFIED
Not allowed.
SSO_OFF
Disable SSO for the targeted users.
SAML_SSO
Use an external SAML Identity Provider for SSO for the targeted users.
OIDC_SSO
Use an external OIDC Identity Provider for SSO for the targeted users.
DOMAIN_WIDE_SAML_IF_ENABLED
Use the domain-wide SAML Identity Provider for the targeted users if one is configured; otherwise, this is equivalent to SSO_OFF . Note that this will also be equivalent to SSO_OFF if/when support for domain-wide SAML is removed. Google may disallow this mode at that point and existing assignments with this mode may be automatically changed to SSO_OFF .
SamlSsoInfo
Details that are applicable when ssoMode == SAML_SSO .
JSON representation
{
"inboundSamlSsoProfile" : string
}
Fields
inboundSamlSsoProfile
string
Required. Name of the InboundSamlSsoProfile to use. Must be of the form inboundSamlSsoProfiles/{inboundSamlSsoProfile} .
OidcSsoInfo
Details that are applicable when ssoMode is set to OIDC_SSO .
JSON representation
{
"inboundOidcSsoProfile" : string
}
Fields
inboundOidcSsoProfile
string
Required. Name of the InboundOidcSsoProfile to use. Must be of the form inboundOidcSsoProfiles/{inboundOidcSsoProfile} .
SignInBehavior
Controls sign-in behavior.
JSON representation
{
"redirectCondition" : enum ( RedirectCondition )
}
Fields
redirectCondition
enum ( RedirectCondition )
When to redirect sign-ins to the IdP.
RedirectCondition
Controls redirection to the IdP.
Enums
REDIRECT_CONDITION_UNSPECIFIED
Default and means "always"
NEVER
Sign-in flows where the user is prompted for their identity will not redirect to the IdP (so the user will most likely be prompted by Google for a password), but special flows like IdP-initiated SAML and sign-in following automatic redirection to the IdP by domain-specific service URLs will accept the IdP's assertion of the user's identity.
Methods
create
Creates an InboundSsoAssignment for users and devices in a Customer under a given Group or OrgUnit .
delete
Deletes an InboundSsoAssignment .
get
Gets an InboundSsoAssignment .
list
Lists the InboundSsoAssignment s for a Customer .
patch
Updates an InboundSsoAssignment .
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
