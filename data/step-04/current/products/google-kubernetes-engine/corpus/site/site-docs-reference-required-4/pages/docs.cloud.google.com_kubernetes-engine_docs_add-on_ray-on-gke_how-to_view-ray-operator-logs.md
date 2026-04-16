---
title: "View Ray Operator logs on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/view-ray-operator-logs
knowledge_key: corpus
source_id: site-docs-reference-required-4
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/provisioningrequest
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/ray-on-gke/how-to/view-ray-operator-logs
  title: "View Ray Operator logs on GKE \_|\_ GKE AI/ML \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE AI/ML
Guides
Send feedback
View Ray Operator logs on GKE
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page shows you how to read Ray Operator logs on Google Kubernetes Engine (GKE) using Cloud Logging when you use the Ray Operator on GKE.
Before you begin
Before you start, make sure that you have performed the following tasks:
Enable
the Google Kubernetes Engine API.
Enable Google Kubernetes Engine API
If you want to use the Google Cloud CLI for this task,
install and then
initialize the
gcloud CLI. If you previously installed the gcloud CLI, get the latest
version by running the gcloud components update command. Earlier gcloud CLI versions might not support running the commands in this document.
Note: For existing gcloud CLI
installations, make sure to set the compute/region property . If you use primarily zonal clusters, set the compute/zone instead. By setting a default location,
you can avoid errors in the gcloud CLI like the following:
One of [--zone, --region] must be supplied: Please specify location . You might need to specify the location in certain commands if the location of your cluster differs from the default that you set.
Enable the Ray Operator for Google Kubernetes Engine (GKE) .
Requirements and limitations
Ray Operator logs are available on GKE cluster versions 1.33.1-gke.1231000 or later.
View Ray operator logs
When enabling the Ray Operator on GKE, the operator logs are automatically available in Cloud Logging.
To view the logs, follow these steps:
In the Google Cloud console, go to the Logs Explorer page.
Open the Logs Explorer
Open the query editor. In the query editor, enter your expression and click Run query .
You can use the following example query in the Logs Explorer:
resource.type="k8s_control_plane_component"
resource.labels.cluster_name=" CLUSTER_NAME "
resource.labels.location=" CLUSTER_LOCATION "
logName="projects/" PROJECT_NAME "/logs/container.googleapis.com%2Fray-operator"
Replace the following values:
CLUSTER_NAME : the name of your GKE cluster.
CLUSTER_LOCATION : the Compute Engine location of the control plane of your cluster. Provide a region for regional clusters, or a zone for zonal clusters.
PROJECT_NAME : your Google Cloud project ID .
The query returns logs related to the Ray Operator addon, such as the status of the Ray cluster, the creation of the Ray resources, and the reconciliation of the Ray resources.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
