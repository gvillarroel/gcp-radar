---
title: "EU Data Boundary with Access Justifications \_|\_ Assured Workloads \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/eu-data-boundary-access-justifications
  title: "EU Data Boundary with Access Justifications \_|\_ Assured Workloads \_|\_\
    \ Google Cloud Documentation"
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
EU Data Boundary with Access Justifications
This page describes the set of controls that are applied on
EU Data Boundary with Access Justifications workloads in Assured Workloads. It provides
detailed information about
data residency ,
supported Google Cloud products and their API endpoints,
and any applicable restrictions or limitations on
those products.
The following additional information applies to EU Data Boundary with Access Justifications:
Data residency : The EU Data Boundary with Access Justifications control package sets data
location controls to support
EU-only regions . For more
information, see the
Google Cloud-wide organization policy constraints section.
Support : Technical support services for EU Data Boundary with Access Justifications workloads
are available with Enhanced or Premium Cloud Customer Care
subscriptions. EU Data Boundary with Access Justifications workloads support cases are routed to
EU personnel located in the EU. For more information, see
Getting support .
Pricing : The EU Data Boundary with Access Justifications control package is included in
Assured Workloads' Premium tier , which incurs a 5% additional
charge. For more information, see
Assured Workloads pricing .
Prerequisites
Verify that you meet and have completed the following prerequisites before
deploying workloads to EU Data Boundary with Access Justifications:
Create an EU Data Boundary with Access Justifications folder using Assured Workloads and
deploy your workloads only in that folder.
Don't change the default organization policy constraint values unless you
understand and are willing to accept the data residency risks that might
occur.
When accessing the Google Cloud console for EU Data Boundary with Access Justifications workloads,
you must use one of the following EU-specific
Jurisdictional Google Cloud console
URLs:
console.eu.cloud.google.com
console.eu.cloud.google for federated
identity users
Consider adopting the general security best practices provided in the
Google Cloud security best practices center .
Supported products and API endpoints
Unless otherwise noted, users can access all supported products through the Google Cloud console.
Restrictions or limitations that affect the features of a supported product, including those that
are enforced through
organization policy constraint settings ,
are listed in the following table.
If a product is not listed, that product is unsupported and has not met the control
requirements for EU Data Boundary with Access Justifications. Unsupported products are not recommended for use
without due diligence and a thorough understanding of your responsibilities in the shared responsibility model .
Before using an unsupported product, ensure that you are aware of and are willing to accept any
associated risks involved, such as negative impacts to data residency or data sovereignty.
Unsupported products may share an API service endpoint with supported products,
making them available to all users.
Supported product
API endpoints
Restrictions or limitations
Access Context Manager
accesscontextmanager.googleapis.com
None
Access Transparency
accessapproval.googleapis.com
None
Artifact Registry
artifactregistry.googleapis.com
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
Cloud Build
cloudbuild.googleapis.com
Affected features
Cloud Composer
composer.googleapis.com
None
Cloud DNS
dns.googleapis.com
None
Cloud HSM
cloudkms.googleapis.com
None
Cloud Interconnect
compute.googleapis.com
Affected features
Cloud Key Management Service (Cloud KMS)
cloudkms.googleapis.com
Organization policy constraints
Cloud Load Balancing
compute.googleapis.com
None
Cloud Logging
logging.googleapis.com
Affected features
Cloud Monitoring
monitoring.googleapis.com
Affected features
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
Organization policy constraints
Cloud Service Mesh
mesh.googleapis.com
meshca.googleapis.com
meshconfig.googleapis.com
trafficdirector.googleapis.com
networkservices.google.com
None
Cloud Storage
storage.googleapis.com
Affected features
and organization policy constraints
Cloud VPN
compute.googleapis.com
Affected features
Cloud Workstations
workstations.googleapis.com
None
Compute Engine
compute.googleapis.com
Affected features
and organization policy constraints
Connect
gkeconnect.googleapis.com
connectgateway.googleapis.com
None
Dataflow
dataflow.googleapis.com
datapipelines.googleapis.com
None
Dataplex Universal Catalog
dataplex.googleapis.com
datalineage.googleapis.com
Affected features
Managed Service for Apache Spark
dataproc-control.googleapis.com
dataproc.googleapis.com
Affected features
Filestore
file.googleapis.com
None
Firebase Security Rules
firebaserules.googleapis.com
None
Firestore
firestore.googleapis.com
None
GKE Hub
gkehub.googleapis.com
None
GKE Identity Service
anthosidentityservice.googleapis.com
None
Google Cloud Armor
compute.googleapis.com
networksecurity.googleapis.com
Affected features
Google Kubernetes Engine
container.googleapis.com
containersecurity.googleapis.com
Affected features
Identity and Access Management (IAM)
iam.googleapis.com
policytroubleshooter.googleapis.com
None
Identity-Aware Proxy (IAP)
iap.googleapis.com
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
Resource Manager
cloudresourcemanager.googleapis.com
None
Secret Manager
secretmanager.googleapis.com
None
Secure Source Manager
securesourcemanager.googleapis.com
None
Sensitive Data Protection
dlp.googleapis.com
None
Spanner
spanner.googleapis.com
Affected features
Speech-to-Text
speech.googleapis.com
None
VPC Service Controls
accesscontextmanager.googleapis.com
None
Virtual Private Cloud (VPC)
compute.googleapis.com
None
Restrictions and limitations
The following sections describe Google Cloud-wide or product-specific restrictions or limitations
for features, including any organization policy constraints that are set by default on
EU Data Boundary with Access Justifications folders. Other applicable organization policy constraints—even if
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
Affected Google Cloud-wide features
Feature
Description
Google Cloud console
To access the Google Cloud console when using the EU Data Boundary with Access Justifications control package,
you must use one of the following URLs:
console.eu.cloud.google.com
console.eu.cloud.google
for federated identity users
Google Cloud-wide organization policy constraints
The following
organization policy constraints
apply across Google Cloud.
Organization policy constraint
Description
gcp.resourceLocations
Set to the following locations in the allowedValues list:
europe-central2
europe-north1
europe-north2
europe-southwest1
europe-west1
europe-west10
europe-west12
europe-west3
europe-west4
europe-west8
europe-west9
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
aiplatform.googleapis.com
artifactregistry.googleapis.com
bigquery.googleapis.com
bigquerydatatransfer.googleapis.com
bigtable.googleapis.com
cloudfunctions.googleapis.com
composer.googleapis.com
compute.googleapis.com
container.googleapis.com
dataflow.googleapis.com
dataproc.googleapis.com
documentai.googleapis.com
integrations.googleapis.com
logging.googleapis.com
notebooks.googleapis.com
pubsub.googleapis.com
run.googleapis.com
secretmanager.googleapis.com
spanner.googleapis.com
sqladmin.googleapis.com
storage.googleapis.com
workstations.googleapis.com
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
connectors for EU Data Boundary with Access Justifications workloads.
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
Unsupported APIs
The following APIs are not supported by EU Data Boundary with Access Justifications:
The ListHotTablets API method of the
RPC Admin API processes and stores
technical data in an unsupported way. It's your responsibility to not use this method for
EU Data Boundary with Access Justifications.
The hotTablets.list API method of the
Rest Admin API processes and stores
technical data in an unsupported way. It's your responsibility to not use this method for
EU Data Boundary with Access Justifications.
Data Boost
This feature is disabled.
Split boundaries
Bigtable uses a small subset of row keys to define split boundaries, which may
include customer data and metadata. A split boundary in Bigtable denotes the
location where contiguous ranges of rows in a table are split into tablets.
These split boundaries are accessible by Google personnel for technical support and
debugging purposes, and are not subject to administrative access data controls in
Assured Workloads.
Cloud Build
Affected Cloud Build features
Feature
Description
Generating build provenance
This feature is unsupported and should not be used with EU Data Boundary with Access Justifications. Builds
configured with options.requestedVerifyOption: VERIFIED may fail due to
unsupported dependencies. To prevent build failures, remove this option from your
Cloud Build configuration.
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
Log-based alerts
This feature is disabled.
You cannot create log-based alerts in the Google Cloud console.
Shortened URLs for Logs Explorer queries
This feature is disabled.
You cannot create shortened URLs of queries in the Google Cloud console.
Saving queries in Logs Explorer
This feature is disabled.
You cannot save any queries in the Google Cloud console.
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
Log panel widgets in
Dashboards
This feature is disabled.
You cannot add a log panel to a dashboard.
Error reporting panel widgets
in Dashboards
This feature is disabled.
You cannot add an error reporting panel to a dashboard.
Filter in
EventAnnotation
for Dashboards
This feature is disabled.
Filter of
EventAnnotation
cannot be set in a dashboard.
SqlCondition
in alertPolicies
This feature is disabled.
You cannot add a
SqlCondition
to an
alertPolicy .
Cloud Run
Affected Cloud Run features
Feature
Description
Unsupported features
The following Cloud Run features aren't supported:
Cloud Trace integration
Cloud Run functions
Eventarc triggers
Cloud SQL
Cloud SQL organization policy constraints
Organization policy constraint
Description
sql.restrictNoncompliantDiagnosticDataAccess
Set to True .
Applies additional data sovereignty and supportability controls to Cloud SQL
resources.
Changing this value might affect your workload's data residency or data sovereignty.
sql.restrictNoncompliantResourceCreation
Set to True .
Applies additional data sovereignty controls to prevent creation of non-compliant
Cloud SQL resources.
Changing this value might affect your workload's data residency or data sovereignty.
Cloud Storage
Affected Cloud Storage features
Feature
Description
Google Cloud console
It is your responsibility to use the
Jurisdictional Google Cloud console
for EU Data Boundary with Access Justifications. The Jurisdictional console prevents uploading and downloading
Cloud Storage objects. To upload and download Cloud Storage objects, see the following
Compliant API endpoints row.
Compliant API endpoints
It is your responsibility to use one of the in-scope regional endpoints with
Cloud Storage. For more information, see
Cloud Storage locations .
Cloud Storage organization policy constraints
Organization policy constraint
Description
storage.restrictAuthTypes
Set to prevent authentication using hash-based message authentication code (HMAC). The
following types are specified in this constraint value:
USER_ACCOUNT_HMAC_SIGNED_REQUESTS
SERVICE_ACCOUNT_HMAC_SIGNED_REQUESTS
By default, HMAC keys are prevented from authenticating to Cloud Storage resources for
EU Data Boundary with Access Justifications workloads. HMAC keys affect data sovereignty because they can be
used to access customer data without customer knowledge. See
HMAC keys in the Cloud Storage docs.
Changing this value may affect data sovereignty in your workload; we highly recommend
keeping the set value.
storage.uniformBucketLevelAccess
Set to True .
Access to new buckets is managed using IAM policies instead of
Cloud Storage Access control lists (ACLs) .
This constraint provides fine-grained permissions for buckets and their contents.
If a bucket is created while this constraint is enabled, access to it can never be managed
by using ACLs. In other words, the access control method for a bucket is permanently set to
using IAM policies instead of Cloud Storage ACLs.
Cloud VPN
Affected Cloud VPN features
Feature
Description
Google Cloud console
Cloud VPN features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
VPN endpoints
You must use only Cloud VPN endpoints that are located in an in-scope
region . Ensure that your VPN gateway is configured for use
in an in-scope region only.
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
Google Cloud console
The following Compute Engine features are not available in the Google Cloud console. Use
the API or Google Cloud CLI instead:
Health checks
Network endpoint groups
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
compute.enableComplianceMemoryProtection
Set to True .
Disables some internal diagnostic features to provide additional protection of memory
contents when an infrastructure fault occurs.
Changing this value may affect your workload's data residency or data sovereignty.
compute.disableGlobalCloudArmorPolicy
Set to True .
Disables the creation of new global
Google Cloud Armor security policies and the
addition or modification of rules to existing global Google Cloud Armor security policies. This
constraint doesn't restrict the removal of rules or the ability to remove or change the
description and listing of global Google Cloud Armor security policies. Regional Google Cloud Armor
security policies are unaffected by this constraint. All global and regional security
policies that exist prior to the enforcement of this constraint remain in effect.
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
compute.disableSshInBrowser
Set to True .
Disables the SSH-in-browser tool in the Google Cloud console for VMs that use OS Login and
App Engine flexible environment environment VMs.
Changing this value may affect your workload's data residency or data sovereignty.
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
Data Quality and Data Profile Scan
Export of Data Quality Scan results is not supported.
Discovery
This feature is disabled. You cannot run the Discovery scans to extract metadata from your
data.
Data insights
This feature is disabled. You cannot generate data insights for your catalogs.
Lakes and Zones
This feature is disabled. You cannot manage lakes, zones and tasks.
Managed Service for Apache Spark
Affected Managed Service for Apache Spark features
Feature
Description
Google Cloud console
Managed Service for Apache Spark does not currently support the
Jurisdictional Google Cloud console .
To enforce data residency, ensure that you use either the Google Cloud CLI or the API when
using Managed Service for Apache Spark.
Google Cloud Armor
Affected Google Cloud Armor features
Feature
Description
Globally scoped security policies
This feature is disabled by the compute.disableGlobalCloudArmorPolicy
organization policy constraint.
Google Kubernetes Engine
Affected Google Kubernetes Engine features
Feature
Description
Cluster resource restrictions
Ensure that your cluster configuration does not use resources for services that are
unsupported in EU Data Boundary with Access Justifications. For example, the following configuration is invalid
because it requires enabling or using an unsupported service:
set `binaryAuthorization.evaluationMode` to `enabled`
Google Kubernetes Engine organization policy constraints
Organization policy constraint
Description
container.restrictNoncompliantDiagnosticDataAccess
Set to True .
Disables aggregate analysis of kernel issues, which is required to maintain sovereign
control of a workload.
Changing this value may affect your workload's data residency or data sovereignty.
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
Understand Assured Workloads pricing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
