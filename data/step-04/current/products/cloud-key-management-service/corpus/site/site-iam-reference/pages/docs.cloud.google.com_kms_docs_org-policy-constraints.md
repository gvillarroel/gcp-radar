---
title: "Organization policy constraints for Cloud KMS \_|\_ Cloud Key Management Service\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/org-policy-constraints
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/org-policy-constraints
  title: "Organization policy constraints for Cloud KMS \_|\_ Cloud Key Management\
    \ Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Organization policy constraints for Cloud KMS | Cloud Key Management Service | Google Cloud Documentation
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
Cloud KMS constraints Enforce resource locations
Allowed protection levels
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Organization policy constraints for Cloud KMS
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Cloud KMS constraints Enforce resource locations
Allowed protection levels
What's next
This page provides supplemental information about organization policy
constraints that let you enforce limitations for Cloud Key Management Service. You can use these
constraints to limit resource locations or allowed protection levels for
Cloud KMS keys across an entire project or organization.
You can also use CMEK organization policies to enforce the use of CMEK in
your organization and use organization policies to
control key destruction .
Cloud KMS constraints
The following constraints can be applied to an organization policy and relate
to Cloud Key Management Service.
Enforce resource locations
API Name : constraints/gcp.resourceLocations
When you apply the resourceLocations constraint, you specify one or more
locations . Once set, creation of new resources (e.g key rings, keys,
key versions) is limited to the specified locations.
Keys in other locations, created or imported before the constraint was
applied, will remain usable. However, key rotation (automated creation of
a new primary key version) will fail if the result would be a new
key version in a disallowed location.
Note: Enabling or disabling resourceLocations may take up to 10 minutes
to go into effect.
Allowed protection levels
API Name : constraints/cloudkms.allowedProtectionLevels
When you apply the allowedProtectionLevels constraint, you specify one or
more protection levels . Once set, new keys, key versions, and
import jobs must use one of the specified protection levels.
Keys with other protection levels, created before the constraint was
applied, will remain usable. However, key rotation (automated creation of
a new primary key version) will fail if the result would be a new
key version with a disallowed protection level.
Note: Enabling or disabling allowedProtectionLevels may take up to 10
minutes to go into effect.
What's next
Learn about CMEK organization policies and using organization policies
to control key destruction .
Learn about the resource hierarchy that applies to organization policies.
See Creating and managing organization policies for instructions on
working with constraints and organization policies in the Google Cloud console.
See Using constraints for instructions on working with constraints and
organization policies in the gcloud CLI.
See the Resource Manager API reference documentation for relevant API
methods, such as projects.setOrgPolicy .
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
