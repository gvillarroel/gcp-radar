---
title: "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/create-domain
  title: "Quickstart: Create a domain \_|\_ Managed Service for Microsoft Active Directory\
    \ \_|\_ Google Cloud Documentation"
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
Create a domain
This page shows you how to create a domain with Managed Service for Microsoft Active Directory.
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
Enable the Managed Microsoft AD, Cloud DNS, and Compute Engine APIs.
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
Enable the Managed Microsoft AD, Cloud DNS, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create a new Virtual Private Cloud (VPC)
network to deploy your domain to, or use an existing one. Managed Microsoft AD doesn't support legacy networks . Note
down your VPC network's full resource name , which you have to specify during the domain
creation process. It is in the following
format:
projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME
Before you create a VPC network, make sure that you read Select VPC networks .
Make sure that you enable the APIs and create the VPC in the same project where you have enabled billing.
Required roles
To get the permissions that
you need to complete this quickstart,
ask your administrator to grant you the
following IAM roles on your project:
Google Cloud Managed Identities Admin ( roles/managedidentities.admin )
Compute Network User ( roles/compute.networkUser )
For more information about granting roles, see Manage access to projects, folders, and organizations .
These predefined roles contain
the permissions required to complete this quickstart. To see the exact permissions that are
required, expand the Required permissions section:
Required permissions
The following permissions are required to complete this quickstart:
managedidentities.domains.create
compute.networks.list
You might also be able to get
these permissions
with custom roles or
other predefined roles .
Gather information
You need the following information to create your domain:
A fully qualified domain name
(FQDN)
such as ad.example.com . For more information, see Microsoft's naming
conventions in Active
Directory .
A private IP address range that is not in use by any of the
VPC subnetworks—for example, 172.16.0.0/24 ,
192.168.0.0/24 , or 10.1.0.0/24 . Ideally, you should select a range that
is not in use by any of the VPC subnetworks where you can
use the domain. For more information, see Select IP address
ranges .
A region to deploy the domain controller to—for
example, us-central1 . When you create a domain, you can deploy the domain
controller in only one region. After you create the domain, you can add
domain controllers to additional
regions to
increase availability and be resilient to regional outages .
For information about the supported regions, see
Regions .
A delegated administrator account
username . You can
either use the default username ( setupadmin ) or modify it. However, you
can't change this username after you complete the domain creation.
The full resource name of the authorized
VPC network, which is in the following format:
projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME
Create the domain
To create a domain, complete the following steps:
Console
Go to the Managed Microsoft AD page.
Go to Managed Microsoft AD
Select Create New AD Domain .
On the Create new domain page, enter the gathered
information .
Enter the Fully qualified domain name (FQDN) for your domain.
In the Network details section, select your VPC
network name from the list. Select OK .
In the CIDR Range section, enter the IP address range for your
domain.
In the Regions section, select a region from the list in which
you want to deploy the domain controller.
In the Admin name field of the Delegated admin section, use
the default username ( setupadmin ) or enter a username for your
delegated administrator account.
This is your only opportunity to change the username for the delegated
administrator account. After domain creation, you can't change the username
for the delegated administrator account.
Select Create domain .
It can take up to 60 minutes to create a domain. When the domain creation is
complete, you receive a notification in the Google Cloud console.
You can view the status of this operation at any time under
Notifications in the Google Cloud console. If the domain creation
fails, click See all activities under Notifications to view the
error message.
gcloud
Run the following gcloud CLI command:
gcloud active-directory domains create FULLY_QUALIFIED_DOMAIN_NAME \
--reserved-ip-range= CIDR_RANGE --region= REGION \
--authorized-networks=projects/ PROJECT_ID /global/networks/ VPC_NETWORK_NAME
Replace the placeholder variables with the gathered
information .
You receive the following response that indicates domain creation has
started:
Create request issued for: FULLY_QUALIFIED_DOMAIN_NAME
Waiting for operation-1554140234884-5857b78a1a49e-02bc63a3-77e5c7ee to complete...
It can take up to 60 minutes to create a domain. The gcloud CLI
operation status updates when the domain creation is complete.
If the domain creation fails, the gcloud CLI displays an error
message on the command line.
You can repeat this process to create multiple independent domains in the same
project.
Note: By default, you can create two independent domains in the same project.
For more information, see Limits .
If you want to increase the number of independent domains that you can create in
the same project, you can contact Google Cloud
support .
To make the domain available on a network in a different project, you can
configure domain peering .
You can't create Active Directory
sites
in Managed Microsoft AD because Managed Microsoft AD doesn't support
the Active Directory Sites and Services feature.
You can't create a child
domain
in Managed Microsoft AD. Also, Managed Microsoft AD can't be part of
any other Active Directory domain deployed either on Google Cloud or
on-premises. However, after you create a Managed Microsoft AD domain, you
can create a trust relationship
between the Managed Microsoft AD domain and any other non-Managed Microsoft AD domain.
For information about the errors that you might encounter while creating a
domain, see Unable to create a Managed Microsoft AD
domain .
What's next
Join a Windows VM to a domain
Join a Linux VM to a domain
Connect to a Managed Microsoft AD domain
Configure domain peering
Deploy domain controllers in additional regions
Deploy Managed Microsoft AD with cross-project access using domain peering
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
