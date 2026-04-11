---
title: "Reference architecture: Hybrid environment for Google Kubernetes Engine clusters\
  \ \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/version-and-upgrade-support
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/enterprise/docs/architecture/hybrid-environment
  title: "Reference architecture: Hybrid environment for Google Kubernetes Engine\
    \ clusters \_|\_ Google Kubernetes Engine (GKE) \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Send feedback
Reference architecture: Hybrid environment for Google Kubernetes Engine clusters
Stay organized with collections
Save and categorize content based on your preferences.
This content was last updated in December 2024 and includes support for
Google Distributed Cloud version 1.31.
This page is for Cloud architects who want to design and build a
a hybrid environment for Google Kubernetes Engine clusters. The complete reference architecture
is provided as PDFs at the bottom of this page and shows you how to
appropriately plan, deploy, and configure the required components for a
GKE hybrid environment. This reference architecture shows you how
to integrate Google Cloud-based services with on-premises deployments of
Google Distributed Cloud software only on VMware or bare metal.
The following architecture diagram provides an overview of a complete
GKE deployment in a hybrid environment that's
explained in detail in the reference architecture:
In the previous diagram, Google Cloud-based services help you manage logging and
monitoring data, store container images, and provide configuration management.
On-premises components that run in your own data center like physical or virtual
servers and clusters, identity solutions, and load balancers complete the hybrid
approach.
The diagram also shows some different user personas who interact with the
services, such as application developers, application operators, platform
developers and operators, and network operators. Each of the personas has access
to the resources that they need:
To get maximum value from this reference architecture, you should already be
familiar with basic GKE concepts. If you're new to,
GKE, then get started with
Start learning about GKE .
You should also be familiar with basic Kubernetes concepts. For more
information, see
Kubernetes basics ,
and the
Google Kubernetes Engine (GKE) documentation .
This reference architecture focuses on the following aspects of an
GKE hybrid environment that uses
Google Distributed Cloud on VMware or bare metal:
Architecture and components
Example reference deployments
Design prerequisites, including Google Cloud regions and sites, on-premises
setup, and networking.
Design considerations for availability, security and compliance, scale
and limits, observability, Git-ops based configuration management, and more.
Implementation details like logging and
monitoring, permissions, and others.
Get the reference architecture
The reference architecture is published in two parts - the first part explains
the architecture, reference deployments, and design prerequisites and
considerations, and the second part provides the implementation details. To read
the reference architecture, select one of the following PDF links:
Part 1 - Architecture, reference deployments, design prerequisites and considerations (PDF)
Part 2 - Implementation details (PDF)
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
