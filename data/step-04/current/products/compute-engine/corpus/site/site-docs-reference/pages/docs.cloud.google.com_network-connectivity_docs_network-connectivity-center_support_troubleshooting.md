---
title: "Troubleshoot Network Connectivity Center \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/network-connectivity-center/support/troubleshooting
  title: "Troubleshoot Network Connectivity Center \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Network Connectivity Center
Guides
Send feedback
Troubleshoot Network Connectivity Center
Stay organized with collections
Save and categorize content based on your preferences.
Learn about troubleshooting steps that you might find helpful
if you run into problems using Network Connectivity Center, hybrid spokes,
VPC spokes, NCC Gateway spokes, or
Private Service Connect connection
propagation.
For known limitations, see
NCC considerations
on the overview page.
Common issues with command syntax
When updating a spoke, you must specify the location that the spoke is in.
Attach resources to spokes
For detailed requirements, recommendations, and considerations for creating
spokes and attaching resources to them, see Work with spokes .
Routes aren't distributed between regions
If routes aren't being distributed properly between regions, verify that the
VPC network's
dynamic routing mode is set to
global .
Data transfer traffic doesn't flow between two non-Google Cloud networks
In this context, a non-Google Cloud network refers to your on-premises
data center, a branch office, or another cloud provider's network.
If data transfer traffic isn't flowing between two locations, confirm that the
following resources are correctly configured and working:
Verify the functionality of
HA VPN tunnels
or VLAN attachments
that are added as spokes.
Verify the routes programmed between the
two locations .
Verify that ASN assignments are set up as described in
ASN requirements for site-to-site data transfer .
Verify that each spoke has the site-to-site data transfer field set to true .
Duplicate route advertisements from BGP sessions
If there are duplicate route advertisements—some from BGP sessions
participating in data transfer and some from sessions not participating in data
transfer—then data transfer traffic might use ECMP to distribute traffic to
all available next hops, even if those next hops aren't explicitly participating
in data transfer.
Interconnect connection to an unsupported location (non-Google Cloud network)
For an example of how to configure route advertisements when one of your
redundant Interconnect connections is to an unsupported location, see
Configure external router to avoid unsupported
locations .
Troubleshoot network connectivity using Connectivity Tests
Connectivity Tests is a diagnostics tool that lets you check connectivity
between endpoints in your network. It analyzes your configuration and in some
cases performs run-time verification.
To analyze network configurations, Connectivity Tests simulates the expected
forwarding path of a packet through your Virtual Private Cloud (VPC) network,
Cloud VPN tunnels, VLAN attachments, or
You can use the Connectivity Tests configuration analysis to evaluate
reachability for the following networks:
From a non-Google Cloud network to a VPC network
that are connected through NCC. In this context, a
non-Google Cloud network is typically your on-premises data center or a
branch office or another cloud provider's network.
Test between VM instances through an NCC hub
Because Connectivity Tests doesn't have access to your on-premises
network configuration, it can't verify the configuration of routes and
firewall rules on your on-premises router. Thus, traffic from your on-premises
network to your VPC network is always considered valid by the
Connectivity Tests configuration analysis, and only configurations
within Google Cloud are verified.
Note: Connectivity Tests doesn't support Private Service Connect
connection propagation with NCC.
To run Connectivity Tests between two on-premises networks connected through
NCC, see
Test from a non-Google Cloud network to a non-Google Cloud network .
For more information, see the
Connectivity Tests overview .
Troubleshoot hybrid spokes
The following issue can occur in Router appliance, VLAN
attachment and VPN spokes.
Configured hub subnets aren't advertised to an on-premises network
If the configured hub subnets aren't advertised to the on-premises network,
check the hub route table of the hybrid spoke's group for the following
issues:
If the subnets are displayed in the hub route table, do the following:
Make sure that the BGP route policy
hasn't dropped the subnet to be advertised.
Contact Google Cloud Support to diagnose the underlying
issue.
If the subnets aren't in the hub route table, do the following:
Check the include-export and exclude-export IP address ranges on the
VPC spoke of the subnets. If the subnet is filtered by
include-export ranges or exclude-export ranges, you can update the
VPC spoke.
Troubleshoot Router appliance
The following issues and solutions are unique to Router appliance.
The documentation for troubleshooting Cloud Router also applies to
Router appliance, along with the issues described in the following sections.
For more information, see the following:
Troubleshoot BGP sessions
Troubleshoot BGP peering
Troubleshoot BGP routes and route selection
Troubleshoot Cloud Router log messages
BGP sessions fail to establish
If BGP sessions between Cloud Router and Router appliance
fail to establish, check for the following issues:
Make sure that a VM acting as a router appliance instance
is configured as part of a spoke in Network Connectivity Center. To configure a
router appliance instance as part of a spoke, see
Work with spokes .
Check your firewall settings to ensure that TCP port 179 is allowed.
To configure firewall settings for Router appliance, see
Create router appliance instances .
Make sure that neither Cloud Router nor your router appliance
instance are using link-local addresses (that is, 169.254.x.x ) to peer
with each other. For guidance,
see IP addresses and router appliance
instances .
Make sure that Cloud Router has established two separate BGP sessions
to your router appliance instance, one from each Cloud Router
interface. The router appliance instance must advertise the same routes
on both BGP sessions. If one of your BGP sessions goes down and your
router appliance VM loses communication to Cloud Router,
check the configuration of your Cloud Router interfaces.
For more information, see
Create router appliance instances .
Issues with internal IP addresses for BGP sessions on router appliance instances
If you discover issues related to your IP address configuration for
router appliance instances, make sure that you have configured RFC 1918 internal IP
addresses for BGP sessions between Cloud Router and the VMs acting as
router appliance instances.
Router appliance instances don't use 169.254.x.x addresses for BGP
sessions. Instead, they must use IP addresses in the same VPC
subnet as Cloud Router. For more information, see
Create router appliance instances .
Troubleshoot VPC spokes
Permissions
If permission is denied when creating a spoke in a different project from the
hub, check with the hub administrator to confirm
that you have been granted the required networkconnectivity.groups.use
permission on the hub.
VPC spoke creation failures
If your VPC spoke creation has failed, it could be due to one of
the following reasons:
The VPC network is already peered with one or more of the
existing spokes using VPC peering.
Subnets overlap with existing VPC spokes.
Subnets overlap with peers of existing VPC spokes.
You have exceeded the VPC spokes quota.
You have exceeded the routes per hub route table quota.
More than 16 export filters are specified.
Subnets in the VPC network are larger than one or more filters
specified.
For quota-related errors, see Quotas and limits .
VPC spoke creation failures after deleting a spoke
After you delete a spoke, you must wait for the cool-down period of at least
10 minutes before you can create a new spoke for the same VPC
network attached to a different hub. This cool-down period isn't needed if the
VPC network is added as a spoke to the same hub.
Subnet creation failures in a VPC spoke
If you encounter subnet creation failure in a VPC spoke, it
could be due to one of the following reasons:
There are overlapping subnets in other VPC spokes or peers of
VPC spokes.
You have exceeded the routes per hub route table quota.
Subnets in the VPC network are larger than one or more filters
specified.
The VPC spoke is created but dataplane connectivity is missing
If your VPC spoke is showing as created, but dataplane
connectivity is missing, it could be due to one of the following reasons:
The spoke is in a different project from the hub and the hub administrator
hasn't accepted the spoke proposal.
All subnets in the VPC network are filtered and excluded
from connectivity.
Destination subnets are filtered by their corresponding VPC
spoke filters.
The hub route table doesn't show some subnets in VPC spokes
If your hub route table doesn't show some of the subnets in the
VPC spokes, it could be due to one of the following reasons:
The subnets are filtered using export filters.
The subnets were created within the last 5-10 minutes and the hub route table
isn't refreshed yet.
The VPC spoke update has failed
Make sure that your spoke updates comply with all the NCC
quotas and limits ; otherwise, the spoke update fails.
If a VPC spoke or producer VPC spoke is in a
project different from the project that contains the hub, and a hub
administrator hasn't enabled auto acceptance of proposals from the spoke
project, a hub administrator must accept or reject a proposed update.
For detailed information about how to check the status of the spoke update
proposal, see
Check the status of a VPC spoke .
Troubleshoot Private Service Connect connection propagation errors
Before investigating issues, familiarize yourself with the following pages:
Private Service Connect connection propagation through NCC
Configure a hub
VM in one spoke can't access the Private Service Connect connection in another spoke
If a VM in one VPC spoke can't access the
Private Service Connect endpoint in another spoke, make sure
that the following conditions are met:
The --export_psc field is enabled in the hub.
To check if the --export_psc field is enabled in the hub, use the
gcloud network-connectivity hubs describe command .
gcloud
gcloud network-connectivity hubs describe HUB_NAME \
--project= PROJECT_ID \
--format='get(export_psc)'
Replace the following values:
HUB_NAME : the name of the hub
PROJECT_ID : the project ID where the hub resides
The IP address of the Private Service Connect
endpoint isn't in any export exclude range of the hosting spoke.
Private Service Connect endpoints that reside within the export
exclude range aren't propagated.
To check the specified exclude export ranges of a spoke, use the
gcloud network-connectivity spokes describe command .
gcloud
gcloud network-connectivity spokes describe SPOKE_NAME \
--global \
--project= PROJECT_ID \
--format='get(linked_vpc_network.exclude_export_ranges)'
Replace the following values:
SPOKE_NAME : the name of the spoke
PROJECT_ID : the project ID where the spoke resides
You haven't exceeded the NCC usage quota .
The psc_connection_status of the endpoint is in the ACCEPTED state. For
information about connection statuses, see
Connection statuses .
The propagated connection status of the endpoint in the spoke containing the VM is READY . If no status is
showing up, check for the reasons in the
You can't see the status of some target spokes
section on this page. You can check the propagated
connection status by using the
gcloud network-connectivity hubs query-status command :
gcloud
gcloud network-connectivity hubs query-status HUB_NAME \
--filter='psc_propagation_status.source_spoke=" SOURCE_SPOKE_NAME " AND psc_propagation_status.target_spoke=" TARGET_SPOKE_NAME " AND psc_propagation_status.source_forwarding_rule=" ENDPOINT_NAME "
Replace the following values:
HUB_NAME : the name of the hub for which you
want to check the connection propagation status
SOURCE_SPOKE_NAME : the name of the source spoke
TARGET_SPOKE_NAME : the name of the target spoke
ENDPOINT_NAME : the name of the endpoint
For detailed information about how to use these flags, see the
gcloud network-connectivity hubs query-status command page.
The host VPC network of the
Private Service Connect endpoint (source) is a
VPC spoke in the hub.
The IP address of the Private Service Connect endpoint is an
RFC 1918 address.
You've exhausted the producer quota
If you see the PRODUCER_QUOTA_EXHAUSTED error message, you can ask the
service producer to request a
PSC_ILB_CONSUMER_FORWARDING_RULES_PER_PRODUCER_NETWORK quota increase. For
details, see the Per network section of
the VPC documentation.
You've exceeded the producer's propagated connection limit
If you see an error about exceeding the
propagated connection limit
of a service attachment, you can ask the service producer to
increase the limit .
When a service producer updates the propagated
connection limit, Google Cloud automatically checks if any pending
propagated connections can be created.
The producer NAT IP address space is exhausted
If you see the PRODUCER_NAT_IP_SPACE_EXHAUSTED error message, it means that
you might need to ask the service producer to add NAT subnets. For information about adding subnets, see
Add or remove subnets from a published service .
You've exhausted the consumer quota
If you see a CONSUMER_QUOTA_EXHAUSTED error message, contact
the owner of the consumer VPC network and request a
PSC_PROPAGATED_CONNECTIONS_PER_VPC_NETWORK quota increase.
You can't see the status of some target spokes
If you don't see the status of some target spokes, it might be due to one of
the following reasons:
The target spoke isn't a VPC spoke. Only VPC
spokes, including VPC networks that are VPC
spokes and also contain hybrid spokes, can receive propagated connections.
A hybrid spoke in a routing VPC network that isn't also a
VPC spoke can't receive propagated connections.
NCC only shows propagation status for each VPC
spoke. If a VPC network is both a VPC spoke
and contains hybrid spokes, check the propagation status of its
VPC spoke to determine whether contained hybrid spokes have
connectivity to propagated Private Service Connect endpoints.
If a VPC network is both the
Private Service Connect producer VPC network
and a VPC spoke on a hub that propagates its endpoints,
NCC doesn't propagate its endpoints back to the producer
VPC network itself.
The propagation is disallowed by the topology of the hub.
For example, if the hub is configured to use star topology, the following
conditions are also true:
Private Service Connect endpoints in the center group are
propagated to all other VPC spokes.
Private Service Connect endpoints in the edge group are only
propagated to VPC spokes in the center group.
Troubleshoot VPC spokes route exchange
VPC spokes and hybrid spokes are attached to the same hub but dataplane connectivity is missing
If the VPC spokes and hybrid spokes are attached to the same hub
but dataplane connectivity is missing, it might be due to one of the following
reasons:
The spoke is a cross-project spoke and the hub administrator hasn't accepted
the spoke proposal.
All subnets in the VPC network are filtered and excluded from
connectivity.
Auto propagation of VPC subnets isn't enabled or custom routes
advertisement isn't set up.
The dynamic routes quota is
exhausted.
The hub route table doesn't show some dynamic routes or shows spurious dynamic routes
The hub route table might not show dynamic routes correctly due to one of the
following reasons:
BGP routes have been advertised or withdrawn within the last five to ten
minutes and the hub route table isn't updated yet.
The dynamic routes quota is
exhausted.
Hybrid spoke creation fails
If a hybrid spoke creation fails, it could be due to one of the following
reasons:
The routing VPC network might be an existing VPC
spoke to either the same hub or a different hub.
The routing VPC network might be implicitly associated with a
different hub because of an existing hybrid spoke connected to that hub.
Hybrid attachments from a VPC network can become spokes to
only one hub.
VPC spoke creation fails
VPC spoke creation might fail if the VPC spoke is
implicitly associated with a hub as a routing VPC network.
Error message
If you try to create a spoke and receive an error message that says An
internal error occurred , to help troubleshoot the issue, contact
Google Cloud Support .
Troubleshoot NCC Gateway spokes
You can view the services and routers that are connected to your
NCC Gateway by using the
gcloud network-connectivity spokes describe command
on the NCC Gateway spoke resource.
gcloud
gcloud network-connectivity spokes describe SPOKE_NAME \
--region REGION
Replace the following:
SPOKE_NAME : the name of the NCC Gateway spoke
REGION : the region in which the spoke resides
The output is similar to the following:
createTime: '2022-11-25T06:06:11.572019860Z'
hub: projects/PROJECT/locations/REGION/hubs/HUB
gateway:
ipRangeReservation: 10.1.2.0/24
asn: 65123
routers:
projects/PROJECT/locations/REGION/routers/ROUTER
name: projects/PROJECT/locations/REGION/spokes/SPOKE
state: ACTIVE
uniqueId: 8ca10af0-ee69-43c2-b0b4-61e8f53d410b
updateTime: '2023-12-27T21:26:47.786506888Z'
You can view the application VPC routing table and the created
hub route table route that is propagated to your VPC route table
with next hop as hub by using the gcloud compute routes list command :
gcloud
gcloud compute routes list \
--filter="network= NETWORK "
Replace NETWORK with the name of the VPC network.
The output is similar to the following:
NAME NETWORK DEST_RANGE NEXT_HOP PRIORITY
ncc-static-route-7296f3a4-cdc2-4560-a905-95cdb1d6833e vpc-1 17.0.0.0/8 hub 0
You can view the hub route table for the spoke group and see the same created
route pointing to the NCC Gateway spoke by using the
gcloud network-connectivity hubs route-tables routes list command :
gcloud
gcloud network-connectivity hubs route-tables routes list --hub= HUB_NAME \
--route_table
Replace HUB_NAME with the name of the hub.
The hub route table doesn't show gateway advertised routes
If your hub route table doesn't show some of the gateway advertised routes
with the gateway spoke as next hop, it could be due to
routes not being installed in the data plane. This can cause connectivity issues
between VPC spokes and on-premises applications connected
through the NCC Gateway spoke. Try deleting and creating
gateway advertised routes by following these steps:
Delete the advertised route
Create an NCC Gateway advertised route
View the advertised route associated with the NCC Gateway by
using the gcloud beta network-connectivity spokes gateways advertised-routes list command :
gcloud
gcloud beta network-connectivity spokes gateways advertised-routes list
--region= REGION
Replace REGION with the region in which the spoke resides.
Verify the gateway advertised route in the hub route table by using the gcloud network-connectivity hubs route-tables list command :
gcloud
gcloud network-connectivity hubs route-tables list \
--hub=HUB_NAME
Replace HUB_NAME with the name of the hub that you want to
list the route table for.
The output is similar to the following. An entry for your gateway
advertised route must be present in the output.
gcloud network-connectivity hubs route-tables routes list --hub=HUB_NAME --route_table PROD
IP_CIDR_RANGE STATE TYPE NEXT_HOP HUB ROUTE_TABLE PRIORITY
10.0.0.0/8 ACTIVE NCC_GW NCC-GW-1 HUB_NAME PROD 100
For issues with Cloud Router, see
Troubleshoot Cloud Router log messages .
For issues with Cloud Interconnect, see the Cloud Interconnect troubleshooting page.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
