---
title: "GKE node service account insights \_|\_ Network Intelligence Center - Network\
  \ Analyzer \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/insights/kubernetes-engine/gke-node-service-account
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/network-intelligence-center/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/network-intelligence-center/docs/network-analyzer/insights/kubernetes-engine/gke-node-service-account
  title: "GKE node service account insights \_|\_ Network Intelligence Center - Network\
    \ Analyzer \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Networking
Network Intelligence Center
Network Analyzer
Guides
Send feedback
GKE node service account insights
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the Network Analyzer insights for
Google Kubernetes Engine (GKE) node service account insights. For information about
all the insight types, see
Insight groups and types .
To view these insights in the gcloud CLI or the Recommender API,
use the following insight type:
google.networkanalyzer.container.serviceAccountInsight
You need the following permissions:
recommender.networkAnalyzerGkeServiceAccountInsights.list
recommender.networkAnalyzerGkeServiceAccountInsights.get
For more information about using the Recommender API for
Network Analyzer insights, see
Use the Recommender CLI and API .
GKE node service account is disabled
This insight indicates that one or more pools in the cluster use a
disabled GKE node service account, which could lead to failed
bootstrap and registration of any nodes in the cluster created when the
service account is disabled.
This insight includes the following information:
Service account: a special kind of account typically used by an
application or compute workload, such as a Compute Engine instance,
rather than a person. It is identified by its email address,
which is unique to the account. This information is
available in Recommender API .
GKE cluster: the name of the GKE cluster
Node pools: a list of node pools using the disabled service account
Related topics
For more information, see
Enable Compute Engine default service account
and Disabling a service account .
Recommendations
Enable the node service account .
If there are unregistered nodes in the affected node pools, the nodes will
restart and properly register to the cluster. It might take some time
for all nodes to restart. For a fast resolution, we recommend that you
resize the node pool to
zero nodes and back to X nodes or create a new node pool that uses the
same node service account.
GKE node pool uses the Compute Engine default service account
A node pool in your GKE cluster uses the Compute Engine
default service account as its node service account. This account requires more
permissions than are required to run your Google Kubernetes Engine cluster.
This insight includes the following information:
GKE cluster: a name of the GKE cluster
Node pools: a list of node pools using the default service account
Related topics
For more information, see
Use least privilege service accounts .
Recommendations
Instead of the Compute Engine default service account, create and
use a less privileged service account for your nodes.
GKE node pool has misconfigured access scopes
A node pool in your GKE cluster has manually specified
access scopes, but the specified scopes are insufficient to register a node.
If your workloads use
Application Default Credentials (ADC) ,
access scopes are the legacy
method for granting permissions for your nodes
and for the workloads that are running on your nodes.
For GKE nodes, always use at least the default scopes or
they won't be able to register.
This insight includes the following information:
GKE cluster: the name of the GKE cluster
Node pools: a list of node pools with misconfigured access scopes
Related topics
For more information, see
Access scopes in GKE .
Recommendations
Replace the node pool with one with sufficient access scopes. To create a
node pool with sufficient access scopes, do one of the following:
Create the new node pool without specifying access scopes. In the
Google Cloud CLI, don't include the flag --scopes when calling
gcloud container node-pools create .
To authorize workloads running on your nodes, use
Identity and Access Management (IAM) permissions or Kubernetes
role-based access control (RBAC) .
This is to grant access to specific IAM service accounts or
Kubernetes service accounts. For more information, see
Configuring a custom service account for workloads .
In the new node pool list of manually specified access scopes,
add the following scopes.
https://www.googleapis.com/auth/devstorage.read_only
https://www.googleapis.com/auth/service.management.readonly
https://www.googleapis.com/auth/servicecontrol
https://www.googleapis.com/auth/trace.append
https://www.googleapis.com/auth/logging.write
https://www.googleapis.com/auth/monitoring.write
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
