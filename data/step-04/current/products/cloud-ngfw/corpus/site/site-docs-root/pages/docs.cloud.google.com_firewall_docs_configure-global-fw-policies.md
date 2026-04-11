---
title: "Configure a global network firewall policy to enable ingress traffic \_|\_\
  \ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewalls
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/configure-global-fw-policies
  title: "Configure a global network firewall policy to enable ingress traffic \_\
    |\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Cloud NGFW
Guides
Send feedback
Configure a global network firewall policy to enable ingress traffic
Stay organized with collections
Save and categorize content based on your preferences.
In a custom Virtual Private Cloud (VPC) network with multiple subnets, by default, egress traffic is allowed, but ingress traffic is denied. To enable ingress traffic and allow VM instances in different subnets to communicate with each other, you can create a
global network firewall policy in
Cloud Next Generation Firewall on the VPC network, which allows ingress
traffic from a specific IP address range of the subnet.
This tutorial describes how to configure a global network firewall policy to
allow internal traffic between VM subnets in a custom VPC network.
Objectives
This tutorial shows you how to complete the following tasks:
Create a custom VPC network with two subnets.
Create two Linux VM instances (a client VM and a server VM) without external IP addresses in separate subnets of the VPC network.
Create a Cloud Router and a Cloud NAT gateway as a best practice to download software packages.
Install the Apache server on the server VM.
Create a global network firewall policy with the following rules:
Allow egress traffic to any destination.
Enable firewall logging.
Use Identity-Aware Proxy (IAP) to allow SSH connectivity to the VMs.
Allow the client VM to connect to the server VM running the Apache server.
Test the connection.
The following diagram shows the flow of the traffic between subnets of a custom VPC network after a global network firewall policy allows internal ingress traffic.
A global network firewall policy allowing ingress traffic from a subnet in a custom VPC network (click to enlarge).
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
Enable the
Compute Engine API for your project.
Make sure that you have the Compute Network Admin ( roles/compute.networkAdmin ) Identity and Access Management role.
If you prefer to work from the command line, install the Google Cloud CLI. For the conceptual and installation information about the tool,
see gcloud CLI overview .
Note: If you haven't run the Google Cloud CLI previously, first run
gcloud init to initialize your gcloud CLI directory.
Create a custom VPC network with subnets
In this section, you create a custom mode VPC network with two IPv4 subnets.
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
For Name , enter vpc-fw-rules .
For Description , enter VPC network for the firewall rules tutorial .
For Subnet creation mode , select Custom .
In the New subnet section, specify the following configuration parameters for a subnet:
Name : subnet-fw-rules-server
Region : us-central1 (Iowa)
IPv4 range : 10.0.0.0/24
Private Google Access : On
Click Done .
Click Add subnet and specify the following configuration parameters:
Name : subnet-fw-rules-client
Region : us-central1 (Iowa)
IPv4 range : 192.168.10.0/24
Private Google Access : On
Click Done .
Click Create .
gcloud
To create a VPC network, run the following command:
gcloud compute networks create vpc-fw-rules \
--subnet-mode=custom \
--description="VPC network for the firewall rules tutorial"
Optional: In the Authorize cloud shell dialog, click Authorize .
To create a subnet, run the following command:
gcloud compute networks subnets create subnet-fw-rules-server \
--network=vpc-fw-rules \
--region=us-central1 \
--range=10.0.0.0/24 \
--enable-private-ip-google-access
To create another subnet, run the following command:
gcloud compute networks subnets create subnet-fw-rules-client \
--network=vpc-fw-rules \
--region=us-central1 \
--range=192.168.10.0/24 \
--enable-private-ip-google-access
By default, the VPC network has two implied IPv4 rules:
An allow egress rule with destination 0.0.0.0/0 and lowest possible
priority (65535) that allows any instance to send traffic to any
destination, except for traffic blocked by Google Cloud.
A deny ingress with source 0.0.0.0/0 and lowest possible priority
(65535) that protects all instances by blocking incoming connections to
them.
For more information, see Implied rules .
Create client and server VMs
In this section, you create two Linux VMs without external IP addresses in the
subnets of the VPC network you created in the previous section.
Create the server VM
Console
To create the server VM, follow these steps:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-fw-rules-server .
For Region , select us-central1 (Iowa) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-fw-rules
Subnetwork : subnet-fw-rules-server IPv4 (10.0.0.0/24)
External IPv4 address : None
Click Done .
Click Create .
gcloud
To create the server VM, run the following command:
gcloud compute instances create vm-fw-rules-server \
--network=vpc-fw-rules \
--zone=us-central1-a \
--subnet=subnet-fw-rules-server \
--stack-type=IPV4_ONLY \
--no-address
Create the client VM
Console
To create the client VM, follow these steps:
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter vm-fw-rules-client .
For Region , select us-central1 (Iowa) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-fw-rules
Subnetwork : subnet-fw-rules-client IPv4 (192.168.10.0/24)
External IPv4 address : None
Click Done .
Click Create .
gcloud
To create the client VM, run the following command:
gcloud compute instances create vm-fw-rules-client \
--network=vpc-fw-rules \
--zone=us-central1-a \
--subnet=subnet-fw-rules-client \
--stack-type=IPV4_ONLY \
--no-address
Create a Cloud Router and a Cloud NAT gateway
In the previous section, you created two Linux VMs without public IPv4 addresses.
To allow those VMs to access the public internet, you create a
Cloud Router and a Cloud NAT gateway.
Console
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click Get started or Create Cloud NAT gateway .
For Gateway name , enter gateway-fw-rules .
For NAT type , select Public .
In the Select Cloud Router section, specify the following configuration parameters:
Network : vpc-fw-rules
Region : us-central1
Cloud Router : Create new router .
For Name , enter router-fw-rules .
Click Create .
Click Create .
gcloud
To create a Cloud Router, run the following command:
gcloud compute routers create router-fw-rules \
--network=vpc-fw-rules \
--region=us-central1
To create a Cloud NAT gateway, run the following command:
gcloud compute routers nats create gateway-fw-rules \
--router=router-fw-rules \
--region=us-central1 \
--auto-allocate-nat-external-ips \
--nat-all-subnet-ip-ranges
Create a global network firewall policy
In this section, you create a global network firewall policy with the following:
An egress rule with 0.0.0.0./0 as the destination.
Logging enabled. VPC firewall rules logging lets you audit, verify, and
analyze the effects of your firewall rules.
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall policy .
In the Configure policy section, for Policy name , enter fw-policy .
For Deployment scope , select Global and click Continue .
To create rules for your policy, in the Add rules section, click Add rule .
For Priority , enter 65534 .
For Direction of traffic , select Egress .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Destination section, for IP ranges , enter 0.0.0.0/0 .
In the Protocol and ports section, select Allow all .
Click Create .
Click Continue .
To associate a VPC network with the policy, in the Associate policy with VPC networks section, click Associate .
Select the checkbox of vpc-fw-rules and click Associate .
Click Continue .
Click Create .
gcloud
To create a firewall policy, run the following command:
gcloud compute network-firewall-policies create fw-policy \
--global
To create a firewall rule that allows traffic to all destinations and enables logs, run the following command:
gcloud compute network-firewall-policies rules create 65534 \
--firewall-policy=fw-policy \
--direction=EGRESS \
--action=ALLOW \
--dest-ip-ranges=0.0.0.0/0 \
--layer4-configs=all \
--global-firewall-policy \
--enable-logging
To associate the firewall policy with the VPC network, run the following command:
gcloud compute network-firewall-policies associations create \
--firewall-policy=fw-policy \
--network=vpc-fw-rules \
--name=pol-association-fw-rules \
--global-firewall-policy
Add a firewall rule for IAP
In the previous section, you created Linux VMs without external IP addresses.
In this section, you enable Identity-Aware Proxy (IAP) to allow administrative
access to the VM instances that don't have external IP addresses.
To allow IAP to connect to your VM instances, create a firewall
rule that:
applies to all VM instances that you want to be accessible by
using IAP.
allows ingress traffic from the IP range 35.235.240.0/20 . This
range contains all IP addresses that IAP uses for TCP forwarding.
For IPv6 VMs, use the following IP range: 2600:2d00:1:7::/64 .
allows connections to all ports that you want to be accessible by
using IAP TCP forwarding, for example, port 22 for SSH and port 3389 for RDP.
Console
To allow RDP and SSH access to all VM instances in the vpc-fw-rules network, do the following:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-policy .
Click Create rule .
For Priority , enter 500 .
For Direction of traffic , select Ingress .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Source section, for IP ranges , enter 35.235.240.0/20 .
In the Protocols and ports section, select Specified protocols and ports .
Select the TCP checkbox, and for Ports , enter 22 and 3389 separated by a comma.
Click Create .
gcloud
To allow RDP and SSH access to all VM instances in the vpc-fw-rules
network, run the following command:
gcloud compute network-firewall-policies rules create 500 \
--firewall-policy=fw-policy \
--direction=INGRESS \
--action=ALLOW \
--src-ip-ranges=35.235.240.0/20 \
--global-firewall-policy \
--layer4-configs tcp:22,tcp:3389 \
--enable-logging
Install the Apache server
In this section, you install the Apache server on the server VM.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Connect column of the vm-fw-rules-server VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the connection to establish.
To install the apache2 package, at the command prompt, run the following
command:
sudo apt update && sudo apt -y install apache2
After installing Apache, the operating system automatically starts the
Apache server.
To verify that Apache is running, run the following command:
sudo systemctl status apache2 --no-pager
To overwrite the Apache web server default web page, run the following command:
echo '<!doctype html><html><body><h1>Hello World!</h1></body></html>' | sudo tee /var/www/html/index.html
Close the SSH-in-browser dialog.
Test the connection
After installing the Apache server on the server VM, connect to the server VM
from the client VM using the internal IP address of the server VM.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
From the Internal IP column of the vm-fw-rules-server VM, copy the
internal IP address of the VM.
In the Connect column of the vm-fw-rules-client VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the connection to establish.
To verify the connection, run the following command:
curl INTERNAL_IP -m 2
Replace INTERNAL_IP with the IP address of the
vm-fw-rules-server VM.
The Connection timed out message is expected because every VM creates an
implicit ingress firewall rule that denies all traffic. To allow traffic, you
add an ingress rule to the firewall policy.
Close the SSH-in-browser dialog.
Update the global network firewall policy to allow internal traffic
In this section, you update the global network firewall policy to allow internal
traffic from the subnet of the client VM.
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-policy .
Click Create rule .
For Priority , enter 501 .
For Direction of traffic , select Ingress .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Source section, for IP ranges , enter 192.168.10.0/24 .
Remember, the IP range 192.168.10.0/24 is assigned to
subnet-fw-rules-client .
In the Destination section, for IP type , select IPv4 . In
IP ranges , specify 10.0.0.0/24 .
Remember, the IP range 10.0.0.0/24 is assigned to
subnet-fw-rules-server .
Click Create .
gcloud
To update the firewall policy, run the following command:
gcloud compute network-firewall-policies rules create 501 \
--firewall-policy=fw-policy \
--direction=INGRESS \
--action=ALLOW \
--src-ip-ranges=192.168.10.0/24 \
--dest-ip-ranges=10.0.0.0/24 \
--layer4-configs=all \
--global-firewall-policy \
--enable-logging
Test the connection
After creating the firewall policy, connect to the server VM from the client VM
using the internal IP address of the server VM.
In the Google Cloud console, go to the VM instances page.
Go to VM instances
From the Internal IP column of the vm-fw-rules-server VM, copy the
internal IP address of the VM.
In the Connect column of the vm-fw-rules-client VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the connection to establish.
To verify the connection, run the following command:
curl INTERNAL_IP -m 2
Replace INTERNAL_IP with the IP address of the
vm-fw-rules-server VM.
The expected message is <!doctype html><html><body><h1>Hello World!</h1></body></html> .
Close the SSH-in-browser dialog.
To view firewall logs, see View logs .
Clean up
To avoid incurring charges to your Google Cloud account for the resources used in this
tutorial, either delete the project that contains the resources, or keep the project and
delete the individual resources.
In this section, you delete the resources created in this tutorial.
Delete the firewall policy
Console
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click the fw-policy name.
Click the Associations tab.
Select the checkbox of vpc-fw-rules and click Remove association .
In the Remove a firewall policy association dialog, click Remove .
Next to the fw-policy title, click Delete .
In the Delete a firewall policy dialog, click Delete .
After a policy is deleted, the Google Cloud console shows the Firewall policies page.
gcloud
Remove the association between the firewall policy and the VPC network.
gcloud compute network-firewall-policies associations delete \
--name=pol-association-fw-rules \
--firewall-policy=fw-policy \
--global-firewall-policy
If you set up the association between the firewall policy and the
VPC network through Google Cloud console, don't use the
gcloud CLI command to remove the association. If you can't
remember how you created the association or get the The network firewall
policy does not have an association with pol-association-fw-rules. error
when you run the command, use the Google Cloud console to remove the
association.
Delete the firewall policy.
gcloud compute network-firewall-policies delete fw-policy \
--global
Delete the VMs
Console
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkboxes of vm-fw-rules-client and vm-fw-rules-server VMs.
Click Delete .
In the Delete 2 instances? dialog, click Delete .
gcloud
To delete vm-fw-rules-client and vm-fw-rules-server VMs, run the
following command:
gcloud compute instances delete vm-fw-rules-client vm-fw-rules-server \
--zone=us-central1-a
When prompted, press Y to confirm, and then press Enter .
Delete the Cloud NAT gateway and Cloud Router
Console
In the Google Cloud console, go to the Cloud routers page.
Go to Cloud routers
Select the router-fw-rules checkbox.
Click Delete .
In the Delete router-fw-rules dialog, click Delete .
When you delete a Cloud Router, the associated Cloud NAT
gateway is also deleted.
gcloud
To delete the router-fw-rules Cloud Router, run the following command:
gcloud compute routers delete router-fw-rules \
--region=us-central1
When prompted, press Y to confirm, and then press Enter .
When you delete a Cloud Router, the associated Cloud NAT
gateway is also deleted.
Delete the VPC network and its subnets
Console
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
In the Name column, click vpc-fw-rules .
Click Delete VPC network .
In the Delete a network dialog, click Delete .
When you delete a VPC, its subnets are also deleted.
gcloud
To delete the subnets of the vpc-fw-rules VPC
network, run the following command:
gcloud compute networks subnets delete subnet-fw-rules-client subnet-fw-rules-server \
--region=us-central1
When prompted, press Y to confirm and press Enter .
To delete the vpc-fw-rules VPC network, run the
following command:
gcloud compute networks delete vpc-fw-rules
When prompted, press Y to confirm, and then press Enter .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
