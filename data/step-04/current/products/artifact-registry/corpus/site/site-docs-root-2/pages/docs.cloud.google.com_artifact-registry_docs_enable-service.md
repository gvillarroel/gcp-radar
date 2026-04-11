---
title: "Enable and disable the service \_|\_ Artifact Registry \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/artifact-registry/docs/enable-service
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/artifact-registry/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/artifact-registry/docs/enable-service
  title: "Enable and disable the service \_|\_ Artifact Registry \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Artifact Registry
Guides
Send feedback
Enable and disable the service
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to enable and disable Artifact Registry.
If you use Container Registry, you can enable Artifact Registry in the same
project. Each service operates independently.
See Pricing for information about charges for Artifact Registry.
See the Artifact Analysis documentation for information about enabling
Artifact Analysis APIs and pricing for vulnerability scanning.
Enabling service
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
Install and initialize Google Cloud CLI if it is not
already installed. For an existing installation, update components of
the Google Cloud CLI with the command:
gcloud components update .
To check your version of the gcloud CLI, run the command:
gcloud version
Note: On Ubuntu, use the
Debian package to install
gcloud CLI. The gcloud CLI snap package does not include
kubectl or extensions to authenticate with Artifact Registry using
the gcloud CLI.
Enable the API from Google Cloud console
or with the following gcloud command:
gcloud services enable artifactregistry.googleapis.com
Disabling service
Before you disable the Artifact Registry API, ensure that any artifacts
that you want to keep are available in another location. It is recommended that
you delete repositories before disabling the API.
When you disable the Artifact Registry API, the following conditions apply:
Repositories and artifacts in repositories become inaccessible.
Data might be deleted within 7 days after the API is disabled.
To disable the API from the Google Cloud console:
console
Go to the API Overview
page for Artifact Registry.
Select the project where the API is enabled.
Click Manage .
Click Disable API .
gcloud
Run the following command to disable the API for your current project:
gcloud services disable artifactregistry.googleapis.com
What's next
Configure access permissions for repositories
Configure authentication to repositories:
Docker
Java
Node.js
Python
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
