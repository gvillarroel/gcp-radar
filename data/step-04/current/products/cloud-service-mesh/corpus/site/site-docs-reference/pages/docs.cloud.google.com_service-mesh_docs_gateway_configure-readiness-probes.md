---
title: "Configure Kubernetes readiness probes (Optional) \_|\_ Cloud Service Mesh\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/gateway/configure-readiness-probes
knowledge_key: corpus
source_id: site-docs-reference
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/cloud-run-api-reference
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/gateway/configure-readiness-probes
  title: "Configure Kubernetes readiness probes (Optional) \_|\_ Cloud Service Mesh\
    \ \_|\_ Google Cloud Documentation"
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
Configure Kubernetes readiness probes (Optional)
This page describes how to use Cloud Service Mesh with Google Cloud health check infrastructure to configure Kubernetes probes and readiness gates.
Prerequisites
As a starting point, this guide assumes that you have already:
Created a GKE cluster and registered it to a fleet .
Installed the custom resource definitions .
Transparent Healthchecks with CSM
Cloud Service Mesh Gateway API now offers Transparent health checks, that is, Universal HealthChecks integrated with Kubernetes readiness status data to enable traffic flow to the Pods that are marked ready. This capability is available for both HTTP and gRPC services.
Cloud Service Mesh exposes the status of your Kubernetes Pods directly to the Google health check infrastructure, so the same configuration you use for Pod readinessProbes will be passed transparently to the Google load balancing health check infrastructure and the health check state will be aligned with the readiness probe state. This is done using a component, called Transparent Health Checker, which runs on every node that will serve the Pod's health status.
Cloud Service Mesh configures Health check traffic sent from the health check infrastructure source ranges to be sent to a reserved port (7877). This traffic is redirected to the transparent health check server locally on the node. The server responds with a health status matching the current state of the Kubernetes Pod readiness. The traffic flow to Kubernetes Pods is controlled based on Ready status set on each Pod. You can optionally control the "Ready" status with readiness probe and readiness gates values. The transparent health-check will report the status based on a logical operator AND of all Kubernetes conditions.
You can configure Kubernetes probes, readiness gates and other checks that influence the Kubernetes Pod readiness status.
Configure readiness probes for a HTTP service (Optional)
You can optionally add this section to the Deployment for the whereami service HTTP Service Setup .
...
spec:
containers:
- name: whereami
image: us-docker.pkg.dev/google-samples/containers/gke/whereami:v1
ports:
- containerPort: 8080
readinessProbe:
initialDelaySeconds: 1
periodSeconds: 2
timeoutSeconds: 1
successThreshold: 1
failureThreshold: 1
httpGet:
host:
scheme: HTTP
path: /
port: 8080
initialDelaySeconds: 5
periodSeconds: 5
Configure readiness probes for a gRPC service (Optional)
You can optionally add this section to the Deployment for psm-grpc-server gRPC service setup .
...
spec:
containers:
- name: psm-grpc-server
image: ${ IMAGE_NAME }
imagePullPolicy: Always
args:
${ ARGS }
ports:
- containerPort: 50051
readinessProbe:
initialDelaySeconds: 1
periodSeconds: 2
timeoutSeconds: 1
successThreshold: 1
failureThreshold: 1
grpc:
port: 50051
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
