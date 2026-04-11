---
title: "Enable Backup for GKE API \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/install
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/how-to/install
  title: "Enable Backup for GKE API \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
Documentation
Guides
Send feedback
Enable Backup for GKE API
Stay organized with collections
Save and categorize content based on your preferences.
Autopilot
Standard
This page describes how to enable
Backup for GKE .
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
Enable the Backup for GKE API
The Backup for GKE service is automatically enabled in any project where the
GKE API is enabled. This lets you to improve the data protection
posture of your GKE clusters by making use of the
Backup for GKE service.
Enabling the Backup for GKE API alone doesn't modify any existing GKE
cluster configurations or affect the running workloads. Also, it doesn't
automatically create backups or incur additional costs. Costs are only incurred
when you create and store backups using the Backup for GKE service.
If you manually disabled the Backup for GKE
service, you can enable the Backup for GKE service by using the
Google Cloud CLI, Google Cloud console, or Terraform.
gcloud
To enable the Backup for GKE service, run the following command:
gcloud services enable gkebackup.googleapis.com
Console
In the Google Cloud console, enable the Backup for GKE API:
Enable the API
Terraform
Create an appropriate "google_project_service" resource to
enable the gkebackup.googleapis.com service:
resource "google_project_service" "my_service" {
project = "my_project"
service = "gkebackup.googleapis.com"
}
For more information, see google_project_service .
What's next
Learn more about defining custom backups .
Learn more about planning a set of backups .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
