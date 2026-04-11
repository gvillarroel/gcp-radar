---
title: "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vpc-service-controls/docs/supported-products
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc-service-controls/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/vpc-service-controls/docs/supported-products
  title: "Supported products and limitations \_|\_ VPC Service Controls \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
VPC Service Controls
Guides
Send feedback
Supported products and limitations
Stay organized with collections
Save and categorize content based on your preferences.
This page contains a table of products and services that are supported by
VPC Service Controls, as well as a list of known limitations with certain
services and interfaces.
List all supported services
To retrieve the complete list of all VPC Service Controls supported products and
services, run the following command:
gcloud access-context-manager supported-services list
You get a response with a list of products and services.
NAME TITLE SERVICE_SUPPORT_STAGE AVAILABLE_ON_RESTRICTED_VIP KNOWN_LIMITATIONS
SERVICE_ADDRESS SERVICE_NAME SERVICE_STATUS RESTRICTED_VIP_STATUS LIMITATIONS_STATUS
.
.
.
This response includes the following values:
Value
Description
SERVICE_ADDRESS
Service name of the product or service. For example, aiplatform.googleapis.com .
SERVICE_NAME
Name of the product or service. For example, Vertex AI API .
SERVICE_STATUS
The status of the service integration with VPC Service Controls. The following are the possible values:
GA : The service integration is fully supported by VPC Service Controls perimeters.
PREVIEW : The service integration is ready for a broader testing and use but is not fully supported for production environments by VPC Service Controls perimeters.
DEPRECATED : The service integration is scheduled to be shut down and removed.
RESTRICTED_VIP_STATUS
Specifies if the service integration with VPC Service Controls is supported by the restricted VIP. The following are the possible values:
TRUE : The service integration is fully supported by the restricted VIP and can be protected by VPC Service Controls perimeters.
FALSE : The service integration is not supported by the restricted VIP.
For a complete list of the services available on the restricted VIP, see Services supported by the restricted VIP .
LIMITATIONS_STATUS
Specifies if the service integration with VPC Service Controls has any limitations. The following are the possible values:
TRUE : The service integration with VPC Service Controls has known limitations. You can check the corresponding entry for the service in the Supported products table to know more about these limitations.
FALSE : The service integration with VPC Service Controls has no known limitations.
List supported methods for a service
To retrieve the list of methods and permissions supported by VPC Service Controls
for a service, run the following command:
gcloud access-context-manager supported-services describe SERVICE_ADDRESS
Replace SERVICE_ADDRESS with the service name of the
product or service. For example, aiplatform.googleapis.com .
You get a response with a list of methods and permissions.
availableOnRestrictedVip: RESTRICTED_VIP_STATUS
knownLimitations: LIMITATIONS_STATUS
name: SERVICE_ADDRESS
serviceSupportStage: SERVICE_STATUS
supportedMethods:
METHODS_LIST
.
.
.
title: SERVICE_NAME
In this response, METHODS_LIST lists all the methods and
permissions supported by VPC Service Controls for the specified service. For a
complete list of all the supported service methods and permissions, see
Supported service method restrictions .
For information about the service methods that VPC Service Controls can't control,
see Service method exceptions .
Supported products
Note: This table includes all
products that are supported by VPC Service Controls and operate normally
inside a service perimeter. However, not all supported products have services
that can be protected by a perimeter.
VPC Service Controls supports the following products:
Supported products
Description
Infrastructure Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
config.googleapis.com
Details
For more information about Infrastructure Manager, refer to the
product documentation .
Limitations
To use Infrastructure Manager in a perimeter:
You must use a Cloud Build private pool for the worker pool used by Infrastructure Manager. You need to
use the Infra Manager-maintained Terraform provider for Google Cloud
if you don't want to enable public internet calls
to download the HashiCorp-maintained Terraform providers and configurations. You cannot use the
default Cloud Build worker pool.
The following must be in the same perimeter:
The service account that Infrastructure Manager uses.
The Cloud Build worker pool that Infrastructure Manager uses.
The storage bucket that Infrastructure Manager uses. You can use the default storage bucket.
App Design Center
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
designcenter.googleapis.com
Details
The API for App Design Center can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about App Design Center, refer to the
product documentation .
Limitations
To use App Design Center in a perimeter:
You must use a Cloud Build private pool for the worker pool used by App Design Center.
Enable public internet calls
to download HashiCorp-maintained Terraform providers and configurations. You cannot use the
default Cloud Build worker pool.
The following resources must be restricted in the same perimeter:
The management project where you set up App Design Center.
The Cloud Build worker pool that App Design Center uses.
For more information, see
Deploy resources in a secure perimeter .
Workload Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
workloadmanager.googleapis.com
Details
To use Workload Manager in a VPC Service Controls perimeter:
You must use a Cloud Build private worker pool
for your deployment environment in Workload Manager.
You cannot use the default Cloud Build worker pool.
The Cloud Build private pool must have
public internet calls enabled
to download the Terraform configuration.
For more information, see
Use a Cloud Build private worker pool in the Workload Manager documentation.
For more information about Workload Manager, refer to the
product documentation .
Limitations
You must ensure that the following resources are in the same
VPC Service Controls
service perimeter :
Workload Manager service account.
Cloud Build private worker pool.
The Cloud Storage bucket that Workload Manager uses for deployment.
Google Cloud NetApp Volumes
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
netapp.googleapis.com
Details
The API for Google Cloud NetApp Volumes can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Google Cloud NetApp Volumes, refer to the
product documentation .
Limitations
VPC Service Controls doesn't cover dataplane paths such as Network File System (NFS) and Server Message Block (SMB) reads and writes. Additionally, if your host and service projects are configured in different perimeters, you can experience a break in the implementation of Google Cloud services.
Google Cloud Search
Status
GA
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudsearch.googleapis.com
Details
Google Cloud Search supports Virtual Private Cloud Security Controls (VPC Service Controls) to enhance
the security of your data. VPC Service Controls allows you to define a security perimeter around Google
Cloud Platform resources to constrain data and help mitigate data exfiltration risks.
For more information about Google Cloud Search, refer to the
product documentation .
Limitations
Because Cloud Search resources are not stored in a Google Cloud project, you must
update the Cloud Search customer settings with the VPC perimeter protected project. The
VPC project acts as a virtual project container for all your Cloud Search resources.
Without building this mapping, VPC Service Controls won't work for the Cloud Search API.
For complete steps to enable VPC Service Controls with Google Cloud Search, refer to
Enhance security for Google Cloud Search .
Connectivity Tests
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
networkmanagement.googleapis.com
Details
The API for Connectivity Tests can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Connectivity Tests, refer to the
product documentation .
Limitations
The Connectivity Tests integration with VPC Service Controls has no known limitations.
AI Platform Prediction
Status
DEPRECATED . This legacy version of AI Platform Prediction is deprecated and will no longer be available on Google Cloud after January 31, 2025. All models, associated metadata, and deployments will be deleted after January 31, 2025. Migrate your resources to Vertex AI to get new machine learning features that are unavailable in AI Platform.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ml.googleapis.com
Details
VPC Service Controls supports online prediction, but not batch prediction.
For more information about AI Platform Prediction, refer to the
product documentation .
Limitations
To fully protect AI Platform Prediction, add all of the following APIs to the
service perimeter:
AI Platform Training and Prediction API ( ml.googleapis.com )
Pub/Sub API ( pubsub.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Google Kubernetes Engine API ( container.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Read more about setting up VPC Service Controls for
AI Platform Prediction .
Batch prediction is not
supported when you use AI Platform Prediction inside a service perimeter.
AI Platform Prediction and AI Platform Training both use the
AI Platform Training and Prediction API, so you must configure VPC Service Controls for
both products. Read more about setting up VPC Service Controls for
AI Platform Training .
AI Platform Training
Status
DEPRECATED . This legacy version of AI Platform Training is deprecated and will no longer be available on Google Cloud after January 31, 2025. Migrate your resources to Vertex AI custom training to get new machine learning features that are unavailable in AI Platform.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ml.googleapis.com
Details
The API for AI Platform Training can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about AI Platform Training, refer to the
product documentation .
Limitations
To fully protect your AI Platform Training training jobs, add all of the
following APIs to the service perimeter:
AI Platform Training and Prediction API ( ml.googleapis.com )
Pub/Sub API ( pubsub.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Google Kubernetes Engine API ( container.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Read more about setting up VPC Service Controls for
AI Platform Training .
Training with TPUs is not supported
when you use AI Platform Training inside a service perimeter.
AI Platform Training and AI Platform Prediction both use the
AI Platform Training and Prediction API, so you must configure VPC Service Controls for
both products. Read more about setting up VPC Service Controls for
AI Platform Prediction .
AlloyDB for PostgreSQL
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
alloydb.googleapis.com
Details
VPC Service Controls perimeters protect the AlloyDB API.
For more information about AlloyDB for PostgreSQL, refer to the
product documentation .
Limitations
Service perimeters protect only the AlloyDB for PostgreSQL Admin API. They don't protect
IP-based data access to underlying databases (such as AlloyDB for PostgreSQL instances). To restrict public
IP access on AlloyDB for PostgreSQL instances, use an organization policy constraint .
Before you configure VPC Service Controls for AlloyDB for PostgreSQL, enable the Service Networking
API.
When you use AlloyDB for PostgreSQL with Shared VPC and VPC Service Controls, the host
project and service project must be in the same VPC Service Controls service perimeter.
Vertex AI Agent Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
aiplatform.googleapis.com
Details
The API for Vertex AI Agent Engine can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Vertex AI Agent Engine, refer to the
product documentation .
Limitations
For more information about limitations, see limitations
in the Vertex AI documentation.
Vertex AI Workbench
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
notebooks.googleapis.com
Details
The API for Vertex AI Workbench can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Vertex AI Workbench, refer to the
product documentation .
Limitations
For information about the limitations of using Vertex AI Workbench
with VPC Service Controls, see
service perimeters
for Vertex AI Workbench instances ,
service perimeters
for user-managed notebooks (deprecated), and
service perimeters
for managed notebooks (deprecated).
Vertex AI
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
aiplatform.googleapis.com
Details
The API for Vertex AI can be protected by VPC Service Controls
and the product can be used normally inside service perimeters.
Colab Enterprise is a part of Vertex AI. See Colab Enterprise .
For more information about Vertex AI, refer to the
product documentation .
Limitations
For more information about limitations, see limitations
in the Vertex AI documentation.
Vertex AI Vision
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
visionai.googleapis.com
Details
The API for Vertex AI Vision can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Vertex AI Vision, refer to the
product documentation .
Limitations
When constraints/visionai.disablePublicEndpoint is
on, we disable the cluster's public endpoint. Users must manually connect to the PSC
target and access the service from the private network. You can get the PSC target from
the
cluster resource .
Vertex AI in Firebase
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebasevertexai.googleapis.com
Details
The API for Vertex AI in Firebase can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Vertex AI in Firebase, refer to the
product documentation .
Limitations
The Vertex AI in Firebase API proxies traffic to the
Vertex AI API ( aiplatform.googleapis.com ) .
Make sure that aiplatform.googleapis.com is
also added to the restricted services list in the service
perimeter.
Any
known limitations of the Vertex AI API
apply to the Vertex AI in Firebase API.
Traffic to the Vertex AI in Firebase API is intended to
originate from a mobile or browser client, which will always be
outside the service perimeter. So, you need to configure an
explicit ingress policy.
If you need to connect to the Vertex AI API from within the
service perimeter only , then consider using the
Vertex AI API directly or via one of the server SDKs,
Firebase Genkit, or any of the other available services for
accessing the Vertex AI API server-side.
Colab Enterprise
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
aiplatform.googleapis.com
Details
The API for Colab Enterprise can be protected by VPC Service Controls
and the product can be used normally inside service perimeters.
Colab Enterprise is a part of Vertex AI.
See Vertex AI .
Colab Enterprise uses Dataform for storing notebooks.
See Dataform .
For more information about Colab Enterprise, refer to the
product documentation .
Limitations
For information about limitations, see Known limitations
in the Colab Enterprise documentation.
Apigee and Apigee hybrid
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
apigee.googleapis.com, apigeeconnect.googleapis.com
Details
The API for Apigee and Apigee hybrid can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Apigee and Apigee hybrid, refer to the
product documentation .
Limitations
Apigee integrations with VPC Service Controls have the following limitations:
Integrated portals require additional steps to configure.
You must deploy Drupal portals within the service perimeter.
Apigee API hub
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
apihub.googleapis.com
Details
The API for Apigee API hub can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Apigee API hub, refer to the
product documentation .
Limitations
All Apigee runtime projects associated with an API hub instance must reside within the same VPC Service Controls service perimeter as the API hub host project.
BigQuery sharing
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
analyticshub.googleapis.com
Details
VPC Service Controls protects
data exchanges and
listings . To protect
shared and
linked
datasets using a service perimeter, use the
BigQuery
API . For more
information, see
sharing
VPC Service Controls rules .
For more information about BigQuery sharing, refer to the
product documentation .
Limitations
BigQuery sharing doesn't support method-based rules and you
must allow all methods. For more information, see
sharing VPC Service Controls rules limitations .
Cloud Service Mesh
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
meshca.googleapis.com, meshconfig.googleapis.com, trafficdirector.googleapis.com, networkservices.googleapis.com, networksecurity.googleapis.com
Details
The API for Cloud Service Mesh can be protected by VPC Service Controls, and the product
can be used normally inside service perimeters.
You can use mesh.googleapis.com to enable the required APIs for Cloud Service Mesh.
You don't need to restrict mesh.googleapis.com in your perimeter as it doesn't expose any APIs.
Learn about
configuring VPC Service Controls for Cloud Service Mesh (Managed) .
Learn about
adding Cloud Service Mesh services to the service perimeters .
For more information about Cloud Service Mesh, refer to the
product documentation .
Limitations
The Cloud Service Mesh integration with VPC Service Controls has no known limitations.
Artifact Registry
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
artifactregistry.googleapis.com
Details
In addition to protecting the Artifact Registry API,
Artifact Registry can be used inside service perimeters
with GKE and Compute Engine.
For more information about Artifact Registry, refer to the
product documentation .
Limitations
For Artifact Registry repositories that use the pkg.dev domain, you must
configure DNS
for *.pkg.dev to map to either private.googleapis.com or restricted.googleapis.com .
For more information, see Securing
repositories in a service perimeter .
In addition to the artifacts inside a perimeter that are available to
Artifact Registry, the following read-only repositories are available to all projects
regardless of service perimeters:
gcr.io/anthos-baremetal-release
gcr.io/asci-toolchain
gcr.io/cloud-airflow-releaser
gcr.io/cloud-builders
gcr.io/cloud-dataflow
gcr.io/cloud-ingest
gcr.io/cloud-marketplace
gcr.io/cloud-ssa
gcr.io/cloudsql-docker
gcr.io/config-management-release
gcr.io/deeplearning-platform-release
gcr.io/foundry-dev
gcr.io/fn-img
gcr.io/gae-runtimes
gcr.io/serverless-runtimes
gcr.io/gke-node-images
gcr.io/gke-release
gcr.io/gkeconnect
gcr.io/google-containers
gcr.io/kubeflow
gcr.io/kubeflow-images-public
gcr.io/kubernetes-helm
gcr.io/istio-release
gcr.io/ml-pipeline
gcr.io/projectcalico-org
gcr.io/rbe-containers
gcr.io/rbe-windows-test-images
gcr.io/speckle-umbrella
gcr.io/stackdriver-agents
gcr.io/tensorflow
gcr.io/vertex-ai
gcr.io/vertex-ai-restricted
gke.gcr.io
k8s.gcr.io
In all cases, the regional versions of these repositories are also
available.
Assured Open Source Software
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
assuredoss.googleapis.com
Details
The API for Assured Open Source Software can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Assured Open Source Software, refer to the
product documentation .
Limitations
You must configure egress rules to use
Assured Open Source Software within a service perimeter. For more information, see
Configure Assured Open Source Software support for VPC Service Controls .
Assured Workloads
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
assuredworkloads.googleapis.com
Details
The API for Assured Workloads can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Assured Workloads, refer to the
product documentation .
Limitations
The Assured Workloads integration with VPC Service Controls has no known limitations.
AutoML Translation
Status
DEPRECATED . AutoML Translation API is deprecated and will no longer be available on Google Cloud after September 30, 2025. The functionality and management of custom models is available through Cloud Translation - Advanced API (v3) .
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
automl.googleapis.com, eu-automl.googleapis.com
Details
To fully protect the AutoML API, include all of the following APIs in your perimeter:
AutoML API ( automl.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Compute Engine API ( compute.googleapis.com )
BigQuery API ( bigquery.googleapis.com )
For more information about AutoML Translation, refer to the
product documentation .
Limitations
All AutoML products that are integrated with VPC Service Controls use the same service
name.
You cannot add the supported regional endpoints ,
such as eu-automl.googleapis.com , to the list of restricted services in a perimeter.
When you protect the automl.googleapis.com service, the perimeter protects the supported
regional endpoints, such as eu-automl.googleapis.com , as well.
For more information, see the limitations for using AutoML products with VPC Service Controls.
Bare Metal Solution
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
No. The API for Bare Metal Solution cannot be protected by service perimeters.
However, Bare Metal Solution can be used normally in projects inside a perimeter.
Details
The Bare Metal Solution API can be added to a secure perimeter. However, the
VPC Service Controls perimeters do not extend to the Bare Metal Solution
environment in the regional extensions.
For more information about Bare Metal Solution, refer to the
product documentation .
Limitations
Connecting VPC Service Controls to your Bare Metal Solution environment
doesn't uphold any service control guarantees.
For more information about Bare Metal Solution limitation regarding VPC Service Controls, see
Known
issues and limitations .
Batch
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
batch.googleapis.com
Details
The API for Batch can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Batch, refer to the
product documentation .
Limitations
To fully protect Batch, you need to include the following APIs in
your perimeter:
Batch API ( batch.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
Artifact Registry API ( artifactregistry.googleapis.com )
Filestore API ( file.googleapis.com )
BigLake metastore
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
biglake.googleapis.com
Details
The API for BigLake metastore can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about BigLake metastore, refer to the
product documentation .
Limitations
The BigLake metastore integration with VPC Service Controls has no known limitations.
BigQuery
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
bigquery.googleapis.com, bigquerystorage.googleapis.com, bigqueryreservation.googleapis.com, bigqueryconnection.googleapis.com
Details
When you protect the BigQuery API
using a service perimeter, the BigQuery Storage API ( bigquerystorage.googleapis.com ), BigQuery Reservation API ( bigqueryreservation.googleapis.com ), and
BigQuery Connection API ( bigqueryconnection.googleapis.com ) are also protected. You do not need to separately
add these APIs to your perimeter's list of protected services.
Learn more about configuring
VPC Service Controls for BigQuery
and how to allow access to
community-contributed functions within a perimeter .
For more information about BigQuery, refer to the
product documentation .
Limitations
BigQuery audit log records don't always include all
resources that were used when a request is made, due to the service
internally processing access to multiple resources.
When accessing a BigQuery instance protected by a service
perimeter, the BigQuery job must be run within a project
inside the perimeter, or in a project allowed by an egress
rule of the perimeter. By default, the BigQuery client
libraries run jobs within the service account or user's project,
causing the query to be rejected by VPC Service Controls.
BigQuery blocks saving query results to Google Drive from the
VPC Service Controls protected perimeter. However, VPC Service Controls doesn't block
querying Google Drive data .
For information about restricting access to Google Drive, see
Create and manage trust rules
for Drive sharing .
If you grant access using an ingress rule with user accounts
as the identity type, you can't view BigQuery
resource utilization or the administrative jobs explorer on the
Monitoring page. To use these features, configure an
ingress rule that uses either ANY_IDENTITY or a Google group
that includes the specific users that need access.
Specify the group
in the identities field of the ingress rule using the format group: GROUP_EMAIL_ADDRESS .
If you grant BigQuery users access to data using an ingress rule,
then users can use the Google Cloud console to query and save the results to a local
file.
Accessing resources in VPC Service Controls perimeters is disallowed in BigQuery Standard edition. VPC Service Controls is only supported when performing analysis through BigQuery Enterprise, Enterprise Plus, or On-Demand.
The BigQuery Reservation API is partially supported.
The
BigQuery Reservation API , which creates the assignment resource, doesn't enforce
service perimeter restrictions on the assignment assignees.
BigQuery data
preparation uses Dataform, which has additional access control
requirements. See
Dataform .
BigQuery Data Policy API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
bigquerydatapolicy.googleapis.com
Details
The BigQuery Data Policy API can be protected by VPC Service Controls, and the product
can be used normally inside service perimeters.
For more information about BigQuery Data Policy API, refer to the
product documentation .
Limitations
The BigQuery Data Policy API integration with VPC Service Controls has no known limitations.
BigQuery Data Transfer Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
bigquerydatatransfer.googleapis.com
Details
Service perimeter only protects BigQuery Data Transfer Service API. The actual data protection is
enforced by BigQuery. It is by design to allow importing data from various
external sources outside of Google Cloud, such as Amazon S3, Redshift, Teradata, YouTube,
Google Play and Google Ads, into BigQuery datasets. For information about
VPC Service Controls requirements to migrate data from Teradata, see VPC
Service controls
requirements .
For more information about BigQuery Data Transfer Service, refer to the
product documentation .
Limitations
The BigQuery Data Transfer Service doesn't support exporting data out of a
BigQuery dataset. For more information,
see Exporting table data .
To transfer data between projects, the destination project must either be inside the
same perimeter as the source project, or else an egress rule must permit the transfer
of data out of the perimeter. For information about setting the egress rules, see
Limitations in Manage
BigQuery datasets .
Ingress and egress violations for BigQuery jobs initiated by
BigQuery Data Transfer Service recurring offline transfer runs don't contain user context
information such as caller IP address and device.
The BigQuery Data Transfer Service only supports transferring data into projects protected
by a service perimeter using one of the connectors listed in
Supported data
sources . The BigQuery Data Transfer Service doesn't support transferring data into
projects protected by a service perimeter using a connector provided by other
third-party partners.
BigQuery Migration API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
bigquerymigration.googleapis.com
Details
The BigQuery Migration API can be protected by VPC Service Controls, and the product
can be used normally inside service perimeters.
For more information about BigQuery Migration API, refer to the
product documentation .
Limitations
The BigQuery Migration API integration with VPC Service Controls has no known limitations.
Bigtable
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
bigtable.googleapis.com, bigtableadmin.googleapis.com
Details
The bigtable.googleapis.com and bigtableadmin.googleapis.com
services are bundled together. When you restrict the bigtable.googleapis.com
service in a perimeter, the perimeter restricts the bigtableadmin.googleapis.com
service by default. You cannot add the bigtableadmin.googleapis.com
service to the list of restricted services in a perimeter because it is bundled with
bigtable.googleapis.com .
For more information about Bigtable, refer to the
product documentation .
Limitations
The Bigtable integration with VPC Service Controls has no known limitations.
Binary Authorization
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
binaryauthorization.googleapis.com
Details
When using multiple projects with Binary Authorization, each project must be
included in the VPC Service Controls perimeter. For more information about this use case, see
Multi-project setup .
With Binary Authorization, you may use Artifact Analysis to store
attestors and attestations as notes and occurrences, respectively. In this case, you must
also include Artifact Analysis in the VPC Service Controls perimeter.
See VPC Service Controls guidance for Artifact Analysis
for additional details.
For more information about Binary Authorization, refer to the
product documentation .
Limitations
The Binary Authorization integration with VPC Service Controls has no known limitations.
Blockchain Node Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
blockchainnodeengine.googleapis.com
Details
The API for Blockchain Node Engine can be protected by VPC Service Controls
and used normally inside service perimeters.
For more information about Blockchain Node Engine, refer to the
product documentation .
Limitations
Blockchain Node Engine integrations with VPC Service Controls have the
following limitations:
VPC Service Controls only protects the Blockchain Node Engine API.
When a node is created, you must still indicate that it is meant for a user-configured private
network with
Private Service Connect .
The peer-to-peer traffic is not affected by VPC Service Controls or
Private Service Connect and will continue to use the public internet.
Certificate Authority Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
privateca.googleapis.com
Details
The API for Certificate Authority Service can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Certificate Authority Service, refer to the
product documentation .
Limitations
To use Certificate Authority Service in a protected environment, you must also add the
Cloud KMS API ( cloudkms.googleapis.com ) and the Cloud Storage API
( storage.googleapis.com ) to your service perimeter.
Config Controller
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
krmapihosting.googleapis.com
Details
To use Config Controller with VPC Service Controls, you must enable the following APIs inside
your perimeter:
Cloud Monitoring API ( monitoring.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
Google Cloud Observability API ( logging.googleapis.com )
Security Token Service API ( sts.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
If you provision resources with Config Controller, you must enable the API for
those resources in your service perimeter. For example, if you want to add an IAM
service account, you must add the IAM API ( iam.googleapis.com ).
For more information about Config Controller, refer to the
product documentation .
Limitations
The Config Controller integration with VPC Service Controls has no known limitations.
Data Catalog
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datacatalog.googleapis.com
Details
Data Catalog automatically respects perimeters
around other Google Cloud services.
For more information about Data Catalog, refer to the
product documentation .
Limitations
The Data Catalog integration with VPC Service Controls has no known limitations.
Cloud Data Fusion
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datafusion.googleapis.com
Details
Cloud Data Fusion requires some
special steps to protect
using VPC Service Controls.
For more information about Cloud Data Fusion, refer to the
product documentation .
Limitations
Establish the VPC Service Controls security perimeter before creating your
Cloud Data Fusion private instance. Perimeter protection for
instances created prior to setting up VPC Service Controls is not
supported.
Currently, the Cloud Data Fusion data plane UI does not support
identity based access using ingress rules or
access
levels .
Data Lineage API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datalineage.googleapis.com
Details
The API for Data Lineage API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Data Lineage API, refer to the
product documentation .
Limitations
The Data Lineage API integration with VPC Service Controls has no known limitations.
Compute Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
compute.googleapis.com
Details
VPC Service Controls support for Compute Engine offers the following security
benefits:
Restricts access to sensitive API operations
Restricts persistent disk snapshots and custom images to a perimeter
Restricts access to instance metadata
VPC Service Controls support for Compute Engine also enables you to utilize
Virtual Private Cloud networks and Google Kubernetes Engine private clusters
inside service perimeters.
For more information about Compute Engine, refer to the
product documentation .
Limitations
Configuring a load balancer to use backend services across
different projects poses a potential data exfiltration risk. If you
add one of these projects to a perimeter, the cross-project backend
attachment can still allow data to move between projects even if
you restrict the other project within a different perimeter. To
mitigate this risk, we recommend that you enable the
constraints/compute.restrictCrossProjectServices
organization policy when you restrict the Compute Engine API
within a perimeter. For more information, see
Restrict cross-project
backend buckets and backend services .
Hierarchical firewalls
are not affected by service perimeters.
VPC Peering operations do not enforce VPC service perimeter restrictions.
The projects.ListXpnHosts
API method for Shared VPC does not enforce service perimeter restrictions on
returned projects.
To enable creating a Compute Engine image from a
Cloud Storage in a project protected by a
service perimeter, the user that is creating the image should be added
temporarily to an ingress rule of the perimeter.
VPC Service Controls does not support using the open-source version of Kubernetes on
Compute Engine VMs inside a service perimeter.
SSH-in-browser is not supported within
the perimeter. Use the gcloud CLI instead. For more information, see
Connect to Linux VMs or
Connecting to a serial console ,
depending on your use case.
The interactive serial console does not support the restricted VIP . If you need to troubleshoot your instance using the serial console , configure your on-premises DNS resolution to send your commands to ssh-serialport.googleapis.com over the internet.
Customer Experience Insights
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
contactcenterinsights.googleapis.com
Details
To use CX Insights with VPC Service Controls you must have the following
additional APIs inside your perimeter, depending on your integration.
To load data into CX Insights, add the Cloud Storage API to your service perimeter.
To use export , add the BigQuery API to your service perimeter.
To integrate multiple CCAI products, add the Vertex AI API to your service perimeter.
For more information about Customer Experience Insights, refer to the
product documentation .
Limitations
The Customer Experience Insights integration with VPC Service Controls has no known limitations.
Dataflow
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dataflow.googleapis.com
Details
Dataflow supports a number of
storage service connectors . The following connectors have been
verified to work with Dataflow inside a service perimeter:
Cloud Storage
( Java
,
Python
)
BigQuery
( Java, Python
)
Pub/Sub (
Java
,
Python
)
Bigtable
( Java
)
Spanner
( Java
)
For more information about Dataflow, refer to the
product documentation .
Limitations
Custom BIND is not supported when using Dataflow. To customize DNS resolution when
using Dataflow with VPC Service Controls, use Cloud DNS private zones
instead of using custom BIND servers. To use your own on-premises DNS resolution, consider using a
Google Cloud DNS forwarding method .
Vertical Autoscaling cannot be protected
by a VPC Service Controls perimeter. To use Vertical Autoscaling in a VPC Service Controls perimeter,
you must disable the
VPC accessible services feature .
Caution: Disabling VPC accessible services reduces the security posture.
If you enable Dataflow Prime and launch a new job within a VPC Service Controls
perimeter, the job uses
Dataflow Prime without Vertical Autoscaling .
Not all storage service connectors have been verified to work when used
with Dataflow inside a service perimeter. For a list of
verified connectors, see "Details" in the previous section.
When using Python 3.5 with Apache Beam SDK 2.20.0‑2.22.0,
Dataflow jobs will fail at startup if the workers have
private IP addresses only, such as when using VPC Service Controls to protect resources.
If Dataflow workers can only have private IP addresses, such as when using VPC Service Controls to protect resources,
do not use Python 3.5 with Apache Beam SDK 2.20.0‑2.22.0. This combination causes jobs to fail at startup.
Knowledge Catalog
Status
GA
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dataplex.googleapis.com
Details
The API for Knowledge Catalog can be protected by VPC Service Controls and the product can be used normally inside service perimeters.
To function correctly, Knowledge Catalog interacts with BigQuery using internal pathways. When you restrict the Knowledge Catalog API within a perimeter, you must also restrict the BigQuery API within the same perimeter.
For more information about Knowledge Catalog, refer to the
product documentation .
Limitations
Before creating your Knowledge Catalog resources, set up the VPC Service Controls
security perimeter. Otherwise, your resources don't have perimeter protection.
Knowledge Catalog supports the following resource types:
Lake
Data profile scan
Data quality scan
If you restrict the Knowledge Catalog API within a perimeter but not the BigQuery API, you might encounter a violation when you initiate a Knowledge Catalog operation that interacts with BigQuery. VPC Service Controls attributes the resulting audit log entries to BigQuery. To resolve this violation, add the BigQuery API to both the restricted services list and the VPC accessible services list of the same perimeter.
Managed Service for Apache Spark
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dataproc.googleapis.com
Details
Managed Service for Apache Spark requires
special steps to protect
using VPC Service Controls.
For more information about Managed Service for Apache Spark, refer to the
product documentation .
Limitations
To protect a Managed Service for Apache Spark cluster with a service perimeter, follow the
Managed Service for Apache Spark and VPC Service Controls networks
instructions.
Managed Service for Apache Spark for Spark
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dataproc.googleapis.com
Details
Managed Service for Apache Spark requires
special steps to protect
using VPC Service Controls.
For more information about Managed Service for Apache Spark for Spark, refer to the
product documentation .
Limitations
To protect your serverless workload with a service perimeter, follow the
Managed Service for Apache Spark and VPC Service Controls networks
instructions.
Dataproc Metastore
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
metastore.googleapis.com
Details
The API for Dataproc Metastore can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Dataproc Metastore, refer to the
product documentation .
Limitations
The Dataproc Metastore integration with VPC Service Controls has no known limitations.
Datastream
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datastream.googleapis.com
Details
The API for Datastream can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Datastream, refer to the
product documentation .
Limitations
The Datastream integration with VPC Service Controls has no known limitations.
Database Center
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
databasecenter.googleapis.com
Details
The API for Database Center can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Database Center, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support access to folder-level or organization-level
Cloud Asset API resources from resources and clients inside a service perimeter.
VPC Service Controls protects project-level Cloud Asset API resources. You can specify an
egress policy to allow access to project-level Cloud Asset API resources from projects
inside the perimeter. To manage Database Center permissions at the folder level
or organizational level, we recommend using IAM.
Database Insights API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
databaseinsights.googleapis.com
Details
The API for Database Insights API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Database Insights API, refer to the
product documentation .
Limitations
The Database Insights API integration with VPC Service Controls has no known limitations.
Database Migration Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datamigration.googleapis.com
Details
The API for Database Migration Service can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Database Migration Service, refer to the
product documentation .
Limitations
Service perimeters protect only the Database Migration Service Admin API. They don't protect
IP-based data access to underlying databases (such as Cloud SQL instances). To restrict public
IP access on Cloud SQL instances, use an organization policy constraint .
When you use a Cloud Storage file in the initial dump phase of the migration,
add the Cloud Storage bucket to the same service perimeter.
When you use a customer-managed encryption key (CMEK) in the destination database, make sure that the CMEK resides in the
same service perimeter as the connection profile that contains the key.
Dialogflow
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dialogflow.googleapis.com
Details
The API for Dialogflow can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Dialogflow, refer to the
product documentation .
Limitations
See Dialogflow ES limitations .
See Dialogflow CX limitations .
Agent Assist
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dialogflow.googleapis.com
Details
The API for Agent Assist can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Agent Assist, refer to the
product documentation .
Limitations
Sensitive Data Protection
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dlp.googleapis.com
Details
For information about how to allow Sensitive Data Protection to discover data
within a VPC Service Controls perimeter, see Allow
sensitive data discovery within service perimeters .
For more information about Sensitive Data Protection, refer to the
product documentation .
Limitations
Because VPC Service Controls does not currently support folder and
organization resources, Sensitive Data Protection calls may return a 403 response when attempting to access
organization-level resources. We recommend that IAM is used to manage
Sensitive Data Protection permissions at the folder and organization level.
Distributed Cloud Edge Container API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
edgecontainer.googleapis.com
Details
The API for Distributed Cloud Edge Container API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Distributed Cloud Edge Container API, refer to the
product documentation .
Limitations
When you restrict edgecontainer.googleapis.com in a perimeter, you must grant access at the IP address level to gkeconnect.googleapis.com
and sts.googleapis.com to all machine IP addresses that need to access these endpoints. This is because the Distributed Cloud Edge Container API
relies on Workload Identity Federation for GKE on on-premises machines, which cannot be directly added to an allowlist. For more information, see
Configure VPC Service Controls integration .
Cloud DNS
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dns.googleapis.com
Details
The API for Cloud DNS can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud DNS, refer to the
product documentation .
Limitations
You can access Cloud DNS through the restricted VIP. However
you cannot create or update public DNS zones within projects inside the
VPC Service Controls perimeter.
Document AI
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
documentai.googleapis.com
Details
The API for Document AI can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Document AI, refer to the
product documentation .
Limitations
The Document AI integration with VPC Service Controls has no known limitations.
Document AI Warehouse
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
contentwarehouse.googleapis.com
Details
The API for Document AI Warehouse can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Document AI Warehouse, refer to the
product documentation .
Limitations
The Document AI Warehouse integration with VPC Service Controls has no known limitations.
Cloud Domains
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
domains.googleapis.com
Details
The API for Cloud Domains can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Domains, refer to the
product documentation .
Limitations
The contact data used in Cloud Domains might be shared with the
domain ending or top-level domain (TLD)
registry and might be publicly accessible for
WHOIS/RDAP as your settings permit,
in compliance with ICANN rules. For details, see
Privacy protection .
The DNS configuration data used in
Cloud Domains— name servers
and DNSSEC settings —is
public. If your domain delegates to a public DNS zone, which is the
default, then that zone's DNS configuration data is public too.
Eventarc Advanced
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
eventarc.googleapis.com, eventarcpublishing.googleapis.com
Details
Eventarc Advanced APIs can be protected with VPC Service Controls,
and features can be used normally inside service perimeters.
An Eventarc Advanced bus outside of a service perimeter can't receive
events from Google Cloud projects inside the perimeter. An Eventarc Advanced
bus inside of a perimeter can't route events to a consumer outside of the perimeter.
To publish to an Eventarc Advanced bus, the source of an event
must be inside the same service perimeter as the bus.
To consume a message, an event consumer must be inside the same service perimeter as
the bus.
You can verify VPC Service Controls support for the Enrollment ,
GoogleApiSource , MessageBus , and Pipeline resources
by viewing platform logs on ingress.
For more information about Eventarc Advanced, refer to the
product documentation .
Limitations
The Eventarc Advanced integration with VPC Service Controls has no known limitations.
Eventarc Standard
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
eventarc.googleapis.com, eventarcpublishing.googleapis.com
Details
Eventarc Standard handles event delivery using Pub/Sub
topics and push subscriptions. To access the Pub/Sub API and manage event
triggers, the Eventarc API must be protected within the same VPC Service Controls
service perimeter as the Pub/Sub API.
For more information about Eventarc Standard, refer to the
product documentation .
Limitations
In projects protected by a service perimeter, the following limitations apply:
Eventarc Standard is bound by the same limitations as Pub/Sub:
When routing events to Cloud Run targets, new Pub/Sub
push subscriptions can't be created unless the push endpoints are set to
Cloud Run services with default run.app URLs (custom
domains don't work).
When routing events to Workflows targets for which the
Pub/Sub push endpoint is set to a Workflows
execution, you can only create new Pub/Sub push subscriptions
through Eventarc Standard.
In this document, see the
Pub/Sub
limitations .
VPC Service Controls blocks the creation of Eventarc Standard
triggers for
internal
HTTP endpoints . VPC Service Controls protection does not apply when routing
events to such destinations.
Distributed Cloud Edge Network API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
edgenetwork.googleapis.com
Details
The API for Distributed Cloud Edge Network API can be protected by VPC Service Controls
and used normally inside service perimeters.
For more information about Distributed Cloud Edge Network API, refer to the
product documentation .
Limitations
The Distributed Cloud Edge Network API integration with VPC Service Controls has no known limitations.
Anti Money Laundering AI
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
financialservices.googleapis.com
Details
The API for Anti Money Laundering AI can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Anti Money Laundering AI, refer to the
product documentation .
Limitations
The Anti Money Laundering AI integration with VPC Service Controls has no known limitations.
Firebase App Check
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebaseappcheck.googleapis.com
Details
When you configure and exchange Firebase App Check tokens, VPC Service Controls
protects only the Firebase App Check service. To protect services that rely on
Firebase App Check, you must set up service perimeters for those services.
For more information about Firebase App Check, refer to the
product documentation .
Limitations
The Firebase App Check integration with VPC Service Controls has no known limitations.
Firebase App Hosting
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebaseapphosting.googleapis.com
Details
VPC Service Controls helps protect requests to the App Hosting API. However,
VPC Service Controls restrictions don't apply to requests to websites deployed on
App Hosting.
For more information about Firebase App Hosting, refer to the
product documentation .
Limitations
Sites deployed on App Hosting are available on the public internet and cannot be
restricted within a service perimeter.
Firebase Crashlytics
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebasecrashlytics.googleapis.com
Details
Restricting Firebase Crashlytics in a perimeter also restricts access to Firebase Crashlytics
functionality in the Firebase console.
For more information about Firebase Crashlytics, refer to the
product documentation .
Limitations
The Firebase Crashlytics integration with VPC Service Controls has no known limitations.
Firebase Data Connect
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebasedataconnect.googleapis.com
Details
Service perimeters protect only the Firebase Data Connect API. They don't
protect access to the underlying data sources (such as Cloud SQL instances).
Restricting access on database instances must be configured separately.
For more information about Firebase Data Connect, refer to the
product documentation .
Limitations
The Firebase Data Connect integration with VPC Service Controls has no known limitations.
Firebase Security Rules
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firebaserules.googleapis.com
Details
When you manage Firebase Security Rules policies VPC Service Controls protects
only the Firebase Security Rules service. To protect services that rely on
Firebase Security Rules, you must set up service permiters for those services.
For more information about Firebase Security Rules, refer to the
product documentation .
Limitations
The Firebase Security Rules integration with VPC Service Controls has no known limitations.
Cloud Run functions
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudfunctions.googleapis.com
Details
See the Cloud Run functions documentation
for setup steps. VPC Service Controls protection does not apply to the build phase when
Cloud Run functions are built using Cloud Build. For more details, see the known limitations.
For more information about Cloud Run functions, refer to the
product documentation .
Limitations
Cloud Run functions uses Cloud Build, Container Registry, and
Cloud Storage to build and manage your source code in a runnable container. If
any of these services are restricted by the service perimeter, VPC Service Controls
blocks the Cloud Run functions build, even if Cloud Run functions is not added as
a restricted service to the perimeter. To use Cloud Run functions inside a service
perimeter, you must configure an ingress rule for the
Cloud Build service account in your service perimeter.
To allow your functions to use external dependencies such as npm packages,
Cloud Build has unlimited internet access. This internet access
could be used to exfiltrate data that is available at build time, such as
your uploaded source code. If you want to mitigate this exfiltration
vector, we recommend that you only allow trusted developers to deploy
functions. Do not grant
Cloud Run functions Owner, Editor, or Developer IAM roles
to untrusted developers.
When you specify an ingress or egress policy for a service perimeter, you cannot use ANY_SERVICE_ACCOUNT
and ANY_USER_ACCOUNT as an identity type to deploy Cloud Run functions from a local machine .
As a workaround, use ANY_IDENTITY as the identity type.
When Cloud Run functions services are invoked by HTTP triggers, VPC Service Controls
policy enforcement does not use the client's IAM authentication
information. VPC Service Controls ingress policy rules that use IAM
principals are not supported. Access levels for VPC Service Controls perimeters that use
IAM principals are not supported.
Identity and Access Management
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
iam.googleapis.com
Details
When you restrict IAM with a perimeter, only actions
that use the Identity and Access Management API are restricted. These actions
include the following:
Managing custom IAM roles
Managing workload identity pools
Managing service accounts and keys
Managing deny policies
Managing policy bindings for principal access boundary policies
The perimeter doesn't restrict actions related to workforce
pools and principal access boundary policies because those resources
are created at the organization level.
The perimeter also doesn't restrict allow policy management for
resources owned by other services, like Resource Manager projects,
folders, and organizations or Compute Engine virtual machine
instances. To restrict allow policy management for these resources,
create a perimeter that restricts the service that owns the resources.
For a list of resources that accept allow policies and the services
that own them, see Resource types that
accept allow policies .
Additionaly, the perimeter around IAM doesn't
restrict actions that use other APIs, including the following:
IAM Policy Simulator API
IAM Policy Troubleshooter API
Security Token Service API
Service Account Credentials API (including the legacy signBlob and
signJwt methods in the IAM API)
For more information about Identity and Access Management, refer to the
product documentation .
Limitations
If you are inside the perimeter, you cannot call the
roles.list method with
an empty string to list IAM predefined roles. If you need to view
predefined roles, see
IAM role
documentation .
IAP Admin API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
iap.googleapis.com
Details
IAP Admin API enables users to configure IAP.
For more information about IAP Admin API , refer to the
product documentation .
Limitations
The IAP Admin API integration with VPC Service Controls has no known limitations.
Cloud KMS Inventory API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
kmsinventory.googleapis.com
Details
The API for Cloud KMS Inventory API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud KMS Inventory API, refer to the
product documentation .
Limitations
The SearchProtectedResources API method does not enforce service perimeter restrictions on returned projects.
Service Account Credentials
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
iamcredentials.googleapis.com
Details
The API for Service Account Credentials can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Service Account Credentials, refer to the
product documentation .
Limitations
The Service Account Credentials integration with VPC Service Controls has no known limitations.
Service Metadata API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloud.googleapis.com
Details
The API for Service Metadata API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Service Metadata API, refer to the
product documentation .
Limitations
The Service Metadata API integration with VPC Service Controls has no known limitations.
Service Networking
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
No. The API for Service Networking cannot be protected by service perimeters.
However, Service Networking can be used normally in projects inside a perimeter.
Details
If you're using private service access, we recommend enabling VPC Service Controls for the Service Networking connection.When you enable VPC Service Controls, service producers are restricted to access only the APIs supported by VPC Service Controls over the Service Networking connection.
You can enable VPC Service Controls for Service Networking only using the EnableVpcServiceControls API . You can disable VPC Service Controls for Service Networking only using DisableVpcServiceControls API .
For more information about Service Networking, refer to the
product documentation .
Limitations
The Service Networking integration with VPC Service Controls has no known limitations.
Serverless VPC Access
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
vpcaccess.googleapis.com
Details
The API for Serverless VPC Access can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Serverless VPC Access, refer to the
product documentation .
Limitations
The Serverless VPC Access integration with VPC Service Controls has no known limitations.
Cloud Key Management Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudkms.googleapis.com
Details
The Cloud KMS API can be protected by VPC Service Controls and the product can be
used inside service perimeters. The access to Cloud HSM services is also protected
by VPC Service Controls and can be used inside service perimeters.
For more information about Cloud Key Management Service, refer to the
product documentation .
Limitations
The Cloud Key Management Service integration with VPC Service Controls has no known limitations.
Game Servers
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
gameservices.googleapis.com
Details
The API for Game Servers can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Game Servers, refer to the
product documentation .
Limitations
The Game Servers integration with VPC Service Controls has no known limitations.
Gemini Code Assist
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudaicompanion.googleapis.com
Details
The API for Gemini Code Assist can be protected by VPC Service Controls
and the product can be used normally inside service perimeters. This includes
code customization .
For more information about Gemini Code Assist, refer to the
product documentation .
Limitations
Access control based on device, public IP address, or location is
not supported for Gemini in the Google Cloud console.
The Gemini Cloud Assist
chat feature, which is also part of
the cloudaicompanion.googleapis.com API, isn't supported.
Identity-Aware Proxy for TCP
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
iaptunnel.googleapis.com
Details
The API for Identity-Aware Proxy for TCP can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Identity-Aware Proxy for TCP, refer to the
product documentation .
Limitations
Only the usage API of IAP for TCP can be protected by a perimeter.
The administrative API cannot be protected by a perimeter.
To use IAP for TCP within a VPC Service Controls service perimeter, you must
add or configure some DNS
entries
to point the following domains to the restricted VIP:
tunnel.cloudproxy.app
*.tunnel.cloudproxy.app
Cloud Life Sciences
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
lifesciences.googleapis.com
Details
The API for Cloud Life Sciences can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Life Sciences, refer to the
product documentation .
Limitations
The Cloud Life Sciences integration with VPC Service Controls has no known limitations.
Managed Service for Microsoft Active Directory
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
managedidentities.googleapis.com
Details
Additional configuration required for:
On-premises access to the Managed Microsoft AD API
Shared VPC
For more information about Managed Service for Microsoft Active Directory, refer to the
product documentation .
Limitations
The Managed Service for Microsoft Active Directory integration with VPC Service Controls has no known limitations.
reCAPTCHA
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
recaptchaenterprise.googleapis.com
Details
The API for reCAPTCHA can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about reCAPTCHA, refer to the
product documentation .
Limitations
The reCAPTCHA integration with VPC Service Controls has no known limitations.
Web Risk
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
webrisk.googleapis.com
Details
The API for Web Risk can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Web Risk, refer to the
product documentation .
Limitations
The Evaluate API and the Submission API are not supported by
VPC Service Controls.
Recommender
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
recommender.googleapis.com
Details
The API for Recommender can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Recommender, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support organization, folder, or billing account
resources.
Secret Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
secretmanager.googleapis.com
Details
The API for Secret Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Secret Manager, refer to the
product documentation .
Limitations
The Secret Manager integration with VPC Service Controls has no known limitations.
Pub/Sub
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
pubsub.googleapis.com
Details
VPC Service Controls protection applies to all administrator operations, publisher operations, and
subscriber operations (except for existing push subscriptions).
For more information about Pub/Sub, refer to the
product documentation .
Limitations
In projects protected by a service perimeter, the following limitations apply:
You must create the subscription in the same perimeter as
the topic, or enable egress rules to allow access from the topic to the subscription.
New push subscriptions can't be created unless the push endpoints are set to
Cloud Run services with default run.app URLs or a
Workflows execution
( custom domains don't work). For more
information about integrating with Cloud Run, see
Using VPC Service Controls .
When routing events through Eventarc to Workflows
targets for which the push endpoint is set to a Workflows execution, you
can only create new push subscriptions through Eventarc.
Pub/Sub subscriptions created prior to the service perimeter are
not blocked.
Pub/Sub Lite
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
pubsublite.googleapis.com
Details
VPC Service Controls protection applies to all subscriber operations.
For more information about Pub/Sub Lite, refer to the
product documentation .
Limitations
The Pub/Sub Lite integration with VPC Service Controls has no known limitations.
Cloud Build
Status
GA . This product integration is supported by VPC Service Controls. Refer to details and limitations for more information.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudbuild.googleapis.com
Details
Use VPC Service Controls with Cloud Build private pools to add additional security to your builds.
For more information about Cloud Build, refer to the
product documentation .
Limitations
VPC Service Controls protection is available only for builds run in private pools .
Cloud Build Pub/Sub triggers are not supported.
Cloud Deploy
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
clouddeploy.googleapis.com
Details
The API for Cloud Deploy can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Deploy, refer to the
product documentation .
Limitations
To use Cloud Deploy in a perimeter, you must use a Cloud Build private pool for the target's execution environments .
Don't use the default (Cloud Build) worker pool, and don't use a hybrid pool.
Cloud Composer
Status
GA
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
composer.googleapis.com
Details
Configuring Composer for use with VPC Service Controls
For more information about Cloud Composer, refer to the
product documentation .
Limitations
Enabling DAG serialization prevents Airflow from displaying a rendered
template with functions in the web UI.
Setting the async_dagbag_loader flag to True is not supported while DAG
serialization is enabled.
Enabling DAG serialization disables all Airflow web server plugins, as they
could risk the security of the VPC network where Cloud Composer is
deployed. This doesn't impact the behaviour of scheduler or worker plugins,
including Airflow operators and sensors.
When Cloud Composer is running inside a perimeter, access to public
PyPI repositories is restricted. In the Cloud Composer
documentation, see
Installing Python dependencies
to learn how to install PyPi modules in Private IP mode.
Cloud Composer doesn't support using
third-party identities
in ingress and egress rules for Apache Airflow web interface
operations. However, you can use the ANY_IDENTITY identity type in ingress and egress rules to allow access
to all identities, including third-party identities. For more information about the ANY_IDENTITY identity
type, see Ingress and egress rules .
Cloud Quotas
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudquotas.googleapis.com
Details
The API for Cloud Quotas can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Quotas, refer to the
product documentation .
Limitations
Because VPC Service Controls enforces boundaries at the project level,
Cloud Quotas requests that originate from clients within the
perimeter can only access organization resources if the organization sets up an
egress rule .
When requesting a
quota decrease
, Cloud Quotas executes a service to service (S2S) call to
Monitoring.
This S2S call does not originate from within the perimeter even
if the decrease request does, therefore, it will be blocked by VPC Service Controls.
To avoid this issue, you can either:
Set the ignoreSafetyChecks
query parameter
with the value of
QUOTA_DECREASE_BELOW_USAGE .
Create an
ingress rule
that allows the S2S call from your identity and all sources to
Monitoring to the project where you request the quota
decrease.
To set up an ingress or egress rule, see the VPC Service Controls instructions for
configuring
ingress and egress policies .
Cloud Run
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
run.googleapis.com
Details
Additional setup for Cloud Run is required. Follow
the instructions at the Cloud Run VPC Service Controls documentation page.
For more information about Cloud Run, refer to the
product documentation .
Limitations
For Artifact Registry and Container Registry, the registry where you store your container
must be in the same VPC Service Controls perimeter as the project that you are deploying to. The
code being built must be in the same VPC Service Controls perimeter as the registry that the
container is being pushed to.
The Cloud Run
continuous deployment
feature is not available for projects inside a VPC Service Controls perimeter.
When Cloud Run services are invoked, VPC Service Controls
policy enforcement does not use the client's IAM authentication
information. Such requests have the following limitations:
VPC Service Controls ingress policy rules that use IAM
principals are not supported.
Access levels for VPC Service Controls perimeters that use IAM
principals are not supported.
Enforcement of VPC Service Controls egress policy is only guaranteed when using the
restricted virtual IP (VIP) address .
Requests from the same project on non-restricted VIPs are allowed, even if
Cloud Run is not configured as a
VPC accessible service .
Cloud Scheduler
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudscheduler.googleapis.com
Details
VPC Service Controls is enforced on the following actions:
Cloud Scheduler job creation
Cloud Scheduler job updates
For more information about Cloud Scheduler, refer to the
product documentation .
Limitations
VPC Service Controls supports Cloud Scheduler jobs only
with the following targets:
Cloud Run run.app endpoints
Cloud Run functions functions.net endpoints
Google Cloud APIs that are VPC Service Controls-compliant (either in Preview
or GA)—can be in a different Google Cloud project from your
Cloud Scheduler job.
Pub/Sub
For more information, see
Secure cron jobs with VPC Service Controls .
Spanner
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
spanner.googleapis.com
Details
The API for Spanner can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Spanner, refer to the
product documentation .
Limitations
The Spanner integration with VPC Service Controls has no known limitations.
Speaker ID
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
speakerid.googleapis.com
Details
The API for Speaker ID can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Speaker ID, refer to the
product documentation .
Limitations
The Speaker ID integration with VPC Service Controls has no known limitations.
Cloud Storage
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
storage.googleapis.com
Details
The API for Cloud Storage can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Storage, refer to the
product documentation .
Limitations
When using the Requester Pays feature with
a storage bucket inside a service perimeter that protects the
Cloud Storage service, you cannot identify a project to pay that is
outside the perimeter. The target project must be in the same perimeter
as the storage bucket or in a perimeter bridge with the bucket's project.
For more information about Requester Pays, see the Requester Pays use and
access requirements .
For projects in a service perimeter, the Cloud Storage page in the
Google Cloud console is not accessible if the Cloud Storage API
is protected by that perimeter. If you want to grant access to the
page, you must create an ingress rule and/or access level that includes the user
accounts and/or public IP range that you want to allow to access the
Cloud Storage API.
In audit log records, the resourceName field does not identify the project
that owns a bucket. The
project must be discovered separately .
In audit log records, the value for methodName is not always correct. We
recommend that you do not filter Cloud Storage audit log records
by methodName .
In certain cases, Cloud Storage legacy bucket logs can be written
to destinations outside of a service perimeter even when access is denied.
In certain cases, Cloud Storage objects that were public are accessible even
after you enable VPC Service Controls on the objects. The objects are accessible until they
expire from the built-in caches and any other upstream caches on the network between
the end user and Cloud Storage. Cloud Storage caches publicly
accessible data by default in the Cloud Storage network.
For more information about how Cloud Storage objects are cached,
see Cloud Storage
For information about the length of time an object may be cached, see
Cache-control metadata .
When you specify an ingress or egress policy for a service perimeter, you cannot
use ANY_SERVICE_ACCOUNT and ANY_USER_ACCOUNT as an identity
type for all Cloud Storage operations using
signed URLs .
As a workaround, use ANY_IDENTITY as the identity type.
Signed URLs
support VPC Service Controls.
VPC Service Controls uses the signing credentials of the user or service account that signed the
Signed URL
to evaluate VPC Service Controls checks, not the caller or user credential initiating the connection.
VPC Service Controls protects the Storage Intelligence API.
VPC Service Controls does not support adding folder-level or
organization-level resources to service perimeters. Therefore, while you can
enable Storage Intelligence at the folder, organization, or project level,
VPC Service Controls only protects project-level resources.
To manage Storage Intelligence at the folder-level or organization-level, we
recommend using IAM.
Cloud Tasks
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudtasks.googleapis.com
Details
The API for Cloud Tasks can be protected by VPC Service Controls and the
product can be used normally inside service perimeters.
HTTP requests from Cloud Tasks executions are supported as follows:
Authenticated requests to VPC Service Controls-compliant
Cloud Run functions and Cloud Run endpoints are allowed.
Requests to non-Cloud Run functions and non-Cloud Run
endpoints are blocked.
Requests to non-VPC Service Controls-compliant Cloud Run functions
and Cloud Run endpoints are blocked.
For more information about Cloud Tasks, refer to the
product documentation .
Limitations
VPC Service Controls only supports Cloud Tasks requests to the following
targets:
Cloud Run functions functions.net endpoints
Cloud Run run.app endpoints
For more information, see
Set up a service perimeter using VPC Service Controls .
Cloud SQL
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
sqladmin.googleapis.com
Details
VPC Service Controls perimeters protect the Cloud SQL Admin API.
For more information about Cloud SQL, refer to the
product documentation .
Limitations
Service perimeters protect only the Cloud SQL Admin API. They
do not protect IP-based data access to Cloud SQL instances. You need to
use an organization policy constraint
to restrict public IP access on Cloud SQL instances.
Before you configure VPC Service Controls for Cloud SQL, enable the Service Networking
API.
Cloud SQL imports and exports can only perform reads and writes from a
Cloud Storage bucket within the same service perimeter as the
Cloud SQL replica instance.
In the external server migration flow , you
need to add the Cloud Storage bucket to the same service perimeter.
In the key creation flow for
CMEK, use one of the following configurations:
Create the key in the same service perimeter as the resources that use it,
such as Cloud SQL.
Create the key in a service perimeter that's connected, through a perimeter
bridge , to the service perimeter that protects Cloud SQL.
When restoring an instance from a backup, the target instance needs to
reside in the same service perimeter as the backup.
When performing a cross-project point-in-time recovery ,
the target instance needs to reside in the same service perimeter as the source
instance.
Video Intelligence API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
videointelligence.googleapis.com
Details
The API for Video Intelligence API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Video Intelligence API, refer to the
product documentation .
Limitations
The Video Intelligence API integration with VPC Service Controls has no known limitations.
Cloud Vision API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
vision.googleapis.com
Details
The API for Cloud Vision API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Vision API, refer to the
product documentation .
Limitations
Even if you create an egress rule to allow calls to public URLs from
within VPC Service Controls perimeters, Cloud Vision API blocks calls to public URLs.
Artifact Analysis
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
containeranalysis.googleapis.com
Details
To use Artifact Analysis with VPC Service Controls, you may have
to add other services to your VPC perimeter:
If you are using
Pub/Sub
notifications with Artifact Analysis, add
Pub/Sub to your service
perimeter.
If you are using the
Container
Scanning API , add your registry to the perimeter:
Artifact Registry or
Container Registry .
Because the Container Scanning API is a surfaceless API that stores the results
in Artifact Analysis, you do not need to protect the API with a service
perimeter.
For more information about Artifact Analysis, refer to the
product documentation .
Limitations
The Artifact Analysis integration with VPC Service Controls has no known limitations.
Container Registry
Status
Caution: Container Registry is deprecated. Effective March 18, 2025,
Container Registry is shut down, and writing images to Container Registry is unavailable. For
details on the deprecation and how to migrate to Artifact Registry, see
Container Registry deprecation .
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
containerregistry.googleapis.com
Details
In addition to protecting the Container Registry API,
Container Registry can be used inside a service perimeter with
GKE and Compute Engine.
For more information about Container Registry, refer to the
product documentation .
Limitations
When you specify an ingress or egress policy for a service perimeter, you cannot use ANY_SERVICE_ACCOUNT
and ANY_USER_ACCOUNT as an identity type for all Container Registry operations.
As a workaround, use ANY_IDENTITY as the identity type.
Because Container Registry uses the gcr.io domain, you must
configure DNS
for *.gcr.io to map to either private.googleapis.com or restricted.googleapis.com .
For more information, see
Securing Container Registry
in a service perimeter .
In addition to the containers inside a perimeter that are available to
Container Registry, the following read-only repositories
are available to all projects regardless of any restrictions enforced by service perimeters:
gcr.io/anthos-baremetal-release
gcr.io/asci-toolchain
gcr.io/cloud-airflow-releaser
gcr.io/cloud-builders
gcr.io/cloud-dataflow
gcr.io/cloud-ingest
gcr.io/cloud-marketplace
gcr.io/cloud-ssa
gcr.io/cloudsql-docker
gcr.io/config-management-release
gcr.io/deeplearning-platform-release
gcr.io/foundry-dev
gcr.io/fn-img
gcr.io/gae-runtimes
gcr.io/serverless-runtimes
gcr.io/gke-node-images
gcr.io/gke-release
gcr.io/gkeconnect
gcr.io/google-containers
gcr.io/kubeflow
gcr.io/kubeflow-images-public
gcr.io/kubernetes-helm
gcr.io/istio-release
gcr.io/ml-pipeline
gcr.io/projectcalico-org
gcr.io/rbe-containers
gcr.io/rbe-windows-test-images
gcr.io/speckle-umbrella
gcr.io/stackdriver-agents
gcr.io/tensorflow
gcr.io/vertex-ai
gcr.io/vertex-ai-restricted
gke.gcr.io
k8s.gcr.io
In all cases, the multi-regional versions of these repositories are also
available.
Google Kubernetes Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
container.googleapis.com
Details
The Kubernetes Engine API can be protected by VPC Service Controls and the product can be used normally inside service perimeters. This compatibility includes the protection of the DNS endpoint for GKE, which is a service for accessing the cluster's control plane and uses the *.gke.goog domain.
When you restrict the container.googleapis.com service in a perimeter, the perimeter also restricts the DNS endpoint for GKE.
For more information about Google Kubernetes Engine, refer to the
product documentation .
Limitations
To fully protect the GKE API, you must include the Kubernetes Metadata API ( kubernetesmetadata.googleapis.com ) as well in your perimeter.
Only private clusters can be protected using VPC Service Controls. Clusters with
public IP addresses are not supported by VPC Service Controls.
The GKE service entry in this table only specifies the control of
the GKE API itself. GKE relies on several other underlying
services for its operation, such as Compute Engine, Cloud Logging,
Cloud Monitoring, and the Autoscaling API ( autoscaling.googleapis.com ). To
effectively secure your GKE environments with VPC Service Controls, you
must ensure that all necessary underlying services are also included within your
service perimeter. See the
GKE
documentation for a complete list of these services.
Google Security Operations
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
chronicle.googleapis.com, chronicleservicemanager.googleapis.com
Details
The APIs for Google Security Operations can be protected by VPC Service Controls and Google SecOps can be used normally inside service perimeters. To use Google SecOps from
within VPC Service Controls perimeters, see Configure VPC Service Controls for Google Security Operations .
For more information about Google Security Operations, refer to the
product documentation .
Limitations
For information about the limitations of using Google Security Operations with VPC Service Controls,
see VPC Service Controls for Google Security Operations .
Container Security API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
containersecurity.googleapis.com
Details
The API for Container Security API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Container Security API, refer to the
product documentation .
Limitations
The Container Security API integration with VPC Service Controls has no known limitations.
Image streaming
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
containerfilesystem.googleapis.com
Details
Image streaming is a data streaming feature that provides
shorter container image pull times for images stored in Artifact Registry for products
like GKE, Batch, Dataflow, Managed Service for Apache Spark,
and Cloud Workstations.
If VPC Service Controls protects your container images and you use Image streaming,
you must also include the Image streaming API in the service perimeter.
For more information about Image streaming, refer to the
product documentation .
Limitations
The following read-only repositories
are available to all projects regardless of any restrictions enforced by service perimeters:
gcr.io/anthos-baremetal-release
gcr.io/asci-toolchain
gcr.io/cloud-airflow-releaser
gcr.io/cloud-builders
gcr.io/cloud-dataflow
gcr.io/cloud-ingest
gcr.io/cloud-marketplace
gcr.io/cloud-ssa
gcr.io/cloudsql-docker
gcr.io/config-management-release
gcr.io/deeplearning-platform-release
gcr.io/foundry-dev
gcr.io/fn-img
gcr.io/gae-runtimes
gcr.io/serverless-runtimes
gcr.io/gke-node-images
gcr.io/gke-release
gcr.io/gkeconnect
gcr.io/google-containers
gcr.io/kubeflow
gcr.io/kubeflow-images-public
gcr.io/kubernetes-helm
gcr.io/istio-release
gcr.io/ml-pipeline
gcr.io/projectcalico-org
gcr.io/rbe-containers
gcr.io/rbe-windows-test-images
gcr.io/speckle-umbrella
gcr.io/stackdriver-agents
gcr.io/tensorflow
gcr.io/vertex-ai
gcr.io/vertex-ai-restricted
gke.gcr.io
k8s.gcr.io
Fleets
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
gkeconnect.googleapis.com, gkehub.googleapis.com, connectgateway.googleapis.com
Details
Fleet management APIs, including the Connect gateway , can be protected with VPC Service Controls, and fleet management features can be used normally inside service perimeters.
For more information, see the following:
Use VPC Service Controls with the Connect Agent
Use VPC Service Controls with the Connect gateway
For more information about Fleets, refer to the
product documentation .
Limitations
Although all fleet management features can be used normally, enabling a service
perimeter around the Stackdriver API restricts the Policy Controller fleet
feature from integrating with Security Command Center.
When using the Connect gateway to access GKE clusters, VPC Service Controls perimeter for container.googleapis.com is not enforced.
FleetPackage API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
configdelivery.googleapis.com
Details
The API for FleetPackage API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about FleetPackage API, refer to the
product documentation .
Limitations
The FleetPackage API integration with VPC Service Controls has no known limitations.
Resource Manager
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudresourcemanager.googleapis.com
Details
The following Cloud Resource Manager API methods can be protected by VPC Service Controls:
v1 project.setIAMPolicy
v1beta1 project.setIAMPolicy
v3 tagKeys.*
v3 tagValues.*
v3 tagValues.tagHolds.*
v3 tagBindings.*
For more information about Resource Manager, refer to the
product documentation .
Limitations
Only tag keys directly parented by a project resource and corresponding tag values
can be protected using VPC Service Controls. When a project is added to a
VPC Service Controls perimeter, all tag keys and corresponding tag values under
the project are considered to be resources within the perimeter.
Tag keys parented by an organization resource and their corresponding tag values
can't be included in a VPC Service Controls perimeter and can't be protected using
VPC Service Controls.
Clients inside a VPC Service Controls perimeter can't access tag keys and
corresponding values parented by an organization resource, unless an egress rule
allowing access is set on the perimeter. For more information about setting egress
rules, see
Ingress and egress rules .
Tag bindings are considered resources within the same perimeter as the resource
to which the tag value is bound. For example, the tag bindings on a Compute Engine
instance in a project is considered to belong to that project regardless of where
the tag key is defined.
Some services such as Compute Engine allow
creating tag bindings
using their own service APIs, in addition to the Resource Manager service APIs. For
example, adding tags to a Compute Engine VM during resource creation. To protect
tag bindings created or deleted using these service APIs, add the corresponding
service, such as compute.googleapis.com , to the list of restricted
services in the perimeter.
Tags support method-level restrictions, so you can scope the
method_selectors to specific API methods. For a list of restrictable
methods, see
Supported service method restrictions .
Granting the owner role on a project through Google Cloud console is now supported by
VPC Service Controls. You cannot send an owner invitation or accept an invitation
outside service perimeters. If you try to accept an invitation from outside the perimeter
you will not be granted the owner role and there will not be any error or warning message displayed.
Cloud Logging
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
logging.googleapis.com
Details
The API for Cloud Logging can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Logging, refer to the
product documentation .
Limitations
Aggregated log sinks (folder or organization sinks where
includeChildren is true ) can access data from projects inside a service
perimeter. To restrict aggregated log sinks from accessing data inside a perimeter, we recommend
using IAM to manage Logging permissions at the folder-level
or organization-level aggregated log sinks.
VPC Service Controls does not support adding folder or
organization resources to service perimeters. Therefore, you cannot use VPC Service Controls to
protect folder-level and organization-level logs, including aggregate logs. To manage Logging
permissions at the folder level or organizational level, we recommend using IAM.
If you route logs, using an organization-level or folder-level log sink, to a
resource that a service perimeter protects, then you must add an ingress rule to the
service perimeter. The ingress rule must allow access to the resource from the service
account that the log sink uses. This step is not necessary for project-level sinks.
For more information, refer to the following pages:
Ingress and egress rules
Managing service perimeters
Configure and manage sinks
When you specify an ingress or egress policy for a service perimeter, you cannot use ANY_SERVICE_ACCOUNT
and ANY_USER_ACCOUNT as an identity type to export logs from a Cloud Logging sink to a Cloud Storage resource.
As a workaround, use ANY_IDENTITY as the identity type.
Certificate Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
certificatemanager.googleapis.com
Details
The API for Certificate Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Certificate Manager, refer to the
product documentation .
Limitations
The Certificate Manager integration with VPC Service Controls has no known limitations.
Cloud Monitoring
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
monitoring.googleapis.com
Details
The API for Cloud Monitoring can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Monitoring, refer to the
product documentation .
Limitations
Notification channels, alerting policies, and custom metrics can be used
together to exfiltrate data/metadata. As of today, a user of
Monitoring can set up a notification channel that points to
an entity outside of the organization e.g. "baduser@badcompany.com". The
user then sets up custom metrics and corresponding alert policies that
utilize the notification channel. As a result, by manipulating the custom
metrics, the user can trigger alerts and send alert firing notifications,
exfiltrating sensitive data to baduser@badcompany.com, outside of
the VPC Service Controls perimeter.
Any Compute Engine or AWS VMs with the
Monitoring Agent
installed must be inside the VPC Service Controls perimeter or agent
metric writes will fail.
Any GKE Pods must be inside the
VPC Service Controls perimeter or
GKE Monitoring will not work.
When querying metrics for a
metrics scope , only the
VPC Service Controls perimeter of the scoping project for the metric scope is
considered. The perimeters of the individual monitored projects
in the metrics scope aren't considered.
A project can only be added as a monitored project to an existing
metrics scope if that project is in the
same VPC Service Controls perimeter as the metrics scope's scoping project.
To access Monitoring in the Google Cloud console for a host
project that is protected by a service perimeter, use an
ingress rule .
Cloud Profiler
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudprofiler.googleapis.com
Details
The API for Cloud Profiler can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Profiler, refer to the
product documentation .
Limitations
The Cloud Profiler integration with VPC Service Controls has no known limitations.
Telemetry API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
telemetry.googleapis.com
Details
The API for Telemetry API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Telemetry API, refer to the
product documentation .
Limitations
The Telemetry API integration with VPC Service Controls has no known limitations.
Timeseries Insights API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
timeseriesinsights.googleapis.com
Details
The API for Timeseries Insights API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Timeseries Insights API, refer to the
product documentation .
Limitations
The Timeseries Insights API integration with VPC Service Controls has no known limitations.
Cloud Trace
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudtrace.googleapis.com
Details
The API for Cloud Trace can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Trace, refer to the
product documentation .
Limitations
The Cloud Trace integration with VPC Service Controls has no known limitations.
Cloud TPU
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
tpu.googleapis.com
Details
The API for Cloud TPU can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud TPU, refer to the
product documentation .
Limitations
The Cloud TPU integration with VPC Service Controls has no known limitations.
Natural Language API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
language.googleapis.com
Details
For more information about Natural Language API, refer to the
product documentation .
Limitations
Because Natural Language API is a stateless API and doesn't run on projects,
using VPC Service Controls to protect Natural Language API does not have any effect.
NCC
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
networkconnectivity.googleapis.com
Details
The API for NCC can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about NCC, refer to the
product documentation .
Limitations
The NCC integration with VPC Service Controls has no known limitations.
Cloud Asset API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudasset.googleapis.com
Details
The API for Cloud Asset API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Asset API, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support access to folder-level
or organization-level Cloud Asset API resources from resources and
clients inside a service perimeter. VPC Service Controls
restricts project-level Cloud Asset API resources. You can specify an
egress policy to prevent access to project-level Cloud Asset API
resources from projects inside the perimeter.
VPC Service Controls doesn't support adding folder-level or
organization-level Cloud Asset API resources into a service perimeter. You cannot use a perimeter to restrict folder-level or
organization-level Cloud Asset API resources. To manage Cloud Asset Inventory
permissions at the folder or organization level, we recommend using
IAM.
VPC Service Controls restricts project-level Cloud Asset API
resources but doesn't enforce restrictions at the folder-level or
organization-level scopes. Querying these resources using a
folder or organization scope in the Google Cloud console can
expose data from projects inside a service perimeter. To restrict
access to these resources, use IAM controls.
Speech-to-Text
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
speech.googleapis.com
Details
The API for Speech-to-Text can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Speech-to-Text, refer to the
product documentation .
Limitations
The Speech-to-Text integration with VPC Service Controls has no known limitations.
Text-to-Speech
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
texttospeech.googleapis.com
Details
The API for Text-to-Speech can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Text-to-Speech, refer to the
product documentation .
Limitations
The Text-to-Speech integration with VPC Service Controls has no known limitations.
Translation
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
translate.googleapis.com
Details
The API for Translation can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Translation, refer to the
product documentation .
Limitations
Cloud Translation - Advanced (v3) supports VPC Service Controls but
not Cloud Translation - Basic (v2). To apply VPC Service Controls,
you must use Cloud Translation - Advanced (v3). For more information
about the different editions, see Compare
Basic and Advanced .
License Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
licensemanager.googleapis.com
Details
Create a service perimeter for License Manager
with the License Manager API to secure your licenses.
For more information about License Manager, refer to the
product documentation .
Limitations
The License Manager integration with VPC Service Controls has no known limitations.
Live Stream API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
livestream.googleapis.com
Details
Use VPC Service Controls
with the Live Stream API to secure your pipeline.
For more information about Live Stream API, refer to the
product documentation .
Limitations
To protect input endpoints with a service perimeter, you must follow
the instructions for setting up a private pool and send input video streams over a private
connection.
Transcoder API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
transcoder.googleapis.com
Details
The API for Transcoder API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Transcoder API, refer to the
product documentation .
Limitations
The Transcoder API integration with VPC Service Controls has no known limitations.
Video Stitcher API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
videostitcher.googleapis.com
Details
The API for Video Stitcher API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Video Stitcher API, refer to the
product documentation .
Limitations
The Video Stitcher API integration with VPC Service Controls has no known limitations.
Access Approval
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
accessapproval.googleapis.com
Details
The API for Access Approval can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Access Approval, refer to the
product documentation .
Limitations
The Access Approval integration with VPC Service Controls has no known limitations.
Cloud Healthcare API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
healthcare.googleapis.com
Details
The API for Cloud Healthcare API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Healthcare API, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support customer-managed encryption keys (CMEK) in the Cloud Healthcare API.
Storage Transfer Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
storagetransfer.googleapis.com
Details
We recommend placing your Storage Transfer Service project within the same
service perimeter as your Cloud Storage
resources. This protects both your transfer and your
Cloud Storage resources. Storage Transfer Service also
supports scenarios where the Storage Transfer Service project is
not in the same perimeter as your Cloud Storage buckets,
using an egress policy .
For setup information, see
Using
Storage Transfer Service with VPC Service Controls
Transfer service for on-premises data
See
Using Transfer for on-premises
with VPC Service Controls for details and setup information for
Transfer for on-premises.
For more information about Storage Transfer Service, refer to the
product documentation .
Limitations
The Storage Transfer Service integration with VPC Service Controls has no known limitations.
Service Control
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
servicecontrol.googleapis.com
Details
The API for Service Control can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Service Control, refer to the
product documentation .
Limitations
When you call the Service Control API from a VPC network in a service
perimeter with Service Control restricted to report billing or analytics metrics, you can only use the
Service Control report
method to report metrics for VPC Service Controls supported services.
Memorystore for Redis
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
redis.googleapis.com
Details
The API for Memorystore for Redis can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Memorystore for Redis, refer to the
product documentation .
Limitations
Service perimeters protect only the Memorystore for Redis API. Perimeters
do not protect normal data access on Memorystore for Redis instances
within the same network.
If the Cloud Storage API is also protected, then
Memorystore for Redis import and export operations can only read and
write to a Cloud Storage bucket within the same service perimeter as
the Memorystore for Redis instance.
If you use both Shared VPC and VPC Service Controls, you must have the host
project that provides the network and the service project that contains the Redis
instance inside the same perimeter in order for Redis requests to succeed. At any time,
separating the host project and service project with a perimeter can cause a Redis
instance failure, in addition to blocked requests. For more information, see Memorystore for Redis configuration requirements .
Memorystore for Memcached
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
memcache.googleapis.com
Details
The API for Memorystore for Memcached can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Memorystore for Memcached, refer to the
product documentation .
Limitations
Service perimeters protect only the Memorystore for Memcached API. Perimeters
do not protect normal data access on Memorystore for Memcached instances
within the same network.
Memorystore for Valkey
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
memorystore.googleapis.com
Details
Service perimeters protect only the Memorystore for Valkey API. Perimeters
do not protect normal data access on Memorystore for Valkey instances
within the same network.
If the Cloud Storage API is also protected, then
Memorystore for Valkey import and export operations can only read and
write to a Cloud Storage bucket within the same service perimeter as
the Memorystore for Valkey instance.
If you use both Shared VPC and VPC Service Controls, you must have the host
project that provides the network and the service project that contains the Redis
instance inside the same perimeter in order for Redis requests to succeed. At any time,
separating the host project and service project with a perimeter can cause a Redis
instance failure, in addition to blocked requests. For more information, see Memorystore for Valkey configuration requirements .
The Memorystore for Valkey API is memorystore.googleapis.com .
For this reason, the display name for Memorystore for Valkey is "Memorystore
API" when using the VPC Service Controls in the Google Cloud console.
For more information about Memorystore for Valkey, refer to the
product documentation .
Limitations
The Memorystore for Valkey integration with VPC Service Controls has no known limitations.
Service Directory
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
servicedirectory.googleapis.com
Details
The API for Service Directory can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Service Directory, refer to the
product documentation .
Limitations
The Service Directory integration with VPC Service Controls has no known limitations.
Transfer Appliance
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
No. The API for Transfer Appliance cannot be protected by service perimeters.
However, Transfer Appliance can be used normally in projects inside a perimeter.
Details
Transfer Appliance is fully supported for projects using
VPC Service Controls.
Transfer Appliance doesn't offer an API, and therefore does
not support API-related features in VPC Service Controls.
For more information about Transfer Appliance, refer to the
product documentation .
Limitations
When Cloud Storage is protected by VPC Service Controls, the
Cloud KMS key you share with the Transfer Appliance
Team must be within the same project as the destination
Cloud Storage bucket.
Oracle Database@Google Cloud
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
oracledatabase.googleapis.com
Details
The API for Oracle Database@Google Cloud can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Oracle Database@Google Cloud, refer to the
product documentation .
Limitations
VPC Service Controls perimeters restrict only the Oracle Database@Google Cloud control plane API, that is,
oracledatabase.googleapis.com . Service perimeters don't restrict data plane
access to underlying databases (such as, Exadata Databases or Autonomous Databases) that
reside in the Oracle Cloud Infrastructure (OCI) environment.
VPC Service Controls perimeters don't restrict
OCI control plane APIs .
You can't use VPC Service Controls perimeters to restrict Oracle Virtual Cloud Networks (VCNs)
directly because the VCNs are located outside of Google Cloud. To learn how to
secure ingress and egress traffic on private connections, see
OCI documentation: Network Security Groups .
You can't use VPC Service Controls perimeters for the networking layer between Google Cloud
and OCI. As a result, the establishment of connections to Oracle databases isn't
monitored or restricted by service perimeters.
Organization Policy Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
orgpolicy.googleapis.com
Details
The API for Organization Policy Service can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Organization Policy Service, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support access restrictions to folder-level or
organization-level organization policies that are inherited by the project.
VPC Service Controls protects project-level Organization Policy Service API resources.
For example, if an ingress rule restricts a user from accessing the Organization Policy Service API, that
user gets a 403 error when querying for organization policies enforced on the project. However,
the user is still able to access the organization policies of the folder and organization
containing the project.
OS Login
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
oslogin.googleapis.com
Details
You can call the OS Login API from within VPC Service Controls perimeters. To manage
OS Login from within VPC Service Controls perimeters,
set up OS Login .
SSH connections to VM instances are not protected by VPC Service Controls.
For more information about OS Login, refer to the
product documentation .
Limitations
The OS Login methods for reading and writing SSH keys don't enforce VPC Service Controls perimeters. Use VPC accessible services to disable access to OS Login APIs.
Personalized Service Health
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
servicehealth.googleapis.com
Details
The API for Personalized Service Health can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Personalized Service Health, refer to the
product documentation .
Limitations
VPC Service Controls does not support the OrganizationEvents and OrganizationImpacts resources of
the Service Health API. Therefore, VPC Service Controls policy checks won't occur when you call the methods
for these resources. However, you can call the methods from a service perimeter using a
restricted VIP.
VM Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
osconfig.googleapis.com
Details
You can call the OS Config API from within VPC Service Controls perimeters. To use
VM Manager from within VPC Service Controls perimeters,
set up VM Manager .
For more information about VM Manager, refer to the
product documentation .
Limitations
To fully protect VM Manager, you must include all of the following APIs in
your perimeter:
OS Config API ( osconfig.googleapis.com )
Compute Engine API ( compute.googleapis.com )
Artifact Analysis API ( containeranalysis.googleapis.com )
VM Manager does not host package and patch content. OS patch management uses
the update tools for the operating system which require that package updates and
patches are retrievable on the VM. For patching to work, you might need to use
Cloud NAT or host your own package repository or Windows Server Update Service
within your Virtual Private Cloud.
Workflows
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
workflows.googleapis.com
Details
Workflows is an orchestration platform that can combine Google Cloud services and
HTTP-based APIs to execute services in an order that you define.
When you protect the Workflows API using a service perimeter, the
Workflow Executions API is also protected. You do not need to separately
add workflowexecutions.googleapis.com to your perimeter's list of protected
services.
HTTP requests from a Workflows execution are supported as follows:
Authenticated
requests to VPC Service Controls-compliant Google Cloud endpoints are
allowed.
Requests to Cloud Run functions and Cloud Run service endpoints are allowed.
Requests to third-party endpoints are blocked.
Requests to non-VPC Service Controls-compliant Google Cloud endpoints
are blocked.
For more information about Workflows, refer to the
product documentation .
Limitations
The Workflows integration with VPC Service Controls has no known limitations.
Filestore
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
file.googleapis.com
Details
The API for Filestore can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Filestore, refer to the
product documentation .
Limitations
Service perimeters protect only the Filestore API. Perimeters
do not protect normal NFS data access on Filestore instances
within the same network.
If you use both Shared VPC and VPC Service Controls, you must have the host
project that provides the network and the service project that contains the
Filestore instance inside the same perimeter for the Filestore
instance to function correctly. Separating the host project and service project
with a perimeter might cause the existing instances to become unavailable and
might not create new instances.
Parallelstore
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
parallelstore.googleapis.com
Details
For more information about Parallelstore, refer to the
product documentation .
Limitations
If you use both Shared VPC and VPC Service Controls, you must have the host
project that provides the network and the service project that contains the
Parallelstore instance inside the same perimeter for the Parallelstore
instance to function correctly. Separating the host project and service project
with a perimeter might cause the existing instances to become unavailable and
might not create new instances.
Container Threat Detection
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
containerthreatdetection.googleapis.com
Details
The API for Container Threat Detection can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Container Threat Detection, refer to the
product documentation .
Limitations
You must grant ingress access to the service perimeter
from the Container Threat Detection service account. For more information, see
Scanning projects protected by a service perimeter .
Ads Data Hub
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
adsdatahub.googleapis.com
Details
For more information about Ads Data Hub, refer to the
product documentation .
Limitations
Ads Data Hub and VPC Service Controls are subject to different terms of service. Review the terms of each
product for details.
Certain Ads Data Hub features (such as custom audience activation, custom bidding, and
LiveRamp match tables) require certain user data to be exported outside of the VPC Service Controls
perimeter. If Ads Data Hub is added as a restricted service, it will bypass VPC Service Controls
policies for these features in order to retain their functionality.
All dependent services must be included as allowed services in the same VPC Service Controls perimeter. For
example, since Ads Data Hub relies on BigQuery, BigQuery must also be
added. In general, VPC Service Controls best practices recommend including all services in the perimeter,
i.e. “restricting all services”.
Customers with multi-tier Ads Data Hub account structures (such as agencies with
subsidiaries) should have all of their admin projects in the same perimeter. For simplicity,
Ads Data Hub recommends that customers with multi-tier account structures restrict
their admin projects to the same Google Cloud organization.
Security Token Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
sts.googleapis.com
Details
VPC Service Controls only restricts token exchanges if the
audience
in the request is a project-level resource. For example, VPC Service Controls doesn't restrict requests for
downscoped tokens ,
because those requests have no audience. VPC Service Controls also doesn't restrict requests for
Workforce Identity Federation
because the audience is an organization-level resource.
For more information about Security Token Service, refer to the
product documentation .
Limitations
When you create an ingress or egress rule to allow token exchanges, you must set the identity type to ANY_IDENTITY because the token method has no authorization.
Firestore/Datastore
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
firestore.googleapis.com, datastore.googleapis.com, firestorekeyvisualizer.googleapis.com
Details
The firestore.googleapis.com , datastore.googleapis.com ,
and firestorekeyvisualizer.googleapis.com services are bundled together.
When you restrict the firestore.googleapis.com service in a perimeter,
the perimeter also restricts the datastore.googleapis.com and
firestorekeyvisualizer.googleapis.com services. You don't need to separately add these services to your perimeter's list of protected services.
To restrict datastore.googleapis.com service,
use the firestore.googleapis.com service name .
To get full egress protection on import and export operations,
you must use the Firestore service agent. See the following for more information:
Securing Firestore import and export operations with VPC Service Controls .
Securing Datastore import and export operations with VPC Service Controls .
For more information about Firestore/Datastore, refer to the
product documentation .
Limitations
Import and export operations are not fully protected unless you
use the Firestore service agent. See the following for more information:
Securing Firestore import and export operations with VPC Service Controls .
Securing Datastore import and export operations with VPC Service Controls .
App Engine legacy bundled services for Datastore
do not support service perimeters. Protecting the Datastore
service with a service perimeter blocks traffic from
App Engine legacy bundled services. Legacy bundled services include:
Java 8 Datastore with App Engine APIs
Python 2 NDB client library for Datastore
Go 1.11 Datastore with App Engine APIs
To use
Firestore with MongoDB compatibility
with restricted VIP, you must configure connectivity to
restricted.firestore.goog as described in
Configure Private Google Access in Firestore with MongoDB compatibility .
This domain and its IP addresses are used only by the Firestore with
MongoDB compatibility service and are VPC Service Controls compliant.
Migrate to Virtual Machines
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
vmmigration.googleapis.com
Details
The API for Migrate to Virtual Machines can be protected by VPC Service Controls, and the product
can be used normally inside service perimeters.
For more information about Migrate to Virtual Machines, refer to the
product documentation .
Limitations
To fully protect Migrate to Virtual Machines, add all of the following
APIs to the service perimeter:
Artifact Registry API ( artifactregistry.googleapis.com )
Pub/Sub API ( pubsub.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
Secret Manager API ( secretmanager.googleapis.com )
Compute Engine API ( compute.googleapis.com )
For more information, see the
Migrate to Virtual Machines documentation.
Migration Center
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
migrationcenter.googleapis.com
rapidmigrationassessment.googleapis.com
Details
VPC Service Controls lets you protect the infrastructure data that you collect with
Migration Center with a service perimeter.
For more information about Migration Center, refer to the
product documentation .
Limitations
After you enable the service perimeter, you can't transfer your infrastructure data
to StratoZone.
Backup and DR Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
backupdr.googleapis.com
Details
The API for Backup and DR Service can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Backup and DR Service, refer to the
product documentation .
Limitations
If you remove the internet default route from the service producer project using the command gcloud services vpc-peerings enable-vpc-service-controls ,
then you may not be able to access or deploy the management console. If you encounter this issue, contact Google Cloud Customer Care .
Backup for GKE
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
gkebackup.googleapis.com
Details
You can use VPC Service Controls to protect backup for GKE and you can use backup for GKE features normally inside service perimeters.
For more information about Backup for GKE, refer to the
product documentation .
Limitations
The Backup for GKE integration with VPC Service Controls has no known limitations.
Retail API
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
retail.googleapis.com
Details
The API for Retail API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Retail API, refer to the
product documentation .
Limitations
The Retail API integration with VPC Service Controls has no known limitations.
Application Integration
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
integrations.googleapis.com
Details
Application Integration is a collaborative workflow management system that allows you
to create, augment, debug and understand core business system workflows.
The workflows on the Application Integration are made up of triggers and tasks.
There are several kinds of triggers such as api trigger/Pub/Sub trigger/cron
trigger/sfdc trigger.
For more information about Application Integration, refer to the
product documentation .
Limitations
VPC Service Controls protects Application Integration
logs. If you use Application Integration, verify the support for vpcsc
integration with the Application Integration team.
Integration Connectors
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
connectors.googleapis.com
Details
The API for Integration Connectors can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Integration Connectors, refer to the
product documentation .
Limitations
To connect to non-Google Cloud backends (for example, on-premises systems or services in other clouds), you must use a Private Service Connect attachment . Doing so keeps the connection within your VPC network and off the public internet. Connections to these backends fail without an attachment.
When using event subscriptions within a VPC Service Controls perimeter, automatic backend registration isn't supported. You must manually configure the backend to send events to the connection's event listener endpoint. These event subscriptions also require a Private Service Connect attachment .
Error Reporting
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
clouderrorreporting.googleapis.com
Details
The API for Error Reporting can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Error Reporting, refer to the
product documentation .
Limitations
Notifications sent when a new or reoccurring error group is found
contain information about the error group. To prevent data exfiltration outside of the
VPC Service Controls perimeter, ensure that
notification channels are within your organization.
Cloud Workstations
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
workstations.googleapis.com
Details
The API for Cloud Workstations can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Workstations, refer to the
product documentation .
Limitations
To fully protect Cloud Workstations, you must restrict the
Compute Engine API in your service perimeter whenever you restrict the
Cloud Workstations API.
Ensure that Google Cloud Storage API, Google Container Registry API,
and Artifact Registry API are
VPC accessible in your service
perimeter. This is needed to pull images onto your workstation. We also
recommended that you allow Cloud Logging API and Cloud
Error Reporting API to be VPC accessible in your
service perimeter, although this is not required to use
Cloud Workstations.
Ensure that your workstation cluster is
private .
Configuring a private cluster prevents connections to your workstations from
outside your VPC service perimeter.
Ensure that you disable public IP addresses in your workstation
configuration. Failing to do so results in VMs with public IP
addresses in your project. We strongly recommend that you use the
constraints/compute.vmExternalIpAccess
organization policy constraint to disable public IP addresses for all VMs
in your VPC service perimeter. For details, see
Restricting external IP addresses to specific VMs .
While connecting to your workstation, access control is only based on whether the private
network you are connecting from belongs to the security perimeter. Access control based on
device, public IP address, or location is not supported.
Cloud IDS
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ids.googleapis.com
Details
The API for Cloud IDS can be protected by VPC Service Controls, and the product
can be used normally inside service perimeters.
For more information about Cloud IDS, refer to the
product documentation .
Limitations
Cloud IDS uses Cloud Logging to create threat logs in your project. If
Cloud Logging is restricted by the service perimeter, VPC Service Controls
blocks the Cloud IDS threat logs, even if Cloud IDS is not added as
a restricted service to the perimeter. To use Cloud IDS inside a service
perimeter, you must configure an ingress rule for the
Cloud Logging service account in your service perimeter.
Chrome Enterprise Premium
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
beyondcorp.googleapis.com
Details
For more information about Chrome Enterprise Premium, refer to the
product documentation .
Limitations
The Chrome Enterprise Premium integration with VPC Service Controls has no known limitations.
Policy Troubleshooter
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
policytroubleshooter.googleapis.com
Details
When you restrict the Policy Troubleshooter API with a perimeter,
principals can troubleshoot IAM allow policies only if all resources
involved in the request are in the same perimeter. There are usually two
resources involved in a troubleshooting request:
The resource you're troubleshooting access for. This resource can be any
type. You explicitly specify this resource when you troubleshoot an
allow policy.
The resource you're using to troubleshoot access. This resource is
a project, folder, or organization. In the Google Cloud console and
gcloud CLI, this resource is inferred based on the project, folder,
or organization you have selected. In the REST API, you specify this resource
using the x-goog-user-project header.
This resource can be the same as the resource that you're troubleshooting access for, but it
doesn't need to be.
If these resources aren't in the same perimeter, the request fails.
For more information about Policy Troubleshooter, refer to the
product documentation .
Limitations
The Policy Troubleshooter integration with VPC Service Controls has no known limitations.
Policy Simulator
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
policysimulator.googleapis.com
Details
You can restrict the Policy Simulator API with a perimeter when simulating organization
policies or allow and deny policies.
Principals can simulate organization policies as expected inside service perimeters.
Principals can simulate allow policies only if certain resources involved in the
simulation are in the same perimeter. There are several resources
involved in an allow policy simulation:
The resource whose allow policy you're
simulating. This resource is also called the target
resource . In the Google Cloud console, this is the resource
whose allow policy you're editing. In the gcloud CLI and
REST API, you explicitly specify this resource when you simulate an
allow policy.
The project, folder, or organization that creates and runs
the simulation. This resource is also called the host
resource . In the Google Cloud console and
gcloud CLI, this resource is inferred based on the project, folder,
or organization you have selected. In the REST API, you specify this resource
using the x-goog-user-project header.
This resource can be the same as the resource that you're simulating
access for, but it doesn't need to be.
The resource that provides access logs for the
simulation. In a simulation, there is always one resource
that provides access logs for the simulation. This resource varies
depending on the target resource type:
If you are simulating an allow policy for a project or organization, Policy
Simulator retrieves the access logs for that project or organization.
If you are simulating an allow policy for a different type of resource,
Policy Simulator retrieves the access logs for that resource's parent
project or organization.
If you are simulating multiple resources' allow policies at once, Policy
Simulator retrieves the access logs for the resources' nearest common
project or organization.
All supported resources with relevant allow policies.
When Policy Simulator runs a simulation, it considers all allow
policies that might impact the user's access, including allow policies
on the target resource's ancestor and descendant resources. As a
result, these ancestor and descendant resources are also involved in
simulations.
If the target resource and the host resource aren't in the same
perimeter, the request fails.
If the target resource and the resource that provides access logs for
the simulation aren't in the same perimeter, the request fails.
If the target resource and some supported resources with relevant allow
policies aren't in the same perimeter, the requests succeeds, but the
results might be incomplete. For example, if you're simulating a policy
for a project in a perimeter, the results won't include the allow policy
of the project's parent organization, because organizations are always
outside of VPC Service Controls perimeters. To get more complete
results, you can configure ingress and
egress rules for the perimeter.
For more information about Policy Simulator, refer to the
product documentation .
Limitations
VPC Service Controls does not support adding folder-level or organization-level resources
to service perimeters. Therefore, you cannot use VPC Service Controls to protect
folder-level and organization-level simulations of deny policies. Deny policy simulations
on resources outside of the service perimeter still return complete results, and deny
policy simulations on project-level resources are protected.
Essential Contacts
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
essentialcontacts.googleapis.com
Details
The API for Essential Contacts can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Essential Contacts, refer to the
product documentation .
Limitations
The Essential Contacts integration with VPC Service Controls has no known limitations.
Identity Platform
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
identitytoolkit.googleapis.com, securetoken.googleapis.com
Details
The API for Identity Platform can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Identity Platform, refer to the
product documentation .
Limitations
To fully protect Identity Platform, add the Secure Token API ( securetoken.googleapis.com ) to the
service perimeter to allow token refresh. securetoken.googleapis.com is not
listed on the VPC Service Controls page of the Google Cloud console.
You can only add this service with the
gcloud access-context-manager
perimeters update command.
If your application also integrates with the blocking functions feature , add Cloud Run functions ( cloudfunctions.googleapis.com ) to the
service perimeter.
The use of SMS-based multi-factor authentication (MFA), email authentication, or third-party identity providers causes data to be sent out of the perimeter. If you don't use MFA with SMS, email authentication, or third-party identity providers, disable these features.
GKE Multi-Cloud
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
gkemulticloud.googleapis.com
Details
The API for GKE Multi-Cloud can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about GKE Multi-Cloud, refer to the
product documentation .
Limitations
To fully protect the GKE Multi-Cloud API, you must include the Kubernetes Metadata API ( kubernetesmetadata.googleapis.com ) as well in your perimeter.
GKE On-Prem API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
gkeonprem.googleapis.com
Details
The GKE On-Prem API can be protected by VPC Service Controls, and the API can be used
normally inside service perimeters.
For more information about GKE On-Prem API, refer to the
product documentation .
Limitations
To fully protect the GKE On-Prem API, add all of the following APIs to the
service perimeter:
Kubernetes Metadata API ( kubernetesmetadata.googleapis.com )
Cloud Monitoring API ( monitoring.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Note that
VPC Service Controls doesn't protect against Cloud Logging log exports on a folder or
organization level.
Google Distributed Cloud (software only) for bare metal
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
No. The API for Google Distributed Cloud (software only) for bare metal cannot be protected by service perimeters.
However, Google Distributed Cloud (software only) for bare metal can be used normally in projects inside a perimeter.
Details
You can create a cluster in your environment, which is connected to VPC using Cloud Interconnect or Cloud VPN.
For more information about Google Distributed Cloud (software only) for bare metal, refer to the
product documentation .
Limitations
To protect your clusters, use Restricted VIP in
Google Distributed Cloud (software only) for bare metal, and add all of the following APIs to the service
perimeter:
Artifact Registry API ( artifactregistry.googleapis.com )
Google Cloud Resource Manager API ( cloudresourcemanager.googleapis.com )
Compute Engine API ( compute.googleapis.com )
Connect Gateway API ( connectgateway.googleapis.com )
Google Container Registry API ( containerregistry.googleapis.com )
GKE Connect API ( gkeconnect.googleapis.com )
GKE Hub API ( gkehub.googleapis.com )
GKE On-Prem API ( gkeonprem.googleapis.com )
Cloud IAM API ( iam.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Cloud Monitoring API ( monitoring.googleapis.com )
Config Monitoring for Ops API ( opsconfigmonitoring.googleapis.com )
Service Control API ( servicecontrol.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
On-Demand Scanning API
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ondemandscanning.googleapis.com
Details
The API for On-Demand Scanning API can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about On-Demand Scanning API, refer to the
product documentation .
Limitations
The On-Demand Scanning API integration with VPC Service Controls has no known limitations.
Looker (Google Cloud core)
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
looker.googleapis.com
Details
The API for Looker (Google Cloud core) can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Looker (Google Cloud core), refer to the
product documentation .
Limitations
Only Enterprise or Embed editions of Looker (Google Cloud core) instances using private IP connections support VPC Service Controls compliance. Looker (Google Cloud core) instances with public IP connections or both public and private IP connections do not support VPC Service Controls compliance. To create an instance that uses a private IP connection, select Private IP in the Networking section of the Create instance page of the Google Cloud console.
When placing or creating a Looker (Google Cloud core) instance inside a VPC Service Controls service perimeter, you must remove the default route to the internet by calling the services.enableVpcServiceControls method or by running the following gcloud command: gcloud services vpc-peerings enable-vpc-service-controls --network=your-network service=servicenetworking.googleapis.com Removing the default route restricts outgoing traffic to only VPC Service Controls compliant services . For example, sending email will fail because the API that is used to send email is not VPC Service Controls compliant.
If you're using Shared VPC , ensure that you either include the Looker (Google Cloud core) service project in the same service perimeter as the Shared VPC host project or create a perimeter bridge between the two projects. If the Looker (Google Cloud core) service project and the Shared VPC host project are not in same perimeter or cannot communicate through a perimeter bridge, instance creation could fail or the Looker (Google Cloud core) instance may not function properly.
If you're using Looker Studio Pro or Studio in Looker} , the Looker connector can't connect to a Looker (Google Cloud core) instance that is inside a VPC Service Controls perimeter. For more information about limitations of the Looker connector, see the Overview of Looker connector requirements, limits, and feature support documentation page.
Public Certificate Authority
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
publicca.googleapis.com
Details
The API for Public Certificate Authority can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Public Certificate Authority, refer to the
product documentation .
Limitations
The Public Certificate Authority integration with VPC Service Controls has no known limitations.
Storage batch operations
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
storagebatchoperations.googleapis.com
Details
To use VPC Service Controls with storage batch operations, create a service perimeter to protect the following project and Google Cloud services:
Cloud Storage project
Storage batch operations API ( storagebatchoperations.googleapis.com)
Cloud Storage API ( storage.googleapis.com )
Optional: Cloud KMS API ( cloudkms.googleapis.com) , if you use the object encryption key updates job type .
To allow access to storage batch operations from outside the perimeter, you must configure ingress policies .
For more information about Storage batch operations, refer to the
product documentation .
Limitations
The Storage batch operations integration with VPC Service Controls has no known limitations.
Storage Insights
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
storageinsights.googleapis.com
Details
The API for Storage Insights can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Storage Insights, refer to the
product documentation .
Limitations
The Storage Insights integration with VPC Service Controls has no known limitations.
Dataflow Data Pipelines
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
datapipelines.googleapis.com
Details
To fully protect Dataflow Data Pipelines, include all of the following APIs in
your perimeter:
Dataflow API ( dataflow.googleapis.com )
Cloud Scheduler API ( cloudscheduler.googleapis.com )
Container Registry API ( containerregistry.googleapis.com )
For more information about Dataflow Data Pipelines, refer to the
product documentation .
Limitations
The Dataflow Data Pipelines integration with VPC Service Controls has no known limitations.
Security Command Center
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
securitycenter.googleapis.com,
securitycentermanagement.googleapis.com
Details
The APIs for Security Command Center can be protected by VPC Service Controls, and Security Command Center can be used
normally inside service perimeters.
The securitycenter.googleapis.com and securitycentermanagement.googleapis.com
services are bundled together. When you restrict the securitycenter.googleapis.com
service in a perimeter, the perimeter restricts the securitycentermanagement.googleapis.com
service by default. You cannot add the securitycentermanagement.googleapis.com
service to the list of restricted services in a perimeter because it is bundled with
securitycenter.googleapis.com .
For more information about Security Command Center, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support access to folder-level or organization-level
Security Command Center API resources from resources and clients inside a service perimeter. VPC Service Controls
protects project-level Security Command Center API resources. You can specify an egress policy to prevent
access to project-level Security Command Center API resources from projects inside the perimeter.
VPC Service Controls doesn't support adding folder-level or organization-level
Security Command Center API resources into a service perimeter. You cannot use a perimeter to protect
folder-level or organization-level Security Command Center API resources. To manage Security Command Center permissions
at the folder or organization level, we recommend using IAM.
VPC Service Controls doesn't support the security posture
service because security posture resources (such as postures, posture deployments,
and predefined posture templates) are organization-level resources.
You cannot export findings at the folder or organization level into destinations
inside a service perimeter.
VPC Service Controls doesn't support Google Security Operations (Google Security Operations SIEM
and Google Security Operations SOAR). Enabling Security Command Center Enterprise on projects within a service
perimeter might lead to violations from unsupported security operations services. If you have
VPC Service Controls configured, before you create a Google Security Operations instance, move
the Google Cloud project and Cloud Key Management Service (Cloud KMS) for customer-managed
encryption keys (CMEK) project outside the VPC Service Controls perimeter.
You must enable perimeter access in the following scenarios:
When you enable finding
notifications at the folder or organization level and the Pub/Sub topic is
inside a service perimeter.
When you
export data to BigQuery from the folder or organization level and
BigQuery is inside a service perimeter.
When you integrate Security Command Center with a supported third-party SIEM or SOAR product and
the product is deployed inside a service perimeter in a Google Cloud environment.
Supported SIEMs and SOARs include
Splunk
and IBM QRadar .
When you enable Assured Open Source Software
within a service perimeter.
When you want
Virtual Machine Threat Detection to scan VMs in your service perimeters .
When you want to allow
Vulnerability Assessment for Google Cloud to scan VMs in your perimeters .
To use Container Threat Detection, you must
grant the service account for Container Threat Detection inbound access to that service
perimeter .
When you want
Event Threat Detection to monitor logging streams in Security Command Center within
VPC Service Controls perimeters.
When you want to use
Mandiant Attack Surface Management in Security Command Center within
VPC Service Controls perimeters.
Cloud Customer Care
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudsupport.googleapis.com
Details
The API for Cloud Customer Care can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Cloud Customer Care, refer to the
product documentation .
Limitations
VPC Service Controls protects data accessed through the Cloud Support API but doesn't protect data
accessed through the Google Cloud console.
AI Applications - Vertex AI Search
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
discoveryengine.googleapis.com
Details
The API for AI Applications - Vertex AI Search can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about AI Applications - Vertex AI Search, refer to the
product documentation .
Limitations
If you configure the Vertex AI Search widget
for public access (that is, without an OAuth token), then calls to
the API backend are made through a Google-managed service agent. Because
this traffic doesn't carry your authentication token, the request can
effectively bypass your organization's configured VPC Service Controls
ingress rules. Even if you protect the
discoveryengine.googleapis.com service inside a
VPC Service Controls perimeter, a widget with public access can still be
reached from outside that perimeter. If your organization requires
VPC Service Controls enforcement to protect sensitive data, don't enable a
widget that has public access.
Confidential Space
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
confidentialcomputing.googleapis.com
Details
To ensure that Confidential Space functions correctly across perimeter boundaries,
you must configure
egress rules .
If your Confidential Space needs to access Cloud Storage buckets
outside your perimeter, create an
egress rule to allow access to those buckets.
If you are enabling Confidential Space API on Compute Engine resources
outside your perimeter, create an
egress rule to allow access to this API.
For more information about Confidential Space, refer to the
product documentation .
Limitations
Serial console
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ssh-serialport.googleapis.com
Details
To use VPC Service Controls protection when connecting to the serial console
for a virtual machine (VM) instance, you need to specify an ingress rule
for the service perimeter. When setting up the ingress rule, the access level for the source must
be an IP-based value and the service name set to ssh-serialport.googleapis.com .
The ingress rule is required to access the serial console even if the source request and target resource are in the same perimeter.
For more information about Serial console, refer to the
product documentation .
Limitations
You can't use SSH-in-browser to access the serial console.
You cannot access a serial console by using Private Google Access. You can access the serial console
only from the public internet.
When using a serial console, identity-based ingress or egress rules cannot be used to allow access to the serial console.
Google Cloud VMware Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
vmwareengine.googleapis.com
Details
For more information about VMware Engine Service Controls, refer to
VPC Service Controls with VMware Engine .
For more information about Google Cloud VMware Engine, refer to the
product documentation .
Limitations
When adding existing VMware Engine networks, Private Clouds, Network Policies, and VPC Peering to a VPC Service Perimeter, previously created resources are not checked again to see if they still comply with the perimeter's policies.
Dataform
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
dataform.googleapis.com
Details
To learn how to control access to Dataform with VPC Service Controls, see
Configure VPC Service Controls for Dataform .
For more information about Dataform, refer to the
product documentation .
Limitations
When you restrict Dataform using VPC Service Controls, you must do the following:
Set the dataform.restrictGitRemotes organization policy .
Restrict BigQuery within the same service perimeter as Dataform.
Add user identities to ingress rules to allow these users to authenticate with their Google Account user credentials when scheduling runs , manually triggering runs , or running pipelines . For more information, see Updating ingress and egress policies for a service perimeter and Ingress rules reference .
Ensure that Identity and Access Management permissions granted to the service accounts used in Dataform reflect your security architecture.
Web Security Scanner
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
websecurityscanner.googleapis.com
Details
Web Security Scanner and VPC Service Controls are subject to different terms of service.
Review the terms of each product for details.
Web Security Scanner sends the findings to Security Command Center on demand. You can view or download the
data from the Security Command Center dashboard.
For more information about Web Security Scanner, refer to the
product documentation .
Limitations
The Web Security Scanner integration with VPC Service Controls has no known limitations.
Secure Source Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
securesourcemanager.googleapis.com
Details
You need to configure Certificate Authority Service with a working certificate authority before creating Secure Source Manager VPC Service Controls instances.
You need to configure Private Service Connect before accessing the Secure Source Manager VPC Service Controls instance.
For more information about Secure Source Manager, refer to the
product documentation .
Limitations
SERVICE_NOT_ALLOWED_FROM_VPC audit log violation caused by GKE limitations can be ignored.
To open the VPC Service Controls web interface with a browser, the browser needs access to the following URLs:
https://accounts.google.com
https:// LOCATION_OF_INSTANCE -sourcemanagerredirector-pa.client6.google.com
For example, https://us-central1-sourcemanagerredirector-pa.client6.google.com
https://lh3.googleusercontent.com
Secure Web Proxy
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
networkservices.googleapis.com, networksecurity.googleapis.com
Details
The APIs for Secure Web Proxy can be protected by VPC Service Controls and the product can
be used normally inside service perimeters.
If you provision your proxy with a certificate , then you must also include the Certificate Manager API ( certificatemanager.googleapis.com ) in your service perimeter.
If you enable TLS inspection for your proxy, then you must also include the Certificate Authority Service API ( privateca.googleapis.com ) in your service perimeter.
For more information about Secure Web Proxy, refer to the
product documentation .
Limitations
The Secure Web Proxy integration with VPC Service Controls has no known limitations.
API keys
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
apikeys.googleapis.com
Details
The API for API keys can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about API keys, refer to the
product documentation .
Limitations
The API keys integration with VPC Service Controls has no known limitations.
Partner console in Sovereign Controls by Partners
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudcontrolspartner.googleapis.com
Details
The Cloud Controls Partner API can be protected by VPC Service Controls and the product can be used normally inside service perimeters.
For more information about Partner console in Sovereign Controls by Partners, refer to the
product documentation .
Limitations
This service must be restricted for all non-partners. If you're a partner supporting Sovereign Controls by Partners, you can protect this service using a service perimeter.
Microservices
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
microservices.googleapis.com
Details
The API for Microservices can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Microservices, refer to the
product documentation .
Limitations
The Microservices integration with VPC Service Controls has no known limitations.
Earth Engine
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
earthengine.googleapis.com, earthengine-highvolume.googleapis.com
Details
The earthengine.googleapis.com and earthengine-highvolume.googleapis.com
services are bundled together. When you restrict the earthengine.googleapis.com
service in a perimeter, the perimeter restricts the earthengine-highvolume.googleapis.com
service by default. You cannot add the earthengine-highvolume.googleapis.com
service to the list of restricted services in a perimeter because it is bundled with
earthengine.googleapis.com .
For more information about Earth Engine, refer to the
product documentation .
Limitations
The Earth Engine Code Editor ,
a web-based IDE for the Earth Engine JavaScript API, is not supported and
VPC Service Controls doesn't allow using the Earth Engine Code Editor with resources and
clients inside a service perimeter.
Legacy
assets are not protected by VPC Service Controls.
Export to Google
Drive is not supported by VPC Service Controls.
Earth Engine Apps
are not supported for resources and clients inside a service perimeter.
VPC Service Controls is only available for Premium and Professional
Earth Engine pricing plans. For more information about pricing plans, see
Earth Engine plans .
For more information about limitations and example workarounds, see Earth Engine
access control
documentation .
App Hub
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
apphub.googleapis.com
Details
App Hub enables you to discover and organize infrastructure resources into
applications. You can use VPC Service Controls perimeters to protect the App Hub
resources.
For more information about App Hub, refer to the
product documentation .
Limitations
You must set up VPC Service Controls on the App Hub host and service projects
before you create an application and register services and workloads to the application.
App Hub supports the following resource types:
Application
Discovered service
Discovered workload
Service
Service project attachment
Workload
Cloud Code
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudcode.googleapis.com
Details
The Cloud Code API can be protected by VPC Service Controls. To use Gemini-powered features
in Cloud Code, an ingress policy must be configured to allow traffic from
IDE clients. See the Gemini
documentation for details.
For more information about Cloud Code, refer to the
product documentation .
Limitations
The Cloud Code integration with VPC Service Controls has no known limitations.
Commerce Org Governance API
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
commerceorggovernance.googleapis.com
Details
VPC Service Controls perimeter protects the Commerce Org Governance API for Google Private Marketplace.
For more information about Commerce Org Governance API, refer to the
product documentation .
Limitations
Resources such as procurement request and access request, which the Commerce Org Governance API creates at the project level, surface up to the organization level and are reviewed by the Organization Administrator without enforcing VPC Service Controls policies.
Google Cloud Contact Center as a Service
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
contactcenteraiplatform.googleapis.com
Details
To restrict the internet traffic, use organization policies.
Invoke the CREATE or UPDATE methods of the Google Cloud Contact Center as a Service API to apply the organization policy constraints manually.
For more information about Google Cloud Contact Center as a Service, refer to the
product documentation .
Limitations
The Google Cloud Contact Center as a Service integration with VPC Service Controls has no known limitations.
Privileged Access Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
privilegedaccessmanager.googleapis.com
Details
The API for Privileged Access Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Privileged Access Manager, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support adding folder-level or organization-level resources into a service perimeter. You can't use a perimeter to protect folder-level or organization-level Privileged Access Manager resources. VPC Service Controls protects project-level Privileged Access Manager resources.
To protect Privileged Access Manager, you need to include the following APIs in your perimeter:
Privileged Access Manager API ( privilegedaccessmanager.googleapis.com )
Cloud Resource Manager API ( cloudresourcemanager.googleapis.com )
Cloud Logging API ( logging.googleapis.com )
Cloud Asset API ( cloudasset.googleapis.com )
Service Usage
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
serviceusage.googleapis.com
Details
The API for Service Usage can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Service Usage, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support the restriction of Service Usage API 's v1beta1 methods and blocks calls to these methods through the restricted VIP.
Audit Manager
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
auditmanager.googleapis.com
Details
The API for Audit Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Audit Manager, refer to the
product documentation .
Limitations
You can't use a perimeter to protect folder-level or organization-level Audit Manager resources. To manage Audit Manager permissions at the folder or organization level, we recommend using IAM.
You must enable perimeter access using ingress and egress rules in the following scenarios:
If you run an audit at the folder level and the Cloud Storage bucket is inside a perimeter, configure an ingress rule for the service account .
If you run an audit at the folder level and the projects inside the folder are protected by a perimeter, configure an ingress rule for the service account .
If you run an audit at the project level, the project is protected by a perimeter, and the Cloud Storage bucket is not inside the same perimeter, configure an egress rule for the project that contains the Cloud Storage bucket.
For more information, see Configure VPC Service Controls for Audit Manager .
Gemini Enterprise
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
discoveryengine.googleapis.com
Details
The API for Gemini Enterprise can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Gemini Enterprise, refer to the
product documentation .
Limitations
When you enable VPC Service Controls on a Google Cloud project that
contains a Gemini Enterprise app, you're blocked from
creating or using Gemini Enterprise actions by default,
and any attempt to create an action in the UI is prohibited. To enable
and use actions for specific services within your
VPC Service Controls perimeter, you must contact your Google
representative and request to be added to the allowlist.
NotebookLM Enterprise
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
discoveryengine.googleapis.com
Details
The API for NotebookLM Enterprise can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about NotebookLM Enterprise, refer to the
product documentation .
Limitations
The NotebookLM Enterprise integration with VPC Service Controls has no known limitations.
Developer Connect
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
developerconnect.googleapis.com
Details
The API for Developer Connect can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Developer Connect, refer to the
product documentation .
Limitations
To restrict access to third-party source code management tools, you can create a
custom organization policy .
Learn more .
To disallow egress traffic to the internet using Developer Connect HTTP
proxies, add
custom organization policies
that either prevent creating connections without Service Directory or that
restrict creating connections to certain SCMSs.
Parameter Manager
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
parametermanager.googleapis.com
Details
The API for Parameter Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Parameter Manager, refer to the
product documentation .
Limitations
Parameter Manager must be in the same VPC Service Controls perimeter
as Secret Manager.
Model Armor
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
modelarmor.googleapis.com
Details
The API for Model Armor can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Model Armor, refer to the
product documentation .
Limitations
Model Armor uses regional endpoints, which aren't supported by
Private Google Access. When you restrict Model Armor within a perimeter,
you must use a Private Service Connect endpoint for Model Armor to
function as expected with VPC Service Controls.
Autoscaling
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
autoscaling.googleapis.com
Details
The API for Autoscaling can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
Limitations
The Autoscaling integration with VPC Service Controls has no known limitations.
Address Validation
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
addressvalidation.googleapis.com
Details
The API for Address Validation can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Address Validation, refer to the
product documentation .
Limitations
The Address Validation integration with VPC Service Controls has no known limitations.
Places (New)
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
places.googleapis.com
Details
The API for Places (New) can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Places (New), refer to the
product documentation .
Limitations
The Places (New) integration with VPC Service Controls has no known limitations.
Google Cloud Managed Service for Apache Kafka
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
managedkafka.googleapis.com
Details
The API for Google Cloud Managed Service for Apache Kafka can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Google Cloud Managed Service for Apache Kafka, refer to the
product documentation .
Limitations
Managed Service for Apache Kafka relies on underlying networking services. To help
protect this service, make sure that all necessary services are also included within your
service perimeter:
Compute Engine API ( compute.googleapis.com )
Cloud DNS API ( dns.googleapis.com )
To help protect a Kafka Connect connector, include any services the connector calls in
your perimeter. Depending on the connector type, the connector might call one of the
following services:
BigQuery API ( bigquery.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Pub/Sub API ( pubsub.googleapis.com )
Geocoding
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
No. The API for Geocoding cannot be protected by service perimeters.
However, Geocoding can be used normally in projects inside a perimeter.
Details
VPC Service Controls only protect
the Geocoding API and
don't support
the
Geocoding API v4 ( geocoding.googleapis.com ).
Because the Geocoding API is a stateless API, you can't enforce the VPC Service Controls restrictions on the Geocoding API by adding it to a perimeter.
For more information about Geocoding, refer to the
product documentation .
Limitations
The Geocoding integration with VPC Service Controls has no known limitations.
Compliance Manager
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudsecuritycompliance.googleapis.com
Details
The API for Compliance Manager can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Compliance Manager, refer to the
product documentation .
Limitations
You must configure egress and ingress rules to use
Compliance Manager within a service perimeter. For more information, see
Configure Compliance Manager support for VPC Service Controls .
You can't use a perimeter to help protect Compliance Manager resources at the folder level or organization level. To manage Compliance Manager permissions at the folder or organization level, use IAM .
Unified Maintenance
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
maintenance.googleapis.com
Details
Unified Maintenance provides a centralized view of planned disruptive maintenance
events across supported Google Cloud products.
Resource maintenance activities in individual projects are accessible through the management project
configured for the given scope. If you want to restrict access through the management project,
add the management
project to the same VPC Service Controls perimeter as individual projects, or remove
IAM permissions on the management project level.
For more information about Unified Maintenance, refer to the
product documentation .
Limitations
The Unified Maintenance integration with VPC Service Controls has no known limitations.
Cloud Location Finder
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
cloudlocationfinder.googleapis.com
Details
Cloud Location Finder lets you identify and filter cloud locations in regions and
zones across Google Cloud, Google Distributed Cloud, Microsoft Azure, Amazon Web
Services, and Oracle Cloud Infrastructure based on proximity, geographic location, and
carbon footprint.
You can protect the Cloud Location Finder API with VPC Service Controls, and use the
Cloud Location Finder API normally inside service perimeters.
For more information about Cloud Location Finder, refer to the
product documentation .
Limitations
The Cloud Location Finder integration with VPC Service Controls has no known limitations.
Conversational Analytics API
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
geminidataanalytics.googleapis.com
Details
A service perimeter can restrict only the Conversational Analytics API service endpoint. To enforce data protection for the Conversational Analytics API's data sources such as BigQuery, Looker, and Looker Studio, you must also restrict these data sources and the corresponding services in the service perimeter.
For more information about Conversational Analytics API, refer to the
product documentation .
Limitations
While the service perimeter restricts the Conversational Analytics API, IAM governs access to the API and its underlying data sources. To restrict the data that you use with the Conversational Analytics API within the perimeter, you must have the necessary IAM permissions to access the API and the data sources from within the API .
Customer Experience Agent Studio
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
ces.googleapis.com
Details
When you restrict the CX Agent Studio API
( ces.googleapis.com ) in a service perimeter,
add the CX Insights API ( contactcenterinsights.googleapis.com )
as well to the restricted services list of the perimeter
configuration. For more information, see Configure VPC Service Controls for CX Agent Studio .
For more information about Customer Experience Agent Studio, refer to the
product documentation .
Limitations
Understand the limitations
of using CX Agent Studio with VPC Service Controls.
Vector Search 2.0
Status
Preview . The integration of this product with VPC Service Controls is in Preview
and is ready for broader testing and use, but is not fully supported for production
environments.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
vectorsearch.googleapis.com
Details
The API for Vector Search 2.0 can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Vector Search 2.0, refer to the
product documentation .
Limitations
To help protect Vector Search 2.0, add the following services to the restricted services list of your perimeter configuration:
Vertex AI API ( aiplatform.googleapis.com ) is used for auto-embedding.
Cloud Storage ( storage.googleapis.com ) is used for bulk object operations.
Google Cloud Managed Lustre
Status
GA . This product integration is fully supported by VPC Service Controls.
Protect with perimeters?
Yes. You can configure your perimeters to protect this service.
Service name
lustre.googleapis.com
Details
The API for Google Cloud Managed Lustre can be protected by VPC Service Controls and the product can be
used normally inside service perimeters.
For more information about Google Cloud Managed Lustre, refer to the
product documentation .
Limitations
VPC Service Controls doesn't support customer-managed encryption
keys (CMEK) in Managed Lustre.
To transfer data between Managed Lustre and Cloud Storage, the
project containing the Cloud Storage bucket must be within the same service perimeter
as the Managed Lustre instance. To import or export data outside the
perimeter, you must configure an
egress rule to allow the
Managed Lustre service agent
( service- PROJECT_NUMBER @gcp-sa-lustre.iam.gserviceaccount.com )
to access the bucket.
If you use both Shared VPC and VPC Service Controls, the host
project that contains the network and the service project that contains the
Managed Lustre instance must both be inside the same perimeter. Separating
the host project and service project with a perimeter can cause existing instances to
become unavailable and can prevent creation of new instances.
For more information, read about
supported and unsupported services .
Restricted VIP supported services
The restricted virtual IP (VIP) provides a way for VMs that are inside a service
perimeter to make calls to Google Cloud services without exposing the
requests to the internet. For a complete list of the services available on the
restricted VIP, see
Services supported by the restricted VIP .
Unsupported services
Warning: While it may be possible to enable unsupported services to access the
data of supported products and services, we recommend that you do not. Unexpected
issues might occur when attempting to access a supported service using
an unsupported service, especially within the same project.
Unsupported services may not function at all when enabled in a project
protected by VPC Service Controls, especially when low-level storage
services like Cloud Storage or Pub/Sub are
restricted. We recommend deploying unsupported services in projects
outside perimeters. To allow these services to access data in resources
within a perimeter,
create an access level that includes the service account
for that service and
apply it to perimeters as needed .
Attempting to restrict an unsupported service using the gcloud command-line tool or
the Access Context Manager API will result in an error.
Cross-project access to data of supported services will be blocked by VPC Service Controls.
Additionally, the restricted VIP can be used to block the ability of workloads
to call unsupported services.
Other known limitations
This section describes known limitations with certain
Google Cloud services, products, and interfaces that can be
encountered when using VPC Service Controls.
For limitations with products that are supported by VPC Service Controls,
refer to the Supported Products table .
For more information about resolving issues with VPC Service Controls,
refer to the Troubleshooting page.
AutoML API
AutoML Translation API is
deprecated and will no longer be available on Google Cloud after September 30, 2025.
The functionality and management of custom models is available through
Cloud Translation - Advanced API (v3) .
When you use the AutoML API with VPC Service Controls, the following limitations
apply:
You cannot add the supported regional endpoints ,
such as eu-automl.googleapis.com , to the list of restricted services in a
perimeter. When you protect the automl.googleapis.com service, the perimeter
protects the supported regional endpoints, such as eu-automl.googleapis.com , as well.
When you use a service perimeter to protect
automl.googleapis.com , access to all of the AutoML products that
are integrated with VPC Service Controls and used inside the
perimeter are impacted. You must configure your VPC Service Controls
perimeter for all integrated AutoML products that are used inside
that perimeter.
To fully protect the AutoML API, include all of the following APIs in your perimeter:
AutoML API ( automl.googleapis.com )
Cloud Storage API ( storage.googleapis.com )
Compute Engine API ( compute.googleapis.com )
BigQuery API ( bigquery.googleapis.com )
App Engine
App Engine (both standard environment and flexible environment) is
not supported by VPC Service Controls. Don't include
App Engine projects in service perimeters.
However, it is possible to allow App Engine apps created in projects
outside service perimeters to read and write data to protected services
inside perimeters. To allow your app to access the data of protected
services,
create an access level
that includes the project's App Engine service account. This does
not enable App Engine to be used inside service perimeters.
Bare Metal Solution
Connecting VPC Service Controls to your Bare Metal Solution
environment doesn't uphold any service control guarantees.
The Bare Metal Solution API can be added to a secure perimeter. However, the
VPC Service Controls perimeters don't extend to the Bare Metal Solution
environment in the regional extensions.
Blockchain Node Engine
VPC Service Controls only protects the Blockchain Node Engine API.
When a node is created, you must still indicate that it is meant for a
user-configured private network with
Private Service Connect .
The peer-to-peer traffic is not affected by VPC Service Controls or
Private Service Connect and will continue to use the public
internet.
Client libraries
Clients must use client libraries that have been updated as of November 1,
2018 or later.
Service account keys or OAuth2 client metadata used by clients must be
updated as of November 1, 2018 or later. Older clients using the token
endpoint must change to the endpoint specified in newer key material or client
metadata.
Cloud Billing
VPC Service Controls doesn't support Cloud Billing. You can
export Cloud Billing data to a Cloud Storage bucket or
BigQuery instance in a project that is protected by a service
perimeter without configuring an access level or ingress rule.
Cloud Deployment Manager
Deployment Manager is not supported by VPC Service Controls.
Users may be able to call into services that are compliant with
VPC Service Controls, but they shouldn't rely on this because it might break.
As a workaround, you can add the Deployment Manager service
account ( PROJECT_NUMBER @cloudservices.gserviceaccount.com)
to the access levels to allow calls to APIs protected by VPC Service Controls.
Cloud Shell
VPC Service Controls doesn't support Cloud Shell. VPC Service Controls
treats Cloud Shell as outside of service perimeters and denies access
to data that VPC Service Controls protects. However, VPC Service Controls
allows access to Cloud Shell if a device that meets the
access level
requirements of the service perimeter initiates Cloud Shell.
Gemini Cloud Assist
VPC Service Controls support for the Gemini Cloud Assist investigations (Preview) feature will be
deprecated starting on April 13, 2026. This change will roll out over the course of one week. Access to Gemini Cloud Assist investigations (Preview)
from within a VPC Service Controls perimeter is blocked. To continue using
this feature, you must make requests from outside any VPC Service Controls
perimeter. For more information, see
Deprecated VPC Service Controls support for Gemini Cloud Assist investigations .
Firebase
If your project is within a perimeter that restricts apikeys.googleapis.com ,
enabling Firebase on the project results in a NO_MATCHING_ACCESS_LEVEL
violation. To resolve this violation, create an ingress rule
that grants the Firebase service accounts
access to apikeys.googleapis.com .
Google Cloud console
Because the Google Cloud console is only accessible over the internet,
it is treated as outside of service perimeters. When you apply a service
perimeter, the Google Cloud console interface for the services that you
protected may become partially or fully inaccessible. For example, if you
protected Logging with the perimeter, you won't be able
to access the Logging interface in
the Google Cloud console.
To allow access from the Google Cloud console to resources protected by a
perimeter, you need to create an access level for a public IP range that
includes the machines of users who want to use the Google Cloud console
with protected APIs. For example, you could add the public IP range of the
NAT gateway of your private network to an access level, and then assign that
access level to the service perimeter.
If you want to limit Google Cloud console access to the perimeter to only
a specific set of users, you can also add those users to an access
level. In that case, only the specified users would be able to access the
Google Cloud console.
Requests through Google Cloud console from a network that is
Private Google Access enabled, including networks implicitly enabled by
Cloud NAT, might be blocked even if the requesting source network
and target resource are in the same perimeter. This is because
Google Cloud console access through Private Google Access is not
supported by VPC Service Controls.
Google Cloud metadata server
For Compute Engine
VM instances and GKE
nodes, VPC Service Controls protection doesn't apply to the incoming
traffic to or the outgoing traffic from Google Cloud metadata
server .
Private services access
Private services access supports
deploying a service instance in a
Shared VPC network .
If you use this configuration with VPC Service Controls, ensure that the
host project that provides the network and the service project that
contains the service instance are inside the same VPC Service Controls
perimeter. Otherwise, requests might be blocked and service instances
might not work correctly.
For more information about services that support private services access,
see Supported services .
GKE Multi-Cloud
VPC Service Controls only applies to resources within your Google Cloud
project. The third-party cloud environment that hosts your
GKE Multi-Cloud clusters does not uphold any service control guarantees.
Google Distributed Cloud
VPC Service Controls only applies to bare metal machines connected to VPC
network projects that use Restricted VIP.
OpenID Connect (OIDC) and Lightweight Directory Access Protocol (LDAP)
services need to be in the same VPC Service Controls perimeter. The requests
to external endpoints are blocked.
Migration Center
After you enable the service perimeter, you can't transfer your
infrastructure data to StratoZone.
Workforce Identity Federation
Workforce Identity Federation administrative features, including workforce pool
configuration APIs, and Security Token Service APIs don't support VPC Service Controls.
However, Google Cloud products that support both Workforce Identity Federation
and VPC Service Controls operate
as documented and are subject to VPC Service Controls policy checks. Additionally, you can
use third-party identities
such as workforce pool users and workload identities in the ingress or egress rules of VPC Service Controls.
What's next
Troubleshoot common VPC Service Controls issues
Troubleshoot common issues related to other Google Cloud services
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
