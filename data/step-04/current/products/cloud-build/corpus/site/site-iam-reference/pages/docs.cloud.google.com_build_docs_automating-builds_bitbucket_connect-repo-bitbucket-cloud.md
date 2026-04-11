---
title: "Connect to a Bitbucket Cloud repository \_|\_ Cloud Build \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-cloud
  title: "Connect to a Bitbucket Cloud repository \_|\_ Cloud Build \_|\_ Google Cloud\
    \ Documentation"
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
Connect to a Bitbucket Cloud repository
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect a Bitbucket Cloud repository
to Cloud Build.
Before you begin
Enable the Cloud Build API.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the API
Follow instructions in Connect to a Bitbucket Cloud host .
Connect to Bitbucket Cloud repositories
Console
Connect Cloud Build to your Bitbucket Cloud repository by
doing the following steps:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
You will see the Repositories page.
In the project selector, select your Google Cloud project.
Select the 2nd gen tab.
Click Link repository to connect a new host to Cloud Build.
You will see the Link repositories side panel.
Connection : Select a host connection from the drop-down menu.
Repository : Select a repository from the drop-down menu.
Repository Resource Name : This step creates resource names for the
linked repositories.
Generated : Select this option for Cloud Build to
automatically generate repository resource names on your behalf
for selected repositories.
Manual : Select this option to manually specify repository
resource names.
If you select Manual , then you can modify the names for your
selected repositories in the Repository names section.
Click Link .
gcloud
Connect to your Bitbucket Cloud repository:
gcloud builds repositories create REPO_NAME \
--remote-uri = https://bitbucket.org/ WORKSPACE / REPOSITORY .git \
--connection = CONNECTION_NAME --region = REGION --project = PROJECT_ID
Where:
REPO_NAME is the name of your repository.
WORKSPACE is the workspace ID for your repository.
REPOSITORY is the name of the repository.
REGION is the region for your connection.
CONNECTION_NAME is the name given to the Bitbucket Cloud host connection created in Cloud Build from Connect to a Bitbucket Cloud host .
PROJECT_ID is your Google Cloud project ID .
Terraform
To add a Bitbucket Cloud repository to your connection, add the following
code snippet to your Terraform configuration:
resource "google_cloudbuildv2_repository" "my-repository" {
project = " PROJECT_ID "
name = " REPO_NAME "
location = " REGION "
parent_connection = google_cloudbuildv2_connection. RESOURCE_NAME .name
remote_uri = "https://bitbucket.org/ WORKSPACE_ID / REPO_NAME .git"
}
Where:
PROJECT_ID is your Google Cloud project ID .
WORKSPACE_ID is the workspace ID for your repository.
REPO_NAME is the name of your repository.
REGION is the region for your connection.
RESOURCE_NAME is the name of the
google_cloudbuildv2_connection resource. For example, my-connection from
the Terraform example in Connect to a Bitbucket Cloud host .
What's next
Learn how to build repositories from a Bitbucket Cloud .
Learn how to view build results .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
