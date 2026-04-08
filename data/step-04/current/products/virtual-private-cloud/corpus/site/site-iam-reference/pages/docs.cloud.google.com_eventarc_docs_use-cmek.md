---
title: "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/eventarc/docs/use-cmek
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/eventarc/docs/all-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/eventarc/docs/use-cmek
  title: "Use customer-managed encryption keys \_|\_ Eventarc Standard \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Use customer-managed encryption keys | Eventarc Standard | Google Cloud Documentation
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
Eventarc
Standard
Start free
Overview
Eventarc Standard
Site selector
Eventarc Advanced documentation
Understanding and using Eventarc Advanced
Eventarc Standard documentation
Understanding and using Eventarc Standard
Guides
Reference
Samples
Resources
More
Technology areas
More
Overview
Eventarc Standard
More
Guides
Reference
Samples
Resources
Cross-product tools
More
Console
Discover
Product overview
Choose Eventarc Advanced or Eventarc Standard
Event-driven architectures
Event providers and destinations
Google event types supported
Event format
Event routes
Get started
Quickstart: Receive events from Cloud Storage in Cloud Run
Target: Cloud Run
Receive events using Cloud Audit Logs (gcloud CLI)
Receive events using Pub/Sub messages (gcloud CLI)
Receive events using Pub/Sub messages (Terraform)
Receive direct events from Cloud Storage (gcloud CLI)
Receive direct events from Cloud Storage (console)
Target: GKE
Receive events using Cloud Audit Logs (gcloud CLI)
Receive events using Pub/Sub messages (gcloud CLI)
Target: Workflows
Trigger Workflows using Cloud Audit Logs (gcloud CLI)
Trigger Workflows using Pub/Sub messages (gcloud CLI)
Trigger Workflows with direct events from Cloud Storage (gcloud CLI)
Create a trigger
Target: Cloud Run functions
Target: Cloud Run
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Target: GKE
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Target: Internal HTTP endpoint
Route events to an internal HTTP endpoint in a VPC network
Target: Workflows
Direct events
AlloyDB for PostgreSQL events
API Gateway events
Apigee API hub events
Apigee Registry events
Backup for GKE events
Batch events
BeyondCorp events
Certificate Manager events
Cloud Data Fusion events
Cloud Deploy events
Cloud Firestore events
Cloud Memorystore for Memcached events
Cloud Pub/Sub events
Cloud Run functions events
Cloud Speech-to-Text events
Cloud Storage events
Database Migration events
Dataflow events
Dataplex Universal Catalog events
Dataproc Metastore events
Datastream events
Eventarc events
Firebase Alerts events
Firebase Realtime Database events
Firebase Remote Config events
Firebase Test Lab events
GKE Hub events
Google Cloud Memorystore for Redis events
Network Connectivity events
Network Management events
Network Services events
Transcoder events
User-managed notebooks events
Vision AI events
VM Migration events
Workflows events
Route audit log events
Create a trigger using Terraform
Configure and manage
Manage triggers
Understand Eventarc locations
Determine event filters for audit logs
Understand path patterns
List event providers
Retry events
Control access
Access control with IAM
Set roles and permissions
All roles and permissions
Target: Cloud Run
Target: GKE
Target: Workflows
Target: Internal HTTP endpoint in a VPC network
Support a cross-project service account
Set up a service perimeter
Use customer-managed encryption keys (CMEK)
Use custom organization policies
Disable Eventarc Advanced resources
Develop
Develop event receivers
Route events
Receive Cloud Audit Logs events using an authenticated Cloud Run service
Receive Pub/Sub events using an authenticated Cloud Run service
Route events across Google Cloud projects
Receive Pub/Sub events at an internal HTTP endpoint in a VPC network
Receive Pub/Sub events at a private HTTP endpoint in a private GKE cluster
Build a Big Query processing pipeline for Cloud Run
Migrate Pub/ Sub triggers from Events for Cloud Run for Anthos to Eventarc
Build a Big Query processing pipeline for Knative serving
Deploy third-party events
About third-party events
Third-party providers
Subscribe to events
From Check Point CloudGuard
From Datadog
From ForgeRock
Create a channel
Create a trigger
Offer an Eventarc source
Overview
Register as a provider
Configure your source
Test the configuration
Troubleshoot event publishing
Monitor
Observability in Eventarc
Eventarc audit logging
Eventarc Publishing audit logging
Troubleshoot
View audit logs
Troubleshoot issues
All targets
Target: Cloud Run
Target: GKE
Target: Workflows
Customer-managed encryption key (CMEK) errors
Debug routing events to Cloud Run
Known issues
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
Site selector
Eventarc Advanced documentation
Eventarc Standard documentation
On this page
What is protected with CMEK
Before you begin
Grant the Eventarc service account access to a key
Enable CMEK for Google event types
Verify Cloud KMS usage
Enable CMEK for a third-party channel
Verify Cloud KMS usage
Display the key used for a channel
Disable CMEK
Apply a CMEK organization policy Considerations when applying organization policies
Require CMEKs for new Eventarc resources
Restrict Cloud KMS keys for an Eventarc project
Disabling and enabling Cloud KMS keys Disable Cloud KMS keys
Re-enable Cloud KMS keys
Pricing
What's next
Home
Documentation
Application development
Eventarc
Standard
Guides
Was this helpful?
Send feedback
Use customer-managed encryption keys
Stay organized with collections
Save and categorize content based on your preferences.
On this page
What is protected with CMEK
Before you begin
Grant the Eventarc service account access to a key
Enable CMEK for Google event types
Verify Cloud KMS usage
Enable CMEK for a third-party channel
Verify Cloud KMS usage
Display the key used for a channel
Disable CMEK
Apply a CMEK organization policy Considerations when applying organization policies
Require CMEKs for new Eventarc resources
Restrict Cloud KMS keys for an Eventarc project
Disabling and enabling Cloud KMS keys Disable Cloud KMS keys
Re-enable Cloud KMS keys
Pricing
What's next
Standard
By default, Eventarc encrypts customer content at
rest. Eventarc handles encryption for you without any
additional actions on your part. This option is called Google default encryption .
If you want to control your encryption keys, then you can use customer-managed encryption keys
(CMEKs) in Cloud KMS with CMEK-integrated services including
Eventarc. Using Cloud KMS keys gives you control over their protection
level, location, rotation schedule, usage and access permissions, and cryptographic boundaries.
Using Cloud KMS also lets
you view audit logs and control key lifecycles.
Instead of Google owning and managing the symmetric
key encryption keys (KEKs) that protect your data, you control and
manage these keys in Cloud KMS.
After you set up your resources with CMEKs, the experience of accessing your
Eventarc resources is similar to using Google default encryption.
For more information about your encryption
options, see Customer-managed encryption keys (CMEK) .
Customer-managed encryption keys are
stored as software keys, in a Cloud HSM cluster , or
externally using Cloud External Key Manager .
Cloud KMS produces audit logs when keys are enabled, disabled, or
used by Eventarc Advanced resources to encrypt and decrypt messages.
For more information, see the
Cloud KMS audit logging information .
What is protected with CMEK
Note: Enabling a channel with CMEK protects the Pub/Sub topic used as a
transport layer by Eventarc Standard. However, the CMEK key is
not displayed through the Google Cloud console. You can use the Google Cloud CLI to
verify that a CMEK key is enabled for a Pub/Sub topic .
You can configure CMEK for a channel that Eventarc Standard uses
and encrypt the events that pass through the channel. Enabling a channel with
CMEK protects the data associated with it by using an encryption key that only
you can access.
When you enable CMEK for the Google channel in a Google Cloud project, all
Eventarc Standard triggers for Google event types in that project
and region are fully encrypted with that CMEK key. CMEK keys can't be applied
on a per-trigger basis.
Before you begin
Before using this feature in Eventarc, you should:
Console gcloud Terraform
More
Enable the Cloud KMS and Eventarc APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a key ring .
Create a key for a specified key ring .
Update gcloud components.
gcloud components update
Enable the Cloud KMS and Eventarc APIs for
the project that will store your
encryption keys.
gcloud services enable cloudkms.googleapis.com eventarc.googleapis.com
Create a key ring .
Create a key for a specified key ring .
For information on all flags and possible values, run the command with the
--help flag.
Enable the Cloud KMS and Eventarc APIs for the
project that will store your encryption keys by configuring the
google_project_service
resource:
# Enable Cloud KMS API
resource "google_project_service" "cloudkms" {
service = "cloudkms.googleapis.com"
disable_on_destroy = false
}
# Enable Eventarc API
resource "google_project_service" "eventarc" {
service = "eventarc.googleapis.com"
disable_on_destroy = false
}
Create a key ring and key by configuring the
google_kms_key_ring
and google_kms_crypto_key
resources:
resource "random_id" "default" {
byte_length = 8
}
# Create a Cloud KMS key ring
resource "google_kms_key_ring" "default" {
name = "${random_id.default.hex}-example-keyring"
location = "us-central1"
}
# Create a Cloud KMS key
resource "google_kms_crypto_key" "default" {
name = "example-key"
key_ring = google_kms_key_ring.default.id
rotation_period = "7776000s"
}
For more information about using Terraform, see the
Terraform on Google Cloud documentation.
Note that Cloud KMS and Eventarc are
regionalized services. The region for the Cloud KMS key and the
protected Eventarc channel must be the same.
Grant the Eventarc service account access to a key
To grant the Eventarc service account access to the
Cloud KMS key, add the service account as a principal of the key,
and grant the service account the
Cloud KMS CryptoKey Encrypter/Decrypter role:
Console gcloud Terraform
More
When you enable CMEK for a Google or third-party channel through the
console, you are prompted to grant the
Cloud KMS CryptoKey Encrypter/Decrypter role to the service account.
For more information, in this document,
see Enable CMEK for Google event types or
Enable CMEK for a third-party event channel .
gcloud kms keys add-iam-policy-binding KEY_NAME \
--keyring RING_NAME \
--location LOCATION \
--member serviceAccount: SERVICE_AGENT_EMAIL \
--role roles/cloudkms.cryptoKeyEncrypterDecrypter
Replace the following:
KEY_NAME : the name of the key. For example, my-key .
RING_NAME : the name of the key ring. For example,
my-keyring .
LOCATION : the location of the key. For example,
us-central1 .
SERVICE_AGENT_EMAIL : the email address of the
service account with the eventarc.serviceAgent role.
For example,
service- PROJECT_NUMBER @gcp-sa-eventarc.iam.gserviceaccount.com .
For more information, see Service agents .
Generate the service identity for the Eventarc service by
configuring the
google_project_service_identity
resource:
resource "google_project_service_identity" "eventarc_sa" {
provider = google-beta
project = data.google_project.default.project_id
service = "eventarc.googleapis.com"
}
Grant the Cloud KMS role to the Eventarc service
account by configuring the
google_kms_crypto_key_iam_member
resource:
# Grant service account access to Cloud KMS key
resource "google_kms_crypto_key_iam_member" "default" {
crypto_key_id = google_kms_crypto_key.default.id
role = "roles/cloudkms.cryptoKeyEncrypterDecrypter"
member = "serviceAccount:${google_project_service_identity.eventarc_sa.email}"
}
Enable CMEK for Google event types
Eventarc triggers that
route Google event types
publish events to a virtual channel referred to as a Google channel that is
project and regional-specific. This virtual channel is available in all
Eventarc regions.
When you enable CMEK for the Google channel in a Google Cloud project,
all Eventarc triggers for Google event types in that project
and region are fully encrypted with that CMEK key. You can add multiple CMEK
keys, and associate each with a specific region for the Google channel. CMEK
keys can't be applied on a per-trigger basis.
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc >
Channels page.
Go to Channels
Click a channel with a Google Provider .
In the Edit channel page, select the Use a customer-managed
encryption key (CMEK) checkbox.
Click Add encryption key .
Select a Region and, in the CMEK encryption key list, select a
key ring that you have created for the region. Note that you can add only
one encryption key per region for a channel.
Optional: To manually enter the resource name of the key, in the CMEK
encryption key list, click Don't see your key? Enter key resource name ,
and enter the key name in the specified format.
If prompted, grant the cloudkms.cryptoKeyEncrypterDecrypter role to the
Eventarc service account with the eventarc.serviceAgent
role.
Optional: Click Add encryption key to add another key ring that you
have created for a different region.
Click Save .
gcloud eventarc google-channels update \
--location = LOCATION \
--crypto-key = KEY
Replace the following:
LOCATION : the
region of the Google channel to be
protected. It must match the location of the key used. Note that you can add
only one encryption key per region for a channel.
KEY : the fully qualified Cloud KMS key name
in the format projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME .
Enable CMEK for the GoogleChannelConfig resource in a given project and
location by configuring the
google_eventarc_google_channel_config
resource:
# Specify a CMEK key for the `GoogleChannelConfig` resource
resource "google_eventarc_google_channel_config" "default" {
location = "us-central1"
name = "googleChannelConfig"
crypto_key_name = google_kms_crypto_key.default.id
depends_on = [ google_kms_crypto_key_iam_member.default ]
}
You can update the GoogleChannelConfig resource using the
projects.locations.updateGoogleChannelConfig
method and specify a CMEK key for a given project and location.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the Google channel to be protected. It must
match the location of the key used—for example, us-central1 . Note that you can add
only one encryption key per region for a channel.
KEY_NAME : the name of the key—for
example, my-key .
RING_NAME : the name of the key ring—for
example, my-keyring .
Request JSON body:
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json << 'EOF'
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig" | Select-Object -Expand Content
If successful, the response body contains an updated instance of
GoogleChannelConfig :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig",
"updateTime": "2025-03-05T17:56:54.106390447Z",
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
Note: To protect the Google channel in the eu multi-region, you must use a
Cloud KMS key from europe since Cloud KMS uses a
different name to represent the same multi-region. For more information,
see Cloud KMS multi-regional
and Eventarc multi-regional
locations.
If you are creating Pub/Sub triggers using your own existing topics,
for comprehensive CMEK protection, we recommend that you also configure the KMS
key on the topic. For more information, see
Configuring Pub/Sub topics .
Verify Cloud KMS usage
To verify that the channel is now CMEK-compliant:
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc >
Triggers page.
Go to Triggers
Click a trigger that lists a Google Cloud source as its
Event provider and a Region that you have protected using CMEK.
On the Trigger details page, the Encryption status displays,
the message, Events encrypted using Customer-managed encryption keys .
To confirm the CMEK key, you can use the
google-channels describe
command.
gcloud eventarc google-channels describe \
--location = LOCATION
The output should be similar to the following:
cryptoKeyName: projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME
name: projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig
updateTime: '2022-06-28T17:24:56.365866104Z'
The cryptokeyName value shows the Cloud KMS key used for the
Google channel.
To confirm the CMEK key, you can use the Terraform state show command.
terraform state show google_eventarc_google_channel_config.default
The output should be similar to the following:
# google_eventarc_google_channel_config.default:
resource "google_eventarc_google_channel_config" "default" {
crypto_key_name = "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
id = "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
location = " LOCATION "
name = "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
project = " PROJECT_ID "
update_time = "2025-03-24T17:15:08.809635011Z"
}
To confirm the CMEK key, you can retrieve the GoogleChannelConfig resource
using the
projects.locations.getGoogleChannelConfig
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected Google channel.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig" | Select-Object -Expand Content
If successful, the response body contains an instance of
GoogleChannelConfig :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig",
"updateTime": "2025-03-05T17:56:54.106390447Z",
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
Enable CMEK for a third-party channel
An Eventarc channel for third parties is a resource through
which non-Google Cloud entities that offer an
Eventarc source can interact with destinations. This channel is
specific to a region and you can add only one key per third-party channel.
To enable CMEK for a third-party channel:
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc >
Channels page.
Go to Channels
Click a channel with a third-party Provider .
In the Channel details page, click
edit
Edit .
In the Edit channel page, for Encryption , select Cloud KMS key .
In the Key type list, select a method to manage your keys.
You can manage your keys manually or you can use
Autokey which lets you generate key rings
and keys on-demand. If the Autokey option is disabled, it isn't yet
integrated with the current resource type.
In the Select a Cloud KMS key list, select a key. Note that
you can add only one encryption key per region for a channel.
Optional: To manually enter the resource name of the key, in the Select
a Cloud KMS key list, click Enter key manually , and enter the
key name in the specified format.
If prompted, grant the
cloudkms.cryptoKeyEncrypterDecrypter role
to the
Eventarc Service Agent .
Click Save .
gcloud eventarc channels update CHANNEL_NAME \
--location = LOCATION \
--crypto-key = KEY
Replace the following:
CHANNEL_NAME : the name of the third-party channel.
To create a new third-party channel, see
Create a channel .
LOCATION : the region of the third-party channel to
be protected. It must match the location of the key.
KEY : the fully qualified Cloud KMS key
name in the format
projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME .
Specify a CMEK key for a third-party channel by configuring the
google_eventarc_channel
resource. For example:
resource "google_eventarc_channel" "default" {
location = "us-central1"
name = " CHANNEL_NAME "
crypto_key_name = google_kms_crypto_key.default.id
}
Replace CHANNEL_NAME with the name of the
third-party channel.
You can update a Channel resource using the
projects.locations.channels.patch
method and specify a CMEK key for a given project and location.
Before using any of the request data,
make the following replacements:
CHANNEL_NAME : the channel name.
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the channel to be protected. It must
match the location of the key used—for example, us-central1 . Note that you can add
only one encryption key per region for a channel.
KEY_NAME : the name of the key—for
example, my-key .
RING_NAME : the name of the key ring—for
example, my-keyring .
Request JSON body:
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json << 'EOF'
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ?updateMask=cryptoKeyName"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ?updateMask=cryptoKeyName" | Select-Object -Expand Content
If successful, the response body contains a newly created instance of
Operation :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata",
"createTime": "2024-01-25T17:17:45.782370139Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
Verify Cloud KMS usage
To verify that the channel is now CMEK-compliant:
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc >
Triggers page.
Go to Triggers
Click a trigger with a third-party source as its Event provider and
a Region that you have protected using CMEK.
In the Trigger details page, the status of Encryption displays
the message, Events encrypted using Customer-managed encryption keys .
gcloud eventarc channels describe CHANNEL_NAME \
--location = LOCATION
The output should be similar to the following:
createTime: '2022-06-28T18:05:52.403999904Z'
cryptoKeyName: projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME
name: projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig
pubsubTopic: projects/ PROJECT_ID /topics/ PUBSUB_TOPIC_ID
state: ACTIVE
uid: 5ea277f9-b4b7-4e7f-a8e0-6ca9d7204fa3
updateTime: '2022-06-28T18:09:18.650727516Z'
The cryptokeyName value shows the Cloud KMS key used for the
third-party channel.
To confirm the CMEK key, you can use the Terraform state show command.
terraform state show google_eventarc_channel.default
The output should be similar to the following:
# google_eventarc_channel.default:
resource "google_eventarc_channel" "default" {
create_time = "2025-03-31T13:07:44.721274062Z"
crypto_key_name = "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
id = "projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME "
location = " LOCATION "
name = " CHANNEL_NAME "
project = " PROJECT_ID "
pubsub_topic = "projects/ PROJECT_ID /topics/ PUBSUB_TOPIC_ID "
state = "ACTIVE"
uid = "406302e9-1d41-4479-8f4f-2524a803790e"
update_time = "2025-03-31T13:07:49.708241490Z"
}
To confirm the CMEK key for a channel, you can retrieve a Channel resource
using the
projects.locations.channels.get
method.
Before using any of the request data,
make the following replacements:
CHANNEL_NAME : the channel name.
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected channel.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME " | Select-Object -Expand Content
If successful, the response body contains an instance of
Channel :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ",
"uid": "12f941a6-196a-457b-bfdb-ca21138859d0",
"createTime": "2025-01-29T15:05:12.113912689Z",
"updateTime": "2025-01-29T15:05:17.210986285Z",
"pubsubTopic": "projects/ PROJECT_ID /topics/ TOPIC_ID ",
"state": "ACTIVE",
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
Display the key used for a channel
You can describe an Eventarc channel and display the
Cloud KMS key being used for the channel.
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc
> Channels page.
Go to Channels
Click a channel name.
Any CMEK encryption keys being used for the channel are displayed.
Based on the type of channel, run the following command:
Google channel Third-party channel
More
gcloud eventarc google-channels describe \
--location = LOCATION
gcloud eventarc channels describe CHANNEL_NAME \
--location = LOCATION
The output should contain a line similar to the following:
cryptoKeyName: projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME
The cryptoKeyName value shows the Cloud KMS key being used for the
channel.
Based on the type of channel, run the following command:
Google channel Third-party channel
More
terraform state show google_eventarc_google_channel_config.default
terraform state show google_eventarc_channel.default
The output should contain a line similar to the following:
crypto_key_name = "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
The crypto_key_name value shows the Cloud KMS key being used for
the channel.
Based on the type of channel, make the following request:
Google channel Third-party channel
More
To confirm the CMEK key for a given project and location, you can
retrieve the GoogleChannelConfig resource using the
projects.locations.getGoogleChannelConfig
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected Google channel.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig" | Select-Object -Expand Content
If successful, the response body contains an instance of
GoogleChannelConfig :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig",
"updateTime": "2025-03-05T17:56:54.106390447Z",
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
To confirm the CMEK key for a given project and location, you can
retrieve a Channel resource using the
projects.locations.channels.get
method.
Before using any of the request data,
make the following replacements:
CHANNEL_NAME : the channel name.
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected channel.
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
curl -X GET \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME "
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Execute the following command:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method GET ` -Headers $headers ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME " | Select-Object -Expand Content
If successful, the response body contains an instance of
Channel :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ",
"uid": "12f941a6-196a-457b-bfdb-ca21138859d0",
"createTime": "2025-01-29T15:05:12.113912689Z",
"updateTime": "2025-01-29T15:05:17.210986285Z",
"pubsubTopic": "projects/ PROJECT_ID /topics/ TOPIC_ID ",
"state": "ACTIVE",
"cryptoKeyName": "projects/ PROJECT_ID /locations/ LOCATION /keyRings/ RING_NAME /cryptoKeys/ KEY_NAME "
}
Disable CMEK
You can disable the CMEK protection associated with a channel. The events that
are delivered through such channels are still protected by
Google-owned and Google-managed encryption keys .
To delete the CMEK protection associated with a channel:
Console gcloud Terraform REST
More
In the Google Cloud console, go to the Eventarc >
Channels page.
Go to Channels
Based on the type of channel, complete the following steps:
Google channel Third-party channel
More
Click a channel with a Google Provider .
On the Edit channel page, hold the pointer over the
CMEK encryption key list to see the
delete
Delete item button.
Click delete
Delete item .
Click Save .
You might need to refresh the page to enable the
Use a customer-managed encryption key (CMEK) checkbox.
Click a channel with a third-party Provider .
On the Channel details page, click
edit
Edit .
On the Edit channel page, for Encryption , select
Google-managed encryption key .
Click Save .
Based on the type of channel, run the following command:
Google channel Third-party channel
More
gcloud eventarc google-channels \
update --clear-crypto-key
gcloud eventarc channels CHANNEL_NAME \
update --clear-crypto-key
Based on the type of channel, clear the crypto_key_name value by not
specifying it when configuring the Terraform resource:
Google channel Third-party channel
More
resource "google_eventarc_google_channel_config" "default" {
location = "us-central1"
name = "googleChannelConfig"
}
resource "google_eventarc_channel" "default" {
location = "us-central1"
name = " CHANNEL_NAME "
}
Based on the type of channel, make the following request:
Google channel Third-party channel
More
To delete the CMEK key, you can update the GoogleChannelConfig
resource for a given project and location using the
projects.locations.updateGoogleChannelConfig
method.
Before using any of the request data,
make the following replacements:
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected Google channel to be protected.
Request JSON body:
{
"cryptoKeyName": ""
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json << 'EOF'
{
"cryptoKeyName": ""
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"cryptoKeyName": ""
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig" | Select-Object -Expand Content
If successful, the response body contains an updated instance of
GoogleChannelConfig :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /googleChannelConfig",
"updateTime": "2025-03-05T17:56:54.106390447Z"
}
To delete the CMEK key, you can update a Channel resource for a given
project and location using the
projects.locations.channels.patch
method.
Before using any of the request data,
make the following replacements:
CHANNEL_NAME : the channel name.
PROJECT_ID : your Google Cloud
project ID.
LOCATION : the
region of the protected channel.
Request JSON body:
{
"cryptoKeyName": ""
}
To send your request, expand one of these options:
curl (Linux, macOS, or Cloud Shell)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
, or by using Cloud Shell ,
which automatically logs you into the gcloud CLI
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
cat > request.json << 'EOF'
{
"cryptoKeyName": ""
}
EOF
Then execute the following command to send your REST request:
curl -X PATCH \ -H "Authorization: Bearer $(gcloud auth print-access-token)" \ -H "Content-Type: application/json; charset=utf-8" \ -d @request.json \ "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ?updateMask=cryptoKeyName"
PowerShell (Windows)
Note:
The following command assumes that you have logged in to
the gcloud CLI with your user account by running
gcloud init
or
gcloud auth login
.
You can check the currently active account by running
gcloud auth list .
Save the request body in a file named request.json .
Run the following command in the terminal to create or overwrite
this file in the current directory:
@'
{
"cryptoKeyName": ""
}
'@ | Out-File -FilePath request.json -Encoding utf8
Then execute the following command to send your REST request:
$cred = gcloud auth print-access-token $headers = @{ "Authorization" = "Bearer $cred" } Invoke-WebRequest ` -Method PATCH ` -Headers $headers ` -ContentType: "application/json; charset=utf-8" ` -InFile request.json ` -Uri "https://eventarc.googleapis.com/v1/projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ?updateMask=cryptoKeyName" | Select-Object -Expand Content
If successful, the response body contains a newly created instance of
Operation :
{
"name": "projects/ PROJECT_ID /locations/ LOCATION /operations/ OPERATION_ID ",
"metadata": {
"@type": "type.googleapis.com/google.cloud.eventarc.v1.OperationMetadata",
"createTime": "2024-01-25T17:17:45.782370139Z",
"target": "projects/ PROJECT_ID /locations/ LOCATION /channels/ CHANNEL_NAME ",
"verb": "update",
"requestedCancellation": false,
"apiVersion": "v1"
},
"done": false
}
Apply a CMEK organization policy
Eventarc is integrated with two
organization policy constraints
to help ensure CMEK usage across an organization:
constraints/gcp.restrictNonCmekServices is used to require CMEK protection.
constraints/gcp.restrictCmekCryptoKeyProjects is used to limit which
Cloud KMS keys are used for CMEK protection.
Note: CMEK organization policies only apply to newly created resources within
supported Google Cloud services. For more information, see
Google Cloud resource hierarchy
and CMEK organization policies .
This integration lets you specify the following encryption compliance
requirements for Eventarc resources in your organization:
Require CMEKs for new Eventarc resources
Restrict Cloud KMS keys for an Eventarc project
Considerations when applying organization policies
Before applying any CMEK organization policies, you should be aware of the
following.
Prepare for a propagation delay
After you set or update an organization policy, it can take up to 15 minutes
for the new policy to take effect.
Consider existing resources
Existing resources are not subject to newly created organization policies.
For example, an organization policy does not retroactively apply to existing
pipelines. Those resources are still accessible without a CMEK and, if
applicable, are still encrypted with existing keys.
Verify required permissions to set an organization policy
The permission to set or update the organization policy might be difficult to
acquire for testing purposes. You must be granted the
Organization Policy Administrator role ,
which can only be granted at the organization level (rather than the project or
folder level).
Although the role must be granted at the organization level, it is still
possible to specify a policy that only applies to a specific project
or folder.
Require CMEKs for new Eventarc resources
You can use the constraints/gcp.restrictNonCmekServices constraint to require
that CMEKs be used to protect new Eventarc resources in an
organization.
If set, this organization policy causes all resource creation requests without a
specified Cloud KMS key to fail.
After you set this policy, it applies only to new resources in the project. Any
existing resources without Cloud KMS keys applied continue to exist
and are accessible without issue.
Important: Before setting this policy, make sure to enable CMEK for the Google
channel in a Google Cloud project so that all Eventarc
triggers for Google event types in that project and region are fully encrypted
with that CMEK key. In this document, see
Enable CMEK for Google event types .
Console gcloud
More
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Using the Filter , search for the following constraint:
constraints/gcp.restrictNonCmekServices
In the Name column, click Restrict which services may create resources
without CMEK .
Click edit Manage Policy .
On the Edit policy page, under Policy source , select
Override parent's policy .
Under Rules , click Add a rule .
In the Policy values list, select Custom .
In the Policy type list, select Deny .
In the Custom values field, enter the following:
is:eventarc.googleapis.com
Click Done , and then click Set policy .
Create a temporary file /tmp/policy.yaml to store the policy:
name : projects/ PROJECT_ID /policies/gcp.restrictNonCmekServices
spec :
rules :
- values :
deniedValues :
- is:eventarc.googleapis.com
Replace PROJECT_ID with the ID of the project
where you are applying this constraint.
Run the
org-policies set-policy
command:
gcloud org-policies set-policy /tmp/policy.yaml
To verify that the policy is successfully applied, you can try to create an
Eventarc Standard channel in the project. The process fails
unless you specify a Cloud KMS key.
Restrict Cloud KMS keys for an Eventarc project
You can use the constraints/gcp.restrictCmekCryptoKeyProjects constraint to
restrict the Cloud KMS keys that you can use to protect a resource in
an Eventarc project.
For example, you can specify a rule similar to the following: "For applicable
Eventarc resources in projects/my-company-data-project ,
Cloud KMS keys used in this project must come from
projects/my-company-central-keys OR projects/team-specific-keys ."
Console gcloud
More
In the Google Cloud console, go to the Organization policies page.
Go to Organization policies
Using the Filter , search for the following constraint:
constraints/gcp.restrictCmekCryptoKeyProjects
In the Name column, click Restrict which projects may supply KMS
CryptoKeys for CMEK .
Click edit Manage Policy .
On the Edit policy page, under Policy source , select
Override parent's policy .
Under Rules , click Add a rule .
In the Policy values list, select Custom .
In the Policy type list, select Allow .
In the Custom values field, enter the following:
under:projects/ KMS_PROJECT_ID
Replace KMS_PROJECT_ID with the ID of the
project where the Cloud KMS keys you want to use are
located.
For example, under:projects/my-kms-project .
Click Done , and then click Set policy .
Create a temporary file /tmp/policy.yaml to store the policy:
name : projects/ PROJECT_ID /policies/gcp.restrictCmekCryptoKeyProjects
spec :
rules :
- values :
allowedValues :
- under:projects/ KMS_PROJECT_ID
Replace the following
PROJECT_ID : the ID of the project where you
are applying this constraint.
KMS_PROJECT_ID : the ID of the project where
the Cloud KMS keys you want to use are located.
Run the
org-policies set-policy
command:
gcloud org-policies set-policy /tmp/policy.yaml
To verify that the policy is successfully applied, you can try to create an
Eventarc Standard channel using a Cloud KMS key from a
different project. The process will fail.
Disabling and enabling Cloud KMS keys
A key version stores the cryptographic key material that you use to encrypt,
decrypt, sign, and verify data. You can disable this key version so that data
that was encrypted with the key can't be accessed.
When Eventarc cannot access Cloud KMS keys,
event publishing with channels fails with FAILED_PRECONDITION errors and event
delivery stops. You can enable a key in the Disabled state so that the
encrypted data can be accessed again.
Disable Cloud KMS keys
To prevent Eventarc from using the key to encrypt or decrypt
your event data, do any of the following:
We recommend
disabling the key version
you have configured for the channel. This affects only the
Eventarc channels and triggers that are associated with the
specific key.
Optional: Revoke the cloudkms.cryptoKeyEncrypterDecrypter role
from the Eventarc service account. This affects all the
project's Eventarc channels and triggers that support events
encrypted using CMEK.
Although neither operation guarantees instantaneous access revocation,
Identity and Access Management (IAM) changes generally propagate faster. For more
information, see
Cloud KMS resource consistency and
Access change propagation .
Re-enable Cloud KMS keys
To resume event delivery and publishing,
restore access
to Cloud KMS.
Pricing
This integration does not incur additional
costs beyond the key operations, which are billed to your Google Cloud
project. The use of CMEK for a channel incurs charges for access to the
Cloud KMS service based on Pub/Sub pricing .
For more information on the most current pricing information, see
Cloud KMS Pricing .
What's next
Troubleshoot CMEK issues
Best practices for using CMEKs
Use CMEK with Eventarc Advanced
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
