---
title: "REST Resource: projects.locations.singleTenantHsmInstances.proposals \_|\_\
  \ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances.proposals
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/rest/v1/projects.locations.singleTenantHsmInstances.proposals
  title: "REST Resource: projects.locations.singleTenantHsmInstances.proposals \_\
    |\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

REST Resource: projects.locations.singleTenantHsmInstances.proposals | Cloud Key Management Service | Google Cloud Documentation
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
KeyAccessJustificationsPolicyConfig
KeyOperationAttestation
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
Resource: SingleTenantHsmInstanceProposal
State
QuorumParameters
Challenge
RequiredActionQuorumParameters
RegisterTwoFactorAuthKeys
DisableSingleTenantHsmInstance
EnableSingleTenantHsmInstance
DeleteSingleTenantHsmInstance
AddQuorumMember
RemoveQuorumMember
RefreshSingleTenantHsmInstance
Methods approve
create
delete
execute
get
list
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
REST Resource: projects. locations. single Tenant Hsm Instances. proposals
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource: SingleTenantHsmInstanceProposal
State
QuorumParameters
Challenge
RequiredActionQuorumParameters
RegisterTwoFactorAuthKeys
DisableSingleTenantHsmInstance
EnableSingleTenantHsmInstance
DeleteSingleTenantHsmInstance
AddQuorumMember
RemoveQuorumMember
RefreshSingleTenantHsmInstance
Methods approve
create
delete
execute
get
list
Resource: SingleTenantHsmInstanceProposal
JSON representation
State
QuorumParameters
JSON representation
Challenge
JSON representation
RequiredActionQuorumParameters
JSON representation
RegisterTwoFactorAuthKeys
JSON representation
DisableSingleTenantHsmInstance
EnableSingleTenantHsmInstance
DeleteSingleTenantHsmInstance
AddQuorumMember
JSON representation
RemoveQuorumMember
JSON representation
RefreshSingleTenantHsmInstance
Methods
Resource: Single Tenant Hsm Instance Proposal
A SingleTenantHsmInstanceProposal represents a proposal to perform an operation on a SingleTenantHsmInstance .
JSON representation
See more code actions.
Light code theme
Dark code theme
{
"name" : string ,
"createTime" : string ,
"state" : enum ( State ) ,
"failureReason" : string ,
"deleteTime" : string ,
"purgeTime" : string ,
// Union field approval_parameters can be only one of the following:
"quorumParameters" : {
object ( QuorumParameters )
} ,
"requiredActionQuorumParameters" : {
object ( RequiredActionQuorumParameters )
}
// End of list of possible types for union field approval_parameters .
// Union field expiration can be only one of the following:
"expireTime" : string ,
"ttl" : string
// End of list of possible types for union field expiration .
// Union field operation can be only one of the following:
"registerTwoFactorAuthKeys" : {
object ( RegisterTwoFactorAuthKeys )
} ,
"disableSingleTenantHsmInstance" : {
object ( DisableSingleTenantHsmInstance )
} ,
"enableSingleTenantHsmInstance" : {
object ( EnableSingleTenantHsmInstance )
} ,
"deleteSingleTenantHsmInstance" : {
object ( DeleteSingleTenantHsmInstance )
} ,
"addQuorumMember" : {
object ( AddQuorumMember )
} ,
"removeQuorumMember" : {
object ( RemoveQuorumMember )
} ,
"refreshSingleTenantHsmInstance" : {
object ( RefreshSingleTenantHsmInstance )
}
// End of list of possible types for union field operation .
}
Fields
name
string
Identifier. The resource name for this SingleTenantHsmInstance in the format projects/*/locations/*/singleTenantHsmInstances/*/proposals/* .
createTime
string ( Timestamp format)
Output only. The time at which the SingleTenantHsmInstanceProposal was created.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
state
enum ( State )
Output only. The state of the SingleTenantHsmInstanceProposal .
failureReason
string
Output only. The root cause of the most recent failure. Only present if state is FAILED .
deleteTime
string ( Timestamp format)
Output only. The time at which the SingleTenantHsmInstanceProposal was deleted.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
purgeTime
string ( Timestamp format)
Output only. The time at which the soft-deleted SingleTenantHsmInstanceProposal will be permanently purged. This field is only populated when the state is DELETED and will be set a time after expiration of the proposal, i.e. >= expireTime or (createTime + ttl).
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
Union field approval_parameters . The approval parameters for the SingleTenantHsmInstanceProposal . The type of parameters is determined by the operation being proposed. approval_parameters can be only one of the following:
quorumParameters
object ( QuorumParameters )
Output only. The quorum approval parameters for the SingleTenantHsmInstanceProposal .
requiredActionQuorumParameters
object ( RequiredActionQuorumParameters )
Output only. Parameters for an approval of a SingleTenantHsmInstanceProposal that has both required challenges and a quorum.
Union field expiration . The expiration of the SingleTenantHsmInstanceProposal . If not set, the SingleTenantHsmInstanceProposal will expire in 1 day. The maximum expire time is 7 days. The minimum expire time is 5 minutes. expiration can be only one of the following:
expireTime
string ( Timestamp format)
The time at which the SingleTenantHsmInstanceProposal will expire if not approved and executed.
Uses RFC 3339, where generated output will always be Z-normalized and use 0, 3, 6 or 9 fractional digits. Offsets other than "Z" are also accepted. Examples: "2014-10-02T15:01:23Z" , "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30" .
ttl
string ( Duration format)
Input only. The TTL for the SingleTenantHsmInstanceProposal . Proposals will expire after this duration.
A duration in seconds with up to nine fractional digits, ending with ' s '. Example: "3.5s" .
Union field operation . The operation to perform on the SingleTenantHsmInstance . operation can be only one of the following:
registerTwoFactorAuthKeys
object ( RegisterTwoFactorAuthKeys )
Register 2FA keys for the SingleTenantHsmInstance . This operation requires all N Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
disableSingleTenantHsmInstance
object ( DisableSingleTenantHsmInstance )
Disable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
enableSingleTenantHsmInstance
object ( EnableSingleTenantHsmInstance )
Enable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the DISABLED state to perform this operation.
deleteSingleTenantHsmInstance
object ( DeleteSingleTenantHsmInstance )
Delete the SingleTenantHsmInstance . Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must be in the DISABLED or PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
addQuorumMember
object ( AddQuorumMember )
Add a quorum member to the SingleTenantHsmInstance . This will increase the totalApproverCount by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
removeQuorumMember
object ( RemoveQuorumMember )
Remove a quorum member from the SingleTenantHsmInstance . This will reduce totalApproverCount by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
refreshSingleTenantHsmInstance
object ( RefreshSingleTenantHsmInstance )
Refreshes the SingleTenantHsmInstance . This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshedDurationUntilDisable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
State
The set of states of a SingleTenantHsmInstanceProposal .
Enums
STATE_UNSPECIFIED
Not specified.
CREATING
The SingleTenantHsmInstanceProposal is being created.
PENDING
The SingleTenantHsmInstanceProposal is pending approval.
APPROVED
The SingleTenantHsmInstanceProposal has been approved.
RUNNING
The SingleTenantHsmInstanceProposal is being executed.
SUCCEEDED
The SingleTenantHsmInstanceProposal has been executed successfully.
FAILED
The SingleTenantHsmInstanceProposal has failed.
DELETED
The SingleTenantHsmInstanceProposal has been deleted and will be purged after the purgeTime.
QuorumParameters
Parameters of quorum approval for the SingleTenantHsmInstanceProposal .
JSON representation
{
"requiredApproverCount" : integer ,
"challenges" : [
{
object ( Challenge )
}
] ,
"approvedTwoFactorPublicKeyPems" : [
string
]
}
Fields
requiredApproverCount
integer
Output only. The required numbers of approvers. This is the M value used for M of N quorum auth. It is less than the number of public keys.
challenges[]
object ( Challenge )
Output only. The challenges to be signed by 2FA keys for quorum auth. M of N of these challenges are required to be signed to approve the operation.
approvedTwoFactorPublicKeyPems[]
string
Output only. The public keys associated with the 2FA keys that have already approved the SingleTenantHsmInstanceProposal by signing the challenge.
Challenge
A challenge to be signed by a 2FA key.
JSON representation
{
"challenge" : string ,
"publicKeyPem" : string
}
Fields
challenge
string ( bytes format)
Output only. The challenge to be signed by the 2FA key indicated by the public key.
A base64-encoded string.
publicKeyPem
string
Output only. The public key associated with the 2FA key that should sign the challenge.
RequiredActionQuorumParameters
Parameters for an approval that has both required challenges and a quorum.
JSON representation
{
"requiredChallenges" : [
{
object ( Challenge )
}
] ,
"requiredApproverCount" : integer ,
"quorumChallenges" : [
{
object ( Challenge )
}
] ,
"approvedTwoFactorPublicKeyPems" : [
string
]
}
Fields
requiredChallenges[]
object ( Challenge )
Output only. A list of specific challenges that must be signed. For some operations, this will contain a single challenge.
requiredApproverCount
integer
Output only. The required number of quorum approvers. This is the M value used for M of N quorum auth. It is less than the number of public keys.
quorumChallenges[]
object ( Challenge )
Output only. The challenges to be signed by 2FA keys for quorum auth. M of N of these challenges are required to be signed to approve the operation.
approvedTwoFactorPublicKeyPems[]
string
Output only. The public keys associated with the 2FA keys that have already approved the SingleTenantHsmInstanceProposal by signing the challenge.
RegisterTwoFactorAuthKeys
Register 2FA keys for the SingleTenantHsmInstance . This operation requires all Challenges to be signed by 2FA keys. The SingleTenantHsmInstance must be in the PENDING_TWO_FACTOR_AUTH_REGISTRATION state to perform this operation.
JSON representation
{
"requiredApproverCount" : integer ,
"twoFactorPublicKeyPems" : [
string
]
}
Fields
requiredApproverCount
integer
Required. The required numbers of approvers to set for the SingleTenantHsmInstance . This is the M value used for M of N quorum auth. Must be greater than or equal to 2 and less than or equal to totalApproverCount - 1.
twoFactorPublicKeyPems[]
string
Required. The public keys associated with the 2FA keys for M of N quorum auth. Public keys must be associated with RSA 2048 keys.
DisableSingleTenantHsmInstance
This type has no fields.
Disable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
EnableSingleTenantHsmInstance
This type has no fields.
Enable the SingleTenantHsmInstance . The SingleTenantHsmInstance must be in the DISABLED state to perform this operation.
DeleteSingleTenantHsmInstance
This type has no fields.
Delete the SingleTenantHsmInstance . Deleting a SingleTenantHsmInstance will make all CryptoKeys attached to the SingleTenantHsmInstance unusable. The SingleTenantHsmInstance must not be in the DELETING or DELETED state to perform this operation.
AddQuorumMember
Add a quorum member to the SingleTenantHsmInstance . This will increase the totalApproverCount by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
JSON representation
{
"twoFactorPublicKeyPem" : string
}
Fields
twoFactorPublicKeyPem
string
Required. The public key associated with the 2FA key for the new quorum member to add. Public keys must be associated with RSA 2048 keys.
RemoveQuorumMember
Remove a quorum member from the SingleTenantHsmInstance . This will reduce totalApproverCount by 1. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
JSON representation
{
"twoFactorPublicKeyPem" : string
}
Fields
twoFactorPublicKeyPem
string
Required. The public key associated with the 2FA key for the quorum member to remove. Public keys must be associated with RSA 2048 keys.
RefreshSingleTenantHsmInstance
This type has no fields.
Refreshes the SingleTenantHsmInstance . This operation must be performed periodically to keep the SingleTenantHsmInstance active. This operation must be performed before unrefreshedDurationUntilDisable has passed. The SingleTenantHsmInstance must be in the ACTIVE state to perform this operation.
Methods
approve
Approves a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
create
Creates a new SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
delete
Deletes a SingleTenantHsmInstanceProposal .
execute
Executes a SingleTenantHsmInstanceProposal for a given SingleTenantHsmInstance .
get
Returns metadata for a given SingleTenantHsmInstanceProposal .
list
Lists SingleTenantHsmInstanceProposals .
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
