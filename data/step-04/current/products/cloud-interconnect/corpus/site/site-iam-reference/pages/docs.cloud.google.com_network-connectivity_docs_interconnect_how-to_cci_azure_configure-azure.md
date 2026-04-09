---
title: "Configure your Microsoft Azure resources \_|\_ Cloud Interconnect \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/configure-azure
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/configure-azure
  title: "Configure your Microsoft Azure resources \_|\_ Cloud Interconnect \_|\_\
    \ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure your Microsoft Azure resources | Cloud Interconnect | Google Cloud Documentation
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
Establish 99.99% availability
Establish 99.9% availability
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
Before you begin Provisioned Cross-Cloud Interconnect connections
Required Azure resources
Create an ExpressRoute circuit
Set up a private peering Calculate the IPv4 subnet values
Create the private peering
Create a virtual network gateway
Create a connection
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure your Microsoft Azure resources
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Provisioned Cross-Cloud Interconnect connections
Required Azure resources
Create an ExpressRoute circuit
Set up a private peering Calculate the IPv4 subnet values
Create the private peering
Create a virtual network gateway
Create a connection
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
Azure documentation
.
After you configure your Google Cloud resources, configure your Microsoft
Azure resources.
Before you begin
This section describes required setup and resources.
Provisioned Cross-Cloud Interconnect connections
Before you configure your Azure resources, make sure that Google has provisioned
your Cross-Cloud Interconnect connections. After this work is complete,
you receive a confirmation email. You can also use the Google Cloud console to
verify that the Cross-Cloud Interconnect ports are active, which
indicates that the connections have been provisioned. For more information, see
Verify that your port is active .
Required Azure resources
Make sure that you have an Azure virtual network (VNet) that includes a subnet.
The subnet must be located in an
Azure region that is supported for your location . For help, see
Quickstart: Use the Azure portal to create a virtual network .
Create an Express Route circuit
An Azure ExpressRoute circuit is similar to a Google Cloud VLAN
attachment. The circuit represents a logical connection between your network
in Azure and your peer network (in this case, Google Cloud).
When you create an ExpressRoute circuit, Azure automatically creates two
circuits: a primary circuit and a redundant one. Azure creates one circuit on
your primary ExpressRoute Direct resource and another on your secondary
ExpressRoute Direct resource. This behavior differs from Google Cloud,
where you had to explicitly create two VLAN attachments.
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Create a circuit
in the Azure documentation.
Go the ExpressRoute Circuits page.
Click Create .
Complete the form displayed on the Basics tab:
Select a Subscription and Resource group .
Select the Region where you
created your ExpressRoute Direct resources .
Enter a Name for the circuit.
Click Next : Configuration .
Complete the form displayed on the Configuration tab:
In the Peering type field, select Direct .
Select the ExpressRoute Direct resource that you created in
Order Azure connections .
If you can't find the name of your connection in the dropdown list, go
back to the previous page and make sure that you selected the correct
region.
Use the Circuit bandwidth field to select the appropriate capacity.
Use the SKU field to select the appropriate level of service.
Important: The value that you select for SKU affects the price of
the circuit. For help with making a choice, see
Azure ExpressRoute pricing .
Click Next : Tags .
Optional: Set up tags for this port.
Click Next : Review + create .
Review the summary of your choices. If you want to make changes, click
Previous and update the form as needed. When the summary looks
correct, click Create .
Azure displays a Deployment is in progress message. After some time,
the message should update to say Your deployment is complete .
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Create a circuit
in the Azure documentation.
Use the
New-AzExpressRouteCircuit command :
$port = Get-AzExpressRoutePort -Name EXPRESS_ROUTE_DIRECT_CONNECTION `
$circuit = New-AzExpressRouteCircuit `
-Name NAME `
-ResourceGroupName RESOURCE_GROUP_NAME `
-Location LOCATION `
-SkuTier SKU_TIER `
-SkuFamily SKU_FAMILY `
-ExpressRoutePort $port `
-BandwidthInGbps CAPACITY
Replace the following:
EXPRESS_ROUTE_DIRECT_CONNECTION : the name of the
ExpressRoute Direct connection that you created in
Order Azure ports
NAME : the name of the new circuit
RESOURCE_GROUP_NAME : the name of the appropriate
resource group
LOCATION : the region where you created the ExpressRoute
Direct connection, as described in
Order Azure ports
SKU_TIER : the SKU tier; possible values are Standard ,
Premium , and Local
Important: The value that you select for SKU affects the price of the
circuit. For help making a choice, see
Azure ExpressRoute pricing .
SKU_FAMILY : if you're using LOCAL
for SKU , choose UnlimitedData ; if you're using STANDARD or
PREMIUM , choose MeteredData
CAPACITY : the capacity of each circuit
Set up a private peering
Cross-Cloud Interconnect uses Border Gateway Protocol (BGP) to
exchange routes between your Virtual Private Cloud (VPC) network and your
Azure network. To that end, configure a private BGP
peering between your ExpressRoute circuits and your Google Cloud VLAN
attachments.
Calculate the IPv4 subnet values
When you create the peering, you provide an IPv4 primary subnet value and an
IPv4 secondary subnet value. These values represent the Google Cloud
VLAN attachments that you want to connect with.
Check the instructions that you provided
When you provided your Azure LOA to Google, you also provided instructions
about how you wanted your ports connected. You need that information to
configure the IPv4 Primary subnet and IPv4 Secondary
subnet fields.
For example, if your primary ExpressRoute Direct port is connected to the
primary Cross-Cloud Interconnect port, do the following:
To calculate the IPv4 Primary subnet value, use details about the primary
VLAN attachment.
To calculate the IPv4 Secondary subnet value, use details about the
redundant VLAN attachment.
If your primary ExpressRoute Direct port is connected to the redundant
Cross-Cloud Interconnect port, do the reverse. That is, to
calculate the IPv4 Secondary subnet value, use details about the primary
VLAN attachment. To calculate the IPv4 Primary subnet value, use details
about the redundant VLAN attachment.
Calculate the subnet values
To calculate the subnet value, start with the customerRouterIpAddress value of
the appropriate VLAN attachment. Subtract 2 from the rightmost segment of the
address (the fourth octet). The resulting value is the address that you enter in
the IPv4 Primary subnet field or in the IPv4 Secondary subnet field.
For example, suppose the customerRouterIpAddress is 169.254.188.18/30 .
In this case, the subnet value would be 169.254.188.16/30 .
Create the private peering
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to create a private
peering, see
Tutorial: Create and modify peering for an ExpressRoute circuit using the Azure portal in the Azure documentation.
Go the ExpressRoute Circuits page.
Click the name of the circuit that you created in
Create an ExpressRoute circuit .
Click Azure private peering .
Complete the form:
Enter the ASN of the Google Cloud Router—for
example, 16550 .
In the Subnets section, enter IPv4 .
Enter the IPv4 Primary subnet and IPv4 Secondary subnet values
that you calculated in
Calculate the IPv4 primary subnet value .
Enter the same VLAN ID that you entered when creating your
VLAN attachments.
If you want to use MD5 authentication, enter your MD5 key in the
Shared key field. Make sure that you enter the same key that you
used when creating BGP sessions in Google Cloud.
Click Save .
Note: For the most up-to-date information about how to create a private
peering, see
Tutorial: Create and modify peering for an ExpressRoute circuit using PowerShell in the Azure documentation.
Use the following commands:
Get-AzExpressRouteCircuit
New-AzExpressRouteCircuitPeeringConfig
Set-AzExpressRouteCircuit
For example:
$circuit = Get-AzExpressRouteCircuit -Name CIRCUIT_NAME `
$circuit.Peerings = New-AzExpressRouteCircuitPeeringConfig `
-Name 'AzurePrivatePeering' `
-PeeringType 'AzurePrivatePeering' `
-PeerASN ASN `
-PrimaryPeerAddressPrefix PRIMARY_SUBNET `
-SecondaryPeerAddressPrefix SECONDARY_SUBNET `
-VlanId VLAN_ID `
-SharedKey MD5_KEY `
Set-AzExpressRouteCircuit -ExpressRouteCircuit $circuit
Replace the following:
CIRCUIT_NAME : the name of your ExpressRoute circuit
ASN : the ASN of the Google Cloud Router
PRIMARY_SUBNET and SECONDARY_SUBNET :
the values that you arrived at in
Calculate the IPv4 primary subnet value
VLAN_ID : the VLAN ID that you specified when creating
your VLAN attachments
MD5_KEY : the key to use for MD5 authentication
(optional)
Create a virtual network gateway
An ExpressRoute virtual network gateway connects your Azure network with a peer
network—in this case, your Google Cloud VPC
network.
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Tutorial: Configure a virtual network gateway for ExpressRoute using the Azure portal in the Azure documentation.
Go the Virtual network gateway page.
Click Create .
Select the appropriate Subscription .
Complete the Instance Details section of the form:
Enter a Name for the gateway.
Select the Region where your connection is located.
Select a Gateway type of ExpressRoute .
Use the SKU field to select the appropriate level of service.
Important: The value that you select for SKU affects the price of
the circuit. For help with making a choice, see
Azure ExpressRoute pricing .
Select a Virtual network that has a subnet in the same region as
your ExpressRoute Direct connection.
Select a Subnet .
Complete the Public IP address section of the form:
For Public IP address , do one of the following:
Select Create new , and then enter a Public IP address name
for the new address and a SKU .
Select Use existing , and select an address that you previously
created.
Select an Availability zone .
Click Next : Tags .
Optional: Set up tags for the gateway.
Click Next : Review + create .
Click Create .
Azure displays a Deployment is in progress
message. After a few minutes, the message should update to say
Your deployment is complete .
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Tutorial: Configure a virtual network gateway for ExpressRoute using PowerShell in the Azure documentation.
Use the following commands:
Get-AzVirtualNetwork
Get-AzVirtualNetworkSubnetConfig
New-AzPublicIpAddress
New-AzVirtualNetworkGatewayIpConfig
New-AzVirtualNetworkGateway
Complete the following steps:
Create an object that represents your Azure virtual network:
$vnet = Get-AzVirtualNetwork -Name NETWORK_NAME `
-ResourceGroupName RESOURCE_GROUP
Replace the following:
NETWORK_NAME : the name of your Azure virtual network
RESOURCE_GROUP : the name of the appropriate resource group
Create an object that represents the subnet that you want to use for your
circuit:
$subnet = Get-AzVirtualNetworkSubnetConfig -Name NAME `
-VirtualNetwork $vnet
Replace NAME with the name of your subnet.
Allocate a public IP address for the virtual network:
$pip = New-AzPublicIpAddress -Name NAME `
-ResourceGroupName RESOURCE_GROUP `
-Location REGION `
-AllocationMethod Dynamic
Replace the following:
NAME : the name of your IP address
RESOURCE_GROUP : the name of the appropriate resource group
REGION : the region where your subnet is located
Create a configuration object:
$ipconf = New-AzVirtualNetworkGatewayIpConfig `
-Name NAME `
-Subnet $subnet `
-PublicIpAddress $pip
Replace NAME with a name for your configuration.
Create the gateway:
$gateway = New-AzVirtualNetworkGateway NAME `
-ResourceGroupName RESOURCE_GROUP `
-Location REGION `
-IpConfigurations $ipconf `
-GatewayType Expressroute `
-GatewaySku SKU
Replace the following:
NAME : the name of the new gateway
RESOURCE_GROUP : the name of the appropriate resource group
REGION : the region where your subnet is located
SKU : the gateway SKU
Create a connection
Create a connection between the following resources:
The ExpressRoute circuit private peering, which you created in
Set up a private peering
The ExpressRoute virtual network gateway, which you created in
Create a virtual network gateway
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Tutorial: Configure a virtual network gateway for ExpressRoute using the Azure portal in the Azure documentation.
Go to the Connections page.
Click Create .
Select a Subscription and Resource group .
Complete the Instance Details section of the form:
Set Connection type to ExpressRoute .
Enter a Name for the connection.
Select the Region where your ExpressRoute Direct connection is
located.
Click Next : Settings :
Select the appropriate Virtual network gateway .
Select your ExpressRoute circuit .
If appropriate, select Enable Custom BGP Addresses .
If appropriate, select Redeem authorization .
Enter the appropriate Routing weight value.
Click Next : Tags .
Optional: Set up tags for this port.
Click Next : Review + create .
Review the summary of your choices. If the summary looks correct, click
Create . If not, click Previous and make corrections.
Azure displays a Deployment is in progress
message. After a few minutes, the message should update to say
Your deployment is complete .
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Tutorial: Configure a virtual network gateway for ExpressRoute using PowerShell in the Azure documentation.
Use the
New-AzVirtualNetworkGatewayConnection command :
New-AzVirtualNetworkGatewayConnection `
-Name CONNECTION_NAME `
-ResourceGroupName RESOURCE_GROUP `
-VirtualNetworkGateway1 GATEWAY `
-Location LOCATION `
-ConnectionType ExpressRoute `
-PeerId PEER_ID
Replace the following:
CONNECTION_NAME : the name of the new connection
RESOURCE_GROUP : the name of the appropriate resource group
GATEWAY : the gateway that you created in
Create a virtual network gateway
LOCATION : the region where you
created your ExpressRoute Direct resources
PEER_ID : the ID of the private peering that you created
Previous
arrow_back
Configure your Google Cloud resources
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
