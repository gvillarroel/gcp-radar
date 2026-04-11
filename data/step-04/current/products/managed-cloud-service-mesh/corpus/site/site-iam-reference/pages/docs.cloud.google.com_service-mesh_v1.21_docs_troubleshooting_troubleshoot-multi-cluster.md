---
title: "Resolving multi-cluster issues \_|\_ Cloud Service Mesh v1.21 \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-multi-cluster
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-managed-service-mesh
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.21/docs/troubleshooting/troubleshoot-multi-cluster
  title: "Resolving multi-cluster issues \_|\_ Cloud Service Mesh v1.21 \_|\_ Google\
    \ Cloud Documentation"
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
Resolving multi-cluster issues
This section explains common Cloud Service Mesh problems and how to resolve
them. If you need additional assistance, see
Getting support .
Missing secrets
This section only applies to the in-cluster control plane and the managed
control plane with the Istiod implementation.
Cloud Service Mesh relies on a kubeconfig file embedded in the Kubernetes
secret for proper remote endpoint discovery. Without the secrets, users will
always see requests hit pods in the local cluster during cross-cluster load
balancing.
Verify the secret has been created by running the following command in every
cluster:
kubectl get secret istio-remote-secret- CLUSTER_NAME _i -n istio-system
Verify the expected output:
NAME TYPE DATA AGE
istio-remote-secret-CLUSTER_NAME_i Opaque 1 44s
To recover from this, delete all the remote secrets and re-run the create-mesh
command.
Unreachable API server
This section only applies to in-cluster control plane and managed
(istiod implementation).
The control plane of Cloud Service Mesh needs to reach the API server of the
remote cluster. The following situations can cause the remote cluster to become
unreachable:
The remote cluster is deleted.
The remote cluster is a
private cluster
that does not have
global access
enabled.
The remote cluster is a
private cluster
with Master Authorized Network
enabled but the Cloud Service Mesh control plane IP has not been properly
allowed using the allow list.
Given an unreachable API server, Istiod will output error messages in the log.
Users will always see requests hit the local pod during cross-cluster load
balancing.
In the Logs Explorer interface,
set the query resource.type to istio_control_plane .
Check to see if there are any invalid secret errors.
To recover from this problem, fix the underlying API server
reachability issue. Next, delete all the remote secrets in every cluster and
re-run the create-mesh command.
Missing firewall rule
Without the proper firewall rule, users will experience a 10-second delay
followed by a timeout when doing cross-cluster load balancing.
To recover from this, follow the steps outlined in
Create firewall rule .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
