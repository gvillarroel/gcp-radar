---
title: "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vpc/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vpc/docs/access-regional-google-apis-endpoints
  title: "Access regional Google APIs through endpoints \_|\_ Virtual Private Cloud\
    \ \_|\_ Google Cloud Documentation"
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
Access regional Google APIs through endpoints
This document explains how to use Private Service Connect
endpoints to connect to regional endpoints of supported Google
APIs .
For information about other Private Service Connect
configurations, see
Private Service Connect .
Roles
To get the permissions that
you need to create a regional Private Service Connect endpoint,
ask your administrator to grant you the
following IAM roles on your VPC network:
Compute Network Admin role ( roles/compute.networkAdmin )
DNS Administrator role ( roles/dns.admin )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Before you begin
Install the Google Cloud CLI.
After installation,
initialize the Google Cloud CLI by running the following command:
$ gcloud init
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
Enable the Compute Engine, Network Connectivity Center, and Cloud DNS APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Additionally, enable the API for
the target service that you want to access through the
Private Service Connect endpoint. For example, if you
want to access spanner.me-central2.rep.googleapis.com , enable the
Cloud Spanner API. Private Service Connect doesn't
automatically enable any APIs.
Ensure that egress firewall rules permit traffic to the endpoint. The
default firewall configuration for a VPC network permits this
traffic because it contains an implied allow egress rule. Verify that you
haven't created a higher priority egress rule that blocks the traffic.
Create a regional Private Service Connect endpoint
You can create a regional Private Service Connect endpoint to
send requests to a regional endpoint for a target Google API.
For a list of supported regional endpoints, see Regional service
endpoints .
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click Connect endpoint .
In Target , select Google API .
In the Scope list, select Regional .
In the Region list, select the region that you want to use.
In the Target service list, select the service that you want to
access.
In Endpoint name , enter a name for the endpoint.
In Network , select a network.
In Subnetwork , select a subnetwork.
In IP address , do one of the following to configure an IP address:
Select Auto-allocate to automatically allocate and reserve a new
IP address.
Select a reserved IP address from the list.
Click Create IP address to reserve a new IP address.
Optional: To make the endpoint available from all regions in the
VPC network, select Enable global access .
Click Add endpoint .
gcloud
Use the gcloud network-connectivity regional-endpoints create
command .
gcloud network-connectivity regional-endpoints create ENDPOINT_NAME \
--region= REGION \
--address= ADDRESS \
--network=projects/ PROJECT_ID /global/networks/ NETWORK_NAME \
--subnetwork=projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET_NAME \
--target-google-api= REP_DNS_NAME
If you want to make the endpoint available to resources in other regions,
add the --enable-global-access flag.
Replace the following:
ENDPOINT_NAME : a name for the endpoint.
REGION : the region that you want to create the
endpoint in.
ADDRESS : the IPv4 or IPv6 address that you want to
use for the endpoint. If omitted, an IPv4 address from the subnetwork is
allocated. Use one of the following formats:
IPv4 address—for example, 10.0.0.2 .
IPv4 or IPv6 address resource URI—for example,
projects/ PROJECT_ID /regions/ REGION /addresses/ ADDRESS_NAME .
PROJECT_ID : the project that you're creating the
endpoint in.
NETWORK_NAME : the name of the VPC
network for the endpoint.
SUBNET_NAME : the subnet that you're connecting the
endpoint to.
REP_DNS_NAME : the hostname of the regional service
endpoint that you're connecting to. For example,
spanner.me-central2.rep.googleapis.com .
API
Use the
projects.locations.regionalEndpoints.create method .
HTTP method and URL:
POST https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /regionalEndpoints?regionalEndpointId= ENDPOINT_NAME
{
"accessType": "REGIONAL",
"address": " ADDRESS ",
"network": "projects/ PROJECT_ID /global/networks/ NETWORK_NAME ",
"subnetwork": "projects/ PROJECT_ID /regions/ REGION /subnetworks/ SUBNET_NAME ",
"targetGoogleApi": " REP_DNS_NAME "
}
Replace the following:
PROJECT_ID : the project ID of the endpoint.
REGION : the region that you want to create the
endpoint in.
ENDPOINT_NAME : a name for the endpoint.
ADDRESS : the IPv4 or IPv6 address that you want to
use for the endpoint. If omitted, an IPv4 address from the subnetwork is
allocated. Use one of the following formats:
IPv4 address—for example, 10.0.0.2 .
IPv4 or IPv6 address resource URI—for example,
projects/ PROJECT_ID /regions/ REGION /addresses/ ADDRESS_NAME .
NETWORK_NAME : the name of the VPC
network for the endpoint.
SUBNET_NAME : the name of the subnet that you want to
connect the endpoint to.
REP_DNS_NAME : the hostname of the regional service
endpoint that you want to connect to. For example,
spanner.me-central2.rep.googleapis.com .
List endpoints
You can list all configured endpoints.
Console
In the Google Cloud console, go to the Private Service Connect page.
Go to Private Service Connect
Click the Connected endpoints tab.
All endpoints are displayed, including endpoints with regional endpoint targets.
gcloud
Use the gcloud network-connectivity regional-endpoints list
command .
gcloud network-connectivity regional-endpoints list \
--region= REGION
Replace REGION with the region of the endpoints that you
want to list.
API
Use the
projects.locations.regionalEndpoints.list method .
GET https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /regionalEndpoints
Replace the following:
PROJECT_ID : the project ID of the endpoint.
REGION : the region of the endpoints that you want to
list.
Verify that the endpoint is working
Create a virtual machine (VM) instance in the VPC network and
region where the endpoint is configured. Run the following command on the VM to
verify that the Private Service Connect endpoint is working.
Endpoints don't respond to ping (ICMP) requests.
To verify an IPv4 endpoint, do the following:
curl --connect-to REP_DNS_NAME :443: ADDRESS :443 \
'https:// REP_DNS_NAME / PATH '
To verify an IPv6 endpoint, do the following:
curl -6 --connect-to REP_DNS_NAME :443:[ ADDRESS ]:443 \
'https:// REP_DNS_NAME / PATH '
Replace the following:
REP_DNS_NAME : the public DNS name of the target regional
endpoint—for example, spanner.me-central2.rep.googleapis.com .
ADDRESS : the IP address of the endpoint.
PATH : the path to a resource that is served by this
service. For example, many services offer a discovery document with the path
$discovery/rest?version=v1 .
The following example request tests that an endpoint with IP address
192.168.1.100 can request the Cloud Spanner API
discovery document from the regional endpoint in me-central2 .
curl --connect-to spanner.me-central2.rep.googleapis.com:443:192.168.1.100:443 \
'https://spanner.me-central2.rep.googleapis.com/$discovery/rest?version=v1'
Create a private DNS entry for the endpoint
You must create private DNS entries so that clients can direct requests to your
Private Service Connect endpoint.
We recommend creating a private zone that uses the same hostname as the
target regional endpoint:
SERVICE . REGION .rep. DOMAIN
and create an apex record in that zone.
For example, if your Private Service Connect endpoint has a
target of spanner.me-central2.rep.googleapis.com , create a private zone for
spanner.me-central2.rep.googleapis.com that contains an apex record for
spanner.me-central2.rep.googleapis.com . Creating records in the domain apex
means that you can access the public hostname of other regional endpoints—
for example, logging.me-central2.rep.googleapis.com .
The following sections describe how to use Cloud DNS to create a
private zone and an apex DNS record.
Create a private zone
Console
In the Google Cloud console, go to the Create a DNS zone page.
Go to Create a DNS zone
For the Zone type , select Private .
For Zone name , enter a name. For example, if your
Private Service Connect endpoint points to
spanner.me-central2.rep.googleapis.com , enter
spanner-me-central2-rep-googleapis-com .
For DNS name , specify the hostname of the target regional
endpoint followed by a trailing dot. For example,
spanner.me-central2.rep.googleapis.com. .
Optional: Add a description.
Under Options , select Default (private) .
Select the VPC networks where you want the private
zone to be visible. Only the VPC networks that you
select are authorized to query records in the zone.
Click Create .
gcloud
Run the dns managed-zones
create command:
gcloud dns managed-zones create ZONE_NAME \
--dns-name= REP_DNS_NAME . \
--networks= VPC_NETWORK_LIST \
--visibility=private \
--description="Private zone for REP_DNS_NAME "
Replace the following:
ZONE_NAME : a name for your zone—for example,
spanner-me-central2-rep-googleapis.com .
DESCRIPTION : a description for your zone
REP_DNS_NAME : the DNS suffix for your zone; use the
target regional endpoint hostname—for example,
spanner.me-central2.rep.googleapis.com
VPC_NETWORK_LIST : a comma-delimited list of
VPC networks that are authorized to query the zone
API
Send a POST request using the
managedZones.create method:
HTTP method and URL:
POST https://dns.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones
Request JSON body:
{
"name": " ZONE_NAME ",
"dnsName": " REP_DNS_NAME .",
"description": " DESCRIPTION ",
"visibility": "private",
"privateVisibilityConfig": {
"kind": "dns#managedZonePrivateVisibilityConfig",
"networks": [
{
"kind": "dns#managedZonePrivateVisibilityConfigNetwork",
"networkUrl": " NETWORK_1_URL "
},
{
"kind": "dns#managedZonePrivateVisibilityConfigNetwork",
"networkUrl": " NETWORK_2_URL "
}
]
}
}
Replace the following:
PROJECT_ID : the project ID of the DNS zone.
ZONE_NAME : the name of the private zone that
you created for this regional endpoint.
REP_DNS_NAME : the FQDN of the record you're creating;
use the target regional endpoint hostname—for example,
spanner.me-central2.rep.googleapis.com .
DESCRIPTION : a description for the DNS zone.
NETWORK_1_URL and NETWORK_2_URL :
the full URLs of the VPC networks that are authorized to query
the zone—for example,
https://www.googleapis.com/compute/v1/projects/ PROJECT_ID /global/networks/ NETWORK_NAME .
Add a DNS record to the zone
Console
In the Google Cloud console, go to the Cloud DNS zones page.
Go to Cloud DNS zones
Click the name of the managed zone that you want to add the record to.
On the Zone details page, click Add standard .
On the Create record set page, leave the DNS name field
blank. Leaving the field blank creates a resource record at the domain apex.
For Resource record type , select A .
In the IPv4 address field, enter or select the IP address of the
Private Service Connect endpoint.
Click Create .
gcloud
To add a resource record set, use the gcloud dns record-sets create
command :
gcloud dns record-sets create REP_DNS_NAME \
--rrdatas= ADDRESS \
--type= RECORD_TYPE \
--ttl= TTL \
--zone= ZONE_NAME
Replace the following:
REP_DNS_NAME : the FQDN of the record you're creating;
use the target regional endpoint hostname—for example,
spanner.me-central2.rep.googleapis.com .
ADDRESS : the IP address of the
Private Service Connect endpoint.
RECORD_TYPE : the type of DNS record, such as
A for IPv4 records or AAAA for IPv6 records.
TTL : the TTL in seconds that the resolver caches this
resource record set—for example, 300 .
ZONE_NAME : the name of the private zone that
you created for this regional endpoint.
API
To add a resource record set, use the
resourceRecordSets.create method :
HTTP method and URL:
POST https://www.googleapis.com/dns/v1/projects/ PROJECT_ID /managedZones/ ZONE_NAME /rrsets
Request JSON body:
{
"name": " REP_DNS_NAME .",
"type": " RECORD_TYPE ",
"ttl": TTL ,
"rrdatas": [ " ADDRESS " ]
}
Replace the following:
PROJECT_ID : the project ID of the DNS zone.
ZONE_NAME : the name of the private zone that
you created for this regional endpoint.
REP_DNS_NAME : the FQDN of the record you're creating;
use the target regional endpoint hostname—for example,
spanner.me-central2.rep.googleapis.com .
RECORD_TYPE : the type of DNS record, such as
A for IPv4 records or AAAA for IPv6 records.
TTL : the TTL in seconds that the resolver caches this
resource record set—for example, 300 .
ADDRESS : the IP address of the
Private Service Connect endpoint.
Configure clients to use the private endpoint name
You must configure clients to use the private DNS names instead of the public
DNS names. See the documentation for your client or client library for
information about configuring it to use custom endpoints. The following pages
include configuration steps for some common clients:
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
Get detailed information about an endpoint
You can view the configuration details of an endpoint.
gcloud
Use the gcloud network-connectivity regional-endpoints describe
command .
gcloud network-connectivity regional-endpoints describe \
ENDPOINT_NAME --region= REGION
Replace the following:
ENDPOINT_NAME : the name of the endpoint.
REGION : the region of the endpoint.
API
Use the projects.locations.regionalEndpoints.get command .
GET https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /regionalEndpoints/ ENDPOINT_NAME
Replace the following:
PROJECT_ID : the project ID of the endpoint.
REGION : the region of the endpoints that you want to
list.
ENDPOINT_NAME : the name of the endpoint.
Update the global access configuration
You can't update a Private Service Connect endpoint that has a
regional endpoint target. If you need to change the global access setting for
the endpoint, delete the endpoint and create a new
endpoint that has the required global access
setting.
Delete an endpoint
You can delete an endpoint.
gcloud
Use the gcloud network-connectivity regional-endpoints delete
command .
gcloud network-connectivity regional-endpoints delete \
ENDPOINT_NAME --region= REGION
Replace the following:
ENDPOINT_NAME : the name of the endpoint.
REGION : the region of the endpoint.
API
Use the projects.location.regionalEndpoints.delete command .
DELETE https://networkconnectivity.googleapis.com/v1/projects/ PROJECT_ID /locations/ REGION /regionalEndpoints/ ENDPOINT_NAME
Replace the following:
PROJECT_ID : the project ID of the endpoint.
REGION : the region of the endpoint.
ENDPOINT_NAME : the name of the endpoint.
Access endpoints from hybrid networks
Clients in networks that are connected to Google Cloud with VLAN
attachments for Cloud Interconnect or Cloud VPN tunnels can reach
Private Service Connect endpoints.
The VLAN attachment or Cloud VPN tunnel must terminate in the same
VPC network (or Shared VPC network) as the endpoint.
Clients in peered VPC networks cannot reach endpoints.
Client traffic from VLAN attachments or Cloud VPN tunnels can reach
endpoints in another region if global access is configured.
Both Dataplane v1 and Dataplane v2 are supported for the VLAN attachments.
For more information about Dataplane versions, see
Dataplane v2 .
You must configure systems in the other network so that
they can make queries to your private DNS zones.
If you implemented the private DNS zones by using Cloud DNS, complete
the following steps:
Create an inbound server policy in the
VPC network to which your other network connects.
Identify the inbound forwarder entry points
in the region where your VLAN attachment or Cloud VPN tunnel is
located, in the VPC network to which your other network
connects.
Configure systems and DNS name servers in the other network to forward the
DNS names for the endpoint to an inbound forwarder entry
point in the same region as the VLAN attachment or Cloud VPN tunnel
that connects to the VPC network.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
