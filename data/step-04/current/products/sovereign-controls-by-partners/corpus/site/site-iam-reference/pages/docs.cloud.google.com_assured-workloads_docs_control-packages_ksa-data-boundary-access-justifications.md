---
title: "Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications \_\
  |\_ Assured Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/getting-support
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/ksa-data-boundary-access-justifications
  title: "Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications \_\
    |\_ Assured Workloads \_|\_ Google Cloud Documentation"
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
Kingdom of Saudi Arabia (KSA) Data Boundary with Access Justifications
This page describes the set of controls that are applied on
KSA Data Boundary with Access Justifications workloads in Assured Workloads. It provides
detailed information about
data residency ,
supported Google Cloud products and their API endpoints,
and any applicable restrictions or limitations on
those products.
Important: The KSA Data Boundary with Access Justifications control package should only be
used by Assured Workloads customers whose billing address—whether
a business, residence, or domicile—is based outside of KSA.
The following additional information applies to KSA Data Boundary with Access Justifications:
Data residency : The KSA Data Boundary with Access Justifications control package sets data
location controls to support
KSA-only regions . For more
information, see the Google Cloud-wide organization policy
constraints section.
Support : Technical support services for KSA Data Boundary with Access Justifications workloads
are available with Standard, Enhanced, or Premium Cloud Customer Care
subscriptions. KSA Data Boundary with Access Justifications workloads support cases are routed to
global support personnel. For more information, see
Getting support .
Pricing : The KSA Data Boundary with Access Justifications control package is included in
Assured Workloads' Free tier , which incurs no additional charges.
For more information, see
Assured Workloads pricing .
Prerequisites
Verify that you meet and have completed the following prerequisites before
deploying workloads to KSA Data Boundary with Access Justifications:
Create an KSA Data Boundary with Access Justifications folder using Assured Workloads and
deploy your workloads only in that folder.
Don't change the default organization policy constraint values unless you
understand and are willing to accept the data residency risks that might
occur.
When accessing the Google Cloud console for KSA Data Boundary with Access Justifications workloads,
you must use one of the following KSA-specific
Jurisdictional Google Cloud console
URLs:
console.sa.cloud.google.com
console.sa.cloud.google for federated
identity users
Use only the specified regional endpoints for services that offer them. For
more information, see
in-scope KSA Data Boundary with Access Justifications services .
Consider adopting the general security best practices provided in the
Google Cloud security best practices center .
Supported products and API endpoints
Unless otherwise noted, users can access all supported products through the Google Cloud console.
Restrictions or limitations that affect the features of a supported product, including those that
are enforced through
organization policy constraint settings ,
are listed in the following table.
If a product is not listed, that product is unsupported and has not met the control
requirements for KSA Data Boundary with Access Justifications. Unsupported products are not recommended for use
without due diligence and a thorough understanding of your responsibilities in the shared responsibility model .
Before using an unsupported product, ensure that you are aware of and are willing to accept any
associated risks involved, such as negative impacts to data residency or data sovereignty.
Unsupported products may share an API service endpoint with supported products,
making them available to all users.
Important: Services that interact with Customer Data in their API operations
provide regional API endpoints .
Use these endpoints instead of the service's global API endpoint to maintain
KSA Data Boundary with Access Justifications compliance. For services whose API operations don't
interact with Customer Data, global API endpoints are allowed because they are
exempt from KSA Data Boundary with Access Justifications requirements. See
Data residency for more information
about Customer Data and Service Data.
Supported product
API endpoints
Restrictions or limitations
Access Approval
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
accessapproval.googleapis.com
None
Access Context Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
accesscontextmanager.googleapis.com
None
Artifact Registry
Regional API endpoints:
artifactregistry.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
artifactregistry.googleapis.com
None
BigQuery
Regional API endpoints:
bigquery.me-central2.rep.googleapis.com
bigqueryconnection.me-central2.rep.googleapis.com
bigqueryreservation.me-central2.rep.googleapis.com
bigquerystorage.me-central2.rep.googleapis.com
bigquerydatatransfer.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
bigquery.googleapis.com
bigqueryconnection.googleapis.com
bigquerydatapolicy.googleapis.com
bigqueryreservation.googleapis.com
bigquerystorage.googleapis.com
None
Bigtable
Regional API endpoints:
bigtable.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
bigtable.googleapis.com
bigtableadmin.googleapis.com
Affected features
Certificate Authority Service
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
privateca.googleapis.com
None
Cloud Build
Regional API endpoints:
cloudbuild.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudbuild.googleapis.com
None
Cloud DNS
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
dns.googleapis.com
None
Cloud HSM
Regional API endpoints:
cloudkms.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudkms.googleapis.com
None
Cloud Interconnect
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
Cloud Key Management Service (Cloud KMS)
Regional API endpoints:
cloudkms.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudkms.googleapis.com
None
Cloud Load Balancing
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Cloud Logging
Regional API endpoints:
logging.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
logging.googleapis.com
Affected features
Cloud Monitoring
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
monitoring.googleapis.com
Affected features
Cloud NAT
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Cloud Router
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Cloud Run
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
run.googleapis.com
Affected features
Cloud SQL
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
sqladmin.googleapis.com
Organization policy constraints
Cloud Service Mesh
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
mesh.googleapis.com
meshconfig.googleapis.com
trafficdirector.googleapis.com
networkservices.google.com
networksecurity.googleapis.com
None
Cloud Storage
Regional API endpoints:
storage.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
storage.googleapis.com
Affected features
and organization policy constraints
Cloud VPN
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
Cloud Workstations
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
workstations.googleapis.com
None
Compute Engine
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
and organization policy constraints
Connect
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
gkeconnect.googleapis.com
connectgateway.googleapis.com
None
Dataflow
Regional API endpoints:
dataflow.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dataflow.googleapis.com
datapipelines.googleapis.com
None
Knowledge Catalog
Regional API endpoints:
dataplex.me-central2.rep.googleapis.com
datalineage.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dataplex.googleapis.com
datalineage.googleapis.com
Affected features
Managed Service for Apache Spark
Regional API endpoints:
dataproc.me-central2.rep.googleapis.com
dataproc-control.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dataproc-control.googleapis.com
dataproc.googleapis.com
None
Essential Contacts
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
essentialcontacts.googleapis.com
None
Filestore
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
file.googleapis.com
None
Firebase Security Rules
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
firebaserules.googleapis.com
None
GKE Hub
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
gkehub.googleapis.com
None
GKE Identity Service
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
anthosidentityservice.googleapis.com
None
Google Cloud Armor
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
Google Cloud console
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
N/A
None
Google Kubernetes Engine
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
container.googleapis.com
containersecurity.googleapis.com
Organization policy constraints
Identity and Access Management (IAM)
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
iam.googleapis.com
policytroubleshooter.googleapis.com
None
Identity-Aware Proxy (IAP)
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
iap.googleapis.com
None
Memorystore for Redis
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
redis.googleapis.com
None
Network Connectivity Center
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
networkconnectivity.googleapis.com
None
Organization Policy Service
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
orgpolicy.googleapis.com
None
Persistent Disk
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Personalized Service Health
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
servicehealth.googleapis.com
None
Pub/Sub
Regional API endpoints:
pubsub.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
pubsub.googleapis.com
Organization policy constraints
Resource Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
cloudresourcemanager.googleapis.com
None
Secret Manager
Regional API endpoints:
secretmanager.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
secretmanager.googleapis.com
None
Secure Source Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
securesourcemanager.googleapis.com
None
Sensitive Data Protection
Regional API endpoints:
dlp.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dlp.googleapis.com
None
Service Directory
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
servicedirectory.googleapis.com
None
Spanner
Regional API endpoints:
spanner.me-central2.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
spanner.googleapis.com
Organization policy constraints
VPC Service Controls
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
accesscontextmanager.googleapis.com
None
Virtual Private Cloud (VPC)
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
servicenetworking.googleapis.com
None
Restrictions and limitations
The following sections describe Google Cloud-wide or product-specific restrictions or limitations
for features, including any organization policy constraints that are set by default on
KSA Data Boundary with Access Justifications folders. Other applicable organization policy constraints—even if
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
To access the Google Cloud console when using the KSA Data Boundary with Access Justifications control package,
you must use one of the following URLs:
console.sa.cloud.google.com
console.sa.cloud.google
for federated identity users
Google Cloud-wide organization policy constraints
The following
organization policy constraints
apply across Google Cloud.
Organization policy constraint
Description
gcp.resourceLocations
Set to the following locations in the allowedValues list:
me-central2
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
for KSA Data Boundary with Access Justifications. The Jurisdictional console prevents uploading and downloading
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
KSA Data Boundary with Access Justifications workloads. HMAC keys affect data sovereignty because they can be
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
Google Cloud console
The following Compute Engine features are not available in the Google Cloud console. Use
the API or Google Cloud CLI instead:
Health checks
Network endpoint groups
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
Knowledge Catalog
Knowledge Catalog features
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
Google Cloud Armor
Affected Google Cloud Armor features
Feature
Description
Globally scoped security policies
This feature is disabled by the compute.disableGlobalCloudArmorPolicy
organization policy constraint.
Google Kubernetes Engine
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
pubsub.enforceInTransitRegions
Set to True .
Ensures that Customer Data transits only within the allowed regions specified in the message
storage policy for the Pub/Sub topic.
Changing this value might affect your workload's data residency or data sovereignty.
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
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
