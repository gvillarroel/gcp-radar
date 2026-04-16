---
title: "Arm workloads on GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/arm-on-gke
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/arm-on-gke
  title: "Arm workloads on GKE \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud\
    \ Documentation"
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
Arm workloads on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This document explains how to run Arm workloads on Google Kubernetes Engine (GKE).
You can run Arm workloads in GKE
Autopilot clusters using the Performance or Scale-Out compute
classes ,
or in GKE Standard
clusters using the C4A ,
N4A , or Tau
T2A machine series.
You can run single-architecture Arm images or multi-architecture (multi-arch)
images compatible with both x86 and Arm processors. To learn about the benefits
of Arm, see Arm VMs on Compute .
See the following for more information about choosing workloads to deploy on Arm
and preparing those workloads for deployment:
Choosing workloads to run on Arm : Consider the benefits of the following
machine types when choosing workloads to run on Arm. For more information
about what types of workloads work well with each of these
machine series, see the table in General-purpose machine family for
Compute Engine :
C4A nodes provide Arm-based compute which achieves consistently high
performance for your most performance-sensitive Arm-based workloads.
N4A nodes provide Arm-based compute that balances price and performance.
T2A nodes are appropriate for more-flexible workloads, or workloads which
rely on horizontal scale-out.
Deploying across architectures : With GKE, you can use
multi-arch images to deploy one image manifest across nodes with different
architectures, including Arm.
To ensure that your container image is Arm-compatible and can run on
your targeted architectures, see Build multi-architecture images for
Arm workloads .
To follow a tutorial for using multi-arch images to deploy across
architectures, see Migrate x86 application on GKE to
multi-arch with
Arm .
Preparing Arm workloads for deployment : Once you have an Arm-compatible
image, use node
affinity
rules and node
selectors
to make sure your workload is scheduled to nodes with a compatible
architecture type.
Autopilot clusters : see Deploy Autopilot
workloads on Arm
architecture .
Standard clusters : see Prepare an Arm workload for
deployment .
Requirements and limitations
Arm nodes are available in Google Cloud locations that support Arm
architecture. For details, see Available regions and
zones .
Config Connector and
Config Controller
are not supported on clusters with Arm node pools.
See the following requirements and limitations for C4A:
To create a cluster with C4A nodes (except for c4a-highmem-96-metal ( Preview )) that uses Autopilot
mode, cluster
autoscaling ,
or node
auto-provisioning ,
you must use the following versions or later:
1.28.15-gke.1344000
1.29.11-gke.1012000
1.30.7-gke.1136000
1.31.3-gke.1056000
To create a Standard cluster with C4A nodes (except for c4a-highmem-96-metal ( Preview )), you must use one of the
following versions or later:
1.28.13-gke.1024000
1.29.8-gke.1057000
1.30.4-gke.1213000
To create a Standard cluster with c4a-highmem-96-metal
( Preview ), you
must use version 1.35.0-gke.2232000 or later.
You can use Local
SSDs with C4A
nodes (except for c4a-highmem-96-metal ( Preview )) with the following versions or later:
1.29.15-gke.1325000
1.30.12-gke.1033000
1.31.8-gke.1045000
1.32.1-gke.1357000
GKE doesn't support the following features with C4A nodes:
Confidential GKE Nodes
Compact placement
Simultaneous multi-threading (SMT)
Persistent disks
(use
Hyperdisk
instead, see Supported disk types for
C4A )
Nested virtualization
GPUs
GKE additionally doesn't support the following features
with the c4a-highmem-96-metal
( Preview )
machine type:
Local SSDs
Autopilot
mode
Cluster
autoscaling
Node
auto-provisioning
Live migration (see Manage disruption to GKE nodes
that don't live
migrate )
See the following requirements and limitations for N4A:
To create a cluster with N4A nodes that uses
Autopilot
mode, use GKE version 1.34.1-gke.3403001 or later.
GKE doesn't support the following features with N4A nodes:
Local SSDs
Confidential GKE Nodes
GPUs
Compact placement
Simultaneous multi-threading (SMT)
Persistent disks
(use
Hyperdisk
instead, see Supported disk types for
N4A )
Nested virtualization
1 GB
hugepages
(only 2 MB hugepages supported)
See the following requirements and limitations for T2A:
GKE doesn't support the following features with T2A
nodes:
Confidential GKE Nodes
GPUs
GKE Windows
Local SSDs
Policy Controller ,
Config Sync , and
Config Controller
What's next
Create clusters and node pools with Arm nodes
Build multi-architecture images for Arm workloads
Prepare an Arm workload for deployment
Migrate x86 application on GKE to multi-arch with Arm
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-13 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-13 UTC."],[],[]]
