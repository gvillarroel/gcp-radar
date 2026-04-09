---
title: "Configure traffic differentiation \_|\_ Cloud Interconnect \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/configure-traffic-differentiation
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/dedicated/configure-traffic-differentiation
  title: "Configure traffic differentiation \_|\_ Cloud Interconnect \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Configure traffic differentiation | Cloud Interconnect | Google Cloud Documentation
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
Before you begin
Traffic classes
Available policy types
Traffic shaping control
Configure a strict priority policy type Configure a strict priority policy type with a traffic shaping profile
Configure bandwidth percentage Configure bandwidth percentage with a traffic shaping profile
Delete traffic differentiation policies
Turn off traffic differentiation
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Configure traffic differentiation
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin
Traffic classes
Available policy types
Traffic shaping control
Configure a strict priority policy type Configure a strict priority policy type with a traffic shaping profile
Configure bandwidth percentage Configure bandwidth percentage with a traffic shaping profile
Delete traffic differentiation policies
Turn off traffic differentiation
What's next
Application awareness helps you use your Dedicated Interconnect connections more
efficiently by using
differentiated services field codepoint (DSCP)
for traffic differentiation.
You can configure traffic differentiation for outbound Dedicated Interconnect data
transfers using application awareness on Cloud Interconnect.
When you enable application awareness on your Cloud Interconnect and
mark the DSCP in the IP headers of your outbound data transfers to map them
to traffic classes , your outbound data transfers receive
differentiated treatment on Cloud Interconnect.
Application awareness lets you do the following:
Choose one of two policy types , either a strict priority
policy or a bandwidth percentage policy, to specify how
Cloud Interconnect treats your outbound data transfers that are
classified into different traffic classes.
Allocate your Dedicated Interconnect outbound data transfer bandwidth among six
different traffic classes .
Use traffic shaping controls in addition to either policy type to set the
maximum bandwidth that each traffic class can use on your Dedicated Interconnect
outbound data transfers.
The following sections describe application awareness on Cloud Interconnect
and how to configure it for your Dedicated Interconnect connection.
Contact your account team to enable application awareness on your
Dedicated Interconnect.
Before you begin
Before you begin, do the following:
Understand the best practices when configuring
Cloud Interconnect , in
particular, for creating redundant Cloud Interconnect connections
with sufficient capacity .
Ensure that there is no network traffic on the Dedicated Interconnect connection.
Consider the following information about configuring application awareness:
DSCP in your outbound data traffic IP header determines the application
awareness traffic class for providing traffic differentiation. Mark the DSCP
in your outbound IP data traffic headers accordingly.
In order to mark a specific DSCP in your outbound Cloud Interconnect
data transfers that originate from Google APIs, mark the same DSCP in your
Google API request packets as your intended DSCP for the Google API response
traffic. Google APIs echo back (copy) the DSCP from the corresponding
customer request IP packet in their response traffic, which lets you control
the DSCP for the Google API response traffic.
When you use Private Service Connect, the DSCP echo-back behavior is
supported for Google APIs. You can control the DSCP in your Google API
response traffic by setting the request DSCP accordingly. This lets you
control the DSCP in your outbound data transfers from Google APIs that you
connect to with Private Service Connect.
When you use Private Service Connect, DSCP echo-back isn't
supported for published Virtual Private Cloud (VPC)-hosted services. Therefore,
the DSCP in the response data traffic from published VPC-hosted
services can't be controlled with the request traffic DSCP. Instead, the
corresponding VPC-hosted service backends determine the DSCP in
the response packets.
Traffic classes
Application awareness uses the concept of a traffic class, based upon DSCP
ranges, to differentiate traffic on Dedicated Interconnect. The following table
describes the six traffic classes:
Traffic class
Inner DSCP range (binary)
Inner DSCP range (decimal)
Description and examples
TC1
000xxx
0-7
Best effort traffic
TC2
001xxx
8-15
Bulk traffic Example: file transfer
TC3
010xxx
16-23
Operations, administration and management traffic Examples: SNMP, SSH, ping, telnet
TC4
011xxx
24-31
Streaming or live video
TC5
10xxxx
32-47
Interactive or user-facing traffic
TC6
11xxxx
48-63
Essential network control traffic Examples: control traffic from protocols like BGP and BFD
Available policy types
Application awareness on Cloud Interconnect offers two policy types to
determine how outbound data transfers are differentiated on your
Cloud Interconnect:
Strict priority
A strict priority policy type assigns a priority level to each traffic class
for outbound data transfers. The highest-priority outbound data transfers
are assigned to traffic class TC6 , while the lowest-priority outbound data
transfers are assigned to traffic class TC1 .
Strict priority differentiation doesn't require that you specify
class-specific configurations because the priority for each traffic class
is prespecified. However, to prevent starving lower-priority traffic classes
during congestion events, we recommend that you specify a traffic
shaping profile to limit the maximum bandwidth used by each of your
higher-priority traffic classes.
Bandwidth percentage
A bandwidth percentage policy type lets you specify the target bandwidth
share that each traffic class can use during congestion events on your
Cloud Interconnect. Assigning percentages to each traffic
class helps ensure that each traffic class can use its specified share of
Cloud Interconnect bandwidth during congestion events on your
Cloud Interconnect.
If excess bandwidth is available because a traffic class isn't using its
assigned share fully, the remaining bandwidth is shared equally among all
other traffic classes.
Traffic shaping control
In addition to the two policy types, application awareness also provides
traffic shaping controls that let you specify the maximum bandwidth that each
traffic class can use. You can use traffic shaping controls with
strict priority policies and with
bandwidth percentage policies .
Configure a strict priority policy type
Use the following steps to configure a strict priority policy type.
gcloud API
More
Use the following command:
gcloud compute interconnects application-awareness \
configure-strict-priority-policy INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
Send the following JSON object to the
interconnects.patch
endpoint :
{
"aaiEnabled":true,
"applicationAwareInterconnect":
{
"profileDescription": " DESCRIPTION ",
"strictPriorityPolicy":{}
},
}
Replace DESCRIPTION with a description for this profile.
Configure a strict priority policy type with a traffic shaping profile
Optionally, you can configure a strict priority policy type along with a traffic
shaping profile. We recommend that you use a traffic shaping profile to help
ensure that lower-priority traffic classes aren't starved due to higher-priority
traffic classes during congestion events.
Use the following steps to configure a strict priority policy type with a
traffic shaping profile. Specify a numerical value representing the maximum
bandwidth percentage for each included traffic class. You can define the traffic
shaping profile for a subset or all 6 traffic classes, TC1 through TC6 .
gcloud API
More
Use the following command to configure the strict priority policy:
gcloud compute interconnects application-awareness \
configure-strict-priority-policy INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
Use the following command to configure the traffic shaping profile:
gcloud compute interconnects application-awareness \
configure-shaper-average-percentage INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--bandwidth-percentages="TC1= TC1_SHAPE_PERCENTAGE ,TC2= TC2_SHAPE_PERCENTAGE ,TC3= TC3_SHAPE_PERCENTAGE ,TC4= TC4_SHAPE_PERCENTAGE ,TC5= TC5_SHAPE_PERCENTAGE ,TC6= TC6_SHAPE_PERCENTAGE " \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
TC1_SHAPE_PERCENTAGE ... TC6_SHAPE_PERCENTAGE : a numerical
value representing the shape average percentage for each traffic class. Each
value must be less than or equal to 100. You can define the traffic shaping
profile for a subset or all 6 traffic classes, TC1 through TC6 .
Send the following JSON object to the
interconnects.patch
endpoint :
{
"aaiEnabled": true,
"applicationAwareInterconnect":
{
"profileDescription": " DESCRIPTION ",
"strictPriorityPolicy": {},
"shapeAveragePercentages": [
{
"trafficClass": "TC1",
"percentage": TC1_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC2",
"percentage": TC2_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC3",
"percentage": TC3_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC4",
"percentage": TC4_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC5",
"percentage": TC5_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC6",
"percentage": TC6_SHAPE_PERCENTAGE
}
]
}
}
Replace TC1_SHAPE_PERCENTAGE ... TC6__SHAPE_PERCENTAGE with a
numerical value representing the maximum bandwidth percentage for each traffic
class. You can define the traffic shaping profile for a subset or all 6 traffic
classes, TC1 through TC6 .
To prevent network failure, ensure that network control traffic, such as BGP and
BFD, are included in the highest strict_policy priority class.
Configure bandwidth percentage
Use the following steps to configure the bandwidth percentage policy.
gcloud API
More
Use the following command:
gcloud compute interconnects application-awareness \
configure-bandwidth-percentage-policy INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--bandwidth-percentages="TC1= TC1_PERCENTAGE ,TC2= TC2_PERCENTAGE ,TC3= TC3_PERCENTAGE ,TC4= TC4_PERCENTAGE ,TC5= TC5_PERCENTAGE ,TC6= TC6_PERCENTAGE " \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
TC1_PERCENTAGE ... TC6_PERCENTAGE : a numerical
value representing the bandwidth percentage for each traffic class. Each
value must be less than or equal to 100.
Send the following JSON object to the
interconnects.patch
endpoint :
{
"aaiEnabled": true,
"applicationAwareInterconnect":
{
"profileDescription": " DESCRIPTION ",
"bandwidthPercentagePolicy": {
"bandwidthPercentages": [
{
"trafficClass": "TC1",
"percentage": TC1_PERCENTAGE
},
{
"trafficClass": "TC2",
"percentage": TC2_PERCENTAGE
},
{
"trafficClass": "TC3",
"percentage": TC3_PERCENTAGE
},
{
"trafficClass": "TC4",
"percentage": TC4_PERCENTAGE
},
{
"trafficClass": "TC5",
"percentage": TC5_PERCENTAGE
},
{
"trafficClass": "TC6",
"percentage": TC6_PERCENTAGE
}
]
}
}
}
Replace the following:
DESCRIPTION : a description for this profile.
TC1_PERCENTAGE ... TC6_PERCENTAGE : a nonzero numerical
value representing the percentage for each traffic class. The bandwidth
percentages for all the traffic classes must sum up to 100.
Configure bandwidth percentage with a traffic shaping profile
Optionally, you can configure a bandwidth percentage policy along with a traffic
shaping profile. A traffic shaping profile helps you set the maximum bandwidth
that each traffic class can consume.
Use the following steps to configure a bandwidth percentage policy with a
traffic shaping profile. A nonzero value must be specified for each traffic
class, and the bandwidth percentages for all traffic classes must sum up to 100.
gcloud API
More
Use the following command to configure the bandwidth percentage policy:
gcloud compute interconnects application-awareness \
configure-bandwidth-percentage-policy INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--bandwidth-percentages="TC1= TC1_PERCENTAGE ,TC2= TC2_PERCENTAGE ,TC3= TC3_PERCENTAGE ,TC4= TC4_PERCENTAGE ,TC5= TC5_PERCENTAGE ,TC6= TC6_PERCENTAGE " \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
TC1_PERCENTAGE ... TC6_PERCENTAGE : a numerical
value representing the bandwidth percentage for each traffic class. Each
value must be less than or equal to 100.
Use the following command to configure the traffic shaping profile:
gcloud compute interconnects application-awareness \
configure-shaper-average-percentage INTERCONNECT_NAME \
--profile-description= DESCRIPTION \
--bandwidth-percentages="TC1= TC1_SHAPE_PERCENTAGE ,TC2= TC2_SHAPE_PERCENTAGE ,TC3= TC3_SHAPE_PERCENTAGE ,TC4= TC4_SHAPE_PERCENTAGE ,TC5= TC5_SHAPE_PERCENTAGE ,TC6= TC6_SHAPE_PERCENTAGE " \
--enabled
Replace the following:
INTERCONNECT_NAME : the name of the interconnect to patch
DESCRIPTION : a profile description for application
awareness
TC1_SHAPE_PERCENTAGE ... TC6_SHAPE_PERCENTAGE : a numerical
value representing the shape average percentage for each traffic class. Each
value must be less than or equal to 100. You can define the traffic shaping
profile for a subset or all 6 traffic classes, TC1 through TC6 .
Send the following JSON object to the
interconnects.patch
endpoint :
{
"aaiEnabled": true,
"applicationAwareInterconnect":
{
"profileDescription": " DESCRIPTION ",
"bandwidthPercentagePolicy": {
"bandwidthPercentages": [
{
"trafficClass": "TC1",
"percentage": TC1_PERCENTAGE
},
{
"trafficClass": "TC2",
"percentage": TC2_PERCENTAGE
},
{
"trafficClass": "TC3",
"percentage": TC3_PERCENTAGE
},
{
"trafficClass": "TC4",
"percentage": TC4_PERCENTAGE
},
{
"trafficClass": "TC5",
"percentage": TC5_PERCENTAGE
},
{
"trafficClass": "TC6",
"percentage": TC6_PERCENTAGE
}
]
},
"shapeAveragePercentages": [
{
"trafficClass": "TC1",
"percentage": TC1_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC2",
"percentage": TC2_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC3",
"percentage": TC3_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC4",
"percentage": TC4_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC5",
"percentage": TC5_SHAPE_PERCENTAGE
},
{
"trafficClass": "TC6",
"percentage": TC6_SHAPE_PERCENTAGE
}
]
}
}
Replace the following:
DESCRIPTION : a description for this profile
TC1_PERCENTAGE ... TC6_PERCENTAGE : a numerical value
representing the percentage for each traffic class
TC1_SHAPE_PERCENTAGE ... TC6_SHAPE_PERCENTAGE : a numerical
value representing the shape average percentage for each traffic class. Each
value must be less than or equal to 100. You can define the traffic shaping
profile for a subset or all 6 traffic classes, TC1 through TC6 .
To prevent network failure, ensure that network control traffic, such as BGP and
BFD, are included in the appropriate bandwidth percentage configuration.
Delete traffic differentiation policies
To delete traffic differentiation policies, use the following steps.
gcloud API
More
Use the following command:
gcloud compute interconnects application-awareness delete INTERCONNECT_NAME
Replace INTERCONNECT_NAME with the name of the interconnect
on which you configured a traffic differentiation policy.
Send the following JSON object to the
interconnects.patch
endpoint :
{
"applicationAwareInterconnect":
{
"profileDescription": null,
"strictPriorityPolicy": null,
"bandwidthPercentagePolicy": null,
"shapeAveragePercentages": null
}
}
Turn off traffic differentiation
To turn off traffic differentiation, use the following steps:
gcloud API
More
Use the following command:
gcloud compute interconnects application-awareness update INTERCONNECT_NAME \
--no-enabled
Replace INTERCONNECT_NAME with the name of the interconnect
to update.
Send the following JSON object to the
interconnects.patch
endpoint :
{
"aaiEnabled": false
}
What's next
View Cloud Interconnect Monitoring metrics
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
