---
title: "Hello custom training: Set up your project and environment \_|\_ Vertex AI\
  \ \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/workbench/instances/iam
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/image-classification-custom
  title: "Hello custom training: Set up your project and environment \_|\_ Vertex\
    \ AI \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Vertex AI
Send feedback
Hello custom training: Set up your project and environment
Stay organized with collections
Save and categorize content based on your preferences.
This page walks through setting up your Google Cloud project to use
Vertex AI and downloading some TensorFlow code for training. You will
also download code for a web app that gets predictions.
This tutorial has several pages:
Setting up your project and environment.
Training a custom image classification
model.
Serving predictions from a custom image classification
model.
Cleaning up your project.
Each page assumes that you have already performed the instructions from the
previous pages of the tutorial.
Before you begin
Throughout this tutorial, use Google Cloud console and
Cloud Shell to interact with Google Cloud. Alternatively,
instead of Cloud Shell, you
can use another Bash shell with the Google Cloud CLI installed.
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
Enable the Vertex AI and Cloud Run functions APIs.
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
Enable the Vertex AI and Cloud Run functions APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
In the Google Cloud console, activate Cloud Shell.
Activate Cloud Shell
At the bottom of the Google Cloud console, a
Cloud Shell
session starts and displays a command-line prompt. Cloud Shell is a shell environment
with the Google Cloud CLI
already installed and with values already set for
your current project. It can take a few seconds for the session to initialize.
If Cloud Shell does not display
( PROJECT_ID )$
in its prompt (where PROJECT_ID is replaced by your
Google Cloud project ID), then run the following command to
configure Cloud Shell to use your project:
gcloud config set project PROJECT_ID
Create a Cloud Storage bucket
Create a regional Cloud Storage bucket in the us-central1
region to use for the rest of this tutorial. As you follow the tutorial, use the
bucket for several purposes:
Store training code for Vertex AI to use in a custom training
job.
Store the model artifacts that your custom training job outputs.
Host the web app that gets predictions from your
Vertex AI endpoint.
To create the Cloud Storage bucket, run the following command in your
Cloud Shell session:
gcloud storage buckets create gs:// BUCKET_NAME --project = PROJECT_ID --location = us-central1
Replace the following:
PROJECT_ID : The ID of your Google Cloud project.
BUCKET_NAME : A name that you choose for your bucket. For example,
hello_custom_ PROJECT_ID . Learn about requirements for bucket
names .
Download sample code
Download sample code to use for the rest of the tutorial.
gcloud storage cp gs://cloud-samples-data/ai-platform/hello-custom/hello-custom-sample-v1.tar.gz - | tar -xzv
To optionally view the sample code files, run the following command:
ls -lpR hello-custom-sample
The hello-custom-sample directory has four items:
trainer/ : A directory of TensorFlow Keras code for training the flower
classification model.
setup.py : A configuration file for packaging the trainer/ directory into
a Python source distribution that Vertex AI can use.
function/ : A directory of Python code for a
Cloud Run function that can receive and preprocess
prediction requests from a web browser, send them to Vertex AI,
process the prediction responses, and send them back to the browser.
webapp/ : A directory with code and markup for a web app that gets flower
classification predictions from Vertex AI.
What's next
Follow the next page of this tutorial to run a custom
training job on Vertex AI.
Previous
arrow_back
Overview
Next
Train a custom image classification model
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
