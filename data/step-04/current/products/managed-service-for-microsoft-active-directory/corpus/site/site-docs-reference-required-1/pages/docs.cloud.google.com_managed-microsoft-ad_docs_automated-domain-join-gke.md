---
title: "Join GKE Windows Server nodes automatically to a Managed Microsoft AD domain\
  \ \_|\_ Managed Service for Microsoft Active Directory \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke
knowledge_key: corpus
source_id: site-docs-reference-required-1
source_type: site
entrypoint: https://docs.cloud.google.com/managed-microsoft-ad/docs/hardening
source_metadata:
  url: https://docs.cloud.google.com/managed-microsoft-ad/docs/automated-domain-join-gke
  title: "Join GKE Windows Server nodes automatically to a Managed Microsoft AD domain\
    \ \_|\_ Managed Service for Microsoft Active Directory \_|\_ Google Cloud Documentation"
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
Join GKE Windows Server nodes automatically to a Managed Microsoft AD domain
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to join Windows Server nodes in your
Google Kubernetes Engine (GKE) cluster to a Managed Microsoft AD domain using
the automated domain join
feature.
How Managed Microsoft AD joins Windows Server nodes automatically to a domain
When you create a node pool in
your GKE
cluster , you can use the
ready-made scripts that are available from Managed Microsoft AD to
automatically join your Managed Microsoft AD domain. After
GKE creates the node pool, Managed Microsoft AD
initiates the domain join request and attempts to join the nodes with your
domain. If the domain join request succeeds, Managed Microsoft AD
joins the nodes to your domain. If the domain join request fails, the created
nodes continue to run. You need to check the logs to identify and fix the issue
before creating the node pool again. For more information, see View debug
logs .
You need to clean up the information about unjoined nodes manually from
Managed Microsoft AD in some specific scenarios. For more information, see
Clean up unjoined
VMs .
You can't update an existing node pool with the domain join scripts to
automatically join the existing nodes to your domain.
The automated domain join feature doesn't configure the GKE
nodes to run with
gMSA
for authentication. However, you can manually create a
gMSA in Managed Microsoft AD and
configure the GKE nodes to use the gMSA. For information
about configuring gMSA for the GKE nodes, see Configure
gMSA for Windows Pods and
containers .
Before you begin
Create a Managed Microsoft AD
domain .
Create a GKE cluster using Windows Server node
pools .
Make sure that the Windows Server nodes run on a Windows version that
Managed Microsoft AD
supports .
Configure domain
peering between the
Managed Microsoft AD domain and the nodes' network, or have both the
Managed Microsoft AD domain and the nodes in the same network.
Create a service account with the Google Cloud Managed Identities Domain
Join ( roles/managedidentities.domainJoin ) IAM role on the
project that has the Managed Microsoft AD domain. For more information,
see Cloud Managed Identities
roles .
For more information about granting roles, see Grant a single
role .
For information about creating a service account, see Authenticate
workloads using service
accounts .
Set the full cloud-platform access scope on the Windows Server nodes. For
more information, see
Authorization .
Metadata
You need the following metadata keys to join your Windows Server nodes to a
domain.
windows-startup-script-url
managed-ad-domain
Optional: enable-guest-attributes
Optional: managed-ad-ou-name
Optional: managed-ad-force
For more information about these metadata keys, see
Metadata .
The domain join request fails when the computer account of a Windows Server node
already exists in Managed Microsoft AD. For Managed Microsoft AD to
reuse the existing computer account during the domain join process, you can use
the managed-ad-force metadata key when you create the node
pool .
Join Windows Server nodes
You can configure these metadata
keys when you
add a Windows Server node pool to your GKE cluster. This
section illustrates how to use these metadata keys in gcloud CLI
commands when you create a node pool.
However, you can use these metadata keys when you create a node pool using the
other available options as well. For more information, see Add and manage node
pools .
To create a node pool and join the Windows Server nodes, run the following
gcloud CLI command:
gcloud container node-pools create NODE_POOL_NAME \
--cluster= CLUSTER_NAME \
"--metadata=windows-startup-script-url= URL ,managed-ad-domain= DOMAIN_RESOURCE_PATH ,managed-ad-force=TRUE" \
--service-account= SERVICE_ACCOUNT \
--image-type= WINDOWS_IMAGE_NAME \
--scopes=https://www.googleapis.com/auth/cloud-platform \
--location= ZONE_OR_REGION \
--no-enable-autoupgrade
You can replace the placeholders in the --metadata flag with relevant values
as described in the
metadata
section.
For more information about this gcloud CLI command, see gcloud
container node-pools create .
What's next
Join a Windows VM automatically to a
domain .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
