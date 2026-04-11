---
title: "Check control plane implementation \_|\_ Cloud Service Mesh \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/check-control-plane-implementation
  title: "Check control plane implementation \_|\_ Cloud Service Mesh \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Anthos Service Mesh and Traffic Director are now Cloud Service Mesh. For more information, see the Cloud Service Mesh overview .
Home
Documentation
Networking
Cloud Service Mesh
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Check control plane implementation
Run the following command to identify your cluster's control plane implementation:
gcloud container fleet mesh describe --project FLEET_PROJECT_ID
The output is similar to the following:
...
membershipSpecs:
projects/746296320118/locations/us-central1/memberships/demo-cluster-1:
mesh:
management: MANAGEMENT_AUTOMATIC
membershipStates:
projects/746296320118/locations/us-central1/memberships/demo-cluster-1:
servicemesh:
controlPlaneManagement:
details:
- code: REVISION_READY
details: 'Ready: asm-managed'
state: ACTIVE
implementation: TRAFFIC_DIRECTOR
...
The possible values of the implementation are:
TRAFFIC_DIRECTOR : The core infrastructure of Google Cloud serves as the
Cloud Service Mesh control plane.
ISTIOD : managed instance of istiod serves as the Cloud Service Mesh
control plane.
UPDATING : The cluster is being migrated between implementations. Soon you
will have the TRAFFIC_DIRECTOR implementation.
If you don't see controlPlaneManagement.state: ACTIVE this means you don't
have a managed control plane. To confirm that you have an in-cluster control
plane, check for an istiod deployment in your istio-system namespace:
kubectl -n istio-system get deploy istiod
The output is similar to the following:
NAME READY UP-TO-DATE AVAILABLE AGE
istiod 1/1 1 1 20m
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
