---
title: "Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/cluster-toolkit/docs/setup/cluster-blueprint
source_metadata:
  url: https://docs.cloud.google.com/cluster-toolkit/docs/gke/reconfigure-gke-cluster
  title: "Reconfigure a GKE cluster \_|\_ Cluster Toolkit \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
Cluster Toolkit
Guides
Send feedback
Reconfigure a GKE cluster
Stay organized with collections
Save and categorize content based on your preferences.
To make basic configuration changes to the deployed Google Kubernetes Engine (GKE)
resources, it is recommended that you edit and redeploy the blueprint.
Limitations
The following changes can't be made by editing the blueprint:
You can't switch from a zonal to a regional GKE cluster. To
switch from a zonal to a regional cluster, you must create a new cluster.
You can't update the GKE version by using the Cluster Toolkit.
To update the GKE version, you must change the version using
the Google Cloud console or Google Cloud
CLI .
Reconfigure the cluster
For GKE clusters, you can update the cluster as follows:
Edit the deployment blueprint to update the supported parameters. For a list
of supported parameters, see Supported parameters .
Run the ./gcluster deploy <blueprint-yaml-file> -w command to redeploy the
environment.
Supported parameters
When you update the blueprint, the following parameters can be modified.
Parameters
Description
autoscaling_total_min_nodes and autoscaling_total_max_nodes in a nodepool
Use this parameter to update the minimum and maximum number of nodes that exist within an autoscaling nodepool.
static_node_count in a nodepool
Use this parameter to adjust the static number of nodes in the nodepool. You can also replace this parameter with autoscaling_total_min_nodes and autoscaling_total_max_nodes to switch your cluster from a static to an autocale nodepool.
disk_size_gb in a nodepool
Use this parameter to adjust the size of the disk attached to each node to meet your workload requirements.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
