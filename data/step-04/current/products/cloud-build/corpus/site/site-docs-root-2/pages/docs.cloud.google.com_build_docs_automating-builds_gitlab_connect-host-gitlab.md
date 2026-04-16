---
title: "Connect to a GitLab host \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab
knowledge_key: corpus
source_id: site-docs-root-2
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/overview
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/gitlab/connect-host-gitlab
  title: "Connect to a GitLab host \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
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
Connect to a GitLab host
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect a GitLab host
to Cloud Build.
Before you begin
Enable the Cloud Build and Secret Manager APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Connect to a GitLab host
Before creating a host connection for your GitLab instance,
you must create personal access tokens in GitLab by completing the following steps:
Log into your GitLab instance.
On the GitLab page for your instance, click your avatar in the upper-right corner.
Click Edit profile .
On the left sidebar, select Access tokens .
You see the Personal Access Tokens page.
Create an access token with the api scope to use for connecting and disconnecting repositories.
Create an access token with the read_api scope
to ensure Cloud Build repositories can access source code in repositories.
Note: In addition to personal access tokens , you can also use project access tokens . If your GitLab version is 14.2 or higher,
you can also use group access tokens . If you use project or group access tokens, select the Maintainer role
to ensure a successful connection.
Console
To connect your GitLab host to Cloud Build:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
You see the Repositories page.
At the top of the page, select the 2nd gen tab.
In the project selector in the top bar, select your Google Cloud project.
Click Create host connection to connect a new host to Cloud Build.
On the left panel, select GitLab as your source provider.
In the Configure Connection section, enter the following information:
Region : Select a region for your connection.
Note: You must specify a region. Your connection cannot exist globally.
Name : Enter a name for your connection.
In the Host details section, go to GitLab host and select
GitLab.com .
Optional: If you want to manage the encryption keys used to encrypt the
access tokens for your GitLab repositories, then go to the
Encryption section and choose a Cloud Key Management Service key.
For more information, see
Enable customer-managed encryption keys for Secret Manager .
In the Personal access tokens section, enter the following information:
API access token : Enter the token with the api scope access. This
token is used for connecting and disconnecting repositories.
Read API access token : Enter the token with the read_api scope
access. Cloud Build triggers use this token to access source
code in repositories.
Click Connect .
After clicking the Connect button, your personal access tokens are
securely stored in Secret Manager .
Following host connection, Cloud Build also creates a webhook
secret on your behalf. You can view and manage your secrets on the
Secret Manager page .
You have now successfully created a GitLab connection.
gcloud
Prior to connecting your GitLab host to Cloud Build,
complete the following steps to store your credentials:
Store your token in Secret Manager .
Create a webhook secret in Secret Manager by running
the following command:
cat /proc/sys/kernel/random/uuid | tr -d '\n' | gcloud secrets create my-gle-webhook-secret --data-file=-
If you store your secrets in a different Google Cloud project than the one you plan
to use to create a host connection, enter the following command to grant your project
access to the Cloud Build service agent:
PN=$(gcloud projects describe PROJECT_ID --format="value(projectNumber)")
CLOUD_BUILD_SERVICE_AGENT="service- ${ PN } @gcp-sa-cloudbuild.iam.gserviceaccount.com"
gcloud projects add-iam-policy-binding PROJECT_ID \
--member="serviceAccount: ${ CLOUD_BUILD_SERVICE_AGENT } " \
--role="roles/secretmanager.admin"
Where:
PROJECT_ID is your Google Cloud project ID.
You can now proceed to connect your GitLab host to
Cloud Build.
Complete the following steps:
To connect your GitLab host to Cloud Build:
Enter the following command to create a GitLab connection:
gcloud builds connections create gitlab CONNECTION_NAME \
-- host - uri = HOST_URI \
-- project = PROJECT_ID \
-- region = REGION \
-- authorizer - token - secret - version = projects / PROJECT_ID / secrets / API_TOKEN / versions / SECRET_VERSION \
-- read - authorizer - token - secret - version = projects / PROJECT_ID / secrets / READ_TOKEN / versions / SECRET_VERSION \
-- webhook - secret - secret - version = projects / PROJECT_ID / secrets / WEBHOOK_SECRET / versions / SECRET_VERSION
Where:
CONNECTION_NAME is a name for your GitLab host connection in Cloud Build.
HOST_URI is the URI of your GitLab instance. For example, https://my-gle-server.net .
PROJECT_ID is your Google Cloud project ID.
REGION is the region for your connection.
API_TOKEN is the name of your token with api scope.
READ_TOKEN is the name of your token with read_api scope.
SECRET_VERSION is the version of your secret.
WEBHOOK_SECRET is your webhook secret.
You have now successfully created a GitLab connection.
Rotate old or expired GitLab access tokens
If your GitLab access token expires, then your Cloud Build host
connection is disconnected from its GitLab repository. As a result, you
will see errors in the following circumstances:
When you try to link a GitLab repository Cloud Build
connection, a
Failed to fetch repositories to link. Check that Cloud Build is still authorized to access data from the selected connection
message appears.
On the Triggers page, when you click Run , the Run trigger page
opens and shows a Failed to list branches. You can still enter one manually
message.
To rotate an old or expired token for your connection, do the following:
Find the secrets associated with your host connection:
Run the following command:
gcloud builds connections describe CONNECTION_PATH --region = REGION
Where:
CONNECTION_PATH is the path of your GitLab
host connection in Cloud Build, in the format
projects/ PROJECT_ID /locations/ REGION /connections/ CONNECTION_NAME .
REGION is the region for your connection.
In the output of the command, look for the values of your user token
fields. readAuthorizerCredential.userTokenSecretVersion
shows the Secret Manager name of the read_api
token, and authorizerCredential.userTokenSecretVersion
shows the Secret Manager name of the api
token. These names are stored as secrets in Secret Manager.
Rotate each access token in GitLab:
Go to the GitLab repository connected to your Cloud Build
host connection.
Follow the instructions in the GitLab documentation to
rotate an access token .
When you rotate a token, GitLab creates a new token with new
credentials and invalidates the previous version of that token. Your
rotated token has the same permissions and scope as the original token.
Copy the ID of your rotated token.
Create a new secret version for each token:
Open the Secret Manager page in the Google Cloud console:
Open the Secret Manager page
For each token that you rotated, find the secret name that you identified
in Step 1 and click
more_vert Actions ,
and then click Add new version .
Note: If you can't find your secret in the Secrets window, select
the Regional Secrets tab and look for your secret in the
Regional Secrets window.
In the Add new version window, enter
the ID of your rotated token and then click Add new version .
For more information, see
Access token expiration in the GitLab documentation.
What's next
Learn how to connect a GitLab repository .
Learn how to build and deploy your workloads to Google Cloud using Google-managed CI/CD components in your GitLab pipeline. See GitLab on Google Cloud .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
