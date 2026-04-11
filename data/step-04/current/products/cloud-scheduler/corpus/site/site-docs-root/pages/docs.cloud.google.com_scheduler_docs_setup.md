---
title: "Set up your environment \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/scheduler/docs/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/scheduler/docs
source_metadata:
  url: https://docs.cloud.google.com/scheduler/docs/setup
  title: "Set up your environment \_|\_ Cloud Scheduler \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Scheduler
Guides
Send feedback
Set up your environment
Stay organized with collections
Save and categorize content based on your preferences.
Before scheduling and running a cron job, you must set up your Google Cloud
project and environment for Cloud Scheduler.
Enable the Cloud Scheduler API
Use the following instructions to create or select a Google Cloud project
and to enable the Cloud Scheduler API.
Console
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
Enable the Cloud Scheduler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Cloud Scheduler API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
gcloud
Sign in to your Google Cloud account. If you're new to
Google Cloud,
create an account to evaluate how our products perform in
real-world scenarios. New customers also get $300 in free credits to
run, test, and deploy workloads.
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Scheduler API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudscheduler.googleapis.com
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
Create or select a Google Cloud project .
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
Create a Google Cloud project:
gcloud projects create PROJECT_ID
Replace PROJECT_ID with a name for the Google Cloud project you are creating.
Select the Google Cloud project that you created:
gcloud config set project PROJECT_ID
Replace PROJECT_ID with your Google Cloud project name.
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Scheduler API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable cloudscheduler.googleapis.com
Set up authentication
How you authenticate to Cloud Scheduler depends on the interface you
use to access the API and the environment where your code is running.
For more information, see
Authenticate to Cloud Scheduler and
Use authentication with HTTP targets .
Add an App Engine application
If you are going to use an App Engine HTTP target, you must add an
App Engine application
to your project. This app serves as both the location of the Cloud Scheduler
service and of the job handler itself, which performs the work associated with
a Cloud Scheduler job, and returns an acknowledgement in response.
If you want to have an App Engine job handler that is not in your
project, you should select an HTTP target instead. In this case, you don't need
an App Engine app in your project.
Console
In the Google Cloud console, go to the App Engine page.
Go to App Engine
In the Welcome to App Engine dialog, do one of the
following:
If you have already created an App Engine application and there
is a Your App Engine application has been created message displayed,
you can then skip the remaining steps in this section.
or
If you haven't created an App Engine application yet, then click
Create application and continue with the remaining steps in this
section.
Select a region for your
application.
Note that europe-west and us-central are called, respectively,
europe-west1 and us-central1 in Cloud Scheduler commands.
After you set a region for the App Engine app, you can't change
it .
Don't select a service account; the default App Engine service
account is used.
Click Next .
The application is configured and created. This can take a couple of
minutes.
Don't download the Cloud SDK; instead, click I'll do this later .
You should see a Your App Engine application has been created message.
gcloud
To create an App Engine app, run the
gcloud app create command:
gcloud app create --region = REGION
Replace REGION with the
location in which the app runs. Note that
europe-west and us-central are called, respectively, europe-west1
and us-central1 in Cloud Scheduler commands.
After you set a region for the App Engine app, you can't change
it .
You can check the region of an existing app with the following command:
gcloud app describe
The locationId indicates the region. For example:
locationId: us-central .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
