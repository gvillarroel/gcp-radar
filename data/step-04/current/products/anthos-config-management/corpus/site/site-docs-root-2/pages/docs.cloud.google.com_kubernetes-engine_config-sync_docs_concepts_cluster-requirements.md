---
title: "Prepare your cluster for Config Sync \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/architecture
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-sync/docs/concepts/cluster-requirements
  title: "Prepare your cluster for Config Sync \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Sync
Guides
Send feedback
Prepare your cluster for Config Sync
Stay organized with collections
Save and categorize content based on your preferences.
This page explains configuration choices and requirements when planning your
clusters for use with Config Sync.
For more information about general best practices when planning your
GKE clusters, review the GKE documentation for
Cluster configuration choices .
Choose a GKE mode of operation
Config Sync supports both Autopilot and Standard GKE clusters.
To help make an informed choice about which mode of operation to use, read
GKE modes of operation .
Register your clusters to a fleet
Config Sync requires that your clusters are registered to a fleet.
If you plan to install and configure Config Sync with the Google Cloud console,
you can register your cluster at the same time you install Config Sync.
Otherwise, you must register your cluster to a fleet
before enabling Config Sync.
Grant required permissions
Because Config Sync requires that clusters are registered to a fleet,
you might require additional permissions when installing Config Sync.
To get the permissions that
you need to register clusters to a fleet,
ask your administrator to grant you the
Fleet Admin (formerly GKE Hub Admin) ( roles/gkehub.admin )
IAM role on your project.
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
Resource requirements with Autopilot mode
GKE Autopilot mode automatically modifies resource
requests to maintain workload stability. To understand how to plan for those
requests, review the GKE documentation for
Autopilot resource requests .
Tip: You can check if Autopilot adjusted your resource requirements by
looking for the autopilot.gke.io/resource-adjustment annotation on your
workloads.
Due to the way Autopilot modifies resource requests, Config Sync
makes the following adjustments:
Adjusts user-specified resource override limits to match requests .
Applies overrides only when there are one or more resource requests higher
than the corresponding adjusted output declared in the annotation, or there
are resource requests lower than the corresponding input declared in the
annotation.
Supported GKE platforms and versions
To use Config Sync, your cluster must be on a GKE
supported version .
Workload Identity Federation for GKE
Workload Identity Federation for GKE is the recommended way to securely connect to Google Cloud
services. Workload Identity Federation for GKE is enabled by default on Autopilot
clusters.
If you want to use fleet packages with Config Sync,
Workload Identity Federation for GKE is required.
If you installed Config Sync on
GKE attached clusters ,
you can't use Active Directory with
Workload Identity Federation. This limitation exists because Config Sync uses
connect gateway to connect to GKE attached clusters and
connect gateway doesn't support this feature.
Networking
The following section lists some of the changes you might need to make to
your GKE cluster, depending on your networking settings.
For more information about GKE networking choices, see
Network overview .
Private clusters
If you use private clusters , you should configure your clusters in one of
the following ways to ensure Config Sync has access and can authenticate to
your source of truth :
Configure Cloud NAT to permit egress from private
GKE nodes. For details, see Example GKE
setup .
Enable Private Google Access to connect to the set of external IP
addresses used by Google APIs and services .
Note: Private Google Access doesn't support SSH on port 2022 . However,
when you grant Config Sync read-only access to Git, you can use
cookiefile credentials.
Public clusters
If you use public clusters, but have strict VPC Firewall requirements that block
any unnecessary traffic, you must Create firewall rules to permit the
following traffic:
TCP : Allow ingress and egress on port 53 and 443
UDP : Allow egress on port 53
If you don't include these rules, Config Sync doesn't sync correctly and
nomos status reports the following error:
Error: KNV2004: unable to sync repo Error in the git-sync container
Cloud Source Repositories with Compute Engine default service account authentication
If you are using Config Sync to connect to Cloud Source Repositories and
Workload Identity Federation for GKE is not enabled, you can use the Compute Engine default
service account to authenticate. You must use
access scopes with read-only scopes for the nodes in the cluster.
Note: If you don't use custom IAM service accounts to create your
Config Sync clusters or node pools, ensure that the default Compute Engine
service account in your project has the required permissions for GKE.
In organizations that enforce the
iam.automaticIamGrantsForDefaultServiceAccounts organization policy constraint , the default Compute Engine service account won't automatically
get the required permissions for GKE. This constraint is enforced by default for
organizations that were created on or after May 3, 2024.
For details, see
Default GKE node service account .
You can add the read-only scope for Cloud Source Repositories by including
cloud-source-repos-ro in the --scopes list specified at cluster creation
time, or by using the cloud-platform scope at cluster creation time. For
example:
gcloud container clusters create CLUSTER_NAME --scopes=cloud-platform
Replace CLUSTER_NAME with the name of your cluster.
You cannot modify access scopes after you create a node pool.
However, you can create a new node pool with the proper access scope while
using the same cluster. The default gke-default scope does not include
cloud-source-repos-ro .
Arm nodes
Config Sync can run only on x86-based nodes, not Arm nodes. However, if you
need to run Config Sync on a cluster with multiple architectures, take the
following action, depending on your cluster type:
GKE on AWS or GKE on Azure : add a
taint to your Arm nodes, to avoid scheduling Pods onto your Arm
nodes without a corresponding toleration.
GKE : GKE adds a default taint to ensure
workloads without the corresponding toleration aren't scheduled there. No
additional action needed.
What's next
Install Config Sync .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
