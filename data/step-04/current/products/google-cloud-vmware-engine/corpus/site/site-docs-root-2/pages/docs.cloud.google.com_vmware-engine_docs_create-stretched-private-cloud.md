---
title: "Create a stretched private cloud with Vmware Engine \_|\_ Google Cloud VMware\
  \ Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/create-stretched-private-cloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/create-stretched-private-cloud
  title: "Create a stretched private cloud with Vmware Engine \_|\_ Google Cloud VMware\
    \ Engine \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
VMware Engine
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create a stretched private cloud with Vmware Engine
This quickstart explains how to set up Google Cloud VMware Engine and create a
stretched private cloud .
Before you begin
To perform the steps in this quickstart, you need access to Google Cloud VMware Engine,
available VMware Engine node quota, and an appropriate IAM role.
Prepare the following requirements before you proceed:
Request API access and node quota .
Verify that you're familiar with the address ranges you want to use for
VMware management appliances and the HCX deployment network. For details,
see Networking requirements .
Have the VMware Engine Service Admin IAM role.
Note: The Owner and Editor basic roles include the VMware Engine
Service Admin role. The Viewer basic role includes the
VMware Engine Service Viewer role. For more information,
see VMware Engine IAM roles and permissions .
Lastly, the steps in this document assume that you first do the following:
Allocate a unique IP address range for vSphere or vSAN subnets of the private
cloud you want to create.
Minimum CIDR range prefix: /24
Maximum CIDR range prefix: /20
If you want global address resolution using Cloud DNS ,
then enable the Cloud DNS API and complete
Cloud DNS setup before you create your private cloud.
The vSphere or vSAN subnet address space must not overlap with any network that
will communicate with the private cloud, such as on-premises networks and
Google Cloud Virtual Private Cloud (VPC) networks. For more information about
vSphere or vSAN subnets, see VLANs and subnets on VMware Engine .
Create a stretched private cloud
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
you want to create the stretched private cloud.
Click Create .
Click Stretched private cloud .
Enter your primary hosting location and select your secondary zone.
Select the node type for your primary cluster.
Select the number of nodes per zone for the stretched private cloud.
Create your stretched private cloud with a minimum of 3 nodes per zone.
Optional: Click the Customize Cores toggle if you want to reduce the
number of available cores for each node in the management cluster.
For details, see Custom core counts .
Enter a CIDR range for the VMware management network. Make sure that the
CIDR range doesn't overlap with any of your on-premises or cloud subnets.
Select Create new network to create a new VMware Engine network or select
from an existing network, if applicable.
Click Create to begin creating the private cloud.
As VMware Engine creates your new stretched private cloud, it deploys
a number of VMware components and divides the
provided IP address range into subnets. Stretched private cloud creation can
take 30 minutes to 2 hours. After the provisioning is complete, you receive an
email.
Note: If the stretched cluster creation fails and you see the message
error Stretched private cloud creation is not allowed in projects without the
gcp.requiresPhysicalZoneSeparation organizational policy constraint ,
reach out to your account or support team before creating the stretched cluster
for a new organization.
Connect to your private cloud
To connect to your standard or stretched private cloud vCenter server, establish
a secure connection from your network to the private cloud. You can use any of
the following options to create a secure connection:
Connect an on-premises network to VMware Engine private cloud
Connect using a point-to-site VPN connection
What's next
Get management appliance sign-in credentials
for your private cloud.
Configure internet access for workload VMs
for your private cloud.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
