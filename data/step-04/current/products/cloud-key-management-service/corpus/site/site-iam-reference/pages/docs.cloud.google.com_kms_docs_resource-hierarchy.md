---
title: "Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/resource-hierarchy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/resource-hierarchy
  title: "Cloud KMS resources \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud KMS resources | Cloud Key Management Service | Google Cloud Documentation
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
Discover
Product overview
Protection levels
Overview
Cloud HSM overview
Single-tenant Cloud HSM overview
Cloud EKM overview
Reference architectures for Cloud EKM
CMEK overview
Cloud KMS with Autokey
Compatible services
Cloud HSM for Google Workspace
Locations
Get started
Cloud KMS resources
Key purposes and algorithms
Separation of duties
Create and use encryption keys
CMEK best practices
Create and manage Single-tenant Cloud HSM instances
Create keys
Automate key creation
Autokey overview
Enable Autokey
Create a resource with Autokey
Create a key ring
Create a key
Import keys
About key import
Key wrapping
Format a key for import
Manually wrap a key for import
Configure OpenSSL for manual key wrapping
Wrap a key using OpenSSL
Set up automatic key wrapping
Import a key version
Verify an imported key version
Create external keys
Set up Cloud EKM over the internet
Create an EKM connection
Create an external Key
Control access
Manage IAM roles
Use Organization Policy Contraints
Create custom organization policy constraints for Cloud KMS
CMEK organization policies
Control key destruction
Secure data using keys
Key APIs
Use gRPC
Access the API
Sort and filter API list results
Generate random bytes
Use Cloud KMS keys in Google Cloud
Encrypt and decrypt data
Envelope encryption
Additional authenticated data
Asymmetric encryption
Encrypt and decrypt data with a symmetric key
Encrypt and decrypt data with a raw symmetric key
Encrypt and decrypt data with an asymmetric key
Verify end-to-end data integrity
Encrypt application data
Set up client-side encryption with Tink
Onboard to Cloud HSM for Google Workspace
Sign and validate data
Digital signatures
Create and validate signatures
MAC signatures
Create and validate MAC signatures
Share secrets using key encapsulation mechanisms
Key encapsulation mechanisms
Encapsulate and decapsulate using KEMs
Manage keys
Resource consistency
Key version states
View keys and key details
View keys by project
View encryption metrics
View key usage
Get a Cloud KMS resource ID
Retrieve a public key
Attest a Cloud HSM key
Label a key
Create and manage tags
Enable and disable a key version
Destroy and restore a key version
Delete Cloud KMS resources
Rotate keys
About key rotation
Rotate a key
Re-encrypt data
Update external key reference
Monitor
Using Cloud Audit Logging
Cloud KMS Inventory Service audit logging
Monitor state changes
Monitor and adjust quotas
Use Cloud Monitoring
Monitor EKM usage
Troubleshoot
Troubleshoot failed imports
Troubleshoot EKM via VPC errors
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
Keys Type
Purpose
Protection level
Primary version
Key versions State
Algorithm
Key rings
Key handles
Autokey configs
EKM connections
Retrieving a resource's ID
Organizing resources
Resource life cycles
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Cloud KMS resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Keys Type
Purpose
Protection level
Primary version
Key versions State
Algorithm
Key rings
Key handles
Autokey configs
EKM connections
Retrieving a resource's ID
Organizing resources
Resource life cycles
What's next
This page describes each type of resource in Cloud KMS. You can
learn more about the hierarchy of resources .
Keys
A Cloud KMS key is a named object containing one or more key
versions , along with metadata for the key. A key exists on
exactly one key ring tied to a specific location.
You can allow and deny access to keys using Identity and Access Management (IAM)
permissions and roles . You can't manage access to a key
version.
Disabling or destroying a key also disables or destroys each key version.
The following sections discuss the properties of a key.
Depending on the context, a key's properties are shown in a different format.
When using the Google Cloud CLI or the Cloud Key Management Service API, the property is shown
as a string of capital letters, like SOFTWARE .
When using the Google Cloud console, the property is shown as a string with
initial capitalization, like Software .
In the following sections, each format is shown where it is appropriate.
Type
A key's type determines whether the key is used for symmetric or asymmetric
cryptographic operations.
In symmetric encryption or signing, the same key is used to encrypt and decrypt
data or to sign and verify a signature.
In asymmetric encryption or signing, the key consists of a public key and a
private key. A private key with its corresponding public key is called a key
pair .
The private key is sensitive data, and is required to decrypt data or for
signing, depending on the key's configured purpose.
The public key is not considered sensitive, and is required to encrypt data
or to verify a signature, depending on the key's configured purpose.
A key's type is one component of the key's purpose, and can't be changed after
the key is created.
Purpose
A key's purpose indicates what kind of cryptographic operations the key can be
used for—for example, Symmetric encrypt/decrypt or Asymmetric
signing . You choose the purpose when creating the key, and all versions of a
key have the same purpose. A key's purpose can't be changed after the key is
created. For more information about key purposes, see
Key purposes .
Protection level
A key's protection level determines the key's storage environment at
rest. The protection level is one of the following:
Software ( SOFTWARE )
Multi-tenant HSM ( HSM )
Single-tenant HSM ( HSM_SINGLE_TENANT )
External ( EXTERNAL )
External_VPC ( EXTERNAL_VPC )
The protection level of a key can't be changed after the key is created.
Primary version
Keys can have multiple key versions active and enabled at one
time. Symmetric encryption keys have a primary key version, which is the key
version used by default to encrypt data if you don't specify a key version.
Asymmetric keys don't have primary versions; you must specify the version when
using the key.
For both symmetric and asymmetric keys, you can use any enabled key version to
encrypt and decrypt data or to sign and validate signatures.
Key versions
Each version of a key contains key material used for encryption or signing. Each
version is assigned a version number, starting at 1 . Rotating a key creates a
new key version. You can learn more about rotating
keys .
To decrypt data or verify a signature, you must use the same key version that
was used to encrypt or sign the data. To find a key version's resource ID, see
Retrieving a key's resource ID .
You can disable or destroy individual key versions without affecting other
versions. You can also disable or destroy all key versions for a given key.
You can't control access to key versions independently of the permissions in
effect on the key. Granting access to a key grants access to all of that key's
enabled versions.
For security reasons, no Google Cloud principal can view or export the raw
cryptographic key material represented by a key version. Instead,
Cloud KMS accesses the key material on your behalf.
The following sections discuss the properties of a key version.
State
Each key version has a state that tells you what its status is. Usually, a
key's state will be one of the following:
Enabled
Disabled
Scheduled for destruction
Destroyed
A key version can only be used when it's enabled.
Key versions in any state other than destroyed incur costs .
For more information about key version states and how versions can transition
between them, see Key version states .
Algorithm
A key version's algorithm determines how the key material is created and the
parameters required for cryptographic operations. Symmetric and asymmetric keys
use different algorithms. Encryption and signing use different algorithms.
If you don't specify an algorithm when creating a new key version, the algorithm
of the previous version is used.
Regardless of the algorithm, Cloud KMS uses probabilistic encryption,
so that the same plaintext encrypted with the same key version twice doesn't
return the same ciphertext.
Key rings
A key ring organizes keys in a specific Google Cloud
location and lets you manage access control on groups of keys. A key ring's name
does not need to be unique across a Google Cloud project, but must be
unique within a given location. After creation, a key ring cannot be deleted.
Key rings don't incur any costs.
For a list of available locations, see Cloud KMS locations .
Key handles
A key handle is a Cloud KMS resource that helps you safely span the
separation of duties to create new Cloud KMS keys for CMEK using
Autokey. The creation of a key handle in a resource project triggers
the creation of a Cloud KMS key in the key project for on-demand CMEK
setup.
A key handle holds a reference to the Cloud KMS key that was
created. You can retrieve the Cloud KMS resource ID of a key created
by Autokey from the key handle. Infrastructure-as-code tooling like
Terraform can work with key handles to manage CMEK-protected resources without
elevated privileges.
Key handles are not visible in the Google Cloud console, but to use Autokey
with the REST API or Terraform, you must work with key handles. For more
information about using key handles, see Create protected resources using
Cloud KMS Autokey .
Autokey configs
An Autokey config is a folder-level resource that defines whether
Autokey is enabled for the folder. The Autokey config also
defines which key project is used for keys created by Cloud KMS Autokey to
protect resources in that folder. When you enable Autokey, you create
or update an Autokey config on the resource folder. For more
information about using Autokey configs, see Enable
Cloud KMS Autokey .
EKM connections
An EKM connection is a Cloud KMS resource that organizes
VPC connections to your on-premises EKMs in a specific
Google Cloud location. An EKM connection lets you connect to and use
keys from an external key manager over a VPC network. After
creation, an EKM connection cannot be deleted.
EKM connections don't incur any costs.
Retrieving a resource's ID
Some API calls and gcloud CLI might require you to refer to a key
ring, key, or key version by its resource ID, which is a string representing the
fully-qualified CryptoKeyVersion name. Resource IDs are hierarchical, similar
to a file system path. A key's resource ID also contains information about the
key ring and location.
Object
Resource Id format
Key ring
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING
Key
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME
Key version
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /cryptoKeyVersions/ KEY_VERSION
Key handle
projects/ RESOURCE_PROJECT_ID /locations/ LOCATION /keyHandles/ KEY_HANDLE
EKM connection
projects/ PROJECT_ID /locations/ LOCATION /ekmConnections/ EKM_CONNECTION
Autokey config
folders/ FOLDER_NUMBER /autopilotConfig
To learn more, see
Getting a Cloud KMS resource ID .
Organizing resources
When you are planning how to organize the resources in your Google Cloud
project, consider your business rules and how you plan to manage access. You can
grant access to a single key, all keys on a key ring, or all keys in a project.
The following organization patterns are common:
By environment, such as prod , test , and develop .
By work area, such as payroll or insurance_claims .
By data sensitivity or characteristics, such as unrestricted ,
restricted , confidential , top-secret .
Resource life cycles
Key rings can't be deleted. You can delete keys and key
versions in some circumstances, but names of deleted keys can't be reused. This ensures that the
resource identifier of a key version is unique and
always points to the original key material for that key version unless it has been destroyed.
You can store an unlimited number of key rings, enabled or disabled keys, and
enabled, disabled, or destroyed key versions.
For more information, see Pricing and Quotas .
To learn how to destroy or restore a key version, see Destroying and restoring
key versions .
After you schedule the shutdown of a Google Cloud project ,
you can't access the project's resources, including Cloud KMS
resources, unless you recover the project by following the steps to restore a
project .
Warning: Once you schedule the shutdown of a project, there is a limited period
of time when you can recover the project. After the limited
time, the project and all the resources under it are permanently destroyed and
can't be recovered.
What's next
Create a key .
Learn more about permissions and roles in
Cloud KMS.
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
