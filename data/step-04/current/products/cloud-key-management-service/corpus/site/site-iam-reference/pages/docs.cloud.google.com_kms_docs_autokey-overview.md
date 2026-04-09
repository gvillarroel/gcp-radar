---
title: "Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/autokey-overview
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/autokey-overview
  title: "Autokey overview \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Autokey overview | Cloud Key Management Service | Google Cloud Documentation
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
How Autokey works Administrator enables Cloud KMS Autokey
Autokey developers use Cloud KMS Autokey
About keys created by Autokey
Enforcing Autokey
Compatible services
Limitations
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
Autokey overview
Stay organized with collections
Save and categorize content based on your preferences.
On this page
How Autokey works Administrator enables Cloud KMS Autokey
Autokey developers use Cloud KMS Autokey
About keys created by Autokey
Enforcing Autokey
Compatible services
Limitations
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
How Autokey works
This section explains how Cloud KMS Autokey works. The following user roles
participate in this process:
Administrator
The administrator is a user who's responsible
for managing security at the folder or organization level.
Autokey developer
The Autokey developer is a user who is
responsible for creating resources using Cloud KMS Autokey.
Cloud KMS administrator
The Cloud KMS administrator is a
user who is responsible for managing Cloud KMS resources. This role
has fewer responsibilities when using Autokey than when using
manually-created keys.
The following service agents also participate in this process:
Cloud KMS service agent
The service agent for Cloud KMS in a
given key project. Autokey depends on this service agent having
elevated privileges to create Cloud KMS keys and key rings and to
set IAM policy on the keys, granting encrypt and decrypt
permissions for each resource service agent.
Resource service agent
The service agent for a given service in a given
resource project. This service agent must have encrypt and decrypt
permissions on any Cloud KMS key before it can use that key for
CMEK protection on a resource. Autokey creates the resource service
agent when needed and grants it the necessary permissions to use the
Cloud KMS key.
Administrator enables Cloud KMS Autokey
Enabling Autokey follows one of the following paths based on your
chosen key management model:
Centralized key management model: Enable Autokey on a folder. A
centralized key project is created to hold the keys that
protect resources created in other projects within the folder.
Delegated key management model ( Preview ): You can enable
Autokey on individual projects or for all projects within a folder
to use same-project Autokey.
Enable centralized key management
Before you can use Autokey for centralized key management in a folder,
an administrator must complete the following one-time setup tasks:
Enable Cloud KMS Autokey on a folder and identify the
Cloud KMS project that will contain Autokey resources for
that folder.
Create the Cloud KMS service agent and then grant
key creation and assignment privileges to the service agent.
With this configuration complete, developers who can create Autokey
compatible resources in any project in that folder can now trigger
Multi-tenant Cloud HSM key creation on-demand. To see full setup instructions
for Cloud KMS Autokey, see Enable Cloud KMS Autokey .
Enable delegated key management
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Before you can use Autokey for delegated key management, an administrator must complete the following one-time setup
tasks:
Enable Cloud KMS Autokey on a project or folder.
Enable the Cloud KMS API on that project or projects in the folder.
When Cloud KMS Autokey is enabled on a project for delegated key management,
the Cloud KMS service agent is created for you when
needed. You don't have to manually create the service agent. Any user with
permissions to create an Autokey compatible resource can request a
new key on demand. To see full setup instructions for Cloud KMS Autokey,
see Enable Cloud KMS Autokey .
Autokey developers use Cloud KMS Autokey
After Autokey is successfully enabled for a project, Autokey
developers can create resources protected using keys created for them on
demand. This applies to projects in a folder where Autokey is enabled
for centralized key management and projects where Autokey is enabled
for delegated, same-project key management. The details of the resource creation
process depend on which resource you are creating, but the process follows this
flow:
The Autokey developer begins to create a resource in a compatible
Google Cloud service. During resource creation, the developer requests
a new key from the Autokey service agent.
The Autokey service agent receives the developer's request and
completes the following steps:
Create a key ring in the project at the selected location, unless
that key ring already exists.
Create a key in the key ring with the appropriate granularity for the
resource type, unless such a key already exists.
Create the per-project, per-service service account, unless that service
account already exists.
Grant the per-project, per-service service account encrypt and decrypt
permissions on the key.
Provide the key details to the developer so they can finish creating the
resource.
With key details successfully returned by the Autokey service
agent, the developer can immediately finish creating the protected resource.
Cloud KMS Autokey creates keys that have the attributes described in the
next section. This key creation flow preserves
separation of duties . The Cloud KMS
administrator continues to have full visibility and control over keys created by
Autokey.
To start using Autokey after enabling it, see
Create protected resources using Cloud KMS Autokey .
About keys created by Autokey
Keys created by Cloud KMS Autokey have the following attributes:
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
about key granularity, see Compatible services on this page.
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
Enforcing Autokey
If you want to enforce usage of Autokey within a folder or project, you
can do so by combining IAM access controls with CMEK organization
policies. This works by removing key creation permissions from principals other
than the Autokey service agent, and then requiring that all resources
are protected by CMEK using the Autokey key project. For detailed
instructions for enforcing the use of Autokey, see Enforce
Autokey usage .
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
Limitations
The gcloud CLI is not available for Autokey resources.
Key handles are not in Cloud Asset Inventory .
What's next
To get started with Cloud KMS Autokey, an administrator
must enable Cloud KMS Autokey .
To use Cloud KMS Autokey after it has been enabled, a developer can
create CMEK-protected resources using Autokey .
Learn about CMEK best practices .
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
