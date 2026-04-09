---
title: "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/cmek-best-practices
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/cmek-best-practices
  title: "Best practices for using CMEKs \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Best practices for using CMEKs | Cloud Key Management Service | Google Cloud Documentation
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
Preliminary decisions Decide whether to use CMEK
Choose manual or automated key creation
Design your CMEK architecture Use a centralized CMEK key project for each environment
Create Cloud KMS key rings for each location
Choose a key granularity strategy
Choose the protection level for keys
Use Google Cloud-generated key material when possible
Choose the right key purpose and algorithm for your needs
Choose a rotation period
Apply appropriate access controls Apply the principle of least privilege
Plan for separation of duties
Enforce CMEK consistently Enforce project liens
Require CMEK keys
Require a minimum scheduled for destruction duration
Enforce allowed protection levels for CMEKs
Configure detective controls for CMEKs Enable and aggregate audit logging
Monitor key usage
Enable Security Command Center for Cloud KMS vulnerability findings
Assess your compliance requirements
Summary of best practices
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Best practices for using CMEKs
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Preliminary decisions Decide whether to use CMEK
Choose manual or automated key creation
Design your CMEK architecture Use a centralized CMEK key project for each environment
Create Cloud KMS key rings for each location
Choose a key granularity strategy
Choose the protection level for keys
Use Google Cloud-generated key material when possible
Choose the right key purpose and algorithm for your needs
Choose a rotation period
Apply appropriate access controls Apply the principle of least privilege
Plan for separation of duties
Enforce CMEK consistently Enforce project liens
Require CMEK keys
Require a minimum scheduled for destruction duration
Enforce allowed protection levels for CMEKs
Configure detective controls for CMEKs Enable and aggregate audit logging
Monitor key usage
Enable Security Command Center for Cloud KMS vulnerability findings
Assess your compliance requirements
Summary of best practices
What's next
This page outlines best practices for configuring encryption at rest with
customer-managed encryption keys (CMEKs) on your Google Cloud resources.
This guide is intended for cloud architects and security teams and outlines
best practices and decisions that you must make while you design your CMEK
architecture.
This guide assumes that you're already familiar with Cloud Key Management Service
(Cloud KMS) and customer-managed encryption keys
and have read the Cloud KMS deep dive .
Preliminary decisions
The recommendations on this page are intended for customers who use CMEKs to
encrypt their data. If you're not sure whether to use manually or
automatically created CMEKs as part of your security strategy, this section
provides guidance for these preliminary decisions.
Decide whether to use CMEK
We recommend that you use CMEK to encrypt data at rest in Google Cloud
services if you require any of the following capabilities:
Own your encryption keys.
Control and manage your encryption keys, including choice of location,
protection level, creation, access control, rotation, use, and destruction.
Generate key material in Cloud KMS or import key material that is
maintained outside of Google Cloud.
Set policy regarding where your keys must be used.
Selectively delete data protected by your keys in the case of off-boarding
or to remediate security events (crypto-shredding).
Create and use keys that are unique to a customer, establishing a
cryptographic boundary around your data.
Log administrative and data access to encryption
keys.
Meet current or future regulation that requires any of these goals.
If you don't require these capabilities, evaluate whether
default encryption at rest with
Google-owned and managed keys is
appropriate for your use case.
If you choose to use only default encryption, you can stop
reading this guide.
Choose manual or automated key creation
This guide outlines best practices for decisions that you must make when
provisioning CMEKs yourself. Cloud KMS Autokey makes
some of these decisions for you and automates many recommendations from this
guide. Using Autokey is simpler than provisioning keys yourself, and is
the recommended choice if the keys created by Autokey meet all of your
requirements.
Autokey provisions CMEKs for you. The CMEKs provisioned by
Autokey have the following characteristics:
Protection level: HSM.
Algorithm: AES-256 GCM.
Rotation period: One year.
After a key is created by Autokey, a Cloud KMS
administrator can edit the rotation period from the default.
Separation of duties:
The service account for the service is automatically granted encrypt and
decrypt permissions on the key.
Cloud KMS administrator permissions apply as usual to keys
created by Autokey. Cloud KMS administrators can
view, update, enable or disable, and destroy keys created by
Autokey. Cloud KMS administrators are not given
encrypt and decrypt permissions.
Autokey developers can only request key creation and
assignment. They cannot view or manage keys.
Key specificity or granularity : Keys created by Autokey
have a granularity that varies by resource type. For service-specific details
about key granularity, see Compatible services .
Location: Autokey creates keys in the same location as the
resource to be protected.
If you need to create CMEK-protected resources in locations where
Cloud HSM is not available, you must create your CMEK manually.
Key version state: Newly created keys requested using Autokey
are created as the primary key version in the enabled state.
Key ring naming: All keys created by Autokey are created in a
key ring called autokey in the Autokey project in the selected
location. Key rings in your Autokey project are created when an
Autokey developer requests the first key in a given location.
Key naming: Keys created by Autokey follow this naming
convention: PROJECT_NUMBER - SERVICE_SHORT_NAME - RANDOM_HEX
Key export: Like all Cloud KMS keys, keys created by
Autokey can't be exported.
Key tracking: Like all Cloud KMS keys used in CMEK integrated
services that are compatible with key tracking , keys
created by Autokey are tracked in the Cloud KMS dashboard.
If you have requirements that can't be met with keys created by
Autokey, such as a protection level other than HSM or services that
aren't compatible with Autokey, then we recommend using
manually-created CMEKs rather than Autokey.
Design your CMEK architecture
When designing a CMEK architecture, you must consider the configuration of the
keys you will use and how these keys are managed. These decisions influence your
cost, operational overhead, and ease of implementing capabilities such as
crypto-shredding.
The following sections discuss recommendations for each design choice.
Use a centralized CMEK key project for each environment
We recommend using a centralized CMEK key project for each environment folder.
Don't create resources encrypted with CMEK in the same project where you manage
Cloud KMS keys. This approach helps to prevent sharing of encryption
keys across environments and helps to enable separation of duties.
The following diagram illustrates these concepts in the recommended
design:
Each environment folder has a Cloud KMS key project administered
separately from application projects.
Cloud KMS key rings and keys are provisioned in the
Cloud KMS key project, and these keys are used to encrypt resources
in the application projects.
Identity and Access Management (IAM) policies are applied to projects or folders to
enable separation of duties. The principal managing Cloud KMS keys
in the Cloud KMS key project isn't the same principal that
uses the encryption keys in application projects.
If you use Cloud KMS Autokey, each folder for which Autokey is
enabled must have a dedicated Cloud KMS key project.
Create Cloud KMS key rings for each location
You must create Cloud KMS key rings in the locations where you deploy
Google Cloud resources encrypted with CMEK.
Regional and zonal resources must use a key ring and CMEK in the same
region as the resource or in the global location.
Single-region and zonal resources can't use a multi-region key ring other
than global .
Multi-region
resources (such as a BigQuery dataset in the us
multi-region) must use a key ring and CMEK in the same multi-region or
dual-region. Multi-region resources can't use a regional key
ring.
Global resources must use a key ring and CMEK in the global
location.
Enforcing regional keys is one piece of a data regionalization strategy. By
enforcing the use of key rings and keys in a defined region, you also enforce
that resources must match the region of the key ring.
For guidance on data residency, see
Control data residency .
For workloads that require high availability or disaster recovery capabilities
across multiple locations, it's your responsibility to assess whether your
workload is resilient in the event that Cloud KMS becomes unavailable
in a certain region. For example, a Compute Engine persistent disk encrypted
with a Cloud KMS key from region A can't be recreated in region B in a
disaster recovery scenario where region A is unavailable. To mitigate risk of
this scenario, you can plan for encrypting a resource with global keys.
For more information, see
Choosing the best type of location .
If you use Cloud KMS Autokey,
key rings are created for you in the same location as the resources you
protect.
Choose a key granularity strategy
Granularity refers to the scale and scope of each key's intended usage. For
example, a key that protects several resources is said to be less granular
than a key that protects only one resource.
Manually-provisioned
Cloud KMS keys for CMEK must be provisioned in advance before creating
a resource that will be encrypted with the key, such as a Compute Engine
persistent disk.
You might choose to create very granular keys for individual resources or to
create less granular keys for reuse among resources more broadly.
In general, we recommend the following granularity strategy:
Each key protects resources in a single location—for example,
us-central1 .
Each key protects resources in a single service or product—for
example, BigQuery.
Each key protects resources in a single Google Cloud project.
This recommendation might not be the ideal granularity strategy for your
organization. For most organizations, this strategy provides a good balance
between the overhead of maintaining many highly granular keys and
the potential risks of using less granular keys that are shared between many
projects, services, or resources.
Keys created with Cloud KMS Autokey follow this recommendation.
If you want to follow a different granularity strategy, consider the following
trade-offs of different patterns:
High granularity keys —for example, one key for each individual
resource
More control to safely disable key versions: Disabling or destroying a
key version that is used for a narrow scope has lower risk of affecting
other resources than disabling or destroying a shared key. This also means
that using highly granular keys helps to reduce the potential impact of a
key becoming compromised when compared with using low granularity keys.
Cost: Using granular keys requires maintaining more active key versions
when compared with a strategy that uses keys with lower granularity.
Because Cloud KMS pricing is based on the number
of active key versions, choosing higher key granularity results in higher
costs.
Operational overhead: Using highly granular keys might require
administrative effort or additional tooling for automation to provision a
large number of Cloud KMS resources and to manage access controls
for service agents so they can only use the appropriate keys.
If you require keys with high
granularity, Autokey might be a good choice to automate
provisioning. For more information about Autokey key granularity
for each service, see Compatible services .
Low granularity keys —for example, one key for each application, for
each region, and for each environment:
Requires care to safely disable key versions: Disabling or destroying a
key version that is used for a broad scope requires more care than disabling
or destroying a highly granular key. You must ensure that all resources
encrypted by that key version are safely re-encrypted with a new key version
before disabling the old key version.
For many resource types, you can view key usage to help
identify where a key has been used.
This also means that using low granularity keys can increase the potential
impact from a key becoming compromised when compared with using high
granularity keys.
Cost: Using less granular keys requires fewer key versions to be
created, and Cloud KMS pricing is based on the
number of active key versions.
Operational overhead: You can define and pre-provision a known number of
keys, with less effort required to ensure appropriate access controls.
Choose the protection level for keys
When creating a key, it's your responsibility to select the protection
level that is appropriate for each key based on
your requirements for the data and workloads encrypted with CMEK. The following
questions can help you in your assessment:
Do you require any of the CMEK capabilities? You can review the capabilities
listed at Decide whether to use CMEK on this page.
If so, continue to the next question.
If not, we recommend using
Google default encryption .
Do you require that your key material stays within the physical
boundary of a hardware security module (HSM)?
If so, continue to the next question.
If not, we recommend using CMEK with software-backed
keys .
Do you require that key material be stored outside of Google Cloud?
If so, we recommend CMEK with Cloud External Key Manager .
If not, continue to the next question.
Do you require administrative control of your HSM cluster and cryptographic
isolation from other Google Cloud customers?
If so, we recommend CMEK with
Single-tenant Cloud HSM
(single-tenant hardware-backed keys).
If not, we recommend CMEK with
Multi-tenant Cloud HSM
(multi-tenant hardware-backed keys).
Autokey supports only the HSM protection level. If you require other
protection levels, you must provision the keys yourself.
Use Google Cloud-generated key material when possible
This section doesn't apply to Cloud EKM keys.
When you create a key, you must either allow Cloud KMS to generate the
key material for you or manually import key material generated
outside of Google Cloud. When possible, we recommend that you choose the
generated option. This option does not expose the raw key material outside of
Cloud KMS and automatically creates new key versions based on the key
rotation period that you choose. If you require the option to import your own
key material, we recommend that you assess the following operational
considerations and risks of using the bring-your-own-key (BYOK) approach:
Can you implement automation to consistently import new key versions? This
includes both Cloud KMS settings to restrict key versions to
import only , and automation outside of
Cloud KMS to consistently generate and import key material. What is
the impact if your automation fails to create a new key version at the
expected time?
How do you intend to securely store or escrow the original key material?
How can you mitigate the risk of your process to import keys leaking the raw
key material?
What would the impact be to
re-import a previously destroyed key because the
raw key material was retained outside of Google Cloud?
Does the benefit of importing key material yourself justify the increased
operational overhead and risk?
Choose the right key purpose and algorithm for your needs
When you create a key, you must select the purpose and underlying algorithm for
the key. For CMEK use cases, only keys with the symmetric ENCRYPT_DECRYPT
purpose can be used. This key purpose always uses the
GOOGLE_SYMMETRIC_ENCRYPTION algorithm, which uses 256-bit Advanced Encryption
Standard (AES-256) keys in Galois Counter Mode (GCM), padded with
Cloud KMS-internal metadata. When you use Autokey, these
settings are automatically applied for you.
For other use cases such as client-side encryption, review the available key
purposes and algorithms to choose the option most appropriate to
your use case.
Choose a rotation period
We recommend that you assess the appropriate key rotation period
for your needs. The frequency of key rotation depends on the requirements
of your workloads based on sensitivity or compliance. For example, key rotation
might be required at least once yearly to meet certain compliance standards, or
you might choose a more frequent rotation period for highly sensitive workloads.
After rotating a symmetric key, the new version is marked as the primary key
version and is used for all new requests to protect information. The old key
versions remain available for use to decrypt any previously encrypted data
protected with that version. When you rotate a key, data that was encrypted with
previous key versions is not automatically re-encrypted.
Frequent key rotation helps limit the number of messages encrypted with the same
key version, which helps to reduce the risk and consequences of a key becoming
compromised.
If you use Autokey, keys are created using a default key rotation
period of one year. You can change the rotation period
for keys after they are created.
Apply appropriate access controls
We recommend that you consider the principles of least privilege and separation
of duties when planning access controls. The following sections introduce these
recommendations.
Apply the principle of least privilege
When assigning permission for managing CMEKs, consider the principle of least
privilege and grant the minimum permissions needed to perform a task. We
strongly recommend that you avoid using basic roles . Instead,
grant predefined Cloud KMS roles to mitigate
risks of security incidents related to over-privileged access.
Violations of this principle and related issues can be automatically detected by
Security Command Center vulnerability findings for
IAM .
Plan for separation of duties
Maintain separate identities and permissions for those who administer your
encryption keys and those who use them. NIST SP 800-152 defines a separation
of duties between the cryptographic officer who enables and manages the services
of a cryptographic key management system and a user who uses those keys to
encrypt or decrypt resources.
When you use CMEK to manage encryption at rest with Google Cloud services,
the IAM role to use encryption keys is assigned to the service
agent of the Google Cloud service, not the individual
user. For example, to create objects in an encrypted Cloud Storage bucket, a
user needs only the IAM role roles/storage.objectCreator , and
the Cloud Storage service agent in the same project (like
service- PROJECT_NUMBER @gs-project-accounts.iam.gserviceaccount.com )
needs the IAM role roles/cloudkms.cryptoKeyEncrypterDecrypter .
The following table lists which IAM roles are typically
associated with which job function:
IAM role
Description
NIST SP 800-152 designation
roles/cloudkms.admin
Provides access to Cloud KMS resources, except for access to
restricted resource types and cryptographic operations.
Cryptographic officer
roles/cloudkms.cryptoKeyEncrypterDecrypter
Provides ability to use Cloud KMS resources for
encrypt and decrypt operations only.
Cryptographic Key Management System user
roles/cloudkms.viewer
Enables get and list operations.
Audit administrator
Violations of this principle and related issues can be automatically detected
by Security Command vulnerability findings for
Cloud KMS .
Enforce CMEK consistently
The following sections describe additional controls to help mitigate risks
like inconsistent key usage or accidental deletion or destruction.
Enforce project liens
We recommend that you protect projects with liens ( Preview ) to avoid
accidental deletion. When a project lien is enforced, the Cloud KMS key
project is blocked from deletion until the lien is removed.
Require CMEK keys
We recommend that you enforce CMEK usage across your environment using
organization policy constraints.
Use constraints/gcp.restrictNonCmekServices to block
requests to create certain resource types without specifying a CMEK key.
Require a minimum scheduled for destruction duration
We recommend that you set a minimum scheduled for destruction duration. Key
destruction is an irreversible operation that can result in data loss. By
default, Cloud KMS uses a scheduled for destruction duration
(sometimes called a soft delete period ) of 30 days
before key material is irrecoverably destroyed. This provides some time to
restore a key in the event of accidental destruction. However, it is possible
for someone with the Cloud KMS
Admin role to create a key with a scheduled for destruction duration as low as
24 hours, which might not be sufficient time for you to detect an issue and
restore the key. The scheduled for destruction duration can only be set during
key creation.
While a key is scheduled for destruction , it can't be used for cryptographic
operations, and any requests to use the key fail. During this time, monitor
audit logs to check that the key is not in use .
If you want to use the key again, you must
restore the key before the
end of the scheduled for destruction period.
To ensure that all keys created adhere to a minimum scheduled for destruction
duration, we recommend that you configure the organization policy constraint
constraints/cloudkms.minimumDestroyScheduledDuration
with a minimum of 30 days, or your preferred
duration. This organization policy prevents users from creating keys with a
scheduled for destruction duration less than the value specified in the
policy.
Enforce allowed protection levels for CMEKs
We recommend that you enforce your requirements for key protection levels
consistently across your environment using organization policy constraints.
Use constraints/cloudkms.allowedProtectionLevels
to enforce that new keys, key versions, and import jobs must use the protection
levels that you allow.
Configure detective controls for CMEKs
Google Cloud provides various detective controls for CMEKs. The following
sections introduce how to enable and use these controls relevant for
Cloud KMS.
Enable and aggregate audit logging
We recommend that you aggregate
Cloud KMS Admin Activity audit logs (along with Admin
Activity logs for all services) in a centralized location for all resources in
your organization. This lets a security team or auditor review all activity
related to creating or modifying Cloud KMS resources at once. For
guidance on configuring aggregated log sinks, see aggregate and store your
organization's logs .
Optionally, you can enable data access logs to log operations that use the keys,
including encrypt and decrypt operations. When using CMEKs, this can generate
substantial log volume and impact your costs because every operation from every
service that uses CMEKs will create data access logs. Before enabling data access
logs, we recommend that you define a clear use case for the additional logs and
assess how your logging costs will increase.
Monitor key usage
You can view key usage with the Cloud KMS inventory API
to help you identify Google Cloud resources in your organization that are
dependent on and protected by Cloud KMS keys. This dashboard can be
used to monitor the state, usage, and availability of your key versions and
corresponding resources they protect. The dashboard also identifies data that is
inaccessible due to a disabled or destroyed key so that you can take actions
such as purging the inaccessible data or re-enabling the key.
You can use Cloud Monitoring with Cloud KMS
to set alerts for critical events such as scheduling a key for destruction.
Cloud Monitoring gives you a chance to triage why such an operation was
performed and trigger an optional downstream process to restore the key if
needed.
We recommend that you establish an operational plan to automatically detect
events that you consider important and periodically review the key usage
dashboard.
Enable Security Command Center for Cloud KMS vulnerability findings
Security Command Center generates vulnerability findings that
highlight misconfigurations associated with Cloud KMS and other
resources. We recommend that you enable Security Command Center and integrate these
findings into your existing security operations. These findings include issues
such as publicly accessible Cloud KMS keys, Cloud KMS projects
with the overly permissive owner role, or IAM roles that
violate the separation of duties.
Assess your compliance requirements
Different compliance frameworks have different requirements for encryption and
key management. A compliance framework typically outlines the high-level
principles and objectives of encryption key management, but is not prescriptive
about the particular product or configuration that achieves compliance. It's
your responsibility to understand the requirements of your compliance framework
and how your controls, including key management, can meet those requirements.
For guidance about how Google Cloud services can help meet the
requirements of different compliance frameworks, see the following resources:
Protecting healthcare data on Google Cloud
Cloud Compliance & Regulations Resources
Google Cloud FedRAMP implementation guide
PCI Data Security Standard compliance
Summary of best practices
The following table summarizes the best practices recommended in this document:
Topic
Task
Decide whether to use CMEK
Use CMEK if you require any of the capabilities
enabled by CMEK .
Choose manual or automated key creation
Use Cloud KMS Autokey if the
characteristics of keys created by Autokey meet your needs.
Cloud KMS key projects
Use one centralized key project for each environment. Don't create
Cloud KMS resources in the same project as the Google Cloud
resources the keys protect.
Cloud KMS key rings
Create Cloud KMS key rings
for each location where you want to protect Google Cloud
resources.
Key granularity
Choose a pattern of key granularity that
meets your needs, or use Autokey to automatically provision keys
at the recommended granularity for each service.
Protection level
Choose Cloud EKM if your key material must be stored outside
of Google Cloud. Choose Single-tenant Cloud HSM if your key
material must be hosted on dedicated partitions on
Google Cloud-owned hardware security modules (HSMs). Choose
Multi-tenant Cloud HSM if your key material can be hosted on
Google Cloud-owned hardware security module (HSM) clusters shared
with other Google Cloud customers. Choose software keys if your
needs don't require Cloud HSM or Cloud EKM. Review the
guidance for
selecting a protection level .
Key material
For key material hosted on Google Cloud, use
Google Cloud-generated key material when possible. If you use
imported key material,
implement automation and procedures to
mitigate risks .
Key purpose and algorithm
All CMEK keys must use the symmetric ENCRYPT_DECRYPT key
purpose and the GOOGLE_SYMMETRIC_ENCRYPTION algorithm.
Rotation period
Use automatic key rotation to ensure that your keys are rotated on
schedule. Choose and apply a rotation period that meets your needs,
ideally no less than once per year. Use more frequent key rotation for
sensitive workloads.
Least privilege
Grant the most limited predefined roles that allow your principals
to complete their tasks. Don't use basic roles.
Separation of duties
Maintain separate permissions for key administrators and principals
that use keys.
Project liens
Use project liens to prevent accidental deletion of your key
projects.
Require CMEKs
Use the constraints/gcp.restrictNonCmekServices
constraint.
Require a minimum scheduled for destruction duration
Use the
constraints/cloudkms.minimumDestroyScheduledDuration
constraint.
Enforce allowed protection levels for CMEKs
Use the constraints/cloudkms.allowedProtectionLevels
constraint.
Enable and aggregate audit logging
Aggregate administrative activity audit logs for all resources
in your organization. Consider whether you want to enable logging of
operations using keys.
Monitor key usage
Use the Cloud KMS inventory API or the Google Cloud console to
understand key usage. Optionally use Cloud Monitoring to set alerts for
sensitive operations like scheduling a key for destruction.
Enable Security Command Center for Cloud KMS
Review vulnerability findings and integrate reviewing vulnerability
findings into your security operations.
Assess compliance requirements
Review your Cloud KMS architecture and compare with any
compliance requirements that you must adhere to.
What's next
Learn more about how Cloud KMS Autokey reduces your
effort to use CMEK consistently.
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-07 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-07 UTC."],[],[]]
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
