---
title: "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-directory/docs
source_metadata:
  url: https://docs.cloud.google.com/service-directory/docs/configuring-private-network-access
  title: "Configure private network access \_|\_ Service Directory \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Distributed, hybrid, and multicloud
Service Directory
Guides
Send feedback
Configure private network access
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up
private network access and route
traffic within a Google Cloud network.
To set up private network access, you configure three projects:
A project that contains a Virtual Private Cloud (VPC) network to be used by
the target virtual machine instance (VM) or target internal load balancer.
A project that acts as a Service Directory service project.
A project for a Google Cloud product with the configuration that
invokes private network access. An example of a Google Cloud product that can
call endpoints using private network access is Dialogflow CX.
The artifacts of the projects could be in the same project or in different
projects.
Permissions required for this task
To perform this task, you must have been granted the following permissions
and IAM roles.
Permissions
servicedirectory.services.resolve
servicedirectory.networks.access
servicedirectory.networks.attach
Roles
servicedirectory.editor
servicedirectory.viewer
servicedirectory.pscAuthorizedService
servicedirectory.networkAttacher
Note: Grant the IAM roles to per-product per-project service
accounts. If you aren't assigned the permissions or roles, contact the
IAM Administrator who has the Project IAM Admin role
( roles/resourcemanager.projectIamAdmin ) to grant you the missing roles.
Before you begin
Before you configure private network access, complete the following steps:
For each project, in the Google Cloud console, on the APIs &
Services page, click add Enable APIs and services to enable the
APIs that you want to use, including the Service Directory API.
To link your VPC network to on-premises hosts,
create a Cloud VPN tunnel
or a Cloud Interconnect connection .
Note: To set up private network access to on-premises hosts we recommend using an
internal load balancer. Create an internal proxy Network Load Balancer
with backend hybrid NEGs in the VPC network that's connected
to your on-premises network. Then set up private network access to use the
internal proxy Network Load Balancer. For details about connectivity requirements for hybrid
NEGs, see Network connectivity requirements .
Ensure that the Google Cloud project is within the VPC Service Controls
perimeter of both the network project and the Service Directory project for
servicedirectory.googleapis.com .
Learn more about VPC Service Controls .
Configure the project for the VPC network
To configure the project for the VPC network, follow these steps:
Create a VPC network
or select an existing VPC network that has either an
IPv4-only or dual-stack subnet in the region you want to use.
Legacy networks are not supported.
Create necessary ingress allow firewall rules.
If the target is a VM or an internal passthrough Network Load Balancer, firewall rules must permit TCP
traffic from the 35.199.192.0/19 range to the ports used by the software
running on the target VM instances.
If the target is an internal Application Load Balancer or an internal proxy Network Load Balancer, firewall
rules must permit TCP traffic from the 35.199.192.0/19 range to the IP
address and ports used by the load balancer.
For more information about the 35.199.192.0/19 range, see
Paths for Cloud DNS and Service Directory .
Grant the Identity and Access Management (IAM) Private Service Connect Authorized
Service role ( roles/servicedirectory.pscAuthorizedService ) to the service
agent of the Google Cloud product that will call the endpoint.
For more information about roles and permissions, see
Service Directory permissions and roles .
Configure the Service Directory project
To configure the Service Directory project, follow these steps:
In the VPC network, create a VM
or an internal load balancer .
Grant the IAM Service Directory Viewer role
( roles/servicedirectory.viewer ) to the service agent of the
Google Cloud product that will call the endpoint.
Create a Service Directory namespace and service .
Then, create an endpoint for this service, following the steps in the next section.
Create an endpoint with private network access
Note: If the principal performing this operation does not already have broad
permissions in the network project, then grant it the Service Directory Network
Attacher role ( roles/servicedirectory.networkAttacher ) there.
To create an endpoint with private network access configured, follow these steps:
Console
In the Google Cloud console, go to the Service Directory namespaces
page.
Go to Service Directory namespaces
Click a namespace.
Click a service.
Click Add endpoint .
For Endpoint name , enter a name for the endpoint.
For IP address , enter an IPv4 address, such as 192.0.2.0 .
For Port , enter a port number, such as 443 or 80 .
To enable private network access, in Associated VPC network , select the required
option:
To choose from a list of available networks, click Choose from the
list , and then select the network.
To specify a project and a network, click
Specify by a project and network name , and then enter the
project number and the network name.
Click Create .
gcloud
Use the gcloud service-directory endpoints create
command with the
project ID and the network path specified.
gcloud service-directory endpoints create ENDPOINT_NAME \
--project= PROJECT_ID \
--location= REGION \
--namespace= NAMESPACE_NAME \
--service= SERVICE_ID \
--address= IP_ADDRESS \
--port= PORT_NUMBER \
--network= NETWORK_PATH
Replace the following:
ENDPOINT_NAME : a name for the endpoint that you're
creating in your service, such as my-endpoint
PROJECT_ID : the ID of the project
REGION : the Google Cloud region that contains
the namespace
NAMESPACE_NAME : the name that you gave the namespace,
such as my-namespace
SERVICE_ID : the ID of the service
IP_ADDRESS : the IP address of the endpoint, such as
192.0.2.0
PORT_NUMBER : the ports that the endpoints are running
on, typically 443 or 80
NETWORK_PATH : the URL to the network, such as
projects/ PROJECT_NUMBER /locations/global/networks/ NETWORK_NAME
Note: If the target of your Service Directory endpoint is an on-premises IP
address, associate the endpoint with the VPC network that is
directly connected to the Cloud VPN tunnel or the Cloud Interconnect
connection. For example, in a hub-and-spoke model, associate the endpoint with
the hub VPC network and not to the spoke VPC
network.
Configure the Google Cloud product project
To configure the Google Cloud product project, follow these steps:
Enable the Google Cloud product API .
Configure your Google Cloud product to call the Service Directory
service that you created. The required steps depend on the specific
Google Cloud product.
Use cases
This section provides example use cases for configuring private network access.
Call an HTTP endpoint when a VPC network, a VM, and Service Directory are in the same project
In this use case, you set up Dialogflow CX, a Google Cloud product
for natural language processing, to call an HTTP endpoint on your VM. While
calling the endpoint, ensure that the traffic doesn't transition over the public
internet.
In this use case, you create the following artifacts in the same project:
A VPC network
A VM
A Service Directory service
Dialogflow CX
Figure 1 shows how you can allow a Google service configuration of a project to
egress to a VM. The VM resides in a VPC network of the project.
Figure 1. Allow a Google service configuration of a project to
egress to a VM (click to enlarge).
Set up your network and target network
Create a project , such
as myproject .
Create a VPC
network , such as
vpc-1 .
While creating the VPC network, in Subnet creation mode ,
select Automatic .
Create a firewall rule ,
such as firewall-1 .
While creating the firewall rule, enter or select the following values:
For Network , select vpc-1 .
For Source IPv4 ranges , enter 35.199.192.0/19 .
For Protocols and ports , select TCP and enter 443 or 80 .
In the us-central1 region, create a
VM , such as vm-1 .
While creating the VM, enter or select the following values:
For Networking > Network Interfaces , select vpc-1 .
For Firewall , select Allow HTTP traffic .
If you want to use HTTPS, select Allow HTTPS traffic . Also make sure
that you install a Public Key Infrastructure (PKI) Transport Layer
Security (TLS) certificate.
In the us-central1 region, create a namespace, such as namespace-1 .
In the namespace, register a Service Directory service, such as sd-1 .
Create an endpoint in sd-1 . For the endpoint address, use the internal IP
address of vm-1 on port 443 . For more information, see Create an
endpoint with private network
access .
Grant the following IAM roles to the service agent of the
Google Cloud product that will call the endpoint:
Service Directory Viewer role ( roles/servicedirectory.viewer )
Private Service Connect Authorized Service role
( roles/servicedirectory.pscAuthorizedService )
Optional: If you want to add more VMs, you can set up another VM, such as
vm-2 , and add its endpoint, such as endpoint-2 .
Set up a Google Cloud product
Configure a Google Cloud product configuration, such as "
Cloud Scheduler, call me every minute".
Set up an HTTP request.
Specify that requests should go over private networking, such as through
sd-1 .
Optional: Configure Certificate Authority Service
settings .
The Google Cloud product can now invoke the HTTP request by using sd-1 .
Call an HTTP endpoint when a Shared VPC network, a VM, and Service Directory are in different projects
In this use case, you set up Dialogflow CX, a Google Cloud
service for natural language processing, to call an HTTP endpoint on your VM.
While calling the endpoint, ensure that the traffic doesn't transition over the
public internet.
In this use case, you create the following artifacts in different projects:
A Shared VPC network
A VM
A Service Directory service
Dialogflow CX
Before you create the projects, note the following:
Ensure that the API invocation respects the VPC Service Controls perimeter.
Ensure that the configuration of the Google Cloud service project
allows egress to a VM that resides in the VPC network
project.
The producer project might not be the same as the Google Cloud service
project.
Ensure that the VPC Service Controls perimeters of both projects are used.
The Service Directory project and the network project don't need to be
connected, but they must both be part of the same VPC Service Controls.
In the network and the service, the firewall and IAM are
disabled by default.
Figure 2 shows how you can send traffic by using private network access with
VPC Service Controls perimeters enforced.
Figure 2. Send traffic by using private network access
with VPC Service Controls perimeters enforced (click to enlarge).
Configure the network project
Create a project , such
as my-vpc-project .
Create a VPC
network , such as
vpc-1 .
While creating the VPC network, for Subnet creation mode ,
select Automatic .
Create a firewall rule ,
such as firewall-1 .
While creating the rule, enter or select the following values:
For Network , select vpc-1 .
For Source IPv4 ranges , enter 35.199.192.0/19 .
For Protocols and ports , select TCP and enter 443 or 80 .
In the us-central1 region, create a
VM , such as vm-1 .
While creating the VM, enter or select the following values:
For Networking > Network Interfaces , select vpc-1 .
For Firewall , select Allow HTTP traffic .
If you want to use HTTPS, select Allow HTTPS traffic . Also make sure
that you install a Public Key Infrastructure (PKI) Transport Layer
Security (TLS) certificate.
If you're using VPC Service Controls, the VPC Service Controls perimeter enables
Service Directory to connect to both the Google Cloud service project and
the Service Directory project.
Notes:
For servicedirectory.googleapis.com , the Google Cloud
service project must be within the VPC Service Controls perimeter of the
Google Cloud service project and the Service Directory project.
For servicedirectory.googleapis.com , the Google Cloud service
project must be within the VPC Service Controls perimeter of the
Google Cloud service project and the network project.
VPC Service Controls is enabled by default.
Configure the Service Directory project
Create a project , such
as my-sd-project .
You require an extra IAM permission because the
VPC network project and the Service Directory project are
different projects.
From the network project, grant the Service Directory Network Attacher role
( roles/servicedirectory.networkAttacher ) to the IAM
principal that creates the Service Directory endpoint.
Create a Service Directory endpoint that points to the VM in the
VPC network:
In the us-central1 region, create a namespace, such as namespace-1 .
In the namespace, register a Service Directory service, such as sd-1 .
Create an endpoint in sd-1 . For the endpoint address, use the internal
IP address of vm-1 on port 443 . For more information, see Create an
endpoint with private network
access .
Grant the following IAM roles to the service agent of the
Google Cloud product that will call the endpoint:
Service Directory Viewer role ( roles/servicedirectory.viewer ) in
the Service Directory project
Private Service Connect Authorized Service role
( roles/servicedirectory.pscAuthorizedService ) in the network project
If you're using VPC Service Controls, the VPC Service Controls perimeter enables
Service Directory to connect to both the Google Cloud service project and
the Service Directory project.
Configure the Google Cloud service project
Enable the API for the Google Cloud service that you're using.
To configure the Google Cloud service PUSH , use the
Service Directory service from the Service Directory project.
If you're using VPC Service Controls, the VPC Service Controls perimeter enables
Service Directory to connect to both the network project and the
Service Directory project.
Use Service Directory private network access with Dialogflow
For instructions about how you can use Service Directory private network access
with Dialogflow, see Using Service Directory for
private network access .
What's next
To get an overview of Service Directory, see the Service Directory
overview .
To learn more about Private Service Connect, see
Private Service Connect .
To find solutions for common issues that you might experience when using
Service Directory, see
Troubleshooting .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
