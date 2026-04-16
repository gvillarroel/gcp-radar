---
title: "Deploy third-party workloads on Config Controller \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/deploy-workloads
knowledge_key: corpus
source_id: site-docs-root-3
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/config-controller/docs/deploy-workloads
  title: "Deploy third-party workloads on Config Controller \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Config Controller
Guides
Send feedback
Deploy third-party workloads on Config Controller
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to deploy your own workloads on Config Controller
clusters.
This page is for IT administrators and Operators who manage
the lifecycle of the underlying tech infrastructure and plan capacity, and
deploy apps and services to production. To learn more about common roles and
example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before you begin
Before you start, make sure you have performed the following tasks:
Set up Config Controller .
If your Config Controller cluster is on a GKE version earlier
than version 1.27,
upgrade your cluster
to version 1.27 or later.
Enable node auto-provisioning on Standard clusters
You must enable node auto-provisioning
to deploy your own workloads on Config Controller clusters. This allows for
workload separation between your workloads and the Google-managed workloads
installed by default on Config Controller clusters.
If you use Autopilot clusters, you don't need to enable node auto-provisioning
because GKE automatically manages node scaling and provisioning.
gcloud
To enable node auto-provisioning, run the following command:
gcloud container clusters update CLUSTER_NAME \
--enable-autoprovisioning \
--min-cpu MINIMUM_CPU \
--min-memory MIMIMUM_MEMORY \
--max-cpu MAXIMUM_CPU \
--max-memory MAXIMUM_MEMORY \
--autoprovisioning-scopes=https://www.googleapis.com/auth/logging.write,https://www.googleapis.com/auth/monitoring,https://www.googleapis.com/auth/devstorage.read_only
Replace the following:
CLUSTER_NAME : the name of your Config Controller cluster.
MINIMUM_CPU : the minimum number of cores in the
cluster.
MINIMUM_MEMORY : the minimum number of gigabytes of
memory in the cluster.
MAXIMUM_CPU : the maximum number of cores in the
cluster.
MAXIMUM_MEMORY : the maximum number of gigabytes of
memory in the cluster.
Console
To enable node auto-provisioning, perform the following steps:
Go to the Google Kubernetes Engine page in Google Cloud console.
Go to Google Kubernetes Engine
Click the name of the cluster.
In the Automation section, for Node auto-provisioning , click edit Edit .
Select the Enable node auto-provisioning checkbox.
Set the minimum and maximum CPU and memory usage for the cluster.
Click Save changes .
For more information on configuring node auto-provisioning, such as setting defaults,
see Configure node auto-provisioning .
Deploy your workload
When you deploy your workloads, Config Controller automatically
enables GKE Sandbox to provide an extra layer of security to prevent untrusted
code from affecting the host kernel on your cluster nodes. For more information, see
About GKE Sandbox .
You can deploy a workload by writing a workload manifest file and then
running the following command:
kubectl apply -f WORKLOAD_FILE
Replace WORKLOAD_FILE with the manifest file, such as my-app.yaml .
Confirm that your workload is running on the auto-provisioned nodes:
Get the list of nodes created for your workload:
kubectl get nodes
Inspect a specific node:
kubectl get nodes NODE_NAME -o yaml
Replace NODE_NAME with the name of the node that you want to inspect.
Limitations
GKE Sandbox: GKE Sandbox works well with many applications,
but not all. For more information, see GKE Sandbox limitations .
Control plane security: when granting permission for your workloads, use the
principle of least privilege to grant only the permissions that you need. If
your workload becomes compromised, the workload can use overly-permissive
permissions to change or delete Kubernetes resources.
Control plane availability: if your workloads cause increased traffic in a short
time, the cluster control plane might become unavailable until the traffic
decreases.
Control plane resizing: GKE automatically resizes the control
plane as needed. If your workload causes a large load increase (for example, installing thousands of
CRD objects), GKE's automatic resizing might not be able to keep
up with the load increase.
Quotas: when deploying workloads, you should be aware of GKE's
quotas and limits and not exceed them.
Network access to control plane and nodes: Config Controller uses private
nodes with Master Authorized Networks Enabled, Private Endpoint Enabled, and
Public Access Disabled. For more information, see
GKE network security .
What's next
Learn more about Config Controller best practices:
Config Controller scalability , Config Controller sharding , and Configuring Config Controller for high availability
Troubleshoot Config Controller
Monitor Config Controller
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
