---
title: "Access requirements \_|\_ GKE on Azure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/concepts/requirements
  title: "Access requirements \_|\_ GKE on Azure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on Azure, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE on Azure
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Access requirements
This page describes the Azure and Google Cloud requirements to use
GKE on Azure .
Azure
This section describes the Azure permissions and network access required
for installing and using GKE on Azure.
Installation roles and permissions
To set up your Azure account for GKE on Azure, you need the following
Azure built-in roles :
Application Administrator
for creating an Azure Active Directory Application and uploading certificates.
User Access Administrator
for granting access to a resource group and resources.
Contributor
for creating resources.
Application roles and permissions
To allow GKE on Azure to manage resources in your Azure
account, you must grant the app registration permissions. The following section
describes these permissions.
For examples of how to grant these permissions, see
Prerequisites .
Create custom roles
GKE on Azure needs the following permissions to create custom roles
that grant cluster control planes access to resources on the same VNet.
Scope: your VNet resource group
Permissions:
"Microsoft.Authorization/roleDefinitions/read",
"Microsoft.Authorization/roleDefinitions/write",
"Microsoft.Authorization/roleDefinitions/delete",
Join the VNet
GKE on Azure needs the following permissions to join resources to the
virtual network (VNet). It also sets up role assignments to allow control
plane virtual machine (VM) instances to use the virtual network.
Scope: VNet resource
Permissions:
"*/read",
"Microsoft.Network/*/join/action",
"Microsoft.Authorization/roleAssignments/read",
"Microsoft.Authorization/roleAssignments/write",
"Microsoft.Authorization/roleAssignments/delete",
VM identity roles
GKE on Azure needs the following Azure built-in roles
to create resources and manage VM identity role assignments within resource
groups. GKE on Azure also uses Azure Key Vault to distribute secrets.
Scope: your cluster resource group
Roles:
User Access Administrator
Contributor
Key Vault Administrator
Outbound network access
By default, GKE on Azure clusters are private to your
Azure Virtual Network (VNet. This means that inbound traffic from the internet
is not permitted, and VMs do not have public IP addresses.
Limited outbound internet access is required to create and manage clusters.
Outbound internet connectivity should be provided by a NAT gateway.
Outbound connections
This section defines the addresses where GKE on Azure needs to
connect to create and manage clusters.
General connections
Control plane and node pool VMs must be able to resolve DNS and establish
outbound TCP connections on port 443.
Outbound host names
GKE on Azure might connect to the following endpoints:
Endpoint
Reason
storage.googleapis.com
For fetching binary dependencies from Cloud Storage during installation.
*.gcr.io
For fetching binary dependencies during installation from Container Registry.
gkeconnect.googleapis.com
For GKE multi-cluster management .
oauth2.googleapis.com sts.googleapis.com
For cluster authentication.
logging.googleapis.com
For sending logs to Cloud Logging.
monitoring.googleapis.com
For sending metrics to Cloud Monitoring.
opsconfigmonitoring.googleapis.com
For sending resource metadata to Cloud Monitoring.
servicecontrol.googleapis.com
For Cloud Audit Logging.
Google Cloud
This section describes the Google Cloud Identity and Access Management (IAM) roles
and permissions that you need to install GKE on Azure.
Identity and Access Management roles
Install GKE on Azure
Important: GKE on Azure is available as a limited preview for
customers with an existing relationship with Google Cloud. Contact your sales
representative for access.
To install GKE on Azure preview, the user that activates the
GKE on Azure API
needs to be part of an allowlist.
Manage clusters
To manage GKE clusters, you can use predefined
IAM roles. For more information, see
API permissions .
Google Cloud APIs
GKE on Azure uses the following APIs on your Google Cloud project:
gkemulticloud.googleapis.com
anthos.googleapis.com
gkeconnect.googleapis.com
cloudresourcemanager.googleapis.com
containerregistry.googleapis.com
gkehub.googleapis.com
logging.googleapis.com
monitoring.googleapis.com
opsconfigmonitoring.googleapis.com
servicecontrol.googleapis.com
serviceusage.googleapis.com
stackdriver.googleapis.com
storage-api.googleapis.com
storage-component.googleapis.com
securetoken.googleapis.com
iam.googleapis.com
iamcredentials.googleapis.com
sts.googleapis.com
Set up workstation
To install and upgrade your GKE on Azure installation, you must have
access to a workstation running Linux or macOS. This documentation assumes that you
are using a bash shell on Linux or macOS. If you do not have access to a bash
shell environment, you can use Cloud Shell .
Azure
To install GKE on Azure, you need the Azure CLI installed.
For more information, see
Install the Azure CLI .
Google Cloud CLI
You install and manage GKE on Azure with the Google Cloud CLI from the
Google Cloud CLI version 347.0.0 or later. To confirm that you have the
gcloud CLI installed, run the following command:
gcloud version
If you do not have the gcloud CLI installed, see
Installing Google Cloud CLI .
What's next
Complete the prerequisites for
installation.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-02 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-02 UTC."],[],[]]
