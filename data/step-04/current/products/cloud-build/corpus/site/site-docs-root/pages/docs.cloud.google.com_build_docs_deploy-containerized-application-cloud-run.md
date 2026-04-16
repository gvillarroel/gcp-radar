---
title: "Quickstart: Deploy a containerized application to Cloud Run \_|\_ Cloud Build\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/deploy-containerized-application-cloud-run
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs
source_metadata:
  url: https://docs.cloud.google.com/build/docs/deploy-containerized-application-cloud-run
  title: "Quickstart: Deploy a containerized application to Cloud Run \_|\_ Cloud\
    \ Build \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
Cloud Build
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Deploy a containerized application to Cloud Run using Cloud Build
This page shows you how to use Cloud Build to deploy a containerized application
to Cloud Run.
Note: This quickstart shows you how to deploy an image to Cloud Run,
but Cloud Build supports deployments on additional platforms such as App Engine, GKE, and Cloud Run functions.
You can also use Cloud Deploy to
set up a continuous-delivery pipeline to deploy to Cloud Run.
To follow step-by-step guidance for this task directly in the
Cloud Shell Editor, click Guide me :
Guide me
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
Enable the Cloud Build, Cloud Run, Artifact Registry, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
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
Verify that billing is enabled for your Google Cloud project .
Enable the Cloud Build, Cloud Run, Artifact Registry, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
If you've already installed Google Cloud CLI previously, make sure you have the
latest available version by running gcloud components update .
Grant permissions
Cloud Build requires several permissions before it can deploy
an image to Cloud Run. To grant these permissions, do the
following:
Open a terminal window.
Set environment variables to store your project ID and project number.
PROJECT_ID = $( gcloud config list --format = 'value(core.project)' )
PROJECT_NUMBER = $( gcloud projects describe $PROJECT_ID --format = 'value(projectNumber)' )
Grant the Cloud Run Admin role to your
Cloud Build service account .
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = serviceAccount: $( gcloud projects describe $PROJECT_ID \
--format = "value(projectNumber)" ) -compute@developer.gserviceaccount.com \
--role = roles/run.admin \
Grant the Storage Object User role to your
Cloud Build service account.
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = serviceAccount: $( gcloud projects describe $PROJECT_ID \
--format = "value(projectNumber)" ) -compute@developer.gserviceaccount.com \
--role = roles/storage.objectUser \
Grant the Service Account User role to your
Cloud Build service account.
gcloud projects add-iam-policy-binding $PROJECT_ID \
--member = serviceAccount: $( gcloud projects describe $PROJECT_ID \
--format = "value(projectNumber)" ) -compute@developer.gserviceaccount.com \
--role = roles/iam.serviceAccountUser
Note: The Service Account User role grants overly-broad permissions to
the Cloud Build service account. When you configure
Cloud Build to deploy to Cloud Run in a production
environment, we strongly recommend configuring the Cloud Build
service account to impersonate an existing Cloud Run service
identity. For more information, see
Configure Cloud Build service account impersonation for managed services .
Deploy a prebuilt image
You can configure Cloud Build to deploy a prebuilt image that is stored
in Artifact Registry to Cloud Run.
To deploy a prebuilt image:
Open a terminal window (if not already open).
Create a new directory named helloworld and navigate into it:
mkdir helloworld
cd helloworld
Create a file named cloudbuild.yaml with the following contents. This file is
the Cloud Build config file. It contains instructions for Cloud Build
to deploy the image named us-docker.pkg.dev/cloudrun/container/hello on the Cloud Run
service named cloudrunservice .
steps :
- name : 'gcr.io/cloud-builders/gcloud'
script : |
gcloud run deploy cloudrunservice --image us-docker.pkg.dev/cloudrun/container/hello --region us-central1 --platform managed --allow-unauthenticated
Deploy the image by running the following command:
gcloud builds submit -- region = us - west2 -- config cloudbuild . yaml
When the build is complete, you will see an output similar to the following:
DONE
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
ID CREATE_TIME DURATION SOURCE IMAGES STATUS
784653b2 - f00e - 4c4b - 9f5f - 96a5f115bef4 2020 - 01 - 23T14:53:13 + 00:00 23S gs://cloudrunqs - project_cloudbuild/source/1579791193 . 217726 - ea20e1c787fb4784b19fb1273d032df2 . tgz - SUCCESS
You've just deployed the image hello to Cloud Run.
Run the deployed image
Open the Cloud Run page in the Google Cloud console:
Open the Cloud Run page
Select your project and click Open .
You will see the Cloud Run Services page.
In the table, locate the row with the name cloudrunservice , and click
cloudrunservice .
The Service details page for cloudrunservice is displayed.
To run the image that you deployed on cloudrunservice , click the URL:
What's next
Learn how to build using Cloud Build .
Learn how to create a basic build config file .
Learn how to view build results .
Learn about more ways to deploy to Cloud Run .
Learn how to deploy to Google Kubernetes Engine .
Learn more about DevOps resources .
Explore the DevOps research program .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
