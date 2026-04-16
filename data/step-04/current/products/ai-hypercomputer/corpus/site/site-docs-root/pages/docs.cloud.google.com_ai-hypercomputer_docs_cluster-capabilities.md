---
title: "Cluster management capabilities \_|\_ AI Hypercomputer \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/ai-hypercomputer/docs
source_metadata:
  url: https://docs.cloud.google.com/ai-hypercomputer/docs/cluster-capabilities
  title: "Cluster management capabilities \_|\_ AI Hypercomputer \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Compute
AI Hypercomputer
Guides
Send feedback
Cluster management capabilities
Stay organized with collections
Save and categorize content based on your preferences.
The A4X Max ,
A4X , A4 ,
A3 Ultra , A3 Mega ,
and A3 High (8 GPUs) machine series are designed to enable you to
run large-scale artificial intelligence (AI) and machine learning (ML) clusters
and provide the following cluster management capabilities:
AI infrastructure resources colocation
Cluster topology-aware placement
Cluster operational mode
Cluster maintenance scheduling and controls
Cluster monitoring and diagnostic tooling
Note: Cluster management capabilities
aren't supported for A3 Mega or A3 High VMs that you created before October 1,
2025. To check if your A3 Mega or A3 High VMs have cluster management
capabilities, verify that the deploymentType field in the reservation that you
used to create the VMs is set to DENSE .
For more information about using A3 Mega or A3 High VMs in a cluster, contact
your account team.
AI infrastructure resources colocation
When you use A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs), you can request
host machines that
Compute Engine provisions as close together as possible. These machines
offer the following features:
Compute Engine provisions the machines as
blocks of resources .
A
dynamic machine learning (ML) network fabric
interconnects the machines.
This resource arrangement minimizes network hops and optimizes for lowest
network latency. To learn more about how to obtain capacity to deploy densely
allocated blocks of accelerator-optimized machines, see
Capacity overview .
Cluster topology-aware placement
After you create compute instances by using
A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machine types, you can get topology information at the node
and cluster levels. This information helps you do the following:
Adjust your application or workload design to further minimize network
latency.
Understand and troubleshoot network latency and performance issues for instances
that communicate frequently with each other. These issues can occur if the
instances are unexpectedly located far apart.
For more information, see
View compute instances topology .
Cluster operational mode
When you reserve capacity to create compute instances or clusters by using A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
machine types, the machine type that you reserve determines the
cluster operational mode for the instances. This mode specifies how your
instances behave after
host errors or
faulty host reports. The available operational modes for an instance are
managed mode , where Compute Engine automatically replaces any faulty
machines but holds back part of your reserved capacity to help ensure that your
instances have the necessary resources to restart. Or all capacity mode , where you
have access to your full reserved capacity but are responsible for managing
failures and planned maintenance.
For more information, see
Reservation operational mode .
Cluster maintenance scheduling and controls
You control maintenance of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines by using
topology-aware scheduling in a block of resources. This capability helps
synchronize upgrades so that your workloads are more resilient to host events
and minimize disruptions. This approach helps improve the
goodput of your workload .
To facilitate full control of maintenance events, you can use the following
features:
Maintenance scheduling type
Manage host events
Maintenance scheduling type
When you reserve capacity to create compute instances or clusters of A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs)
machines, you can define how Compute Engine maintains the infrastructure
that your instances run on. Based on the machine type that you want to use for your
instances, you can choose between synchronized maintenance across instances ( grouped ), or
different maintenance schedules ( independent ).
For more information, see
Maintenance scheduling types .
Manage host events
After you create A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) instances and start your workload, you can set
up alerts and receive notifications when maintenance for your instances or reserved
blocks is scheduled, starts, or is completed. You can also view and, if needed,
manually start maintenance on an instance or reserved block before its scheduled time.
These options help you proactively control and minimize downtimes to your
workloads.
For more information, see the following:
Manage host events across instances
Manage host events across reservations
Cluster monitoring and diagnostic tooling
For monitoring and troubleshooting, A4X Max, A4X, A4, A3 Ultra, A3 Mega, and A3 High (8 GPUs) machines include the
following services:
VM health degradation prediction ,
which helps you identify VMs that are likely to degrade within the next five
hours.
Faulty host reporting ,
which you can use to flag issues with individual host machines.
Support for Cloud Monitoring metrics ,
which help you monitor networks and GPUs performance.
What's next?
Terminology
Choose a deployment strategy
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
