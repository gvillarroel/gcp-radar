---
title: "Hello tabular data: Set up your project and environment \_|\_ Vertex AI \_\
  |\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/vertex-ai/docs/start/introduction-unified-platform
source_metadata:
  url: https://docs.cloud.google.com/vertex-ai/docs/tutorials/tabular-automl/setup
  title: "Hello tabular data: Set up your project and environment \_|\_ Vertex AI\
    \ \_|\_ Google Cloud Documentation"
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
Hello tabular data: Set up your project and environment
Stay organized with collections
Save and categorize content based on your preferences.
This tutorial walks you through the required steps to train and get predictions
from your tabular data model in the Google Cloud console.
If you plan to use the Vertex AI SDK for Python, make sure that the service account
initializing the client has the
Vertex AI Service Agent
( roles/aiplatform.serviceAgent ) IAM role.
For this part of the tutorial, you set up your Google Cloud project to use
Vertex AI and a Cloud Storage bucket that contains the documents
for training your AutoML model.
Set up your project and environment
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
Verify that billing is enabled for your Google Cloud project .
Open Cloud Shell .
Cloud Shell is an interactive shell environment
for Google Cloud that lets you manage your projects and resources from
your web browser.
Go to Cloud Shell
In the Cloud Shell, set the current project to your Google Cloud
project ID and store it in the projectid shell
variable:
gcloud config set project PROJECT_ID &&
projectid= PROJECT_ID &&
echo $projectid
Replace PROJECT_ID with your project ID. You can
locate your project ID in the Google Cloud console. For more information, see
Find your project ID .
Enable the IAM, Compute Engine, Notebooks, Cloud Storage, and Vertex AI APIs:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable iam.googleapis.com compute.googleapis.com notebooks.googleapis.com storage.googleapis.com aiplatform.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/aiplatform.user, roles/storage.admin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
The Vertex AI User ( roles/aiplatform.user ) IAM
role provides access to use all resources in Vertex AI. The Storage Admin
( roles/storage.admin ) role lets you store the document's
training dataset in Cloud Storage.
What's next
Follow the next page of this tutorial to
create a tabular dataset and train a classification model.
Previous
arrow_back
Overview
Next
Create a dataset and train an AutoML classification model
arrow_forward
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
