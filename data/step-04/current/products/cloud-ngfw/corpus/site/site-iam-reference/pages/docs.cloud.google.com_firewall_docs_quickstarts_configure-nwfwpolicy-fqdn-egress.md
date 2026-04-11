---
title: "Configure a global network firewall policy to allow egress traffic to an FQDN\
  \ \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/firewall/docs/about-firewall-endpoints
source_metadata:
  url: https://docs.cloud.google.com/firewall/docs/quickstarts/configure-nwfwpolicy-fqdn-egress
  title: "Configure a global network firewall policy to allow egress traffic to an\
    \ FQDN \_|\_ Cloud Next Generation Firewall \_|\_ Google Cloud Documentation"
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
Configure a global network firewall policy to allow egress traffic to an FQDN
Stay organized with collections
Save and categorize content based on your preferences.
Learn how to create and configure a global network firewall policy
to allow egress traffic to a specific fully qualified domain name (FQDN) by using
the Google Cloud console. The firewall policy blocks all other egress traffic
originating from your network. This quickstart creates
a Virtual Private Cloud (VPC) network with a subnet, creates a virtual machine
(VM) instance in the VPC network, sets up a firewall policy that
uses egress rules, and then tests the firewall policy from the VM.
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine and Identity-Aware Proxy (IAP) APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
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
If you're using an existing project for this guide,
verify that you have
the permissions required to complete this guide . If you created a new
project, then you already have the required permissions.
Verify that billing is enabled for your Google Cloud project .
Enable the Compute Engine and Identity-Aware Proxy (IAP) APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Make sure that you know about the firewall policies and
firewall policy rules
concepts.
Make sure that you know about the Cloud NGFW pricing.
For more information, see Cloud NGFW pricing .
Required roles
To get the permissions that
you need to create a custom VPC network, VM, Cloud Router, Cloud NAT, global network firewall policy and its rules, and to view the logs,
ask your administrator to grant you the
following IAM roles on the project:
Compute Network Admin role ( roles/compute.networkAdmin )
Compute Instance Admin (v1) role ( roles/compute.instanceAdmin.v1 )
Compute Security Admin role ( roles/compute.securityAdmin )
Logs Viewer role ( roles/logging.viewer )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Create a custom VPC network with an IPv4 subnet
Create a custom mode VPC network with an IPv4 subnet.
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
Click Create VPC network .
For Name , enter vpc-fw-policy-egress .
For Subnet creation mode , select Custom .
In the New subnet section, specify the following configuration parameters for the subnet:
Name : Enter subnet-1 .
Region : Select us-central1 .
IPv4 range: Enter 10.0.0.0/24 .
Click Done .
Click Create .
Create a VM
Create a VM in the subnet that you configured in the preceding section.
In the Google Cloud console, go to the Create an instance page.
Go to Create an instance
In the Machine configuration pane, do the following:
For Name , enter instance-1-us .
For Region , select us-central1 (Iowa) .
In the navigation menu, click Networking .
In the Network interfaces section, click default and
specify the following configuration parameters:
Network : vpc-fw-policy-egress
Subnetwork : subnet-1 IPv4 (10.0.0.0/24)
External IPv4 address : None
Click Done .
Click Create .
Create a Cloud Router and a Cloud NAT gateway
In the previous section, you created a VM without any external IP address.
To enable the VM to access the public internet, create a Cloud Router
and a Cloud NAT gateway for the same region and subnet where you
created your VM.
In the Google Cloud console, go to the Cloud NAT page.
Go to Cloud NAT
Click Get started or Create Cloud NAT gateway .
Note: If this is the first Cloud NAT gateway that you're creating,
click Get started . If you already have existing gateways, Google Cloud
displays the Create Cloud NAT gateway button. To create another gateway,
click Create Cloud NAT gateway.
For Gateway name , enter fw-egress-nat-gw .
For NAT type , select Public .
In the Select Cloud Router section, specify the following configuration parameters:
Network : Select vpc-fw-policy-egress .
Region : Select us-central1 (Iowa) .
Cloud Router : Click Create new router .
For Name , enter fw-egress-router .
Click Create .
Click Create .
Create a global network firewall policy to allow IAP TCP tunneling
To allow Identity-Aware Proxy tunneling for the VMs in your network, create a global
network firewall policy and add a firewall rule to the policy.
IAP allows administrative access to the VMs.
The firewall rule must have the following characteristics:
Applies to all VMs that you want to be accessible by using IAP TCP forwarding.
Allows ingress traffic from the IP address range 35.235.240.0/20 .
This range contains all the IP addresses that IAP uses for TCP forwarding.
Allows connections to all ports that you want to be accessible by using
IAP TCP forwarding, for example, port 22 for SSH.
To enable IAP access to all VMs in the vpc-fw-policy-egress network,
follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
Click Create firewall policy .
In the Configure policy section, for Policy name , enter fw-egress-policy .
For Deployment scope , select Global and click Continue .
To create rules for your policy, in the Add rules section, click Add rule .
For Priority , enter 100 .
For Direction of traffic , select Ingress .
For Action on match , select Allow .
For Logs , select On .
In the Target section, for Target type , select All instances in the network .
In the Source section, for IP ranges , enter 35.235.240.0/20 .
In the Protocol and ports section, select Specified protocols and ports .
Select the TCP checkbox, and for Ports , enter 22 .
Click Create .
Click Continue .
To associate your VPC network with the policy, in the
Associate policy with VPC networks section, click Associate .
Select the vpc-fw-policy-egress checkbox and click Associate .
Click Continue .
Click Create .
Add a firewall rule to deny egress traffic to all destinations
To deny egress traffic to all destinations, you add a firewall rule to
fw-egress-policy .
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-egress-policy .
Click Create rule .
For Priority , enter 700 .
For Direction of traffic , select Egress .
For Action on match , select Deny .
For Logs , select On .
In the Destination section, for IP ranges , enter 0.0.0.0/0 .
Click Create .
Add a firewall rule to allow egress traffic to only a specific FQDN
To allow egress traffic to only a specific FQDN, ads.google.com , add a firewall
rule in fw-egress-policy .
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-egress-policy .
Click Create rule .
For Priority , enter 600 .
For Direction of traffic , select Egress .
For Action on match , select Allow .
For Logs , select On .
In the Destination section, for FQDNs , enter ads.google.com .
Click Create .
Test the global network firewall policy
After you have configured the global network firewall policy, follow these steps
to test the policy:
In the Google Cloud console, go to the VM instances page.
Go to VM instances
In the Connect column for the instance-1-us VM, click SSH .
In the SSH-in-browser dialog, click Authorize and wait for the connection to establish.
To verify that the egress traffic to https://ads.google.com is allowed, run the following command:
curl -I https://ads.google.com
The preceding command returns the header information of
https://ads.google.com ,
which means that egress connections are allowed.
To verify that the egress traffic is blocked to any other destination, specify any FQDN and run the following command:
curl -m 2 -I https://mail.yahoo.com
The preceding command returns a Connection timed out message, which is expected
because you created a firewall rule to deny egress traffic to all destinations
except https://ads.google.com .
View the logs
You can verify that the firewall rules were applied to the egress traffic by accessing the logs. To view the log details, follow these steps:
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-egress-policy .
In the Hit count column, click the number for the rule that you created
in the Create a global network firewall policy
section. The Logs explorer page opens.
To view the firewall rule applied to the egress traffic, expand the individual
log. You can view the connection, disposition, remote location, and rule
details by expanding the relevant sections.
Clean up
To avoid incurring charges to your Google Cloud account for the resources
used in this quickstart, either delete the project that contains the resources,
or keep the project and delete the individual resources.
To delete the resources created in this quickstart, complete the following
tasks.
Delete the firewall policy
In the Google Cloud console, go to the Firewall policies page.
Go to Firewall policies
In the Network firewall policies section, click fw-egress-policy .
Click the Associations tab.
Select the vpc-fw-policy-egress checkbox, and click Remove association .
In the Remove a firewall policy association dialog, click Remove .
Click Delete .
In the Delete a firewall policy dialog, click Delete .
Delete the VM
In the Google Cloud console, go to the VM instances page.
Go to VM instances
Select the checkbox for the instance-1-us VM.
Click Delete .
In the Delete instance-1-us dialog, click Delete .
Delete the Cloud NAT gateway and Cloud Router
In the Google Cloud console, go to the Cloud routers page.
Go to Cloud routers
Select the checkbox for fw-egress-router .
Click Delete .
In the Delete fw-egress-router dialog, click Delete .
When you delete a Cloud Router, the associated Cloud NAT gateway is also deleted.
Delete the VPC network and its subnets
In the Google Cloud console, go to the VPC networks page.
Go to VPC networks
In the Name column, click vpc-fw-policy-egress .
Click Delete VPC network .
In the Delete a network dialog, click Delete .
When you delete a VPC network, its subnets are also deleted.
What's next
To create, update, monitor, and delete VPC firewall rules, see Use VPC firewall rules .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
