---
title: "Quickstart: Create a private cloud by using VMware Engine \_|\_ Google Cloud\
  \ VMware Engine \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vmware-engine/docs/create-private-cloud
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/vmware-engine/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/vmware-engine/docs/create-private-cloud
  title: "Quickstart: Create a private cloud by using VMware Engine \_|\_ Google Cloud\
    \ VMware Engine \_|\_ Google Cloud Documentation"
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
Create a private cloud by using VMware Engine
This quickstart explains how to set up Google Cloud VMware Engine and create a standard
private cloud .
Before you begin
To perform the steps in this quickstart, you need access to Google Cloud VMware Engine,
available VMware Engine node quota, and an appropriate IAM role.
Prepare the following requirements before you proceed:
Request API access and node quota .
Verify that you're familiar with the address ranges you want to use for
VMware management appliances and the HCX deployment network. For details, see
Networking requirements .
Have the VMware Engine Service Admin IAM role.
Note: The Owner and Editor basic roles include the VMware Engine
Service Admin role. The Viewer basic role includes the VMware
Engine Service Viewer role.
For more information, see
VMware Engine IAM roles and permissions .
Create a standard private cloud
In the Google Cloud console, go to the Private clouds page.
Go to Private clouds
Click Select a project and then select the organization, folder, or project where
you want to create the private cloud.
Click Create .
Enter a name for the private cloud.
Select Standard private cloud for the private cloud type.
Select the location where you want the private cloud deployed.
Enter a name for the primary cluster.
Select the node type for your primary cluster.
Select the number of nodes for the private cloud. For production workloads,
create your private cloud with at least 3 nodes. VMware Engine
deletes private clouds that contain only 1 node after 60 days.
Optional: Click the Customize Node Cores toggle if you want to reduce the
number of available cores for each node in the management cluster. For
details, see Custom core counts .
Enter a CIDR range for the VMware management network. Make sure that the CIDR
range doesn't overlap with any of your on-premises or cloud subnets.
Select Create new network to create a new VMware Engine network or select
from an existing network, if applicable.
Click Create to begin creating the private cloud.
As VMware Engine creates your new private cloud, it deploys a number
of VMware components and divides the provided IP
address range into subnets. Private cloud creation can take 30 minutes to
2 hours. After the provisioning is complete, you receive an email.
Connect to your private cloud
To connect to your private cloud vCenter server, establish a secure connection
from your network to the private cloud. You can use any of the following options
to create a secure connection:
Connect an on-premises network to VMware Engine private cloud .
Connect using a point-to-site VPN connection .
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
