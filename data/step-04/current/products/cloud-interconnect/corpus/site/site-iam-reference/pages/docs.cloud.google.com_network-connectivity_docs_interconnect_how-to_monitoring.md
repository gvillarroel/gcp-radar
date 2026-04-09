---
title: "Monitor connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/monitoring
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/monitoring
  title: "Monitor connections \_|\_ Cloud Interconnect \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Monitor connections | Cloud Interconnect | Google Cloud Documentation
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
Metrics and resource types
View metrics in the Google Cloud console
View metrics in Cloud Monitoring
Define alerting policies
Create custom Monitoring dashboards
View metrics in Network Topology
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Monitor connections
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Metrics and resource types
View metrics in the Google Cloud console
View metrics in Cloud Monitoring
Define alerting policies
Create custom Monitoring dashboards
View metrics in Network Topology
What's next
To help you monitor connections, Cloud Interconnect reports metrics to
Cloud Monitoring . Monitoring these metrics can
help you troubleshoot issues with the following:
Physical circuits (Cloud Interconnect connections)
VLAN attachments
Wires in cross-site networks
For Dedicated Interconnect, Cloud Interconnect reports
measurements for the connections and VLAN attachments. For
Partner Interconnect, Cloud Interconnect reports measurements
for VLAN attachments only.
Google starts reporting Cloud Interconnect connection metrics after
Google allocates your ports, even before your connection is ready to use. That
way, you can monitor the circuits while they're being set up and tested.
For VLAN attachments and wires, Google starts reporting metrics right after you
create the attachment or wire group. Google reports the number of packets and
bytes sent and received.
Data is reported in one-minute intervals to Monitoring and is
retained in Monitoring for 6 weeks.
You can view general information about your Cloud Interconnect
connections and VLAN attachments by using the Observability tab:
Go to Physical connections
The following sections describe how to monitor specific
Cloud Interconnect connections or VLAN attachments.
Metrics and resource types
For more information about Cloud Interconnect metrics, see the
following links from the Cloud Monitoring documentation:
View a list of Cloud Interconnect metrics
View details for the following monitored resource types:
interconnect
interconnect_attachment
wire_endpoint
View metrics in the Google Cloud console
On the Cloud Interconnect page in the Google Cloud console, you can view
the activity for the following, depending on your connection type:
Cloud Interconnect connections, except for Partner Interconnect
VLAN attachments
Cross-site networks
Console
More
To view the monitoring information for a
Cloud Interconnect connection, follow these steps:
In the Google Cloud console, go to the Cloud Interconnect Physical
connections tab.
Go to Physical connections
Select the connection to view.
On the Interconnect connection details page, select the
Monitoring tab.
Depending on your connection type, the Google Cloud console shows
some or all of the following activity for the selected
timeframe (by default, the Google Cloud console shows the past hour's
activity):
Utilization rate (bytes received and sent) compared to its overall
capacity.
Received bytes by VLAN attachment.
Sent bytes by VLAN attachment.
Number of outbound drops and number of inbound and outbound errors.
To view the monitoring information for a VLAN attachment, follow these
steps:
In the Google Cloud console, go to the Cloud Interconnect VLAN
attachments tab.
Go to VLAN attachments
Select the VLAN attachment to view.
On the VLAN attachment details page, select the Monitoring tab.
For each VLAN attachment, the Google Cloud console shows the bytes
received and sent compared to its total capacity for the selected
timeframe (by default, the Google Cloud console shows the past hour's
activity).
To view the monitoring information for a cross-site network, follow these
steps:
In the Google Cloud console, go to the Interconnect page.
Go to Interconnect
On the Cross-site networks tab, select the cross-site network to view.
On the Cross-site network details page, select the Monitoring tab.
The Google Cloud console shows the following information:
The bytes received and sent by each wire group endpoint and wire endpoint
The operational status of each wire endpoint
The latency of each wire, measured by out of band probes
View metrics in Cloud Monitoring
Console
More
To view the metrics for a monitored resource by using the
Metrics Explorer, do the following:
In the Google Cloud console, go to the
leaderboard Metrics explorer page:
Go to Metrics explorer
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
In the toolbar of the Google Cloud console, select your Google Cloud project.
For App Hub configurations, select the
App Hub host project or the app-enabled folder's management project.
In the Metric element, expand the Select a metric menu,
enter Interconnect
in the filter bar, and then use the submenus to select a specific resource type and metric:
In the Active resources menu, select interconnect .
To select a metric, use the Active metric categories and Active metrics menus.
For a list of metrics, see
interconnect metrics .
Click Apply .
To add filters, which remove time series from the query results, use the
Filter element .
To combine time series, use the menus on the
Aggregation element .
For example, to display the CPU utilization for your VMs, based on their zone, set the
first menu to Mean and the second menu to zone .
All time series are displayed when the first menu of the Aggregation element is set
to Unaggregated . The default settings for the Aggregation element
are determined by the metric type you selected.
For quota and other metrics that report one sample per day, do the following:
In the Display pane,
set the Widget type to Stacked bar chart .
Set the time period to at least one week.
Define alerting policies
Console
More
You can create alerting policies to monitor the values of metrics and to notify you when
those metrics violate a condition.
In the Google Cloud console, go to the
notifications Alerting page:
Go to Alerting
If you use the search bar to find this page, then select the result whose subheading is
Monitoring .
If you haven't created your notification channels and if you want to be notified, then click
Edit Notification Channels and add your notification channels. Return to the
Alerting page after you add your channels.
From the Alerting page, select Create policy .
To select the metric, expand the Select a metric menu and then do the following:
To limit the menu to relevant entries, enter Interconnect
into the filter bar. If there are no results after you filter the menu, then disable
the Show only active resources & metrics toggle.
For the Resource type , select Interconnect .
For the Metric category , select Network .
For the Metric , select a metric from the list of interconnect metrics .
Select Apply .
Click Next .
The settings in the Configure alert trigger page determine when the alert is triggered.
Select a condition type and, if necessary, specify a threshold. For more
information, see
Create metric-threshold alerting policies .
Click Next .
Optional: To add notifications to your alerting policy, click
Notification channels . In the dialog, select one or more notification
channels from the menu, and then click OK .
Optional: Update the Incident autoclose duration . This field determines when
Monitoring closes incidents in the absence of metric data.
Optional: Click Documentation , and then add any information that you
want included in a notification message.
Click Alert name and enter a name for the alerting policy.
Click Create Policy .
For more information, see Alerting overview .
Create custom Monitoring dashboards
You can create custom Monitoring dashboards over
Cloud Interconnect metrics by adding custom charts .
Console
More
To create custom Monitoring dashboards, follow these steps:
In the Google Cloud console, go to the Monitoring page.
Go to Monitoring
Select Dashboards , and then click Create dashboard .
Name the dashboard, and then click Add chart .
Specify a name for the chart.
Select the metrics and filters to use. For a list of
Cloud Interconnect resource types and metrics that you can
monitor, see
Monitored resource types
or Metrics list .
Click Save .
View metrics in Network Topology
You can use Network Topology to audit your networking configuration
and troubleshoot networking issues.
Network Topology overlays throughput values on each
connection so that you can quickly see the amount of traffic between
entities. For example, you can see the traffic traversing the VLAN
attachment that connects Google Cloud to an on-premises network.
Note: Network Topology isn't available for cross-site networks.
For information about the supported metrics for each connection, see the
Metrics reference .
Metric values are based on the final five minutes of the selected
hour. You can also view historical date for six weeks by clicking on any of the
edges.
For more information, see Data collection and freshness .
Console
More
In the Google Cloud console, go to the Network Topology page.
Go to Network Topology
In the entities selection pane, select a metric from the Edge metric
drop-down menu.
Navigate to a specific entity hierarchy to view traffic that is related to
that entity.
For example, if you want to view traffic bandwidth traversing the VLAN
attachment between Google Cloud and the on-premises network,
expand the entities until you see that connection.
Click the entity to highlight all of its traffic paths.
Network Topology displays metric values for each connection
that supports the selected metric.
What's next
To query and view metrics for your Cloud Interconnect resources, see the Cloud Monitoring API .
To view records of samples of packets sent through VLAN attachments, see
VPC Flow Logs .
To learn more about Cloud Interconnect options, see the
Cloud Interconnect overview .
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
