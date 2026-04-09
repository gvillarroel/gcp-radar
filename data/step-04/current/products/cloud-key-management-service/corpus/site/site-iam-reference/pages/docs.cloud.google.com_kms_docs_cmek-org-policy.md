---
title: "CMEK organization policies \_|\_ Cloud Key Management Service \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/kms/docs/cmek-org-policy
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kms/docs/iam
source_metadata:
  url: https://docs.cloud.google.com/kms/docs/cmek-org-policy
  title: "CMEK organization policies \_|\_ Cloud Key Management Service \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

CMEK organization policies | Cloud Key Management Service | Google Cloud Documentation
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
Required roles
Require CMEK protection
Limit the use of Cloud KMS keys for CMEK
Supported services CMEK organization policies and Storage Transfer Service
Enforcement exceptions by resource type
Configuration examples Require CMEK and limit keys for a project
Require CMEK and limit keys to within a folder
Require CMEK for an organization
Limitations
What's next
Home
Documentation
Security
Cloud KMS
Guides
Was this helpful?
Send feedback
CMEK organization policies
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Required roles
Require CMEK protection
Limit the use of Cloud KMS keys for CMEK
Supported services CMEK organization policies and Storage Transfer Service
Enforcement exceptions by resource type
Configuration examples Require CMEK and limit keys for a project
Require CMEK and limit keys to within a folder
Require CMEK for an organization
Limitations
What's next
Google Cloud offers two organization policy constraints to help ensure CMEK
usage across an organization:
constraints/gcp.restrictNonCmekServices is used to require CMEK
protection.
constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which
Cloud KMS keys are used for CMEK protection.
CMEK organization policies only apply to newly created resources within
supported Google Cloud services .
Required roles
To ensure that each user has the necessary
permissions to check organization policies when creating resources,
ask your administrator to grant the
Organization Policy Viewer ( roles/orgpolicy.policyViewer )
IAM role to each user on your organization.
For more information about granting roles, see Manage access to projects, folders, and organizations .
This predefined role contains
the permissions required to check organization policies when creating resources. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to check organization policies when creating resources:
To view full organization policy details:
orgpolicy.policy.get
To check organization policy when creating resources:
orgpolicy.policies.check
Your administrator might also be able to give each user
these permissions
with custom roles or
other predefined roles .
When organization policies are active, the orgpolicy.policies.check permission
is required for Google Cloud console users who create resources that are
protected by CMEK keys. Users without this permission can create CMEK-protected
resources using the Google Cloud console, but they can select a CMEK key that
isn't allowed by the restrictCmekCryptoKeyProjects constraint. When a key that
does not meet this constraint is selected, resource creation eventually fails.
Note: The orgpolicy.policies.check permission is not visible in the
Google Cloud console but has been added to all predefined roles that include
the orgpolicy.policy.get permission. If your organization uses custom roles
and CMEK organization policies, use gcloud CLI to add the
orgpolicy.policies.check permission to each role that can create resources.
For more information, see Editing an existing custom
role .
Require CMEK protection
To require CMEK protection for your organization, configure the
constraints/gcp.restrictNonCmekServices organization policy.
As a list constraint, the accepted values for this constraint are Google Cloud
service names (for example, bigquery.googleapis.com ). Use this constraint by
providing a list of Google Cloud service names and setting the constraint to
Deny . This configuration blocks the creation of resources in these
services if the resource is not protected by CMEK. In
other words, requests to create a resource in the service don't succeed without
specifying a Cloud KMS key. Additionally, this constraint blocks
the removal of CMEK protection from resources in these services. This constraint
can only be applied to supported services .
Caution: The creation of some Google Cloud resource types can trigger the
creation of a resource type from a different service. Use caution when
configuring this constraint in an environment with services that don't support
CMEK. Requiring CMEK protection for a service that is CMEK-aware may prevent a
CMEK-unaware service from creating resources and disrupt normal functioning.
Limit the use of Cloud KMS keys for CMEK
To limit which Cloud KMS keys are used for CMEK protection,
configure the constraints/gcp.restrictCmekCryptoKeyProjects constraint.
As a list constraint, the accepted values are resource hierarchy indicators (for
example, projects/ PROJECT_ID ,
under:folders/ FOLDER_ID , and
under:organizations/ ORGANIZATION_ID ). Use this constraint by
configuring a list of resource hierarchy indicators and setting the constraint
to Allow . This configuration restricts supported services so that CMEK keys
can be chosen only from the listed projects, folders, and organizations.
Requests to create CMEK-protected resources in configured services don't succeed
without a Cloud KMS
key from one of the allowed resources. Where configured, this constraint applies
to all supported services .
Note: This constraint by itself does not necessarily guarantee the use of
customer-managed encryption keys from allowed projects within the specified
services, because other methods of encryption might be available. To enforce the
use of customer-managed encryption keys from allowed projects, you must apply
both this constraint and the constraints/gcp.restrictNonCmekServices
constraint.
Supported services
Service
Constraint value when requiring CMEK
Agent Assist
dialogflow.googleapis.com
AlloyDB for PostgreSQL
alloydb.googleapis.com
Apigee
apigee.googleapis.com
Application Integration
integrations.googleapis.com
Artifact Registry
artifactregistry.googleapis.com
Backup and DR Service
backupdr.googleapis.com
Backup for GKE
gkebackup.googleapis.com
BigQuery
bigquery.googleapis.com
Bigtable
bigtable.googleapis.com
Cloud Composer
composer.googleapis.com
Cloud Data Fusion
datafusion.googleapis.com
Cloud Logging
logging.googleapis.com
Cloud Run
run.googleapis.com
Cloud Run functions
cloudfunctions.googleapis.com
Cloud SQL
sqladmin.googleapis.com
Cloud Storage
storage.googleapis.com
Cloud Tasks
cloudtasks.googleapis.com
Cloud TPU
tpu.googleapis.com
Cloud Workstations
workstations.googleapis.com
Colab Enterprise
aiplatform.googleapis.com
Compute Engine
compute.googleapis.com
Customer Experience Insights
contactcenterinsights.googleapis.com
Dataflow
dataflow.googleapis.com
Dataform
dataform.googleapis.com
Dataplex Universal Catalog
dataplex.googleapis.com
Dataproc
dataproc.googleapis.com
Dialogflow CX
dialogflow.googleapis.com
Document AI
documentai.googleapis.com
Eventarc Advanced
( Preview )
eventarc.googleapis.com
Eventarc Standard
eventarc.googleapis.com
Filestore
file.googleapis.com
Firestore
firestore.googleapis.com
Gemini Enterprise Enterprise
discoveryengine.googleapis.com
Google Cloud Managed Lustre
lustre.googleapis.com
Google Cloud NetApp Volumes
netapp.googleapis.com
Google Kubernetes Engine
( Preview )
container.googleapis.com
Looker (Google Cloud core)
looker.googleapis.com
Memorystore for Redis
redis.googleapis.com
Memorystore for Redis Cluster
redis.googleapis.com
Memorystore for Valkey
memorystore.googleapis.com
Pub/Sub
pubsub.googleapis.com
Secret Manager
secretmanager.googleapis.com
Secure Source Manager
securesourcemanager.googleapis.com
Security Command Center
securitycenter.googleapis.com
Spanner
spanner.googleapis.com
Speech-to-Text
speech.googleapis.com
Vertex AI
aiplatform.googleapis.com
Vertex AI Search
discoveryengine.googleapis.com
Vertex AI Workbench instances
notebooks.googleapis.com
CMEK organization policies and Storage Transfer Service
Storage Transfer Service doesn't have a CMEK integration but can be used with CMEK
organization policies. If you use Storage Transfer Service and want to use CMEK to
help protect the database credentials stored in Secret Manager, you
must add both storagetransfer.googleapis.com and
secretmanager.googleapis.com to the constraints/gcp.restrictNonCmekServices
constraint. For more information, see the Storage Transfer Service CMEK
documentation .
Caution: If you add storagetransfer.googleapis.com to this constraint but not
secretmanager.googleapis.com , then the organization policy won't function as
intended.
Enforcement exceptions by resource type
CMEK organization policy constraints are enforced when creating a new resource
or when changing (where supported) the Cloud KMS key on an existing
resource. Generally, they are enforced on all of a service's resource types that
support CMEK and based solely on the resource's configuration. Some notable
exceptions are summarized here:
Resource type
Enforcement exception
bigquery.googleapis.com/Dataset
Partially enforced on dataset default Cloud KMS key ( gcp.restrictCmekCryptoKeyProjects only)
bigquery.googleapis.com/Job
Query jobs only: enforced on Cloud KMS key provided with query
or default from billing project; see also separate configuration of project
default Cloud KMS key
bigquerydatatransfer.googleapis.com/TransferConfig
Transfer configs use the service name of the Data Transfer Service
(bigquerydatatransfer.googleapis.com) for CMEK organization policy constraints.
container.googleapis.com/Cluster
( Preview )
Enforced on the Cloud KMS key for node boot
disk only; not enforced on secrets at the application layer
logging.googleapis.com/LogBucket
Enforced on explicitly created log buckets; see also separate configuration
required to ensure compliance of built-in log buckets
storage.googleapis.com/Bucket
Enforced on bucket default Cloud KMS key
storage.googleapis.com/Object
Enforced independently of bucket; see also separate
configuration of bucket default Cloud KMS key
Configuration examples
In the configuration examples, assume the sample organization has the following
resource hierarchy:
Note: CMEK organization policies only apply to newly created resources within
supported services .
Require CMEK and limit keys for a project
Suppose you want to require CMEK protection for all Cloud Storage resources
under projects/5 and ensure that only keys coming from projects/4 can be
used.
To require CMEK protection for all new Cloud Storage resources, use the
following organization policy setting:
Organization policy: constraints/gcp.restrictNonCmekServices
Binding at: projects/5
Policy type: Deny
Policy value: storage.googleapis.com
To ensure only keys from projects/4 are used, use the following configuration:
Organization policy: constraints/gcp.restrictCmekCryptoKeyProjects
Binding at: projects/5
Policy type: Allow
Policy value: projects/4
Require CMEK and limit keys to within a folder
Alternatively, suppose you're expecting to add additional Cloud KMS
projects under folders/2 in the future and want to require CMEK more broadly
within folders/3 . For this scenario, you need slightly different
configurations.
To require additional CMEK protection for new Cloud SQL and Cloud Storage
resources anywhere under folders/3 :
Organization policy: constraints/gcp.restrictNonCmekServices
Binding at: folders/3
Policy type: Deny
Policy values: sqladmin.googleapis.com , storage.googleapis.com
To ensure only keys from Cloud KMS projects under folders/2 are
used:
Organization policy: constraints/gcp.restrictCmekCryptoKeyProjects
Binding at: folders/3
Policy type: Allow
Policy value: under:folders/2
Require CMEK for an organization
To require CMEK everywhere in the organization (in supported services),
configure the constraints/gcp.restrictNonCmekServices constraint with the
following setting:
Organization policy: constraints/gcp.restrictNonCmekServices
Binding at: organizations/1
Policy type: Deny
Policy values: (all supported services )
Limitations
If you use Google Cloud console to create a resource, you might notice that
you can't use any encryption options other than CMEK when
constraints/gcp.restrictNonCmekServices is configured for a project and
service. The CMEK organization policy restriction is only visible when the
customer account has been granted the orgpolicy.policy.get IAM
permission on the project.
What's next
See Introduction to the Organization Policy
Service
to learn more about the benefits and common use cases for organization policies.
For more examples on creating an organization policy with particular
constraints, see Using
constraints .
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
