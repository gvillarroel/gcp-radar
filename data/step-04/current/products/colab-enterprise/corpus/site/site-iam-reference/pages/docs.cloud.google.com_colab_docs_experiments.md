---
title: "Create an experiment \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/colab/docs/experiments
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/colab/docs/access-control
source_metadata:
  url: https://docs.cloud.google.com/colab/docs/experiments
  title: "Create an experiment \_|\_ Colab Enterprise \_|\_ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
AI and ML
Colab Enterprise
Guides
Send feedback
Stay organized with collections
Save and categorize content based on your preferences.
Create an experiment
This page shows you how to interact with Vertex AI Experiments
by using the side panel in Colab Enterprise.
To access Google Cloud services and APIs by running code in
your Colab Enterprise notebook, you can use the
credentials associated with your Google Account. To learn more, see
Access Google Cloud services and APIs .
The side panel is an additional way to interact with
Vertex AI Experiments without leaving the Colab Enterprise
interface.
The side panel appears to the right of an open notebook.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
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
Enable the Vertex AI, Dataform, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Required roles
To get the permissions that
you need to use the side panel in a Colab Enterprise notebook,
ask your administrator to grant you the
following IAM roles on the project:
Colab Enterprise User ( roles/aiplatform.colabEnterpriseUser )
Vertex AI User ( roles/aiplatform.user )
For more information about granting roles, see Manage access to projects, folders, and organizations .
You might also be able to get
the required permissions through custom
roles or other predefined
roles .
One or more of the required roles includes the dataform.repositories.list
permission. Users who are granted the dataform.repositories.list permission or the
Code Creator
( roles/dataform.codeCreator ) role in a project can list the
names of code assets in that project by using the Dataform API or the
Dataform command-line interface (CLI). Non-administrators using
BigQuery Studio can only see code assets that they created or that were
shared with them.
Vertex AI Experiments
Vertex AI Experiments helps you track and analyze different
model architectures, hyperparameters, and training environments by
letting you track the steps, inputs, and outputs of an experiment run.
To learn more, see Introduction to
Vertex AI Experiments .
Create and view an experiment
You can create and view the results of an experiment by using the
side panel in Colab Enterprise.
In the Google Cloud console, go to
the Colab Enterprise My notebooks page.
Go to My notebooks
In the Region menu, select the region that contains your notebook.
Click the notebook that you want to open. If you haven't created a notebook yet,
create a notebook .
To the right of your notebook, in the side panel, click the
Experiments button.
The side panel expands the Experiments tab.
Click the Insert sample code button.
Colab Enterprise adds code cells to your notebook for
interacting with an experiment.
In your notebook, find the code cell that stores parameter values.
You'll use these parameters to interact with
Vertex AI Experiments.
Update the values for the following parameters:
PROJECT_ID : The ID of the project that your
notebook is in.
REGION : The region that your notebook is in.
BUCKET_URI : A Cloud Storage
bucket URI, in the format gs:// BUCKET_NAME .
This can be an existing bucket, or you can create it when
you run the code. This bucket must be in the same project and region
as your Colab Enterprise notebook.
EXPERIMENT_NAME : The name of your experiment.
If your experiment doesn't exist, Vertex AI Experiments
creates one.
If you need to create your Cloud Storage bucket, find and
uncomment the following line of code:
# ! gcloud storage buckets create {BUCKET_URI} --location={REGION} --project={PROJECT_ID}
Run the code cells that the side panel added to your notebook.
After the last code cell runs, click the
View
experiment button that appears.
In the side panel, click the Runs tab or
Details tab to see information about your experiment.
To learn more, see
Create and
manage experiment runs .
The side panel shows information about your experiment runs.
You can create, manage, and delete runs by using
Vertex AI Experiments
in the Google Cloud console or through the Vertex AI API.
What's next
Learn more about
Vertex AI Experiments .
To find a notebook that can help you get your project started quickly,
see the notebook gallery .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
