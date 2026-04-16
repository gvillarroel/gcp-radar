---
title: "Configure Private Service Connect in Cloud Composer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-2/configure-private-service-connect
knowledge_key: corpus
source_id: site-docs-reference-required-6
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-2/override-airflow-configurations
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-2/configure-private-service-connect
  title: "Configure Private Service Connect in Cloud Composer \_|\_ Google Cloud Documentation"
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
Composer 2 Guides
Send feedback
Configure Private Service Connect in Cloud Composer
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains how to create a Private IP
environment that uses Private Service Connect instead of VPC peerings.
For general information about creating Private IP environments, see
Configure a private IP environment .
About Private Service Connect in Cloud Composer
Components of your environment are distributed between
the tenant and the customer project . In
Private IP environments, the components located in
these two projects connect using VPC peerings . VPC peerings
have some limitations, including the limit on the maximum number of
peerings in a VPC. These limits can become more evident if you use
large-scale networks with Cloud Composer environments.
With Private Service Connect support
in Cloud Composer , your private IP environments communicate
internally without the use of VPC peerings. Such environments use the
Private IP with PSC architecture .
Before you begin
Private Service Connect support is available
only in Cloud Composer 2.
You can only enable Private Service Connect when you create
a new environment. It is not possible to switch an existing environment to use Private Service Connect.
Your environment must be a Private IP
environment. Because VPC peerings are not used, you do not need to specify
the CIDR ranges for the Cloud SQL instance and the internal
Cloud Composer network.
If the Disable Private Service Connect for Consumers
organization policy constraint denies
SERVICE_PRODUCER endpoints, it is not possible to create environments with
Private Service Connect. This policy does not affect
existing Cloud Composer environments with
Private Service Connect. Such environments
can operate when this policy is enabled.
Caution: If you create a new subnet for the Cloud Composer
connection subnetwork, use the PRIVATE
subnet purpose for it. Do
not use the PRIVATE_SERVICE_CONNECT purpose. Subnets reserved for
Private Service Connect Services cannot be used for the
Cloud Composer connection subnetwork.
Enable Private Service Connect when you create an environment
Console
To create an environment with Private Service Connect,
select the Private Service Connect connectivity type when you create a
Private IP environment. Then specify the subnetwork for the
Private Service Connect connection.
When you create a Private IP environment:
In the Network configuration section, expand
the Show network configuration item.
In the Networking type section, select the Private IP environment
option to create a Private IP environment.
In the Composer connectivity
section, select Private Service Connect .
In the Composer connection subnetwork drop-down list, select the
subnetwork for Private Service Connect endpoints.
You can use your environment's subnetwork.
As an alternative, you can specify a different subnetwork. Doing so
gives you more control over the CIDR range from which the IP address for
the PSC endpoint are selected.This range can be shared by multiple
Cloud Composer environments. Each environment requires
one IP address.
Specify other parameters for your Private IP environment.
gcloud
To create an environment with Private Service Connect, use
the --connection-subnetwork argument when you create a Private IP
environment. Then specify the subnetwork for
the Private Service Connect connection.
gcloud composer environments create ENVIRONMENT_NAME \
--location LOCATION \
--image-version composer-2.16.10-airflow-2.10.5 \
--enable-private-environment \
--web-server-allow-all \
--connection-subnetwork ENVIRONMENT_PSC_SUBNETWORK
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is
located.
ENVIRONMENT_PSC_SUBNETWORK with the URI of the subnetwork for
Private Service Connect endpoints.
You can use
your environment's subnetwork .
As an alternative, you can specify a different subnetwork. Doing so
gives you more control over the CIDR range from which the IP address for
the PSC endpoint are selected. This range can be shared by multiple
Cloud Composer environments. Each environment requires
one IP address.
Example:
gcloud composer environments create example-environment \
--location us-central1 \
--image-version composer-2.16.10-airflow-2.10.5 \
--enable-private-environment \
--web-server-allow-all \
--connection-subnetwork "projects/example-project/regions/us-central1/subnetworks/default"
API
Construct
an environments.create API request. In
the Environment resource, specify the
configuration parameters for the Private Service Connect connection.
// POST https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/environments
{
"name" : " ENVIRONMENT_NAME " ,
"config" : {
"softwareConfig" : {
"imageVersion" : "composer-2.16.10-airflow-2.10.5"
},
"nodeConfig" : {
"network" : " ENVIRONMENT_NETWORK " ,
"subnetwork" : " ENVIRONMENT_SUBNETWORK "
},
"privateEnvironmentConfig" : {
"enablePrivateEnvironment" : true ,
"privateClusterConfig" : {
"enablePrivateEndpoint" : false
},
"cloudComposerConnectionSubnetwork" : " ENVIRONMENT_PSC_SUBNETWORK "
}
"webServerNetworkAccessControl" : {
"allowedIpRanges" : [
{
"value" : "0.0.0.0/0" ,
"description" : "Allows access from all IPv4 addresses"
},
{
"value" : "::0/0" ,
"description" : "Allows access from all IPv6 addresses"
}
]
}
}
}
Replace:
ENVIRONMENT_NAME with the name of the environment.
ENVIRONMENT_NETWORK with the URI of your environment's network.
ENVIRONMENT_SUBNETWORK with the URI of your environment's subnetwork.
ENVIRONMENT_PSC_SUBNETWORK with the URI of the subnetwork for PSC
endpoints.
You can use
your environment's subnetwork .
As an alternative, you can specify a different subnetwork. Doing so
gives you more control over the CIDR range from which the IP address for
the PSC endpoint is selected. This range can be shared by multiple
Cloud Composer environments. Each environment requires one IP
address.
Example:
// POST https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/environments
{
"name" : "example-environment" ,
"config" : {
"softwareConfig" : {
"imageVersion" : "composer-2.16.10-airflow-2.10.5"
},
"nodeConfig" : {
"network" : "projects/example-project/global/networks/default" ,
"subnetwork" : "projects/example-project/regions/us-central1/subnetworks/default"
},
"privateEnvironmentConfig" : {
"enablePrivateEnvironment" : true ,
"privateClusterConfig" : {
"enablePrivateEndpoint" : false
},
"cloudComposerConnectionSubnetwork" : "projects/example-project/regions/us-central1/subnetworks/default"
}
"webServerNetworkAccessControl" : {
"allowedIpRanges" : [
{
"value" : "0.0.0.0/0" ,
"description" : "Allows access from all IPv4 addresses"
},
{
"value" : "::0/0" ,
"description" : "Allows access from all IPv6 addresses"
}
]
}
}
}
Terraform
When you create an environment, the cloud_composer_connection_subnetwork
field in the private_environment_config block enables
Private Service Connect.
resource "google_composer_environment" "example_environment" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
software_config {
image_version = "composer-2.16.10-airflow-2.10.5"
}
node_config {
network = " ENVIRONMENT_NETWORK "
subnetwork = " ENVIRONMENT_SUBNETWORK "
}
private_environment_config {
// Other private IP environment parameters
cloud_composer_connection_subnetwork = " ENVIRONMENT_PSC_SUBNETWORK "
}
web_server_network_access_control {
allowed_ip_range {
value = "0.0.0.0/0"
description = "Allows access from all IPv4 addresses"
}
allowed_ip_range {
value = "::0/0"
description = "Allows access from all IPv6 addresses"
}
}
}
}
Replace:
ENVIRONMENT_NAME with the name of the environment.
ENVIRONMENT_NETWORK with the URI of your environment's network.
ENVIRONMENT_SUBNETWORK with the URI of your environment's subnetwork.
ENVIRONMENT_PSC_SUBNETWORK with the URI of the subnetwork for PSC
endpoints.
You can use
your environment's subnetwork .
As an alternative, you can specify a different subnetwork. Doing so
gives you more control over the CIDR range from which the IP address for
the PSC endpoint is selected. This range can be shared by multiple
Cloud Composer environments. Each environment requires one IP
address.
Example:
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
environment_size = "ENVIRONMENT_SIZE_SMALL"
software_config {
image_version = "composer-2.16.10-airflow-2.10.5"
}
node_config {
network = "projects/example-project/global/networks/default"
subnetwork = "projects/example-project/regions/us-central1/subnetworks/default"
}
private_environment_config {
// Other private IP environment parameters
enable_private_endpoint = "true"
cloud_composer_connection_subnetwork = "projects/example-project/regions/us-central1/subnetworks/default"
}
web_server_network_access_control {
allowed_ip_range {
value = "0.0.0.0/0"
description = "Allows access from all IPv4 addresses"
}
allowed_ip_range {
value = "::0/0"
description = "Allows access from all IPv6 addresses"
}
}
}
}
What's next
Configuring Private IP environments
Creating environments
Environment architecture
About Private IP environments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
