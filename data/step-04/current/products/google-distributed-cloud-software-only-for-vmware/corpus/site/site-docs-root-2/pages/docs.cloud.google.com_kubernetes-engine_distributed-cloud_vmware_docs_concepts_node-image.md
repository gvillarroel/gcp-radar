---
title: "Node image \_|\_ Google Distributed Cloud (software only) for VMware \_|\_\
  \ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/vmware/docs/concepts/node-image
  title: "Node image \_|\_ Google Distributed Cloud (software only) for VMware \_\
    |\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Technology areas
Google Distributed Cloud
Documentation
GDC for VMware
Guides
Send feedback
Node image
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the node operating system (node OS) image that runs on
Google Distributed Cloud (software only) for VMware cluster nodes.
Cluster nodes run ubuntu_containerd by default. The image is similar to
Google Kubernetes Engine's Ubuntu node image .
Google Distributed Cloud node pools also support
Container-Optimized OS . Container-Optimized OS on Google Distributed Cloud
supports kdump for
debugging kernel issues.
Google Distributed Cloud offers the following node image options for your cluster:
1.16
OS
Node images
Status
Container-Optimized OS
cos
General Availability
Ubuntu with containerd
ubuntu_containerd
General Availability
1.28
OS
Node images
Status
Container-Optimized OS
cos
General Availability
Container-Optimized OS with cgroup v2
cos_cgv2
Preview
Ubuntu with containerd
ubuntu_containerd
General Availability
Ubuntu with containerd and cgroup v2
ubuntu_cgv2
Preview
1.29
OS
Node images
Status
Container-Optimized OS
cos
General Availability
Container-Optimized OS with cgroup v2
cos_cgv2
General Availability
Ubuntu with containerd
ubuntu_containerd
General Availability
Ubuntu with containerd and cgroup v2
ubuntu_cgv2
General Availability
Kubernetes version
New Google Distributed Cloud versions sometimes introduce a new Kubernetes version
for clusters. Version changes are announced in
Release notes . To learn which
Kubernetes version your cluster runs, see
Versions .
Preinstalled tools
The node OS has the following tools preinstalled: arping cloud-utils ,
conntrack , logrotate , prips , and systemd-container .
The node OS has the debug-toolbox container image preinstalled.
debug-toolbox includes several packages for debugging node issues. You run
an accompanying shell script, toolbox , to unpack and run the
debug-toolbox container.
Learn about the toolbox script .
Networking
As of version 1.1.0-gke.6, the node OS default networking configuration is
disabled to support static IP allocation.
Security
See node security .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
