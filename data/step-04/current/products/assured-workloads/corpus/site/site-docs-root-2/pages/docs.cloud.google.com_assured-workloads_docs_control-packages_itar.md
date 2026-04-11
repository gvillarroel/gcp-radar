---
title: "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_ Assured\
  \ Workloads \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/assured-workloads/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/assured-workloads/docs/control-packages/itar
  title: "Data Boundary for International Traffic in Arms Regulations (ITAR) \_|\_\
    \ Assured Workloads \_|\_ Google Cloud Documentation"
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
Data Boundary for International Traffic in Arms Regulations (ITAR)
Important: Before following the guidance on this page, you should seek
independent legal advice relating to your responsibilities under
ITAR. Nothing in this document is intended to provide you
with or should be used as a substitute for legal advice.
This page describes the set of controls that are applied on
ITAR workloads in Assured Workloads. It provides
detailed information about
data residency ,
supported Google Cloud products and their API endpoints,
and any applicable restrictions or limitations on
those products. The following additional information applies to
ITAR:
Data residency : The ITAR control package sets data
location controls to support
US-only regions . See the
Google Cloud-wide organization policy constraints section
for more information.
Support : Technical support services for ITAR workloads
are available with Enhanced or Premium Cloud Customer Care
subscriptions. ITAR workloads support cases are routed to
US Persons located in the US. For more information, see
Getting support .
Pricing : The ITAR control package is included in
Assured Workloads' Premium tier , which incurs an 20% additional
charge. See Assured Workloads pricing
for more information.
Prerequisites
To remain compliant as a user of the ITAR control package,
verify that you satisfy and adhere to the following prerequisites:
Create an ITAR folder using Assured Workloads and
deploy your ITAR workloads only in that folder.
Only enable and use
in-scope ITAR services for
ITAR workloads.
Don't change the default organization policy constraint values unless you
understand and are willing to accept the data residency risks that might
occur.
When accessing the Google Cloud console for ITAR workloads,
you must use one of the following
Jurisdictional Google Cloud console
URLs:
console.us.cloud.google.com
console.us.cloud.google for federated
identity users
When connecting to Google Cloud service endpoints, you must use
regional endpoints for services that
offer them. In addition:
When connecting to Google Cloud service endpoints from non-Google Cloud
VMs —such as on-premises or other cloud providers' VMs— you
must use one of the available
private access options
that support connections to non-Google Cloud VMs to route the
non-Google Cloud traffic into Google Cloud.
When connecting to Google Cloud service endpoints from Google Cloud VMs,
you can use any of the available
private access options .
When connecting to Google Cloud VMs that have been exposed with external IP
addresses, refer to
Access APIs from VMs with external IP addresses .
For all services used in an ITAR folder, don't store
technical data in the following user-defined or security configuration
information types:
Error messages
Console output
Attribute data
Service configuration data
Network packet headers
Resource identifiers
Data labels
Use only the specified regional endpoints for services that offer them. For
more information, see
in-scope ITAR services .
Consider adopting the general security best practices provided in the
Google Cloud security best practices center .
Supported products and API endpoints
Unless otherwise noted, users can access all supported products through the Google Cloud console.
Restrictions or limitations that affect the features of a supported product, including those that
are enforced through
organization policy constraint settings ,
are listed in the following table.
If a product is not listed, that product is unsupported and has not met the control
requirements for ITAR. Unsupported products are not recommended for use
without due diligence and a thorough understanding of your responsibilities in the shared responsibility model .
Before using an unsupported product, ensure that you are aware of and are willing to accept any
associated risks involved, such as negative impacts to data residency or data sovereignty.
Unsupported products may share an API service endpoint with supported products,
making them available to all users.
Important: Services that interact with Customer Data in their API operations
provide
regional API endpoints .
Use these endpoints instead of the service's global API endpoint to maintain
ITAR compliance. For services whose API operations don't
interact with Customer Data, global API endpoints are allowed as they are exempt
from ITAR requirements. See
Data residency for more information
about Customer Data and Service Data.
Supported product
ITAR-compliant API endpoints
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
AlloyDB for PostgreSQL
Regional API endpoints:
alloydb.us-central1.rep.googleapis.com
alloydb.us-central2.rep.googleapis.com
alloydb.us-east1.rep.googleapis.com
alloydb.us-east4.rep.googleapis.com
alloydb.us-east5.rep.googleapis.com
alloydb.us-south1.rep.googleapis.com
alloydb.us-west1.rep.googleapis.com
alloydb.us-west2.rep.googleapis.com
alloydb.us-west3.rep.googleapis.com
alloydb.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
alloydb.googleapis.com
None
Artifact Registry
Regional API endpoints:
artifactregistry.us-central1.rep.googleapis.com
artifactregistry.us-central2.rep.googleapis.com
artifactregistry.us-east1.rep.googleapis.com
artifactregistry.us-east4.rep.googleapis.com
artifactregistry.us-east5.rep.googleapis.com
artifactregistry.us-east7.rep.googleapis.com
artifactregistry.us-south1.rep.googleapis.com
artifactregistry.us-west1.rep.googleapis.com
artifactregistry.us-west2.rep.googleapis.com
artifactregistry.us-west3.rep.googleapis.com
artifactregistry.us-west4.rep.googleapis.com
artifactregistry.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
artifactregistry.googleapis.com
None
Backup for GKE
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
gkebackup.googleapis.com
None
BigQuery
Regional API endpoints:
bigquery.us-central1.rep.googleapis.com
bigquery.us-central2.rep.googleapis.com
bigquery.us-east1.rep.googleapis.com
bigquery.us-east4.rep.googleapis.com
bigquery.us-east5.rep.googleapis.com
bigquery.us-east7.rep.googleapis.com
bigquery.us-south1.rep.googleapis.com
bigquery.us-west1.rep.googleapis.com
bigquery.us-west2.rep.googleapis.com
bigquery.us-west3.rep.googleapis.com
bigquery.us-west4.rep.googleapis.com
bigquery.us-west8.rep.googleapis.com
bigquerydatatransfer.us-central1.rep.googleapis.com
bigquerydatatransfer.us-central2.rep.googleapis.com
bigquerydatatransfer.us-east1.rep.googleapis.com
bigquerydatatransfer.us-east4.rep.googleapis.com
bigquerydatatransfer.us-east5.rep.googleapis.com
bigquerydatatransfer.us-east7.rep.googleapis.com
bigquerydatatransfer.us-south1.rep.googleapis.com
bigquerydatatransfer.us-west1.rep.googleapis.com
bigquerydatatransfer.us-west2.rep.googleapis.com
bigquerydatatransfer.us-west3.rep.googleapis.com
bigquerydatatransfer.us-west4.rep.googleapis.com
bigquerydatatransfer.us-west8.rep.googleapis.com
bigquerymigration.us-central1.rep.googleapis.com
bigquerymigration.us-central2.rep.googleapis.com
bigquerymigration.us-east1.rep.googleapis.com
bigquerymigration.us-east4.rep.googleapis.com
bigquerymigration.us-east5.rep.googleapis.com
bigquerymigration.us-east7.rep.googleapis.com
bigquerymigration.us-south1.rep.googleapis.com
bigquerymigration.us-west1.rep.googleapis.com
bigquerymigration.us-west2.rep.googleapis.com
bigquerymigration.us-west3.rep.googleapis.com
bigqueryreservation.us-central1.rep.googleapis.com
bigqueryreservation.us-central2.rep.googleapis.com
bigqueryreservation.us-east1.rep.googleapis.com
bigqueryreservation.us-east4.rep.googleapis.com
bigqueryreservation.us-east5.rep.googleapis.com
bigqueryreservation.us-east7.rep.googleapis.com
bigqueryreservation.us-south1.rep.googleapis.com
bigqueryreservation.us-west1.rep.googleapis.com
bigqueryreservation.us-west2.rep.googleapis.com
bigqueryreservation.us-west3.rep.googleapis.com
bigqueryreservation.us-west4.rep.googleapis.com
bigqueryreservation.us-west8.rep.googleapis.com
bigquerystorage.us-central1.rep.googleapis.com
bigquerystorage.us-central2.rep.googleapis.com
bigquerystorage.us-east1.rep.googleapis.com
bigquerystorage.us-east4.rep.googleapis.com
bigquerystorage.us-east5.rep.googleapis.com
bigquerystorage.us-east7.rep.googleapis.com
bigquerystorage.us-south1.rep.googleapis.com
bigquerystorage.us-west1.rep.googleapis.com
bigquerystorage.us-west2.rep.googleapis.com
bigquerystorage.us-west3.rep.googleapis.com
bigquerystorage.us-west4.rep.googleapis.com
bigquerystorage.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
bigquery.googleapis.com
bigqueryconnection.googleapis.com
bigquerydatapolicy.googleapis.com
bigquerydatatransfer.googleapis.com
bigquerymigration.googleapis.com
bigqueryreservation.googleapis.com
bigquerystorage.googleapis.com
Affected features
Bigtable
Regional API endpoints:
bigtable.us-central1.rep.googleapis.com
bigtable.us-central2.rep.googleapis.com
bigtable.us-east1.rep.googleapis.com
bigtable.us-east4.rep.googleapis.com
bigtable.us-east5.rep.googleapis.com
bigtable.us-south1.rep.googleapis.com
bigtable.us-west1.rep.googleapis.com
bigtable.us-west2.rep.googleapis.com
bigtable.us-west3.rep.googleapis.com
bigtable.us-west4.rep.googleapis.com
bigtable.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
bigtable.googleapis.com
bigtableadmin.googleapis.com
None
Certificate Authority Service
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
privateca.googleapis.com
None
Certificate Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
certificatemanager.googleapis.com
None
Cloud Build
Regional API endpoints:
cloudbuild.us-central1.rep.googleapis.com
cloudbuild.us-central2.rep.googleapis.com
cloudbuild.us-east1.rep.googleapis.com
cloudbuild.us-east4.rep.googleapis.com
cloudbuild.us-east5.rep.googleapis.com
cloudbuild.us-south1.rep.googleapis.com
cloudbuild.us-west1.rep.googleapis.com
cloudbuild.us-west2.rep.googleapis.com
cloudbuild.us-west3.rep.googleapis.com
cloudbuild.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudbuild.googleapis.com
None
Cloud Composer
Regional API endpoints:
composer.us-central1.rep.googleapis.com
composer.us-east1.rep.googleapis.com
composer.us-east4.rep.googleapis.com
composer.us-east5.rep.googleapis.com
composer.us-east7.rep.googleapis.com
composer.us-south1.rep.googleapis.com
composer.us-west1.rep.googleapis.com
composer.us-west2.rep.googleapis.com
composer.us-west3.rep.googleapis.com
composer.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
composer.googleapis.com
None
Cloud DNS
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
dns.googleapis.com
Affected features
Cloud External Key Manager (Cloud EKM)
Regional API endpoints:
cloudkms.us-central1.rep.googleapis.com
cloudkms.us-central2.rep.googleapis.com
cloudkms.us-east1.rep.googleapis.com
cloudkms.us-east4.rep.googleapis.com
cloudkms.us-east5.rep.googleapis.com
cloudkms.us-east7.rep.googleapis.com
cloudkms.us-south1.rep.googleapis.com
cloudkms.us-west1.rep.googleapis.com
cloudkms.us-west2.rep.googleapis.com
cloudkms.us-west3.rep.googleapis.com
cloudkms.us-west4.rep.googleapis.com
cloudkms.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudkms.googleapis.com
None
Cloud HSM
Regional API endpoints:
cloudkms.us-central1.rep.googleapis.com
cloudkms.us-central2.rep.googleapis.com
cloudkms.us-east1.rep.googleapis.com
cloudkms.us-east4.rep.googleapis.com
cloudkms.us-east5.rep.googleapis.com
cloudkms.us-east7.rep.googleapis.com
cloudkms.us-south1.rep.googleapis.com
cloudkms.us-west1.rep.googleapis.com
cloudkms.us-west2.rep.googleapis.com
cloudkms.us-west3.rep.googleapis.com
cloudkms.us-west4.rep.googleapis.com
cloudkms.us-west8.rep.googleapis.com
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
cloudkms.us-central1.rep.googleapis.com
cloudkms.us-central2.rep.googleapis.com
cloudkms.us-east1.rep.googleapis.com
cloudkms.us-east4.rep.googleapis.com
cloudkms.us-east5.rep.googleapis.com
cloudkms.us-east7.rep.googleapis.com
cloudkms.us-south1.rep.googleapis.com
cloudkms.us-west1.rep.googleapis.com
cloudkms.us-west2.rep.googleapis.com
cloudkms.us-west3.rep.googleapis.com
cloudkms.us-west4.rep.googleapis.com
cloudkms.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudkms.googleapis.com
None
Cloud Load Balancing
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
Cloud Logging
Regional API endpoints:
logging.us-central1.rep.googleapis.com
logging.us-central2.rep.googleapis.com
logging.us-east1.rep.googleapis.com
logging.us-east4.rep.googleapis.com
logging.us-east5.rep.googleapis.com
logging.us-east7.rep.googleapis.com
logging.us-south1.rep.googleapis.com
logging.us-west1.rep.googleapis.com
logging.us-west2.rep.googleapis.com
logging.us-west3.rep.googleapis.com
logging.us-west4.rep.googleapis.com
logging.us-west8.rep.googleapis.com
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
Affected features
Cloud OS Login API
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
oslogin.googleapis.com
None
Cloud Router
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
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
Affected features
Cloud Service Mesh
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
mesh.googleapis.com
meshconfig.googleapis.com
trafficdirector.googleapis.com
networkservices.googleapis.com
None
Cloud Storage
Regional API endpoints:
storage.us-central1.rep.googleapis.com
storage.us-central2.rep.googleapis.com
storage.us-east1.rep.googleapis.com
storage.us-east4.rep.googleapis.com
storage.us-east5.rep.googleapis.com
storage.us-east7.rep.googleapis.com
storage.us-south1.rep.googleapis.com
storage.us-west1.rep.googleapis.com
storage.us-west2.rep.googleapis.com
storage.us-west3.rep.googleapis.com
storage.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
storage.googleapis.com
Affected features
Cloud VPN
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
Compute Engine
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
Affected features
and organization policy constraints
Dataflow
Regional API endpoints:
dataflow.us-central1.rep.googleapis.com
dataflow.us-central2.rep.googleapis.com
dataflow.us-east1.rep.googleapis.com
dataflow.us-east4.rep.googleapis.com
dataflow.us-east5.rep.googleapis.com
dataflow.us-east7.rep.googleapis.com
dataflow.us-south1.rep.googleapis.com
dataflow.us-west1.rep.googleapis.com
dataflow.us-west2.rep.googleapis.com
dataflow.us-west3.rep.googleapis.com
dataflow.us-west4.rep.googleapis.com
dataflow.us-west8.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dataflow.googleapis.com
datapipelines.googleapis.com
None
Dataplex Universal Catalog
Regional API endpoints:
dataplex.us-central1.rep.googleapis.com
dataplex.us-central2.rep.googleapis.com
dataplex.us-east1.rep.googleapis.com
dataplex.us-east4.rep.googleapis.com
dataplex.us-east5.rep.googleapis.com
dataplex.us-south1.rep.googleapis.com
dataplex.us-west1.rep.googleapis.com
dataplex.us-west2.rep.googleapis.com
dataplex.us-west3.rep.googleapis.com
dataplex.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
dataplex.googleapis.com
datalineage.googleapis.com
Affected features
Managed Service for Apache Spark
Regional API endpoints:
dataproc.us-central1.rep.googleapis.com
dataproc.us-central2.rep.googleapis.com
dataproc.us-east1.rep.googleapis.com
dataproc.us-east4.rep.googleapis.com
dataproc.us-east5.rep.googleapis.com
dataproc.us-east7.rep.googleapis.com
dataproc.us-south1.rep.googleapis.com
dataproc.us-west1.rep.googleapis.com
dataproc.us-west2.rep.googleapis.com
dataproc.us-west3.rep.googleapis.com
dataproc.us-west4.rep.googleapis.com
dataproc.us-west8.rep.googleapis.com
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
External passthrough Network Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
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
Firestore
Regional API endpoints:
firestore.us-central1.rep.googleapis.com
firestore.us-east1.rep.googleapis.com
firestore.us-east4.rep.googleapis.com
firestore.us-east5.rep.googleapis.com
firestore.us-south1.rep.googleapis.com
firestore.us-west1.rep.googleapis.com
firestore.us-west2.rep.googleapis.com
firestore.us-west3.rep.googleapis.com
firestore.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
firestore.googleapis.com
None
GKE Hub (fleets)
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
networksecurity.googleapis.com
Affected features
Google Kubernetes Engine
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
container.googleapis.com
containersecurity.googleapis.com
Affected features
and organization policy constraints
Identity and Access Management (IAM)
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
iam.googleapis.com
None
Identity-Aware Proxy (IAP)
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
iap.googleapis.com
None
Internal passthrough Network Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Jurisdictional Google Cloud console
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
N/A
None
Key Access Justifications
Regional API endpoints:
cloudkms.us-central1.rep.googleapis.com
cloudkms.us-central2.rep.googleapis.com
cloudkms.us-east1.rep.googleapis.com
cloudkms.us-east4.rep.googleapis.com
cloudkms.us-east5.rep.googleapis.com
cloudkms.us-south1.rep.googleapis.com
cloudkms.us-west1.rep.googleapis.com
cloudkms.us-west2.rep.googleapis.com
cloudkms.us-west3.rep.googleapis.com
cloudkms.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
cloudekm.googleapis.com
cloudkms.googleapis.com
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
Affected features
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
Pub/Sub
Regional API endpoints:
pubsub.us-central1.rep.googleapis.com
pubsub.us-central2.rep.googleapis.com
pubsub.us-east1.rep.googleapis.com
pubsub.us-east4.rep.googleapis.com
pubsub.us-east5.rep.googleapis.com
pubsub.us-south1.rep.googleapis.com
pubsub.us-west1.rep.googleapis.com
pubsub.us-west2.rep.googleapis.com
pubsub.us-west3.rep.googleapis.com
pubsub.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
pubsub.googleapis.com
Organization policy constraints
Regional external Application Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Regional external proxy Network Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Regional internal Application Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Regional internal proxy Network Load Balancer
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
compute.googleapis.com
None
Resource Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
cloudresourcemanager.googleapis.com
None
Secret Manager
Regional API endpoints:
secretmanager.us-central1.rep.googleapis.com
secretmanager.us-central2.rep.googleapis.com
secretmanager.us-east1.rep.googleapis.com
secretmanager.us-east4.rep.googleapis.com
secretmanager.us-east5.rep.googleapis.com
secretmanager.us-east7.rep.googleapis.com
secretmanager.us-south1.rep.googleapis.com
secretmanager.us-west1.rep.googleapis.com
secretmanager.us-west2.rep.googleapis.com
secretmanager.us-west3.rep.googleapis.com
secretmanager.us-west4.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
Not available
None
Secure Source Manager
Regional API endpoints:
securesourcemanager.us-central1.rep.googleapis.com
securesourcemanager.us-east1.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
securesourcemanager.googleapis.com
None
Security Command Center Premium
Regional API endpoints:
securitycenter.us.rep.googleapis.com
Locational API endpoints are not supported.
Global API endpoints:
securitycenter.googleapis.com
securitycentermanagement.googleapis.com
securityposture.googleapis.com
websecurityscanner.googleapis.com
Affected features
Sensitive Data Protection
Regional API endpoints:
dlp.us-central1.rep.googleapis.com
dlp.us-east1.rep.googleapis.com
dlp.us-east4.rep.googleapis.com
dlp.us-east5.rep.googleapis.com
dlp.us-south1.rep.googleapis.com
dlp.us-west1.rep.googleapis.com
dlp.us-west2.rep.googleapis.com
dlp.us-west3.rep.googleapis.com
dlp.us-west4.rep.googleapis.com
dlp.us-west8.rep.googleapis.com
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
VM Manager
Regional API endpoints are not supported.
Locational API endpoints are not supported.
Global API endpoints:
osconfig.googleapis.com
None
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
Affected features
Restrictions and limitations
The following sections describe Google Cloud-wide or product-specific restrictions or limitations
for features, including any organization policy constraints that are set by default on
ITAR folders. Other applicable organization policy constraints—even if
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
To access the Google Cloud console when using the ITAR control package,
you must use one of the following URLs:
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
bigquery.googleapis.com
bigquerydatatransfer.googleapis.com
compute.googleapis.com
container.googleapis.com
storage.googleapis.com
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
The following BigQuery APIs are ITAR-compliant:
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
BigQuery is ITAR-compliant for all BigQuery
US regions except the US multi-region. ITAR compliance cannot
be guaranteed if a dataset is created in a US multi-region, non-US region, or non-US
multi-region. It is your responsibility to specify an
ITAR-compliant region when creating BigQuery datasets.
Queries on ITAR datasets from non-ITAR projects
BigQuery doesn't prevent ITAR datasets from being
queried from non-ITAR projects. Ensure that any query that uses
a read or a join operation on ITAR technical data is in an
ITAR-compliant folder.
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
connectors for ITAR workloads.
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
Cloud DNS
Affected Cloud DNS features
Feature
Description
Google Cloud console
Cloud DNS features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
Cloud Interconnect
Affected Cloud Interconnect features
Feature
Description
Google Cloud console
Cloud Interconnect features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
High-availability (HA) VPN
You must enable high-availability (HA) VPN functionality when using Cloud Interconnect
with Cloud VPN. Additionally, you must adhere to the encryption and regionalization
requirements listed in the Affected Cloud VPN features section.
Cloud Load Balancing
Affected Cloud Load Balancing features
Feature
Description
Google Cloud console
Cloud Load Balancing features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
Regional load balancers
You must use only regional load balancers with ITAR. For more
information about configuring regional load balancers, see the following pages:
Internal Application Load Balancer
Regional external Application Load Balancer
Internal passthrough Network Load Balancer
External passthrough Network Load Balancer
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
Cloud NAT
Affected Cloud NAT features
Feature
Description
Google Cloud console
Cloud NAT features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
Cloud Router
Affected Cloud Router features
Feature
Description
Google Cloud console
Cloud Router features are not available in the Google Cloud console.
Use the
API or Google Cloud CLI
instead.
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
Affected Cloud SQL features
Feature
Description
Exporting to CSV
Don't use the
Exporting to CSV
feature as it's not compliant with ITAR. This feature is disabled in
the Google Cloud console.
executeSql
Don't use the executeSql method of the Cloud SQL API as it's not compliant
with ITAR.
Cloud Storage
Affected Cloud Storage features
Feature
Description
Google Cloud console
To maintain ITAR compliance, it is your responsibility to use the
Jurisdictional Google Cloud console .
The Jurisdictional console prevents uploading and downloading Cloud Storage objects. To
upload and download Cloud Storage objects, see the
Compliant API endpoints row in this section.
Compliant API endpoints
You must use one of the ITAR-compliant regional endpoints with Cloud Storage. See
Cloud Storage regional endpoints and
Cloud Storage locations for more information.
Restrictions
You must use Cloud Storage regional endpoints to be ITAR-compliant. For more
information about Cloud Storage regional endpoints for ITAR, see
Cloud Storage regional endpoints .
The following operations are not supported by regional endpoints. However, these operations
don't carry Customer Data as defined in the
data residency service terms .
Therefore, you can use global endpoints for these operations as necessary without violating
ITAR compliance:
HMAC key operations
IAM service account operations
Pub/Sub notifications
If a user tries to perform an unsupported operation using regional
endpoints, Cloud Storage will return a 400 HTTP error code with error message:
This endpoint does not implement this operation. Please use the global endpoint.
Copy and rewrite for objects
Copy and rewrite operations for objects are supported by regional endpoints if both the
source and destination buckets are located in the region specified in the endpoint. However,
you cannot use regional endpoints to copy or rewrite an object from one bucket to another if
the buckets exist in different locations. It is possible to use global endpoints to copy or
rewrite across locations, but we don't recommend it as it and may violate ITAR compliance.
Cloud VPN
Affected Cloud VPN features
Feature
Description
Google Cloud console
Cloud VPN features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
Encryption
You must use only FIPS 140-2 compliant ciphers when creating certificates and configuring
your IP security. See the
Supported IKE ciphers
page for more information about supported ciphers in Cloud VPN. For guidance about
selecting a cipher that conforms to FIPS 140-2 standards, see the
FIPS 140-2 Validated
page.
You cannot change an existing cipher in Google Cloud. Ensure that you configure your cipher
on your third-party appliance that's used with Cloud VPN.
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
VM metadata security considerations
It's your responsibility not to write sensitive data to the VM metadata server.
Bare Metal Solution VMs
You cannot use Bare Metal Solution VMs (o2 VMs) because Bare Metal Solution VMs are not compliant with
ITAR.
Google Cloud VMware Engine VMs
You cannot use Google Cloud VMware Engine VMs, as Google Cloud VMware Engine VMs are not compliant
with ITAR.
Creating a C3 VM instance
This feature is disabled.
Using persistent disks or their snapshots without CMEK
You cannot use persistent disks or their snapshots unless they have been encrypted using
CMEK.
Sharing an SSD persistent disk in multi-writer mode
You cannot share an SSD persistent disk in multi-writer mode between VM instances.
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
compute.disableGlobalSelfManagedSslCertificate
Set to True .
Disables creation of global self-managed SSL certificates.
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
compute.requireOsConfig
Set to True .
Enables VM Manager (OS Config) on all new
projects. All VM instances created in new projects will have VM Manager enabled.
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
Google Kubernetes Engine
Affected Google Kubernetes Engine features
Feature
Description
Cluster resource restrictions
Ensure that your cluster configuration does not use resources for services that are
unsupported in ITAR. For example, the following configuration is invalid
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
Security Command Center Premium
Affected Security Command Center Premium features
Feature
Description
Compliance Manager
Compliance Manager is unsupported and has not met the control requirements for
ITAR.
Data Security Posture Management
Data Security Posture Management is unsupported and has not met the control requirements for
ITAR.
Virtual Private Cloud (VPC)
Affected VPC features
Feature
Description
Google Cloud console
VPC networking features are not available in the Google Cloud console. Use the
API or Google Cloud CLI instead.
What's next
Learn how to create an Assured Workloads folder
Understand Assured Workloads pricing
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
