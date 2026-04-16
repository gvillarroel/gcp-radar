---
title: "Connect to Managed Service for Microsoft Active Directory \_|\_ NetApp Volumes\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/connect-to-managed-service-for-microsoft-ad
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/netapp/volumes/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/netapp/volumes/docs/configure-and-use/active-directory/connect-to-managed-service-for-microsoft-ad
  title: "Connect to Managed Service for Microsoft Active Directory \_|\_ NetApp Volumes\
    \ \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Storage
NetApp Volumes
Guides
Send feedback
Connect to Managed Service for Microsoft Active Directory
Stay organized with collections
Save and categorize content based on your preferences.
This page provides instructions for how to connect to Managed Service for Microsoft Active Directory.
NetApp Volumes supports Managed Microsoft AD.
Managed Microsoft AD uses private services access to connect to consumer
projects, similar to NetApp Volumes. Private services access
uses Virtual Private Cloud (VPC) peering, which blocks transitive traffic between
VPCs. NetApp Volumes can't communicate with
Managed Microsoft AD through a consumer VPC, so you
need a domain peering to
establish this connection.
Before you begin
Make sure you meet the prerequisites mentioned in
Managed Microsoft AD - Before you begin .
Establish a domain peering
Use the following instructions to establish a domain peering:
Identify the project name of the NetApp Volumes tenant project
that owns your NetApp Volumes resources:
gcloud compute networks peerings list --project= project_owning_NetAppVolumes --flatten=peerings --filter="peerings.name=sn-netapp-prod"
The PEER_PROJECT parameter shows the name of the NetApp Volumes
tenant project. The PEER_NETWORK parameter shows the tenant project VPC
name, which should be netapp-prod-network .
Follow the instructions in
Configure domain peering
to create a domain peering from Managed Microsoft AD to
NetApp Volumes, using the tenant project ID and network you
identified from the previous step.
Note that you can only establish the peering from the domain resource project
to the NetApp Volumes tenant project. The reverse peering
from the VPC resource project
(NetApp Volumes tenant project) to the domain resource project
requires a support case with
Google Cloud Customer Care .
Open a support case with
Google Cloud Customer Care to establish
the reverse peering from NetApp Volumes to Managed Microsoft AD.
Provide the output of the following command to Google Cloud Customer Care to
identify which peering to accept.
gcloud active-directory peerings list --project= project_owning_ManagedAD
After Google Cloud Customer Care establishes the two-way peering, the status of
your peering shows CONNECTED . Verify the peering status:
gcloud active-directory peerings list --project= project_owning_ManagedAD
Create an Active Directory policy
in the same region where you plan to create volumes using Managed Microsoft AD.
You need to specify the following parameters:
DNS servers IP address:
For the Flex Unified and Flex File service level, use 169.254.169.254
for the DNS servers IP address in the policy.
For Standard, Premium, and Extreme service levels, follow the
instructions in Using IP address for DNS resolution .
You will use the entry point IP addresses created by Cloud DNS in
your Active Directory policy.
Organizational Unit (OU): Managed Microsoft AD puts all objects
into OU=cloud by default . You need
to specify a correct organizational unit parameter for your environment.
For example, if you have a Windows domain called
engineering.example.com , the default organizational unit to
specify would be CN=Computers,OU=Cloud,DC=engineering,DC=example,DC=com .
Attach the Active Directory policy to the storage pool to be used.
For the Flex File service level, test Active Directory policy connection by
creating a volume which uses the Active Directory.
For Standard, Premium, and Extreme service levels, test Active Directory policy connection before
creating a volume.
What's next
Use Active Directory as LDAP server for NFS .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
