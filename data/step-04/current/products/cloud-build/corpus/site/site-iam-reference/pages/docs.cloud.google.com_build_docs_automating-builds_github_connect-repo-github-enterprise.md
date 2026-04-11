---
title: "Connect to a GitHub Enterprise repository \_|\_ Cloud Build \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/github/connect-repo-github-enterprise
  title: "Connect to a GitHub Enterprise repository \_|\_ Cloud Build \_|\_ Google\
    \ Cloud Documentation"
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
Connect to a GitHub Enterprise repository
Stay organized with collections
Save and categorize content based on your preferences.
1st gen
2nd gen
This page explains how to connect a GitHub Enterprise repository to Cloud Build. To learn more about Cloud Build repositories, see Cloud Build repositories .
Before you begin
Enable the Cloud Build and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Follow the instructions to connect a GitHub Enterprise host .
Ensure you have administrator access on repositories where you want to enable GitHub Enterprise triggers.
Connect to a GitHub Enterprise repository
Console
To connect a GitHub Enterprise repository to a host connection, complete the following steps:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
You see the Repositories page.
At the top of the page, select the 2nd gen tab.
Click Link Repository to link repositories from your connection.
You see the Link repositories panel.
In the Link Repositories panel, enter the following information:
Connection : Select a connection from the drop-down menu.
Repository : Select a repository to link to your connection.
Repository Name : Enter a name for your repository.
Generated : Select this option for Cloud Build to automatically
generated repository names on your behalf for selected repositories.
Manual : Select this option to manually specify names for your
selected repositories.
If you select Manual , you can modify the names for your
selected repositories in the Repository names section.
Note: If you're a collaborator, you need administrator permissions in GitHub to see the repository.
Click Link to link your repository to your connection.
You have now successfully linked your GitHub Enterprise repository to your connection.
gcloud
To add a GitHub Enterprise repository to your connection, enter the following
command:
gcloud builds repositories create REPO_NAME \
-- remote - uri = REPO_URI \
-- connection = CONNECTION_NAME -- region = REGION
Where:
REPO_NAME is the name of your repository.
REPO_URI is the link to your GitHub repository.
CONNECTION_NAME is the name given to the GitHub Enterprise host connection created in Cloud Build from Connect to a GitHub Enterprise host .
REGION is the region for your connection.
Note: If you're a collaborator, you need administrator permissions in GitHub to connect to the repository.
Terraform
To add a GitHub Enterprise repository to your connection, add the following
code snippet to your Terraform configuration:
resource "google_cloudbuildv2_repository" "my-repository" {
project = " PROJECT_ID "
name = " REPO_NAME "
location = : REGION "
parent_connection = google_cloudbuildv2_connection.my-connection.name
remote_uri = " REMOTE_URI '
}
Where:
PROJECT_ID is your Google Cloud project ID.
REPO_NAME is the name of your GitHub repository.
REGION is the region for your connection.
URI is the remote URI of your repository. For example,
https://github.com/myuser/myrepo.git .
Note: If you're a collaborator, you need administrator permissions in GitHub to connect to the repository.
Next steps
Learn how to build repositories from GitHub Enterprise .
Learn how to build repositories from GitHub Enterprise in a private network .
Learn how to perform blue-green deployments on Compute Engine .
Learn how to specify additional repositories as dependencies to your build.
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-08 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-08 UTC."],[],[]]
