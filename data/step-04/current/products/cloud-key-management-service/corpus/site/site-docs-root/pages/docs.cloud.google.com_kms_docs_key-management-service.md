---
title: "Cloud Key Management Service overview \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/key-management-service
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/key-management-service
  title: "Cloud Key Management Service overview \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud Key Management Service overview | Google Cloud Documentation
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
Choose the right encryption for your needs
Protecting data in Google Cloud Google-owned and Google-managed encryption keys (Google Cloud default encryption)
Customer-managed encryption keys (CMEKs)
Cloud KMS keys
Multi-tenant Cloud HSM for Google Workspace
Customer-supplied encryption keys (CSEKs)
Confidential Computing
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Cloud Key Management Service overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Choose the right encryption for your needs
Protecting data in Google Cloud Google-owned and Google-managed encryption keys (Google Cloud default encryption)
Customer-managed encryption keys (CMEKs)
Cloud KMS keys
Multi-tenant Cloud HSM for Google Workspace
Customer-supplied encryption keys (CSEKs)
Confidential Computing
Cloud Key Management Service (Cloud KMS) lets you create and manage cryptographic keys
for use in compatible Google Cloud services and in your own
applications. Using Cloud KMS, you can do the following:
Generate software or hardware keys, import existing keys into
Cloud KMS, or link external keys in your
compatible external key
management (EKM) system .
Generate Multi-tenant Cloud HSM keys and use them with
Cloud HSM for Google Workspace
to enable client-side encryption (CSE) in Google Workspace.
Create and maintain
Single-tenant Cloud HSM instances, and create
or import and then use Single-tenant Cloud HSM keys.
Use customer-managed encryption keys (CMEKs) in Google Cloud
products with CMEK integration . CMEK
integrations use your Cloud KMS keys to encrypt or "wrap" your data
encryption keys (DEKs). Wrapping DEKs with key encryption keys (KEKs) is
called envelope encryption .
Use Cloud KMS Autokey to
automate provisioning and assignment. With Autokey, you don't need
to provision key rings, keys, and service accounts ahead of time. Instead,
they are generated on demand as part of resource creation.
Use Cloud KMS keys for encryption and decryption operations. For
example, you can use the Cloud KMS API or client libraries to
use your Cloud KMS keys for
client-side encryption .
Use Cloud KMS keys to create or verify
digital signatures or
message authentication code (MAC)
signatures .
Use Cloud KMS keys to establish shared secrets using key encapsulation mechanisms .
Choose the right encryption for your needs
You can use the following table to identify which type of encryption meets your
needs for each use case. The best solution for your needs might include
a mix of encryption approaches.
For example, you might use software keys for your least sensitive data and
hardware or external keys for your most sensitive data.
For additional information about the encryption options described in this
section, see Protecting data in Google Cloud on
this page.
For more information about the
service level agreement (SLA) that applies when using Cloud KMS,
Cloud HSM, and Cloud EKM keys, see
Service Level Agreement .
Agent Assist AlloyDB for PostgreSQL Anti Money Laundering AI Apigee Apigee API hub Application Integration Artifact Registry Backup and DR Service Backup for GKE BigQuery Bigtable Cloud Composer Cloud Data Fusion Cloud Healthcare API Cloud Logging Cloud Run Cloud Run functions Cloud SQL Cloud Storage Cloud Tasks Cloud TPU Cloud Workstations Colab Enterprise Compute Engine Conversational Analytics API Customer Experience Insights Database Migration Service Dataflow Dataform Dataplex Universal Catalog Dataproc Dataproc Metastore Datastream Dialogflow CX Document AI Eventarc Advanced Eventarc Standard Filestore Firestore Gemini Code Assist Gemini Enterprise - NotebookLM Enterprise Gemini Enterprise Enterprise Google Cloud Managed Lustre Google Cloud Managed Service for Apache Kafka Google Cloud NetApp Volumes Google Distributed Cloud Google Kubernetes Engine Integration Connectors Looker (Google Cloud core) Memorystore for Redis Memorystore for Redis Cluster Memorystore for Valkey Migrate to Virtual Machines Parameter Manager Pub/Sub Secret Manager Secure Source Manager Security Command Center Spanner Speech-to-Text Vertex AI Vertex AI Search Vertex AI Workbench Vertex AI Workbench instances Workflows Workload Manager
Select one or more options Services Agent Assist
AlloyDB for PostgreSQL
Anti Money Laundering AI
Apigee
Apigee API hub
Application Integration
Artifact Registry
Backup and DR Service
Backup for GKE
BigQuery
Bigtable
Cloud Composer
Cloud Data Fusion
Cloud Healthcare API
Cloud Logging
Cloud Run
Cloud Run functions
Cloud SQL
Cloud Storage
Cloud Tasks
Cloud TPU
Cloud Workstations
Colab Enterprise
Compute Engine
Conversational Analytics API
Customer Experience Insights
Database Migration Service
Dataflow
Dataform
Dataplex Universal Catalog
Dataproc
Dataproc Metastore
Datastream
Dialogflow CX
Document AI
Eventarc Advanced
Eventarc Standard
Filestore
Firestore
Gemini Code Assist
Gemini Enterprise - NotebookLM Enterprise
Gemini Enterprise Enterprise
Google Cloud Managed Lustre
Google Cloud Managed Service for Apache Kafka
Google Cloud NetApp Volumes
Google Distributed Cloud
Google Kubernetes Engine
Integration Connectors
Looker (Google Cloud core)
Memorystore for Redis
Memorystore for Redis Cluster
Memorystore for Valkey
Migrate to Virtual Machines
Parameter Manager
Pub/Sub
Secret Manager
Secure Source Manager
Security Command Center
Spanner
Speech-to-Text
Vertex AI
Vertex AI Search
Vertex AI Workbench
Vertex AI Workbench instances
Workflows
Workload Manager
Any
Level 1
Level 2
Level 3
Select an option FIPS 140-2 level Any
Level 1
Level 2
Level 3
Clear all
Encryption type
Cost
Compatible services
Features
Google-owned and Google-managed encryption keys (Google Cloud default encryption)
Included
All Google Cloud services that store customer data
No configuration required.
Automatically encrypts customer data saved in any
Google Cloud service.
Most services automatically rotate keys.
Supports encryption using AES-256.
FIPS 140-2 Level 1 validated.
Customer-managed
encryption keys - software (Cloud KMS keys)
$0.06 per key version
40+
services
You control automatic key rotation schedule;
IAM roles and permissions; enable, disable, or
destroy key versions.
Supports symmetric and asymmetric keys for
encryption and
decryption .
Automatically rotates
symmetric keys .
Supports several common
algorithms .
FIPS 140-2 Level 1 validated.
Keys are unique to a customer.
Customer-managed
encryption keys - hardware (Cloud HSM keys)
$1.00 to $2.50 per key version per month
40+
services
Optionally managed through Cloud KMS Autokey.
You control automatic key rotation schedule;
IAM roles and permissions; enable, disable, or
destroy key versions.
Supports symmetric and asymmetric keys for
encryption and
decryption .
Automatically rotates
symmetric keys .
Supports several common
algorithms .
FIPS 140-2 Level 3 validated.
Keys are unique to a customer.
You can create and manage your own Single-tenant Cloud HSM
instance to have more cryptographic isolation and greater
administrative control of your HSM keys.
Single-tenant Cloud HSM instances incur additional costs.
Customer-managed
encryption keys - external (Cloud EKM keys)
$3.00 per key version per month
30+
services
You control IAM roles and permissions; enable,
disable, or destroy key versions.
Keys are never sent to Google.
Key material resides in a
compatible external key
management (EKM) provider .
Compatible Google Cloud services connect to
your EKM provider over the
internet or a
Virtual Private
Cloud (VPC) .
Supports symmetric keys for
encryption and
decryption .
Manually rotate your keys in coordination with
Cloud EKM and your EKM provider.
FIPS 140-2 Level 2 or FIPS 140-2 Level 3 validated, depending
on the EKM.
Keys are unique to a customer.
Client-side encryption
using Cloud KMS keys
Cost of active key versions depends on the protection level of the
key.
Use client libraries
in your applications
You control automatic key rotation schedule;
IAM roles and permissions; enable, disable, or
destroy key versions.
Supports symmetric and asymmetric keys for
encryption,
decryption, signing, and signature validation .
Functionality varies by key protection level.
Cloud HSM for Google Workspace
Flat rate monthly fee for each instance, plus cost of active key
versions and cryptographic operations.
Use Multi-tenant Cloud HSM keys for client-side encryption in Google Workspace
You control automatic key rotation schedule;
IAM roles and permissions; enable, disable, or
destroy key versions.
Use symmetric keys for encryption and decryption.
Customer-supplied encryption keys
Might increase costs associated with Compute Engine or
Cloud Storage
Compute Engine
Cloud Storage
You provide key materials when needed.
Key material resides in-memory - Google does not permanently
store your keys on our servers.
Confidential Computing
Additional cost for each confidential VM; might increase log usage
and associated costs
Compute Engine
GKE
Dataproc
Provides encryption-in-use for VMs handling sensitive data or
workloads.
Keys can't be accessed by Google.
Protecting data in Google Cloud
Google-owned and Google-managed encryption keys (Google Cloud default encryption)
By default, data at rest in Google Cloud is protected by keys in
Keystore, Google Cloud's internal key management service. Keys in
Keystore are managed automatically by Google Cloud, with no
configuration required on your part. Most services automatically rotate keys for
you. Keystore supports a primary key version and a limited number of older key
versions. The primary key version is used to encrypt new data encryption keys.
Older key versions can still be used to decrypt existing data encryption keys.
You can't view or manage these keys or review key usage logs. Data from multiple
customers might use the same key encryption key.
This default encryption uses cryptographic modules that are validated to be
FIPS 140-2 Level 1 compliant.
Note: Google Cloud default encryption is not a feature of
Cloud Key Management Service.
For more information about Google Cloud default
encryption, see Default encryption at rest .
Customer-managed encryption keys (CMEKs)
Cloud KMS keys that are used to protect your resources in
CMEK-integrated services are customer-managed encryption keys (CMEKs).
You can own and control CMEKs, while delegating key creation and assignment
tasks to Cloud KMS Autokey. To learn more about automating provisioning for
CMEKs, see Cloud Key Management Service with Autokey .
You can use your Cloud KMS keys in
compatible services to help you meet the following goals:
Own your encryption keys.
Control and manage your encryption keys, including choice of location,
protection level, creation, access control, rotation, use, and destruction.
Selectively delete data protected by your keys in the case of off-boarding or
to remediate security events (crypto-shredding).
Create dedicated, single-tenant keys that establish a cryptographic boundary
around your data.
Log administrative and data access to encryption keys.
Meet current or future regulation that requires any of these goals.
When you use Cloud KMS keys with
CMEK-integrated services , you can use
organization policies to ensure that CMEKs are used as specified in the
policies. For example, you can set an organization policy that ensures that your
compatible Google Cloud resources use your Cloud KMS
keys for encryption. Organization policies can also specify which project the
key resources must reside in.
The features and level of protection provided depend on the protection level of
the key:
Software keys - You can generate software keys in Cloud KMS and
use them in all Google Cloud locations. You can create
symmetric keys with automatic rotation or asymmetric keys
with manual rotation. Customer-managed software keys use FIPS 140-2 Level
1 validated software cryptography modules. You also have control over
the rotation period, Identity and Access Management (IAM) roles and permissions, and
organization policies that govern your keys. You can use your software keys
with many compatible Google Cloud
resources .
Imported software keys - You can import software keys that you created
elsewhere for use in Cloud KMS. You can import new key versions to
manually rotate imported keys. You can use IAM roles and
permissions and organization policies to govern usage of your imported
keys.
Hardware keys with Multi-tenant Cloud HSM - You can generate hardware keys in
a cluster of FIPS 140-2 Level 3 Hardware Security Modules (HSMs).
You have control over the rotation period, IAM roles and
permissions, and organization policies that govern your keys. When you
create HSM keys using Cloud HSM, Google Cloud
manages the HSM clusters so you don't have to. You can use your HSM keys
with many compatible Google Cloud
resources —the same services that support
software keys. For the highest level of security compliance, use hardware
keys.
Hardware keys with Single-tenant Cloud HSM - You can generate hardware
keys in a cluster of dedicated partitions in FIPS 140-2 Level 3
Hardware Security Modules (HSMs) that you control. You have control over the
rotation period, IAM roles and permissions, and organization
policies that govern your keys. When you create a Single-tenant Cloud HSM
instance, Google Cloud hosts the HSM clusters so you don't
have to, but you control access to the instance and maintain it with a
quorum of designated administrators. Instance operations require two-factor
authentication using security keys that you own outside of
Google Cloud. You can use your single-tenant HSM keys with many
compatible Google Cloud
resources —the same services that support
software keys. For the highest level of security compliance with
cryptographic isolation, use hardware keys.
External keys and Cloud EKM - You can use keys that reside in
an external key manager (EKM). Cloud EKM lets you use keys held in
a supported key manager to secure your
Google Cloud resources.
You can connect to your EKM over the internet or over a
Virtual Private Cloud (VPC) .
Some Google Cloud services that support Cloud KMS
keys don't support Cloud EKM keys.
To learn more about which Cloud KMS locations support which protection
levels, see Cloud KMS locations .
Cloud KMS keys
You can use your Cloud KMS keys in custom applications using the
Cloud KMS client libraries or
Cloud KMS API . The client libraries
and API let you encrypt and decrypt data, sign data, and validate signatures.
Multi-tenant Cloud HSM for Google Workspace
You can use your Multi-tenant Cloud HSM keys in Cloud HSM for Google Workspace to manage
the keys used for client-side encryption (CSE) in Google Workspace. You can
Onboard to Cloud HSM for Google Workspace .
Customer-supplied encryption keys (CSEKs)
Cloud Storage and Compute Engine can use
customer-supplied encryption keys (CSEKs) .
With customer-supplied encryption keys, you store the key material and provide
it to Cloud Storage or Compute Engine when needed.
Google Cloud does not store your CSEKs in any way.
Note: CSEK support is not a feature of Cloud Key Management Service.
For more information about CSEK, see
Cloud Storage Customer-supplied encryption keys or
Compute Engine Customer-supplied encryption keys .
Confidential Computing
You can use the Confidential Computing platform to encrypt your data-in-use.
Confidential Computing ensures that your data stays private and encrypted even
while it's being processed.
Note: Confidential Computing is not a feature of Cloud KMS. For more
information about Confidential Computing, see
Confidential Computing .
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
