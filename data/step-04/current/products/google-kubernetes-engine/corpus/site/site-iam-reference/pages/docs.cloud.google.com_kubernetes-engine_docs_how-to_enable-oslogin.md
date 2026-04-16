---
title: "Enable and configure OS Login in GKE \_|\_ GKE security \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-oslogin
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/kubernetes-engine/docs/concepts/access-control
source_metadata:
  url: https://docs.cloud.google.com/kubernetes-engine/docs/how-to/enable-oslogin
  title: "Enable and configure OS Login in GKE \_|\_ GKE security \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application hosting
Google Kubernetes Engine (GKE)
GKE security
Send feedback
Enable and configure OS Login in GKE
Stay organized with collections
Save and categorize content based on your preferences.
Standard
This page explains how to enable OS Login and
configure an organization policy to enforce OS Login for
GKE Standard mode clusters and nodes. You can use
OS Login to manage SSH access to your instances using IAM
without having to create and manage individual SSH keys.
OS Login isn't available for GKE
Autopilot mode clusters because GKE manages the nodes.
This page is for
Security specialists who
want to add OS Login policies on GKE Standard clusters
to ensure that all VM instances have OS Login by default.
To learn more about
common roles and example tasks that we reference in Google Cloud content, see
Common GKE user roles and tasks .
Before reading this page, ensure that you're familiar with the general overview of OS Login .
Overview
You can set up an OS Login constraint in your
organization to ensure that all new projects, and the VM instances created in
these new projects, have OS Login enabled. OS Login has quickly become a
Google Cloud security best practice, recommending that you enforce its use
through an organization policy .
The following instructions detail how to enable OS Login using an organization
policy in GKE.
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
Update existing projects to use OS Login
Before setting the organization policy, migrate any existing clusters to use OS
Login.
Enable OS Login on all existing and new VM instances by default by setting
the enable-oslogin flag to TRUE . You don't need to reboot the node.
gcloud compute project-info add-metadata --metadata enable-oslogin = TRUE
Caution: Enabling OS Login on instances disables metadata-based SSH key
configurations on those instances. Disabling OS Login restores SSH keys
that you have configured in project or instance metadata .
Set the OS Login organization policy
To set the OS Login constraint at the organization level, perform the following:
Find your organization ID by running the following command:
gcloud organizations list
Set the OS Login organization policy. Replace ORGANIZATION_ID
with your organization ID.
gcloud resource-manager org-policies enable-enforce \
compute.requireOsLogin \
--organization = ORGANIZATION_ID
After the organization policy is set, the following conditions are applied:
enable-oslogin is set to true in the project metadata for all new
projects.
Update requests to set enable-oslogin to false in instance or project
metadata are rejected.
Manage node access
Once you have enabled the OS Login organization policy, you no longer need to
manage SSH keys to make authorization decisions. OS Login moves authorization
management to Identity and Access Management. To manage SSH access to nodes, use OS Login. For
more details, see Setting up OS Login .
What's next
Learn about the OS Login service .
Learn to troubleshoot OS Login .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
