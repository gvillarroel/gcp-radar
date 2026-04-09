---
title: "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles
knowledge_key: corpus
source_id: site-api-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/reference/rest
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/reference/permissions-and-roles
  title: "Permissions and roles \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Permissions and roles | Cloud Key Management Service | Google Cloud Documentation
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
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
projects.locations
Overview
generateRandomBytes
get
getEkmConfig
list
updateEkmConfig
projects.locations.ekmConfig
Overview
getIamPolicy
setIamPolicy
testIamPermissions
projects.locations.ekmConnections
Overview
create
get
getIamPolicy
list
patch
setIamPolicy
testIamPermissions
verifyConnectivity
projects.locations.keyHandles
Overview
create
get
list
projects.locations.keyRings
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.keyRings.cryptoKeys
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
projects.locations.keyRings.cryptoKeys.cryptoKeyVersions
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
projects.locations.keyRings.importJobs
Overview
create
get
getIamPolicy
list
setIamPolicy
testIamPermissions
projects.locations.operations
Overview
get
projects.locations.retiredResources
Overview
get
list
projects.locations.singleTenantHsmInstances
Overview
create
get
list
projects.locations.singleTenantHsmInstances.proposals
Overview
approve
create
delete
execute
get
list
Types
AutokeyConfig
CryptoKeyVersionAlgorithm
CryptoKeyVersionView
EkmConfig
GetPolicyOptions
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
Resource hierarchy
Security principles
Predefined roles
Custom roles
General guidelines for managing access in Cloud KMS
Checking permissions
What's next
Home
Documentation
Security
Cloud KMS
Reference
Was this helpful?
Send feedback
Permissions and roles
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Resource hierarchy
Security principles
Predefined roles
Custom roles
General guidelines for managing access in Cloud KMS
Checking permissions
What's next
In Cloud KMS, resources are organized into a hierarchy. This
hierarchy helps you manage and grant access to resources at various levels of
granularity. Keys are contained within key rings, and key rings
exist within a project. EKM connections also exist within a project. Projects
can be further organized into folders or organizations.
This topic provides more details about the hierarchy of resources within
Cloud KMS. To learn more about Google Cloud resources in
general, see
Resource hierarchy .
Resource hierarchy
The scope of an IAM role changes depending on the level of the resource
hierarchy where the role is granted. This table shows the effective capabilities
granted by the Cloud KMS CryptoKey Encrypter role
( roles/cloudkms.cryptoKeyEncrypter ) at different levels of the hierarchy.
You can manage access to keys or key rings, but not to individual key versions.
Resource hierarchy
Capability
Organization
Encrypt using all keys in all projects in the organization
Folder
Encrypt using all keys in all projects in the folder
Project
Encrypt using all keys in the project
Key ring
Encrypt using all keys on the key ring
Key
Encrypt using only that key
Security principles
IAM helps enforce the interrelated security principles of
separation of duties and
least privilege:
When you enforce the principle of separation of duties , no single member
has all of the access required to complete a critical business function. For
example, a bank teller can only withdraw funds from an account when the account
holder is physically present and initiates the transaction.
When you enforce the principle of least privilege , a member has only the
minimum level of access required to complete that member's specific business
functions. For example, a bank teller is not automatically granted the ability
to approve a customer loan.
Predefined roles
IAM provides
predefined roles
that grant access for each kind of Google Cloud resources. If no predefined
role meets your needs, you can create a custom role .
IAM offers the following predefined roles for
Cloud KMS:
32 results
Role
Permissions
Cloud KMS Admin
( roles/ cloudkms.admin )
Provides access to Cloud KMS resources, except for access to restricted resource types and cryptographic operations.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms.autokeyConfigs.*
cloudkms.autokeyConfigs.get
cloudkms.autokeyConfigs.update
cloudkms. cryptoKeyVersions. create
cloudkms. cryptoKeyVersions. delete
cloudkms. cryptoKeyVersions. destroy
cloudkms.cryptoKeyVersions.get
cloudkms. cryptoKeyVersions. list
cloudkms. cryptoKeyVersions. restore
cloudkms. cryptoKeyVersions. update
cloudkms. cryptoKeyVersions. useToDecryptViaDelegation
cloudkms. cryptoKeyVersions. useToEncryptViaDelegation
cloudkms.cryptoKeys.*
cloudkms.cryptoKeys.create
cloudkms.cryptoKeys.delete
cloudkms.cryptoKeys.get
cloudkms. cryptoKeys. getIamPolicy
cloudkms.cryptoKeys.list
cloudkms. cryptoKeys. setIamPolicy
cloudkms.cryptoKeys.update
cloudkms.ekmConfigs.*
cloudkms.ekmConfigs.get
cloudkms. ekmConfigs. getIamPolicy
cloudkms. ekmConfigs. setIamPolicy
cloudkms.ekmConfigs.update
cloudkms.ekmConnections.*
cloudkms.ekmConnections.create
cloudkms.ekmConnections.get
cloudkms. ekmConnections. getIamPolicy
cloudkms.ekmConnections.list
cloudkms. ekmConnections. setIamPolicy
cloudkms.ekmConnections.update
cloudkms.ekmConnections.use
cloudkms. ekmConnections. verifyConnectivity
cloudkms.importJobs.*
cloudkms.importJobs.create
cloudkms.importJobs.get
cloudkms. importJobs. getIamPolicy
cloudkms.importJobs.list
cloudkms. importJobs. setIamPolicy
cloudkms. importJobs. useToImport
cloudkms.kajPolicyConfigs.*
cloudkms.kajPolicyConfigs.get
cloudkms. kajPolicyConfigs. update
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.keyRings.*
cloudkms.keyRings.create
cloudkms. keyRings. createTagBinding
cloudkms. keyRings. deleteTagBinding
cloudkms.keyRings.get
cloudkms.keyRings.getIamPolicy
cloudkms.keyRings.list
cloudkms. keyRings. listEffectiveTags
cloudkms. keyRings. listTagBindings
cloudkms.keyRings.setIamPolicy
cloudkms.locations.get
cloudkms.locations.list
cloudkms. locations. optOutKeyDeletionMsa
cloudkms.operations.get
cloudkms.projects.*
cloudkms. projects. showEffectiveAutokeyConfig
cloudkms. projects. showEffectiveKajEnrollmentConfig
cloudkms. projects. showEffectiveKajPolicyConfig
cloudkms.retiredResources.*
cloudkms.retiredResources.get
cloudkms.retiredResources.list
cloudkms. singleTenantHsmInstanceProposals. delete
cloudkms. singleTenantHsmInstanceProposals. get
cloudkms. singleTenantHsmInstanceProposals. list
cloudkms. singleTenantHsmInstances.*
cloudkms. singleTenantHsmInstances. create
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
cloudkms. singleTenantHsmInstances. use
resourcemanager.projects.get
Cloud KMS Autokey Admin
( roles/ cloudkms.autokeyAdmin )
Enables management of AutokeyConfig.
cloudkms.autokeyConfigs.*
cloudkms.autokeyConfigs.get
cloudkms.autokeyConfigs.update
cloudkms. projects. showEffectiveAutokeyConfig
Cloud KMS Autokey User
( roles/ cloudkms.autokeyUser )
Grants ability to use KeyHandle resources.
cloudkms.keyHandles.*
cloudkms.keyHandles.create
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.operations.get
cloudkms. projects. showEffectiveAutokeyConfig
Cloud KMS CryptoKey Decrypter
( roles/ cloudkms.cryptoKeyDecrypter )
Provides ability to use Cloud KMS resources for decrypt operations
only.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToDecrypt
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Decrypter Via Delegation
( roles/ cloudkms.cryptoKeyDecrypterViaDelegation )
Enables Decrypt operations via other Google Cloud services
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToDecryptViaDelegation
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS CryptoKey Encrypter
( roles/ cloudkms.cryptoKeyEncrypter )
Provides ability to use Cloud KMS resources for encrypt operations
only.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToEncrypt
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Encrypter/Decrypter
( roles/ cloudkms.cryptoKeyEncrypterDecrypter )
Provides ability to use Cloud KMS resources for encrypt and decrypt
operations only.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToDecrypt
cloudkms. cryptoKeyVersions. useToEncrypt
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Encrypter/Decrypter Via Delegation
( roles/ cloudkms.cryptoKeyEncrypterDecrypterViaDelegation )
Enables Encrypt and Decrypt operations via other Google Cloud services
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToDecryptViaDelegation
cloudkms. cryptoKeyVersions. useToEncryptViaDelegation
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS CryptoKey Encrypter Via Delegation
( roles/ cloudkms.cryptoKeyEncrypterViaDelegation )
Enables Encrypt operations via other Google Cloud services
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToEncryptViaDelegation
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS Crypto Operator
( roles/ cloudkms.cryptoOperator )
Enables all Crypto Operations.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToDecapsulate
cloudkms. cryptoKeyVersions. useToDecrypt
cloudkms. cryptoKeyVersions. useToEncrypt
cloudkms. cryptoKeyVersions. useToSign
cloudkms. cryptoKeyVersions. useToVerify
cloudkms. cryptoKeyVersions. viewPublicKey
cloudkms. locations. generateRandomBytes
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Decapsulator
Beta
( roles/ cloudkms.decapsulator )
Enables Decapsulate and GetPublicKey operations
cloudkms. cryptoKeyVersions. useToDecapsulate
cloudkms. cryptoKeyVersions. viewPublicKey
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS EkmConnections Admin
( roles/ cloudkms.ekmConnectionsAdmin )
Enables management of EkmConnections.
cloudkms.ekmConfigs.get
cloudkms.ekmConfigs.update
cloudkms.ekmConnections.create
cloudkms.ekmConnections.get
cloudkms.ekmConnections.list
cloudkms.ekmConnections.update
cloudkms. ekmConnections. verifyConnectivity
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS Expert PQ Asymmetric Signing Key Manager
( roles/ cloudkms.expertPqcSigner )
Enables PQ asymmetric signing key management.
cloudkms. cryptoKeyVersions. managePqcSign
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS Expert Raw AES-CBC Key Manager
( roles/ cloudkms.expertRawAesCbc )
Enables raw AES-CBC keys management.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. manageRawAesCbcKeys
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS Expert Raw AES-CTR Key Manager
( roles/ cloudkms.expertRawAesCtr )
Enables raw AES-CTR keys management.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. manageRawAesCtrKeys
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS Expert Raw PKCS#1 Key Manager
( roles/ cloudkms.expertRawPKCS1 )
Enables raw PKCS#1 keys management.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. manageRawPKCS1Keys
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
resourcemanager.projects.list
Cloud KMS single-tenant HSM Executor
( roles/ cloudkms.hsmSingleTenantExecutor )
Grants ability to execute SingleTenantHsmInstanceProposal resources.
cloudkms.operations.get
cloudkms. singleTenantHsmInstanceProposals. execute
cloudkms. singleTenantHsmInstanceProposals. get
cloudkms. singleTenantHsmInstanceProposals. list
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
Cloud KMS single-tenant HSM Key Creator
( roles/ cloudkms.hsmSingleTenantKeyCreator )
Grants ability to use single-tenant HSM instances to create keys. This role must be combined with another role that grants the ability to create cryptoKeys.
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
cloudkms. singleTenantHsmInstances. use
Cloud KMS single-tenant HSM Proposer
( roles/ cloudkms.hsmSingleTenantProposer )
Grants ability to create SingleTenantHsmInstances and SingleTenantHsmInstanceProposals.
cloudkms.operations.get
cloudkms. singleTenantHsmInstanceProposals. create
cloudkms. singleTenantHsmInstanceProposals. delete
cloudkms. singleTenantHsmInstanceProposals. get
cloudkms. singleTenantHsmInstanceProposals. list
cloudkms. singleTenantHsmInstances. create
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
Cloud KMS single-tenant HSM Quorum Member
( roles/ cloudkms.hsmSingleTenantQuorumMember )
Grants ability to approve SingleTenantHsmInstanceProposal resources.
cloudkms.operations.get
cloudkms. singleTenantHsmInstanceProposals. approve
cloudkms. singleTenantHsmInstanceProposals. get
cloudkms. singleTenantHsmInstanceProposals. list
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
Cloud KMS Importer
( roles/ cloudkms.importer )
Enables ImportCryptoKeyVersion, CreateImportJob, ListImportJobs, and GetImportJob operations
cloudkms.importJobs.create
cloudkms.importJobs.get
cloudkms.importJobs.list
cloudkms. importJobs. useToImport
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Key Access Justifications Enrollment Viewer
( roles/ cloudkms.keyAccessJustificationsEnrollmentConfigViewer )
Grant ability to view Key Access Justification enrollment configs of a project.
cloudkms. projects. showEffectiveKajEnrollmentConfig
Key Access Justifications Policy Config Admin
( roles/ cloudkms.keyAccessJustificationsPolicyConfigAdmin )
Grant ability to manage Key Access Justifications Policy at parent resource level.
cloudkms.kajPolicyConfigs.*
cloudkms.kajPolicyConfigs.get
cloudkms. kajPolicyConfigs. update
cloudkms. projects. showEffectiveKajPolicyConfig
Cloud KMS Organization Service Agent
( roles/ cloudkms.orgServiceAgent )
Gives Cloud KMS organization-level service account access to managed resources.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudasset.assets.listResource
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
Cloud KMS Protected Resources Viewer
( roles/ cloudkms.protectedResourcesViewer )
Enables viewing protected resources.
cloudkms. protectedResources. search
Cloud KMS CryptoKey Public Key Viewer
( roles/ cloudkms.publicKeyViewer )
Enables GetPublicKey operations
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. viewPublicKey
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS Service Agent
( roles/ cloudkms.serviceAgent )
Gives Cloud KMS service account access to managed resources.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudasset. assets. listCloudkmsCryptoKeys
cloudasset.assets.listResource
cloudasset. assets. searchAllIamPolicies
cloudasset. assets. searchAllResources
cloudkms.cryptoKeys.create
cloudkms. cryptoKeys. getIamPolicy
cloudkms. cryptoKeys. setIamPolicy
cloudkms.keyRings.create
cloudkms.keyRings.get
Cloud KMS CryptoKey Signer
( roles/ cloudkms.signer )
Enables Sign operations
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToSign
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Signer/Verifier
( roles/ cloudkms.signerVerifier )
Enables Sign, Verify, and GetPublicKey operations
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToSign
cloudkms. cryptoKeyVersions. useToVerify
cloudkms. cryptoKeyVersions. viewPublicKey
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS CryptoKey Verifier
( roles/ cloudkms.verifier )
Enables Verify and GetPublicKey operations
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms. cryptoKeyVersions. useToVerify
cloudkms. cryptoKeyVersions. viewPublicKey
cloudkms.locations.get
cloudkms.locations.list
resourcemanager.projects.get
Cloud KMS Viewer
( roles/ cloudkms.viewer )
Enables Get and List operations.
Lowest-level resources where you can grant this role:
CryptoKey
cloudkms.autokeyConfigs.get
cloudkms.cryptoKeyVersions.get
cloudkms. cryptoKeyVersions. list
cloudkms.cryptoKeys.get
cloudkms.cryptoKeys.list
cloudkms.ekmConfigs.get
cloudkms.ekmConnections.get
cloudkms.ekmConnections.list
cloudkms.importJobs.get
cloudkms.importJobs.list
cloudkms.kajPolicyConfigs.get
cloudkms.keyHandles.get
cloudkms.keyHandles.list
cloudkms.keyRings.get
cloudkms.keyRings.list
cloudkms.locations.get
cloudkms.locations.list
cloudkms.operations.get
cloudkms.retiredResources.*
cloudkms.retiredResources.get
cloudkms.retiredResources.list
cloudkms. singleTenantHsmInstanceProposals. get
cloudkms. singleTenantHsmInstanceProposals. list
cloudkms. singleTenantHsmInstances. get
cloudkms. singleTenantHsmInstances. list
resourcemanager.projects.get
Cloud KMS KACLS Service Agent
( roles/ cloudkmskacls.serviceAgent )
Grants Cloud KMS KACLS Service Agent access to KMS resource permissions to perform DEK encryption/decryption.
Warning: Do not grant service agent roles to any principals except
service agents .
cloudkms. cryptoKeyVersions. useToDecrypt
cloudkms. cryptoKeyVersions. useToEncrypt
cloudkms.cryptoKeys.get
Custom roles
In addition to predefined roles , you can create
custom roles . Custom roles allow you to
enforce the
principle of least privilege by
granting the role the minimum permissions required to perform a given task.
A custom role includes one or more of the permissions listed in the
IAM reference .
Permissions related to the Cloud Key Management Service API begin with the string cloudkms .
For more information, see
Support levels for permissions in custom roles .
For information about the permissions required to invoke a specific Cloud Key Management Service API
method, see that method's API reference .
General guidelines for managing access in Cloud KMS
We recommend that you avoid using basic project-wide roles like owner ,
editor , and viewer . These roles do not separate the ability to manage keys
from the ability to use the keys for cryptographic operations, and are not
recommended for production environments. Instead, use predefined roles or create
custom roles that reflect your business requirements.
The following examples help illustrate some good security guidelines:
For a large or complex organization, you might decide on an approach like the
following:
Grant members of your IT security team the Cloud KMS Admin role
( roles/cloudkms.admin ) across all projects. If different team members
handle different aspects of a key's lifecycle, you can grant those team
members a more granular role, like the Cloud KMS Importer role
( roles/cloudkms.importer ).
Grant the Cloud KMS Encrypter / Decrypter role
( roles/cloudkms.cryptoKeyEncrypterDecrypter ) to users or applications
that read or write encrypted data.
Grant the Cloud KMS Public Key Viewer role
( roles/cloudkms.publicKeyViewer ) to users or applications that need to
view the public portion of a key used for asymmetric encryption.
Create predefined roles that match your business requirements. For example,
the same user might need to monitor a project's quotas and to view log data.
For a small organization with simple security requirements, you might choose
to take a simpler approach by granting a broad role such as
Organization Admin ( roles/resourcemanager.organizationAdmin ).
However, this approach might not scale with your ongoing requirements.
Consider hosting your keys in a separate Google Cloud project from the
data protected by those keys. A user with a basic or highly privileged role
in one project, such as editor , cannot use this role to gain unauthorized
access to keys in a different project.
Avoid granting the owner role to any member. Without the owner role, no
member in the project can both create a key and use it to decrypt data or for
signing, unless each of these permissions is granted to that member. To grant
broad administrative access without granting the ability to encrypt or
decrypt, grant the Cloud KMS Admin role ( roles/cloudkms.admin ) role instead.
To limit access to encrypted data, such as customer data, you can restrict
who can access the key and who can use the key for decryption. If necessary,
you can create granular custom roles to meet your business
requirements.
Checking permissions
For each Cloud KMS object type for which you can set granular
IAM permissions, that object has a testIamPermissions method.
The testIamPermissions method returns the set of permissions the caller has
been granted for that object.
For key rings, you can invoke the
cloudkms.keyRings.testIamPermissions
method.
For keys, you can invoke the
cloudkms.cryptoKeys.testIamPermissions
method.
For key import jobs , you can invoke the
cloudkms.keyRings.importJobs.testIamPermissions
method.
For EKM connections ,
you can invoke the cloudkms.ekmConnections.testIamPermissions
method.
You cannot set IAM permissions on a key version, so the
CryptoKeyVersion object type does not have this method.
An object's testIamPermissions method returns a
TestIamPermissionsResponse .
For examples of invoking testIamPermissions methods, see the documentation for
testing permissions in the IAM
documentation.
What's next
Learn how
IAM centralizes management of permissions
and access scopes for Google Cloud resources.
Understand the different types of
Cloud KMS objects .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
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
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
