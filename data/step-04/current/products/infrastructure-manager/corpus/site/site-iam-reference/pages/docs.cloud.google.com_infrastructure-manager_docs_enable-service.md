---
title: "Enable and disable the service \_|\_ Infrastructure Manager \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/infrastructure-manager/docs/enable-service
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/infrastructure-manager/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/infrastructure-manager/docs/enable-service
  title: "Enable and disable the service \_|\_ Infrastructure Manager \_|\_ Google\
    \ Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Infrastructure as code
Infrastructure Manager
Guides
Send feedback
Enable and disable the service
Stay organized with collections
Save and categorize content based on your preferences.
This page describes the steps to enable and disable Infrastructure Manager.
See Pricing for information about charges for Infra Manager.
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
kubectl or extensions to authenticate with Infra Manager using
the gcloud CLI.
Enable the API from Google Cloud console
or with the following gcloud command:
gcloud services enable config.googleapis.com
Optional: In order to use quota validation with Infra Manager,
enable the API from Google Cloud console
or with the following gcloud command:
gcloud services enable cloudquotas.googleapis.com
Disabling service
When you disable the Infra Manager API, any related resources will
continue to exist in the project. Once disabled, you cannot use the service
to make any changes to deployments and resources in the project.
If you enable the API again, you can continue to use the service in the same
way as when you first enabled the API.
To disable the API from the Google Cloud console:
console
Go to the API Overview
page for Infra Manager.
Select the project where the API is enabled.
Click Manage .
Click Disable API .
gcloud
Run the following command to disable the API for your current project:
gcloud services disable config.googleapis.com
What's next
Learn more about Terraform with Google Cloud .
Deploy infrastructure using Infra Manager .
Update a deployment .
View the state of a deployment .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
