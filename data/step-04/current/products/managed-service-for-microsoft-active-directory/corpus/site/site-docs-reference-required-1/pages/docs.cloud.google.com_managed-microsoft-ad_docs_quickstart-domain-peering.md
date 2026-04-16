---
title: "Quickstart: Configure domain peering \_|\_ Managed Service for Microsoft Active\
  \ Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/quickstart-domain-peering
  title: "Quickstart: Configure domain peering \_|\_ Managed Service for Microsoft\
    \ Active Directory \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Access and resource management
Managed Microsoft AD
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Configure domain peering
This page shows you how to configure domain peering with Managed Service for Microsoft Active Directory (Managed Microsoft AD).
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
Enable the
Managed Microsoft AD, Cloud DNS, and Compute Engine
APIs.
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
Verify that billing is enabled for your Google Cloud project .
Enable the
Managed Microsoft AD, Cloud DNS, and Compute Engine
APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a Managed Microsoft AD domain in the domain resource project.
Create a VPC network in the VPC resource project to which you want to peer your domain with.
Make sure that the IP ranges assigned to Managed Microsoft AD and any authorized networks don't overlap.
Make sure that you have any one of the following IAM roles:
Google Cloud Managed Identities Admin ( roles/managedidentities.admin )
Google Cloud Managed Identities Peering Admin ( roles/managedidentities.peeringAdmin )
Optional: Check if you have the following IAM roles as well:
Google Cloud Managed Identities Viewer ( roles/managedidentities.viewer )
Compute Network User ( roles/compute.networkUser )
Compute Network Viewer ( roles/compute.networkViewer )
Note:
Be sure to enable the APIs and create the VPC in the same project
where you enabled billing.
Configure domain peering
After you complete the prerequisites and gather your domain information, you
can create the domain peering.
Console
To create a peering from the domain resource project, follow these steps:
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Click the Peerings tab.
On the Peerings page, click Create peering .
In the Name field, enter a name for your peering resource.
Select Domain .
In the Select domain from this project list, select your Managed Microsoft AD domain.
Enter the project ID or number that includes the VPC network you want to peer with.
Enter the name of your VPC network.
Optional: To add labels, expand the Labels section. Click Add labels , and then enter the key-value pairs.
Click Create .
After the operation is complete, the Peerings page lists the peering with status as Disconnected .
To create a peering from the VPC resource project, follow these steps:
In the Google Cloud console, go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Click the Peerings tab.
On the Peerings page, click Create peering .
In the Name field, enter a name for your peering resource.
Select Network .
In the Select network from this project list, select your VPC network.
Enter the project ID or number that includes your Managed Microsoft AD domain.
Enter the name of your Managed Microsoft AD domain.
Optional: To add labels, expand the Labels section. Click Add labels , and then enter the key-value pairs.
Click Create .
After the operation is complete, the Peerings page lists the peerings with status as Connected on both the projects.
gcloud
Run the following gcloud CLI command.
gcloud active-directory peerings create PEERING_RESOURCE_NAME \
--domain= DOMAIN_NAME \
--authorized-network= VPC_NETWORK_NAME
Replace the following:
PEERING_RESOURCE_NAME : a name for your domain peering resource (such as my-domain-peering ).
DOMAIN_NAME : a full resource name for your
Managed Microsoft AD domain, in the form of:
projects/ PROJECT_ID /locations/global/domains/ DOMAIN_NAME .
VPC_NETWORK_NAME : a full resource name for your
VPC network, in the form of:
projects/ PROJECT_ID /global/networks/ NETWORK_NAME .
You receive the following response that indicates domain peering creation has
started:
Create request issued for: PEERING_RESOURCE_NAME
Waiting for operation-1842751234221-5857b78a1a49e-02bc63a3-77e5c7ee to complete...
After the operation is complete, configure domain peering in the VPC resource
project.
Run the following gcloud CLI command.
gcloud active-directory peerings create PEERING_RESOURCE_NAME \
--domain= DOMAIN_NAME \
--authorized-network= VPC_NETWORK_NAME \
--project= VPC_RESOURCE_PROJECT_ID
Replace the following:
PEERING_RESOURCE_NAME : a name for your domain peering resource (such as my-domain-peering ).
DOMAIN_NAME : a full resource name for your
Managed Microsoft AD domain, in the form of:
projects/ PROJECT_ID /locations/global/domains/ DOMAIN_NAME .
VPC_NETWORK_NAME : a full resource name for your
VPC network, in the form of:
projects/ PROJECT_ID /global/networks/ NETWORK_NAME .
VPC_RESOURCE_PROJECT_ID : the project ID of the VPC network project that is hosting the VPC.
You receive the following response that indicates domain peering creation has started:
Create request issued for: PEERING_RESOURCE_NAME
Waiting for operation-1842751821453-5857b78a1a49e-02bc63a3-77e5c7ee to complete...
This operation can take up to 15 mins to complete.
You can repeat the process to create multiple domain peerings in a project.
However, you can peer up to 10 VPC networks with a Managed Microsoft AD domain.
What's next
Manage domain peerings
Join a Windows VM to a domain
Join a Linux VM to a domain
Connect to a Managed Microsoft AD domain
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
