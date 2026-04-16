---
title: "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/composer/docs/composer-1/security-practices
source_metadata:
  url: https://docs.cloud.google.com/composer/docs/composer-1/enable-ip-masquerade-agent
  title: "Enable the IP Masquerade agent in Cloud Composer environments \_|\_ Google\
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
Composer 1 Guides
Send feedback
Enable the IP Masquerade agent in Cloud Composer environments
Stay organized with collections
Save and categorize content based on your preferences.
Cloud Composer 3 | Cloud Composer 2 | Cloud Composer 1
This page describes how to enable the IP Masquerade agent for your environment.
Important: Consider using the IP Masquerade agent if your project is impacted
by the shortage of IP addresses. By enabling the IP Masquerade agent, you can
use your environment's cluster IP addresses to communicate with external
services.
About the IP Masquerade agent in Cloud Composer
Cloud Composer supports
the IP Masquerade agent for your environments.
IP masquerading is a form of network address translation (NAT) used to
perform many-to-one IP address translations. This allows multiple clients to
access a destination from a single IP address.
Cloud Composer runs your workloads on GKE. For
correct function, it requires IP ranges for nodes (VMs) as well as
GKE Pods and Services. When Airflow DAGs and tasks
communicate with other services, they use Pod IPs and these Pod IP ranges need
to be routable to and from any destinations that the tasks interact with.
With the IP Masquerade agent, you have the option to translate Pod IP
addresses to node IP addresses, so that destinations and services targeted
from Airflow DAGs and tasks only receive packets from node IP addresses
instead of Pod IP addresses. This is useful in environments that expect to
only receive packets from node IP addresses or where Pod IP ranges are not
routable outside of the cluster.
In addition, you can use the IP Masquerade agent to save network ranges in
your networking configuration. For example, you can use a separate network
range for Pods inside your environment's cluster and masquerade this traffic
as coming from the node IP address range. In this way, you save IP address
space in one range by using IP addresses from a different range for Pods in
your environment's cluster.
For example:
You use the 10.0.0.0/8 range for VMs and only this range is allowed by
your firewall rules.
To save network ranges, you use a different range (for example,
192.168.0.0/16 ) for Pods in your environment's cluster.
To be able to connect to any service from a Pod (Airflow worker), IP
masquerading is needed; otherwise the service receives traffic from
192.168.0.0/16 and drops it because of a firewall rule. With the IP
Masquerade agent enabled and configured, the service gets requests from
10.0.0.0/8 , which are accepted.
Before you begin
It is not possible to enable the IP Masquerade agent in Google Cloud console.
Enable the IP Masquerade agent for an existing environment
It is not possible to enable the IP Masquerade agent for an existing
environment.
Enable the IP Masquerade agent when creating an environment
You can enable the IP Masquerade agent when you create an environment.
For more information about creating Cloud Composer environments,
see Create environment .
Console
It is not possible to enable the IP Masquerade agent in Google Cloud console.
gcloud
When you create an environment, the --enable-ip-masq-agent argument
enables the IP Masqerade agent.
You must also enable IP alias with the --enable-ip-alias argument.
gcloud composer environments create ENVIRONMENT_NAME \
--location LOCATION \
--image-version composer-1.20.12-airflow-1.10.15 \
--enable-ip-alias \
--enable-ip-masq-agent
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Example:
gcloud composer environments create example-environment \
--location us-central1 \
--image-version composer-1.20.12-airflow-1.10.15 \
--enable-ip-alias \
--enable-ip-masq-agent
API
Construct an environments.create API request.
Specify the configuration in the Environment
resource.
{
"name" : "projects/ PROJECT_ID /locations/ LOCATION /environments/ ENVIRONMENT_NAME " ,
"config" : {
"softwareConfig" : {
"imageVersion" : "composer-1.20.12-airflow-1.10.15"
},
"nodeConfig" : {
"ipAllocationPolicy" : {
"useIpAliases" : true ,
},
"enableIpMasqAgent" : true
}
}
}
Replace:
PROJECT_ID with the Project ID .
LOCATION with the region where the environment is located.
ENVIRONMENT_NAME with the environment name.
Example:
// POST https://composer.googleapis.com/v1/{parent=projects/*/locations/*}/environments
{
"name" : "projects/example-project/locations/us-central1/environments/example-environment" ,
"config" : {
"softwareConfig" : {
"imageVersion" : "composer-1.20.12-airflow-1.10.15"
},
"nodeConfig" : {
"ipAllocationPolicy" : {
"useIpAliases" : true ,
},
"enableIpMasqAgent" : true
}
}
}
Terraform
When you create an environment, the enable_ip_masq_agent
field in the node_config block enables the IP Masqerade agent.
You must also enable IP alias with the use_ip_aliases field in the
ip_allocation_policy block.
resource "google_composer_environment" "example_environment" {
provider = google-beta
name = " ENVIRONMENT_NAME "
region = " LOCATION "
config {
software_config {
image_version = "composer-1.20.12-airflow-1.10.15"
}
node_config {
ip_allocation_policy = [{
use_ip_aliases = true
// Other networking configuration
}]
enable_ip_masq_agent = true
}
}
Replace:
ENVIRONMENT_NAME with the name of the environment.
LOCATION with the region where the environment is located.
Example:
resource "google_composer_environment" "example_environment" {
provider = google-beta
name = "example-environment"
region = "us-central1"
config {
software_config {
image_version = "composer-1.20.12-airflow-1.10.15"
}
node_config {
ip_allocation_policy = [{
use_ip_aliases = true
// Other networking configuration
}]
enable_ip_masq_agent = true
}
}
}
Configure the IP Masquerade agent
Caution: Cloud Composer enables
intranode visibility on
GKE clusters. Therefore, non-masquerade destinations must at
least include the cluster's node and Pod IP address range(s).
For more information about using and configuring the IP Masquerade agent in
Cloud Composer 1, see
Configuring an IP masquerade agent in Standard clusters .
What's next
Create an environment
Configure Shared VPC networking
Configure Private IP networking
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
