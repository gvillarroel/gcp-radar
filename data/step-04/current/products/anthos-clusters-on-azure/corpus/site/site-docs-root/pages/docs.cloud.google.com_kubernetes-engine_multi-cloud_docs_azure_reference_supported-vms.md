---
title: "Supported VM sizes \_|\_ GKE on Azure \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/reference/supported-vms
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/multi-cloud/docs/azure/reference/supported-vms
  title: "Supported VM sizes \_|\_ GKE on Azure \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

The product described by this documentation, GKE on Azure, is now in maintenance mode and will be shut down on March 17, 2027.
Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE on Azure
Reference
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Supported VM sizes
Minimum supported cluster configuration
Clusters managed by GKE on Azure require a minimum of five
Standard DS2 v2
Azure VMs. The first three form your control plane instances; the last
two are your initial node pool. Your clusters may need more powerful control
plane and node pool VMs depending on the demands of your workloads.
Recommended control plane VM sizing
Cluster size (nodes)
Control plane instances
Node pool instances
Demo
3x Standard_B2s
2x Standard_B2s
1-10 Nodes
3x Standard_DS2_v2
workload dependent
11-100 nodes
3x Standard_DS3_v2
workload dependent
101-200 nodes
3x Standard_DS4_v2
workload dependent
Supported Azure VM types
GKE on Azure supports the following Azure VM sizes for control planes
and node pools. For more information, see
VM sizes
in the Azure documentation.
Type
Size
B series burstable
Standard_B2s
B series burstable
Standard_B2ms
B series burstable
Standard_B4ms
B series burstable
Standard_B8ms
B series burstable
Standard_B12ms
B series burstable
Standard_B16ms
B series burstable
Standard_B20ms
Compute optimized
Standard_F2s_v2
Compute optimized
Standard_F4s_v2
Compute optimized
Standard_F8s_v2
Compute optimized
Standard_F16s_v2
Compute optimized
Standard_F32s_v2
Compute optimized
Standard_F48s_v2
Compute optimized
Standard_F64s_v2
Compute optimized
Standard_F72s_v2
General purpose
Standard_DS2_v2
General purpose
Standard_DS3_v2
General purpose
Standard_DS4_v2
General purpose
Standard_DS5_v2
General purpose
Standard_D2s_v3
General purpose
Standard_D4s_v3
General purpose
Standard_D8s_v3
General purpose
Standard_D16s_v3
General purpose
Standard_D32s_v3
General purpose
Standard_D48s_v3
General purpose
Standard_D64s_v3
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
