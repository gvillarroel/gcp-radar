---
title: "Identity federation: products and limitations \_|\_ Identity and Access Management\
  \ (IAM) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/iam/docs/federated-identity-supported-services
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/iam/docs/roles-permissions/cloudscheduler
source_metadata:
  url: https://docs.cloud.google.com/iam/docs/federated-identity-supported-services
  title: "Identity federation: products and limitations \_|\_ Identity and Access\
    \ Management (IAM) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Security
IAM
Identity and Access Management (IAM)
Reference
Send feedback
Identity federation: products and limitations
Stay organized with collections
Save and categorize content based on your preferences.
Overview
This page provides details of limitations and the level of support for each
Google Cloud product that can use
Workforce Identity Federation or
Workload Identity Federation ,
collectively identity federation .
Workforce Identity Federation
Workforce Identity Federation lets your workforce—employees, vendors, partners,
and other users—access Google Cloud products by using an identity provider
(IdP). Your workforce can access Google Cloud through the
Google Cloud Workforce Identity Federation console, also known as the console (federated), the Google Cloud CLI, or a
Google Cloud API.
Workforce Identity Federation limitations for the console (federated), the
Google Cloud CLI, and Google Cloud API are listed in UI and API entries
for each product.
Workload Identity Federation
Workload Identity Federation lets your workloads programmatically access
Google Cloud products by using workload-provided identities such as
IAM roles for AWS workloads, Kubernetes service accounts for
GKE workloads, or GitHub identities for your deployment
pipelines.
Workload Identity Federation limitations for the Google Cloud CLI and
Google Cloud APIs, collectively API limitations , are listed in Google Cloud API
limitations entries for each product, later in this document.
Google Cloud products and limitations
The table in this section lists products, their level of support for identity
federation, limitations, and other information.
Organization
The limitations table is organized in the following way:
Product: The product name.
Identity federation launch stage: Refers to the launch stage
of the product's support for identity federation. Launch stage doesn't
refer to the launch stage of the product itself.
Columns that describe supported products:
Google Cloud API: The product's identity federation-related
limitations that are associated with API methods and the
gcloud CLI commands that access those methods.
Console (federated): The product's
Workforce Identity Federation-related console (federated) UI
limitations.
Other: The product's identity federation-related limitations that
aren't Google Cloud API or console (federated) limitations.
Columns that describe unsupported products:
Alternatives: For products that don't support identity
federation, this column describes alternative products that support
identity federation and provide similar features.
List of products and limitations
Launch stage
GA
Preview
Unsupported
Product
Identity federation launch stage
Limitations
Access Approval
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Access Context Manager
GA
Console (federated):
No known limitations
Google Cloud API:
v1alpha
APIs
aren't available for federated identities.
Other:
No known limitations
Access Transparency
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Agent Assist
GA
Console (federated):
In order to use
Virtual Agent Handoff
with a Dialogflow ES agent, API callers cannot use Workforce Identity Federation for logging in.
Google Cloud API:
Agent Assist import of conversation transcripts to conversation datasets
does not support Workforce Identity Federation.
Other:
No known limitations
AlloyDB for PostgreSQL
GA
Console (federated):
The following fleet health features aren't supported while using Workforce Identity Federation:
Performance and Backups summary cards
Data in the clusters table, such as CPU percentage and Memory Available
Google Cloud API:
No known limitations
Other:
No known limitations
Anti Money Laundering AI
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
API Gateway
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Apigee
GA
Console (federated):
Features in
Preview
aren't supported for
Workforce Identity Federation users. This includes the following features:
Looker Studio integration
Risk assessment
Shadow API discovery
Local development with Apigee in Cloud Code
isn't supported for Workforce Identity Federation users.
Google Cloud API:
API Management APIs
don't support
Workforce Identity Federation users.
Apigee Connect APIs
don't support
Workforce Identity Federation users.
Other:
No known limitations
Apigee API hub
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
APIs and Services
GA
Console (federated):
OAuth client management
isn't supported.
OAuth brand management
isn't supported.
Google Cloud API:
No known limitations
Other:
No known limitations
App Engine
Unsupported
Alternatives:
Google recommends that you use Cloud Run as an alternative.
App Hub
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Application Integration
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Artifact Registry
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
Container Registry doesn't support identity federation. There is an information banner in the settings page in
Container Registry transition
.
Assured Workloads
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Backup and DR Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Batch
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
BigQuery
GA
Console (federated):
Saving queries isn't supported.
Google Cloud API:
No known limitations
Other:
The following features don't support Workforce Identity Federation with BigQuery:
Connected Sheets
Google Drive
Recommendations
Slot estimator
The following operations don't support Workforce Identity Federation:
Loading data from
Amazon S3
,
Apache Spark
, or
Azure Blob Storage
through the
Connection API
Loading data from
Google Drive
Bigtable
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Binary Authorization
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Blockchain Analytics
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Blockchain Node Engine
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Carbon Footprint
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Certificate Authority Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Certificate Manager
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Channel Services
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Asset Inventory
GA
Console (federated):
In the
IAM policy
tab, the
Analyze Full Access
button is unavailable for Workforce Identity Federation users.
Google Cloud API:
analyzeMove
isn't supported by
identity federation.
Other:
No known limitations
Cloud Billing
GA
Console (federated):
Only
invoiced billing accounts
are supported.
Google Cloud API:
Only
invoiced billing accounts
support identity federation.
Other:
No known limitations
Cloud Build
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud CDN
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Code
Unsupported
Alternatives:
No alternatives available
Cloud Composer
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
Cloud Composer supports Workforce Identity Federation only for environments created in
Composer version 2.1.11 or later and Airflow version 2.4.3 or later. Upgrading an environment from
an earlier version does not enable Workforce Identity Federation support.
Email messages sent from Airflow only include the Airflow UI link that is accessible by Google accounts.
To access Airflow UI as a Workforce Identity Federation user, the link must be manually updated
(changed to the
URL for Workforce Identity Federation
).
Cloud Storage limitations apply to Cloud Composer environment bucket.
Cloud Console
GA
Console (federated):
Workforce Identity Federation users can only access the
Google Cloud Workforce Identity Federation console, also known as the console (federated)
.
They cannot access the Google Cloud console. The console (federated)
provides limited access to only those Google Cloud products that support
Workforce Identity Federation. For more information, see
About the console (federated)
.
Additionally, the console (federated) has the following limitations:
Language preference is selected at sign-on and can't be updated within the console.
Product notifications, updates and offers can't be enabled on the
communication preferences
page.
Personalization based on your Google Cloud console activity is unsupported.
The
Transparency and Control Center
page is unavailable.
Google Cloud API:
No known limitations
Other:
Workforce Identity Federation users aren't eligible for Google Cloud Free Trial.
Cloud Customer Care
GA
Console (federated):
Due to the
limitations of Cloud Billing for Workforce Identity Federation
, billing related support is accessible only to the organization's administrator through the Google Cloud account used to set up the billing account.
Workforce Identity Federation users can upload—but not download—support case-related files. These files are visible to the Support Engineers who handle your cases.
Contact details (e.g. Email Address) cannot be changed for Workforce Identity Federation users once interaction with Support has started.
Workforce Identity Federation users cannot create cases using the live chat support channel.
Google Cloud API:
Cloud Support API doesn't support identity federation.
Other:
No known limitations
Cloud Data Fusion
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Deploy
GA
Console (federated):
Cloud Storage buckets must have
uniform bucket-level access
enabled to view Cloud Deploy artifacts.
Google Cloud API:
No known limitations
Other:
Cloud Storage buckets created through Cloud Deploy have
uniform bucket-level access
enabled.
Cloud Deployment Manager
Unsupported
Alternatives:
No alternatives available
Cloud DNS
GA
Console (federated):
No known limitations
Google Cloud API:
Cloud DNS has a limitation on the number of name server shards. To
learn more, see
Name server limits
.
Before allocating the final name server shard, Cloud DNS verifies
ownership of the domain, which cannot be performed by federated identities.
Other:
No known limitations
Cloud Domains
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Endpoints
Unsupported
Alternatives:
No alternatives available
Cloud Fleet Routing
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Healthcare API
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud HSM
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Intrusion Detection System
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Key Management Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Load Balancing
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Logging
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Mobile App
Unsupported
Alternatives:
No alternatives available
Cloud Monitoring
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
The legacy Cloud Monitoring agent
doesn't support sending metrics with identity federation. Instead, Workforce Identity Federation users can install the
Ops Agent
.
Cloud NAT
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Next Generation Firewall
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Profiler
Unsupported
Alternatives:
No alternatives available
Cloud Run
GA
Console (federated):
Setting up continuous deployment with Cloud Build
from the Cloud Run console is disabled for Workforce Identity Federation. You must set up continuous deployment in Cloud Build.
Google Cloud API:
No known limitations
Other:
The IAM permission
run.routes.invoke
, which can manage access to Cloud Run service endpoints, doesn't support Workforce Identity Federation. Enable
Identity-Aware Proxy for Cloud Run
to use it.
Cloud Run doesn't support Workload Identity Federation direct resource access. To allow access, use
service account impersonation
.
Cloud Run functions
GA
Console (federated):
Setting up continuous deployment with Cloud Build
from the Cloud Run console is disabled for Workforce Identity Federation. You must set up continuous deployment in Cloud Build.
Google Cloud API:
No known limitations
Other:
The IAM permission
run.routes.invoke
, which manages access to Cloud Run service endpoints, doesn't support Workforce Identity Federation. Enable
Identity-Aware Proxy for Cloud Run
to use it.
Cloud Run doesn't support Workload Identity Federation. To allow access, use
service account impersonation
.
Cloud Scheduler
GA
Console (federated):
The App Engine Cron Jobs tab isn't available for Workforce Identity Federation users.
The App Engine option in the target type configuration isn't available for Workforce Identity Federation users.
Google Cloud API:
The Cloud Scheduler API doesn't support identity federation for
jobs that have their
target
attribute set to
appEngineHttpTarget
.
To send a job to an App Engine target using identity federation,
create your job with the
target
type set to
httpTarget
and the
uri
field set to the full URI path of your App Engine target.
Other:
No known limitations
Cloud Service Mesh
GA
Console (federated):
No known limitations
Google Cloud API:
In-cluster control plane
doesn't support identity federation.
Other:
No known limitations
Cloud Shell
Unsupported
Alternatives:
Google recommends that you use Cloud Workstations as an alternative.
Cloud Source Repositories
Unsupported
Alternatives:
No alternatives available
Cloud SQL
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
The Help Assistant isn't supported.
IAM database authentication for user logins isn't supported for
Cloud SQL for MySQL
or
Cloud SQL for PostgreSQL
databases.
Cloud Storage
GA
Console (federated):
Viewing object details requires
uniform bucket-level access
to be enabled for the bucket.
Process with Cloud Run functions isn't supported.
Scan with Cloud Data Loss Prevention isn't supported.
Google Cloud API:
Identity federation with all Cloud Storage APIs is supported only for
uniform bucket-level access
buckets. Identity federation access to buckets with fine-grained
access control lists (ACLs)
is rejected.
Although all users and workloads can use existing
signed URLs
, identity federation users and workloads cannot generate signed URLs.
Other:
Google Cloud access tokens that are based on Workforce Identity Federation credentials
cannot be downscoped with
Credential Access Boundaries
.
Cloud Talent Solution
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Tasks
GA
Console (federated):
The App Engine routing override option isn't available for Workforce Identity Federation users.
Google Cloud API:
The Cloud Tasks API doesn't support identity federation
for tasks that have App Engine targets—for example:
App Engine queues:
Since App Engine queues (queues
that are created using a
queue.yaml
or
queue.xml
file) contain only tasks with App Engine
targets, tasks in these queues aren't supported.
Regular queues:
For regular Cloud Tasks queues,
tasks with HTTP targets are supported. Tasks with App Engine
targets aren't supported (even though the queue isn't an
App Engine queue).
Other:
No known limitations
Cloud Trace
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Translation
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Vision API
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cloud Workstations
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Cluster Director
GA
Console (federated):
Cluster Director doesn't support Workload Identity Federation in the console (federated).
Google Cloud API:
No known limitations
Other:
No known limitations
Compute Engine
GA
Console (federated):
To use
SSH-in-browser
, you must set up
google.posix_username
attribute mappings
.
Google Cloud API:
Image import from and export to a Cloud Storage bucket requires
uniform bucket-level access
to be enabled for the bucket.
Bare Metal Solution
isn't supported.
Other:
No known limitations
Confidential Space
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Context-Aware Access
Preview
Console (federated):
In
Add principals to the Google Cloud console & APIs
, the
Group ID
text field doesn't support autocomplete or provide validation for Workforce Identity Federation users.
Workforce Identity Federation groups are identified by their IDs rather than their names.
Google Cloud API:
No known limitations
Other:
No known limitations
Customer Experience Insights
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Data Catalog
GA
Console (federated):
In the edit
steward
dialog on the entry details page, contact suggestions aren't shown.
Google Cloud API:
No known limitations
Other:
No known limitations
Database Migration Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Dataflow
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Dataform
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Dataplex Universal Catalog
GA
Console (federated):
Dataplex Explore workbench
doesn't support Workforce Identity Federation.
Scheduled scripts and notebooks through explore workbench
don't support Workforce Identity Federation.
Secure view
doesn't support Workforce Identity Federation.
Google Cloud API:
Exploration of related
environments
and
sessions
APIs on Dataplex Universal Catalog aren't
supported by identity federation.
Other:
No known limitations
Managed Service for Apache Spark
GA
Console (federated):
Workforce Identity Federation users can perform create, view, update, and delete operations in Cluster, Jobs, and Batches list pages. Workflows, Autoscaling policies, and component exchange aren't available to Workforce Identity Federation.
Cluster create functionality is available, except for Managed Service for Apache Spark on GKE cluster creation, Managed Service for Apache Spark Compute Engine cluster with personal authentication, or with Component Gateway enabled.
The
Output
section in the Batch and Job detail page isn't available for Workforce Identity Federation users.
The
Recommend Alert
section in the Cluster and Job list page isn't available for Workforce Identity Federation users.
Google Cloud API:
The following methods don't support identity federation:
Dataproc on
GKE
Managed Service for Apache Spark Personal Cluster Authentication
Managed Service for Apache Spark Service Account based Secure Multi-tenancy
Other:
No known limitations
Dataproc Metastore
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Datastore
GA
Console (federated):
Key Visualizer
doesn't support Workforce Identity Federation.
Google Cloud API:
No known limitations
Other:
No known limitations
Datastream
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Dialogflow
GA
Console (federated):
Dialogflow ES is not supported in the Google Cloud console for Workforce Identity Federation users.
Google Cloud API:
Workforce Identity Federation is supported only on Dialogflow CX APIs.
Other:
No known limitations
Document AI
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Endpoint Verification
Unsupported
Alternatives:
No alternatives available
Enterprise Knowledge Graph
Unsupported
Alternatives:
No alternatives available
Error Reporting
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Eventarc
GA
Console (federated):
Although you can use an existing
workflow
as an Eventarc trigger destination, Workforce Identity Federation users can't create new workflows.
Google Cloud API:
Third-party
event publishing
using a
ChannelConnection
resource isn't supported for identity federation.
Other:
No known limitations
Filestore
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Firestore
GA
Console (federated):
Security Rules
don't support Workforce Identity Federation.
Key Visualizer
doesn't support Workforce Identity Federation.
Google Cloud API:
No known limitations
Other:
No known limitations
Gemini
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
Gemini for Google Cloud
license management
doesn't support Workforce Identity Federation.
GKE Enterprise
GA
Console (federated):
When you log into any external (GKE Enterprise) clusters, the option
Use your Google identity
isn't available for Workforce Identity Federation.
When you create or attach any external (GKE Enterprise) clusters, you
won't automatically be added as an administrator for Workforce Identity Federation.
Google Cloud API:
No known limitations
Other:
gkeadm
,
gkectl
and
bmctl
don't support Workforce Identity Federation.
Google Cloud Armor
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Google Cloud Contact Center as a Service
GA
Console (federated):
Google Cloud CCaaS cannot be set up by a Workforce Identity Federation user through the Google Cloud CCaaS console.
Google Cloud API:
No known limitations
Other:
To set up Google Cloud CCaaS through the gcloud CLI,
Workforce Identity Federation
users must contact Customer Care.
Google Cloud Managed Service for Apache Kafka
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
Workload Identity Federation for GKE
is supported for authentication to the
open source Apache Kafka APIs
.
However, it is not supported for clients using
Fleet Workload Identity Federation for GKE
.
As an alternative,
link Kubernetes ServiceAccounts to IAM
.
Google Cloud Marketplace
GA
Console (federated):
Cloud Marketplace contains links to Google domains that might not support Workforce Identity Federation.
The
Launch
button is disabled for all VM products that use Deployment Manager
because Deployment Manager doesn't support Workforce Identity Federation.
SaaS sign-up and SSO login don't support Workforce Identity Federation.
Producer Portal doesn't support Workforce Identity Federation.
Request Procurement
doesn't support Workforce Identity Federation.
Service Catalog doesn't support Workforce Identity Federation.
Google Cloud API:
Partner API
doesn't support Workforce Identity Federation.
Other:
Customers don't receive notifications if no email address is provided by Billing Account Admins or Product Owners.
Google Cloud Migration Center
Preview
Console (federated):
Exporting Total Cost of Ownership Reports (TCO Reports)
isn't supported for Workforce Identity Federation users.
Exporting assets
isn't supported for Workforce Identity Federation users.
Google Cloud API:
No known limitations
Other:
No known limitations
Google Cloud NetApp Volumes
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Google Cloud SDK
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Google Distributed Cloud
Unsupported
Alternatives:
No alternatives available
Google Earth Engine
GA
Console (federated):
Earth Engine Code Editor doesn't support Workforce Identity Federation.
Google Cloud API:
Exporting data to Google Drive from Earth Engine APIs isn't supported for Workforce Identity Federation.
Legacy Earth Engine assets that aren't managed by Google Cloud projects aren't supported for Workforce Identity Federation users.
Other:
The BigQuery function
ST_REGIONSTATS
for raster data doesn't support Workforce Identity Federation.
Google Kubernetes Engine
GA
Console (federated):
No known limitations
Google Cloud API:
If you use Workload Identity Federation for GKE to programmatically run
kubectl
commands against a different GKE cluster from a Pod, you must use service account impersonation, as described in
Alternative: link Kubernetes ServiceAccounts to IAM
. This limitation doesn't apply if you use your own workload identity pool with Workload Identity Federation.
Other:
No known limitations
Google Security Operations
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Hybrid Connectivity
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Identity and Access Management
GA
Console (federated):
The
Name
column within the IAM table doesn't show display names for Google identities.
When adding new principals to allow policies, the
Add principals
text field supports only autocompletion for service accounts.
The
Add exempted principal
text field in the
Audit Logs
page supports only autocompletion for service accounts.
Google Cloud API:
No known limitations
Other:
No known limitations
Identity-Aware Proxy
GA
Console (federated):
In the Applications tab, the
Method
column is disabled, and users cannot use external identities for authorization.
In the Applications tab, App Engine resources cannot be listed.
The
Go to OAuth configuration
item in the
more_vert
action menu isn't available.
In the
Applications
tab, on-premises connectors cannot be added or listed.
Google Cloud API:
The IAP API doesn't support TCP forwarding for Workforce Identity Federation users. You must instead use console (federated) or the gcloud CLI for TCP forwarding.
Other:
No known limitations
Identity Platform
GA
Console (federated):
Enabling Identity Platform through the Google Cloud Workforce Identity Federation console is not supported. Workforce Identity Federation administrators must enable Identity Platform either through the Firebase Authentication console or by logging into the Google Cloud console using a Cloud Identity or Workspace account before Workforce Identity Federation users can access Identity Platform through the console (federated).
Google Cloud API:
InitializeIdentityPlatform
doesn't support identity federation.
Other:
No known limitations
Immersive Stream for XR
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Integration Connectors
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Key Access Justifications
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Knative serving
GA
Console (federated):
Continuous deployment with Cloud Build
doesn't support Workforce Identity Federation.
Registering a domain with Cloud Domains
doesn't support Workforce Identity Federation.
Google Cloud API:
No known limitations
Other:
When using Workforce Identity Federation, Knative serving requires a cluster with managed Cloud Service Mesh.
Live Stream API
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Looker (Google Cloud core)
Unsupported
Alternatives:
No alternatives available
Looker Studio
Unsupported
Alternatives:
No alternatives available
Managed Service for Microsoft Active Directory
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
Workforce Identity Federation users can't use
IAP TCP forwarding
to access the
Active Directory management VM
.
Media CDN
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Memorystore
GA
Console (federated):
No known limitations
Google Cloud API:
The following APIs support identity federation:
Memorystore for Redis
Memorystore for Redis Cluster
Memorystore for Memcached
Memorystore for Valkey
Other:
No known limitations
Migrate to Containers
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Migrate to Virtual Machines
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Network Connectivity Center
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Network Intelligence Center
GA
Console (federated):
Firewall Insights cannot be exported to JSON or CSV.
Google Cloud API:
No known limitations
Other:
No known limitations
Network Service Tiers
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Organization Policy Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Parallelstore
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Personalized Service Health
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Policy Intelligence
GA
Console (federated):
The following Policy Intelligence features have limitations for Workforce Identity Federation users who use the Google Cloud Workforce Identity Federation console:
Policy Troubleshooter
:
Workforce Identity Federation users can't troubleshoot access in the console (federated).
Policy Analyzer
:
Workforce Identity Federation users can't analyze access in the console (federated).
Policy Simulator
:
Workforce Identity Federation users can't simulate changes to an allow policy within the
console (federated).
IAM
Recommender
: Workforce Identity Federation users can't view recommendations in the
console (federated).
Google Cloud API:
The following Policy Intelligence features have API limitations for federated identities:
Policy Troubleshooter
:
Federated identities can't check the membership of Google groups in allow
and deny policies, or the membership of Cloud Identity accounts
(domains) in deny policies. When federated identities call the
iam.troubleshoot
method, role bindings and deny rules that contain groups or domains have an access result of
Unknown
, unless the role binding or deny rule also explicitly includes the principal.
Policy Analyzer
: When calling the
analyzeIamPolicy
or the
analyzeIamPolicyLongrunning
method, federated identities might receive incomplete analysis results because of the following:
Federated identities can't check the membership of Google groups in
allow policies. As a result, when federated identities analyze
access for a principal, the query results don't include permissions
and roles that the principal has due to their membership in a group.
When analyzing access, federated identities can't enable the
expand-groups
option.
Federated identities can't use the following API methods:
analyzeMove
Policy
Simulator
: Federated identities can't use the Policy Simulator API
(
policysimulator.googleapis.com
).
Activity
Analyzer
: Federated identities can't use the Policy
Analyzer API (
policyanalyzer.googleapis.com
).
IAM
Recommender
: Federated identities can't use the Recommender API
(
recommender.googleapis.com
).
Other:
No known limitations
Private Service Connect
GA
Console (federated):
When publishing a service, DNS configuration is not available.
Google Cloud API:
No known limitations
Other:
No known limitations
Privileged Access Manager
GA
Console (federated):
In the
Entitlements
section, when you type requester and approver principals, only service account names are autocompleted.
Google Cloud API:
No known limitations
Other:
Automated
email notifications
aren't sent for entitlement and grant changes. For notifications to be sent, administrators or requesters can explicitly configure email addresses.
Pub/Sub
GA
Console (federated):
No known limitations
Google Cloud API:
Pub/Sub Lite API
doesn't have endpoints that support identity federation.
Other:
No known limitations
reCAPTCHA
GA
Console (federated):
Multi-factor authentication through email cannot be configured by Workforce Identity Federation users. For assistance,
contact sales
.
The demonstration website in Cloud Shell isn't supported for Workforce Identity Federation users.
Google Cloud API:
MigrateKey
isn't supported for federated identities.
Other:
No known limitations
Recommender
GA
Console (federated):
Exporting recommendations to BigQuery
isn't supported by Workforce Identity Federation.
Google Cloud API:
No known limitations
Other:
No known limitations
Resource Manager
GA
Console (federated):
Workforce Identity Federation users can only view and operate on the organization for which Workforce Identity Federation was configured. Other organizations to which the users are added are not displayed in the Google Cloud console.
Wait times for certain operations to be reflected in the UI are long—for example, creating a project or folder.
Google Cloud API:
The
Organizations API
doesn't support identity federation.
Other:
No known limitations
Retail API
GA
Console (federated):
User events information
is hidden for Workforce Identity Federation users.
Merchant Center accounts
are not supported for workforce federation users.
Serving configs
analytics and usage count are hidden for Workforce Identity Federation users.
Model data requirements
are hidden for Workforce Identity Federation users.
Google Cloud API:
The following methods don't support identity federtation:
UpdateCatalog
ImportCompletionData
TuneModel
ImportProducts
PurgeProducts
ImportUserEvents
ImportUserEvents
PurgeUserEvents
RejoinUserEvents
Other:
No known limitations
Secret Manager
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Secure Source Manager
GA
Console (federated):
No known limitations
Google Cloud API:
Identity federation users must sign in through the Secure Source Manager instance
web interface
before running any of the following commands:
Git CLI commands
API calls to
data plane endpoints
Identity federation users must sign in through the Secure Source Manager instance
web interface
after every session expiry to continue using Git SSH CLI commands with user SSH keys.
Other:
A new Secure Source Manager instance must be created to use Workforce Identity Federation. Existing instances can't be updated.
Workforce identity pool providers used for Secure Source Manager must provide
google.subject
and
google.email
attribute mappings.
You can only use your federated identity to log in to a Secure Source Manager instance that is configured to use Workforce Identity Federation.
Email notifications from Secure Source Manager are not supported for Workforce Identity Federation configured instances.
Security Command Center
GA
Console (federated):
The following features are unavailable for Workforce Identity Federation users:
The Security posture service cannot be managed using Google Cloud console.
Google Cloud API:
No known limitations
Other:
No known limitations
Sensitive Data Protection
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Serverless VPC Access
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Service Directory
Preview
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Service Infrastructure
Preview
Console (federated):
Managing quota in
Cloud Endpoints
is not supported.
Google Cloud API:
Service Management API
:
Creating a managed service doesn't support identity federation.
To verify domain ownership and create a managed service, do the following:
Add a service account
to domain owners using
Site Verification API
.
Impersonate this service account
to create a managed service.
Other:
No known limitations
Spanner
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Speech-to-Text
GA
Console (federated):
Only the v2 UI pages support Workforce Identity Federation.
Google Cloud API:
Only the v2 API supports identity federation.
Other:
No known limitations
Storage Transfer Service
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Text-to-Speech
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Transcoder API
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Transfer Appliance
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Translation Hub
Unsupported
Alternatives:
No alternatives available
Vertex AI
GA
Console (federated):
When Workforce Identity Federation users create a new model monitoring job, Vertex AI doesn't prefill the alert email input with their email address.
Google Cloud API:
Vertex AI doesn't send email messages to Workforce Identity Federation users.
Other:
Colab Enterprise doesn't support Workforce Identity Federation.
Vertex AI Agent Builder
Preview
Console (federated):
Vertex AI agents
creation and preview aren't supported.
Google Drive data store
creation isn't supported.
Google Cloud API:
No known limitations
Other:
No known limitations
Vertex AI Vision
GA
Console (federated):
Video stream playback doesn't work for Workforce Identity Federation users.
Google Cloud API:
No known limitations
Other:
No known limitations
Vertex AI Workbench
GA
Console (federated):
No known limitations
Google Cloud API:
Vertex AI Workbench managed notebooks
(
Deprecated
) doesn't support Workforce Identity Federation.
Vertex AI Workbench user-managed notebooks
(
Deprecated
) doesn't support Workforce Identity Federation.
Other:
No known limitations
Video Intelligence API
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Video Stitcher API
GA
Console (federated):
No known limitations
Google Cloud API:
Identity federation is not supported for LiveConfig and Slate resources when
Google Ad Manager (GAM) fields are set.
Other:
No known limitations
Virtual Private Cloud
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
VPC Service Controls
GA
Console (federated):
Autocomplete suggestions aren't supported when adding user identities in the following fields:
Access policies
Ingress and egress rules
in service perimeters
Google Cloud API:
v1alpha
APIs
aren't available to federated identities.
VPC Service Controls supports only specific
Workforce Identity Federation and Workload Identity Federation principal identifiers
. You can use these principal identifiers to
configure identity groups and third-party identities in ingress and egress rules
.
Other:
No known limitations
Web Risk
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Workflows
GA
Console (federated):
The automated grant feature, which grants the Workforce Identity Federation user the Service Account
User (
roles/iam.serviceAccountUser
) role on the project, is inactive. To grant the role
to Workforce Identity Federation users, you must go to the IAM page
and specify a Workforce Identity Federation
principal identifier
or contact
the project owner to do so.
Google Cloud API:
No known limitations
Other:
No known limitations
Workload Manager
GA
Console (federated):
No known limitations
Google Cloud API:
No known limitations
Other:
No known limitations
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-09 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-09 UTC."],[],[]]
