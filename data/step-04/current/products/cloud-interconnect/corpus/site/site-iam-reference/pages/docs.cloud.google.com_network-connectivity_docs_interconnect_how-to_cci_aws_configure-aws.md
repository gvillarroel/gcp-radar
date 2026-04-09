---
title: "Configure your AWS resources \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/configure-aws
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/aws/configure-aws
  title: "Configure your AWS resources \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure your AWS resources | Cloud Interconnect | Google Cloud Documentation
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
Establish 99.99% availability
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
Before you begin
Create a Direct Connect gateway
Create a virtual private interface
Create a virtual private gateway
Attach the virtual private gateway to your AWS VPC
Associate the virtual private gateway with the Direct Connect gateway
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure your AWS resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create a Direct Connect gateway
Create a virtual private interface
Create a virtual private gateway
Attach the virtual private gateway to your AWS VPC
Associate the virtual private gateway with the Direct Connect gateway
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
AWS documentation
.
After you configure your Google Cloud resources, configure your Amazon
Web Services (AWS) resources.
Before you begin
Before starting, you must already have an AWS VPC. For more information,
see
Create a VPC .
Create a Direct Connect gateway
A Direct Connect gateway
connects your AWS port to your AWS VPC.
AWS console AWS CLI
More
To create a Direct Connect gateway, complete the following steps:
Go to the Direct Connect gateway page.
Click Create Direct Connect gateway .
On the Create Direct Connect gateway page, enter the required
information:
Enter a Name for the gateway.
Enter an Amazon-side ASN . This value must match the Peer ASN
value that you used when you
configured a Border Gateway Protocol (BGP) session in
Google Cloud .
Click Create Direct Connect gateway .
To create a Direct Connect gateway, use the
create-direct-connect-gateway command .
For example:
aws directconnect create-direct-connect-gateway \
--direct-connect-gateway-name GATEWAY_NAME \
--amazon-side-asn AMAZON_ASN
Replace the following:
GATEWAY_NAME : the name of the gateway
AMAZON_ASN : the ASN that you're using to represent
Amazon; this value must match the peer-asn value when you
created the Border Gateway Protocol (BGP) session on the
Cloud Router
Create a virtual private interface
Before you can begin using your Direct Connect gateway, you must create a
private virtual interface
for each of your LAGs. A private virtual interface lets you access an Amazon
VPC by using private IP addresses.
The function of a private virtual interface is similar to the function of a
Google Cloud VLAN attachment. However, one difference is that you configure a
BGP peering session as part of the process of creating the interface, rather
than doing it later.
Note: To complete this procedure, you need values from your VLAN attachments
in Google Cloud. Specifically, you need the IP addresses that represent
the Google Cloud and AWS sides of the peering. For help finding these
values, see
Get details about your VLAN attachments .
AWS console AWS CLI
More
To create a private virtual interface, complete the following steps:
Go to the Virtual interfaces page.
Click Create virtual interface .
On the Create virtual interface page, enter the required information:
Leave Type set to Private .
Enter a Virtual interface name .
Select the appropriate Connection .
Set Virtual interface owner to the appropriate value.
Leave Gateway type set to
Direct Connect Gateway -- Recommended .
Set Direct Connect gateway to the gateway that you just created.
In the Virtual Local Area Network (VLAN) field, enter the value
that you used for VLAN ID when you
created your VLAN attachments in
Google Cloud .
Set BGP ASN to the value of the ASN used by your Google
Cloud Router.
Expand Additional settings . In the form that is displayed, some
values are labeled as optional, but they are required by
Cross-Cloud Interconnect. Do the following:
Leave Address family - optional set to IPv4 .
In the Your router peer ip - optional
field, enter the address on your
VLAN attachment
that represents Google Cloud; that is, the
Cloud Router BGP IP value.
In the Amazon router peer IP - optional
field, enter the address on your VLAN attachment on your
VLAN attachment
AWS; that is, the BGP IP Peer value.
In the BGP authentication key - optional
field, enter the same MD5 authentication key that you used when you
configured a BGP peering session in
Google Cloud .
Click Create virtual interface .
Repeat steps 1 through 4 for your second LAG.
To create virtual interfaces, you use the
aws directconnect create-private-virtual-interface command .
Complete the following steps:
Create the virtual interface for your first LAG:
aws directconnect create-private-virtual-interface \
--connection-id DXLAG_ID \
--region REGION \
--new-private-virtual-interface `echo '{
"virtualInterfaceName": " INTERFACE_NAME ",
"vlan": VLAN_ID ,
"asn": GOOGLE_SIDE_ASN ,
"authKey": " YOUR_KEY ",
"amazonAddress": " AMAZON_ADDRESS ",
"customerAddress": " GOOGLE_ADDRESS ",
"directConnectGatewayId": " GATEWAY_ID "
}' | jq -r tostring`
Replace the following:
DXLAG_ID : the ID of the LAG; if you
don't have this value, retrieve it by using the
aws directconnect describe-lags command
REGION : the region where the LAG is located
INTERFACE_NAME : a name for the new private virtual
interface
VLAN_ID : the same ID that you used when
creating your VLAN attachments in
Google Cloud
GOOGLE_SIDE_ASN : the Google Cloud Router ASN
YOUR_KEY : the same MD5 authentication key you used
when you
configured a BGP peering session in
Google Cloud
AMAZON_ADDRESS : the address that represents
AWS on your VLAN attachment ;
that is, the customerRouterIpAddress value
GOOGLE_CLOUD_ADDRESS : the address that represents
Google Cloud on your VLAN attachment;
that is, the cloudRouterIpAddress value
GATEWAY_ID : the ID of your Direct Connect gateway
Create the virtual interface for your second LAG:
aws directconnect create-private-virtual-interface \
--connection-id DXLAG_ID_2 \
--region REGION_2 \
--new-private-virtual-interface `echo '{
"virtualInterfaceName": " INTERFACE_NAME_2 ",
"vlan": VLAN_ID_2 ,
"asn": GOOGLE_SIDE_ASN ,
"authKey": " YOUR_KEY ",
"amazonAddress": " AMAZON_ADDRESS_2 ",
"customerAddress": " GOOGLE_ADDRESS_2 ",
"directConnectGatewayId": " GATEWAY_ID "
}' | jq -r tostring`
Replace the following:
DXLAG_ID_2 : the connection ID of your second
LAG; if you don't have this value, retrieve it by using the
aws directconnect describe-lags command
REGION_2 : the region where the LAG is located
INTERFACE_NAME_2 : a name for the new private
virtual interface
VLAN_ID_2 : the same ID that you used when
creating your VLAN attachments in Google Cloud
GOOGLE_SIDE_ASN : the Google Cloud Router ASN
YOUR_KEY : the same MD5 authentication key you used
when you
configured a BGP peering session in Google Cloud
AMAZON_ADDRESS_2 : the address that represents
AWS on your VLAN attachment ;
that is, the customerRouterIpAddress value
GOOGLE_ADDRESS_2 : the address that represents
Google Cloud on your VLAN attachment;
that is, the cloudRouterIpAddress value
GATEWAY_ID : the ID of your Direct Connect gateway
Create a virtual private gateway
A virtual private gateway provides access to an AWS VPC.
AWS console AWS CLI
More
To create a virtual private gateway, do the following:
Go to the Virtual private gateways page.
Click Create virtual private gateway .
On the Create virtual private gateway page, enter the required
information:
Optional: enter a Name tag for the gateway.
For Autonomous System Number (ASN) , select an ASN to represent
AWS. Make sure you match the value that you entered for Peer ASN when
you
configured a BGP peering session in Google Cloud .
Do one of the following:
If you used 64512 , select Amazon default ASN .
If you used something else, select Custom ASN and enter the
appropriate value.
Click Create virtual private gateway .
To create a virtual private gateway, use the
create-vpn-gateway command .
For example:
aws directconnect create-vpn-gateway \
--type ipsec.1 \
--region REGION \
--amazon-side-asn ASN
Replace the following:
REGION : the name of your region
AMAZON_ASN : the ASN that you're using to represent
Amazon; it must be the same value that you used when you
created the BGP peer on the Google Cloud Cloud Router
Attach the virtual private gateway to your AWS VPC
For the virtual private gateway to work, you must attach it to your AWS VPC.
AWS console AWS CLI
More
To attach a private virtual interface to your AWS VPC, complete the
following steps:
Go to the Virtual private gateways page.
Click the name of the virtual private gateway that you just created.
Click on the Actions menu, and select Attach to VPC .
On the Attach to VPC page, select the appropriate VPC.
Click Attach to VPC .
To attach the gateway to your VPC, use the
aws ec2 create-private-virtual-interface command .
For example:
aws ec2 attach-vpn-gateway \
--vpn-gateway-id VIRTUAL_PRIVATE_GATEWAY_ID \
--vpc-id VPC_ID \
--region REGION
Replace the following:
VIRTUAL_PRIVATE_GATEWAY_ID : the ID of your
virtual private gateway
VPC_ID : the ID of your AWS VPC
REGION : the region where your virtual private
gateway is located
Associate the virtual private gateway with the Direct Connect gateway
To connect your Direct Connect gateway to your AWS VPC, associate the
virtual private gateway with the Direct Connect gateway.
AWS console AWS CLI
More
To attach a private virtual interface to your AWS VPC, complete the
following steps:
Go to the Direct Connect gateway page.
Click the name of your gateway.
Click Gateway associations .
Click Associate gateway .
On the Associate gateway page, set Gateways to the name of your
virtual private gateway.
Click Associate gateways .
To associate your virtual private gateway to your Direct Connect, you use the
aws directconnect create-direct-connect-gateway-association command . For example:
aws directconnect create-direct-connect-gateway-association \
--direct-connect-gateway-id GATEWAY_ID \
--virtual-gateway-id VIRTUAL_PRIVATE_GATEWAY_ID \
--region REGION
Replace the following:
GATEWAY_ID : the ID of your Direct Connect gateway
VIRTUAL_PRIVATE_GATEWAY_ID : the ID of your
virtual private gateway
REGION : the region where your Direct Connect
gateway is located
Previous
arrow_back
Configure Google Cloud resources
Next
Verify your connections
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
