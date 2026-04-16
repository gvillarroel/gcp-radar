---
title: "Cluster creation overview \_|\_ Google Distributed Cloud (software only) for\
  \ bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-clusters-overview
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-clusters-overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/creating-clusters/create-clusters-overview
  title: "Cluster creation overview \_|\_ Google Distributed Cloud (software only)\
    \ for bare metal \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
GDC for bare metal
Guides
Send feedback
Cluster creation overview
Stay organized with collections
Save and categorize content based on your preferences.
When you have finished setting up cluster node machines,
your network , and
the other prerequisites , you're
almost ready to install Google Distributed Cloud. The next step is to decide what
kinds of clusters to create and choose which tool to use.
Choose a cluster type
You can create different kinds of clusters in Google Distributed Cloud, including
admin clusters (to control the resources of your clusters) and user
clusters (to run workloads). We recommend admin and user cluster deployments
if you have multiple clusters in the same data center that you want to manage
from a centralized place, and for larger deployments that need isolation between
different teams or between development and production workloads.
You can also run Google Distributed Cloud as a single standalone cluster,
which serves as a user cluster and as an admin cluster. A standalone cluster
supports the edge profile, which has significantly reduced system resource
requirements and is recommended for edge devices with high resource constraints.
In addition, Google Distributed Cloud lets you create hybrid clusters that
combine administration tasks and workloads, as well as controlling other user
clusters.
Each of these configurations has their own advantages and benefits. For more
information on deciding which configuration to develop, see
Choose a deployment model .
Choose a tool to create clusters
You have your choice of tools for creating clusters and managing
cluster lifecycle:
The command-line tool bmctl , which you run on your admin workstation in your
on-premises data center.
The Google Cloud console, Google Cloud CLI, or
Terraform . These standard
tools use the GKE On-Prem API, which runs on Google Cloud
infrastructure, and collectively they are referred to as the
GKE On-Prem API clients .
For information on deciding which tool best suits your needs, see
Choose a tool to create clusters .
More information
For more information on creating and configuring clusters, see the
following:
Admin clusters:
Create admin clusters using GKE On-Prem API clients
Create admin clusters using bmctl
User clusters
Create user clusters using GKE On-Prem API clients
Create user clusters using bmctl
Create standalone clusters
Create hybrid clusters
About the creation process
The cluster creation process includes preflight checks and machine
initialization. If cluster creation fails after the machine initialization phase
(even if preflight checks passed without errors), you must
delete the cluster . This returns the node to
a clean state. After deleting the cluster, you can re-attempt to create the
cluster after making any needed configuration changes.
The cluster creation process runs health checks when the cluster has been
created. This last step verifies that the cluster is in good operating
condition. If the cluster doesn't pass all health checks, the create operation
fails. When all health checks pass, the create operation finishes successfully.
Plan for scalability
Before you create a new cluster, you need to understand the dimensions that
affect scalability. Some dimensions, such as the number of IP addresses that you
can reserve for Pods in your cluster ( clusterNetwork.pods.cidrBlocks ), are
immutable, so you need to plan for them when you create a cluster. For more
information about scalability dimensions and how to scale up a cluster, see
Scale up Google Distributed Cloud
clusters . For information about some of the
restrictions and recommendations for maximum settings for your cluster, see
Quotas and limits .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
