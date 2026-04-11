---
title: "Resolving resource limit issues in Cloud Service Mesh \_|\_ Cloud Service\
  \ Mesh v1.21 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-resources
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-resources
  title: "Resolving resource limit issues in Cloud Service Mesh \_|\_ Cloud Service\
    \ Mesh v1.21 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing archived v1.21 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.21
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Resolving resource limit issues in Cloud Service Mesh
This section explains common Cloud Service Mesh problems and how to resolve
them. If you need additional assistance, see
Getting support .
Cloud Service Mesh resource limit problems can be caused by any of the
following:
LimitRange objects created in the istio-system namespace or any namespace
with automatic sidecar injection enabled.
User-defined limits that are set too low.
Nodes run out of memory or other resources.
Potential symptoms of resource problems:
Cloud Service Mesh repeatedly not receiving configuration from the control plane
indicated by the error, Envoy proxy NOT ready . Seeing this error a few times
at startup is normal, but otherwise it is a concern.
Networking problems with some pods or nodes that become unreachable.
istioctl proxy-status showing STALE statuses in the output.
OOMKilled messages in the logs of a node.
Memory usage by containers: kubectl top pod POD_NAME --containers .
Memory usage by pods inside a node: kubectl top node my-node .
Envoy out of memory: kubectl get pods shows status OOMKilled in the output.
Sidecars take a long time to receive configuration
Slow configuration propagation can occur due to insufficient resources allocated
to istiod or an excessively large cluster size.
There are several possible solutions to this problem:
For in-cluster Cloud Service Mesh, if your monitoring tools (prometheus,
stackdriver, etc.) show high utilization of a resource by istiod , increase
the allocation of that resource, for example increase the CPU or memory limit
of the istiod deployment. This is a temporary solution and we recommended
that you investigate methods for reducing resource consumption.
If you encounter this issue in a large cluster or deployment, reduce the
amount of configuration state pushed to each proxy by configuring
Sidecar resources .
For in-cluster Cloud Service Mesh, if the problem persists, try
horizontally scaling istiod .
If all other troubleshooting steps fail to resolve the problem, report a bug
detailing your deployment and the observed problems. Follow
these steps
to include a CPU/Memory profile in the bug report if possible, along with a
detailed description of cluster size, number of pods, and number of services.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
