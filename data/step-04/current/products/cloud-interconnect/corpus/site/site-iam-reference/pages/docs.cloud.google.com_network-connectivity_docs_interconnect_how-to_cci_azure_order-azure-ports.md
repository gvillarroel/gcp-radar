---
title: "Order Microsoft Azure ports \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/order-azure-ports
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/cci/azure/order-azure-ports
  title: "Order Microsoft Azure ports \_|\_ Cloud Interconnect \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Order Microsoft Azure ports | Cloud Interconnect | Google Cloud Documentation
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
Before you begin
Create ExpressRoute Direct resources
Generate an LOA
Send the LOA to Google
Look for an email from Google
Check for a signal from Google
Enable the Azure ports
Respond to the Google email
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Order Microsoft Azure ports
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Create ExpressRoute Direct resources
Generate an LOA
Send the LOA to Google
Look for an email from Google
Check for a signal from Google
Enable the Azure ports
Respond to the Google email
Note: This page provides sample guidance. Google doesn't guarantee that this
guidance is up to date or that the sample configuration choices are ideal for
your use case. For detailed instructions, see the
Azure documentation
.
After you order your Cross-Cloud Interconnect connections, order
your Microsoft Azure ports.
Before you begin
If you haven't already done so, register the ExpressRoute Direct feature.
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to register the
ExpressRoute feature, see the
Azure documentation .
Sign in to the Azure portal and select the appropriate subscription.
In the navigation, find the Settings menu, and then click
Preview features .
In the search box, enter ExpressRoute .
Select the Allow ExpressRoute Direct checkbox.
At the top of the page, click the +Register button.
In the table, locate Allow ExpressRoute Direct again. Make sure
that the corresponding value in the State column is Registered .
Note: For the most up-to-date information about how to register the
ExpressRoute feature, see the
Azure documentation .
Use the
Register-AzProviderFeature command :
Register-AzProviderFeature -FeatureName `
AllowExpressRoutePorts -ProviderNamespace Microsoft.Network
Create Express Route Direct resources
For each of your Cross-Cloud Interconnect connections, you need
an Azure port. To order a pair of Azure ports, create an ExpressRoute Direct
resource.
When you create an ExpressRoute Direct resource, Azure automatically reserves a
primary and secondary redundant port for you. This behavior differs from the
Cross-Cloud Interconnect ordering process, which requires you to
explicitly order two connections.
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to order an ExpressRoute
Direct connection, see
Create ExpressRoute Direct
in the Azure documentation.
Go to the ExpressRoute Direct page.
Click Create .
Fill out the Basics tab of the Create ExpressRoute Direct page:
Select the Subscription where you want to create the resource.
Later, when you create an ExpressRoute circuit, you must create it in
the same subscription as the ExpressRoute Direct resource.
Select the Resource group where you want to place the ExpressRoute
Direct resource.
Identify the Region where you want to locate the resource.
Enter a Name for the resource.
For the most up-to-date information about these fields, see
Azure documentation .
Click Next : Configuration .
On the Configuration tab, enter values for the following fields:
In the Peering location field, enter the Azure location. If you
need help with choosing a value for this field, see
Choose your locations .
Choose the appropriate Bandwidth . To view the list of valid
capacities, see
Port capacity .
For Encapsulation , select Dot1Q .
Important: Google Cloud is incompatible with QinQ
encapsulation, and you can't change this setting later.
Click Next : Tags .
Optional: Set up tags for this port.
Click Next : Review + create .
Review the summary of your choices. If you want to make changes, click
Previous and update the form as needed. When the summary looks
correct, click Create .
Azure displays a Deployment is in progress message. After some time,
the message should update to say Your deployment is complete .
Click the name of your new ExpressRoute Direct resource. You should
see a Links table that lists Link1 and Link2 . These links
represent your primary and secondary ports.
Do not enable the ports yet. Billing begins when you enable the ports.
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Create the resource
in the Azure documentation.
Use the
New-AzExpressRoutePort command :
New-AzExpressRoutePort -Name NAME `
-ResourceGroupName RESOURCE_GROUP `
-PeeringLocation PEERING_LOCATION `
-BandwidthInGbps BANDWIDTH `
-Encapsulation Dot1Q `
-Location LOCATION
Replace the following:
NAME : the name of the new connection
RESOURCE_GROUP : the appropriate resource group
PEERING_LOCATION : the name of the location as it is
represented in Azure—for example,
Interxion-Frankfurt-FRA11
BANDWIDTH : the bandwidth in Gbps. To view the list of
valid capacities, see
Port capacity .
LOCATION : the name of the region
Generate an LOA
For Google to provision your connection, it must have a letter of authorization
(LOA) for your Azure port.
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to retrieve the LOA, see
Generate the letter of authorization
in the Azure documentation.
Go to the page that lists ExpressRoute Direct resources.
Click the name of the connection that you created.
For Company Name , enter Google .
Click Generate Letter of Authorization .
Note: For the most up-to-date information about how to retrieve the LOA, see
Generate the letter of authorization
in the Azure documentation.
Use the
Get-AzExpressRoutePort command
and the
New-AzExpressRoutePortLOA command :
$port = Get-AzExpressRoutePort -Name CONNECTION_NAME ; `
New-AzExpressRoutePortLOA -ExpressRoutePort `
$port -CustomerName "GoogleCloud" -Destination " PATH "
Replace the following:
CONNECTION_NAME : the name of the ExpressRoute Direct
resource that you created in the previous step
PATH : the location where you want to
download the LOA
Send the LOA to Google
After you order your Cross-Cloud Interconnect connections, you should
receive confirmation email messages from Google. Each of these messages
includes instructions for how to send your Azure LOA to Google. Now that you
have the LOA, follow the instructions to provide the document.
To summarize, you must provide both of the following:
The LOA document
Instructions for how you want your ports connected. For example, specify
whether you want your primary Cross-Cloud Interconnect port
connected to your primary or secondary ExpressRoute Direct port.
Make a note of the instructions that you provide to Google. You need this
information later in the process when you configure your ExpressRoute circuits.
Look for an email from Google
After you provide your LOA, Google can provision your
Cross-Cloud Interconnect connections. When your connections are
provisioned , Google has physically connected the two ports.
After the connections are provisioned, you receive an email that does the
following:
Lets you know that your ports are ready to use.
Instructs you to enable your Azure ports and then confirm that you have
done so.
After you get the email, complete the steps described in the following
sections.
Check for a signal from Google
Check to see whether both Azure ports are receiving a signal from
Google Cloud. If either of your ports is not receiving light, report the
issue to Google before proceeding.
Azure PowerShell
More
Note: For the most up-to-date information about how to check light levels,
see
ExpressRoute Direct Metrics
in the Azure documentation.
Use the
Get-AzExpressRoutePort command
and the
Get-AzMetric command :
$port = Get-AzExpressRoutePort -Name EXPRESS_ROUTE_DIRECT_NAME -ResourceGroupName RESOURCE_GROUP
$metricLink1 = Get-AzMetric -ResourceId $port.id -DetailedOutput -MetricName "RxLightLevel" -MetricFilter "Link eq 'link1'"
$metricLink2 = Get-AzMetric -ResourceId $port.id -DetailedOutput -MetricName "RxLightLevel" -MetricFilter "Link eq 'link2'"
$metricLink1.Data[-1], $metricLink2.Data[-1]
Replace the following:
EXPRESS_ROUTE_DIRECT_NAME : the name of your
ExpressRoute Direct resource
RESOURCE_GROUP : the appropriate resource group
You should see output similar to the following. Ideally, the value in the
Average field is between -10 and 0 .
TimeStamp : 3/22/2023 8:54:00 PM
Average : -3.54
Minimum :
Maximum :
Total :
Count :
TimeStamp : 3/22/2023 8:54:00 PM
Average : -4.17
Minimum :
Maximum :
Total :
Count :
Enable the Azure ports
To permit connectivity, enable your primary and secondary ExpressRoute
Direct connections.
Important: After you enable your connections, billing begins. For more
information, see the
ExpressRoute FAQ .
Azure portal Azure PowerShell
More
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Change Admin State of links in the Azure documentation.
Go to the ExpressRoute Direct page.
Click the name of your ExpressRoute Direct resource. The page that
is displayed lists two links: one for your primary connection and one
for your secondary connection.
Enable the primary connection:
Click Link 1 .
Click the Enabled toggle.
Click Save .
Enable the secondary connection:
Click Link 2 .
Click the Enabled toggle.
Click Save .
Note: For the most up-to-date information about how to order an
ExpressRoute Direct connection, see
Change Admin State of links in the Azure documentation.
Fetch information about the ExpressRoute Direct port pair by using the
Get-AzExpressRoutePort command :
Azure> $port = Get-AzExpressRoutePort -Name EXPRESS_ROUTE_DIRECT_CONNECTION
Replace CONNECTION_NAME with the name of your
ExpressRoute Direct resource.
Define an enabled state for the primary port:
$port.Links[0].AdminState = "Enabled"
Define an enabled state for the secondary port:
$port.Links[1].AdminState = "Enabled"
Update both ports by using the
Set-AzExpressRoutePort command :
$port = Set-AzExpressRoutePort -ExpressRoutePort $port
Respond to the Google email
After you enable your Azure ports, respond to the email that you
received from Google and let us know that you enabled your ports.
After we receive your response, within 24 hours, you should be
able to confirm that your Cross-Cloud Interconnect ports are
receiving a signal from Azure .
Previous
arrow_back
Order Cross-Cloud Interconnect connections
Next
Configure your Google Cloud resources
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
