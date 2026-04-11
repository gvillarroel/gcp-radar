---
title: "Use the Google Cloud CLI \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/dataproc-metastore/docs/gcloud-installation
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/dataproc-metastore/docs
source_metadata:
  url: https://docs.cloud.google.com/dataproc-metastore/docs/gcloud-installation
  title: "Use the Google Cloud CLI \_|\_ Dataproc Metastore \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Data analytics
Dataproc Metastore
Reference
Send feedback
Use the Google Cloud CLI
Stay organized with collections
Save and categorize content based on your preferences.
As an alternative to using the Dataproc Metastore APIs ,
you can manage and access Dataproc Metastore services
using Google Cloud CLI gcloud metastore commands.
This page explains how to get started using the Google Cloud CLI, so you can use it
to interact with Dataproc Metastore.
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
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
Enable the Dataproc Metastore API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
Note: If you installed the gcloud CLI previously, make sure you have
the latest version by running gcloud components update .
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Get started with the Google Cloud CLI
To start with the gcloud CLI, review the
Google Cloud CLI Documentation .
You can get help for the tool, resources, and commands by using the --help
flag:
gcloud metastore --help
The Google Cloud CLI reference also provides the information
shown by the --help flag.
Set default configuration properties in your local client
Most gcloud metastore commands require a location, which you specify using
the --location flag or by setting the default location. You can also set the
default project and tier for your Dataproc Metastore services.
To set the default project, run the following command:
gcloud config set project PROJECT_ID
where PROJECT_ID is the ID of the Google Cloud project that the
Dataproc Metastore service belongs to.
To configure the Dataproc Metastore location, run the following command:
gcloud config set metastore/location LOCATION
where LOCATION is a supported region such as us-central1 .
To configure the Dataproc Metastore tier, run the following command:
gcloud config set metastore/tier TIER
where TIER sets the capacity of the new service.
Optional: To list the configuration for the gcloud CLI, run the following command:
gcloud config list
What's next
Dataproc Metastore gcloud commands
Enabling the API
Quickstart for deploying Dataproc Metastore
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
