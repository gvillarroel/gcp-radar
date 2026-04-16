---
title: "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\
  \ Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/fast-starting-nodes
  title: "About quicker workload startup with fast-starting nodes \_|\_ Google Kubernetes\
    \ Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Guides
Send feedback
About quicker workload startup with fast-starting nodes
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
This page shows you how to deploy and scale workloads more quickly in
Google Kubernetes Engine (GKE) clusters using fast-starting nodes. Fast-starting
nodes are used in GKE with Autopilot mode on a
best-effort basis when workloads use compatible configurations.
Fast-starting GKE nodes have significantly lower startup time for
compatible machine families. The accelerated startup time provides you with the
following benefits:
Faster cold start
Faster autoscaling
Improved Pod scheduling long-tail latency
Improved infrastructure cost efficiency
With fast-starting nodes, GKE pre-initializes hardware resources
to accelerate startup time. The pre-initialized resources are available on a
best-effort basis. Surge requests might only be partially served. Without
fast-starting nodes, resources are initialized on-demand, and nodes are served
at normal startup time.
Requirements
Fast-starting nodes require no additional configuration. GKE
automatically uses fast-starting nodes if your workloads use compatible
configurations. You must meet all of the following requirements to use
fast-starting nodes:
Use Autopilot clusters, or run workloads in Autopilot
mode in your Standard
clusters .
Don't use any features that are incompatible with fast-starting nodes. For
more information, see Limitations .
Use one of the following compute resources which are described in the
respective tables in the Configuration requirements for eligible compute resources section:
Autopilot container-optimized compute platform
G2 machine series
A2 machine series
Limitations
The following features aren't compatible with fast-starting GKE
nodes. If you use any of these features, GKE provisions nodes
with the typical startup time:
G2 with DEFAULT GPU driver version on GKE versions earlier
than 1.33.0-gke.1304000. For 1.33.0-gke.1304000 or later, both LATEST and
DEFAULT work with fast-starting nodes.
Secondary boot
disks on
versions earlier than 1.33.2-gke.1015000.
Customer-managed encryption keys
(CMEK)
Spot VMs
Placement policies
Multi-network
support
Autopilot GPU workloads
Requesting compatible GPUs in Autopilot mode results in up to four
times faster node startup time and up to two times faster Pod scheduling time
than similar requests in GKE Standard mode, because the
Autopilot GPU workloads can use fast-starting nodes.
The following are some example use cases. However, any Pods meeting the
conditions from the Requirements section are compatible with
fast-starting nodes.
ComputeClass
Request a compatible accelerator type and count in a ComputeClass, like in
the following example:
apiVersion : cloud.google.com/v1
kind : ComputeClass
metadata :
name : ACCELERATOR_COMPUTE_CLASS_NAME
spec :
priorities :
- gpu :
type : ACCELERATOR_TYPE
count : ACCELERATOR_COUNT
nodePoolAutoCreation :
enabled : true
When you select this ComputeClass in a Pod, like in the following example,
GKE uses fast-starting nodes:
apiVersion : v1
kind : Pod
metadata :
name : POD_NAME
spec :
nodeSelector :
# Select a ComputeClass that requests compatible GPUs
cloud.google.com/compute-class : ACCELERATOR_COMPUTE_CLASS_NAME
containers :
- name : my-container
image : registry.k8s.io/pause
resources :
limits :
nvidia.com/gpu : ACCELERATOR_COUNT
Replace the following values:
ACCELERATOR_COMPUTE_CLASS_NAME : the name of the
ComputeClass that requests the accelerators.
ACCELERATOR_TYPE : the type of accelerator.
ACCELERATOR_COUNT : the number of accelerators
required by the Pod. This value must be less than or equal to the value in
the spec.priorities.gpu.count field in the ComputeClass.
POD_NAME : the name of your Pod.
For more information about ComputeClass, see About custom compute
classes .
Pod specification
Select a compatible accelerator type and count in your Pod specification, like
in the following example:
apiVersion : v1
kind : Pod
metadata :
name : POD_NAME
spec :
nodeSelector :
cloud.google.com/gke-accelerator : ACCELERATOR_NAME
containers :
- name : my-container
image : registry.k8s.io/pause
resources :
limits :
nvidia.com/gpu : ACCELERATOR_COUNT
Replace the following values:
POD_NAME : the name of your Pod.
ACCELERATOR_NAME : the name of the accelerator
required by the Pod.
ACCELERATOR_COUNT : the number of accelerators
required by the Pod.
Configuration requirements for eligible compute resources
The tables in the following sections describe the specific requirements for
GKE to provision the relevant compute resources as fast-starting
nodes.
Autopilot container-optimized compute platform
See the following requirements for GKE to provision fast-starting
nodes with the Autopilot container-optimized compute platform.
Compute resource
Release channel and version support
Supported disk types and sizes
Autopilot container-optimized compute platform
Rapid channel
1.33.0-gke.1696000 or later
pd-balanced boot disks up to 100 GiB
No Local SSDs .
G2 machine series
See the following requirements for GKE to provision G2 machines
as fast-starting nodes.
Compute resource
Release channel and version support
Supported disk types and sizes
G2 machine series
Rapid and Regular channels
1.31 or later
pd-balanced boot disks up to 500 GiB
No Local SSDs .
A2 machine series
See the following requirements for GKE to provision A2 machines
as fast-starting nodes.
Compute resource
Release channel and version support
Supported disk types and sizes
A2 Standard machine types
Rapid and Regular channels
1.32.0-gke.1008000 or later
pd-balanced or pd-ssd boot disks up to 1,000 GiB.
No Local SSDs .
A2 Ultra machine types
Rapid and Regular channels
1.32.0-gke.1008000 or later
pd-balanced or pd-ssd boot disks up to 1,000 GiB, with higher limits for
a2‑ultragpu‑4g (1,500 GiB) and a2‑ultragpu‑8g (3,000 GiB).
With automatically attached Local SSDs .
Pricing
Fast-starting nodes are available in GKE Autopilot at no
extra charge. For more information about GKE Autopilot
pricing, see the Autopilot mode section in Google Kubernetes Engine
pricing .
What's next
About the Autopilot container-optimized compute
platform
About custom compute
classes
Persistent Disk performance overview
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
