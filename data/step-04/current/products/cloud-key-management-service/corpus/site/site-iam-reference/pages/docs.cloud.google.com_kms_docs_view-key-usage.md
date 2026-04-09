---
title: "View key usage \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/view-key-usage
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/view-key-usage
  title: "View key usage \_|\_ Cloud Key Management Service \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

View key usage | Cloud Key Management Service | Google Cloud Documentation
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
Before you begin Required roles
View key usage information Key usage details
List key versions that protect a resource
Limitations Tracked resource types
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
View key usage
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Required roles
View key usage information Key usage details
List key versions that protect a resource
Limitations Tracked resource types
This page shows you how to view the Google Cloud resources within your
organization that are protected by your Cloud KMS keys. Key usage
tracking is available within organization resources for organizations that use a
centralized key management model. If you use a delegated key management model,
you can see key usage tracking data scoped to the selected project
( Preview ).
You can view information about the resources that your keys protect at two
levels:
Key usage summary : Includes the number of
protected resources, projects, and unique Google Cloud products that
use each key. This level of detail is available to anyone with the Cloud
KMS Viewer role on the key. The scope of the key usage summary data that
you can see depends on your key management model.
Centralized key management : If the Cloud KMS service
account has the Cloud KMS Organization Service Agent
role on the organization, then you can see key usage summary data for
resources protected by the key even for resources in any project within
the organization.
Delegated key management ( Preview ): If the
Cloud KMS service account doesn't have the
Cloud KMS Organization Service Agent role on the organization, then you can
see key usage summary data for resources in the same project only. If
you are viewing only same-project key usage data, the Usage tracking
dashboard displays a notice that tells you that the scope of the
displayed data is limited to the selected project.
Key usage detail : Lists the resources that are protected by
and depend on this key. The scope of the key usage details that you can see
depends on your key management model.
Centralized key management: If you have the
Cloud KMS Protected Resources Viewer role on the organization and the
Cloud KMS service account has the
Cloud KMS Organization Service Agent role on the
organization, you can see key usage details for resources protected by
the key even for resources that are located in another project.
Delegated key management ( Preview ): If you have the
Cloud KMS Protected Resources Viewer role on the project, but not on the
organization, you can see key usage details for resources in the same
project only. If your permissions limit you to viewing same-project
resources, the Usage tracking dashboard displays a notice indicating
the limited scope of the data.
Note: The key usage information described on this page is subject to
limitations. Before making any changes based on key usage information, review
the Limitations section on this page.
Before you begin
Enable the Cloud KMS Inventory API on the project for which you
want to view key usage data.
Enable the API
Required roles
If you use Cloud KMS with a centralized key management model, you need
to grant the required permissions to the Cloud KMS service account.
For both centralized key management and delegated key management
( Preview ), user accounts that need to view key usage data must be
granted the required permissions.
Cloud KMS service account role
If you use a delegated key management model and don't need to see key usage data
aggregated across your organization, skip to the User account
roles section of this page.
To ensure that your Cloud KMS service account has the necessary
permissions to enable key usage tracking at the organization level, ask your
administrator to grant your Cloud KMS service account the
Cloud KMS Organization Service Agent
( roles/cloudkms.orgServiceAgent ) IAM role on
your organization.
Important: You must grant this role to the Cloud KMS service account,
not to your user account. Failure to grant the roles to the correct principal
might result in permission errors.
User account roles
The Usage tracking dashboard displays different information depending on
whether your user account has the required roles on the project or on the parent
organization. If your organization uses a centralized key management model,
grant the following roles on the organization. If your organization uses a
delegated key management model, you can grant the required roles on the project
to view key usage details scoped to the selected project ( Preview ).
To get the permissions that
you need to view key usage information,
ask your administrator to grant you the
following IAM roles:
To view key usage summaries:
Cloud KMS Viewer ( roles/cloudkms.viewer )
on the key
To view key usage details:
Cloud KMS Protected Resources Viewer ( roles/cloudkms.protectedResourcesViewer )
on the project or organization
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
View key usage information
Console gcloud CLI API
More
In the Google Cloud console, go to the Key inventory page.
Go to Key inventory
Optional: To filter the list of keys, enter your search
terms in the filter_list Filter
box and then press enter. For example, you can filter by location, key
ring, status, or other properties of the keys.
Click the name of the key for which you want to view usage information.
Click the Usage tracking tab.
Optional: To filter the list of protected resources, enter your search
terms in the filter_list Filter
box and then press Enter.
Key usage summary and details are shown for the selected key. If you and the
Cloud KMS service account have the required roles at the
organization level, you can see key usage details for all resources in the
organization that are protected by keys in the selected project. If you
have the required roles only at the project level, or if the
Cloud KMS service account doesn't have the required role on the
organization, then you can see key usage details for all resources in the
selected project that are protected by keys in the same project
( Preview ). If you're viewing same-project details, a notice
displays on the Usage tracking tab that tells you the scope of the
displayed data.
To use Cloud KMS on the command line, first
Install or upgrade to the latest version of Google Cloud CLI .
To view the key usage summary, use the
get-protected-resources-summary method:
gcloud kms inventory get-protected-resources-summary \
--keyname projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME \
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key for which you want to view the
usage summary.
To view key usage details, use the
search-protected-resources method:
gcloud kms inventory search-protected-resources \
--keyname projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME \
--scope=organizations/ ORGANIZATION_ID
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key for which you want to view usage
details.
ORGANIZATION_ID : the numerical ID of your organization.
By default, this method returns key usage details for all resources in your
organization that are protected by the indicated key. If you have the
Cloud KMS Protected Resources Viewer role at the project level but not at the
organization level, or if the Cloud KMS service account doesn't
have the required role on the organization, then the output indicates that
the data returned is scoped to the selected project ( Preview ).
These examples use curl as an HTTP client
to demonstrate using the API. For more information about access control, see
Accessing the Cloud KMS API .
To view the key usage summary, use the
cryptoKeys.getProtectedResourcesSummary
method:
curl "https://kmsinventory.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME /protectedResourcesSummary"
--request "GET" \
--header "x-goog-user-project: CALLING_PROJECT_ID "
--header "Content-Type: application/json" \
--header "Authorization: Bearer TOKEN "
Replace the following:
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key for which you want to view the
usage summary.
CALLING_PROJECT_ID : the ID of the project from which
you are calling the Cloud KMS Inventory API.
To view key usage details, use the
protectedResources.search method:
curl "https://kmsinventory.googleapis.com/v1/organizations/ ORGANIZATION_ID /protectedResources:search?crypto_key=projects/ PROJECT_ID /locations/ LOCATION /keyRings/ KEY_RING /cryptoKeys/ KEY_NAME "
--request "GET" \
--header "x-goog-user-project: CALLING_PROJECT_ID "
--header "Content-Type: application/json" \
--header "Authorization: Bearer TOKEN "
Replace the following:
ORGANIZATION_ID : the numerical ID of your organization.
PROJECT_ID : the ID of the project that contains the key ring.
LOCATION : the Cloud KMS location of the key ring.
KEY_RING : the name of the key ring that contains the key.
KEY_NAME : the name of the key for which you want to view usage
details.
CALLING_PROJECT_ID : the ID of the project from which
you are calling the Cloud KMS Inventory API.
By default, this method returns key usage details for all resources in your
organization that are protected by the indicated key. If you have the
Cloud KMS Protected Resources Viewer role at the project level but not at the
organization level, or if the Cloud KMS service account doesn't
have the required role on the organization, then the output indicates that
the data returned is scoped to the selected project ( Preview ).
Note: This functionality isn't available in client libraries.
Note: Key usage is shown only for the resource types listed in the
Limitations section on this page.
Key usage details
Usage details about the protected resources that are encrypted with the
selected key include the following:
Name : The name of the Google Cloud resource protected by the
selected key.
Project : The name of the project that contains the protected
resource.
Crypto key version : The key version used to encrypt this resource.
Some protected resource types don't report the crypto key version.
Cloud product : The Google Cloud product associated with this
resource.
Resource type : The type of resource protected, for example Bucket
(Cloud Storage) or Disk (Compute Engine).
Location : The Google Cloud region associated with the resource.
Creation date : The time at which the resource was created.
Labels : A set of key-value pairs associated with the resource.
List key versions that protect a resource
If a resource is protected by several key versions, you might not be able to
see the full list of key versions in the Usage tracking tab.
To list the key versions that protect a resource, use the gcloud CLI
to run the following command:
gcloud beta kms inventory search-protected-resources \
--keyname= KEY_NAME \
--scope=organizations/ ORGANIZATION_ID \
--filter="name: RESOURCE_NAME " \
--flatten="cryptoKeyVersions" \
--format="value(cryptoKeyVersions)"
Replace the following:
KEY_NAME : the name of the key for which you want to list key
versions.
ORGANIZATION_ID : the numerical ID of your organization.
RESOURCE_NAME : the name of the resource for which you
want to list key versions.
Limitations
When using key usage tracking, note the following:
Key usage tracking is only available for CMEK key usage. If you're using a
key version in your applications inside or outside of Google Cloud,
that usage isn't included in the Usage tracking tab.
By default, key usage tracking information is provided at the organization
level, for all trackable resources in the organization that are protected by
the selected key. However, if you have the Cloud KMS Protected Resources Viewer
on the project but not on the organization, key usage tracking is provided at
the project level for resources in the selected project that are protected
by the selected key ( Preview ). When key usage tracking data is
given at the project level, the output indicates that the data is scoped to
the selected project.
Key usage tracking information can only be shown at the organization level
if the Cloud KMS service account has the required
Cloud KMS Organization Service Agent role on the organization. If the service
account doesn't have the required role, key usage data is scoped to the
selected project instead ( Preview ).
Some CMEK resources aren't tracked. For resource types that aren't listed in
Tracked resource types , key usage information
might not be included in the key usage details. For example, key usage by
Datastream to encrypt ConnectionProfile
( datastream.googleapis.com/ConnectionProfile ) resources isn't shown on the
Usage tracking tab.
Data might be delayed. For example, if you create a new protected resource,
the protected resource and associated key version aren't immediately added
to the Usage tracking tab.
Cloud Storage key usage data is subject to the following additional
limitations:
Key usage data is aggregated from objects to buckets. Object names
aren't shown. A bucket will be shown as using a key if the bucket has at
least one object using that key.
Key usage tracking might not be complete for buckets that contain
objects protected with over 4000 unique key versions.
Key usage tracking details are for informational purposes only. Conduct your
own due diligence using other sources before making changes that could
result in outages or loss of data. Don't disable or destroy key versions
based only on key usage tracking information.
Tracked resource types
The following resource types are supported:
element. -->
Service
Resource
AlloyDB for PostgreSQL
alloydb.googleapis.com/Backup
AlloyDB for PostgreSQL
alloydb.googleapis.com/Cluster
Apigee
apigee.googleapis.com/Organization
Apigee
apigee.googleapis.com/Instance
Apigee API hub
apihub.googleapis.com/ApiHubInstance
Artifact Registry
artifactregistry.googleapis.com/Repository
Backup and DR Service
backupdr.googleapis.com/BackupVault
Backup and DR Service
backupdr.googleapis.com/Backup
BigQuery
bigquery.googleapis.com/Dataset
BigQuery
bigquery.googleapis.com/Model
BigQuery
bigquery.googleapis.com/Table
BigQuery
bigquerydatatransfer.googleapis.com/TransferConfig
Bigtable
bigtableadmin.googleapis.com/Backup
Bigtable
bigtableadmin.googleapis.com/Cluster
Bigtable
bigtableadmin.googleapis.com/Table
Cloud Composer
composer.googleapis.com/Environment
Cloud Data Fusion
datafusion.googleapis.com/Instance
Cloud Healthcare API
healthcare.googleapis.com/Dataset
Cloud Logging
logging.googleapis.com/LogBucket
Cloud Run
run.googleapis.com/Revision
Cloud Run functions
cloudfunctions.googleapis.com/CloudFunction
Cloud Run functions
cloudfunctions.googleapis.com/Function
Cloud SQL
sqladmin.googleapis.com/BackupRun
Cloud SQL
sqladmin.googleapis.com/Instance
Cloud Storage
storage.googleapis.com/Bucket
Cloud Workstations
workstations.googleapis.com/Workstation
Cloud Workstations
workstations.googleapis.com/WorkstationConfig
Compute Engine
compute.googleapis.com/Disk
Compute Engine
compute.googleapis.com/Image
Compute Engine
compute.googleapis.com/MachineImage
Compute Engine
compute.googleapis.com/Snapshot
Database Migration Service
datamigration.googleapis.com/MigrationJob
Database Migration Service
datamigration.googleapis.com/ConnectionProfile
Dataflow
dataflow.googleapis.com/Job
Dataproc
dataproc.googleapis.com/Cluster
Dataproc
dataproc.googleapis.com/Batch
Dataproc Metastore
metastore.googleapis.com/Service
Datastream
datastream.googleapis.com/Stream
Document AI
documentai.googleapis.com/HumanReviewConfig
Document AI
documentai.googleapis.com/Processor
Document AI
documentai.googleapis.com/ProcessorVersion
Filestore
file.googleapis.com/Instance
Filestore
file.googleapis.com/Backup
Firestore
firestore.googleapis.com/Database
Firestore
datastore.googleapis.com/Database
Gemini Enterprise Enterprise
discoveryengine.googleapis.com/DataStore
Google Cloud Managed Lustre
lustre.googleapis.com/Instance
Google Kubernetes Engine
container.googleapis.com/Cluster
Looker (Google Cloud core)
looker.googleapis.com/Instance
Memorystore for Redis
redis.googleapis.com/Instance
Migrate to Virtual Machines
vmmigration.googleapis.com/Source
Pub/Sub
pubsub.googleapis.com/Topic
Secret Manager
secretmanager.googleapis.com/Secret
Secret Manager
secretmanager.googleapis.com/SecretVersion
Secure Source Manager
securesourcemanager.googleapis.com/Instance
Spanner
spanner.googleapis.com/Database
Vertex AI
aiplatform.googleapis.com/Dataset
Vertex AI
aiplatform.googleapis.com/Featurestore
Vertex AI
aiplatform.googleapis.com/Tensorboard
Vertex AI
aiplatform.googleapis.com/BatchPredictionJob
Vertex AI
aiplatform.googleapis.com/CustomJob
Vertex AI
aiplatform.googleapis.com/Endpoint
Vertex AI
aiplatform.googleapis.com/Model
Vertex AI
aiplatform.googleapis.com/TrainingPipeline
Vertex AI
aiplatform.googleapis.com/PipelineJob
Vertex AI
aiplatform.googleapis.com/MetadataStore
Vertex AI Search
discoveryengine.googleapis.com/DataStore
Vertex AI Workbench instances
notebooks.googleapis.com/Instance
Workflows
workflows.googleapis.com/Workflow
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-06 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-06 UTC."],[],[]]
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
