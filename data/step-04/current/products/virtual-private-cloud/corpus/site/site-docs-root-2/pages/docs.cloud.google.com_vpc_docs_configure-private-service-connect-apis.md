---
title: "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/configure-private-service-connect-apis
  title: "Access Google APIs through endpoints \_|\_ Virtual Private Cloud \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Virtual Private Cloud
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access Google APIs through endpoints
This document explains how to use Private Service Connect
endpoints to connect to Google APIs. Instead of sending API requests to the
publicly available IP addresses for service endpoints such as
storage.googleapis.com , you can send the requests to the internal IP address
of an endpoint.
You can also use Private Service Connect to access services in
another VPC network
and to publish services .
Roles
The following IAM roles provide
the permissions needed to perform the tasks in this guide.
Task
Roles
Create an endpoint
All of the following roles:
Compute
Network Admin ( roles/compute.networkAdmin ),
Service
Directory Editor ( roles/servicedirectory.editor ), and
DNS Administrator
( roles/dns.admin )
Configure Private Google Access (optional)
Compute
Network Admin ( roles/compute.networkAdmin )
Before you begin
Read About connecting to Google APIs by using
endpoints
for more information, including DNS configuration and
limitations.
Private Service Connect does not automatically enable any API.
You must separately enable the Google APIs you
need to use from the APIs & services page in
the Google Cloud console.
You must enable
the Compute Engine API in your project.
You must enable
the Service Directory
API in your project.
You must enable the
Cloud DNS API in your project.
You must choose an IP address to use for the endpoint. For information about
what IP addresses you can use, see
IP address requirements .
Egress firewall rules must permit traffic to the
endpoint. The default firewall
configuration for a VPC network permits this traffic, because it
contains an implied allow egress rule. Verify that you have not created a higher
priority egress rule that blocks the traffic.
Virtual machine (VM) instances without an external IP address assigned must
use a subnet with Private Google Access
enabled to access Google APIs and services using
an endpoint.
A VM with an external IP address can access Google APIs and services using
endpoints even if
Private Google Access is disabled for its subnet. Connectivity to the
endpoint stays within Google's network.
If your VPC network does not contain any
endpoints, check if a Cloud DNS
private zone exists for p.googleapis.com . If the zone exists, delete it before
you create the endpoint. If you don't
delete it, creation of the Service Directory DNS zone used for
Private Service Connect fails. For more information,
see troubleshooting .
Endpoints are not accessible from
peered VPC networks.
Enable Private Google Access for a subnet
VMs without an external IP address assigned must be connected to a subnet with
Private Google Access enabled to access Google APIs and services using
an endpoint.
If the VM has more than one interface, connect the interface that is configured
with a default route (usually nic0 ).
The source IP address of packets sent from the VM must match the VM interface's
primary internal IPv4 address or an internal IPv4 address from an alias IP range.
To enable Private Google Access on a subnet, follow these steps.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click the name of the network that contains the subnet for which you need
to enable Private Google Access.
Click the name of the subnet. The Subnet details page is displayed.
Click Edit .
In the Private Google Access section, select On .
Click Save .
gcloud
Determine the name and region of the subnet. To list the subnets for a
particular network, use the following command:
gcloud compute networks subnets list --filter= NETWORK_NAME
Run the following command to enable Private Google Access:
gcloud compute networks subnets update SUBNET_NAME \
--region= REGION \
--enable-private-ip-google-access
Verify that Private Google Access is enabled by running this
command:
gcloud compute networks subnets describe SUBNET_NAME \
--region= REGION \
--format="get(privateIpGoogleAccess)"
Replace the following:
SUBNET_NAME : the name of the subnet
REGION : the region for the subnet
NETWORK_NAME : the name of the VPC
network that contains the subnet
Terraform
You can use the Terraform
resource
to enable Private Google Access on a subnet.
resource "google_compute_network" "network" {
project = var.project # Replace this with your project ID in quotes
name = "tf-test"
auto_create_subnetworks = false
}
resource "google_compute_subnetwork" "vpc_subnetwork" {
project = google_compute_network.network.project
name = "test-subnetwork"
ip_cidr_range = "10.2.0.0/16"
region = "us-central1"
network = google_compute_network.network.id
private_ip_google_access = true
}
To learn how to apply or remove a Terraform configuration, see
Basic Terraform commands .
Create an endpoint
After you have chosen an IP address that
meets the requirements ,
you can create an endpoint.
An endpoint connects to Google APIs and
services using a global forwarding rule. Each forwarding rule counts toward the
per VPC network quota for
Private Service Connect.
You can't update an endpoint for Google APIs and services after it is created.
If you need to update an endpoint for Google APIs and services, delete the
endpoint, and then create a new one.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions for the gcloud CLI and the API
compute.globalForwardingRules.pscCreate
compute.globalForwardingRules.create
compute.networks.use
compute.globalAddresses.use
servicedirectory.namespaces.create
servicedirectory.namespaces.associatePrivateZone
dns.managedZones.create
Permissions for the Google Cloud console
compute.forwardingRules.list
compute.globalForwardingRules.list
compute.networks.list
compute.backendBuckets.list
compute.backendServices.list
compute.instanceGroupManagers.list
compute.targetPools.list
compute.targetSslProxies.list
compute.targetTcpProxies.list
compute.urlMaps.list
Roles
See Roles for role information.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
Click Connect endpoint .
For Target , select the
target API bundle
that you want to use:
All Google APIs
VPC-SC
For Endpoint name , enter a name for the endpoint.
Select a Network for the endpoint.
Select an IP Address for the endpoint.
The IP address must
meet these requirements .
If you need a new IP address, you can create one:
Click Create IP address .
Enter a Name and Description for the IP address.
Enter the IP address you want to use and click Save .
If a Service Directory region is not already configured for this
VPC network, select the region you want to use.
All endpoints that are used to access Google APIs and services in a given
VPC network use the same Service Directory
region .
If a Service Directory namespace is not already configured for this
VPC network, configure the namespace you want to use:
To use an automatically assigned namespace, click the Namespace
drop-down menu and select the automatically assigned namespace.
To select an existing namespace that is used in another network, click
the Namespace drop-down menu and select a namespace from the list. The
list displays all namespaces in the project. You must select a namespace
that is used only for endpoints that
are used to access Google APIs.
To create a new namespace, click the Namespace drop-down menu and
click Create namespace . Enter the namespace and click Create .
All endpoints that you use to access Google APIs and services in a given
VPC network use the same Service Directory
namespace .
Click Add endpoint .
gcloud
Reserve a global internal IP address to assign to the endpoint.
gcloud compute addresses create ADDRESS_NAME \
--global \
--purpose=PRIVATE_SERVICE_CONNECT \
--addresses= ENDPOINT_IP \
--network= NETWORK_NAME
Replace the following:
ADDRESS_NAME : the name to assign to the
reserved IP address.
ENDPOINT_IP : the IP address to reserve for the
endpoint.
The IP address must
meet these requirements .
NETWORK_NAME : the name of the VPC
network for the endpoint.
Create a forwarding rule to connect the endpoint to Google APIs and
services.
gcloud compute forwarding-rules create ENDPOINT_NAME \
--global \
--network= NETWORK_NAME \
--address= ADDRESS_NAME \
--target-google-apis-bundle= API_BUNDLE \
[ --service-directory-registration= REGION_NAMESPACE_URI ]
Replace the following:
ENDPOINT_NAME : the name to assign to the endpoint.
The name must be a string of 1-20 characters,
containing only lower-case letters and numbers. The name must start with
a letter.
NETWORK_NAME : the name of the VPC
network for the endpoint.
ADDRESS_NAME : the name of the reserved address on
the associated network.
API_BUNDLE : the bundle of APIs to make
available using the endpoint. See the list of supported
APIs .
Use all-apis to give access to all supported APIs.
Use vpc-sc to restrict access to Google APIs that support
VPC Service Controls.
REGION_NAMESPACE_URI : the URI of the
Service Directory region or namespace
that you want to use. This URI must reference the same project that you
are creating the endpoint in.
You can define a region only with
projects/ PROJECT_NAME /locations/ REGION .
You can define a region and namespace with
projects/ PROJECT_NAME /locations/ REGION /namespaces/ NAMESPACE .
If you you omit --service-directory-registration completely, or set
a region without a namespace, the following occurs:
If a region or namespace is already configured for this
VPC network, those defaults are used.
If a region is not configured, the region is set to us-central1 .
If a namespace is not configured, a system-generated namespace is
assigned.
API
Reserve a global internal IP address to assign to the endpoint.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/addresses
{
"name": ADDRESS_NAME ,
"address": ENDPOINT_IP ,
"addressType": "INTERNAL",
"purpose": PRIVATE_SERVICE_CONNECT,
"network": NETWORK_URL
}
Replace the following:
PROJECT_ID : your project ID.
ADDRESS_NAME : the name to assign to the
reserved IP address.
ENDPOINT_IP : the IP address to reserve for the
endpoint.
The IP address must
meet these requirements .
NETWORK_URL : the VPC network for the
endpoint. Use the network.list
method or gcloud
compute networks list --uri to find the URLs of your networks.
Create a forwarding rule to connect the endpoint to Google APIs and
services.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/forwardingRules
{
"IPAddress": ADDRESS_URL ,
"network": NETWORK_URL ,
"name": ENDPOINT_NAME ,
"target": API_BUNDLE ,
"serviceDirectoryRegistrations : [
{
"service_directory_region": REGION ,
"namespace": " NAMESPACE "
}
],
}
Replace the following:
PROJECT_ID : your project ID.
ENDPOINT_NAME : the name to assign to the endpoint.
The name must be a string of 1-20 characters, containing only lower-case
letters and numbers. The name must start with a letter.
NETWORK_URL : the VPC network for the
endpoint. Use the network.list
method or gcloud
compute networks list --uri to find the URLs of your networks.
ADDRESS_URL : the URL of the reserved address on the
associated network. Use the globalAddresses.list
method or gcloud
compute addresses list --uri to find the URLs of your reserved
addresses.
API_BUNDLE : the bundle of APIs to make available
using the endpoint. See the
list of supported APIs .
Use all-apis to give access to all supported APIs.
Use vpc-sc to restrict access to Google APIs that support
VPC Service Controls.
REGION : the Service Directory
region you want to use. For example, us-central1 .
If you omit REGION , and a region is already configured
for this VPC network, that region is used. If a region is
not configured, the region is set to us-central1 .
NAMESPACE : the name of the
Service Directory namespace
that you want to use. If you omit NAMESPACE , and a
namespace is already configured for this VPC network, that
namespace is used. If a namespace is not configured, a system-generated
namespace is assigned.
Terraform
You can use the following Terraform
resources to create an endpoint:
Global address
Global forwarding rule
resource "google_compute_global_address" "default" {
project = google_compute_network.network.project
name = "global-psconnect-ip"
address_type = "INTERNAL"
purpose = "PRIVATE_SERVICE_CONNECT"
network = google_compute_network.network.id
address = "10.3.0.5"
}
resource "google_compute_global_forwarding_rule" "default" {
project = google_compute_network.network.project
name = "globalrule"
target = "all-apis"
network = google_compute_network.network.id
ip_address = google_compute_global_address.default.id
load_balancing_scheme = ""
}
Verify that the endpoint is working
Create a VM instance in the VPC network where
Private Service Connect is configured. Run the following
command on the VM to verify that the Private Service Connect
endpoint is working. Endpoints
don't respond to ping (ICMP) requests.
curl -v ENDPOINT_IP /generate_204
Replace ENDPOINT_IP with the IP address of the
endpoint.
If the endpoint is working, you see an HTTP 204 response code.
List endpoints
You can list all configured endpoints.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions for the gcloud CLI and the API
compute.globalForwardingRules.list
Permissions for the Google Cloud console
compute.forwardingRules.list
compute.globalForwardingRules.list
compute.networks.list
compute.backendBuckets.list
compute.backendServices.list
compute.instanceGroupManagers.list
compute.targetPools.list
compute.targetSslProxies.list
compute.targetTcpProxies.list
compute.urlMaps.list
Roles
See Roles for role information.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
The endpoints are displayed.
gcloud
gcloud compute forwarding-rules list \
--filter target="(all-apis OR vpc-sc)" --global
The output is similar to the following:
NAME REGION IP_ADDRESS IP_PROTOCOL TARGET
RULE IP TCP all-apis
Get information about an endpoint
You can view all the configuration details of an
endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions for the gcloud CLI and the API
compute.globalForwardingRules.get
Permissions for the Google Cloud console
compute.forwardingRules.list
compute.globalForwardingRules.list
compute.networks.list
compute.backendBuckets.list
compute.backendServices.list
compute.instanceGroupManagers.list
compute.targetPools.list
compute.targetSslProxies.list
compute.targetTcpProxies.list
compute.urlMaps.list
Roles
See Roles for role information.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
The endpoints are
displayed.
Click the endpoint that you
want to view details for.
gcloud
gcloud compute forwarding-rules describe \
ENDPOINT_NAME --global
Label an endpoint
You can manage labels for endpoints. See
labeling resources for more information.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions
compute.globalForwardingRules.pscSetLabels
compute.globalForwardingRules.setLabels
Roles
See Roles for role information.
Delete an endpoint
You can delete an endpoint.
Permissions required for this task
To perform this task, you must have been granted the following permissions
or one of the following IAM roles.
Permissions for the gcloud CLI and the API
compute.globalForwardingRules.pscDelete
compute.globalForwardingRules.delete
servicedirectory.namespaces.delete
dns.managedZones.delete
Permissions for the Google Cloud console
compute.forwardingRules.list
compute.globalForwardingRules.list
compute.networks.list
compute.backendBuckets.list
compute.backendServices.list
compute.instanceGroupManagers.list
compute.targetPools.list
compute.targetSslProxies.list
compute.targetTcpProxies.list
compute.urlMaps.list
Roles
See Roles for role information.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
Select the endpoint that you want to
delete, and click Delete .
gcloud
gcloud compute forwarding-rules delete \
ENDPOINT_NAME --global
Replace ENDPOINT_NAME with the name of the endpoint that you want
to delete.
Use an endpoint
To use an endpoint, you send requests to a
DNS hostname that resolves to the IP address of the endpoint.
You can use the automatically created p.googleapis.com DNS names if you
can configure your clients to use a custom endpoint and if p.googleapis.com
DNS records are created for the APIs and services that you want to use. For more
information, see Use p.googleapis.com DNS names .
For example, if your endpoint name is xyz , DNS records are created for
storage-xyz.p.googleapis.com , compute-xyz.p.googleapis.com , and other
commonly used APIs in the API bundle.
You can create DNS records by using the default DNS names if you are using a
client that hasn't been configured to use a custom endpoint, or if a
p.googleapis.com DNS record does not exist for the service that you want to
use. For more information, see
Create DNS records by using default DNS names .
For example, create DNS records for storage.googleapis.com ,
compute.googleapis.com , or *.gke.goog .
Note: If you're developing a custom library that can use
endpoints, you must set the Host header
and SNI to a valid hostname for the service you want to send requests to.
Valid host names can be either the service-specific default domain name
( storage.googleapis.com ) or the service's
SERVICE - ENDPOINT .p.googleapis.com DNS name,
if available. For
SERVICE - ENDPOINT .p.googleapis.com names, the
SERVICE
part of the name must match the service, though any value for
ENDPOINT can be used.
Use p.googleapis.com DNS names
When you create an endpoint,
Service Directory creates DNS records for commonly used APIs and
services that are available using the endpoint. DNS records are created only for
APIs and services that have default DNS names that end with googleapis.com ,
and only for a subset of those APIs and services.
The DNS records are created in a p.googleapis.com private zone. The records
point to the endpoint IP address, and use this format:
SERVICE - ENDPOINT .p.googleapis.com
For example, if your endpoint name is xyz , DNS records are created for
storage-xyz.p.googleapis.com , compute-xyz.p.googleapis.com , and other
supported APIs.
Clients that can be configured to use a custom endpoint can use the
p.googleapis.com DNS names to send requests to an
endpoint.
See the documentation for your client or client library for information about
configuring it to use custom endpoints. For example:
Python : you can configure api_endpoint in Client
options .
Go : you can configure WithEndpoint in
ClientOptions .
.NET : you can configure
Endpoint in
the client's builder class.
Java : you can configure setEndpoint in the
client's settings class.
gcloud : you can configure api_endpoint_overrides in the
gcloud CLI .
Create DNS records by using default DNS names
You need to create DNS records to direct the default DNS names for APIs and
services to your endpoint in these
circumstances:
Your client or application cannot be configured to use a p.googleapis.com
DNS name.
You need to access a supported service, but there is no automatically created
p.googleapis.com DNS name for that service.
To create DNS records that point to your Private Service Connect
endpoint, follow these instructions:
Create a DNS zone for the domain you need to use (for example,
googleapis.com or gcr.io ). Consider creating a Cloud DNS private
zone for this purpose.
In this DNS zone:
Create an A record for the domain (zone) name itself; for example,
googleapis.com or gcr.io . Point this A record to the IP address of the
endpoint. If you're using
Cloud DNS, see adding a record .
Create a CNAME record for all of the additional domain's possible host
names by using an asterisk and a dot followed by the domain (zone) name; for
example, *.googleapis.com or *.gcr.io . Point this CNAME record to the
A record in the same zone. For example, point *.googleapis.com to
googleapis.com or point *.gcr.io to gcr.io .
Access the endpoint from on-premises hosts
If your on-premises network is connected to a VPC network, you
can use Private Service Connect to access Google APIs and
services from on-premises hosts by using the internal IP address of the
endpoint.
Your on-premises network must be connected to a VPC network
using either Cloud VPN tunnels or VLAN attachments for
Cloud Interconnect.
The endpoint must be in the VPC network that is connected to your
on-premises network.
The on-premises network must have appropriate routes for the endpoint.
Configure a Cloud Router custom route
advertisement
to announce routes for the endpoint on the BGP session that manages routes
for the Cloud VPN tunnel or VLAN attachment.
If your on-premises network uses equal-cost multi-path (ECMP) routing to
distribute traffic to Private Service Connect endpoints,
you must ensure that all packets for a single TCP connection are routed
through the same Cloud VPN tunnel or VLAN attachment. If
packets for an established TCP connection are routed over multiple
paths, you might experience intermittent TCP resets (RSTs).
To help prevent resets, configure your on-premises peer routers to
maintain consistent next hop destinations.
You must configure on-premises systems so that they can make queries to your
private DNS zones.
If you've implemented the private DNS zones using Cloud DNS,
complete the following steps:
Create an inbound server policy in the
VPC network to which your on-premises network connects.
Identify the inbound forwarder entry
points , in the regions where
your Cloud VPN tunnels and VLAN attachments are located, in the
VPC network to which your on-premises network connects.
Configure on-premises systems and on-premises DNS name servers to
forward the DNS names for the Private Service Connect
endpoints to an inbound forwarder entry point in the
same region as the Cloud VPN tunnel or VLAN attachment that
connects to the VPC network.
Troubleshooting
The following sections contain information about resolving issues with
Private Service Connect endpoints that are used to access Google
APIs.
Private DNS zone creation fails
When you create an endpoint, a
Service Directory DNS zone is created. Zone creation can fail
for these reasons:
You haven't enabled the Cloud DNS API in your project.
You don't have the required permissions to create a
Service Directory DNS zone.
A DNS zone with the same zone name exists in this VPC network.
A DNS zone for p.googleapis.com already exists in this VPC
network.
Conflicting zones might exist because a previous deletion
failed .
To create the Service Directory DNS zone, do the following:
Verify that the Cloud DNS API is
enabled in your project.
Verify that you have the required permissions to create the
Service Directory DNS zone:
dns.managedZones.create
servicedirectory.namespaces.associatePrivateZone
Delete the DNS zone .
Create a Service Directory DNS
zone
backed by the Service Directory namespace associated with your
endpoint.
Use the following values when you create the zone:
Zone name : Use the same zone name that the system used during the failed
creation attempt. The error message displays what zone name was used.
DNS name : p.googleapis.com. (include the trailing dot).
Service Directory namespace : Find the Service Directory
namespace for the Private Service Connect
endpoint you created, and use this namespace when you create the
Service Directory DNS zone.
The Service Directory namespace has the following format:
goog-psc- NETWORK_NAME - NETWORK_ID .
Private DNS zone deletion fails
When you delete the last endpoint in a
VPC network, the associated Service Directory
configuration including the DNS zone is deleted.
This deletion can fail for these reasons:
You don't have the required permissions to delete the DNS zone.
The zone contains user-defined DNS entries that were not created by
Service Directory.
To resolve this issue, do the following:
Verify that you have the dns.managedZones.delete permission. For more
information, see Access Control in the
Cloud DNS documentation.
Delete the DNS zone .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
