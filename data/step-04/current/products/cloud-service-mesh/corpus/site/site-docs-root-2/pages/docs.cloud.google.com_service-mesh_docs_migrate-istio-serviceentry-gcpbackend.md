---
title: "Migrate Istio ServiceEntry to GCPBackend for Cloud Run \_|\_ Cloud Service\
  \ Mesh \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/migrate-istio-serviceentry-gcpbackend
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/migrate-istio-serviceentry-gcpbackend
  title: "Migrate Istio ServiceEntry to GCPBackend for Cloud Run \_|\_ Cloud Service\
    \ Mesh \_|\_ Google Cloud Documentation"
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
Migrate Istio ServiceEntry to GCPBackend for Cloud Run
Preview
This product or feature is
subject to the "Pre-GA Offerings Terms" in the General Service Terms section
of the Service Specific
Terms .
Pre-GA products and features are available "as is" and might have limited support.
For more information, see the
launch stage descriptions .
Note: This guide only supports Cloud Service Mesh with Istio APIs and does
not support Google Cloud APIs. For more information see,
Cloud Service Mesh overview .
This page shows you how to migrate from ServiceEntry to GCPBackend,
demonstrating how Istio's traffic management capabilities can ensure a smooth
and safe transition.
Migrating to GCPBackend provides the following benefits:
Simplified application code: you can eliminate the need for manual
IAM JWT injection in the application, reducing complexity and
potential errors.
Improved security: take advantage of automatic IAM JWT
injection for more secure communication between GKE and
Cloud Run.
Seamless migration: Utilize traffic splitting and mirroring to safely migrate
traffic without disrupting the application.
Enhanced manageability: Benefit from the streamlined configuration and
management.
Before you begin
The following sections assume that you have:
A GKE Cluster with Cloud Service Mesh enabled .
An Istio Service Entry.
Configured GCPBackend resource for Cloud Run service .
Create or modify the existing VirtualService to include both the ServiceEntry and GCPBackend as destinations
You can use traffic splitting to gradually shift traffic from the ServiceEntry
to the GCPBackend. You should start with a small percentage of traffic directed
to the GCPBackend and gradually increase it while monitoring for any issues.
The following example describes migrating 10% of the requests to the GCPBackend.
cat <<EOF > virtual-service.yaml
apiVersion: networking.istio.io/v1alpha3
kind: VirtualService
metadata:
name: gcpbackend-migration
namespace: NAMESPACE
spec:
hosts:
- service-entry.com
http:
- route:
- destination:
host: gcpbackend.com
weight: 10 # 10% traffic to gcp backend.
- destination:
host: service-entry.com
weight: 90 # 90% traffic to service entry
EOF
kubectl apply -f virtual-service.yaml
Where:
NAMESPACE is the namespace name.
In this example:
VIRTUAL_SERVICE is gcpbackend-migration .
SERVICE_ENTRY_HOSTNAME is service-entry.com .
GCP_BACKEND_HOSTNAME is gcpbackend.com .
(Optional) Configure VirtualService for Traffic Mirroring
To further ensure a smooth transition, you can configure traffic mirroring to
send a copy of the traffic to the GCPBackend while still primarily directing
traffic to the ServiceEntry. This allows for testing and validation of the
GCPBackend configuration without impacting the primary traffic flow. For more
information, see the Istio Virtual Service API .
Validate functionality
Refer to your application logs or Cloud Service Mesh metrics to check error
rate of requests to $SERVICE_ENTRY_HOSTNAME. There shouldn't be any errors.
To test outside of your application, you can deploy a curl client. If the
request is routed to CloudRun using the GCPBackend API then the request doesn't
need an IAM token explicitly attached to the request because
Cloud Service Mesh attaches it automatically.
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
name: testcurl
namespace: default
spec:
containers:
- name: curl
image: curlimages/curl
command: [ "sleep" , "3000" ]
EOF
kubectl exec testcurl -c curl -- curl " $SERVICE_ENTRY_HOSTNAME "
The output should be a valid HTTP 200 response.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
