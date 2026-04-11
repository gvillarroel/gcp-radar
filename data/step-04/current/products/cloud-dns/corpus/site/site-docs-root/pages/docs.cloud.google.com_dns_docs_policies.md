---
title: "Configure DNS server policies \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dns/docs/policies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dns/docs
source_metadata:
  url: https://docs.cloud.google.com/dns/docs/policies
  title: "Configure DNS server policies \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud DNS
Guides
Send feedback
Configure DNS server policies
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to configure DNS server policies and
use them with Virtual Private Cloud (VPC) networks. Before you use this page,
review the
DNS server policies overview.
Before you begin
The Cloud DNS API requires that you create a Google Cloud project and enable the
Cloud DNS API.
If you are creating an application that uses the REST API, you must also
create an OAuth 2.0 client ID.
If you don't already have one, sign up for a Google Account .
Enable the Cloud DNS API in the Google Cloud console . You can
choose an existing Compute Engine or App Engine project, or you can
create a new project.
If you need to make requests to the REST API, you need to create an
OAuth 2.0 ID. See
Setting up OAuth 2.0 .
In the project, note the following information that you need to input in
later steps:
The client ID ( xxxxxx.apps.googleusercontent.com ).
The project ID that you want to use. You can find the ID at the
top of the Overview page in the
Google Cloud console. You can also ask your user to provide the
project name that they want to use in your app.
If you have not run the Google Cloud CLI previously, you must
run the following command to specify the project name and authenticate with
the Google Cloud console:
gcloud auth login
To choose a different project than one you have chosen previously, specify
the --project option at the command line.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
dns.policies.create to create a DNS server policy
dns.policies.delete to delete a DNS server policy
dns.policies.get to fetch the current configuration of a DNS server policy
dns.policies.list to list all DNS server policies associated with a project
dns.policies.update to update a DNS server policy
dns.managedZones.list to list managed zones
Roles
DNS Administrator ( roles/dns.admin )
Create DNS server policies
Each DNS server policy object can define any of the following server policies:
An inbound DNS server policy ,
enabling inbound forwarding
An outbound DNS server policy ,
specifying one or more alternative name servers
Both an inbound and an outbound DNS server policy
A DNS64 server policy
Each VPC network can reference no more than one DNS server
policy. If you need to define both inbound and outbound forwarding for a
VPC network, create one policy that defines both an inbound and
an outbound policy. You can't configure DNS64 with an inbound DNS server policy.
Create an inbound DNS server policy
To create an inbound DNS server policy, follow these instructions. Cloud DNS
creates a set of inbound forwarder IP addresses from the primary IPv4
address ranges of subnets in each VPC network to which the policy
applies. After you create your policy, you can
list the entry points that Cloud DNS
creates.
Important: For important details about how inbound server entry points associate
DNS queries with a VPC network and region, carefully review the
Inbound server
policies section of
the Cloud DNS server policies page.
Console
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click Create policy .
In the Name field, enter the name of the inbound DNS server policy
that you want to create, such as inbound-dns-server-policy .
In the Inbound query forwarding section, select On .
You can optionally enable DNS64 to enable communication between
IPv6-only workloads and IPv4-only destinations. See Configure DNS64
for more information.
You can optionally enable private DNS logs in the Logs section,
however, this can increase your costs in Cloud Logging.
In the Networks list, select VPC networks that you
want to bind to this DNS server policy.
A network can only be bound to a single policy. If you can't select a
network from the list, it's being used by another policy. To see what
network is being used by a policy, view the In use by column on
the DNS server policies page.
Click Create .
gcloud
To create an inbound DNS server policy, run the dns policies
create command:
gcloud dns policies create NAME \
--description=" DESCRIPTION " \
--networks=" VPC_NETWORK_LIST " \
--enable-inbound-forwarding
Replace the following:
NAME : a name for the policy
DESCRIPTION : a description for the policy
VPC_NETWORK_LIST : a comma-delimited list of
VPC networks that the DNS server policy must bind to
Terraform
resource "google_dns_policy" "default" {
name = "example-inbound-policy"
enable_inbound_forwarding = true
networks {
network_url = google_compute_network.default.id
}
}
resource "google_compute_network" "default" {
name = "network"
auto_create_subnetworks = false
}
Create an outbound DNS server policy
To specify a list of alternative name servers for a VPC network,
you can create an outbound DNS server policy.
Important: For important details about how use of
alternative name servers affects VPC network-scoped
response policies, VPC network-scoped private zones, and
Compute Engine internal DNS, carefully review the Outbound server
policies section of
the "DNS server policies overview" page. Also review Alternative name server types,
routing methods, and
addresses and Alternative
name server network
requirements .
Console
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click Create policy .
In the Name field, enter the name of the outbound DNS server policy
that you want to create, such as outbound-dns-server-policy .
In the Inbound query forwarding section, select Off .
You can optionally enable private DNS logs in the Logs section,
however, this can increase your costs in Cloud Logging.
In the Alternative DNS servers (Optional) section, click
Add item , and enter the IP address of your outbound DNS servers in
the IP Address field.
Select the Private forwarding checkbox if you want to force
private routing to outbound DNS servers.
In the Networks list, select VPC networks that you
want to bind to this DNS server policy.
Click Create .
gcloud
To create an outbound DNS server policy, run the dns policies
create command:
gcloud dns policies create NAME \
--description=" DESCRIPTION " \
--networks=" VPC_NETWORK_LIST " \
--alternative-name-servers=" ALTERNATIVE_NAMESERVER_LIST " \
--private-alternative-name-servers=" PRIVATE_ALTERNATIVE_NAMESERVER_LIST "
Replace the following:
NAME : a name for the policy
DESCRIPTION : a description for the policy
VPC_NETWORK_LIST : a comma-delimited list of
VPC networks that query the alternative name
servers
ALTERNATIVE_NAMESERVER_LIST : a comma-delimited list
of IP addresses that you can use as alternative name servers
PRIVATE_ALTERNATIVE_NAMESERVER_LIST : a
comma-delimited list of IP addresses that you can use as alternative
name servers, accessed by using private routing
Terraform
resource "google_dns_policy" "default" {
name = "example-outbound-policy"
alternative_name_server_config {
target_name_servers {
ipv4_address = "172.16.1.10"
forwarding_path = "private"
}
target_name_servers {
ipv4_address = "172.16.1.20"
}
}
networks {
network_url = google_compute_network.default.id
}
}
resource "google_compute_network" "default" {
name = "network"
auto_create_subnetworks = false
}
Create a DNS server policy for both inbound and outbound forwarding
Console
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click Create policy .
In the Name field, enter the name of the inbound DNS server policy
that you want to create, such as inbound-outbound-dns-server-policy .
In the Inbound query forwarding section, select On .
You can optionally enable private DNS logs in the Logs section,
however, this can increase your costs in Cloud Logging.
In the Alternative DNS servers (Optional) section, click
Add item , and enter the IP address of your outbound DNS servers in
the IP Address field.
Select Private forwarding if you want to force private routing to
outbound DNS servers.
In the Networks list, select VPC networks that you
want to bind to this DNS server policy.
Click Create .
gcloud
To create a DNS server policy for both inbound and outbound forwarding,
run the dns policies create
command:
gcloud dns policies create NAME \
--description=" DESCRIPTION " \
--networks=" VPC_NETWORK_LIST " \
--alternative-name-servers=" ALTERNATIVE_NAMESERVER_LIST " \
--private-alternative-name-servers=" PRIVATE_ALTERNATIVE_NAMESERVER_LIST " \
--enable-inbound-forwarding
Replace the following:
NAME : a name for the policy
DESCRIPTION : a description for the policy
VPC_NETWORK_LIST : a comma-delimited list of
VPC networks where inbound forwarding addresses must
be created and that must query the alternative name servers
ALTERNATIVE_NAMESERVER_LIST : a comma-delimited list
of IP addresses that you can use as alternative name servers
PRIVATE_ALTERNATIVE_NAMESERVER_LIST : a
comma-delimited list of IP addresses that you can use as alternative
name servers, accessed by using private routing.
Terraform
resource "google_dns_policy" "example_policy" {
name = "example-policy"
enable_inbound_forwarding = true
enable_logging = true
alternative_name_server_config {
target_name_servers {
ipv4_address = "172.16.1.10"
forwarding_path = "private"
}
target_name_servers {
ipv4_address = "172.16.1.20"
}
}
networks {
network_url = google_compute_network.network_1.id
}
networks {
network_url = google_compute_network.network_2.id
}
}
resource "google_compute_network" "network_1" {
name = "network-1"
auto_create_subnetworks = false
}
resource "google_compute_network" "network_2" {
name = "network-2"
auto_create_subnetworks = false
}
List inbound forwarder entry points
When an inbound DNS server policy applies to a VPC network,
Cloud DNS creates a set of regional internal IP addresses that serve
as destinations to which your on-premises systems or name resolvers can send
DNS queries. These addresses serve as entry points to the name resolution
order of your VPC network.
Note: If you disable and then re-enable inbound forwarding or if you delete and
recreate a VPC network, the entry point IP addresses change.
Google Cloud firewall rules do not apply to the regional internal
addresses that act as entry points for inbound forwarders. Cloud DNS
accepts TCP and UDP traffic on port 53 automatically.
Each inbound forwarder accepts and receives queries from Cloud VPN
tunnels or Cloud Interconnect attachments (VLANs) in the same region
as the regional internal IP address. VM instances can access the inbound
forwarder through any of the internal IP addresses in the same
VPC network. To access inbound forwarding, either the network
interface must have an external IP address or a subnet of the NIC must have
Private Google Access enabled.
Console
View the list of inbound forwarder entry points for a policy:
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click the name of the policy.
On the Policy details page, click the In use by tab.
Each network bound to the policy lists the Inbound query forwarding IP
addresses.
gcloud
To list the set of regional internal IP addresses that serve as entry points
for all inbound forwarding policies, run the compute addresses
list command:
gcloud compute addresses list \
--filter='purpose = "DNS_RESOLVER"' \
--format='csv(address, region, subnetwork)'
Update DNS policies
The following sections provide information about changing VPC
networks and enabling or disabling inbound forwarding.
Change VPC networks
The following list describes what happens when you change the list of
VPC networks to which a DNS policy applies:
If the policy specifies an inbound policy, entry points for inbound forwarders
are created in VPC networks as needed.
If the policy specifies an outbound policy, the name resolution
order of each VPC network is updated to include the specified
alternative name servers.
Console
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click the name of the policy you want to change.
Click edit Edit policy .
In the Networks list, select or clear the checkboxes next to the
VPC networks.
Click Save .
gcloud
To modify the list of networks to which a DNS server policy applies, run the
dns policies update command:
gcloud dns policies update NAME \
--networks=" VPC_NETWORK_LIST "
Replace the following:
NAME : a name for the policy
VPC_NETWORK_LIST : a comma-delimited list of
VPC networks to which the policy applies; the list of
VPC networks that you specify replaces the previous list
Enable or disable inbound forwarding
You can enable inbound forwarding for a DNS server policy that defines only an
outbound policy (alternative name server). You can also disable inbound
forwarding for an existing DNS policy.
Console
Enable inbound forwarding for a DNS server policy:
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click the name of the policy you want to change.
Click edit Edit policy .
In the Inbound query forwarding section, select On .
Click Save .
Disable inbound forwarding for a DNS server policy:
Open the Cloud DNS server policies page.
Click the name of the policy you want to change.
Click edit Edit policy .
In the Inbound query forwarding section, select Off .
Click Save .
gcloud
To enable inbound forwarding for a DNS server policy, run the dns policies
update command:
gcloud dns policies update NAME \
--enable-inbound-forwarding
To disable inbound forwarding for a DNS server policy, specify the --no-enable-inbound-forwarding flag:
gcloud dns policies update NAME \
--no-enable-inbound-forwarding
Replace NAME with the name of the policy.
List DNS policies
Console
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Any DNS server policy created in your project is listed.
gcloud
To list DNS server policies in your project, run the dns policies
list command:
gcloud dns policies list
Delete a DNS policy
Console
To delete a DNS server policy, it must not be bound to any network.
Update your policy to remove all networks before
deleting the policy.
In the Google Cloud console, open the Cloud DNS server policies page.
Go to Cloud DNS server policies
Click delete Delete by the name
of the policy you want to delete.
gcloud
To delete a DNS server policy, run the dns policies
delete command:
gcloud dns policies delete NAME
Replace NAME with the name of the policy to delete.
What's next
To find solutions for common issues that you might encounter when using
Cloud DNS, see Troubleshooting .
To get an overview of Cloud DNS, see
Cloud DNS overview .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
