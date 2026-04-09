---
title: "Separation of duties \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/separation-of-duties
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/separation-of-duties
  title: "Separation of duties \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Separation of duties | Cloud Key Management Service | Google Cloud Documentation
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
Key management models Delegated key management
Centralized key management
Automating and monitoring compliance
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Separation of duties
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Key management models Delegated key management
Centralized key management
Automating and monitoring compliance
Separation of duties is the concept of ensuring that one principal does not
have all necessary permissions required to complete a malicious action. In
Cloud Key Management Service, this could be an action such as using a key to access and
decrypt data which that user has no valid reason to access.
Separation of duties is a business control typically used in larger
organizations, meant to help avoid security or privacy incidents and errors.
It is considered best practice.
In Cloud KMS, separation of duties requires a strict distinction
between the following roles:
Key administrators : Principals who are authorized to manage key
lifecycles including creation, deletion, rotation, and state
changes—for example, users with the Cloud KMS Admin role.
Key user : Principals who are authorized to use keys including
encryption, decryption, signing, or signature verification—for
example, users with the Cloud KMS CryptoKey Encrypter/Decrypter role.
When you use Cloud KMS keys for customer-managed encryption keys, we
recommend that the service account is the only principal authorized to use the
key for encryption and decryption. For more information about how CMEK
integrations handle resource access, see CMEK-integrated services handle
resource access .
To prevent a bypass of separation of duties, don't grant principals broad basic
roles like Owner ( roles/owner ), which contains both administrative and
cryptographic permissions. You can use the Encryption metrics dashboard
( Preview ) to help identify keys that don't adhere to the
recommendations for separation of duties. For more information, see View
encryption metrics .
For more information about how to use IAM roles safely, see Use
IAM securely .
Key management models
Cloud KMS supports two primary models for enforcing separation of
duties: centralized key management and delegated key management. These key
management models can be used separately or in combination. For example, an
organization might choose to use a centralized key management model for
production environments and use a dedicated key management model for lower
environments used for development and testing.
The following table compares centralized and delegated key management models and
helps you decide which is best for your needs.
Area
Centralized (folder-level)
Delegated (project-level)
Key location
Stored in a dedicated key project, usually per folder.
Stored in the same project as the resource that the key protects.
Separation method
Project boundaries: Keys and the resources they protect are in
different projects.
Separate roles: Strict IAM role separation so that no
principal can both manage and use a key.
Business culture
Ideal for highly regulated organizations with dedicated central
security or crypto teams.
Ideal for organizations that prioritize developer agility and
decentralized authority.
Primary drivers
High isolation and centralized oversight.
Simplified quota management and reduced operational toil.
Delegated key management
The delegated or "same-project" key management model is recommended for
organizations that prioritize developer agility and aim to reduce the "loop"
between central security teams and developers.
In the delegated model, your CMEKs and other keys are stored in the same project
as the resources they protect. Enforcing separation of duties in delegated key
management requires keeping IAM roles strictly separated.
You can enable Autokey for projects ( Preview ) on a project or folder to allow automated key creation using the delegated key management model. For more information, see Enable Autokey for delegated key management .
Centralized key management
The centralized or "dedicated-project" key management model is recommended for
organizations with centralized security teams or those that require strict
isolation of key material from application environments.
In the centralized model, your CMEKs and other keys are stored in dedicated key
projects, kept separate from the resources they protect. Usually, this means
that each folder has its own dedicated key project to contain keys that protect
resources throughout the folder. This dedicated key project is managed by a
central security team, who have key administration permissions in the key
project but are restricted from accessing projects that contain the resources
protected by those keys.
You can enable Autokey on a folder to allow automated key creation
using the centralized key management model. For more information, see Set up
Autokey for centralized key
management .
Automating and monitoring compliance
Google Cloud provides the following tools to automate and monitor your
security boundaries:
Cloud KMS Autokey : Autokey supports both centralized and
delegated ( Preview ) models of key management. For both, it
automates separation of duties by automatically granting the key usage role
to the required service agent—not to the person requesting the key.
Autokey is designed to support infrastructure-as-code pipelines
that don't need elevated privileges for key creation.
Security Command Center : Monitor for KMS Role Separation findings
to detect any principal, including a Project Owner or a Google service
account, that possesses both administrative and cryptographic permissions on
a single key.
CMEK encryption metrics: Use the dashboard to verify alignment with separation of duties practices across the organization.
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
