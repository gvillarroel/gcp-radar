---
title: "REST Resource: projects.locations.singleTenantHsmInstances \_|\_ Cloud Key\
  \ Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances
  title: "REST Resource: projects.locations.singleTenantHsmInstances \_|\_ Cloud Key\
    \ Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.singleTenantHsmInstances | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS
Start free
Overview
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Cloud KMS
All APIs & references
API client libraries
PKCS #11 library
Overview
Use OpenSSL
Apache TLS termination
NGINX TLS offload
Use pkcs11-tool
Sign Windows artifacts with Jsign
Windows CNG Provider
Overview
Signing Windows artifacts
Permissions and roles
Cloud EKM error reference
Overview
KMS REST reference
Overview
v1
REST Resources
folders
Overview
getAutokeyConfig
getKajPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
organizations
Overview
getKajPolicyConfig
updateKajPolicyConfig
projects
Overview
getAutokeyConfig
getKajPolicyConfig
showEffectiveAutokeyConfig
showEffectiveKeyAccessJustificationsEnrollmentConfig
showEffectiveKeyAccessJustificationsPolicyConfig
updateAutokeyConfig
updateKajPolicyConfig
projects. locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects. locations. ekm Config
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects. locations. ekm Connections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects. locations. key Handles
Overview
create
get
list
projects. locations. key Rings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects. locations. key Rings. crypto Keys
Overview
create
decrypt
delete
encrypt
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
updatePrimaryVersion
projects. locations. key Rings. crypto Keys. crypto Key Versions
Overview
asymmetricDecrypt
asymmetricSign
create
decapsulate
delete
destroy
get
getPublicKey
import
list
macSign
macVerify
patch
rawDecrypt
rawEncrypt
restore
projects. locations. key Rings. import Jobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects. locations. operations
Overview
get
projects. locations. retired Resources
Overview
get
list
projects. locations. single Tenant Hsm Instances
Overview
create
get
list
projects. locations. single Tenant Hsm Instances. proposals
Overview
approve
create
delete
execute
get
list
Types
Autokey Config
Crypto Key Version Algorithm
Crypto Key Version View
Ekm Config
Get Policy Options
Key Access Justifications Policy Config
Key Operation Attestation
Location
Policy
ProtectionLevel
TestIamPermissionsResponse
KMS Inventory REST reference
Overview
v1
REST Resources
organizations.protectedResources
Overview
search
projects.cryptoKeys
Overview
list
projects.locations.keyRings.cryptoKeys
Overview
getProtectedResourcesSummary
KMS RPC reference
Overview
google.cloud.kms.v1
google.cloud.location
google.iam.v1
google.longrunning
google.rpc
google.type
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
Resource: SingleTenantHsmInstance
State
QuorumAuth
Methods create
get
list
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. single Tenant Hsm Instances
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: SingleTenantHsmInstance
State
QuorumAuth
Methods create
get
list
Resource: SingleTenantHsmInstance
JSON representation
State
QuorumAuth
JSON representation
Methods
Resource: Single Tenant Hsm Instance
A SingleTenantHsmInstance represents a single-tenant HSM instance. It can be used for creating CryptoKeys with a ProtectionLevel of HSM_SINGLE_TENANT , as well as performing cryptographic operations using keys created within the SingleTenantHsmInstance .
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"createTime" : string ,
"state" : enum ( State ) ,
"quorumAuth" : {
object ( QuorumAuth )
} ,
"deleteTime" : string ,
"unrefreshedDurationUntilDisable" : string ,
"disableTime" : string
}
Fields
name
string
Identifier. The resource name for this SingleTenantHsmInstance in the format projects/*/locations/*/singleTenantHsmInstances/* .
create Time
string ( Timestamp format)
Output only. The time at which the SingleTenantHsmInstance was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. The state of the SingleTenantHsmInstance .
quorum Auth
object ( QuorumAuth )
Required. The quorum auth configuration for the SingleTenantHsmInstance .
delete Time
string ( Timestamp format)
Output only. The time at which the SingleTenantHsmInstance was deleted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
unrefreshed Duration Until Disable
string ( Duration format)
Output only. The system-defined duration that an instance can remain unrefreshed until it is automatically disabled. This will have a value of 120 days.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
disable Time
string ( Timestamp format)
Output only. The time at which the instance will be automatically disabled if not refreshed. This field is updated upon creation and after each successful refresh operation and enable. A RefreshSingleTenantHsmInstance operation must be made via a SingleTenantHsmInstanceProposal before this time otherwise the SingleTenantHsmInstance will become disabled.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
State
The set of states of a SingleTenantHsmInstance .
Enums
STATE_UNSPECIFIED
Not specified.
CREATING
The SingleTenantHsmInstance is being created.
PENDING_TWO_FACTOR_AUTH_REGISTRATION
The SingleTenantHsmInstance is waiting for 2FA keys to be registered. This can be done by calling proposals.create with the RegisterTwoFactorAuthKeys operation.
ACTIVE
The SingleTenantHsmInstance is ready to use. A SingleTenantHsmInstance must be in the ACTIVE state for all CryptoKeys created within the SingleTenantHsmInstance to be usable.
DISABLING
The SingleTenantHsmInstance is being disabled.
DISABLED
The SingleTenantHsmInstance is disabled.
DELETING
The SingleTenantHsmInstance is being deleted. Requests to the instance will be rejected in this state.
DELETED
The SingleTenantHsmInstance has been deleted.
FAILED
The SingleTenantHsmInstance has failed and can not be recovered or used.
QuorumAuth
Configuration for M of N quorum auth.
JSON representation
{
"totalApproverCount" : integer ,
"requiredApproverCount" : integer ,
"twoFactorPublicKeyPems" : [
string
]
}
Fields
totalApproverCount
integer
Required. The total number of approvers. This is the N value used for M of N quorum auth. Must be greater than or equal to 3 and less than or equal to 16.
requiredApproverCount
integer
Output only. The required numbers of approvers. The M value used for M of N quorum auth. Must be greater than or equal to 2 and less than or equal to totalApproverCount - 1.
twoFactorPublicKeyPems[]
string
Output only. The public keys associated with the 2FA keys for M of N quorum auth.
Methods
create
Creates a new SingleTenantHsmInstance in a given Project and Location.
get
Returns metadata for a given SingleTenantHsmInstance .
list
Lists SingleTenantHsmInstances .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2025-12-24 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2025-12-24 UTC."],[],[]]
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
