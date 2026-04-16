---
title: "Connect an environment to a VPC network \_|\_ Cloud Composer \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/connect-vpc-network
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-3/access-control
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/connect-vpc-network
  title: "Connect an environment to a VPC network \_|\_ Cloud Composer \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

On September 15, 2026 , all Cloud Composer 1 versions and versions 2.0.x of Cloud Composer 2 will reach their planned end of life . You will not be able to use environments with these versions. We recommend planning migration to Cloud Composer 3 . Cloud Composer 2 versions 2.1.x and later are still supported and are not impacted by this change.
Home
Documentation
Data analytics
Cloud Composer
Composer 3 Guides
Send feedback
Connect an environment to a VPC network
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how your environment can access a VPC network in
Cloud Composer 3, provides instructions for connecting an environment to a VPC
network, and describes how to disable a previously configured connection.
If you want to enable or disable internet access for your environment's
Airflow components, see
Change environment networking type (Private or Public IP) .
If you want to disable or enable internet access only when installing PyPI
packages, see
Configure internet access when installing PyPI packages .
If you want to configure Shared VPC networking, see
Configure Shared VPC for information about configuring
projects and permissions.
About VPC network access
In Cloud Composer 3, you can enable access to a VPC network for an
environment.
If you enable access to a VPC network for an environment:
Airflow components of your environment
can access private network endpoints in your VPC network. For example,
your DAG code can access resources located in your VPC network through a
configured Airflow connection .
If your environment uses Private IP networking ,
all internal traffic is routed to your VPC network , except the traffic
to Google APIs, services, and domains that
are available to Private IP environments
through Private Google Access.
Depending on how you configure your VPC network, a Private IP
environment can gain access to the internet through you VPC network .
Private DNS Zones defined in your VPC
network are automatically available to your environment's Airflow
components.
Note: Cloud Composer 3 doesn't support a user-defined
.internal DNS zone . If you create a DNS zone for
.internal , it won't be possible to reach that zone.
The environment reserves two IP addresses in your VPC subnetwork and uses two
extra IP addresses during maintenance and upgrades. Make sure that
four IP addresses per environment are available in your VPC subnetwork.
Cloud Composer uses a
network attachment to connect your
environment to a VPC network:
If you specify a VPC network and subnetwork, then Cloud Composer
creates a new network attachment in your project. This attachment is deleted
after you delete an environment ,
disable connection to a VPC network, or overwrite the VPC
connection parameters.
If you specify an
existing network attachment ,
then it must be located in the same project with the environment. This
attachment is not deleted after you delete an environment, disable connection, or overwrite the VPC connection parameters.
In Shared VPC networking:
Make sure that you configured Shared VPC networking for
Cloud Composer. See
Configure Shared VPC for information about configuring
projects and permissions for Cloud Composer.
After Shared VPC networking is configured, you can connect your
environment to a VPC network from the host project. If you use an
existing network attachment, it must be created in the service project
(where the environment is located), and attached to a Shared VPC
network.
Limitations for transitive DNS peering in Cloud Composer 3
Limitations for transitive DNS peering apply to a
Cloud Composer 3 environment in the following way:
Cloud DNS has a limitation of one transitive hop, which
means that only two hops are supported in total.
In Cloud Composer 3, your environment's components run in the
tenant project and communicate with the project where the
environment is located through a DNS peering. The transitive hop is used by
the DNS peering of the tenant project, so it's possible to use only one hop
in total.
About the environment's internal IP range
Cloud Composer 3 environments require several IP addresses for its
components that run in the tenant project , such as your
environment's cluster and Cloud SQL proxy. These IP addresses are
taken from the environment's internal IP range .
The default internal IP range is 100.64.128.0/20 .
You can specify a different internal IP range when you create an
environment. This range must use a /20 mask.
You cannot change the internal IP range of an existing environment.
The internal IP range interacts with your VPC network in the following ways:
The internal IP range must not conflict with the VPC subnetwork that the
Cloud Composer environment is connected to. It's not possible
to enable a connection with a VPC subnetwork that overlaps with the
internal IP range.
If the internal IP range of an environment overlaps with your VPC
network ranges, then endpoints from your VPC network that have
overlapping IP addresses are not accessible from the environment .
For example, if the internal range is 100.64.128.0/20 then any request
to the 100.64.128.1 endpoint in your VPC network fails because the
request does not leave the tenant project.
The internal IP range is not reserved. You can use the same internal IP
range for several environments without any additional setup because the
internal VPC networks used by different environments are separated.
You can use the internal range IP addresses for other purposes, as long as
DAGs and tasks in your environment do not make requests to them.
Connect to a VPC network
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
In the Network configuration section, find the
Network attachment item and click Edit .
In the Network attachment dialog:
To create a new network attachment, in the Network attachment
list, select Create a new network attachment . In the Network
and Subnetwork lists, select a VPC network and a subnetwork.
To use an existing network attachment, in the Network attachment
list, select an attachment.
Click Save .
gcloud
The following Google Cloud CLI arguments specify VPC network connection
parameters:
--network : VPC network ID.
--subnetwork : VPC subnetwork ID.
--network-attachment : Use an existing network attachment instead.
New network attachment
To connect your environment to a VPC network through a new network
attachment, run the following Google Cloud CLI command:
gcloud beta composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--network NETWORK_ID \
--subnetwork SUBNETWORK_ID
Replace the following:
ENVIRONMENT_NAME : the name of the environment
LOCATION : the region where the environment is located
NETWORK_ID : VPC network ID
SUBNETWORK_ID : VPC subnetwork ID
Example:
gcloud beta composer environments update example-environment \
--location us-central1 \
--network projects/example-project/global/networks/example-network \
--subnetwork projects/example-project/regions/us-central1/subnetworks/example-subnetwork
Existing network attachment
To connect your environment to a VPC network through a new network
attachment, run the following Google Cloud CLI command:
gcloud beta composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--network-attachment NETWORK_ATTACHMENT_ID
Replace the following:
ENVIRONMENT_NAME : the name of the environment
LOCATION : the region where the environment is located
NETWORK_ATTACHMENT_ID : the network attachment in the
projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
format.
Example:
gcloud beta composer environments update example-environment \
--location us-central1 \
--network-attachment projects/example-project/regions/us-central1/networkAttachments/example-network-attachment
API
Create an environments.patch API request.
In this request:
To create a new network attachment:
In the updateMask parameter, specify
the config.node_config.network,config.node_config.subnetwork
mask.
In the request body, in the network and subnetwork
fields, specify your VPC network and subnetwork IDs.
To use an existing network attachment:
In the updateMask parameter, specify
the config.node_config.composer_network_attachment
mask.
In the request body, provide a value for the existing network
attachment in the
projects/{project}/regions/{region}/networkAttachments/{networkAttachment}
format.
Example (new network attachment):
// PATCH https://composer.googleapis.com/v1beta1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.node_config.network,config.node_config.subnetwork
"config" : {
"nodeConfig" : {
"network" : "projects/example-project/global/networks/example-network" ,
"subnetwork" : "projects/example-project/regions/us-central1/subnetworks/example-subnetwork"
}
}
Example (existing network attachment):
// PATCH https://composer.googleapis.com/v1beta1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.node_config.composer_network_attachment
"config" : {
"nodeConfig" : {
"composerNetworkAttachment" : "projects/example-project/regions/us-central1/networkAttachments/example-network-attachment"
}
}
Terraform
The following fields in the node_config block specify VPC network
connection parameters:
network : VPC network ID.
subnetwork : VPC subnetwork ID.
composer_network_attachment : Use an existing network attachment instead.
New network attachment
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
node_config {
network = NETWORK_ID
subnetwork = SUBNETWORK_ID
}
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
NETWORK_ID : VPC network ID
SUBNETWORK_ID : VPC subnetwork ID
Example (new network attachment):
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
node_config {
network = "projects/example-project/global/networks/example-network"
subnetwork = "projects/example-project/regions/us-central1/subnetworks/example-subnetwork"
}
... other configuration parameters
}
}
Existing network attachment
Caution: If you specify an existing network attachment that you also manage in
Terraform, then Terraform will revert changes to the attachment done by
Cloud Composer when you apply configuration changes.
As a result, the environment will no longer use the attachment. To address
this, make sure that Terraform ignores changes to the producer_accept_lists
parameter of the attachment, as follows:
resource "google_compute_network_attachment" " NETWORK_ATTACHMENT_ID " {
lifecycle {
ignore_changes = [ producer_accept_lists ]
}
# ... other configuration parameters
}
Afterwards, specify this attachment for an environment. You can also specify
an attachment that is not managed in Terraform, see the example.
resource "google_composer_environment" "example" {
name = "example-environment"
region = "us-central1"
config {
node_config {
composer_network_attachment = google_compute_network_attachment. NETWORK_ATTACHMENT_ID .id
}
# ... other configuration parameters
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
NETWORK_ATTACHMENT_ID : the network attachment ID.
Example (existing network attachment):
resource "google_compute_network_attachment" "example" {
lifecycle {
ignore_changes = [ producer_accept_lists ]
}
# ... other configuration parameters
}
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
node_config {
# Attachment is managed in Terraform:
composer_network_attachment = google_compute_network_attachment. NETWORK_ATTACHMENT_ID .id
# Attachment is not managed in Terraform:
# composer_network_attachment = projects/example-project/regions/us-central1/networkAttachments/example-network-attachment
}
# ... other configuration parameters
}
}
Disable connection to a VPC network
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
In the Network configuration section, find the
Network attachment item and click Edit .
In the Network attachment dialog, select None and click Save .
gcloud
The --disable-vpc-connectivity arguments disables the VPC network
connection of your environment:
gcloud beta composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--disable-vpc-connectivity
Replace the following:
ENVIRONMENT_NAME : the name of the environment
LOCATION : the region where the environment is located
Example:
gcloud beta composer environments update example-environment \
--location us-central1 \
--disable-vpc-connectivity
API
Create an environments.patch API request.
In this request:
In the updateMask parameter, specify
the config.node_config.network,config.node_config.subnetwork
mask.
In the request body, in the network and subnetwork fields,
specify empty values.
Example:
// PATCH https://composer.googleapis.com/v1beta1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.node_config.network,config.node_config.subnetwork
"config" : {
"nodeConfig" : {
"network" : "" ,
"subnetwork" : ""
}
}
Terraform
It's not possible to detach a VPC network using Terraform. Instead, you can
attach a different VPC network in its place, or detach the network using
other tools like Google Cloud CLI.
What's next
Change environment networking type (Private or Public IP)
Configure internet access when installing PyPI packages
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
