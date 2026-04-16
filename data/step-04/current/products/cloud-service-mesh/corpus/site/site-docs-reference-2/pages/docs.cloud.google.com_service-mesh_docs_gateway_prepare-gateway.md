---
title: "Prepare to setup the Gateway API for Cloud Service Mesh \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/service-mesh/docs/release-notes
source_metadata:
  url: https://docs.cloud.google.com/service-mesh/docs/gateway/prepare-gateway
  title: "Prepare to setup the Gateway API for Cloud Service Mesh \_|\_ Google Cloud\
    \ Documentation"
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
Prepare to setup the Gateway API for Cloud Service Mesh
This page describes how to install the required custom resource definitions
for the gateway into your cluster.
Limitations
Having a mix of gateway config-api and istio config-api clusters in the
same fleet is not supported. Make sure the config-api is set to gateway for
all the clusters in your fleet. Use the
gcloud container fleet mesh describe --project FLEET_PROJECT_ID command to
see what you have configured for your fleet.
Multi-cluster service discovery and load balancing is not supported for
gateway config-api clusters.
If a cluster is onboarded using the existing --management automatic flag
then the cluster starts using the istio configuration API and cannot change
to gateway API.
Only FQDNs are supported. Short names are not supported.
Data plane management considerations
For new pods, Google manages which proxy version is injected. Note that the
managed data plane relies on the Google Kubernetes Engine (GKE) release channel to
determine the proxy version.
For existing pods, proxy management is done passively, driven by the natural
lifecycle of the pods in the cluster. To trigger the
update and re-inject new versions of the proxy, restart your workloads.
Prerequisites
As a starting point, this guide assumes that you have already
created a Google Cloud project and
installed kubectl .
Before you begin
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine, GKE Hub, and Cloud Service Mesh APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, on the project selector page,
select or create a Google Cloud project.
Roles required to select or create a project
Select a project : Selecting a project doesn't require a specific
IAM role—you can select any project that you've been
granted a role on.
Create a project : To create a project, you need the Project Creator role
( roles/resourcemanager.projectCreator ), which contains the
resourcemanager.projects.create permission. Learn how to grant
roles .
Note : If you don't plan to keep the
resources that you create in this procedure, create a project instead of
selecting an existing project. After you finish these steps, you can
delete the project, removing all resources associated with the project.
Go to project selector
Verify that billing is enabled for your Google Cloud project .
Enable the Kubernetes Engine, GKE Hub, and Cloud Service Mesh APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Create and register a GKE cluster
gcloud
Create a GKE cluster:
gcloud container clusters create CLUSTER_NAME \
--location = LOCATION \
--enable-ip-alias \
--scopes = https://www.googleapis.com/auth/cloud-platform \
--release-channel = regular \
--project = PROJECT_ID \
--gateway-api = standard \
--workload-pool = PROJECT_ID .svc.id.goog \
--workload-metadata = GKE_METADATA
where:
CLUSTER_NAME is the name of your cluster
LOCATION is the location of your cluster
PROJECT_ID is the project ID of your cluster
Console
Go to the Google Kubernetes Engine page in the Google Cloud console.
Go to Google Kubernetes Engine
Click add_box Create .
In the Standard section, click Configure .
In the Cluster basics section, complete the following:
Enter the Name for your cluster.
For the Location type , select a
Compute Engine region for
your cluster.
In the navigation pane, click default-pool under Node Pools
section, and select Security .
In the Access scopes list, select Set access for each API , and
set Cloud Platform as Enabled .
In the navigation pane, click Networking under Cluster section.
In the Cluster Networking list, select Enable Gateway API .
In the navigation pane, click Security under Cluster section.
In the Security list, select Enable Workload Identity .
Click Create .
After the cluster is created,
Register your cluster to a fleet :
gcloud container fleet memberships register CLUSTER_NAME \
--gke-cluster LOCATION / CLUSTER_NAME \
--project = PROJECT_ID
Verify that the cluster is registered to the fleet:
gcloud container fleet memberships list --project = PROJECT_ID
The output is similar to:
NAME EXTERNAL_ID LOCATION
my-cluster 91980bb9-593c-4b36-9170-96445c9edd39 us-west1
Set up permissions
Note that the following commands grant permission to all authenticated users,
but you can use Workload Identity Federation for GKE to grant permission to only select accounts.
For details on how Workload Identity Federation for GKE works,
see About Workload Identity Federation for GKE .
To configure Workload Identity Federation for GKE, see
Authenticate to Google Cloud APIs from GKE workloads .
Grant the trafficdirector.client role:
gcloud projects add-iam-policy-binding PROJECT_ID \
--member "group: PROJECT_ID .svc.id.goog:/allAuthenticatedUsers/" \
--role "roles/trafficdirector.client"
Enable Cloud Service Mesh
Enable the mesh feature:
gcloud container fleet mesh enable --project PROJECT_ID
Update the mesh to use the Gateway API:
gcloud alpha container fleet mesh update \
--config-api gateway \
--memberships CLUSTER_NAME \
--project PROJECT_ID
Verify the update by describing the status of Cloud Service Mesh resource:
gcloud alpha container fleet mesh describe \
--project PROJECT_ID
Set your fleet new memberships to use the Gateway API by default (optional)
Alternatively, you can create fleet-level default settings for new GKE clusters registered to the fleet during cluster creation to be automatically configured with Gateway API.
Create a YAML file specifying using Gateway API:
echo "configapi: gateway" > mesh.yaml
Note: management and config-api shouldn't be configured at the same time.
Update your mesh:
gcloud alpha container fleet mesh update --project FLEET_PROJECT_ID \
--fleet-default-member-config mesh.yaml
Create a cluster and register them to your fleet in one step to use the default configuration:
gcloud container clusters create CLUSTER_NAME \
--project PROJECT_ID \
--fleet-project FLEET_PROJECT_ID \
--location = LOCATION \
Enable Workload Identity Federation for GKE and run the GKE Metadata Server on your node.
Install custom resource definitions
Generate a kubeconfig entry for your cluster:
gcloud container clusters get-credentials CLUSTER_NAME --location LOCATION --project PROJECT_ID
where:
CLUSTER_NAME is the name of your cluster
LOCATION is the location of your cluster
PROJECT_ID is the project ID of your cluster
Install the GRPCRoute custom resource definition (CRD):
curl https://raw.githubusercontent.com/kubernetes-sigs/gateway-api/v1.1.0/config/crd/standard/gateway.networking.k8s.io_grpcroutes.yaml \
| kubectl apply -f -
The output is similar to:
customresourcedefinition.apiextensions.k8s.io/grpcroutes.gateway.networking.k8s.io created
What's next
Set up an Envoy sidecar service mesh on GKE
Set up a proxyless gRPC service mesh on GKE
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
