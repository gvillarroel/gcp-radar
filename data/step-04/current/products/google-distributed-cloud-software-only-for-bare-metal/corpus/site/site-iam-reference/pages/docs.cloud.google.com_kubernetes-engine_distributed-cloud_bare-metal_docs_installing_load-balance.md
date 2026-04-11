---
title: "Overview of load balancers \_|\_ Google Distributed Cloud (software only)\
  \ for bare metal \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/load-balance
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/configure-sa
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/distributed-cloud/bare-metal/docs/installing/load-balance
  title: "Overview of load balancers \_|\_ Google Distributed Cloud (software only)\
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
Overview of load balancers
Stay organized with collections
Save and categorize content based on your preferences.
Google Distributed Cloud supports two load balancer options: bundled and manual.
Bundled load balancer mode
If you choose bundled load balancing, the load balancer is provided for you. An
external load balancer is not needed.
There are two types of bundled load balancing:
Layer 2 : All load balancer nodes and VIPs must be in the same Layer 2
subnet. The gateway of the load balancer subnet must listen to gratuitous ARP
messages and forward ARP packets to the load balancer nodes. See
Bundled load balancing with MetalLB .
BGP : This load-balancing mode supports the advertisement of ServiceType
LoadBalancer virtual IP addresses (VIPs) through external Border
Gateway Protocol (eBGP) for your clusters. Your cluster network is an autonomous
system, which interconnects with another autonomous system, an external network,
through peering. See
Bundled load balancing with BGP .
The following diagram shows an example network topology where bundled MetalLB
load balancers are located on the control plane nodes.
Manual load balancer mode
If you choose manual load balancing, Google Distributed Cloud does not deploy load
balancers. This allows more flexibility than bundled load balancing and there
are no L2 network requirements.
You must configure your control plane nodes' VIPs on an external load
balancer before installing the cluster. After installation, you must pick a load
balancing solution for Kubernetes Services and Ingresses.
The following diagram shows an example network topology of a cluster using
manual load balancing mode with an external load balancer.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
