---
title: "Create a connection initiated from Google Cloud \_|\_ Cloud Interconnect \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/create-connections-gcp-to-aws
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-connectivity/docs/interconnect/concepts/best-practices
source_metadata:
  url: https://docs.cloud.google.com/network-connectivity/docs/interconnect/how-to/partner-cci-for-aws/create-connections-gcp-to-aws
  title: "Create a connection initiated from Google Cloud \_|\_ Cloud Interconnect\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: browser_cdp
  cdp_url: http://127.0.0.1:9222
---

Create a connection initiated from Google Cloud | Cloud Interconnect | Google Cloud Documentation
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
Before you begin Create or select a project
Enable the Network Connectivity API
Initiate connection from Google Cloud if you don't have an activation key List available profiles
Create the transport resource
Complete the steps on the AWS API
Establish VPC Network Peering
Verify your connection
What's next
Home
Documentation
Networking
Network Connectivity
Cloud Interconnect
Guides
Was this helpful?
Send feedback
Create a connection initiated from Google Cloud
Stay organized with collections
Save and categorize content based on your preferences.
On this page
Before you begin Create or select a project
Enable the Network Connectivity API
Initiate connection from Google Cloud if you don't have an activation key List available profiles
Create the transport resource
Complete the steps on the AWS API
Establish VPC Network Peering
Verify your connection
What's next
Preview
This feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section of the
Service Specific
Terms .
Pre-GA features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
This page describes the steps to successfully create and provision a
Partner Cross-Cloud Interconnect for Amazon Web Services (AWS) connection initiated from Google Cloud.
If you don't have an activation key from AWS, you can
initiate and provision a Partner Cross-Cloud Interconnect for AWS connection from
Google Cloud.
To achieve a successful connection, you must create the transport resource.
Follow the instructions on this page to create the transport.
Before you start the Partner Cross-Cloud Interconnect for AWS provisioning process,
ensure that the following conditions are met:
You must already have an Amazon Web Services account.
You must also create a Virtual Private Cloud (VPC) network ,
if it doesn't already exist, to connect your transport to.
If you are a VPC Service Controls user, you must set up ingress and egress rules
using the networkconnectivity-transportmanager-clh@system.gserviceaccount.com
service account that is associated with Partner Cross-Cloud Interconnect for AWS.
For instructions, see
Set up ingress and egress rules (for VPC Service Controls users) .
Before you begin
Before you get started, review the following sections.
Create or select a project
To make it easier to configure Partner Cross-Cloud Interconnect for AWS, start by identifying a valid
project.
Start by creating a Google Cloud account. With this account, you get $300 in free credits,
plus free usage of over 20 products, up to monthly limits.
Create an account
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
If you are using the Google Cloud CLI, set your project
ID by using the
gcloud config set command .
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your unique project ID.
The gcloud CLI instructions on this page assume that you have set your project ID.
To confirm that you set the project ID correctly, use the
gcloud config list command .
gcloud config list --format='text(core.project)'
Enable the Network Connectivity API
Before you can perform any tasks using Cloud Interconnect, you must enable the
Network Connectivity API.
Console
More
To enable the Network Connectivity API, do the following:
In the Google Cloud console, go to the Network Connectivity API page.
Go to Network Connectivity API
Click Enable .
Alternatively, you can enable the API by using the
Google Cloud console API Library ,
as described in Enabling APIs .
Initiate connection from Google Cloud if you don't have an activation key
Permissions required for this task
To perform this task, you must have been granted the following permissions
or the following IAM roles.
Permissions
networkconnectivity.remoteTransportProfiles.get to get transport profiles
networkconnectivity.remoteTransportProfiles.list to list transport profiles
networkconnectivity.transports.get to view transports
networkconnectivity.transports.list to view transports
networkconnectivity.transports.create to create a transport
compute.networks.use to establish VPC Network Peering
compute.networks.addPeering to establish VPC Network Peering
Roles (one of the following)
roles/networkconnectivity.transportAdmin to create a transport
roles/compute.networkAdmin to create a transport
roles/networkconnectivity.transportViewer to view a transport
List available profiles
To list the available profiles in a specific project in the region where you
want to provision connectivity, follow these steps.
gcloud API
More
Use the gcloud beta network-connectivity transports remote-profiles list
command .
gcloud beta network-connectivity transports remote-profiles list --region REGION
Replace REGION with the name of the region where you want
to provision connectivity, such as us-west1 .
Use the networkconnectivity.remoteTransportProfiles.list
method with an empty request body.
$ curl -H "Authorization: Bearer $(gcloud auth print-access-token)" "https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ REGION /remoteTransportProfiles"
Replace the following values:
PROJECT : the name of the project
REGION : the name of the Google Cloud region
where you want to provision connectivity, such as us-west1
Create the transport resource
During the transport resource creation process, you must specify the bandwidth, network,
remoteProfile and remoteAccountId fields. advertisedRoutes is an optional
field, however, in order to ensure connectivity from AWS,
you must specify this field. This field can be a list of IPv4 and IPv6 subnets.
If your network uses automatic subnet creation, use the 10.128.0.0/9
value from Google Cloud.
To create a transport resource, follow these steps.
gcloud API
More
Use the gcloud beta network-connectivity transports create
command
gcloud beta network-connectivity transports create TRANSPORT_NAME \
--region= REGION \
--remote-account-id= REMOTE_ACCOUNT_ID \
--remote-profile= REMOTE_PROFILE_NAME \
--bandwidth= BANDWIDTH \
--network= NETWORK \
--advertised-routes= ADVERTISED_ROUTES \
--stack-type= STACK_TYPE
Replace the following values:
TRANSPORT_NAME : a name for the transport resource that
you want to create
REGION : the name of the region where you want
to provision connectivity, such as us-west1
REMOTE_ACCOUNT_ID : the ID of your AWS
account
REMOTE_PROFILE_NAME : the AWS
remote profile name associated with the Google Cloud region
returned by the
gcloud beta network-connectivity transports remote-profiles list command
in the previous step
BANDWIDTH : the chosen bandwidth for your connection,
such as 1G , must be a supported bandwidth on the chosen
remoteProfile
NETWORK : the name of your VPC network
ADVERTISED_ROUTE : IP addresses for the
Google Cloud VPC network's routes to be
advertised to AWS.
STACK_TYPE (optional): IP address version stack type.
Must be IPV4_ONLY or IPV4_IPV6 . Defaults to IPV4_ONLY
To check the status of the operation, use the
gcloud network-connectivity operations describe command .
gcloud network-connectivity operations describe \
--operation= OPERATION_ID \
--region= REGION
Replace the following:
OPERATION_ID : the ID of the operation
REGION : the name of the Google Cloud region
where you want to provision connectivity, such as us-west1
Use the networkconnectivity.transports.create
method
specifying the TRANSPORT_ID , similar to the following example:
curl -X POST -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json" "https://networkconnectivity.googleapis.com/v1beta/projects/ PROJECT /locations/ REGION /transports?transportId=" TRANSPORT_NAME " --data '{
"network": " NETWORK ",
"remoteProfile": " REMOTE_PROFILE_NAME ",
"bandwidth": " BANDWIDTH ",
"remoteAccountId": " REMOTE_ACCOUNT_ID ",
"advertisedRoutes": [" ADVERTISED_ROUTE "],
"stackType": " STACK_TYPE "
}'
Replace the following values:
PROJECT : the name of the project in which you want to
create the transport
REGION : the name of the Google Cloud region
where you want to provision connectivity, such as us-west1
TRANSPORT_NAME : a name for the transport resource
REMOTE_ACCOUNT_ID : the ID of your AWS
account
REMOTE_PROFILE_NAME : the AWS
remote profile name associated with the Google Cloud region
returned by the
gcloud beta network-connectivity transports remote-profiles list command
in the previous step
BANDWIDTH : the chosen bandwidth for your connection,
such as 1G , must be a supported bandwidth on the chosen
remoteProfile
NETWORK : the name of your VPC network
ADVERTISED_ROUTE : IP addresses for the
Google Cloud VPC network's routes to be
advertised to AWS.
STACK_TYPE (optional): IP address version stack type.
Must be IPV4_ONLY or IPV4_IPV6 . Defaults to IPV4_ONLY
In the output, find the value of the name field. It has the format
projects/PROJECT/locations/REGION/operations/OPERATION_ID ,
where OPERATION_ID is the ID of your operation.
To check the status of the operation, use the networkconnectivity.operations.get method .
curl -X GET \
-H "Authorization: Bearer $(gcloud auth print-access-token)" \
-H "Content-Type: application/json" \
"https://networkconnectivity.googleapis.com/v1/projects/ PROJECT /locations/ REGION /operations/ OPERATION_ID "
Replace the following:
REGION : the name of the Google Cloud region
where you want to provision connectivity, such as us-west1
OPERATION_ID : the ID of the operation
If the transport resource has finished creation, the output has the line
"done": true . Copy the following values from the output to use in later
steps:
The value of the generatedActivationKey field
The value of the peeringNetwork field
Complete the steps on the AWS API
Follow the instructions in the AWS
API reference document ,
using the activation key that you generated in the previous step.
Establish VPC Network Peering
You can proactively establish VPC Network Peering at the
Google Cloud end. To do this, use the peeringNetwork returned from the
previous created transport resource and ensure that you create a peering with
the same stack type. The default stack type matches the transport resource
using IPV4_ONLY .
To receive the AWS routes, you must enable the
Import custom routes field.
The MTU in the peering VPC network is explicitly set to the
maximum in order to avoid MTU issues in the connectivity. If you're using an
MTU less than 8896, you might get a warning WARNING: Some requests generated
warnings: - Network MTU 1460B does not match the peer's MTU 8896B . In that
case, you must ensure that you're using matching MTU configurations between
your Google Cloud VPC network and the
AWS VPC network. If these are mismatched, you might
need to override MTU values to the lowest common denominator. For example, if
you're using 8896 in Google Cloud and 8800 in AWS,
everything in Google Cloud must be configured as 8800.
gcloud API
More
To establish VPC Network Peering, use the
gcloud compute networks peerings create command .
gcloud compute networks peerings create " TRANSPORT_NAME " \
--network=" VPC_NETWORK " \
--peer-network=" PEERING_NETWORK " \
--import-custom-routes \
--export-custom-routes
Replace the following values:
TRANSPORT_NAME : the name of the transport that you
created
VPC_NETWORK : the name of the VPC
network that you want to list the routes for
PEERING_NETWORK : the name of the VPC
network provided by the Transport resource that you copied from the
transport resource's peeringNetwork field
If the command is successful, the output's state field has the value
ACTIVE .
To establish VPC Network Peering, use the
compute.networks.addPeering method .
POST https://compute.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ NETWORK /addPeering
Replace the following values:
PROJECT : the name of the project that you are peering
NETWORK : the name of the network resource to add
peering to
Verify your connection
You can verify that connectivity has been established by listing the peered
VPC networks and the route tables. After the
AWS configuration is complete, you can see your
AWS routes in the list.
gcloud API
More
To list the peered VPC networks, use the
gcloud compute networks peerings list command .
gcloud compute networks peerings list
The output is similar to the following:
NAME NETWORK PEER_PROJECT PEER_NETWORK STACK_TYPE PEER_MTU IMPORT_CUSTOM_ROUTES EXPORT_CUSTOM_ROUTES UPDATE_STRATEGY STATE STATE_DETAILS
cci-virginia cci ke526b767340356b7p-tp transport-b52816f13d929baf-vpc IPV4_ONLY 8896 True True INDEPENDENT ACTIVE [2026-01-22T07:20:58.891-08:00]: Connected.
To list routes for a specific transport, use the
gcloud compute networks peerings list-routes command .
gcloud compute networks peerings list-routes TRANSPORT_NAME \
--direction=INCOMING \
--network= NETWORK \
--region= REGION
Replace the following values:
TRANSPORT_NAME : the name of the transport resource
NETWORK : the name of the VPC
network that you want to list the route tables for
REGION : the region of the transport resource
The output is similar to the following:
DEST_RANGE TYPE NEXT_HOP_REGION PRIORITY STATUS
10.0.0.0/16 DYNAMIC_PEERING_ROUTE us-east4 0 accepted
10.0.0.0/16 DYNAMIC_PEERING_ROUTE us-east4 0 accepted
To list peered networks, use the
compute.networks.list method .
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT /global/networks
Replace PROJECT with the name of the project that you
want to list the networks for.
To list routes, use the
compute.routes.listPeeringRoutes method
GET https://compute.googleapis.com/compute/v1/projects/ PROJECT /global/networks/ NETWORK /listPeeringRoutes
Replace the following values:
PROJECT with the name of the project that you
want to list the routes for
NETWORK : the name of the VPC
network that you want to list the route tables for
What's next
To find answers to common questions about Cloud Interconnect
architecture and features, see the
Cloud Interconnect FAQ .
To find out more about Cloud Interconnect, see the
Cloud Interconnect overview .
To learn about best practices when planning for and configuring
Cloud Interconnect, see
Best practices .
To find Google Cloud resource names, see the
Cloud Interconnect APIs .
Previous
arrow_back
Choose a paired location
Next
Create a connection initiated from AWS
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
