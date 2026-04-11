---
title: "US Data Boundary for Healthcare and Life Sciences \_|\_ Assured Workloads\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/us-data-boundary-healthcare-life-sciences
  title: "US Data Boundary for Healthcare and Life Sciences \_|\_ Assured Workloads\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The names for some Assured Workloads control packages have changed. For information about the name change, see Control package renaming notice .
Home
Documentation
Security
Assured Workloads
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
US Data Boundary for Healthcare and Life Sciences
Important: Before following the guidance on this page, we recommend that you
seek independent legal advice relating to your responsibilities under
US Data Boundary for Healthcare and Life Sciences. Nothing in this document is intended to provide you
with or should be used as a substitute for legal advice.
This page describes the set of controls that are applied on
US Data Boundary for Healthcare and Life Sciences workloads in Assured Workloads. It provides
detailed information about
data residency ,
supported Google Cloud products and their API endpoints,
and any applicable restrictions or limitations on
those products.
US Data Boundary for Healthcare and Life Sciences lets you run workloads that are compliant with
requirements for Health Insurance Portability and Accountability Act (HIPAA) and
Health Information Trust Alliance (HITRUST). Each supported product is listed on
Google Cloud's HIPAA Business Associate Agreement (BAA) page
and
Google Cloud's HITRUST Common Security Framework (CSF) page .
The following additional information applies to US Data Boundary for Healthcare and Life Sciences:
Data residency : The US Data Boundary for Healthcare and Life Sciences control package sets data
location controls to support
US-only regions . See the
Google Cloud-wide organization policy constraints section
for more information.
Support : Technical support services for US Data Boundary for Healthcare and Life Sciences workloads
are available with Standard, Enhanced, or Premium
Cloud Customer Care subscriptions. US Data Boundary for Healthcare and Life Sciences
workloads support cases are routed to global support personnel. If you require
a more restrictive support personnel control option, consider the
US Data Boundary for Healthcare and Life Sciences with Support
control package instead.
Pricing : The US Data Boundary for Healthcare and Life Sciences control package is included in
Assured Workloads' Free tier , which incurs no additional charges.
See Assured Workloads pricing for more
information.
Prerequisites
To remain compliant as a user of the US Data Boundary for Healthcare and Life Sciences control package,
verify that you satisfy and adhere to the following prerequisites:
Create a US Data Boundary for Healthcare and Life Sciences folder using Assured Workloads and
deploy your HIPAA or HITRUST workloads only in that folder.
Only enable and use in-scope services for
US Data Boundary for Healthcare and Life Sciences workloads. If you enable any additional services by
modifying the
Restrict Service Usage
( gcp.restrictServiceUsage ) organization policy constraint set on your
Assured Workloads folder, you're choosing to accept the associated
risks as described in
Shared responsibility in Assured Workloads .
The following additional prerequisites apply:
Each service must be listed on
Google Cloud's HIPAA BAA page
or
Google Cloud's HITRUST CSF page
for you to remain compliant.
When you allowlist any additional services by modifying this constraint,
Assured Workloads monitoring will report compliance violations. To
remove these violations and prevent future notifications for services added to
the allowlist, you must
grant an exception for
each violation.
Before adding a service to the allowlist, verify that it supports CMEK by
reviewing the Compatible services page in the
Cloud KMS documentation. If you want to enforce a stricter security
posture when using CMEK, see the
View key usage page in the Cloud KMS
documentation.
Before adding a service to the allowlist, verify that it's listed on the
Google Cloud Services with Data Residency
page.
Before adding a service to the allowlist, verify that it's supported by
VPC Service Controls by reviewing the
Supported products and limitations
page in the VPC Service Controls documentation.
Before adding a service to the allowlist, verify that it's supported by
Access Transparency
and
Access Approval .
Don't change the default organization policy constraint values unless you
understand and are willing to accept the data residency risks that might
occur.
Consider adopting the general security best practices provided in the
Google Cloud security best practices center .
Supported products and API endpoints
Unless otherwise noted, users can access all supported products through the Google Cloud console.
Restrictions or limitations that affect the features of a supported product, including those that
are enforced through
organization policy constraint settings ,
are listed in the following table.
If a product is not listed, that product is unsupported and has not met the control
requirements for US Data Boundary for Healthcare and Life Sciences. Unsupported products are not recommended for use
without due diligence and a thorough understanding of your responsibilities in the shared responsibility model .
Before using an unsupported product, ensure that you are aware of and are willing to accept any
associated risks involved, such as negative impacts to data residency or data sovereignty.
Unsupported products may share an API service endpoint with supported products,
making them available to all users.
Supported product
API endpoints
Restrictions or limitations
Access Approval
accessapproval.googleapis.com
None
Access Context Manager
accesscontextmanager.googleapis.com
None
Access Transparency
accessapproval.googleapis.com
None
Agent Assist
dialogflow.googleapis.com
None
AlloyDB for PostgreSQL
alloydb.googleapis.com
None
Apigee
apigee.googleapis.com
None
Application Integration
integrations.googleapis.com
None
Artifact Registry
artifactregistry.googleapis.com
None
AutoML Tables
aiplatform.googleapis.com
None
Backup and DR Service
backupdr.googleapis.com
None
Backup for GKE
gkebackup.googleapis.com
None
BigQuery
bigquery.googleapis.com
bigqueryconnection.googleapis.com
bigquerydatapolicy.googleapis.com
bigquerydatatransfer.googleapis.com
bigqueryreservation.googleapis.com
bigquerystorage.googleapis.com
Affected features
BigQuery Data Transfer Service
bigquerydatatransfer.googleapis.com
None
Bigtable
bigtable.googleapis.com
bigtableadmin.googleapis.com
Affected features
Binary Authorization
binaryauthorization.googleapis.com
None
Certificate Authority Service
privateca.googleapis.com
None
Certificate Manager
certificatemanager.googleapis.com
None
Cloud Asset Inventory
cloudasset.googleapis.com
None
Cloud Build
cloudbuild.googleapis.com
None
Cloud Composer
composer.googleapis.com
None
Cloud DNS
dns.googleapis.com
None
Cloud Data Fusion
datafusion.googleapis.com
None
Cloud Deploy
clouddeploy.googleapis.com
None
Cloud HSM
cloudkms.googleapis.com
None
Cloud Healthcare API
healthcare.googleapis.com
None
Cloud Interconnect
compute.googleapis.com
Affected features
Cloud Key Management Service (Cloud KMS)
cloudkms.googleapis.com
None
Cloud Logging
logging.googleapis.com
Affected features
Cloud Monitoring
monitoring.googleapis.com
Affected features
Cloud Router
compute.googleapis.com
None
Cloud Run
run.googleapis.com
Affected features
Cloud Run functions
run.googleapis.com
None
Cloud SQL
sqladmin.googleapis.com
None
Cloud Service Mesh
mesh.googleapis.com
meshca.googleapis.com
meshconfig.googleapis.com
trafficdirector.googleapis.com
networkservices.googleapis.com
None
Cloud Storage
storage.googleapis.com
None
Cloud Tasks
cloudtasks.googleapis.com
None
Cloud Tasks
cloudtasks.googleapis.com
None
Cloud VPN
compute.googleapis.com
Affected features
Cloud Vision API
vision.googleapis.com
Affected features
Compute Engine
compute.googleapis.com
Affected features
and organization policy constraints
Dialogflow CX
dialogflow.googleapis.com
None
Customer Experience Insights
contactcenterinsights.googleapis.com
None
Dataflow
dataflow.googleapis.com
datapipelines.googleapis.com
None
Dataform
dataform.googleapis.com
None
Dataplex Universal Catalog
dataplex.googleapis.com
datalineage.googleapis.com
Affected features
Managed Service for Apache Spark
dataproc-control.googleapis.com
dataproc.googleapis.com
None
Document AI
documentai.googleapis.com
None
Eventarc
eventarc.googleapis.com
None
External passthrough Network Load Balancer
compute.googleapis.com
None
Filestore
file.googleapis.com
None
Firestore
firestore.googleapis.com
None
GKE Hub
gkehub.googleapis.com
None
Generative AI on Vertex AI
aiplatform.googleapis.com
None
Google Cloud Armor
compute.googleapis.com
networksecurity.googleapis.com
Affected features
Google Kubernetes Engine (GKE)
container.googleapis.com
containersecurity.googleapis.com
None
Identity and Access Management (IAM)
iam.googleapis.com
policytroubleshooter.googleapis.com
None
Identity-Aware Proxy (IAP)
iap.googleapis.com
None
Internal passthrough Network Load Balancer
compute.googleapis.com
None
Key Access Justifications
cloudekm.googleapis.com
cloudkms.googleapis.com
None
Looker (Google Cloud core)
looker.googleapis.com
None
Memorystore for Redis
redis.googleapis.com
None
Model Armor
modelarmor.googleapis.com
None
Network Connectivity Center
networkconnectivity.googleapis.com
Affected features
Persistent Disk
compute.googleapis.com
None
Persistent Disk
compute.googleapis.com
None
Pub/Sub
pubsub.googleapis.com
Organization policy constraints
Regional external Application Load Balancer
compute.googleapis.com
None
Regional external proxy Network Load Balancer
compute.googleapis.com
None
Regional internal Application Load Balancer
compute.googleapis.com
None
Regional internal proxy Network Load Balancer
compute.googleapis.com
None
Secret Manager
secretmanager.googleapis.com
None
Secure Source Manager
securesourcemanager.googleapis.com
None
Security Command Center Premium
securitycenter.googleapis.com
securitycentermanagement.googleapis.com
securityposture.googleapis.com
websecurityscanner.googleapis.com
None
Sensitive Data Protection
dlp.googleapis.com
None
Spanner
spanner.googleapis.com
Affected features
and organization policy constraints
Speech-to-Text
speech.googleapis.com
None
Storage Transfer Service
storagetransfer.googleapis.com
None
Text-to-Speech
texttospeech.googleapis.com
None
VPC Service Controls
accesscontextmanager.googleapis.com
None
Vertex AI Batch prediction
aiplatform.googleapis.com
None
Vertex AI Online prediction
aiplatform.googleapis.com
None
Vertex AI Search
discoveryengine.googleapis.com
None
Vertex AI Training
aiplatform.googleapis.com
None
Vertex AI Workbench
notebooks.googleapis.com
None
Virtual Private Cloud (VPC)
compute.googleapis.com
None
Restrictions and limitations
The following sections describe Google Cloud-wide or product-specific restrictions or limitations
for features, including any organization policy constraints that are set by default on
US Data Boundary for Healthcare and Life Sciences folders. Other applicable organization policy constraints—even if
not set by default—can provide additional defense-in-depth to further protect your
organization's Google Cloud resources.
We strongly recommend not changing the values of the required organization
policy constraints listed in the following sections. Doing so may undermine data residency. When
such a change has been made, the effects of the change are difficult or impossible to reverse.
Ensure that you understand the ramifications of changing an organization policy constraint's value
before proceeding.
Additionally, ensure that any automated mechanisms your organization uses
to manage organization policies are updated to prevent these values from being changed
unintentionally.
Google Cloud-wide
Google Cloud-wide organization policy constraints
The following
organization policy constraints
apply across Google Cloud.
Organization policy constraint
Description
gcp.resourceLocations
Set to the following locations in the allowedValues list:
us
us-central1
us-central2
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
This value restricts creation of new resources to the selected values. When set, no
resources can be created in any other regions, multi-regions, or locations outside of the
selection. See
Resource locations supported services
for a list of resources that can be restricted by the Resource Locations organization policy
constraint, as some resources may be out of scope and cannot be restricted.
Changing this value by making it less restrictive potentially undermines data residency by
allowing data to be created or stored outside of a compliant data boundary.
gcp.restrictNonCmekServices
Set to a list of all in-scope
API service names , including:
bigquerydatatransfer.googleapis.com
Some features may be affected for each of the services listed above.
Each listed service requires
Customer-managed encryption keys (CMEK) . CMEK encrypts
at-rest data with a key managed by you, not Google's default encryption
mechanisms.
Changing this value by removing one or more in-scope services from the list may undermine
data sovereignty, because new at-rest data will be automatically encrypted using Google's
own keys instead of yours. Existing at-rest data will remain encrypted by the key you
provided.
gcp.restrictServiceUsage
Set to allow all supported products and API endpoints .
Determines which services can be used by restricting runtime access to their resources. For
more information, see
Restricting resource usage .
gcp.restrictTLSVersion
Set to deny the following TLS versions:
TLS_1_0
TLS_1_1
For more information, see
Restrict TLS versions .
BigQuery
Affected BigQuery features
Feature
Description
Enabling BigQuery on a new folder
BigQuery is supported, but it isn't automatically enabled when you create a new
Assured Workloads folder due to an internal configuration process. This process normally
finishes in ten minutes, but can take much longer in some circumstances. To check whether the
process is finished and to enable BigQuery, complete the following steps:
In the Google Cloud console, go to the Assured Workloads page.
Go to Assured Workloads
Select your new Assured Workloads folder from the list.
On the Folder Details page in the Allowed services section, click
Review Available Updates .
In the Allowed services pane, review the services to be added to the
Resource Usage Restriction
organization policy for the folder. If BigQuery services are listed, click
Allow Services to add them.
If BigQuery services are not listed, wait for the internal process to complete. If the
services are not listed within 12 hours of folder creation, contact
Cloud Customer Care .
After the enablement process is completed, you can use BigQuery in your
Assured Workloads folder.
Gemini in BigQuery is not supported by Assured Workloads.
Unsupported features
The following BigQuery features are not supported and should not be used in the
BigQuery CLI. It is your responsibility not to use them in BigQuery for
Assured Workloads.
Interaction with remote data sources
Externally-trained BQML models are not supported.
Internally-trained BQML models are supported.
Dynamic data masking
GDrive export
Remote functions
Saved queries
Workflow scheduling
For BigQuery Studio,
notebooks are
unsupported.
Gemini in BigQuery is not supported.
BigQuery CLI
The BigQuery CLI is supported.
Google Cloud SDK
You must use Google Cloud SDK version 403.0.0 or newer to maintain data regionalization
guarantees for technical data. To verify your current Google Cloud SDK version, run
gcloud --version and then gcloud components update to update to
the newest version.
Administrator controls
BigQuery will disable unsupported APIs but administrators with sufficient
permissions to create Assured Workloads folders can enable an unsupported API. If this
occurs, you will be notified of potential non-compliance through the
Assured Workloads monitoring dashboard .
Loading data
BigQuery Data Transfer Service connectors
for Google Software as a Service (SaaS) apps, external cloud storage providers, and data
warehouses are not supported. It is your responsibility not to use BigQuery Data Transfer Service
connectors for US Data Boundary for Healthcare and Life Sciences workloads.
Third-party transfers
BigQuery doesn't verify support for third-party transfers for the
BigQuery Data Transfer Service. It is your responsibility to verify support when using any third-party
transfer for the BigQuery Data Transfer Service.
Non-compliant BQML models
Externally-trained BQML models
are not supported.
Query jobs
Query jobs should only be created within Assured Workloads folders.
Queries on datasets in other projects
BigQuery doesn't prevent Assured Workloads datasets from being queried from
non-Assured Workloads projects. You should ensure that any query that has a read or a join on
Assured Workloads data be placed in Assured Workloads folders. You can specify a
fully-qualified table name
for their query result using projectname.dataset.table in the BigQuery
CLI.
Cloud Logging
BigQuery utilizes Cloud Logging for some of your log data. You should disable
your _default logging buckets or restrict _default buckets to
in-scope regions to maintain compliance using the following command:
gcloud alpha logging settings update --organization=ORGANIZATION_ID --disable-default-sink
For more information, see
Regionalize your logs .
Bigtable
Affected Bigtable features
Feature
Description
Data Boost
This feature is disabled.
Split boundaries
Bigtable uses a small subset of row keys to define split boundaries, which may
include customer data and metadata. A split boundary in Bigtable denotes the
location where contiguous ranges of rows in a table are split into tablets.
These split boundaries are accessible by Google personnel for technical support and
debugging purposes, and are not subject to administrative access data controls in
Assured Workloads.
Cloud Interconnect
Affected Cloud Interconnect features
Feature
Description
High-availability (HA) VPN
You must enable high-availability (HA) VPN functionality when using Cloud Interconnect
with Cloud VPN. Additionally, you must adhere to the encryption and regionalization
requirements listed in the Affected Cloud VPN features section.
Cloud Logging
Affected Cloud Logging features
To use Cloud Logging with Customer-managed encryption keys (CMEK), you must
complete the steps in the
Enable CMEK for an organization
page in the Cloud Logging documentation.
Feature
Description
Log sinks
Filters shouldn't contain Customer Data.
Log sinks include filters which are stored as configuration. Don't create filters that
contain Customer Data.
Live tailing log entries
Filters shouldn't contain Customer Data.
A live tailing session includes a filter which is stored as configuration. Tailing logs
doesn't store any log entry data itself, but can query and transmit data across regions.
Don't create filters that contain Customer Data.
SQL-based alerting policies
This feature is disabled.
You cannot use the SQL-based alerting policies feature.
Cloud Monitoring
Affected Cloud Monitoring features
Feature
Description
Synthetic Monitor
This feature is disabled.
Uptime checks
This feature is disabled.
Cloud Run
Affected Cloud Run features
Feature
Description
Unsupported features
The following Cloud Run features aren't supported:
Cloud Trace integration
Cloud Run functions
Eventarc triggers
Cloud Vision API
Affected Cloud Vision API features
Feature
Description
HCLS-compliant Cloud Vision API endpoints
It is your responsibility to use only the US region API endpoint
( us-vision.googleapis.com ) for the Cloud Vision API. The global endpoint
( vision.googleapis.com ) is not HCLS-compliant and
using it may undermine your workload's data residency.
Cloud VPN
Affected Cloud VPN features
Feature
Description
VPN endpoints
You must use only Cloud VPN endpoints that are located in an in-scope
region . Ensure that your VPN gateway is configured for use
in an in-scope region only.
Compute Engine
Affected Compute Engine features
Feature
Description
Guest environment
It is possible for scripts, daemons, and binaries that are included with the guest
environment to access unencrypted at-rest and in-use data. Depending on your VM
configuration, updates to this software may be installed by default. See
Guest environment for specific
information about each package's contents, source code, and more.
These components help you meet data sovereignty through internal security controls and
processes. However, if you want additional control, you can also curate your own images or
agents and optionally use the compute.trustedImageProjects organization policy
constraint.
For more information, see
Building a custom image .
OS policies in VM Manager
Inline scripts and binary output files within the OS policy files are not encrypted using
customer-managed encryption keys (CMEK). Don't include any sensitive information in
these files. Consider storing these scripts and output files in
Cloud Storage buckets. For more information, see
Example OS policies .
If you want to restrict the creation or modification of OS policy resources that use inline
scripts or binary output files, enable the
constraints/osconfig.restrictInlineScriptAndOutputFileUsage organization policy
constraint.
For more information, see
Constraints for OS Config .
Compute Engine organization policy constraints
Organization policy constraint
Description
compute.disableGlobalCloudArmorPolicy
Set to True .
Disables the creation of new global
Google Cloud Armor security policies and the
addition or modification of rules to existing global Google Cloud Armor security policies. This
constraint doesn't restrict the removal of rules or the ability to remove or change the
description and listing of global Google Cloud Armor security policies. Regional Google Cloud Armor
security policies are unaffected by this constraint. All global and regional security
policies that exist prior to the enforcement of this constraint remain in effect.
compute.restrictNonConfidentialComputing
(Optional) Value is not set. Set this value to provide additional defense-in-depth. For
more information, see the
Confidential VM documentation .
compute.trustedImageProjects
(Optional) Value is not set. Set this value to provide additional defense-in-depth.
Setting this value constrains image storage and disk instantiation to the specified list of
projects. This value affects data sovereignty by preventing use of any unauthorized images
or agents.
Dataplex Universal Catalog
Dataplex Universal Catalog features
Feature
Description
Attribute Store
This feature is deprecated and disabled.
Data Catalog
This feature is deprecated and disabled. You cannot search through nor manage your
metadata in Data Catalog.
Lakes and Zones
This feature is disabled. You cannot manage lakes, zones and tasks.
Google Cloud Armor
Affected Google Cloud Armor features
Feature
Description
Globally scoped security policies
This feature is disabled by the compute.disableGlobalCloudArmorPolicy
organization policy constraint.
Network Connectivity Center
Affected Network Connectivity Center features
Feature
Description
Google Cloud console
Network Connectivity Center features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
Pub/Sub
Pub/Sub organization policy constraints
Organization policy constraint
Description
pubsub.managed.disableSubscriptionMessageTransforms
Set to True .
Disables Pub/Sub subscriptions from being set with
Single Message Transforms (SMTs) .
Changing this value might affect your workload's data residency or data sovereignty.
pubsub.managed.disableTopicMessageTransforms
Set to True .
Disables Pub/Sub topics from being set with
Single Message Transforms (SMTs) .
Changing this value may affect your workload's data residency or data sovereignty.
Spanner
Affected Spanner features
Feature
Description
Split boundaries
Spanner uses a small subset of primary keys and indexed columns to define
split boundaries , which
may include customer data and metadata. A split boundary in Spanner denotes the
location where contiguous ranges of rows are split into smaller pieces.
These split boundaries are accessible by Google personnel for technical support and
debugging purposes, and are not subject to administrative access data controls in
Assured Workloads.
Spanner organization policy constraints
Organization policy constraint
Description
spanner.assuredWorkloadsAdvancedServiceControls
Set to True .
Applies additional data sovereignty and supportability controls to Spanner
resources.
spanner.disableMultiRegionInstanceIfNoLocationSelected
Set to True .
Disables the ability to create multi-region Spanner instances to enforce data
residency and data sovereignty.
What's next
Learn how to create an Assured Workloads folder
Learn about the
US Data Boundary for Healthcare and Life Sciences with Support
control package
Understand Assured Workloads pricing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
