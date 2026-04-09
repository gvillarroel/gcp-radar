---
title: "Establish 99.9% availability for Dedicated Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/tutorials/dedicated-creating-999-availability
  title: "Establish 99.9% availability for Dedicated Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Establish 99.9% availability for Dedicated Interconnect | Google Cloud Documentation
Skip to main content
Technology areas
close
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Cross-product tools
close
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
More
/
Console
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
Google Developer Program View your saved pages and finish your Google Developer Profile setup here.
Network Connectivity
Cloud Interconnect
Start free
Overview
Guides
Reference
Support
Resources
More
Technology areas
More
Overview
Guides
Reference
Support
Resources
Cross-product tools
More
Console
Cloud Interconnect
Network Connectivity home
Cloud Interconnect overview
Options for connecting to multiple VPC networks
Best practices
Key terms
Topology for production-level applications (recommended)
Topology for non-critical applications
Dedicated Interconnect
Overview
Colocation facilities
Create Dedicated Interconnect connections
Provisioning overview
Order a connection
Retrieve LOA-CFAs
Test connections
Create VLAN attachments
Configure on-premises routers
Manage Dedicated Interconnect connections
View VLAN attachments and groups
Modify VLAN attachments
Disable or enable VLAN attachments
Duplicate a connection for redundancy
Use connections in other projects
Configure traffic differentiation
List locations
View connection details
Get diagnostics
Modify connection groups
Modify connections
Delete VLAN attachments
Delete connections
Change reliability options
Establish 99. 99% availability
Establish 99. 9% availability
Partner Interconnect
Overview
Supported service providers
Create Partner Interconnect connections
Provisioning overview
Create VLAN attachments
Request connections
Activate connections
Configure on-premises routers
Manage Partner Interconnect connections
Duplicate a VLAN attachment for redundancy
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Delete VLAN attachments
Establish 99. 99% availability
Establish 99. 9% availability
Cross-Cloud Interconnect
Overview
Create Cross-Cloud Interconnect connections
Connect to AWS
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order AWS ports
Configure Google Cloud resources
Configure your AWS resources
Verify your connections
Connect to Azure
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Azure ports
Configure your Google Cloud resources
Configure your Azure resources
Verify your connections
Connect to OCI
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order OCI ports
Configure your Google Cloud resources
Configure your OCI resources
Verify your connections
Connect to Alibaba Cloud
Overview
Choose your locations
Order Cross-Cloud Interconnect connections
Order Alibaba Cloud ports
Configure your Google Cloud resources
Configure your Alibaba Cloud resources
Verify your connections
Manage Cross-Cloud Interconnect connections
View VLAN attachments
Modify VLAN attachments
Disable VLAN attachments
Use connections in other projects
Configure traffic differentiation
View connection details
Get diagnostics
Disconnect networks
Delete connections
Partner Cross-Cloud Interconnect for OCI
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Paired locations
Create VLAN attachments
Request OCI connections
Activate connections
Partner Cross-Cloud Interconnect for AWS
Overview
Create Partner Cross-Cloud Interconnect connections
Provisioning overview
Choose a paired location
Create a connection initiated from Google Cloud
Create a connection initiated from AWS
Manage connections
Cross-Site Interconnect
Overview
Colocation facilities
Create Cross-Site Interconnect Connections
Provisioning overview
Check bandwidth quotas and limits
Order connections
Retrieve LOA-CFAs
Test connections
Create a cross-site network
Configure on-premises routers
Manage Cross-Site Interconnect connections
View cross-site networks
Modify a cross-site network
Disable a wire group
Delete a cross-site network
List locations
View connection details
Get diagnostics
Delete connections
Deploy
HA VPN over Cloud Interconnect
Overview
Deployment process
Terraform examples
Assign internal IP address ranges to HA VPN gateways
Configure HA VPN over Cloud Interconnect
Delete HA VPN over Cloud Interconnect
MACsec for Cloud Interconnect
Overview
Set up MACsec
Enable MACsec
Disable MACsec
Modify fail-open behavior
Get MACsec keys
View MACsec status
Rotate MACsec keys
Troubleshoot MACsec
Manage
Restrict Cloud Interconnect usage
Manage resources by using custom constraints
Create and manage tags
Calculate network throughput over Cloud Interconnect
Monitor and troubleshoot
Fix SLA eligibility problems
Monitor connections
Troubleshooting
Infrastructure maintenance events
Failure scenarios and impacts
AI and ML
Application development
Application hosting
Compute
Data analytics and pipelines
Databases
Distributed, hybrid, and multicloud
Industry solutions
Migration
Networking
Observability and monitoring
Security
Storage
Access and resources management
Costs and usage management
Infrastructure as code
SDK, languages, frameworks, and tools
On this page
Requirements Example topology
Creating a 99.9% topology Order Cloud Interconnect connections
Create a Cloud Router
Create VLAN attachments
Configure on-premises routers
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Establish 99. 9% availability for Dedicated Interconnect
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Requirements Example topology
Creating a 99.9% topology Order Cloud Interconnect connections
Create a Cloud Router
Create VLAN attachments
Configure on-premises routers
What's next
Note: For production-level applications, see
Establish 99.99% availability for Dedicated Interconnect .
Google recommends this configuration for high availability.
The topology for 99.9%
availability
is suitable for non-critical applications that
can tolerate some downtime. For example, your organization might do batch
uploads for which the timing of the operation isn't critical. If a connection
isn't available, the operation continues when connectivity is restored.
For Cloud Interconnect terminology used on this page, see
Key terms .
For information about creating redundant Cloud Interconnect connections that have
sufficient capacity in a failover scenario, see
Best practices .
Requirements
The following resources and settings are required to achieve 99.9% availability:
At least two Cloud Interconnect connections. The connections must
be located in the same metropolitan area (metro), but in different edge
availability domains (metro availability zones). For increased reliability,
consider using edge availability domains in separate facilities in the same
metro.
At least one Cloud Router.
Each Cloud Interconnect connection must be attached to the Cloud Router.
Note: When Cloud Router is connected to VLAN attachments in
different edge availability domains, Google Cloud uses two
software tasks
for redundancy.
Even though only one Cloud Router is required, topologies with
two Cloud Routers, one for each VLAN attachment, also meet the
SLA requirement.
Example topology
The following example topology shows two Cloud Interconnect connections
in the same metro but in different colocation facilities: lga-zone1-16 and
lga-zone2-1422 . The Cloud Router is in the vpc1 network in the
us-central1 Google Cloud region .
Redundant connections for 99.9% availability (click to enlarge)
Creating a 99.9% topology
The following sections walk through the steps for creating this topology.
To create a topology that's tailored for you, replace the sample input
values with your own. For example, replace the vpc1 network name with your
VPC network name.
Order Cloud Interconnect connections
Order duplicate connections by using the Google Cloud console or
the Google Cloud CLI.
Console gcloud
More
In the Google Cloud console, go to the Interconnect Hybrid
Connectivity page.
Go to Interconnect Hybrid Connectivity
Click Get started .
Select Dedicated Interconnect , and then click Continue .
Select Order new Dedicated Interconnect , and then click Continue .
Specify the details for the Cloud Interconnect connection:
Name : Enter int-lga1 .
Description : Enter Example Cloud Interconnect connection in LGA ZONE1 .
Location : Choose Digital Realty | Telx New York (111 8th Ave) ,
which is the PeeringDB name for the lga-zone1-16 location.
Capacity : Use the default capacity (10 Gb/s).
Click Next .
Specify the details for the redundant Cloud Interconnect connection:
Name : Enter int-lga2 .
Description : Enter Example Cloud Interconnect connection in LGA ZONE2 .
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
Review your order. Check that your Cloud Interconnect connections details and
contact information are correct. If everything is correct, click Place
order . If not, go back and edit the connection details.
On the order confirmation page, review the next steps, and then click
Done .
Order two Cloud Interconnect connections with the names int-lga1 and int-lga2 :
gcloud compute interconnects create int-lga1 \
--customer-name "The Customer" \
--description "Example Cloud Interconnect connection in LGA ZONE1" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location lga-zone1-16 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
gcloud compute interconnects create int-lga2 \
--customer-name "The Customer" \
--description "Example Cloud Interconnect connection in LGA ZONE2" \
--interconnect-type DEDICATED \
--link-type ETHERNET_10G_LR \
--location lga-zone2-1422 \
--requested-link-count 1 \
--noc-contact-email customer@customer.com
After you order Cloud Interconnect connections, Google emails you a confirmation
and allocates ports for you. When the allocation is complete, Google generates
LOA-CFAs for
your connections and emails them to you. All the automated emails are sent
to the NOC contact and the person who ordered the connections.
You are able to use the Cloud Interconnect connections only after your connections
have been provisioned and tested. For more information about the provisioning
process, see the
Provisioning overview .
Create a Cloud Router
To create a Cloud Router, follow the instructions in this section.
Make sure that your Cloud Router advertises the same
prefixes on all links, possibly with different priorities.
Console gcloud
More
In the Google Cloud console, go to the Create a
Cloud Router page.
Go to Create a Cloud Router
Specify the Cloud Router details:
Name : Enter router1 for the name of the
Cloud Router.
Network : Select vpc1 , which is the name of the
network where the on-premises network extends to.
Region : Select us-central1 , which is the region where
the Cloud Router advertises all subnets, as shown in the
example topology.
Google ASN : Enter 64513 , which is the ASN for the
example Cloud Router.
Under Routes , select Advertise all subnets visible to the
Cloud Router (default) , and then click Create .
Create a Cloud Router in the vpc1 network in the
us-central1 region; use ASN 64513 :
gcloud compute routers create router1 \
--asn 64513 \
--network vpc1 \
--region us-central1
You must verify that both your Cloud Router and the on-premises
routers are configured correctly to advertise the same prefixes for the
respective direction on each link. After configuring your Cloud Router,
check the router status by following instructions in
Get Cloud Router status .
Create VLAN attachments
After your Cloud Interconnect connections are ready to use (in the ACTIVE state),
create VLAN attachments to connect the connections with
Cloud Router. Create duplicate attachments, one for each connection.
In the example, int-lga1 and int-lga2 are connected to router1 .
Console gcloud
More
In the Google Cloud console, go to the VLAN attachments tab.
Go to VLAN attachments
Click Add VLAN attachment .
Select Dedicated Interconnect , and then click Continue .
Select In this project .
Select the int-lga1 Cloud Interconnect connection, and then click Continue .
Select Add VLAN attachment :
Name : Enter attachment-lga1-central1 .
Router : Select the router1 Cloud Router.
Click Create . The attachment takes a few moments to create.
For the attachment, to add a BGP session to router1 , click
Configure . The VLAN attachment has already populated the Google and
Peer BGP IP addresses.
Record the IP addresses, ASNs, and VLAN tag for each attachment. This
information is required to configure the on-premises router.
To add the BGP session, click Save configuration . The BGP sessions
are inactive until you configure BGP on your on-premises router.
Create another attachment named attachment-lga2-central1 for the
int-lga2 connection. Use router1 for the
attachment's Cloud Router.
Create two attachments, one for the int-lga1 Cloud Interconnect connection
and the router1 Cloud Router and another for the int-lga2
connection and router1 :
gcloud compute interconnects attachments dedicated create attachment-lga1-central1 \
--interconnect int-lga1 \
--router router1
gcloud compute interconnects attachments dedicated create attachment-lga2-central1 \
--interconnect int-lga2 \
--router router1
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
customerRouterIpAddress : The customer router IP address,
which is 169.254.58.50/29 . On the Cloud Router, specify this
address as the BGP peer address on the interface that has the
Cloud Router IP address assigned to it. Assign this address
to the VLAN subinterface on the on-premises router.
On the router1 Cloud Router, add an interface for the
attachment-lga1-central1 attachment:
gcloud compute routers add-interface router1 \
--interface-name router1-1 \
--interconnect-attachment attachment-lga1-central1 \
--ip-address 169.254.58.49 \
--mask-length 29 \
--region us-central1
Add a BGP peer to the interface; for this example, the on-premises ASN is
12345 :
gcloud compute routers add-bgp-peer router1 \
--interface router1-1 \
--peer-name central1 \
--peer-ip-address 169.254.58.50 \
--peer-asn 12345 \
--region us-central1
Describe the attachment-lga2-central1 attachment, and then configure
another BGP session on the router1 Cloud Router.
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
Dedicated Interconnect provisioning overview .
To help you solve common issues that you might encounter when using
Cloud Interconnect, see
Troubleshooting .
Was this helpful?
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
Products and pricing
See all products
Google Cloud pricing
Google Cloud Marketplace
Contact sales
Support
Community forums
Support
Release Notes
System status
Resources
GitHub
Getting Started with Google Cloud
Code samples
Cloud Architecture Center
Training and Certification
Engage
Blog
Events
X (Twitter)
Google Cloud on YouTube
Google Cloud Tech on YouTube
About Google
Privacy
Site terms
Google Cloud terms
Manage cookies
Our third decade of climate action: join us
Sign up for the Google Cloud newsletter
Subscribe
English
Deutsch
Español
Español – América Latina
Français
Indonesia
Italiano
Português
Português – Brasil
עברית
中文 – 简体
中文 – 繁體
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
