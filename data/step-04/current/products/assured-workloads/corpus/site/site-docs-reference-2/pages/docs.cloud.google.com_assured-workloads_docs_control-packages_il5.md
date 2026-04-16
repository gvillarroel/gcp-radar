---
title: "Data Boundary for Impact Level 5 (IL5) \_|\_ Assured Workloads \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/il5
  title: "Data Boundary for Impact Level 5 (IL5) \_|\_ Assured Workloads \_|\_ Google\
    \ Cloud Documentation"
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
Data Boundary for Impact Level 5 (IL5)
Important: Before following the guidance on this page, we recommend that you
seek independent legal advice relating to your responsibilities under
Data Boundary for IL5. Nothing in this document is intended to provide you
with or should be used as a substitute for legal advice.
This page describes the set of controls that are applied on
Data Boundary for IL5 workloads in Assured Workloads. It provides
detailed information about
data residency ,
supported Google Cloud products and their API endpoints,
and any applicable restrictions or limitations on
those products. The following additional information applies to
Data Boundary for IL5:
Data residency : The Data Boundary for IL5 control package sets data
location controls to support
US-only regions . For more information,
see the
Google Cloud-wide organization policy constraints section.
Support : Technical support services for Data Boundary for IL5 workloads
are available with Enhanced or Premium Cloud Customer Care
subscriptions. Data Boundary for IL5 workloads support cases are routed to
US Persons located in the US. For more information, see
Getting support .
Pricing : The Data Boundary for IL5 control package is included in
Assured Workloads' Premium tier , which incurs an additional 20%
charge. For more information, see
Assured Workloads pricing .
Prerequisites
To remain compliant as a user of the Data Boundary for IL5 control package,
verify that you satisfy and adhere to the following prerequisites:
Create a Data Boundary for IL5 folder using Assured Workloads and
deploy your IL5 workloads only in that folder.
Only enable and use in-scope services for
Data Boundary for IL5 workloads.
Don't change the default organization policy constraint values unless you
understand and are willing to accept the data residency risks that might
occur.
For all services used in a Data Boundary for IL5 folder, don't store
technical data in the following user-defined or security configuration
information types:
Error messages
Console output
Attribute data
Service configuration data
Network packet headers
Resource identifiers
Data labels
Consider adopting the general security best practices provided in the
Google Cloud security best practices center .
Review the
U.S. Department of Defense (DoD) Provisional Authorization
page for additional information about deploying IL5 workloads in
Google Cloud.
When accessing the Google Cloud console, you have the option of using the
Jurisdictional Google Cloud console .
You are not required to use the Jurisdictional Google Cloud console for
Data Boundary for IL5. It can be accessed at one of the following URLs:
console.us.cloud.google.com
console.us.cloud.google for federated
identity users
Supported products and API endpoints
Unless otherwise noted, users can access all supported products through the Google Cloud console.
Restrictions or limitations that affect the features of a supported product, including those that
are enforced through
organization policy constraint settings ,
are listed in the following table.
If a product is not listed, that product is unsupported and has not met the control
requirements for Data Boundary for IL5. Unsupported products are not recommended for use
without due diligence and a thorough understanding of your responsibilities in the shared responsibility model .
Before using an unsupported product, ensure that you are aware of and are willing to accept any
associated risks involved, such as negative impacts to data residency or data sovereignty.
Additionally, review any usage of an unsupported product with your authorizing agency prior to
accepting the risk.
Unsupported products may share an API service endpoint with supported products,
making them available to all users.
Supported product
API endpoints
Restrictions or limitations
Access Context Manager
accesscontextmanager.googleapis.com
None
AlloyDB for PostgreSQL
alloydb.googleapis.com
None
Artifact Registry
artifactregistry.googleapis.com
None
BigQuery
bigquery.googleapis.com
bigqueryconnection.googleapis.com
bigquerydatapolicy.googleapis.com
bigquerymigration.googleapis.com
bigqueryreservation.googleapis.com
bigquerystorage.googleapis.com
Affected features
and organization policy constraints
Certificate Authority Service
privateca.googleapis.com
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
Cloud External Key Manager (Cloud EKM)
cloudkms.googleapis.com
None
Cloud HSM
cloudkms.googleapis.com
None
Cloud Identity
cloudidentity.googleapis.com
None
Cloud Interconnect
compute.googleapis.com
None
Cloud Key Management Service (Cloud KMS)
cloudkms.googleapis.com
Organization policy constraints
Cloud Logging
logging.googleapis.com
Affected features
Cloud Monitoring
monitoring.googleapis.com
None
Cloud NAT
compute.googleapis.com
None
Cloud Router
compute.googleapis.com
None
Cloud Run
run.googleapis.com
Affected features
Cloud SQL
sqladmin.googleapis.com
None
Cloud Service Mesh
mesh.googleapis.com
meshca.googleapis.com
meshconfig.googleapis.com
trafficdirector.googleapis.com
None
Cloud Storage
storage.googleapis.com
None
Cloud Tasks
cloudtasks.googleapis.com
None
Cloud VPN
compute.googleapis.com
Affected features
Cloud Vision API
us-vision.googleapis.com
Affected features
Cloud Workstations
workstations.googleapis.com
Affected features
Compute Engine
compute.googleapis.com
Affected features
and organization policy constraints
Connect Agent
gkeconnect.googleapis.com
None
Dataflow
dataflow.googleapis.com
datapipelines.googleapis.com
None
Knowledge Catalog
dataplex.googleapis.com
datalineage.googleapis.com
Affected features
Managed Service for Apache Spark
dataproc.googleapis.com
dataproc-control.googleapis.com
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
GKE Hub
gkehub.googleapis.com
None
GKE Identity Service
anthosidentityservice.googleapis.com
None
Generative AI on Vertex AI
aiplatform.googleapis.com
None
Google Cloud Armor
compute.googleapis.com
Affected features
Google Kubernetes Engine (GKE)
container.googleapis.com
containersecurity.googleapis.com
None
Google Security Operations SOAR
Not applicable
None
Google Admin console
Not applicable
None
Identity and Access Management (IAM)
iam.googleapis.com
Organization policy constraints
Identity-Aware Proxy (IAP)
iap.googleapis.com
None
Internal passthrough Network Load Balancer
compute.googleapis.com
None
Memorystore for Redis
redis.googleapis.com
None
Network Connectivity Center
networkconnectivity.googleapis.com
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
Sensitive Data Protection
dlp.googleapis.com
None
Spanner
spanner.googleapis.com
None
Speech-to-Text
speech.googleapis.com
Affected features
VPC Service Controls
accesscontextmanager.googleapis.com
None
Vertex AI Batch prediction
aiplatform.googleapis.com
None
Vertex AI Model Monitoring
aiplatform.googleapis.com
None
Vertex AI Model Registry
aiplatform.googleapis.com
None
Vertex AI Online prediction
aiplatform.googleapis.com
None
Vertex AI Pipelines
aiplatform.googleapis.com
None
Vertex AI Training
aiplatform.googleapis.com
None
Virtual Private Cloud (VPC)
compute.googleapis.com
None
Restrictions and limitations
The following sections describe Google Cloud-wide or product-specific restrictions or limitations
for features, including any organization policy constraints that are set by default on
Data Boundary for IL5 folders. Other applicable organization policy constraints—even if
not set by default—can provide additional defense-in-depth to further protect your
organization's Google Cloud resources.
We strongly recommend not changing the values of the required organization
policy constraints listed in the following sections. Doing so may undermine data residency. When
such a change has been made, the effects of the change are difficult or impossible to reverse.
Ensure that you understand the ramifications of changing an organization policy constraint's value
before proceeding, and review any such changes with your authorizing agency prior to making the
change.
Additionally, ensure that any automated mechanisms your organization uses
to manage organization policies are updated to prevent these values from being changed
unintentionally.
Google Cloud-wide
Affected Google Cloud-wide features
Feature
Description
Google Cloud console
To access the Google Cloud console when using the Data Boundary for IL5 control package,
you have the option of using the
Jurisdictional Google Cloud console .
The Jurisdictional Google Cloud console is not required for Data Boundary for IL5, and can be
accessed using one of the following URLs:
console.us.cloud.google.com
console.us.cloud.google
for federated identity users
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
gcp.restrictCmekCryptoKeyProjects
Set to under:organizations/your-organization-name , which is your
Assured Workloads organization. You can further restrict this value by specifying a project
or folder.
Limits the scope of approved folders or projects that can provide
Cloud KMS keys for encrypting at-rest data using
CMEK. This constraint prevents unapproved folders or projects from providing encryption
keys, thus helping to guarantee data sovereignty for in-scope services' at-rest data.
gcp.restrictNonCmekServices
Set to a list of all in-scope
API service names , including:
compute.googleapis.com
container.googleapis.com
storage.googleapis.com
sqladmin.googleapis.com
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
Compliant BigQuery APIs
The following BigQuery APIs are IL5-compliant:
bigquery.googleapis.com
bigquerydatapolicy.googleapis.com
bigqueryconnection.googleapis.com
bigquerymigration.googleapis.com
bigquerystorage.googleapis.com
bigqueryreservation.googleapis.com
bigquerydatatransfer.googleapis.com
The Reservations API is not enabled by default. For more information,
see
Enabling an API in your Google Cloud project .
Regions
BigQuery is IL5-compliant for all BigQuery
US regions except the US multi-region. IL5 compliance cannot
be guaranteed if a dataset is created in a US multi-region, non-US region, or non-US
multi-region. It is your responsibility to specify an
IL5-compliant region when creating BigQuery datasets.
Queries on IL5 datasets from non-IL5 projects
BigQuery doesn't prevent IL5 datasets from being
queried from non-IL5 projects. Ensure that any query that uses
a read or a join operation on IL5 technical data is in an
IL5-compliant folder.
Connections to external data sources
Google's compliance responsibility is limited to the
BigQuery Connection API
capability. It is your responsibility to ensure the compliance of the source products that
are used with the BigQuery Connection API.
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
connectors for Data Boundary for IL5 workloads.
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
Cloud Interconnect
Affected Cloud Interconnect features
Feature
Description
High-availability (HA) VPN
You must enable high-availability (HA) VPN functionality when using Cloud Interconnect
with Cloud VPN. Additionally, you must adhere to the encryption and regionalization
requirements listed in the Affected Cloud VPN features section.
Cloud KMS
Cloud KMS organization policy constraints
Organization policy constraint
Description
cloudkms.allowedProtectionLevels
Set to allow creation of Cloud Key Management Service CryptoKeys with the following protection levels:
SOFTWARE
HSM
EXTERNAL
EXTERNAL_VPC
See Protection levels for more
information.
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
IL5-compliant Cloud Vision API endpoints
It is your responsibility to use only the US region API endpoint
( us-vision.googleapis.com ) for the Cloud Vision API. The global endpoint
( vision.googleapis.com ) is not IL5-compliant and
using it may undermine your workload's data residency.
Cloud VPN
Affected Cloud VPN features
Feature
Description
VPN endpoints
You must use only Cloud VPN endpoints that are located in an in-scope
region . Ensure that your VPN gateway is configured for use
in an in-scope region only.
Cloud Workstations
Affected Cloud Workstations features
Feature
Description
Creating a workstation cluster
When creating a workstation cluster, it is your responsibility to configure it in the
following way to ensure data residency:
Select only a
Private gateway
when creating a workstation cluster. Using a private gateway provides data residency in
transit.
Use only a
regional external Application Load Balancer when
setting up a
custom domain .
Using a regional external Application Load Balancer provides data residency in transit.
Compute Engine
Affected Compute Engine features
Feature
Description
Suspending and resuming a VM instance
This feature is disabled.
Suspending and resuming a VM instance requires persistent disk storage, and persistent disk
storage used for storing the suspended VM state cannot currently be encrypted by using CMEK.
See the gcp.restrictNonCmekServices organization policy
constraint in the section above to understand the data sovereignty and data residency
implications of enabling this feature.
Local SSDs
This feature is disabled.
You will be unable to create an instance with Local SSDs because they cannot be encrypted by
using CMEK. See the
gcp.restrictNonCmekServices organization policy
constraint in the section above to understand the data sovereignty and data residency
implications of enabling this feature.
Adding an instance group to a global load balancer
You cannot add an instance group to a global load balancer.
This feature is disabled by the compute.disableGlobalLoadBalancing organization
policy constraint.
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
instances.getSerialPortOutput()
This API is disabled. You will be unable to get serial port output from the specified
instance using this API.
Change the compute.disableInstanceDataAccessApis organization policy constraint
value to False to enable this API. You can also enable and use the interactive serial
port by following the instructions in
Enabling access for a project .
instances.getScreenshot()
This API is disabled. You will be unable to get a screenshot from the specified instance
using this API.
Change the compute.disableInstanceDataAccessApis organization policy constraint
value to False to enable this API. You can also enable and use the interactive serial
port by following the instructions in
Enabling access for a project .
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
compute.disableGlobalLoadBalancing
Set to True .
Disables creation of global load balancing products.
Changing this value may affect your workload's data residency or data sovereignty.
compute.disableInstanceDataAccessApis
Set to True .
Globally disables the instances.getSerialPortOutput() and
instances.getScreenshot() APIs.
Enabling this constraint prevents you from
generating credentials on Windows Server VMs .
If you need to manage a username and password on a Windows VM, do the
following:
Enable SSH for Windows VMs .
Run the following command to change the VM's password:
gcloud compute ssh
VM_NAME --command "net user USERNAME PASSWORD "
Replace the following:
VM_NAME : The name of the VM you're setting the password
for.
USERNAME : The username of the user who you're setting
the password for.
PASSWORD : The new password.
compute.setNewProjectDefaultToZonalDNSOnly
Set to True .
Sets the DNS setting for new projects to
zonal DNS only . Zonal DNS mitigates the
risk of cross-regional outages and improves the overall reliability of your projects on
Compute Engine.
compute.skipDefaultNetworkCreation
Set to True .
Disables the creation of a
default network and its supporting resources
when a new project is created.
compute.restrictNonConfidentialComputing
(Optional) Value is not set. Set this value to provide additional defense-in-depth. For
more information, see the
Confidential VM documentation .
compute.trustedImageProjects
(Optional) Value is not set. Set this value to provide additional defense-in-depth.
Setting this value constrains image storage and disk instantiation to the specified list of
projects. This value affects data sovereignty by preventing use of any unauthorized images
or agents.
Knowledge Catalog
Knowledge Catalog features
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
IAM
IAM organization policy constraints
Organization policy constraint
Description
iam.automaticIamGrantsForDefaultServiceAccounts
Set to True .
Disables automatically granting
default service accounts the Editor
( roles/editor ) legacy basic
role.
This constraint doesn't prevent default service accounts from being granted legacy basic
roles in the future. To prevent this behavior, you can set the
iam.managed.preventPrivilegedBasicRolesForDefaultServiceAccounts
constraint on your Assured Workloads folder.
iam.disableServiceAccountKeyCreation
Set to True .
Disables the creation of new service account keys and
Cloud Storage HMAC keys .
If service account keys are required for your workload, ensure that you have read the
Best practices for
managing service account keys page before changing the value of this constraint.
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
Speech-to-Text
Affected Speech-to-Text features
Feature
Description
Custom Speech-to-Text models
It is your responsibility not to use Custom Speech-to-Text models because they are not
compliant with Data Boundary for IL5.
What's next
Learn how to create an Assured Workloads folder
Understand Assured Workloads pricing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
