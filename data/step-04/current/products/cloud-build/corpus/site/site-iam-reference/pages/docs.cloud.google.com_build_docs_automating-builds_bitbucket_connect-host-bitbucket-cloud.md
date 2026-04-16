---
title: "Connect to a Bitbucket Cloud host \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud
knowledge_key: corpus
source_id: site-iam-reference
source_type: site
entrypoint: https://docs.cloud.google.com/build/docs/iam-roles-permissions
source_metadata:
  url: https://docs.cloud.google.com/build/docs/automating-builds/bitbucket/connect-host-bitbucket-cloud
  title: "Connect to a Bitbucket Cloud host \_|\_ Cloud Build \_|\_ Google Cloud Documentation"
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
Connect to a Bitbucket Cloud host
Stay organized with collections
Save and categorize content based on your preferences.
This page explains how to connect a Bitbucket Cloud host
to Cloud Build.
Before you begin
Enable the Cloud Build, Secret Manager, and Compute Engine APIs.
Roles required to enable APIs
To enable APIs, you need the Service Usage Admin IAM
role ( roles/serviceusage.serviceUsageAdmin ), which
contains the serviceusage.services.enable permission. Learn how to grant
roles .
Enable the APIs
Ensure that the source code is in a Bitbucket Cloud repository.
Ensure that the Bitbucket Cloud source repository has either a Dockerfile or a
Cloud Build config file .
Install the Google Cloud CLI to use gcloud commands.
Required IAM permissions
To ensure that has the necessary
permissions to connect,
ask your administrator to grant the
Cloud Build Connection Admin ( cloudbuild.connectionAdmin )
IAM role to on your user account.
For more information about granting roles, see Manage access to projects, folders, and organizations .
Your administrator might also be able to give
the required permissions through custom
roles or other predefined
roles .
Create Bitbucket Cloud access tokens
Create the following two access tokens in Bitbucket Cloud:
Admin access token - for connecting and disconnecting
repositories.
Read access token - to allow Cloud Build to access your source
code.
To create these tokens, follow these steps:
Sign in to Bitbucket Cloud .
Follow the Bitbucket Cloud instructions to
create access tokens linked to your repository ,
project , or workspace .
Grant the following permissions:
Admin access token:
Repositories: Read and Admin
Pull Requests: Read
Webhooks: Read and Write
Read access token:
Repositories: Read
Note: some token types are only available in Bitbucket Premium. Learn more
about tokens in Bitbucket Cloud .
Copy your tokens for use in the following procedures.
Connect to a Bitbucket Cloud host
Console
Connect Cloud Build to your Bitbucket Cloud host by completing the
following steps:
Open the Repositories page in the Google Cloud console.
Open the Repositories page
You will see the Repositories page.
In the project selector, select your Google Cloud project.
At the top of the page, select the 2nd gen tab.
Click Create host connection to connect a new host to
Cloud Build.
On the left panel, select Bitbucket as your source provider.
In the Configure Connection section, enter the following information:
Region : Select a region for your connection.
Note: You must specify a region. Your connection cannot exist
globally.
Name : Enter a name for your connection.
In the Host details section, enter the following information:
Select Bitbucket Cloud as your host type.
Workspace : Enter the workspace ID for your Bitbucket
Cloud repository.
Optional: If you want to manage the encryption keys used to encrypt the
access tokens for your Bitbucket Cloud repositories, then go to the
Encryption section and choose a Cloud Key Management Service key.
For more information, see
Enable customer-managed encryption keys for Secret Manager .
In the Access tokens section, enter the following:
Admin access token : Enter your admin access token
created previously .
Read access token : Enter your read access token
created previously .
Click Connect .
The new connection appears in the Repositories page.
gcloud
Complete the following steps to store your credentials:
Store your access tokens in Secret Manager in your
Google Cloud project by running the following commands:
echo -n ADMIN_TOKEN | gcloud secrets create ADMIN_SECRET_NAME --data-file = -
echo -n READ_TOKEN | gcloud secrets create READ_SECRET_NAME --data-file = -
Where:
ADMIN_TOKEN is your admin access token.
ADMIN_SECRET_NAME is the name you want to give to
your admin access token secret in Secret Manager.
READ_TOKEN is your read access token.
READ_SECRET_NAME is the name you want to give to your
read access token secret in Secret Manager.
Create a webhook secret in Secret Manager
by running the following command, where WEBHOOK_SECRET_NAME is the name you want to give to your webhook secret:
echo -n ${ ex .(random-uuid) } | gcloud secrets create WEBHOOK_SECRET_NAME --data-file = -
If your secrets aren't all in the same project, grant access to your
Cloud Build service agent by running the following:
PN = $( gcloud projects describe PROJECT_ID --format = "value(projectNumber)" )
CLOUD_BUILD_SERVICE_ACCOUNT = "service- ${ PN } @gcp-sa-cloudbuild.iam.gserviceaccount.com"
gcloud secrets add-iam-policy-binding ADMIN_SECRET_NAME \
--member = "serviceAccount: ${ CLOUD_BUILD_SERVICE_ACCOUNT } " \
--role = "roles/secretmanager.secretAccessor"
gcloud secrets add-iam-policy-binding READ_SECRET_NAME \
--member = "serviceAccount: ${ CLOUD_BUILD_SERVICE_ACCOUNT } " \
--role = "roles/secretmanager.secretAccessor"
gcloud secrets add-iam-policy-binding WEBHOOK_SECRET_NAME \
--member = "serviceAccount: ${ CLOUD_BUILD_SERVICE_ACCOUNT } " \
--role = "roles/secretmanager.secretAccessor"
Where:
PROJECT_ID is your Google Cloud project ID .
ADMIN_SECRET_NAME is the name of your
admin token secret.
READ_SECRET_NAME is the name of your
read token secret.
WEBHOOK_SECRET_NAME is the name of your
webhook secret.
Connect Cloud Build to your Bitbucket Cloud host by using the
following command:
gcloud builds connections create bitbucket-cloud CONNECTION_NAME \
--workspace = WORKSPACE_ID \
--project = PROJECT_ID \
--region = REGION \
--authorizer-token-secret-version = projects/ PROJECT_ID /secrets/ ADMIN_SECRET_NAME /versions/latest \
--read-authorizer-token-secret-version = projects/ PROJECT_ID /secrets/ READ_SECRET_NAME /versions/latest \
--webhook-secret-secret-version = projects/ PROJECT_ID /secrets/ WEBHOOK_SECRET_NAME /versions/1
Where:
CONNECTION_NAME is the name you want to give to the connection to your Bitbucket Cloud host.
WORKSPACE_ID is the Workspace ID for your Bitbucket Cloud repository.
PROJECT_ID is your Google Cloud project ID .
REGION is the region for your host connection.
ADMIN_SECRET_NAME is the name of your admin token secret.
READ_SECRET_NAME is the name of your read access token secret.
WEBHOOK_SECRET_NAME is the name of your webhook secret.
Terraform
You can connect your Bitbucket Cloud host to Cloud Build using
Terraform.
In the following example, the code snippet does the following:
Configures the Terraform Google provider.
Creates a Secret Manager secret to store the Bitbucket tokens.
Grants necessary permissions to the Cloud Build service agent to
access secrets.
Creates a Bitbucket Cloud connection.
// Configure the Terraform Google provider
terraform {
required_providers {
google = {}
}
}
provider "google" {
project = " PROJECT_ID "
region = " REGION "
}
// Create secrets and grant permissions to the Cloud Build service agent
resource "google_secret_manager_secret" "admin-token-secret" {
project = " PROJECT_ID "
secret_id = " ADMIN_TOKEN_NAME "
replication {
auto {}
}
}
resource "google_secret_manager_secret_version" "admin-token-secret-version" {
secret = google_secret_manager_secret.admin-token-secret.id
secret_data = " ADMIN_TOKEN_VALUE "
}
resource "google_secret_manager_secret" "read-token-secret" {
project = " PROJECT_ID "
secret_id = " READ_TOKEN_NAME "
replication {
auto {}
}
}
resource "google_secret_manager_secret_version" "read-token-secret-version" {
secret = google_secret_manager_secret.read-token-secret.id
secret_data = " READ_TOKEN_VALUE "
}
resource "google_secret_manager_secret" "webhook-secret-secret" {
project = " PROJECT_ID "
secret_id = " WEBHOOK_SECRET_NAME "
replication {
auto {}
}
}
resource "google_secret_manager_secret_version" "webhook-secret-secret-version" {
secret = google_secret_manager_secret.webhook-secret-secret.id
secret_data = " WEBHOOK_SECRET_VALUE "
}
data "google_iam_policy" "p4sa-secretAccessor" {
binding {
role = "roles/secretmanager.secretAccessor"
members = [ "serviceAccount:service- PROJECT_NUMBER @gcp-sa-cloudbuild.iam.gserviceaccount.com" ]
}
}
resource "google_secret_manager_secret_iam_policy" "policy-pak" {
project = google_secret_manager_secret.admin-token-secret.project
secret_id = google_secret_manager_secret.admin-token-secret.secret_id
policy_data = data.google_iam_policy.p4sa-secretAccessor.policy_data
}
resource "google_secret_manager_secret_iam_policy" "policy-rpak" {
project = google_secret_manager_secret.read-token-secret.project
secret_id = google_secret_manager_secret.read-token-secret.secret_id
policy_data = data.google_iam_policy.p4sa-secretAccessor.policy_data
}
resource "google_secret_manager_secret_iam_policy" "policy-whs" {
project = google_secret_manager_secret.webhook-secret-secret.project
secret_id = google_secret_manager_secret.webhook-secret-secret.secret_id
policy_data = data.google_iam_policy.p4sa-secretAccessor.policy_data
}
// Create the connection and add the repository resource
resource "google_cloudbuildv2_connection" "my-connection" {
project = " PROJECT_ID "
location = " REGION "
name = " CONNECTION_NAME "
bitbucket_cloud_config {
workspace = " WORKSPACE_ID "
authorizer_credential {
user_token_secret_version = google_secret_manager_secret_version.admin-token-secret-version.id
}
read_authorizer_credential {
user_token_secret_version = google_secret_manager_secret_version.read-token-secret-version.id
}
webhook_secret_secret_version = google_secret_manager_secret_version.webhook-secret-secret-version.id
}
depends_on = [
google_secret_manager_secret_iam_policy.policy-pak ,
google_secret_manager_secret_iam_policy.policy-rpak ,
google_secret_manager_secret_iam_policy.policy-whs
]
}
Where:
PROJECT_ID is your Google Cloud project ID .
PROJECT_NUMBER is your Google Cloud project
number.
ADMIN_TOKEN_NAME is the name of your token with
webhook , repository , repository:admin , and pullrequest scope access.
ADMIN_TOKEN_VALUE is the value of your
ADMIN_TOKEN_NAME .
READ_TOKEN_NAME is the name of your token with
repository:read scope.
READ_TOKEN_VALUE is the value of your
READ_TOKEN_NAME .
WEBHOOK_SECRET_NAME is the name of your webhook secret.
WEBHOOK_SECRET_VALUE is the value of your
WEBHOOK_SECRET_NAME .
REGION is the region for
your connection.
CONNECTION_NAME is the name of your connection.
WORKSPACE_ID is the Workspace ID for your Bitbucket
Cloud repository.
Rotate old or expired Bitbucket Cloud access tokens
If your Bitbucket Cloud access token expires, then your Cloud Build host
connection is disconnected from its Bitbucket Cloud repository. As a result, you
will see errors in the following circumstances:
When you try to link a Bitbucket Cloud repository Cloud Build
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
CONNECTION_PATH is the path of your Bitbucket Cloud
host connection in Cloud Build, in the format
projects/ PROJECT_ID /locations/ REGION /connections/ CONNECTION_NAME .
REGION is the region for your connection.
In the output of the command, look for the values of your user token
fields. readAuthorizerCredential.userTokenSecretVersion
shows the Secret Manager name of the Read
token, and authorizerCredential.userTokenSecretVersion
shows the Secret Manager name of the Admin
token. These names are stored as secrets in Secret Manager.
Rotate each access token in Bitbucket Cloud:
Go to the Bitbucket Cloud repository connected to your Cloud Build
host connection.
Follow the instructions in the Bitbucket documentation to
rotate an access token .
When you rotate a token, Bitbucket Cloud creates a new token with new
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
For more information, see Access tokens and
Enhancing security in Bitbucket: Introducing expiry for access tokens
in the Bitbucket Cloud documentation.
What's next
Learn how to connect to a Bitbucket Cloud repository .
Learn how to view build results .
Learn how to perform blue/green deployments on Compute Engine .
Send feedback
Except as otherwise noted, the content of this page is licensed under the Creative Commons Attribution 4.0 License , and code samples are licensed under the Apache 2.0 License . For details, see the Google Developers Site Policies . Java is a registered trademark of Oracle and/or its affiliates.
Last updated 2026-04-14 UTC.
Need to tell us more?
[[["Easy to understand","easyToUnderstand","thumb-up"],["Solved my problem","solvedMyProblem","thumb-up"],["Other","otherUp","thumb-up"]],[["Hard to understand","hardToUnderstand","thumb-down"],["Incorrect information or sample code","incorrectInformationOrSampleCode","thumb-down"],["Missing the information/samples I need","missingTheInformationSamplesINeed","thumb-down"],["Other","otherDown","thumb-down"]],["Last updated 2026-04-14 UTC."],[],[]]
