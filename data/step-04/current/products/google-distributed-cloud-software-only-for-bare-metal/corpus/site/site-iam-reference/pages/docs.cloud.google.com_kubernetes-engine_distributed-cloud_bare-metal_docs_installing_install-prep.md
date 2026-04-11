---
title: "Choose a deployment model \_|\_ Google Distributed Cloud (software only) for\
  \ bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/install-prep
  title: "Choose a deployment model \_|\_ Google Distributed Cloud (software only)\
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
Choose a deployment model
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud supports multiple deployment models to meet different
availability, isolation, and resource footprint needs. This page defines the
concepts all deployment models share, and describes each deployment model.
This page is for Admins and architects and Operators who define IT
solutions and system architecture in accordance with company strategy in
coordination with key stakeholders. To learn more about common roles and example
tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Note: With Google Distributed Cloud, you can specify one of four types of
clusters: admin, user, standalone, or hybrid. These cluster types are key in
shaping different deployment models. The cluster type is specified with the
spec.type field in the
cluster configuration file. This field is immutable. Once you create a cluster,
you can't change the type.
User clusters
A user cluster is a Kubernetes cluster that runs your containerized workloads.
It consists of control plane nodes and worker nodes . Google Distributed Cloud
supports one or more user clusters. User clusters must contain one or more
worker nodes that run user workloads .
Admin clusters
An admin cluster is a Kubernetes cluster that manages one or more user
clusters. Your admin cluster can perform the following tasks:
Create user clusters
Upgrade user clusters
Update user clusters
Delete user clusters
To create a user cluster, your admin cluster sets up the Google Distributed Cloud
components on the user cluster's control plane and worker nodes. Your admin
cluster only has control plane nodes because the Google Distributed Cloud
components run on the control plane nodes.
Your admin cluster contains the following types of sensitive data:
SSH credentials: Used to enable remote installation
Google Cloud service account keys: Used to access features like
Artifact Registry
To protect the sensitive data, restrict access to your admin cluster.
High availability
You can run admin or user clusters in high
availability (HA) mode. This
mode requires three or more (odd number) control plane nodes running in your
cluster. If you run a cluster in non-HA mode, your cluster requires only one
control plane node.
To avoid having a single point of failure, use the HA mode for production
deployments. Use the non-HA mode for non-mission critical environments, for
example a testing environment, where you can recreate the cluster if the single
control plane node fails. An HA user cluster must have two or more worker nodes
in case a worker node fails.
When you upgrade your clusters, an HA deployment also reduces the risk of the
cluster becoming inaccessible if there's an error.
Deployment models
Google Distributed Cloud supports the following deployment models to meet
different requirements:
Admin and user cluster deployment
Hybrid cluster deployment
Standalone cluster deployment
Admin and user cluster deployment
Use this deployment model if you have multiple clusters in the same data center
that you want to manage from a centralized place, and for larger deployments
that need isolation between different teams or between development and
production workloads.
High-availability admin and user cluster deployment (Click to enlarge)
This deployment model consists of the following clusters:
One admin cluster: The central management point that provides an API to
manage user clusters. Your admin cluster only runs management components.
One or more user clusters: Contain the control plane nodes and the worker
nodes, which run user workloads.
This model meets the following requirements:
Provides a centralized control plane and API to manage your user clusters'
lifecycles.
Provides isolation between different teams.
Provides isolation between development and production workloads.
You don't have to share SSH credentials and service account keys with
cluster owners.
You can integrate your deployment with your own control planes
Footprint
An admin and user cluster deployment requires the following nodes:
Admin cluster
One control plane node for non-HA
Three or more control plane nodes for HA
User clusters - You can configure HA for each user cluster independently.
Control plane nodes:
One control plane node for non-HA
Three or more control plane nodes for HA
Worker nodes:
One or more worker nodes for non-HA
Two or more worker nodes for HA
Hybrid cluster deployment
This deployment model is a specialized multi-cluster deployment. A hybrid
cluster is an admin cluster that can run user workloads. Your hybrid cluster
still manages additional user clusters.
High-availability hybrid cluster deployment (Click to enlarge)
Features of this model:
Allocating a set of machines for an admin cluster is often wasteful
because admin clusters use relatively few resources. The hybrid cluster
deployment lets you reclaim unused capacity on those machines because
it lets you run user workloads within the admin cluster.
The admin cluster contains sensitive data such as SSH credentials (used by
the admin cluster to manage user clusters on remote machines) and
Google Cloud service account keys (used by the admin cluster to access
Google Cloud services such as Cloud Storage). Hybrid cluster deployments
run user workloads within the admin cluster, and this potentially exposes
the admin cluster's sensitive data to user workloads.
Footprint
A hybrid cluster deployment requires the following nodes:
Hybrid cluster
Control plane nodes:
One control plane node for non-HA
Three or more control plane nodes for HA
Worker nodes:
One or more worker nodes for non-HA
Two or more worker nodes for HA and depending on workload type
User clusters - You can configure HA for each user cluster independently.
Control plane nodes:
One control plane node for non-HA
Three or more control plane nodes for HA
Worker nodes:
One or more worker nodes for non-HA
Two or more worker nodes for HA
Standalone cluster deployment
This deployment model has a single cluster that serves as a user cluster and as an admin cluster.
High-availability standalone cluster deployment (Click to enlarge)
This model has the following advantages:
It doesn't require a separate admin cluster
It supports the edge profile, which has significantly reduced system
resource requirements and is recommended for edge devices with high resource
constraints.
This model has some security tradeoffs, because workloads can run on a cluster
with the following sensitive data:
SSH credentials
Google Cloud service account keys
Use this model if you meet any of the following conditions:
You manage every cluster independently.
You have a small number of worker nodes.
You support a single team.
You run a single workload type.
This model works well in the following situations:
Every cluster is independently managed with different SSH keys and
Google Cloud credentials
Clusters run in network isolated partitions, separated from untrusted
networks
Clusters run in edge locations
Footprint
A standalone cluster deployment requires the following nodes:
Control plane nodes:
One control plane node for non-HA
Three or more control plane nodes for HA
Worker nodes:
One or more worker nodes for non-HA
Two or more worker nodes for HA
Edge profile
Standalone clusters support an edge profile , which minimizes resource
consumption for the cluster. You enable the edge profile when you create a
standalone cluster by setting
profile in the cluster
configuration file to edge . The edge profile is recommended for edge devices
with restrictive resource constraints. For hardware requirements associated with
the edge profile, see
Resource requirements for standalone clusters using the edge profile .
In a standalone cluster configured to use the edge profile, the control plane
nodes are automatically configured to accept user workloads . This means you
don't need a worker node pool. However, reducing the footprint by running
workloads on the control plane weakens security and resource isolation between
the control and data planes. If the reduced footprint is worth this trade-off,
you can configure a standalone cluster with the edge profile to run on a
single control plane node or
on multiple control plane nodes
for high availability.
Note: If you require a small footprint for edge use cases, but you would prefer
to have Google to manage the hardware, consider Google Distributed Cloud
connected . With
Google Distributed Cloud connected, Google delivers, installs, and maintains
the Distributed Cloud hardware on your premises.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
