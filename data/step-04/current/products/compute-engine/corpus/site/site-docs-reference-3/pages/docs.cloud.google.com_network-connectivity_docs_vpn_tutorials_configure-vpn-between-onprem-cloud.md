---
title: "Create a Classic VPN connection to a remote site \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud
knowledge_key: corpus
source_id: site-docs-reference-3
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/vpn/apis
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/vpn/tutorials/configure-vpn-between-onprem-cloud
  title: "Create a Classic VPN connection to a remote site \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud VPN
Guides
Send feedback
Create a Classic VPN connection to a remote site
Stay organized with collections
Save and categorize content based on your preferences.
You can configure a Classic VPN tunnel connection between an on-premises
site and Google Cloud such that both the source and destination IP addresses are
external (non-RFC 1918) IP addresses. For example, you can configure a
Classic VPN connection to a remote site such that the on-premises
IP address ranges do not conflict with the Google Cloud VM IP address.
In this tutorial, you use a Google Cloud project, the Google Cloud console, a virtual
machine (VM) instance, Classic VPN, and a few Linux commands.
To test the connection, you create a new VM instance to send and receive
traffic between the VM and a remote peer.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
On your workstation,
install the gcloud command-line tool .
Configure the gcloud command-line tool to use your project.
In the following command, replace
PROJECT_ID with your project ID:
gcloud config set project PROJECT_ID
Ensure that your on-premises subnets are connected to your on-premises
VPN gateway.
Follow the instructions in
Configuring the peer VPN gateway to configure the
peer VPN gateway between Google Cloud and your on-premises VPN gateway.
Reserve a new static external IP address
In Compute Engine, each VM instance can have multiple network interfaces. Each
interface can have both internal and external IP addresses. Forwarding rules can
have external IP addresses for external load balancing or internal addresses for
internal load balancing. To learn more about static IP addresses, see
External IP addresses .
A static external IP address is the IP address that is reserved for your project
until you decide to release it .
If you have an IP address that your customers rely on to access your service,
you can reserve that IP address so that only your project can use it. You can also
promote an ephemeral external IP address
to a static external IP address.
You can reserve two types of external IP addresses:
A regional IP address that is used by
VM instances with one or more network interfaces
or by regional load balancers
A global IP address that is used for global load balancers
For a list of regional and global load balancers, see the summary of
Google Cloud load
balancers .
Reserve a static external IP address by using the Google Cloud CLI or
through the API. After you reserve the IP address, assign the IP address to a
new instance
while creating the new instance, or assign the IP address to an existing instance .
Console
Go to the Reserve a static address page.
Go to Reserve a static address
Choose a name for the new address.
Specify whether it is an IPv4 or IPv6 address. IPv6
addresses can only be global and can only be used with global load
balancers.
Specify whether this IP address is regional or global. If you are
reserving a static IP address for an instance or for a regional
load balancer, choose Regional . If you are reserving a static IP
address for a global load balancer, choose Global .
If this is a regional IP address, select the region to create the address
in.
Optional: Select a resource to attach to the IP address.
Click Reserve to reserve the IP address.
gcloud
To reserve a static external IP address using gcloud compute , use the
compute addresses create command .
To reserve a global IP address, use the --global and
--ip-version fields. For the --ip-version field, specify either IPV4
or IPV6 . IPv6 addresses can only be global and can only be used with
global load balancers.
Replace the ADDRESS_NAME with the name for
this address.
gcloud compute addresses create ADDRESS_NAME \
--global \
--ip-version [IPV4 | IPV6]
To reserve a regional IP address, use the --region field:
gcloud compute addresses create ADDRESS_NAME \
--region= REGION
Replace the following:
ADDRESS_NAME : the name for this
address.
REGION : the region in which to reserve this address.
This region should be the same region as the resource to which the IP
address is assigned. All regional IP addresses are IPv4.
Use the compute addresses describe command
to view the result:
gcloud compute addresses describe ADDRESS_NAME
API
To create a regional IPv4 address, call the
regional addresses.insert method :
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /regions/ REGION /addresses
Your request body should contain the following:
{
"name": " ADDRESS_NAME "
}
Replace the following:
ADDRESS_NAME : the name of the address
REGION : the name of the region for this request
PROJECT_ID : the project ID for this request
For global static IPv4 addresses, call the
globalAddresses.insert method :
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/addresses
Your request body should contain the following:
{
"name": " ADDRESS_NAME "
}
For global static IPv6 addresses, call the
globalAddresses.insert method :
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/addresses
Your request body should contain the following:
{
"name": " ADDRESS_NAME ",
"ipVersion": "IPV6"
}
Use the addresses.get method
to see the result.
Terraform
You can use a Terraform
module
to create an external IP address.
In the following example, the Terraform arguments have example values that
you can change. The example creates three regional external IPv4 addresses.
module "address" {
source = "terraform-google-modules/address/google"
version = "~> 4.0"
project_id = var.project_id # Replace this with your service project ID in quotes
region = "europe-west1"
address_type = "EXTERNAL"
names = [
"regional-external-ip-address-1",
"regional-external-ip-address-2",
"regional-external-ip-address-3"
]
}
The following example creates a global external IPv6 address:
resource "google_compute_global_address" "default" {
project = var.project_id # Replace this with your service project ID in quotes
name = "ipv6-address"
address_type = "EXTERNAL"
ip_version = "IPV6"
}
Enable IP forwarding
You can enable IP forwarding when you create a VM , or
by updating the canIpForward instance
property on an existing
VM. IP forwarding is enabled at the VM level and applies to all
interfaces attached to the VM.
Important: Enabling IP forwarding is not sufficient to cause the instance to
forward packets. You must configure its guest operating system as well.
Enable IP forwarding when you create a VM
These instructions describe how to enable IP forwarding when you create a VM. If
you need to enable IP forwarding on an existing VM, update the canIpForward
instance property .
Console
Go to the VM instances page.
Go to VM instances
Click Create instance .
In Boot disk , ensure that you have selected a Linux image; for example,
Debian GNU/Linux.
Click Networking, Disks, Security, Management, Sole-tenancy
Click Networking .
For IP forwarding , select Enable .
Specify any other instance parameters.
Click Create .
gcloud
When you create an instance using gcloud , add the --can-ip-forward flag to
your command:
gcloud compute instances create ... --can-ip-forward
API
When you create an instance, use the canIpForward field to enable IP
forwarding.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /zones/ ZONE /instances
{
"canIpForward": true,
...other fields
}
Replace the following:
PROJECT_ID : the ID of the project where your instance is
created.
ZONE : the Google Cloud zone where the instance is
created.
For more information, refer to the
instances.insert
method.
Terraform
You can use the Terraform
resource
to create a VM instance with IP forwarding enabled.
In this example, the Terraform arguments have assigned values that you can
change.
resource "google_compute_instance" "default" {
project = var.project_id # Replace this with your project ID in quotes
zone = "southamerica-east1-b"
name = "instance-next-hop"
machine_type = "e2-medium"
boot_disk {
initialize_params {
image = "debian-cloud/debian-9"
}
}
network_interface {
network = "default"
}
can_ip_forward = true
}
Create route for ingress traffic
Follow these steps to create a new static route. Before doing so, make sure that
you are familiar with the following:
static routes cannot have destination ranges that match or are more
specific than the destination ranges used by any subnet route
in your VPC network.
When using VPC Network Peering to connect
two VPC networks, static routes in one network
cannot have matching or more specific destinations than subnet routes in
both of the networks. Google Cloud rejects static routes
that would conflict with subnet routes in this way.
To avoid conflicts when using an auto mode VPC network, don't create static routes
whose destinations fit within 10.128.0.0/9 . Review the
auto mode IPv4 ranges for details.
Destinations for static routes can't overlap with any internal
allocated range .
Make sure that you're familiar with instances as next
hops before you create a custom-static
route that uses a VM as its next hop. Google Cloud only validates that
a VM exists at the time when you create the route if you choose a
next hop instance .
If you create a route using a network tag, then only VMs with that tag
receive that route. However, tagged VMs still receive all routes that have
no network tag.
Console
Go to the Routes page in the Google Cloud console.
Go to Routes
Click Create route .
Specify a Name and a Description for the route.
Select an existing Network where the route will apply.
Specify a Destination IP range to define the destination of the route.
Specify a Priority for the route. A priority is only used to
to determine routing order if routes have equivalent destinations.
See Route parameters for more details.
To make the route applicable only to instances with matching
network tags, specify those in the Instance tags field. Leave the
field blank to make the route applicable to all instances in the network,
or if you select an internal TCP/UDP load balancer as the route's next
hop. Network tags don't apply to routes that have an internal TCP/UDP
load balancer as a next hop.
Select a Next hop for the route:
Specify an instance allows you to select an instance by name.
Traffic will be routed to that instance (or any replacement instance
with the same name in the same zone) even if its IP address changes.
Specify IP address allows you to enter an IP address of an
existing instance in the VPC network. Refer to
Next hops and features for important
restrictions on valid next hop IP addresses.
Click Create .
gcloud
Create a new static route:
gcloud compute routes create ROUTE_NAME \
--destination-range= DESTINATION_RANGE \
--network= NETWORK \
NEXT_HOP_SPECIFICATION
Replace the placeholders:
ROUTE_NAME is the name of the route.
DESTINATION_RANGE represents the destination IP addresses to
which this route will apply. The broadest possible destination is 0.0.0.0/0 .
NETWORK is the name of the VPC network that will
contain the route.
NEXT_HOP_SPECIFICATION represents the next hop for the static
route. You must specify only one of the following as a next hop. For more
information about the different types of next hops, see Next hops and
features .
--next-hop-instance= INSTANCE_NAME and
--next-hop-instance-zone= ZONE : Use this next hop to
direct traffic to an existing VM instance by name and zone. Traffic is
sent to the primary internal IP address for the VM's network interface
located in the same network as the route.
--next-hop-address= ADDRESS : Use this next hop to direct
traffic to the IP address of an existing VM instance.
To make the static route only apply to select VMs by network tag, add
the --tags flag and specify one or more network tags. For more
information about how network tags and static routes work together,
see Applicable routes . You can use
tags with any static route.
See the SDK documentation
for additional information about the gcloud syntax.
API
Create a new static route.
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT_ID /global/routes
{
"destRange": " DESTINATION_RANGE ",
"name": " ROUTE_NAME ",
"network": " NETWORK_NAME ",
"priority": PRIORITY ,
" NEXT_HOP_SPECIFICATION ": VALUE
}
Replace the placeholders:
PROJECT_ID is the ID of the project where your route is
created.
DESTINATION_RANGE represents the destination IP addresses to
which this route will apply. The broadest possible destination is
0.0.0.0/0 .
ROUTE_NAME a name for the route.
NETWORK_NAME is the name of the VPC network that
will contain the route.
The VALUE for the NEXT_HOP_SPECIFICATION represents
the next hop for the static route. For
NEXT_HOP_SPECIFICATION , you must specify only one of the
following next-hop fields: nextHopIp , nextHopInstance . For more
information about the different types of next hops and features, see
Next hops and features .
For more information, refer to the
routes.insert method.
Terraform
You can create a static route by using a
Terraform module .
This static route creates a default route to the internet.
module "google_compute_route" {
source = "../../modules/routes" #adding local path
project_id = var.project_id # Replace this with your project ID in quotes
network_name = "default"
routes = [
{
name = "egress-internet"
description = "route through IGW to access internet"
destination_range = "0.0.0.0/0"
tags = ["egress-inet"]
next_hop_internet = true
}
]
}
Create a Classic VPN using static routing
The VPN setup wizard is the only Google Cloud console option for creating a
Classic VPN gateway. The wizard includes all required
configuration steps for creating a Classic VPN gateway,
tunnels, BGP sessions, and an external VPN gateway resource. However, you can
complete certain steps later, such as configuring BGP sessions.
Note: The Create VPN gateway button only supports creating
HA VPN gateways.
Console
Configure the gateway
In the Google Cloud console, go to the VPN page.
Go to VPN
If you are creating a gateway for the first time, click
Create VPN connection .
Select the VPN setup wizard .
Select the Classic VPN option button.
Click Continue .
On the Create a VPN connection page, specify the following gateway
settings:
Name : The name of the VPN gateway. The name cannot be
changed later.
Description : Optionally, add a description.
Network : Specify an existing VPC network
in which to create the VPN gateway and tunnel.
Region : Cloud VPN gateways and tunnels are
regional objects. Choose a Google Cloud
region where the gateway will be
located. Instances and other resources in different regions can use
the tunnel for egress traffic subject to the order of
routes .
For best performance, locate the gateway and tunnel in the same region
as relevant Google Cloud resources.
IP address : Create or choose an existing regional external
IP address .
Configure tunnels
For the new tunnel, in the Tunnels section, specify the following
settings:
Name : The name of the VPN tunnel. The name cannot be
changed later.
Description : Optionally, type a description.
Remote peer IP address : Specify the external IP address of the
peer VPN gateway.
IKE version : Choose the appropriate IKE version supported
by the peer VPN gateway. IKEv2 is preferred if it's
supported by the peer device.
Known issue: When configuring VPN tunnels
to AWS, use the IKEv2 encryption protocol and select fewer transform
sets on the AWS side; otherwise, the Cloud VPN tunnel can
fail to rekey. For example, select a combination of single Phase 1
and Phase 2 encryption algorithms, integrity algorithms, and DH group
numbers.
This rekeying issue is caused by a large Security Association (SA)
payload size for the
default set of AWS transform sets. This large payload size results
in IP fragmentation of IKE packets on the AWS side, which
Cloud VPN does not support.
IKE pre-shared key : Provide a pre-shared key (shared secret) used for
authentication. The pre-shared key for the Cloud VPN tunnel
must match the one used when you configure the counterpart tunnel on
the peer VPN gateway. To generate a cryptographically strong
pre-shared key, follow
these directions .
Select policy-based tunnels
Under Routing options , select Policy-based .
Under Remote network IP ranges , provide a space-separated list of
the IP address ranges used by the local traffic on the on-premises
VPN setup.
In the Local IP ranges field, enter the external IP address range
that you created earlier with a subnet prefix /32 .
Click Done .
Click Create .
gcloud
To create a Cloud VPN gateway, complete the following command
sequence. In the commands, replace the following:
PROJECT_ID : the ID of your project
NETWORK : the name of your Google Cloud network
REGION : the Google Cloud
region where you create the
gateway and tunnel
GW_NAME : the name of the gateway
GW_IP_NAME : a name for the external IP address used
by the gateway
Optional: The --target-vpn-gateway-region is the region of the
Classic VPN gateway to operate on. Its value should
be the same as --region . If not specified, this option is
automatically set. This option overrides the default compute/region
property value for this command invocation.
Configure the gateway resources
Create the target VPN gateway object:
gcloud compute target-vpn-gateways create GW_NAME \
--network= NETWORK \
--region= REGION \
--project= PROJECT_ID
Reserve a regional external (static) IP address:
gcloud compute addresses create GW_IP_NAME \
--region= REGION \
--project= PROJECT_ID
Note the IP address (so you can use it when you configure your
peer VPN gateway):
gcloud compute addresses describe GW_IP_NAME \
--region= REGION \
--project= PROJECT_ID \
--format='flattened(address)'
Create three forwarding rules; these rules instruct
Google Cloud to send ESP (IPsec), UDP 500, and UDP 4500
traffic to the gateway:
gcloud compute forwarding-rules create fr- GW_NAME -esp \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--ip-protocol=ESP \
--address= GW_IP_NAME \
--target-vpn-gateway= GW_NAME \
--region= REGION \
--project= PROJECT_ID
gcloud compute forwarding-rules create fr- GW_NAME -udp500 \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--ip-protocol=UDP \
--ports=500 \
--address= GW_IP_NAME \
--target-vpn-gateway= GW_NAME \
--region= REGION \
--project= PROJECT_ID
gcloud compute forwarding-rules create fr- GW_NAME -udp4500 \
--load-balancing-scheme=EXTERNAL \
--network-tier=PREMIUM \
--ip-protocol=UDP \
--ports=4500 \
--address= GW_IP_NAME \
--target-vpn-gateway= GW_NAME \
--region= REGION \
--project= PROJECT_ID
Create the Cloud VPN tunnel
In the commands, replace the following:
TUNNEL_NAME : a name for the tunnel
ON_PREM_IP : the external IP address of the peer
VPN gateway
IKE_VERS : 1 for IKEv1 or 2 for IKEv2
Known issue: When configuring VPN tunnels
to AWS, use the IKEv2 encryption protocol and select fewer transform
sets on the AWS side; otherwise, the Cloud VPN tunnel can
fail to rekey. For example, select a combination of single Phase 1
and Phase 2 encryption algorithms, integrity algorithms, and DH group
numbers.
This rekeying issue is caused by a large SA payload size for the
default set of AWS transform sets. This large payload size results
in IP fragmentation of IKE packets on the AWS side, which
Cloud VPN does not support.
SHARED_SECRET : your pre-shared key (shared
secret). The pre-shared key for the Cloud VPN tunnel
must match the one used when you configure the counterpart tunnel on
the peer VPN gateway. To generate a cryptographically strong
pre-shared key, follow
these directions .
For policy-based VPN:
LOCAL_IP_RANGES : a comma-delimited list of the
Google Cloud IP address ranges. For example, you can supply
the CIDR block for each subnet in a VPC network. This
is the left side from the perspective of Cloud VPN.
REMOTE_IP_RANGES : a comma-delimited list of the
peer network IP address ranges. This is the right side from
the perspective of Cloud VPN.
To configure a policy-based VPN tunnel, run the following command:
gcloud compute vpn-tunnels create TUNNEL_NAME \
--peer-address= ON_PREM_IP \
--ike-version= IKE_VERS \
--shared-secret= SHARED_SECRET \
--local-traffic-selector= LOCAL_IP_RANGES \
--remote-traffic-selector= REMOTE_IP_RANGES \
--target-vpn-gateway= GW_NAME \
--region= REGION \
--project= PROJECT_ID
For route-based VPN, both the local and remote traffic selectors are
0.0.0.0/0 as defined in routing options and traffic
selectors .
To configure a route-based VPN tunnel, run the following command:
gcloud compute vpn-tunnels create TUNNEL_NAME \
--peer-address= ON_PREM_IP \
--ike-version= IKE_VERS \
--shared-secret= SHARED_SECRET \
--local-traffic-selector=0.0.0.0/0 \
--remote-traffic-selector=0.0.0.0/0 \
--target-vpn-gateway= GW_NAME \
--region= REGION \
--project= PROJECT_ID
Create a static route for each remote IP address range that you specified in the
--remote-traffic-selector option in the previous step. Repeat this
command for each remote IP address range. Replace ROUTE_NAME
with a unique name for the route, and replace
REMOTE_IP_RANGE with the appropriate remote IP
address range.
gcloud compute routes create ROUTE_NAME \
--destination-range= REMOTE_IP_RANGE \
--next-hop-vpn-tunnel= TUNNEL_NAME \
--network= NETWORK \
--next-hop-vpn-tunnel-region= REGION \
--project= PROJECT_ID
Note: The gcloud command to create a route uses the default priority
of 1000 . If you need to create a higher priority route, use the
--priority flag with a lower number when you create the route .
You cannot change the priority of a route after the route has been
created; however, you can delete and replace the static route
without needing to re-create the VPN tunnel. For details about how
routes work in your VPC network, see
Routes overview and
Order of routes .
Configure the VM to send and receive traffic
To complete your setup and test whether you can send and receive traffic from the
VM, follow these steps:
Receive traffic
In the Google Cloud console, go to the VM instances page.
In the list of virtual machine instances, find the VM that you created
earlier and click SSH .
Create an IP address alias for the VM using the public IP address that you
reserved earlier. You will be able to receive traffic to the VM after you
complete this step.
Run the following command:
sudo ip address add EXTERNAL_IP_ADDRESS /32 dev eth0
Replace EXTERNAL_IP_ADDRESS with the public IP
address that you reserved earlier.
Send traffic
In the Google Cloud console, go to the VM instances page.
In the list of virtual machine instances, find the VM that you created
earlier and click SSH .
Run the following command to test if you can ping an external IP address:
$ ping -I EXTERNAL_IP_ADDRESS REMOTE_PEER_IP_ADDRESS
PING 10.0.0.1 (10.0.0.1) from EXTERNAL_IP_ADDRESS : 56(84) bytes of data.
64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=4.46 ms
64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=1.11 ms
Replace REMOTE_PEER_IP_ADDRESS with an IP address from
the remote peer's subnet.
To enable the VM to automatically use this interface when sending
traffic to the VPN tunnel, you can create an iptables rule.
For example, run the following command to create an iptables
rule:
$ sudo iptables -t nat -A POSTROUTING --destination REMOTE_PEER_SUBNET -j SNAT --to-source EXTERNAL_IP_ADDRESS
Replace REMOTE_PEER_SUBNET with the remote peer's subnet.
Run the following commands to test the Cloud VPN tunnel:
$ ping REMOTE_PEER_IP_ADDRESS
PING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.
64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=3.48 ms
64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=1.42 ms
$ ping EXTERNAL_IP_ADDRESS
PING 35.195.72.19 (35.195.72.19) 56(84) bytes of data.
64 bytes from 35.195.72.19: icmp_seq=1 ttl=64 time=0.033 ms
64 bytes from 35.195.72.19: icmp_seq=2 ttl=64 time=0.062 ms
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
