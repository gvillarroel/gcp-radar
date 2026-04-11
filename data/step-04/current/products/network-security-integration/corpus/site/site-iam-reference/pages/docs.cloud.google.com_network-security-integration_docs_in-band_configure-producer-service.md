---
title: "Set up producer services \_|\_ Network Security Integration \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-producer-service
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-intercept-endpoint-groups
source_metadata:
  url: https://docs.cloud.google.com/network-security-integration/docs/in-band/configure-producer-service
  title: "Set up producer services \_|\_ Network Security Integration \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Security Integration
Guides
Send feedback
Set up producer services
Stay organized with collections
Save and categorize content based on your preferences.
As a service producer, you deploy and manage the backend infrastructure, which
includes virtual machines (VMs) for inspection, internal passthrough Network Load Balancers to distribute
traffic, and the in-band integration resources.
This page provides details about the steps that a service producer must take to
offer packet inspection services.
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
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
Make sure that you have the following Identity and Access Management (IAM) roles on
your project:
Compute
Network Admin role ( roles/compute.networkAdmin )
Intercept Deployment Admin role ( roles/networksecurity.interceptDeploymentAdmin )
Enable the Compute Engine and Network Security APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI. For more information,
see gcloud CLI overview .
Note: If you haven't previously run the Google Cloud CLI, initialize
your gcloud CLI directory by running the
gcloud init command .
Prepare your network
In each zone where you plan to offer packet inspection services, create and
configure the necessary networking and compute resources.
Create a VPC network.
We recommend creating a custom mode Virtual Private Cloud
network , which
gives you full control over creating
subnets .
Create subnets.
In each region that contains the zone where you want to offer the packet
inspection service, create at least one subnet. You use the subnet for the
network interfaces of your packet inspection VMs.
Create zonal managed or zonal unmanaged instance groups containing your
packet inspection VMs.
We recommend using managed instance groups, if possible. If you choose
managed instance groups, you must use zonal managed instance groups. While
the load balancer supports regional managed instance groups and GCE_VM_IP
network endpoint group (NEG) backends, these backend types cannot be used
for packet inspection. For more information, see Create a MIG in a single
zone .
Note: Regional managed instance groups and NEG backends are not supported
for packet inspection.
Create firewall rules.
Create ingress allow firewall rules to permit UDP packets from all
relevant subnet gateway IPv4 addresses of all subnets used by consumer VMs
whose packets are intercepted. For more information, see Understand GENEVE
format .
Create internal passthrough Network Load Balancers.
Create a load balancer in each zone of the region where you want to offer
packet inspection services.
While configuring the load balancer, make a note of the following:
The load balancer's backend service protocol must be either UDP or
UNSPECIFIED .
The load balancer's forwarding rule must use the UDP protocol and
specify destination port 6081 to accept GENEVE-encapsulated packets.
Make sure that packet inspection VMs preserve each packet's 5-tuple
characteristics. Packets that are allowed can't create a new connection
with different packet characteristics.
The load-balanced network interface (NIC) of each packet inspection VM
must use the same VPC network as the load balancer's
backend service. For more information, see Instance group backends and
network interfaces , Backend
service network
specification ,
and Backend service network
rules .
GENEVE-encapsulated packets are routed to the packet inspection VMs with
destinations that match the IP address of the internal passthrough Network Load Balancer, UDP
protocol, and destination port 6081 .
The source IP address for
each GENEVE-encapsulated packet is the gateway IPv4 address of the
subnet that contains the consumer VM NIC whose packets were
intercepted. The source port is calculated by an opaque hash.
The health check you configure for the internal passthrough Network Load Balancer must use a
supported health check
protocol .
Ingress allow firewall rules must also permit health check traffic.
For more information about health checks, see How health checks
work .
To simplify maintenance and increase availability, configure failover
for internal passthrough Network Load Balancer .
Configure in-band resources
Create the following resources to offer packet inspection services to consumers:
Create an intercept deployment
group
in either the same project that contains the intercept deployments or in a
different project in the same organization. For more information, see
Create and manage intercept deployment
groups .
Create an intercept
deployment
in each zone of the project where you have created the packet inspection VMs
and internal passthrough Network Load Balancers.
Configure each intercept deployment to reference the
forwarding rule of the internal passthrough Network Load Balancer with packet inspection VMs in the same
zone as the intercept deployment. For more information, see Create and manage intercept
deployments .
Update the IAM policy of the project that contains the
intercept deployment group, granting the Intercept Deployment External User
role
( roles/networksecurity.interceptDeploymentExternalUser ) predefined role to
the IAM principals who need to use the packet inspection
services offered by the intercept deployment group.
Alternatively, you can grant a custom role that at least includes the
predefined role's permissions.
While configuring the in-band resources, consider the following:
The intercept deployment group, its member zonal intercept deployments,
their internal passthrough Network Load Balancers, and packet inspection VMs must be located in a single
service producer project.
Within a producer VPC network that's used by VMs and internal passthrough Network Load Balancers for
packet inspection, all zonal intercept deployments must belong to the same
intercept deployment group.
Each intercept deployment references only one internal passthrough Network Load Balancer.
What's next
Intercept deployment groups overview
Intercept deployments overview
Create and manage intercept deployment groups
Create and manage intercept deployments
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
