---
title: "Integrate with Vertex AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai
knowledge_key: corpus
source_id: site-docs-reference-required-3
source_type: site
entrypoint: https://docs.cloud.google.com/alloydb/docs/ai/data-agent-overview
source_metadata:
  url: https://docs.cloud.google.com/alloydb/docs/ai/configure-vertex-ai
  title: "Integrate with Vertex AI \_|\_ AlloyDB for PostgreSQL \_|\_ Google Cloud\
    \ Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Databases
AlloyDB for PostgreSQL
Guides
Send feedback
Integrate with Vertex AI
Stay organized with collections
Save and categorize content based on your preferences.
This page details how to set up the integration between AlloyDB for PostgreSQL
and Vertex AI, letting you issue queries that pass your data to
Vertex AI models.
These instructions are specific to using AlloyDB, and not
AlloyDB Omni. To instead integrate a local installation of
AlloyDB Omni using Vertex AI, see Install
AlloyDB Omni with AlloyDB AI .
For more information about using ML models with AlloyDB, see
Build generative AI applications using AlloyDB AI .
For more information about Vertex AI, see Introduction to
Vertex AI .
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
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
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
Enable the Vertex AI API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Install the Google Cloud CLI.
If you're using an external identity provider (IdP), you must first
sign in to the gcloud CLI with your federated identity .
To initialize the gcloud CLI, run the following command:
gcloud init
About the AlloyDB service agent
When you use AlloyDB with other Google Cloud services, AlloyDB uses an Identity and Access Management (IAM) service agent to authenticate to those services. This service agent is an IAM principal that AlloyDB controls. You grant IAM roles to this service agent to let it access other Google Cloud services on your behalf.
Grant Vertex AI user role to the AlloyDB service agent
To enable database integration with Vertex AI, you grant the AlloyDB service agent the Vertex AI User role. This lets the AlloyDB service agent access Vertex AI on your behalf.
Note: To grant IAM roles, you must have the resourcemanager.projects.setiamPolicy permission. The Owner and Project IAM Admin roles include this permission. The AlloyDB Admin role also includes the permissions required to grant the Vertex AI User role to the service agent. If you don't have the necessary permissions, contact your organization's administrator.
Follow these steps to grant the AlloyDB service agent the Vertex AI User role:
Add Vertex AI permissions to the AlloyDB service
agent for the project where the AlloyDB database's cluster is
located:
Console
Go to the Welcome page in the Google Cloud console, and copy the project number of the project that has AlloyDB clusters or instances. You will use this project number in the next steps.
Go to Welcome
In the Google Cloud console, go to the IAM page.
Go to IAM
Select the project that needs to call Vertex AI endpoints.
Enable Include Google-provided role grants .
Click person_add Grant Access .
In the New principals field, enter the following:
service- PROJECT_NUMBER @gcp-sa-alloydb.iam.gserviceaccount.com
Replace PROJECT_NUMBER with the project number.
In the Role field, enter Vertex AI User .
Click Save .
gcloud
To use the gcloud CLI, you can
install and initialize the Google Cloud CLI, or you
can use Cloud Shell .
gcloud projects add-iam-policy-binding PROJECT_ID
--member="serviceAccount:service- PROJECT_NUMBER @gcp-sa-alloydb.iam.gserviceaccount.com"
--role="roles/aiplatform.user"
Replace the following:
PROJECT_ID : The ID of the project that has the Vertex AI endpoint.
PROJECT_NUMBER : The project number of the project that has
AlloyDB clusters or instances.
Note: The policy change takes effect within 60 seconds to 7 minutes.
Verify installed extension
Verify if the google_ml_integration is installed in the database
that contains the data that you want to run predictions on:
Console
In the Google Cloud console, go to the Clusters page.
Go to Clusters
To display the cluster Overview page, click the name of the AlloyDB cluster in the Resource name column.
In the navigation menu, click AlloyDB Studio .
On the Sign in to AlloyDB Studio page, authenticate using the name of your database, username, and password.
Note: AlloyDB Studio connects to the primary instance of your cluster, which is where extension management and initial predictions are handled, even if you intend to invoke predictions from read pool instances later.
In the Editor 1 tab, complete the following:
Verify the google_ml_integration extension version 1.4.2 or later is installed:
SELECT extversion FROM pg_extension WHERE extname = 'google_ml_integration' ;
Click Run . Wait for the extension version to display in the Results pane.
psql
Connect a psql client to the cluster's primary instance, as
described in Connect a psql client to an instance .
Note: You must connect to the primary instance
even if you intend to invoke predictions while connected to a read pool
instance.
At the psql command prompt, connect to the database:
\ c DB_NAME
Replace DB_NAME with the name of the database on which you want
to install the extension.
Verify the google_ml_integration extension version 1.4.2 or later is installed:
SELECT extversion FROM pg_extension WHERE extname = 'google_ml_integration' ;
What's next
Work with embeddings
Invoke predictions
Vertex AI quotas and limits
Call remote model endpoints
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-10 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-10 UTC."],[],[]]
