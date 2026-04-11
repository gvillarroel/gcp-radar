---
title: "Establish 99.99% availability for Dedicated Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-9999-availability
  title: "Establish 99.99% availability for Dedicated Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Send feedback
Establish 99.99% availability for Dedicated Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
The following configuration uses Dedicated Interconnect to
achieve 99.99% availability .
Google recommends this configuration for production-level applications, such as
mission-critical operations that have a low tolerance for downtime.
For Cloud Interconnect terminology used on this page, see
Key terms .
For information about creating redundant Dedicated Interconnect
connections that have sufficient capacity in a failover scenario, see
Best practices .
Requirements
The following resources and settings are required to achieve 99.99%
availability:
At least four Dedicated Interconnect connections, two
connections in one metropolitan area (metro) and two connections in another
metro. Connections that are in the same metro must be placed in different
edge availability domains
(metro availability zones) to achieve 99.99% availability. Placing
Dedicated Interconnect connections in two separate edge
availability domains within the same metro is important because maintenance
windows are coordinated across edge availability domains within a metro,
while maintenance windows are not coordinated across metros.
At least two Cloud Routers placed in at least two distinct
Google Cloud regions . Even if all of
your virtual machine (VM) instances reside in a single region, you must
place Cloud Routers in at least two regions. If a region-wide issue
occurs, Google Cloud can reroute traffic through the other region to
your VMs. Each Cloud Router must be attached to a pair of
Dedicated Interconnect connections in a metro (two VLAN
attachments for each Cloud Router).
When Cloud Router is connected to VLAN attachments in different
edge availability domains, Google Cloud uses two software
tasks
for redundancy. Even though only two Cloud Routers are required,
topologies with four Cloud Routers, one for each VLAN attachment,
also meet the SLA requirement.
You must make sure that your Cloud Router advertises the same
prefixes on all links, possibly with different priorities.
The dynamic routing mode for the Virtual Private Cloud (VPC) network must be
global. With global dynamic routing, Cloud Router can advertise all
subnets and propagate learned routes to all subnets regardless of the
subnet's region.
Depending on your availability requirements, you can have two routers in
your on-premises network, each router connecting to one of the
Google Cloud regions.
Example topology
The following example topology shows four Dedicated Interconnect
connections in two different metros and different edge availability domains:
lga-zone1-16 , lga-zone2-1422 , iad-zone1-1 , and iad-zone2-1 . The
Cloud Routers (one for each region) are in the vpc1 network in the
us-central1 and us-east1 regions. Each router has its own Border Gateway
Protocol (BGP) session.
Redundant connections for 99.99% availability (click to enlarge)
Configure the preferred path
With global dynamic routing, Cloud Router advertises routes to all
subnets in the VPC network. Cloud Router advertises
routes to remote subnets (subnets outside of the Cloud Router's
region) with a lower priority compared to local subnets (subnets that are in
the Cloud Router's region). For more information, see
Dynamic routing mode
in the Cloud Router documentation.
In the example topology, ingress traffic to the VPC network
prefers to go through the us-central1 region because those routes have a
higher priority compared to routes from the us-east1 region. Traffic traverses
through us-east1 only if the connections in us-central1 fail.
You can change route priorities when you configure a Cloud Router's BGP
session. The BGP session has an option for an advertised route priority (a MED
value). A lower value means a higher priority. You can, for example, configure
the BGP sessions in us-east1 with a higher priority, making that region the
preferred path. For more information, see
Advertised prefixes and priorities
in the Cloud Router documentation.
Create a 99.99% topology
The following sections walk through the steps for creating this topology. To
create a topology that's tailored for you, replace the sample input values with
your own. For example, replace the vpc1 network name with your
VPC network name.
Change VPC network's dynamic routing mode
For the vpc1 network, change its dynamic routing mode to global.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Select the vpc1 network, and then click
edit Edit .
Under Dynamic routing mode , select Global .
Click Save .
gcloud
gcloud compute networks update vpc1\
--bgp-routing-mode global
Order Dedicated Interconnect connections
Order duplicate connections by using the Google Cloud console or
the Google Cloud CLI.
Console
In the Google Cloud console, go to the Interconnect Hybrid
Connectivity page.
Go to Interconnect Hybrid Connectivity
Click Get started .
Select Dedicated Interconnect , and then click Continue .
Select Order new Dedicated Interconnect , and then click Continue .
Specify the details for the connection:
Name : Enter int-lga1 .
Description : Enter Example connection in LGA ZONE1 .
Location : Choose Digital Realty | Telx New York (111 8th Ave) ,
which is the PeeringDB name for the lga-zone1-16 location.
Capacity : Use the default capacity (10 Gb/s).
Click Next .
Specify the details for the redundant connection:
Name : Enter int-lga2 .
Description : Enter Example connection in LGA ZONE2 .
Location : Choose zColo New York - 60 Hudson St , which is the
PeeringDB name for the lga-zone2-1422 location.
Capacity : Use the default capacity (10 Gb/s).
Click Next .
Specify your contact information:
Company name : Enter The Customer . This name is used
in the LOA-CFA as the party authorized to request a Cloud Interconnect
connection.
Technical contact : Enter customer@customer.com . You
don't need to enter your own address; you are included in all
notifications.
Click Next .
Review your order. Check that the details and contact information of
your connections are correct. If everything is correct, click Place
order . If not, go back and edit the connection details.
On the order confirmation page, review the next steps, and then click
Done .
Order two more connections ( int-iad1 and int-iad2 ) in
the location Equinix Ashburn (DC1-DC11) , which is the PeeringDB name for
the iad-zone1-1 and iad-zone2-1 locations. Because the Ashburn
facility has two zones, the Google Cloud console automatically selects
the same facility but a different zone for the redundant connection.
gcloud
Order four Dedicated Interconnect connections with the names int-lga1 , int-lga2 ,
int-iad1 , and int-iad2 :
gcloud compute interconnects create int-lga1 \
--customer-name "The Customer" \
--description "Example connection in LGA ZONE1" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location lga-zone1-16 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
gcloud compute interconnects create int-lga2 \
--customer-name "The Customer" \
--description "Example connection in LGA ZONE2" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location lga-zone2-1422 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
gcloud compute interconnects create int-iad1 \
--customer-name "The Customer" \
--description "Example connection in IAD ZONE1" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location iad-zone1-1 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
gcloud compute interconnects create int-iad2 \
--customer-name "The Customer" \
--description "Example connection in IAD ZONE2" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location iad-zone2-1 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
After you order Dedicated Interconnect connections, Google emails
you a confirmation and allocates ports for you. When the allocation is complete,
Google generates LOA-CFAs for your
connections and emails them to you. All the automated emails are sent to the NOC
contact and the person who ordered the connections.
You are able to use the connections only after your connections
have been provisioned and tested. For more information about the provisioning
process, see the
Provisioning overview .
Create Cloud Routers
Create two Cloud Routers, one for each region.
Console
In the Google Cloud console, go to the Create a
Cloud Router page.
Go to Create a Cloud Router
Specify the Cloud Router details:
Name : Enter rtr-cent1 for the name of the first
Cloud Router.
Network : Select vpc1 , which is the name of the
network where the on-premises network extends to.
Region : Select us-central1 , which is the region where
the Cloud Router is configured, as shown in the example
topology.
Google ASN : Enter 64513 , which is the ASN for the
example Cloud Router.
Under Routes , select Advertise all subnets visible to the
Cloud Router (default) , and then click Create .
Create one more Cloud Router with the same attributes in the
us-east1 region with the name rtr-east1 .
gcloud
Create a Cloud Router in the vpc1 network in the
us-central1 region; use ASN 64513 :
gcloud compute routers create rtr-cent1 \
--asn 64513 \
--network vpc1 \
--region us-central1
Create a Cloud Router in the vpc1 network in the us-east1
region; use ASN 64513 :
gcloud compute routers create rtr-east1 \
--asn 64513 \
--network vpc1 \
--region us-east1
Create VLAN attachments
After your connections are ready to use (in the ACTIVE state),
create VLAN attachments to connect the connections with
Cloud Routers. Create four attachments, one for each Cloud Interconnect
connection, and use the routers as described in the following list:
rtr-cent1 is connected to int-lga1 and int-lga2
rtr-east1 is connected to int-iad1 and int-iad2
Console
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Click Add VLAN attachment .
Select Dedicated Interconnect , and then click Continue .
Select In this project .
Select the int-lga1 connection, and then click Continue .
Select Add VLAN attachment :
Name : Enter attachment-lga1-central1 .
Router : Select the rtr-cent1 Cloud Router.
Click Create . The attachment takes a few moments to create.
For the attachment, to add a BGP session to rtr-cent1 , click
Configure . The VLAN attachment has already populated the Google and
Peer BGP IP addresses.
Record the IP addresses, ASNs, and VLAN tag for each attachment. This
information is required to configure the on-premises router.
To add the BGP session, click Save configuration . The BGP sessions
are inactive until you configure BGP on your on-premises router.
Create three more attachments for the other connections:
int-lga2 ( rtr-cent1 )
int-iad1 ( rtr-east1 )
int-iad2 ( rtr-east1 )
Record the information for each attachment.
gcloud
Create four attachments:
gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \
--interconnect int-lga1 \
--router rtr-cent1 \
--region us-central1
gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \
--interconnect int-lga2 \
--router rtr-cent1 \
--region us-central1
gcloud compute interconnects attachments dedicated create attachment-iad1-east1 \
--interconnect int-iad1 \
--router rtr-east1 \
--region us-east1
gcloud compute interconnects attachments dedicated create attachment-iad2-east1 \
--interconnect int-iad2 \
--router rtr-east1 \
--region us-east1
Describe the attachment-lga1-central1 attachment to retrieve the
resources that it allocated, such as the VLAN ID and BGP peering
addresses; use these values to configure the Cloud Router and
on-premises router:
gcloud compute interconnects attachments describe attachment-lga1-central1 \
--region us-central1
The previous command outputs the following information:
cloudRouterIpAddress: 169.254.58.49/29
creationTimestamp: '2017-08-15T08:34:11.137-07:00'
customerRouterIpAddress: 169.254.58.50/29
id: '5630382895290821276'
interconnect:
https://www.googleapis.com/compute/v1/projects/customer-project/global/interconnects/int-lga1
kind: compute#interconnectAttachment
name: attachment-lga1-central1
operationalStatus: ACTIVE
privateInterconnectInfo:
tag8021q: 1000
region: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1
router: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/routers/router1
selfLink: https://www.googleapis.com/compute/v1/projects/customer-project/regions/us-central1/interconnectAttachments/attachment-lga1-central1
Record the following values:
tag8021q : Specifies the VLAN ID, which is 1000 . The VLAN
ID identifies traffic that goes across this attachment. Use this
value to configure a tagged VLAN subinterface on the on-premises
router.
cloudRouterIpAddress : The Cloud Router IP address, which
is 169.254.58.49/29 . Assign this address to a Cloud Router
interface, and specify this address as the BGP neighbor on the
on-premises router.
customerRouterIpAddress : The customer router IP address, which is
169.254.58.50/29 . On the Cloud Router, specify this address
as the BGP peer address on the interface that has the
Cloud Router IP address assigned to it. Assign this address
to the VLAN subinterface on the on-premises router.
On the rtr-cent1 Cloud Router, add an interface for the
attachment-lga1-central1 attachment:
gcloud compute routers add-interface rtr-cent1 \
--interface-name rtr-cent1-1 \
--interconnect-attachment attachment-lga1-central1 \
--ip-address 169.254.58.49 \
--mask-length 29 \
--region us-central1
Add a BGP peer to the interface; for this example, the on-premises ASN is
12345 :
gcloud compute routers add-bgp-peer rtr-cent1 \
--interface rtr-cent1-1 \
--peer-name central1 \
--peer-ip-address 169.254.58.50 \
--peer-asn 12345 \
--advertised-route-priority 100 \
--region us-central1
Describe the other attachments, and then similarly configure a new
BGP session on the appropriate Cloud Router.
Configure on-premises routers
To configure the on-premises routers, use the information from the VLAN
attachments. The following example is an excerpt from a Juniper router
configuration. Use the sample as a starting point for configuring your own
routers. For more information, see
Configuring on-premises routers .
interface ae20 {
flexible-vlan-tagging;
native-vlan-id 1;
aggregated-ether-options {
lacp {
active;
}
}
unit 1000 {
vlan-id 1000;
family inet {
address 169.254.58.50/29;
}
}
}
protocols bgp {
group google {
type external;
multihop {
ttl 4;
}
hold-time 60;
peer-as 64513;
local-as 12345;
local-address 169.254.58.50;
neighbor 169.254.58.49 {
...
}
}
}
What's next
To learn more about each of these steps, see the
Dedicated Interconnect Provisioning overview .
To get information about non-critical applications, see
Establish 99.9% availability for Dedicated Interconnect .
To help you solve common issues that you might encounter when using
Cloud Interconnect, see
Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
