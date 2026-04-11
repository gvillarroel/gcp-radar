---
title: "Deploying Services \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/service-mesh/v1.20/docs/deploying-services
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/v1.20/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/v1.20/docs/deploying-services
  title: "Deploying Services \_|\_ Cloud Service Mesh v1.20 \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

You are viewing legacy v1.20 Service Mesh documentation.
Available versions
Cloud Service Mesh latest Cloud Service Mesh 1.26 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.24 archive Cloud Service Mesh 1.23 archive Cloud Service Mesh 1.22 archive Cloud Service Mesh 1.21 archive Cloud Service Mesh 1.20 archive Anthos Service Mesh 1.19 archive
Home
Documentation
Networking
Cloud Service Mesh
v1.20
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploying Services
Deploying Services to clusters with Cloud Service Mesh is almost the
same as deploying Services to clusters without Cloud Service Mesh. You do need to
make some changes to your Kubernetes manifests:
Create
Kubernetes Services
for all containers. All
Deployments
should have a
Kubernetes Service attached.
Name your Service ports. Although GKE allows you to
define unnamed Service ports, Cloud Service Mesh requires that you provide a
name for a port that matches the port's
protocol.
Label your Deployments. This allows you to use Cloud Service Mesh traffic
management features such as splitting traffic between versions of the same
service.
The following example Deployment and Service illustrate these requirements:
apiVersion : apps/v1
kind : Deployment
metadata :
name : helloserver
spec :
replicas : 1
selector :
matchLabels :
app : helloserver
template :
metadata :
labels :
app : helloserver
spec :
containers :
- image : gcr.io/google-samples/istio/helloserver:v0.0.1
imagePullPolicy : Always
name : main
restartPolicy : Always
terminationGracePeriodSeconds : 5
apiVersion : v1
kind : Service
metadata :
name : hellosvc
spec :
ports :
- name : http
port : 80
targetPort : 8080
selector :
app : helloserver
type : LoadBalancer
After deploying your Services on a cluster with Cloud Service Mesh, be sure to
inject sidecar proxies .
What's next
Preparing an application for Cloud Service Mesh
Deploy the Online Boutique sample application
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
