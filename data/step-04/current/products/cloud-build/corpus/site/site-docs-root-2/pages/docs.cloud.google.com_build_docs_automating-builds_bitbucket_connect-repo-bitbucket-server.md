---
title: "Connect to a Bitbucket Server repository \_|\_ Cloud Build \_|\_ Google Cloud\
  \ Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-repo-bitbucket-server
  title: "Connect to a Bitbucket Server repository \_|\_ Cloud Build \_|\_ Google\
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
Connect to a Bitbucket Server repository
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect to a Bitbucket Server repository
to Cloud Build.
Before you begin
Enable the Cloud Build, Secret Manager, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Follow the instructions to connect a Bitbucket Server host before connecting
repositories.
Connecting to a Bitbucket Server repository
Console
To connect a Bitbucket Server repository to Cloud Build
using the Google Cloud console:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
At the top of the page, select the 1st gen tab.
Click Connect Repository .
Select Bitbucket Server .
You will see the Connect Repository panel. Complete the following
steps to connect your Bitbucket Server repository:
Region : Select a region your connection is in.
Under Select source code management provider , select Bitbucket Server .
Host connection : Select the name of your host connection from the drop-down menu.
Click Continue .
Under Select Repository , select the Bitbucket Server repositories
you wish to connect to Cloud Build.
Once you have selected your Bitbucket Server account and repositories,
read the consent disclaimer and select the checkbox next to it to indicate
that you accept the presented terms.
Click Connect to connect your repositories.
When a repository is connected, Cloud Build
configures a webhook on the repository
in your Bitbucket Server instance. The repository
then sends webhooks to invoke the
corresponding Bitbucket Server triggers when
you make changes to your repository. A
repository can also be connected multiple
times with multiple host connections.
To learn how to manage webhooks, see Manage webhooks .
To locate the webhook, you need the webhook ID. The webhook ID
for each connected repository can be found in the BitbucketServerConfig .
Enter the following command to retrieve the webhook ID:
gcloud alpha builds enterprise-config bitbucketserver describe CONFIG_NAME --region= REGION
Where:
CONFIG_NAME is the name of the Bitbucket Server config
REGION is the region of the Bitbucket Server host connection
Click Done . Optionally, click Create a trigger to create a trigger.
API
To connect your Bitbucket Server repository to Cloud Build
using the API, complete the following steps:
Use the following JSON template below to connect your repository:
{
"parent": "projects/ PROJECT_NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET_SERVER_CONFIG_NAME ",
"requests": {
"parent": "projects/ PROJECT_NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET_SERVER_CONFIG_NAME ",
"bitbucketServerConnectedRepository": {
"parent": "projects/ PROJECT_NUMBER /locations/ REGION /bitbucketServerConfigs/ BITBUCKET_SERVER_CONFIG_NAME ",
"repo": {
"projectKey": " PROJECT_KEY ",
"repoSlug": " REPO_SLUG "
}
}
}
}
Where:
PROJECT_NUMBER is the project number of your
Cloud project.
REGION is the region associated with your Bitbucket Server configuration.
BITBUCKET_SERVER_CONFIG_NAME is the name of your
Bitbucket Server configuration.
PROJECT_KEY is the key of your Bitbucket Server project.
If you want to connect a personal repository, your project key should
contain the tilde ( ~ ) symbol before your username. For example,
~${USERNAME} . The complete URL for a host repository may look like
https://${HOST_URI}/projects/~${USER_NAME}/repos/${REPO_SLUG} .
REPO_SLUG is the slug of your
Bitbucket Server repository.
Enter the following curl command in your terminal:
curl - X POST - H "Authorization: Bearer " $ ( gcloud auth print - access - token ) - H "Content-Type: application/json; charset=utf-8" - H "x-goog-user-project: PROJECT_NUMBER " https : // cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / locations / REGION / bitbucketServerConfigs / BITBUCKET_SERVER_CONFIG_NAME / connectedRepositories : batchCreate - d @requests . json
Where:
PROJECT_NUMBER is your Cloud project number.
PROJECT_ID is your Cloud project ID.
REGION is the region associated with your Bitbucket Server configuration.
BITBUCKET_SERVER_CONFIG_NAME is the name of your Bitbucket Server configuration.
If successful, the response body contains a newly created instance of Operation .
Enter the following curl command in your terminal:
curl -X GET -H "Authorization: Bearer " $( gcloud auth print-access-token ) -H "Content-Type: application/json; charset=utf-8" -H "x-goog-user-project: PROJECT_NUMBER " https :// cloudbuild . googleapis . com / v1 / projects / PROJECT_ID / locations / REGION / operations / OPERATION_ID
Where:
PROJECT_NUMBER is your Cloud project number.
PROJECT_ID is your Cloud project ID.
REGION is the region associated with your Bitbucket Server configuration.
OPERATION_ID is the ID of your Bitbucket Server configuration creation operation.
You can find the Operation ID in the name field of your response. The format of the name field in your response
looks like the following: projects/project-id/locations/region/operations/operation-id .
You may need to keep running the GetOperation API command until the response contains done: true , which indicates the operation is completed. If the Bitbucket Server repository is connected successfully, you can see the connected repository in the response.bitbucketServerConnectedRepositories field. Otherwise, see the error field for a detailed error report.
What's next
Learn how to build repositories from Bitbucket Server .
Learn how to build repositories from Bitbucket Server in a private network .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
