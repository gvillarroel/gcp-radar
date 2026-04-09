---
title: "Cloud KMS with Autokey \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kms/docs/kms-autokey
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/kms-autokey
  title: "Cloud KMS with Autokey \_|\_ Cloud Key Management Service \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Cloud KMS with Autokey | Cloud Key Management Service | Google Cloud Documentation
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
Choose between Autokey and other encryption options
Centralized or delegated key management
Compatible services
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Cloud KMS with Autokey
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Choose between Autokey and other encryption options
Centralized or delegated key management
Compatible services
What's next
Cloud KMS Autokey simplifies creating and using customer-managed encryption
keys (CMEKs) by automating provisioning and assignment. With
Autokey, key rings and keys are generated on-demand. Service accounts
that use the keys to encrypt and decrypt resources are created and granted
Identity and Access Management (IAM) roles when needed. Cloud KMS administrators
retain full control and visibility of keys created by Autokey, without
needing to pre-plan and create each resource.
Using keys generated by Autokey can help you consistently align with
industry standards and recommended practices for data security, including the
Multi-tenant Cloud HSM protection level, separation of duties, key rotation,
location, and key specificity. Autokey creates keys that follow both
general guidelines and guidelines specific to the resource type for
Google Cloud services that integrate with Cloud KMS Autokey. After
they are created, keys requested using Autokey function identically to
other Cloud HSM keys with the same settings.
Autokey can also simplify usage of Terraform for key management,
removing the need to run infrastructure-as-code with elevated key-creation
privileges.
You can use Autokey with a centralized key management model (Generally
Available) or a delegated key management model ( Preview ). To use
the centralized key management model, you must have an organization resource
that contains a folder resource. In the centralized model, Autokey is
enabled for projects within a folder, and keys created by Autokey are
created in a dedicated key project for that folder. With the delegated key
management model, key management is delegated to project administrators, who can
enable Autokey on a folder or project to let Autokey create
keys in the same project as the resources they protect.
For more information about organization and folder resources,
see Resource hierarchy .
Cloud KMS Autokey is available in all Google Cloud locations where
Cloud HSM is available. For more information about Cloud KMS
locations, see Cloud KMS locations . There is no
additional cost to use Cloud KMS Autokey. Keys created using
Autokey are priced the same as any other Cloud HSM keys. For
more information about pricing, see Cloud Key Management Service pricing .
For more information about Autokey, see
Autokey overview .
Choose between Autokey and other encryption options
Cloud KMS with Autokey is like an autopilot for
customer-managed encryption keys: it does the work on your behalf, on demand.
You don't need to plan keys ahead of time or create keys that might never be
needed. Keys and key usage are consistent. You can define where you
want Autokey to be used and control who can use it. You retain full
control of the keys created by Autokey. You can use manually-created
Cloud KMS keys alongside keys created using Autokey. You can
disable Autokey and continue to use the keys it created the same way
you'd use any other Cloud KMS key.
Cloud KMS Autokey is a good choice if you want consistent key usage across
projects, with a low operational overhead, and want to follow Google's
recommendations for keys.
Feature or capability
Google default encryption
Cloud KMS
Cloud KMS Autokey
Cryptographic isolation: keys are exclusive to one customer's
account
No
Yes
Yes
Customer owns and controls keys
No
Yes
Yes
Developer triggers key provisioning and assignment
Yes
No
Yes
Specificity: keys are automatically created at the recommended key
granularity
No
No
Yes
Lets you crypto-shred your data
No
Yes
Yes
Automatically aligns with recommended key management practices
No
No
Yes
Uses HSM-backed keys that are FIPS 140-2 Level 3 compliant
No
Optional
Yes
If you need to use a protection level other than HSM or a custom rotation
period, you can use CMEK without Autokey.
Centralized or delegated key management
Autokey for centralized key management using a dedicated key project
within a folder is Generally Available. In Preview , Autokey supports storing keys in the same project as the resources that the keys protect, and can be configured for all projects in a folder or for individual projects.
Compatible services
The following table lists services that are compatible with
Cloud KMS Autokey:
Service
Protected resources
Key granularity
Artifact Registry
artifactregistry.googleapis.com/Repository
Autokey creates keys during Repository creation, used for all
stored artifacts.
One key per resource
BigQuery
bigquery.googleapis.com/Dataset
Autokey creates default keys for datasets. Tables, models,
queries, and temporary tables within a dataset use the dataset default
key.
Autokey doesn't create keys for BigQuery resources
other than datasets. To protect resources that are not part of a
dataset, you must create your own default keys at the project or
organization level.
One key per resource
Bigtable
bigtableadmin.googleapis.com/Cluster
Autokey creates keys for clusters.
Autokey doesn't create keys for Bigtable resources
other than clusters.
Bigtable is only compatible with Cloud KMS Autokey
when creating resources using Terraform or the Google Cloud SDK.
One key per cluster
AlloyDB for PostgreSQL
alloydb.googleapis.com/Cluster
alloydb.googleapis.com/Backup
AlloyDB for PostgreSQL is only compatible with Cloud KMS Autokey
when creating resources using Terraform or the REST API.
One key per resource
Cloud Run
run.googleapis.com/Service
run.googleapis.com/Job
One key per location within a project
Cloud SQL
sqladmin.googleapis.com/Instance
Autokey doesn't create keys for Cloud SQL
BackupRun resources. When you create a backup of a
Cloud SQL instance, the backup is encrypted with the primary
instance's customer-managed key.
Cloud SQL is only compatible with Cloud KMS Autokey
when creating resources using Terraform or the REST API.
One key per resource
Cloud Storage
storage.googleapis.com/Bucket
Objects within a
storage bucket use the bucket default key. Autokey doesn't create
keys for storage.object resources.
One key per bucket
Compute Engine
compute.googleapis.com/Disk
compute.googleapis.com/Image
compute.googleapis.com/Instance
compute.googleapis.com/MachineImage
Snapshots use the key for the disk that you are creating a snapshot of.
Autokey doesn't create keys for compute.snapshot
resources.
One key per resource
Pub/Sub
pubsub.googleapis.com/Topic
One key per resource
Secret Manager
secretmanager.googleapis.com/Secret
Secret Manager is only compatible with Cloud KMS Autokey
when creating resources using Terraform or the REST API.
One key per location within a project
Secure Source Manager
securesourcemanager.googleapis.com/Instance
One key per resource
Spanner
spanner.googleapis.com/Database
Spanner is only compatible with Cloud KMS Autokey
when creating resources using Terraform or the REST API.
One key per resource
Dataflow
dataflow.googleapis.com/Job
One key per resource
Dataproc
dataproc.googleapis.com/Cluster
dataproc.googleapis.com/SessionTemplate
dataproc.googleapis.com/WorkflowTemplate
dataproc.googleapis.com/Batch
dataproc.googleapis.com/Session
For Cluster, SessionTemplate, and WorkflowTemplate
resources: One key per resource
For Batch and Session resources:
One key per location within a project
What's next
To learn more about how Cloud KMS Autokey works, see Autokey
overview .
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
