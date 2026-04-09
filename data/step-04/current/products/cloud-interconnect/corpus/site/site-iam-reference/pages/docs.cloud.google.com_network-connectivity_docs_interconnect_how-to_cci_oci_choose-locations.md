---
title: "Choose your locations \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/choose-locations
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/oci/choose-locations
  title: "Choose your locations \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Choose your locations | Cloud Interconnect | Google Cloud Documentation
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
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
Establish 99.99% availability
Establish 99.9% availability
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
Best practices for selecting a location
Factors affected by location VLAN attachments
Edge availability domains
Colocation facilities
List of supported locations
Verify availability
Note locations and regions
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Choose your locations
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Best practices for selecting a location
Factors affected by location VLAN attachments
Edge availability domains
Colocation facilities
List of supported locations
Verify availability
Note locations and regions
Note: This page includes instructions about OCI products. Google doesn't
guarantee that this guidance is up to date or that the sample configuration
choices are ideal for your use case. For the most current information, refer to
the
OCI documentation
.
When you use Cross-Cloud Interconnect, Google provisions physical connections on your
behalf between the Google Cloud network and the Oracle Cloud Infrastructure (OCI) network.
Before Google can establish these connections, you must order ports from both Google and
OCI. In preparation for that process, identify the Google Cloud locations
and the corresponding OCI locations that you want to use for your connections.
Best practices for selecting a location
When deciding where to place your connections, consider questions such as the following:
Where are most of your Google Cloud resources?
Where are most of your OCI resources?
If your resources from both clouds are in the same place, then the choice is simple.
However, if they are not, consider whether you want your connections to be closer to your
Google Cloud resources or closer to your OCI resources. If the connections
are closer to your OCI resources, then your traffic spends more time
traveling on the Google network, which in general is desirable. However, you should also consider
the outbound data transfer costs that you're likely to incur from both clouds.
Factors affected by location
This section describes factors that are affected by your location choice.
VLAN attachments
After your Cross-Cloud Interconnect connection is established, you must configure
VLAN attachments in Google Cloud. A VLAN attachment is a
logical connection between your remote cloud network and a single region in your
Virtual Private Cloud (VPC) network.
When you choose a location for your ports, you limit the number of regions where you can place
both VLAN attachments and FastConnect virtual circuits. For this reason, the supported locations
table includes a column for the Google Cloud and OCI regions that are served by each port
location.
Note: In Google Cloud, the location of the VLAN attachment
doesn't have to limit which Google Cloud regions receive your OCI routes.
To advertise OCI routes to all of your Google Cloud regions, configure
global
dynamic routing .
Edge availability domains
Each metropolitan area has two Google Cloud edge availability domains. Two domains in the
same metropolitan area are not scheduled to be down for maintenance at the same time. For this
reason, when you select a location for a primary and redundant port,
each port must use a different edge availability domain within the same metropolitan area. This is
true regardless of how you order your ports. However, when you use the Google Cloud CLI, you
must specify each edge availability domain explicitly. When you use the Google Cloud console, you
simply select a location, and Google Cloud reserves a port for you in each domain.
In the gcloud CLI version of the location name, the edge availability domain is the
second piece of information. For example, if the location name is iad-zone1-1 ,
the edge availability domain is zone1 . If the location name is
iad-zone2-1 , the edge availability zone is zone2 .
Colocation facilities
Google typically provisions each connection within a single colocation facility. However, sometimes
connections are created between adjoining facilities that are operated by the same provider. In
either case, generally you don't need to know the facility name. For this reason, the supported
locations table does not identify specific facilities.
List of supported locations
The following table lists the supported OCI locations and the corresponding
Google Cloud locations.
You must specify the Google Cloud location of your Cross-Cloud Interconnect
port, and additionally specify where in your other cloud provider to connect it. This latter
OCI location is referred to as the remote location in this documentation
set and within Google Cloud. Make sure to use the remote location name
when you order the Cross-Cloud Interconnect. Your remote cloud provider has a different,
although similar, name for the location, which you use when you order the port with that
cloud provider.
For each location name, some syntax variations exist. For example:
The remote location name varies depending on whether you are interacting with
OCI or Google Cloud.
When interacting with Google Cloud, the Google Cloud console displays the remote location
description next to the location name to help you choose the correct location.
In Google Cloud, the Google Cloud console Cloud Interconnect location (not
the remote location) shows facility information rather than the actual Cloud Interconnect
location name.
Note: You can also use the gcloud CLI to list locations.
For more information, see the reference page for the
gcloud compute interconnects remote-locations list command .
Note: For the most up-to-date information about OCI locations, see
OCI Data Regions
in the Oracle documentation.
Google Cloud regions
Oracle Cloud Infrastructure regions
Metropolitan area
Remote location
Google Cloud locations
Google Cloud
Oracle Cloud Infrastructure
asia-east1
asia-east2
asia-northeast1
asia-northeast2
asia-northeast3
asia-southeast1
asia-southeast2
Singapore (Singapore)
Singapore
oci-equinix-sg1
Equinix SG1
sin-zone1-2260
sin-zone2-2260
asia-east1
asia-east2
asia-northeast1
asia-northeast2
asia-northeast3
asia-southeast1
asia-southeast2
Japan East (Tokyo)
Tokyo
oci-equinix-ty4
Equinix TY4
nrt-zone1-1893
nrt-zone2-1893
australia-southeast1
australia-southeast2
Australia Southeast (Melbourne)
Melbourne
oci-equinix-me1
Equinix ME1
mel-zone1-1988
mel-zone2-1988
me-central1
me-central2
me-west1
europe-central1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west6
europe-west8
europe-west9
europe-west10
europe-west12
Netherlands Northwest (Amsterdam)
Amsterdam
oci-equinix-am4
Equinix AM4
ams-zone1-1320
ams-zone2-1320
me-central1
me-central2
me-west1
europe-central1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west6
europe-west8
europe-west9
europe-west10
europe-west12
Germany Central (Frankfurt)
Frankfurt
oci-equinix-fr5
Equinix FR5
fra-zone1-683
fra-zone2-683
me-central1
me-central2
me-west1
europe-central1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west6
europe-west8
europe-west9
europe-west10
europe-west12
UK South (London)
UK Gov South (London)
London
oci-equinix-ld6
Equinix LD6
lhr-zone1-2262
lhr-zone2-2262
me-central1
me-central2
me-west1
europe-central1
europe-central2
europe-north1
europe-southwest1
europe-west1
europe-west2
europe-west3
europe-west4
europe-west6
europe-west8
europe-west9
europe-west10
europe-west12
Spain Central (Madrid)
Madrid
oci-interxion-mad2
Interxion MAD2
mad-zone1-130
mad-zone2-130
asia-southeast1
asia-south1
asia-south2
India West (Mumbai)
Mumbai
oci-equinix-mb1
Equinix MB1
bom-zone1-2310
bom-zone2-2310
northamerica-northeast1
northamerica-northeast2
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
US East (Ashburn)
US Gov East (Ashburn)
Washington D.C.
oci-equinix-dc6
Equinix DC6
iad-zone1-1
iad-zone2-1
northamerica-northeast1
northamerica-northeast2
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
US Midwest (Chicago)
Chicago
oci-coresite-ch1
Coresite CH1
ord-zone1-440
ord-zone2-440
northamerica-northeast1
northamerica-northeast2
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
Canada Southeast (Montréal)
Montréal
oci-cologix-mtl3
Cologix MTL3
yul-zone1-1944
yul-zone2-1944
northamerica-northeast1
northamerica-northeast2
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
US West (San Jose)
San Francisco
oci-equinix-sv10
Equinix SV10
sjc-zone1-6
sjc-zone2-6
northamerica-northeast1
northamerica-northeast2
us-central1
us-east1
us-east4
us-east5
us-south1
us-west1
us-west2
us-west3
us-west4
Canada Southeast (Toronto)
Toronto
oci-cologix-tor1
Cologix TOR1
yyz-zone1-392
yyz-zone2-392
southamerica-east1
southamerica-west1
us-east1
Brazil East (São Paulo)
São Paulo
oci-equinix-sp4
Equinix SP4
gru-zone1-165
gru-zone2-165
Verify availability
After you've identified a location that you want to use, double-check that it has an available
FastConnect port with your intended capacity. This step is helpful because the availability
of ports can change without notice.
If you're working in the OCI console, you can verify availability in an OCI
region while ordering your connections. To verify availability in advance, use Oracle Cloud
Shell.
Oracle Cloud Shell
More
Use the oci network cross-connect-port-speed-shape list command
to get information about ports that are available in your region. For example:
oci network cross-connect-port-speed-shape list \
--compartment-id= ORACLE_CLOUD_ID \
--region= REGION
--all
Replace the following:
ORACLE_CLOUD_ID : the
Oracle-assigned unique ID
for your tenancy; in OCI, a tenancy is similar to a Google Cloud
organization
REGION : the region where you want to locate your
connection; if you need help selecting a region, refer to the table in the prededing
section
In the command output, look for 10-Gbps and 100-Gbps ports. For example, the
following output shows that ports are available in both capacities:
{
"data": [
{
"name": "100 Gbps",
"port-speed-in-gbps": 100
},
{
"name": "10 Gbps",
"port-speed-in-gbps": 10
},
{
"name": "1 Gbps",
"port-speed-in-gbps": 1
}
]
}
Note locations and regions
After you've reviewed the previous sections, make a note of the following values:
The remote location, as it's known in Google Cloud, and the Google Cloud location.
You need these values when you
order your Cross-Cloud Interconnect connections .
The remote location, as it's known in OCI, and the region where you want
to place the connection resources. You need these values when you
order your OCI ports and
configure your OCI resources.
The Google Cloud region where you want to place your VLAN attachments. You need this
value when you create the attachment, as described in
Configure your Google Cloud resources .
Previous
arrow_back
Overview
Next
Order Cross-Cloud Interconnect connections
arrow_forward
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
Español – América Latina
Français
Português – Brasil
中文 – 简体
日本語
한국어
close
Welcome to Cloud Shell
Cloud Shell is a development environment that you can use in the browser:
Activate Cloud Shell to explore Google Cloud with a terminal and an editor
Start a free trial to get $300 in free credits
Activate Cloud Shell
Start a free trial
