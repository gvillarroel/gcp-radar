---
title: "Installation and Setup \_|\_ Cloud Deployment Manager \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/installation-and-setup
knowledge_key: corpus
source_id: site-docs-reference-2
source_type: site
entrypoint: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/installation-and-setup
source_metadata:
  url: https://docs.cloud.google.com/deployment-manager/docs/step-by-step-guide/installation-and-setup
  title: "Installation and Setup \_|\_ Cloud Deployment Manager \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Cloud Deployment Manager will reach end of support on March 31, 2026 . If you currently use Deployment Manager, please migrate to Infrastructure Manager or an alternative deployment technology by March 31, 2026 to ensure your services continue without interruption.
For more information on the deprecation and shutdown, see Deployment Manager deprecation .
Home
Documentation
Infrastructure as code
Cloud Deployment Manager
Guides
Send feedback
Installation and Setup
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial goes through Deployment Manager using the gcloud
command-line tool. Follow the setup steps to prepare your local environment to
use Deployment Manager.
Create a project
In the Google Cloud console, go to the project selector page.
Go to project selector
Select or create a Google Cloud project.
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
Enable the APIs for the Google Cloud resources that you want to manage
Deployment Manager uses the APIs of other Google Cloud services to
create and manage your resources. To create these resources, you must first
enable the services' APIs for your project.
For this walkthrough, you deploy Compute Engine resources, so
you need to enable the Compute Engine API.
Enable the Compute Engine API
Next, enable Deployment Manager:
Enable the Deployment Manager API
Install Google Cloud CLI
The Google Cloud CLI offers a command-line tool, gcloud , that makes interacting
with Deployment Manager easy.
To install gcloud CLI:
Download and authenticate gcloud .
Alternatively, use
Cloud Shell ,
which comes with gcloud already installed.
Set your project ID.
Every command requires a project ID. Set a default project ID so you do not
need to provide it every time. Remember to replace myproject with your
own project ID .
gcloud config set project myproject
Set your default zone and region. Some Google Cloud resources require
a zone or a region, and you can set a default zone or region, similar to a
default project. To set a default zone or region, use gcloud config set .
In this case, use us-central1 as the region and us-central1-f as the
zone:
gcloud config set compute / region us - central1
gcloud config set compute / zone us - central1 - f
Clone the Deployment Manager GitHub repository
The Deployment Manager GitHub repository contains samples created by
Google and the Deployment Manager community, including the samples used in
this walkthrough.
git clone https://github.com/GoogleCloudPlatform/deploymentmanager-samples
# open the samples folder
cd deploymentmanager-samples/examples/v2/step_by_step_guide
Now that you have set up your environment, you can start creating your
deployment.
Previous
arrow_back
Overview
Next
Understanding configurations
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
