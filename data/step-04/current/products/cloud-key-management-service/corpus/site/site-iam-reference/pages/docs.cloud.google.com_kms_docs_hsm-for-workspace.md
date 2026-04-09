---
title: "Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/hsm-for-workspace
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/hsm-for-workspace
  title: "Cloud HSM for Google Workspace \_|\_ Cloud Key Management Service \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud HSM for Google Workspace | Cloud Key Management Service | Google Cloud Documentation
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
How Cloud HSM for Google Workspace works
Features and benefits
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Cloud HSM for Google Workspace
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How Cloud HSM for Google Workspace works
Features and benefits
What's next
Cloud HSM for Google Workspace is an encryption key service that provides client-side
encryption (CSE) for
Google Workspace.
Cloud HSM is a highly available, fully managed key management service
operated at cloud scale with hardware-backed keys stored in FIPS 140-2 Level 3
compliant hardware security modules (HSMs). Cloud HSM for Google Workspace is available in
the United States.
Using Google Workspace CSE adds another layer of encryption to your
organization's data, including files and emails, in addition to the default encryption
that Google Workspace provides. CSE is especially beneficial for organizations
that store sensitive or regulated data, like intellectual property, healthcare
records, or financial data. Cloud HSM for Google Workspace lets you have greater control
over your encryption keys, and can help you meet regulatory and compliance
requirements.
CHGWS is compatible with Multi-tenant Cloud HSM keys
only.
How Cloud HSM for Google Workspace works
Cloud HSM for Google Workspace uses envelope encryption to protect
your Google Workspace data such as files and emails. Protected data can only
be encrypted and decrypted by authorized users according to your identity
provider (IdP). All wrap and unwrap operations using Cloud HSM keys are
performed inside the HSM. The key material never leaves the HSM protection
boundary.
Features and benefits
Secure and standards-aligned : Cloud HSM is built for customers who
want to run cloud workloads that meet stringent security and regulatory
standards. Cloud HSM uses FIPS 140-2 Level 3 validated Marvell
LiquidSecurity HSMs. The Cloud HSM service has obtained compliance with
numerous regulations and certifications including the following:
FedRAMP
DISA IL5
ITAR
SOC 1
SOC 2
SOC 3
HIPAA
PCI DSS
These compliance standards and certifications help customers in highly regulated
market segments meet their regulatory and compliance needs for key management
and data protection.
Flat pricing : Cloud HSM for Google Workspace offers flat pricing. Your costs don't
change based on the number of users. For more information about pricing, see
Cloud Key Management Service pricing .
Audit logs using Cloud Logging : Like all Google Cloud services,
Cloud HSM service writes audit logs that record administrative
activities and accesses within your Google Cloud resources. Audit logs
help you determine who did what and when. Enabling audit logs helps your
security, auditing, and compliance entities monitor Google Cloud data
and systems for possible vulnerabilities or external data misuse. For more
information about audit logging, see Cloud Key Management Service audit
logging .
What's next
Onboard to Cloud HSM for Google Workspace .
Learn how Cloud HSM can help you meet security
and regulatory compliance requirements.
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
