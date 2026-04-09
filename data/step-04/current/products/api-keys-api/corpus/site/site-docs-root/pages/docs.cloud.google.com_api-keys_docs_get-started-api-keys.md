---
title: "Getting started with API Keys API \_|\_ API Keys API Documentation \_|\_ Google\
  \ Cloud Documentation"
url: https://docs.cloud.google.com/api-keys/docs/get-started-api-keys
knowledge_key: corpus
source_id: site-docs-root
source_type: site
entrypoint: https://docs.cloud.google.com/api-keys/docs
source_metadata:
  url: https://docs.cloud.google.com/api-keys/docs/get-started-api-keys
  title: "Getting started with API Keys API \_|\_ API Keys API Documentation \_|\_\
    \ Google Cloud Documentation"
  fetched_via: http_bfs
  content_scope: primary
  content_type: text/html; charset=utf-8
  status_code: 200
---

Home
Documentation
Application development
API Keys API Documentation
Guides
Send feedback
Getting started with API Keys API
Stay organized with collections
Save and categorize content based on your preferences.
This page describes how to set up your local environment to experiment
with API Keys using the curl command.
Before you begin
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
Enable the API Keys API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable apikeys.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/serviceusage.apiKeysAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
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
Enable the API Keys API:
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which contains the
serviceusage.services.enable permission. Learn how to grant
roles .
gcloud services enable apikeys.googleapis.com
Grant roles to your user account. Run the following command once for each of the following
IAM roles:
roles/serviceusage.apiKeysAdmin
gcloud projects add-iam-policy-binding PROJECT_ID --member = "user: USER_IDENTIFIER " --role = ROLE
Replace the following:
PROJECT_ID : Your project ID.
USER_IDENTIFIER : The identifier for your user
account. For example, myemail@example.com .
ROLE : The IAM role that you grant to your user account.
Testing the API Keys API
Get the project number
for the project in which you enabled API Keys.
Define a convenient shell alias for calling the API:
alias gcurl='curl -H "Authorization: Bearer $(gcloud auth print-access-token)" -H "Content-Type: application/json"'
Make a request to get a list of API keys in your project:
gcurl https://apikeys.googleapis.com/v2/projects/ YOUR_PROJECT_NUMBER /locations/global/keys
On success, you get a response similar to the following:
{
"keys" : [
{
"name" : "projects/12345678/locations/global/keys/2885bf87-5b84-47fa-92af-08c3e9337349" ,
"displayName" : "API key 2" ,
"createTime" : "2019-05-29T22:07:22.036Z" ,
"uid" : "2885bf87-5b84-47fa-92af-08c3e9337349" ,
"updateTime" : "2019-05-29T22:07:22.058623Z" ,
"restrictions" : {
"androidKeyRestrictions" : {}
},
"etag" : "zHib8eXEMCxe4ayQEbIaZg=="
},
{
"name" : "projects/12345678/locations/global/keys/a4db08b7-5729-4ba9-8c08-f2df493465a1" ,
"displayName" : "API key 1" ,
"createTime" : "2019-05-29T22:06:58.844Z" ,
"uid" : "a4db08b7-5729-4ba9-8c08-f2df493465a1" ,
"updateTime" : "2019-05-29T22:06:58.855103Z" ,
"restrictions" : {
"androidKeyRestrictions" : {}
},
"etag" : "0L5KcPMGoNi53K5+FqPxiw=="
}
]
}
What's next
Creating and managing API keys
Getting information about API keys
Adding restrictions to API keys
Troubleshooting
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
