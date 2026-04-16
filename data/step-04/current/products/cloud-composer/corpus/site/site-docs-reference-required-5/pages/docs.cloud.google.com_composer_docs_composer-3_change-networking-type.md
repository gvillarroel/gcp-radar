---
title: "Change environment networking type (Private or Public IP) \_|\_ Cloud Composer\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-3/change-networking-type
knowledge_key: corpus
source_id: site-docs-reference-required-5
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/latest/use-monitoring-dashboard
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-3/change-networking-type
  title: "Change environment networking type (Private or Public IP) \_|\_ Cloud Composer\
    \ \_|\_ Google Cloud Documentation"
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
Change environment networking type (Private or Public IP)
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page explains the difference between Private IP and Public IP environment
networking types in Cloud Composer 3 and provides instructions for switching
the networking type of your environment.
If you want to disable or enable internet access only when installing PyPI packages, see
Configure internet access when installing PyPI packages .
If you want to enable access to your VPC network from your environment,
see Connect an environment to a VPC network .
About environment networking types
Cloud Composer 3 uses two environment networking types:
Public IP networking :
Airflow components of the environment can access the
internet. This is the default networking type.
Airflow components in Public IP environments establish outbound
connections from automatically allocated public IP addresses and ports.
If you want your Public IP environments to use predetermined IP
addresses and ports, you can do so through
connecting a VPC network to your environment
and switching it to Private IP .
In this case, Cloud Composer routes all traffic except
traffic to Google services through this network.
Private IP networking :
Private IP networking is a more secure option compared to Public IP
networking.
Airflow components of the environment don't have access to
the internet. For environments
attached to a VPC network , the network configuration
controls internet access.
Private IP environments configure Private Google Access through the
private.googleapis.com range, which enables access to
Google APIs, services, and domains supported by this range.
For more information and the list of services and domains available
through private.googleapis.com , see
Network configuration
in the Virtual Private Cloud documentation.
Private IP environments with VPC Service Controls configure
Private Google Access through the restricted.googleapis.com
range, which enables access to Google APIs, services, and domains
supported by this range.
For more information and the list of services and domains available
through restricted.googleapis.com , see
Network configuration
in the Virtual Private Cloud documentation.
If a Private IP environment is
attached to a custom VPC network , then all internal
traffic is routed to the VPC network, except the traffic to Google
APIs, services, and domains that are available to Private IP
environments through Private Google Access.
Cloud Composer 2 networking compared to Cloud Composer 3
In Cloud Composer 3, Private IP environments require no configuration.
The following Cloud Composer 2 networking features are no longer relevant in
Cloud Composer 3:
Configuring Private IP networking . You don't
need to specify IP ranges, networks, or configure connectivity and firewall
rules.
Configuring Private Service Connect .
You don't need to set ranges for Private Service Connect
in Cloud Composer 3.
Note: Custom VPC network attachments in
Cloud Composer 3 are based on Private Service Connect.
This implementation is not related to how
Private Service Connect is used in Cloud Composer 2 (for
connectivity between the environment's cluster and the resources located in
the tenant project). In Cloud Composer 3, network attachments are used
differently, you don't need to reflect your Cloud Composer 2 networking
setup in them.
Using privately used public IP ranges . This feature provided an
option to extend the available IP ranges, which are not required in
Cloud Composer 3.
Using the IP Masquerade agent . You don't need to configure
cluster connectivity in Cloud Composer 3.
Configuring authorized networks . It is not
possible to access the environment's cluster in Cloud Composer 3.
The following DNS configuration isn't supported in Cloud Composer 3:
Cloud Composer 3 doesn't support a user-defined
.internal DNS zone . If you create a DNS zone for
.internal , it won't be possible to reach that zone.
Change environment networking type
Console
In the Google Cloud console, go to the Environments page.
Go to Environments
In the list of environments, click the name of your environment.
The Environment details page opens.
Go to the Environment configuration tab.
In the Networking configuration section, find the
Networking type item and click Edit .
In the Networking type dialog, select:
Public IP environment (default) for Public IP networking.
Private IP environment for Private IP networking.
Click Save .
gcloud
The Following Google Cloud CLI arguments change the environment's
networking type:
--enable-private-environment : changes to Private IP networking.
--disable-private-environment : changes to Public IP networking (default).
Change to Private IP networking:
gcloud beta composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--enable-private-environment
Change to Public IP networking:
gcloud beta composer environments update ENVIRONMENT_NAME \
--location LOCATION \
--disable-private-environment
Replace the following:
ENVIRONMENT_NAME : the name of the environment.
LOCATION : the region where the environment is located.
Example (Private IP):
gcloud beta composer environments update example-environment \
--location us-central1 \
--enable-private-environment
Example (Public IP):
gcloud beta composer environments update example-environment \
--location us-central1 \
--disable-private-environment
API
Create an environments.patch API request.
In this request:
In the updateMask parameter, specify
the config.private_environment_config.enable_private_environment
mask.
In the request body, in the enablePrivateEnvironment field:
Specify true to change to Private IP networking.
Specify false to change to Public IP networking (default).
Example (Private IP):
// PATCH https://composer.googleapis.com/v1beta1/projects/example-project/
// locations/us-central1/environments/example-environment?updateMask=
// config.private_environment_config.enable_private_environment
"config" : {
"privateEnvironmentConfig" : {
"enablePrivateEnvironment" : true
}
}
Terraform
The enable_private_environment field in the config block specifies the
environment's networking type:
true : Private IP networking.
false or omitted: Public IP networking (default).
resource "google_composer_environment" "example" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
enable_private_environment = PRIVATE_IP_STATUS
}
}
Replace the following:
ENVIRONMENT_NAME : the name of your environment.
LOCATION : the region where the environment is located.
PRIVATE_IP_STATUS : true for Private IP, false for Public IP
Example (Private IP):
resource "google_composer_environment" "example" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
enable_private_environment = true
... other configuration parameters
}
}
Configure proxy server variables
Important: Routing with proxy variables is done on a best-effort basis.
There's no guarantee that every request goes through the proxy . Instead, we
recommend to route traffic by
attaching a VPC network to your environment
and configuring traffic routing rules in this network.
You can set http_proxy and https_proxy environment variables
in your environment. These standard Linux variables are used by web clients
that run in containers of your environment's cluster to route traffic through
the specified proxies.
The NO_PROXY variable by default is set to a list of Google domains,
the IP address of the environment's cluster Compute Engine metadata
server, and localhost so that they are excluded from proxying:
.google.com,.googleapis.com,metadata.google.internal,169.254.169.254,localhost
This configuration makes it possible to create an environment with set
http_proxy and https_proxy environment variables in cases when the proxy
isn't configured to handle traffic to Google services.
What's next
Configure VPC Service Controls
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
