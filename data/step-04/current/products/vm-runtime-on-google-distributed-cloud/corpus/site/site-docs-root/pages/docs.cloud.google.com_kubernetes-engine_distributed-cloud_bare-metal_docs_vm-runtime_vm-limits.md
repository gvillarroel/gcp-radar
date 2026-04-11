---
title: "VM Runtime on GDC limits \_|\_ Google Distributed Cloud (software only) for\
  \ bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-limits
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/overview
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/vm-runtime/vm-limits
  title: "VM Runtime on GDC limits \_|\_ Google Distributed Cloud (software only)\
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
VM Runtime on GDC limits
Stay organized with collections
Save and categorize content based on your preferences.
This page provides basic scaling information for VMs running on an installation
of Google Distributed Cloud (software only) on bare metal. The information
provided doesn't indicate hard limits or guaranteed thresholds for the product
or your installation. The information is intended to help you determine whether
VM Runtime on GDC can meet your computing requirements.
For information about quotas, limits, and scaling for Google Distributed Cloud,
see Quotas and limits .
Maximum VM scaling
We have determined through extensive testing that you can run reliably as many
as 500 VMs concurrently on a cluster with 50 nodes.
Resource usage
To scale up VM deployments, make sure there are enough CPU, memory, and storage
resources in the cluster for both VMs and the control plane components. For
standard resource requirements for cluster node machines, see
Cluster node machine prerequisites .
Note the following VM Runtime on GDC resource usage for our maximum VM
scaling configuration:
Total CPU share used by all the components in the vm-system namespace is
approximately 1.3 at the peak usage.
Total memory consumed by all the components in the vm-system namespace is
approximately 10 GiB .
Known resource issue
When the guest agent is enabled ,
each VM registers a separate watcher to the API server. Therefore, the number of registered watchers in kube-apiserver increases linearly with the number of the VMs. Depending on the workloads you run, you may
encounter issues related to kube-apiserver as the number of VMs increases. If
you're affected by this issue, you can configure the kube-apiserver or
disable the guest agent if
you aren't using it.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
